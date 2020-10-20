using System;
using System.Security.Cryptography;
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
            var validNextBlock = Block<DumbAction>.Mine(
                1,
                1024,
                _fx.GenesisBlock.TotalDifficulty,
                _fx.GenesisBlock.Miner.Value,
                _fx.GenesisBlock.Hash,
                _fx.GenesisBlock.Timestamp.AddDays(1),
                _emptyTransaction);
            _blockChain.Append(validNextBlock);
            Assert.Equal(_blockChain.Tip, validNextBlock);
        }

        [Fact]
        private void ValidateNextBlockInvalidIndex()
        {
            _blockChain.Append(_validNext);

            var invalidIndexBlock = Block<DumbAction>.Mine(
                1,
                1,
                _fx.GenesisBlock.TotalDifficulty,
                _fx.GenesisBlock.Miner.Value,
                _validNext.Hash,
                _validNext.Timestamp.AddSeconds(1),
                _emptyTransaction);
            Assert.Throws<InvalidBlockIndexException>(() =>
                _blockChain.Append(invalidIndexBlock));
        }

        [Fact]
        private void ValidateNextBlockInvalidDifficulty()
        {
            _blockChain.Append(_validNext);

            var invalidDifficultyBlock = Block<DumbAction>.Mine(
                2,
                1,
                _validNext.TotalDifficulty,
                _fx.GenesisBlock.Miner.Value,
                _validNext.Hash,
                _validNext.Timestamp.AddSeconds(1),
                _emptyTransaction);
            Assert.Throws<InvalidBlockDifficultyException>(() =>
                    _blockChain.Append(invalidDifficultyBlock));
        }

        [Fact]
        private void ValidateNextBlockInvalidTotalDifficulty()
        {
            _blockChain.Append(_validNext);

            var invalidTotalDifficultyBlock = Block<DumbAction>.Mine(
                2,
                _policy.GetNextBlockDifficulty(_blockChain),
                _validNext.TotalDifficulty - 1,
                _fx.GenesisBlock.Miner.Value,
                _validNext.Hash,
                _validNext.Timestamp.AddSeconds(1),
                _emptyTransaction);
            Assert.Throws<InvalidBlockTotalDifficultyException>(() =>
                    _blockChain.Append(invalidTotalDifficultyBlock));
        }

        [Fact]
        private void ValidateNextBlockInvalidPreviousHash()
        {
            _blockChain.Append(_validNext);

            var invalidPreviousHashBlock = Block<DumbAction>.Mine(
                2,
                1032,
                _validNext.TotalDifficulty,
                _fx.GenesisBlock.Miner.Value,
                new HashDigest<SHA256>(new byte[32]),
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
                1032,
                _validNext.TotalDifficulty,
                _fx.GenesisBlock.Miner.Value,
                _validNext.Hash,
                _validNext.Timestamp.Subtract(TimeSpan.FromSeconds(1)),
                _emptyTransaction);
            Assert.Throws<InvalidBlockTimestampException>(() =>
                    _blockChain.Append(invalidPreviousTimestamp));
        }

        [Fact]
        private void ValidateNextBlockInvalidStateRootHash()
        {
            IKeyValueStore stateKeyValueStore = new MemoryKeyValueStore(),
                stateHashKeyValueStore = new MemoryKeyValueStore();
            var policy = new BlockPolicy<DumbAction>(
                null,
                TimeSpan.FromHours(3),
                1024,
                128);
            var stateStore = new TrieStateStore(stateKeyValueStore, stateHashKeyValueStore);
            // FIXME: It assumes that _fx.GenesisBlock doesn't update any states with transactions.
            //        Actually, it depends on BlockChain<T> to update states and it makes hard to
            //        calculate state root hash. To resolve this problem,
            //        it should be moved into StateStore.
            var genesisBlock = TestUtils.MineGenesis<DumbAction>(
                blockAction: policy.BlockAction, checkStateRootHash: true);
            var store = new DefaultStore(null);
            var chain = new BlockChain<DumbAction>(
                policy,
                store,
                stateStore,
                genesisBlock);

            var validNext = Block<DumbAction>.Mine(
                1,
                1024,
                genesisBlock.TotalDifficulty,
                genesisBlock.Miner.Value,
                genesisBlock.Hash,
                genesisBlock.Timestamp.AddSeconds(1),
                _emptyTransaction);
            var actionEvaluations = _blockChain.BlockEvaluator.EvaluateActions(
                validNext,
                StateCompleterSet<DumbAction>.Recalculate);
            chain.SetStates(validNext, actionEvaluations, false);
            validNext =
                new Block<DumbAction>(validNext, stateStore.GetRootHash(validNext.Hash));
            chain.Append(validNext);

            var invalidStateRootHash = Block<DumbAction>.Mine(
                2,
                1032,
                validNext.TotalDifficulty,
                genesisBlock.Miner.Value,
                validNext.Hash,
                validNext.Timestamp.AddSeconds(1),
                _emptyTransaction);
            actionEvaluations = _blockChain.BlockEvaluator.EvaluateActions(
                invalidStateRootHash,
                StateCompleterSet<DumbAction>.Recalculate);
            chain.SetStates(invalidStateRootHash, actionEvaluations, false);
            invalidStateRootHash = new Block<DumbAction>(
                invalidStateRootHash,
                new HashDigest<SHA256>(TestUtils.GetRandomBytes(HashDigest<SHA256>.Size)));
            Assert.Throws<InvalidBlockStateRootHashException>(() =>
                    chain.Append(invalidStateRootHash));
        }
    }
}
