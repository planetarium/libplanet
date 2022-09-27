using System;
using System.Collections.Immutable;
using System.Linq;
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
                PublicKey = _fx.Miner.PublicKey,
                PreviousHash = _fx.GenesisBlock.Hash,
                Timestamp = _fx.GenesisBlock.Timestamp.AddDays(1),
                Transactions = _emptyTransaction,
            }.Propose().Evaluate(_fx.Miner, _blockChain);
            _blockChain.Append(validNextBlock);
            Assert.Equal(_blockChain.Tip, validNextBlock);
        }

        [Fact]
        public void ValidateNextBlockLastCommitNullAtIndexOne()
        {
            Block<DumbAction> validNextBlock = new BlockContent<DumbAction>
            {
                Index = 1,
                PublicKey = _fx.Miner.PublicKey,
                PreviousHash = _fx.GenesisBlock.Hash,
                Timestamp = _fx.GenesisBlock.Timestamp.AddDays(1),
                Transactions = _emptyTransaction,
                LastCommit = null,
            }.Propose().Evaluate(_fx.Miner, _blockChain);
            _blockChain.Append(validNextBlock);
            Assert.Equal(_blockChain.Tip, validNextBlock);
        }

        [Fact]
        public void ValidateNextBlockLastCommitUpperIndexOne()
        {
            Block<DumbAction> block1 = new BlockContent<DumbAction>
            {
                Index = 1,
                PublicKey = _fx.Miner.PublicKey,
                PreviousHash = _fx.GenesisBlock.Hash,
                Timestamp = _fx.GenesisBlock.Timestamp.AddDays(1),
                Transactions = _emptyTransaction,
                LastCommit = null,
            }.Propose().Evaluate(_fx.Miner, _blockChain);
            _blockChain.Append(block1);

            var blockCommit = TestUtils.CreateLastCommit(block1.Hash, 1, 0);
            Block<DumbAction> block2 = new BlockContent<DumbAction>
            {
                Index = 2,
                PublicKey = _fx.Miner.PublicKey,
                PreviousHash = block1.Hash,
                Timestamp = _fx.GenesisBlock.Timestamp.AddDays(1),
                Transactions = _emptyTransaction,
                LastCommit = blockCommit,
            }.Propose().Evaluate(_fx.Miner, _blockChain);
            _blockChain.Append(block2);
            Assert.Equal(_blockChain.Tip, block2);
        }

        [Fact]
        public void ValidateNextBlockLastCommitNullLacksCommits()
        {
            Block<DumbAction> block1 = new BlockContent<DumbAction>
            {
                Index = 1,
                PublicKey = _fx.Miner.PublicKey,
                PreviousHash = _fx.GenesisBlock.Hash,
                Timestamp = _fx.GenesisBlock.Timestamp.AddDays(1),
                Transactions = _emptyTransaction,
                LastCommit = null,
            }.Propose().Evaluate(_fx.Miner, _blockChain);
            _blockChain.Append(block1);

            var blockCommit = TestUtils.CreateLastCommit(block1.Hash, 1, 0, VoteFlag.Absent);
            Block<DumbAction> block2 = new BlockContent<DumbAction>
            {
                Index = 2,
                PublicKey = _fx.Miner.PublicKey,
                PreviousHash = block1.Hash,
                Timestamp = _fx.GenesisBlock.Timestamp.AddDays(1),
                Transactions = _emptyTransaction,
                LastCommit = blockCommit,
            }.Propose().Evaluate(_fx.Miner, _blockChain);
            Assert.Throws<InvalidBlockLastCommitException>(() => _blockChain.Append(block2));
        }

        [Fact]
        public void ValidateNextBlockLastCommitInvalidSignature()
        {
            Block<DumbAction> block1 = new BlockContent<DumbAction>
            {
                Index = 1,
                PublicKey = _fx.Miner.PublicKey,
                PreviousHash = _fx.GenesisBlock.Hash,
                Timestamp = _fx.GenesisBlock.Timestamp.AddDays(1),
                Transactions = _emptyTransaction,
                LastCommit = null,
            }.Propose().Evaluate(_fx.Miner, _blockChain);
            _blockChain.Append(block1);

            Vote voteA = new VoteMetadata(
                1,
                0,
                block1.Hash,
                DateTimeOffset.UtcNow,
                TestUtils.ConsensusPeer0PrivateKey.PublicKey,
                VoteFlag.Commit).Sign(TestUtils.ConsensusPeer0PrivateKey);

            // Invalid Signature
            Vote voteB = new VoteMetadata(
                1,
                0,
                block1.Hash,
                DateTimeOffset.UtcNow,
                TestUtils.ConsensusPeer1PrivateKey.PublicKey,
                VoteFlag.Commit).Sign(new PrivateKey());

            Vote voteC = new VoteMetadata(
                1,
                0,
                block1.Hash,
                DateTimeOffset.UtcNow,
                TestUtils.ConsensusPeer2PrivateKey.PublicKey,
                VoteFlag.Commit).Sign(TestUtils.ConsensusPeer2PrivateKey);

            Vote voteD = new VoteMetadata(
                1,
                0,
                block1.Hash,
                DateTimeOffset.UtcNow,
                TestUtils.ConsensusPeer3PrivateKey.PublicKey,
                VoteFlag.Commit).Sign(TestUtils.ConsensusPeer3PrivateKey);

            var blockCommit = new BlockCommit(
                1,
                0,
                block1.Hash,
                new[] { voteA, voteB, voteC, voteD }.ToImmutableArray());

            Block<DumbAction> block2 = new BlockContent<DumbAction>
            {
                Index = 2,
                PublicKey = _fx.Miner.PublicKey,
                PreviousHash = block1.Hash,
                Timestamp = _fx.GenesisBlock.Timestamp.AddDays(1),
                Transactions = _emptyTransaction,
                LastCommit = blockCommit,
            }.Propose().Evaluate(_fx.Miner, _blockChain);
            Assert.Throws<InvalidBlockLastCommitException>(() => _blockChain.Append(block2));
        }

        [Fact]
        public void ValidateNextBlockLastCommitDifferentBlockHash()
        {
            Block<DumbAction> block1 = new BlockContent<DumbAction>
            {
                Index = 1,
                PublicKey = _fx.Miner.PublicKey,
                PreviousHash = _fx.GenesisBlock.Hash,
                Timestamp = _fx.GenesisBlock.Timestamp.AddDays(1),
                Transactions = _emptyTransaction,
                LastCommit = null,
            }.Propose().Evaluate(_fx.Miner, _blockChain);
            _blockChain.Append(block1);

            var voteSet = new VoteSet(
                1,
                0,
                _fx.Hash1,
                TestUtils.ConsensusValidators);

            voteSet = TestUtils.AddVotesToVoteSet(
                voteSet,
                _fx.Hash1,
                VoteFlag.Commit,
                TestUtils.ConsensusPrivateKeys);

            var blockCommit = new BlockCommit(voteSet, block1.Hash);

            Block<DumbAction> block2 = new BlockContent<DumbAction>
            {
                Index = 2,
                PublicKey = _fx.Miner.PublicKey,
                PreviousHash = block1.Hash,
                Timestamp = _fx.GenesisBlock.Timestamp.AddDays(1),
                Transactions = _emptyTransaction,
                LastCommit = blockCommit,
            }.Propose().Evaluate(_fx.Miner, _blockChain);
            Assert.Throws<InvalidBlockLastCommitException>(() => _blockChain.Append(block2));
        }

        [Fact]
        public void ValidateNextBlockLastCommitFailsUnexpectedValidator()
        {
            Block<DumbAction> block1 = new BlockContent<DumbAction>
            {
                Index = 1,
                PublicKey = _fx.Miner.PublicKey,
                PreviousHash = _fx.GenesisBlock.Hash,
                Timestamp = _fx.GenesisBlock.Timestamp.AddDays(1),
                Transactions = _emptyTransaction,
                LastCommit = null,
            }.Propose().Evaluate(_fx.Miner, _blockChain);
            _blockChain.Append(block1);

            var invalidValidator = new PrivateKey();
            var voteSet = new VoteSet(
                1,
                0,
                block1.Hash,
                TestUtils.ConsensusValidators.Concat(new[] { invalidValidator.PublicKey }));

            voteSet = TestUtils.AddVotesToVoteSet(
                voteSet,
                block1.Hash,
                VoteFlag.Commit,
                TestUtils.ConsensusPrivateKeys.Concat(new[] { invalidValidator }));

            var blockCommit = new BlockCommit(voteSet, block1.Hash);

            Block<DumbAction> block2 = new BlockContent<DumbAction>
            {
                Index = 2,
                PublicKey = _fx.Miner.PublicKey,
                PreviousHash = block1.Hash,
                Timestamp = _fx.GenesisBlock.Timestamp.AddDays(1),
                Transactions = _emptyTransaction,
                LastCommit = blockCommit,
            }.Propose().Evaluate(_fx.Miner, _blockChain);
            Assert.Throws<InvalidBlockLastCommitException>(() => _blockChain.Append(block2));
        }

        [Fact]
        public void ValidateNextBlockLastCommitFailsDropExpectedValidator()
        {
            Block<DumbAction> block1 = new BlockContent<DumbAction>
            {
                Index = 1,
                PublicKey = _fx.Miner.PublicKey,
                PreviousHash = _fx.GenesisBlock.Hash,
                Timestamp = _fx.GenesisBlock.Timestamp.AddDays(1),
                Transactions = _emptyTransaction,
                LastCommit = null,
            }.Propose().Evaluate(_fx.Miner, _blockChain);
            _blockChain.Append(block1);

            var validatorsExceptPeer0 = TestUtils.ConsensusValidators.Except(new[]
            {
                TestUtils.ConsensusPeer0PrivateKey.PublicKey,
            }).ToArray();
            var privateKeysExceptPeer0 = TestUtils.ConsensusPrivateKeys.Except(new[]
            {
                TestUtils.ConsensusPeer0PrivateKey,
            });

            var voteSet = new VoteSet(1, 0, block1.Hash, validatorsExceptPeer0);
            TestUtils.AddVotesToVoteSet(
                voteSet,
                block1.Hash,
                VoteFlag.Commit,
                privateKeysExceptPeer0);

            var blockCommit = new BlockCommit(voteSet, block1.Hash);

            Block<DumbAction> block2 = new BlockContent<DumbAction>
            {
                Index = 2,
                PublicKey = _fx.Miner.PublicKey,
                PreviousHash = block1.Hash,
                Timestamp = _fx.GenesisBlock.Timestamp.AddDays(1),
                Transactions = _emptyTransaction,
                LastCommit = blockCommit,
            }.Propose().Evaluate(_fx.Miner, _blockChain);
            Assert.Throws<InvalidBlockLastCommitException>(() => _blockChain.Append(block2));
        }

        [Fact]
        private void ValidateNextBlockProtocolVersion()
        {
            Block<DumbAction> block1 = new BlockContent<DumbAction>
            {
                Index = 1,
                PublicKey = _fx.Miner.PublicKey,
                PreviousHash = _fx.GenesisBlock.Hash,
                Timestamp = _fx.GenesisBlock.Timestamp.AddDays(1),
                Transactions = _emptyTransaction,
                ProtocolVersion = _blockChain.Tip.ProtocolVersion,
            }.Propose().Evaluate(_fx.Miner, _blockChain);
            _blockChain.Append(block1);

            Block<DumbAction> block2 = new BlockContent<DumbAction>
            {
                Index = 2,
                PublicKey = _fx.Miner.PublicKey,
                Miner = _fx.Miner.ToAddress(),
                PreviousHash = block1.Hash,
                Timestamp = _fx.GenesisBlock.Timestamp.AddDays(1),
                Transactions = _emptyTransaction,
                ProtocolVersion = _blockChain.Tip.ProtocolVersion - 1,
            }.Propose().Evaluate(_fx.Miner, _blockChain);

            Assert.Throws<InvalidBlockProtocolVersionException>(() => _blockChain.Append(block2));

            Assert.Throws<InvalidBlockProtocolVersionException>(() =>
            {
                Block<DumbAction> block3 = new BlockContent<DumbAction>
                {
                    Index = 2,
                    PublicKey = _fx.Miner.PublicKey,
                    PreviousHash = block1.Hash,
                    Timestamp = _fx.GenesisBlock.Timestamp.AddDays(1),
                    Transactions = _emptyTransaction,
                    ProtocolVersion = BlockMetadata.CurrentProtocolVersion + 1,
                }.Propose().Evaluate(_fx.Miner, _blockChain);
                _blockChain.Append(block3);
            });
        }

        [Fact]
        private void ValidateNextBlockInvalidPreviousHash()
        {
            _blockChain.Append(_validNext);

            Block<DumbAction> invalidPreviousHashBlock = new BlockContent<DumbAction>
            {
                Index = 2,
                PublicKey = _fx.Miner.PublicKey,
                // Wrong PreviousHash for test; it should be _validNext.Hash:
                PreviousHash = _validNext.PreviousHash,
                Timestamp = _validNext.Timestamp.AddDays(1),
                Transactions = _emptyTransaction,
                // ReSharper disable once PossibleInvalidOperationException
                LastCommit = TestUtils.CreateLastCommit(_validNext.PreviousHash.Value, 1, 0),
            }.Propose().Evaluate(_fx.Miner, _blockChain);
            Assert.Throws<InvalidBlockPreviousHashException>(() =>
                    _blockChain.Append(invalidPreviousHashBlock));
        }

        [Fact]
        private void ValidateNextBlockInvalidTimestamp()
        {
            _blockChain.Append(_validNext);

            Block<DumbAction> invalidPreviousTimestamp = new BlockContent<DumbAction>
            {
                Index = 2,
                PublicKey = _fx.Miner.PublicKey,
                PreviousHash = _validNext.Hash,
                Timestamp = _validNext.Timestamp.AddSeconds(-1),
                Transactions = _emptyTransaction,
                LastCommit = TestUtils.CreateLastCommit(_validNext.Hash, _validNext.Index, 0),
            }.Propose().Evaluate(_fx.Miner, _blockChain);
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
            var genesisBlock = TestUtils.ProposeGenesis<DumbAction>(
                TestUtils.GenesisMiner.PublicKey
            ).Evaluate(
                TestUtils.GenesisMiner,
                policy.BlockAction,
                policy.NativeTokens.Contains,
                stateStore
            );
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
                PublicKey = TestUtils.GenesisMiner.PublicKey,
                PreviousHash = genesisBlock.Hash,
                Timestamp = genesisBlock.Timestamp.AddSeconds(1),
                Transactions = _emptyTransaction,
            }.Propose().Evaluate(TestUtils.GenesisMiner, chain1);

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
    }
}
