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
            Block<DumbAction> validNextBlock = new BlockContent<DumbAction>(
                new BlockMetadata(
                    index: 1L,
                    timestamp: _fx.GenesisBlock.Timestamp.AddDays(1),
                    publicKey: _fx.Miner.PublicKey,
                    previousHash: _fx.GenesisBlock.Hash,
                    txHash: null,
                    lastCommit: null)).Propose().Evaluate(_fx.Miner, _blockChain);
            _blockChain.Append(validNextBlock);
            Assert.Equal(_blockChain.Tip, validNextBlock);
        }

        [Fact]
        public void ValidateNextBlockProtocolVersion()
        {
            var protocolVersion = _blockChain.Tip.ProtocolVersion;
            Block<DumbAction> block1 = new BlockContent<DumbAction>(
                new BlockMetadata(
                    protocolVersion: protocolVersion,
                    index: 1L,
                    timestamp: _fx.GenesisBlock.Timestamp.AddDays(1),
                    miner: _fx.Miner.PublicKey.ToAddress(),
                    publicKey: protocolVersion >= 2 ? _fx.Miner.PublicKey : null,
                    previousHash: _fx.GenesisBlock.Hash,
                    txHash: null,
                    lastCommit: null)).Propose().Evaluate(_fx.Miner, _blockChain);
            _blockChain.Append(block1);

            Block<DumbAction> block2 = new BlockContent<DumbAction>(
                new BlockMetadata(
                    protocolVersion: protocolVersion - 1,
                    index: 2L,
                    timestamp: _fx.GenesisBlock.Timestamp.AddDays(2),
                    miner: _fx.Miner.PublicKey.ToAddress(),
                    publicKey: protocolVersion - 1 >= 2 ? _fx.Miner.PublicKey : null,
                    previousHash: block1.Hash,
                    txHash: null,
                    lastCommit: null)).Propose().Evaluate(_fx.Miner, _blockChain);

            Assert.Throws<InvalidBlockProtocolVersionException>(() => _blockChain.Append(block2));
            Assert.Throws<InvalidBlockProtocolVersionException>(() =>
            {
                Block<DumbAction> block3 = new BlockContent<DumbAction>(
                    new BlockMetadata(
                        protocolVersion: BlockMetadata.CurrentProtocolVersion + 1,
                        index: 2L,
                        timestamp: _fx.GenesisBlock.Timestamp.AddDays(2),
                        miner: _fx.Miner.PublicKey.ToAddress(),
                        publicKey: _fx.Miner.PublicKey,
                        previousHash: block1.Hash,
                        txHash: null,
                        lastCommit: null)).Propose().Evaluate(_fx.Miner, _blockChain);
                _blockChain.Append(block3);
            });
        }

        [Fact]
        public void ValidateNextBlockInvalidIndex()
        {
            _blockChain.Append(_validNext);

            Block<DumbAction> prev = _blockChain.Tip;
            Block<DumbAction> blockWithAlreadyUsedIndex = new BlockContent<DumbAction>(
                new BlockMetadata(
                    index: prev.Index,
                    timestamp: DateTimeOffset.UtcNow,
                    publicKey: _fx.Miner.PublicKey,
                    previousHash: prev.Hash,
                    txHash: null,
                    lastCommit: null)).Propose().Evaluate(_fx.Miner, _blockChain);
            Assert.Throws<InvalidBlockIndexException>(
                () => _blockChain.Append(blockWithAlreadyUsedIndex)
            );

            Block<DumbAction> blockWithIndexAfterNonexistentIndex = new BlockContent<DumbAction>(
                new BlockMetadata(
                    index: prev.Index + 2,
                    timestamp: DateTimeOffset.UtcNow,
                    publicKey: _fx.Miner.PublicKey,
                    previousHash: prev.Hash,
                    txHash: null,
                    lastCommit: TestUtils.CreateLastCommit(prev.Hash, prev.Index + 1, 0)))
                    .Propose().Evaluate(_fx.Miner, _blockChain);
            Assert.Throws<InvalidBlockIndexException>(
                () => _blockChain.Append(blockWithIndexAfterNonexistentIndex)
            );
        }

        [Fact]
        public void ValidateNextBlockInvalidPreviousHash()
        {
            _blockChain.Append(_validNext);

            Block<DumbAction> invalidPreviousHashBlock = new BlockContent<DumbAction>(
                new BlockMetadata(
                    index: 2,
                    timestamp: DateTimeOffset.UtcNow,
                    publicKey: _fx.Miner.PublicKey,
                    // Should be _validNext.Hash instead
                    previousHash: _validNext.PreviousHash,
                    txHash: null,
                    // ReSharper disable once PossibleInvalidOperationException
                    lastCommit: TestUtils.CreateLastCommit(_validNext.PreviousHash.Value, 1, 0)))
                .Propose().Evaluate(_fx.Miner, _blockChain);
            Assert.Throws<InvalidBlockPreviousHashException>(() =>
                    _blockChain.Append(invalidPreviousHashBlock));
        }

        [Fact]
        public void ValidateNextBlockInvalidTimestamp()
        {
            _blockChain.Append(_validNext);

            Block<DumbAction> invalidPreviousTimestamp = new BlockContent<DumbAction>(
                new BlockMetadata(
                    index: 2,
                    timestamp: _validNext.Timestamp.AddSeconds(-1),
                    publicKey: _fx.Miner.PublicKey,
                    previousHash: _validNext.Hash,
                    txHash: null,
                    lastCommit: TestUtils.CreateLastCommit(_validNext.Hash, _validNext.Index, 0)))
                .Propose().Evaluate(_fx.Miner, _blockChain);
            Assert.Throws<InvalidBlockTimestampException>(() =>
                    _blockChain.Append(invalidPreviousTimestamp));
        }

        [Fact]
        public void ValidateNextBlockInvalidStateRootHash()
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

            Block<DumbAction> block1 = new BlockContent<DumbAction>(
                new BlockMetadata(
                    protocolVersion: BlockMetadata.CurrentProtocolVersion,
                    index: 1,
                    timestamp: genesisBlock.Timestamp.AddSeconds(1),
                    miner: TestUtils.GenesisMiner.PublicKey.ToAddress(),
                    publicKey: TestUtils.GenesisMiner.PublicKey,
                    previousHash: genesisBlock.Hash,
                    txHash: null,
                    lastCommit: null)).Propose().Evaluate(TestUtils.GenesisMiner, chain1);

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
        public void ValidateNextBlockLastCommitNullAtIndexOne()
        {
            Block<DumbAction> validNextBlock = new BlockContent<DumbAction>(
                new BlockMetadata(
                    index: 1L,
                    timestamp: DateTimeOffset.UtcNow,
                    publicKey: _fx.Miner.PublicKey,
                    previousHash: _fx.GenesisBlock.Hash,
                    txHash: null,
                    lastCommit: null)).Propose().Evaluate(_fx.Miner, _blockChain);
            _blockChain.Append(validNextBlock);
            Assert.Equal(_blockChain.Tip, validNextBlock);
        }

        [Fact]
        public void ValidateNextBlockLastCommitUpperIndexOne()
        {
            Block<DumbAction> block1 = new BlockContent<DumbAction>(
                new BlockMetadata(
                    index: 1L,
                    timestamp: DateTimeOffset.UtcNow,
                    publicKey: _fx.Miner.PublicKey,
                    previousHash: _fx.GenesisBlock.Hash,
                    txHash: null,
                    lastCommit: null)).Propose().Evaluate(_fx.Miner, _blockChain);
            _blockChain.Append(block1);

            var blockCommit = TestUtils.CreateLastCommit(block1.Hash, 1, 0);
            Block<DumbAction> block2 = new BlockContent<DumbAction>(
                new BlockMetadata(
                    index: 2L,
                    timestamp: DateTimeOffset.UtcNow,
                    publicKey: _fx.Miner.PublicKey,
                    previousHash: block1.Hash,
                    txHash: null,
                    lastCommit: blockCommit)).Propose().Evaluate(_fx.Miner, _blockChain);
            _blockChain.Append(block2);
            Assert.Equal(_blockChain.Tip, block2);
        }

        [Fact]
        public void ValidateNextBlockLastCommitNullLacksCommits()
        {
            Block<DumbAction> block1 = new BlockContent<DumbAction>(
                new BlockMetadata(
                    index: 1L,
                    timestamp: DateTimeOffset.UtcNow,
                    publicKey: _fx.Miner.PublicKey,
                    previousHash: _fx.GenesisBlock.Hash,
                    txHash: null,
                    lastCommit: null)).Propose().Evaluate(_fx.Miner, _blockChain);
            _blockChain.Append(block1);

            var blockCommit = TestUtils.CreateLastCommit(block1.Hash, 1, 0, VoteFlag.Absent);
            Block<DumbAction> block2 = new BlockContent<DumbAction>(
                new BlockMetadata(
                    index: 2L,
                    timestamp: DateTimeOffset.UtcNow,
                    publicKey: _fx.Miner.PublicKey,
                    previousHash: block1.Hash,
                    txHash: null,
                    lastCommit: blockCommit)).Propose().Evaluate(_fx.Miner, _blockChain);
            Assert.Throws<InvalidBlockLastCommitException>(() => _blockChain.Append(block2));
        }

        [Fact]
        public void ValidateNextBlockLastCommitInvalidSignature()
        {
            Block<DumbAction> block1 = new BlockContent<DumbAction>(
                new BlockMetadata(
                    index: 1L,
                    timestamp: DateTimeOffset.UtcNow,
                    publicKey: _fx.Miner.PublicKey,
                    previousHash: _fx.GenesisBlock.Hash,
                    txHash: null,
                    lastCommit: null)).Propose().Evaluate(_fx.Miner, _blockChain);
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

            Block<DumbAction> block2 = new BlockContent<DumbAction>(
                new BlockMetadata(
                    index: 2L,
                    timestamp: DateTimeOffset.UtcNow,
                    publicKey: _fx.Miner.PublicKey,
                    previousHash: block1.Hash,
                    txHash: null,
                    lastCommit: blockCommit)).Propose().Evaluate(_fx.Miner, _blockChain);
            Assert.Throws<InvalidBlockLastCommitException>(() => _blockChain.Append(block2));
        }

        [Fact]
        public void ValidateNextBlockLastCommitDifferentBlockHash()
        {
            Block<DumbAction> block1 = new BlockContent<DumbAction>(
                new BlockMetadata(
                    index: 1L,
                    timestamp: DateTimeOffset.UtcNow,
                    publicKey: _fx.Miner.PublicKey,
                    previousHash: _fx.GenesisBlock.Hash,
                    txHash: null,
                    lastCommit: null)).Propose().Evaluate(_fx.Miner, _blockChain);
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

            Block<DumbAction> block2 = new BlockContent<DumbAction>(
                new BlockMetadata(
                    index: 2,
                    timestamp: DateTimeOffset.UtcNow,
                    publicKey: _fx.Miner.PublicKey,
                    previousHash: block1.Hash,
                    txHash: null,
                    lastCommit: blockCommit)).Propose().Evaluate(_fx.Miner, _blockChain);
            Assert.Throws<InvalidBlockLastCommitException>(() => _blockChain.Append(block2));
        }

        [Fact]
        public void ValidateNextBlockLastCommitFailsUnexpectedValidator()
        {
            Block<DumbAction> block1 = new BlockContent<DumbAction>(
                new BlockMetadata(
                    index: 1L,
                    timestamp: DateTimeOffset.UtcNow,
                    publicKey: _fx.Miner.PublicKey,
                    previousHash: _fx.GenesisBlock.Hash,
                    txHash: null,
                    lastCommit: null)).Propose().Evaluate(_fx.Miner, _blockChain);
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

            Block<DumbAction> block2 = new BlockContent<DumbAction>(
                new BlockMetadata(
                    index: 2L,
                    timestamp: DateTimeOffset.UtcNow,
                    publicKey: _fx.Miner.PublicKey,
                    previousHash: block1.Hash,
                    txHash: null,
                    lastCommit: blockCommit)).Propose().Evaluate(_fx.Miner, _blockChain);
            Assert.Throws<InvalidBlockLastCommitException>(() => _blockChain.Append(block2));
        }

        [Fact]
        public void ValidateNextBlockLastCommitFailsDropExpectedValidator()
        {
            Block<DumbAction> block1 = new BlockContent<DumbAction>(
                new BlockMetadata(
                    index: 1L,
                    timestamp: DateTimeOffset.UtcNow,
                    publicKey: _fx.Miner.PublicKey,
                    previousHash: _fx.GenesisBlock.Hash,
                    txHash: null,
                    lastCommit: null)).Propose().Evaluate(_fx.Miner, _blockChain);
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
            Block<DumbAction> block2 = new BlockContent<DumbAction>(
                new BlockMetadata(
                    index: 2,
                    timestamp: DateTimeOffset.UtcNow,
                    publicKey: _fx.Miner.PublicKey,
                    previousHash: block1.Hash,
                    txHash: null,
                    lastCommit: blockCommit)).Propose().Evaluate(_fx.Miner, _blockChain);
            Assert.Throws<InvalidBlockLastCommitException>(() => _blockChain.Append(block2));
        }
    }
}
