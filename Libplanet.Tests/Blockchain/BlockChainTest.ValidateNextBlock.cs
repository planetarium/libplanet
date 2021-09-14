using System;
using Bencodex.Types;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
using Libplanet.Blocks;
using Libplanet.Store;
using Libplanet.Store.Trie;
using Libplanet.Tests.Common.Action;
using Libplanet.Tests.Store.Trie;
using Xunit;

namespace Libplanet.Tests.Blockchain
{
    public partial class BlockChainTest
    {
        [Fact]
        public void ValidateNextBlock()
        {
            Block<DumbAction> validNextBlock = Block<DumbAction>.Mine(
                1,
                _fx.GetHashAlgorithm(1),
                1024,
                _fx.GenesisBlock.TotalDifficulty,
                _fx.GenesisBlock.Miner,
                _fx.GenesisBlock.Hash,
                _fx.GenesisBlock.Timestamp.AddDays(1),
                _emptyTransaction
            ).AttachStateRootHash(_fx.Store, _fx.StateStore, _policy);
            _blockChain.Append(validNextBlock);
            Assert.Equal(_blockChain.Tip, validNextBlock);
        }

        [Fact]
        private void ValidateNextBlockProtocolVersion()
        {
            Block<DumbAction> block1 = Block<DumbAction>.Mine(
                1,
                _fx.GetHashAlgorithm(1),
                1024,
                _fx.GenesisBlock.TotalDifficulty,
                _fx.GenesisBlock.Miner,
                _fx.GenesisBlock.Hash,
                _fx.GenesisBlock.Timestamp.AddDays(1),
                _emptyTransaction,
                protocolVersion: 1
            ).AttachStateRootHash(_fx.Store, _fx.StateStore, _policy);
            _blockChain.Append(block1);

            Block<DumbAction> block2 = Block<DumbAction>.Mine(
                2,
                _fx.GetHashAlgorithm(2),
                1024,
                block1.TotalDifficulty,
                _fx.GenesisBlock.Miner,
                block1.Hash,
                _fx.GenesisBlock.Timestamp.AddDays(1),
                _emptyTransaction,
                protocolVersion: 0
            ).AttachStateRootHash(_fx.Store, _fx.StateStore, _policy);
            Assert.Throws<InvalidBlockProtocolVersionException>(() => _blockChain.Append(block2));

            Assert.Throws<InvalidBlockProtocolVersionException>(() =>
            {
                Block<DumbAction> block3 = Block<DumbAction>.Mine(
                    2,
                    _fx.GetHashAlgorithm(2),
                    1024,
                    block1.TotalDifficulty,
                    _fx.GenesisBlock.Miner,
                    block1.Hash,
                    _fx.GenesisBlock.Timestamp.AddDays(1),
                    _emptyTransaction,
                    protocolVersion: Block<DumbAction>.CurrentProtocolVersion + 1
                ).AttachStateRootHash(_fx.Store, _fx.StateStore, _policy);
                _blockChain.Append(block3);
            });
        }

        [Fact]
        private void ValidateNextBlockInvalidIndex()
        {
            _blockChain.Append(_validNext);

            Block<DumbAction> prev = _blockChain.Tip;
            Block<DumbAction> blockWithAlreadyUsedIndex = Block<DumbAction>.Mine(
                prev.Index,
                _fx.GetHashAlgorithm(prev.Index),
                1,
                prev.TotalDifficulty,
                prev.Miner,
                prev.Hash,
                prev.Timestamp.AddSeconds(1),
                _emptyTransaction
            ).AttachStateRootHash(_fx.Store, _fx.StateStore, _policy);
            Assert.Throws<InvalidBlockIndexException>(
                () => _blockChain.Append(blockWithAlreadyUsedIndex)
            );

            Block<DumbAction> blockWithIndexAfterNonexistentIndex = Block<DumbAction>.Mine(
                prev.Index + 2,
                _fx.GetHashAlgorithm(prev.Index + 2),
                1,
                prev.TotalDifficulty,
                prev.Miner,
                prev.Hash,
                prev.Timestamp.AddSeconds(1),
                _emptyTransaction
            ).AttachStateRootHash(_fx.Store, _fx.StateStore, _policy);
            Assert.Throws<InvalidBlockIndexException>(
                () => _blockChain.Append(blockWithIndexAfterNonexistentIndex)
            );
        }

        [Fact]
        private void ValidateNextBlockInvalidDifficulty()
        {
            _blockChain.Append(_validNext);

            var invalidDifficultyBlock = Block<DumbAction>.Mine(
                2,
                _fx.GetHashAlgorithm(2),
                1,
                _validNext.TotalDifficulty,
                _fx.GenesisBlock.Miner,
                _validNext.Hash,
                _validNext.Timestamp.AddSeconds(1),
                _emptyTransaction
            ).AttachStateRootHash(_fx.Store, _fx.StateStore, _policy);
            Assert.Throws<InvalidBlockDifficultyException>(() =>
                    _blockChain.Append(invalidDifficultyBlock));
        }

        [Fact]
        private void ValidateNextBlockInvalidTotalDifficulty()
        {
            _blockChain.Append(_validNext);

            var invalidTotalDifficultyBlock = Block<DumbAction>.Mine(
                2,
                _fx.GetHashAlgorithm(2),
                _policy.GetNextBlockDifficulty(_blockChain),
                _validNext.TotalDifficulty - 1,
                _fx.GenesisBlock.Miner,
                _validNext.Hash,
                _validNext.Timestamp.AddSeconds(1),
                _emptyTransaction
            ).AttachStateRootHash(_fx.Store, _fx.StateStore, _policy);
            Assert.Throws<InvalidBlockTotalDifficultyException>(() =>
                    _blockChain.Append(invalidTotalDifficultyBlock));
        }

        [Fact]
        private void ValidateNextBlockInvalidPreviousHash()
        {
            _blockChain.Append(_validNext);

            var invalidPreviousHashBlock = Block<DumbAction>.Mine(
                2,
                _fx.GetHashAlgorithm(2),
                1032,
                _validNext.TotalDifficulty,
                _fx.GenesisBlock.Miner,
                new BlockHash(new byte[32]),
                _validNext.Timestamp.AddSeconds(1),
                _emptyTransaction);
            Assert.Throws<InvalidBlockPreviousHashException>(() =>
                    _blockChain.Append(invalidPreviousHashBlock));
        }

        [Fact]
        private void ValidateNextBlockInvalidTimestamp()
        {
            _blockChain.Append(_validNext);

            var invalidPreviousTimestamp = Block<DumbAction>.Mine(
                2,
                _fx.GetHashAlgorithm(2),
                1032,
                _validNext.TotalDifficulty,
                _fx.GenesisBlock.Miner,
                _validNext.Hash,
                _validNext.Timestamp.Subtract(TimeSpan.FromSeconds(1)),
                _emptyTransaction);
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
            var store = new DefaultStore(null);
            var genesisBlock = TestUtils.MineGenesis<DumbAction>(policy.GetHashAlgorithm)
                .AttachStateRootHash(store, stateStore, policy);
            store.PutBlock(genesisBlock);
            Assert.NotNull(store.GetStateRootHash(genesisBlock.Hash));
            var block1 = Block<DumbAction>.Mine(
                index: 1,
                hashAlgorithm: policy.GetHashAlgorithm(1),
                difficulty: 1024,
                previousTotalDifficulty: genesisBlock.TotalDifficulty,
                miner: genesisBlock.Miner,
                previousHash: genesisBlock.Hash,
                timestamp: genesisBlock.Timestamp.AddSeconds(1),
                transactions: _emptyTransaction
            ).AttachStateRootHash(store, stateStore, policy);

            var policyWithBlockAction = new BlockPolicy<DumbAction>(
                new SetStatesAtBlock(default, (Text)"foo", 1),
                policy.BlockInterval
            );
            var chain = new BlockChain<DumbAction>(
                policyWithBlockAction,
                new VolatileStagePolicy<DumbAction>(),
                store,
                stateStore,
                genesisBlock
            );
            Assert.Throws<InvalidBlockStateRootHashException>(() => chain.Append(block1));
        }
    }
}
