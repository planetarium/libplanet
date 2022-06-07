using System;
using System.Collections.Immutable;
using Bencodex.Types;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
using Libplanet.Blocks;
using Libplanet.Consensus;
using Libplanet.Crypto;
using Libplanet.Store;
using Libplanet.Store.Trie;
using Libplanet.Tests.Common.Action;
using Xunit;

namespace Libplanet.Tests.Blockchain
{
    public partial class BlockChainTest
    {
        [Fact]
        public void ValidateNextBlock()
        {
            Block<DumbAction> validNextBlock = new BlockContent<DumbAction>
            {
                Index = 1,
                Difficulty = 1024,
                TotalDifficulty = _fx.GenesisBlock.TotalDifficulty + 1024,
                PublicKey = _fx.Miner.PublicKey,
                PreviousHash = _fx.GenesisBlock.Hash,
                Timestamp = _fx.GenesisBlock.Timestamp.AddDays(1),
                Transactions = _emptyTransaction,
            }.Mine(_fx.GetHashAlgorithm(1)).Evaluate(_fx.Miner, _blockChain);
            _blockChain.Append(validNextBlock);
            Assert.Equal(_blockChain.Tip, validNextBlock);
        }

        [Fact]
        private void ValidateNextBlockProtocolVersion()
        {
            Block<DumbAction> block1 = new BlockContent<DumbAction>
            {
                Index = 1,
                Difficulty = 1024,
                TotalDifficulty = _fx.GenesisBlock.TotalDifficulty + 1024,
                PublicKey = _fx.Miner.PublicKey,
                PreviousHash = _fx.GenesisBlock.Hash,
                Timestamp = _fx.GenesisBlock.Timestamp.AddDays(1),
                Transactions = _emptyTransaction,
                ProtocolVersion = _blockChain.Tip.ProtocolVersion,
            }.Mine(_fx.GetHashAlgorithm(1)).Evaluate(_fx.Miner, _blockChain);
            _blockChain.Append(block1);

            Block<DumbAction> block2 = new BlockContent<DumbAction>
            {
                Index = 2,
                Difficulty = 1024,
                TotalDifficulty = block1.TotalDifficulty + 1024,
                PublicKey = _fx.Miner.PublicKey,
                Miner = _fx.Miner.ToAddress(),
                PreviousHash = block1.Hash,
                Timestamp = _fx.GenesisBlock.Timestamp.AddDays(1),
                Transactions = _emptyTransaction,
                ProtocolVersion = _blockChain.Tip.ProtocolVersion - 1,
            }.Mine(_fx.GetHashAlgorithm(2)).Evaluate(_fx.Miner, _blockChain);

            Assert.Throws<InvalidBlockProtocolVersionException>(() => _blockChain.Append(block2));

            Assert.Throws<InvalidBlockProtocolVersionException>(() =>
            {
                Block<DumbAction> block3 = new BlockContent<DumbAction>
                {
                    Index = 2,
                    Difficulty = 1024,
                    TotalDifficulty = block1.TotalDifficulty + 1024,
                    PublicKey = _fx.Miner.PublicKey,
                    PreviousHash = block1.Hash,
                    Timestamp = _fx.GenesisBlock.Timestamp.AddDays(1),
                    Transactions = _emptyTransaction,
                    ProtocolVersion = BlockMetadata.CurrentProtocolVersion + 1,
                }.Mine(_fx.GetHashAlgorithm(2)).Evaluate(_fx.Miner, _blockChain);
                _blockChain.Append(block3);
            });
        }

        [Fact]
        private void ValidateNextBlockInvalidPreviousHash()
        {
            _blockChain.Append(_validNext);

            long difficulty = _policy.GetNextBlockDifficulty(_blockChain);
            Block<DumbAction> invalidPreviousHashBlock = new BlockContent<DumbAction>
            {
                Index = 2,
                Difficulty = difficulty,
                TotalDifficulty = _validNext.TotalDifficulty + difficulty,
                PublicKey = _fx.Miner.PublicKey,
                // Wrong PreviousHash for test; it should be _validNext.Hash:
                PreviousHash = _validNext.PreviousHash,
                Timestamp = _validNext.Timestamp.AddDays(1),
                Transactions = _emptyTransaction,
            }.Mine(_fx.GetHashAlgorithm(2)).Evaluate(_fx.Miner, _blockChain);
            Assert.Throws<InvalidBlockPreviousHashException>(() =>
                    _blockChain.Append(invalidPreviousHashBlock));
        }

        [Fact]
        private void ValidateNextBlockInvalidTimestamp()
        {
            _blockChain.Append(_validNext);

            long difficulty = _policy.GetNextBlockDifficulty(_blockChain);
            Block<DumbAction> invalidPreviousTimestamp = new BlockContent<DumbAction>
            {
                Index = 2,
                Difficulty = difficulty,
                TotalDifficulty = _validNext.TotalDifficulty + difficulty,
                PublicKey = _fx.Miner.PublicKey,
                PreviousHash = _validNext.Hash,
                Timestamp = _validNext.Timestamp.AddSeconds(-1),
                Transactions = _emptyTransaction,
            }.Mine(_fx.GetHashAlgorithm(2)).Evaluate(_fx.Miner, _blockChain);
            Assert.Throws<InvalidBlockTimestampException>(() =>
                    _blockChain.Append(invalidPreviousTimestamp));
        }

        [Fact]
        private void ValidateNextBlockInvalidStateRootHash()
        {
            IKeyValueStore stateKeyValueStore = new MemoryKeyValueStore();
            var policy = new BlockPolicy<DumbAction>(
                blockInterval: TimeSpan.FromMilliseconds(3 * 60 * 60 * 1000)
            );
            var stateStore = new TrieStateStore(stateKeyValueStore);
            IStore store = new MemoryStore();
            var genesisBlock = TestUtils.MineGenesis<DumbAction>(
                policy.GetHashAlgorithm,
                TestUtils.GenesisMiner.PublicKey
            ).Evaluate(TestUtils.GenesisMiner, policy.BlockAction, stateStore);
            store.PutBlock(genesisBlock);
            Assert.NotNull(store.GetStateRootHash(genesisBlock.Hash));

            var chain1 = new BlockChain<DumbAction>(
                policy,
                new VolatileStagePolicy<DumbAction>(),
                store,
                stateStore,
                genesisBlock
            );

            Block<DumbAction> block1 = new BlockContent<DumbAction>
            {
                Index = 1,
                Difficulty = 1024L,
                TotalDifficulty = genesisBlock.TotalDifficulty + 1024,
                PublicKey = TestUtils.GenesisMiner.PublicKey,
                PreviousHash = genesisBlock.Hash,
                Timestamp = genesisBlock.Timestamp.AddSeconds(1),
                Transactions = _emptyTransaction,
            }.Mine(policy.GetHashAlgorithm(1)).Evaluate(TestUtils.GenesisMiner, chain1);

            var policyWithBlockAction = new BlockPolicy<DumbAction>(
                new SetStatesAtBlock(default, (Text)"foo", 1),
                policy.BlockInterval
            );
            var chain2 = new BlockChain<DumbAction>(
                policyWithBlockAction,
                new VolatileStagePolicy<DumbAction>(),
                store,
                stateStore,
                genesisBlock
            );
            Assert.Throws<InvalidBlockStateRootHashException>(() => chain2.Append(block1));
        }

        [Fact]
        private void ValidateNextBlockInvalidLastCommit()
        {
            var validatorA = new PrivateKey();
            var validatorB = new PrivateKey();
            var validatorC = new PrivateKey();
            var invalidValidator = new PrivateKey();
            var voteA = new Vote(
                _validNext.Index,
                0,
                _validNext.Hash,
                _validNext.Timestamp,
                validatorA.PublicKey,
                VoteFlag.Commit,
                null).Sign(validatorA);
            var voteB = new Vote(
                _validNext.Index,
                0,
                _validNext.Hash,
                _validNext.Timestamp,
                validatorB.PublicKey,
                VoteFlag.Commit,
                null).Sign(validatorB);
            var voteC = new Vote(
                _validNext.Index,
                0,
                _validNext.Hash,
                _validNext.Timestamp,
                validatorC.PublicKey,
                VoteFlag.Commit,
                null).Sign(validatorC);
            _blockChain.Append(_validNext);

            long difficulty = _policy.GetNextBlockDifficulty(_blockChain);

            // Height of the last commit is invalid.
            var invalidHeightVoteSet = new VoteSet(
                0,
                0,
                _validNext.Hash,
                new[] { validatorA.PublicKey, validatorB.PublicKey, validatorC.PublicKey }
            );
            invalidHeightVoteSet.Add(invalidHeightVoteSet.Votes[0].Sign(validatorA));
            invalidHeightVoteSet.Add(invalidHeightVoteSet.Votes[1].Sign(validatorB));
            invalidHeightVoteSet.Add(invalidHeightVoteSet.Votes[2].Sign(validatorC));
            var invalidHeightLastCommit = new BlockCommit(
                0,
                0,
                _validNext.Hash,
                new[] { voteA, voteB, voteC }.ToImmutableArray());
            Block<DumbAction> invalidHeightLastCommitBlock = new BlockContent<DumbAction>
            {
                Index = 2,
                Difficulty = difficulty,
                TotalDifficulty = _validNext.TotalDifficulty + difficulty,
                PublicKey = _fx.Miner.PublicKey,
                PreviousHash = _validNext.Hash,
                Timestamp = _validNext.Timestamp.AddSeconds(1),
                Transactions = _emptyTransaction,
                LastCommit = invalidHeightLastCommit,
            }.Mine(_fx.GetHashAlgorithm(2)).Evaluate(_fx.Miner, _blockChain);
            Assert.Throws<InvalidBlockLastCommitException>(() =>
                _blockChain.Append(invalidHeightLastCommitBlock));

            // BlockHash of the last commit is invalid.
            var invalidBlockHashLastCommit = new BlockCommit(
                _validNext.Index,
                0,
                _fx.Hash1,
                new[] { voteA, voteB, voteC }.ToImmutableArray());
            Block<DumbAction> invalidBlockHashLastCommitBlock = new BlockContent<DumbAction>
            {
                Index = 2,
                Difficulty = difficulty,
                TotalDifficulty = _validNext.TotalDifficulty + difficulty,
                PublicKey = _fx.Miner.PublicKey,
                PreviousHash = _validNext.Hash,
                Timestamp = _validNext.Timestamp.AddSeconds(1),
                Transactions = _emptyTransaction,
                LastCommit = invalidBlockHashLastCommit,
            }.Mine(_fx.GetHashAlgorithm(2)).Evaluate(_fx.Miner, _blockChain);
            Assert.Throws<InvalidBlockLastCommitException>(() =>
                _blockChain.Append(invalidBlockHashLastCommitBlock));

            // Some of the vote's signature are invalid.
            var invalidVoteSignatureLastCommit = new BlockCommit(
                _validNext.Index,
                0,
                _validNext.Hash,
                new[]
                {
                    voteA,
                    voteB,
                    new Vote(
                        _validNext.Index,
                        0,
                        _validNext.Hash,
                        _validNext.Timestamp,
                        validatorC.PublicKey,
                        VoteFlag.Commit,
                        null).Sign(invalidValidator),
                }.ToImmutableArray());
            Block<DumbAction> invalidVoteSignatureLastCommitBlock = new BlockContent<DumbAction>
            {
                Index = 2,
                Difficulty = difficulty,
                TotalDifficulty = _validNext.TotalDifficulty + difficulty,
                PublicKey = _fx.Miner.PublicKey,
                PreviousHash = _validNext.Hash,
                Timestamp = _validNext.Timestamp.AddSeconds(1),
                Transactions = _emptyTransaction,
                LastCommit = invalidVoteSignatureLastCommit,
            }.Mine(_fx.GetHashAlgorithm(2)).Evaluate(_fx.Miner, _blockChain);
            Assert.Throws<InvalidBlockLastCommitException>(() =>
                _blockChain.Append(invalidVoteSignatureLastCommitBlock));

            // Some of the vote's height are invalid.
            var invalidVoteHeightLastCommit = new BlockCommit(
                _validNext.Index,
                0,
                _validNext.Hash,
                new[]
                {
                    voteA,
                    voteB,
                    new Vote(
                        _validNext.Index + 1,
                        0,
                        _validNext.Hash,
                        _validNext.Timestamp,
                        validatorC.PublicKey,
                        VoteFlag.Commit,
                        null).Sign(validatorC),
                }.ToImmutableArray());
            Block<DumbAction> invalidVoteHeightLastCommitBlock = new BlockContent<DumbAction>
            {
                Index = 2,
                Difficulty = difficulty,
                TotalDifficulty = _validNext.TotalDifficulty + difficulty,
                PublicKey = _fx.Miner.PublicKey,
                PreviousHash = _validNext.Hash,
                Timestamp = _validNext.Timestamp.AddSeconds(1),
                Transactions = _emptyTransaction,
                LastCommit = invalidVoteHeightLastCommit,
            }.Mine(_fx.GetHashAlgorithm(2)).Evaluate(_fx.Miner, _blockChain);
            Assert.Throws<InvalidBlockLastCommitException>(() =>
                _blockChain.Append(invalidVoteHeightLastCommitBlock));

            // Signature can be null for null or unknown votes.
            var validLastCommit = new BlockCommit(
                _validNext.Index,
                0,
                _validNext.Hash,
                new[]
                {
                    voteA,
                    new Vote(
                        _validNext.Index,
                        0,
                        _validNext.Hash,
                        _validNext.Timestamp,
                        validatorB.PublicKey,
                        VoteFlag.Null,
                        null),
                    new Vote(
                        _validNext.Index,
                        0,
                        _validNext.Hash,
                        _validNext.Timestamp,
                        validatorC.PublicKey,
                        VoteFlag.Unknown,
                        null),
                }.ToImmutableArray());
            Block<DumbAction> validLastCommitBlock = new BlockContent<DumbAction>
            {
                Index = 2,
                Difficulty = difficulty,
                TotalDifficulty = _validNext.TotalDifficulty + difficulty,
                PublicKey = _fx.Miner.PublicKey,
                PreviousHash = _validNext.Hash,
                Timestamp = _validNext.Timestamp.AddSeconds(1),
                Transactions = _emptyTransaction,
                LastCommit = validLastCommit,
            }.Mine(_fx.GetHashAlgorithm(2)).Evaluate(_fx.Miner, _blockChain);
            _blockChain.Append(validLastCommitBlock);
        }
    }
}
