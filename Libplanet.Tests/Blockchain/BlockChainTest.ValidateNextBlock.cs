using System;
using Bencodex.Types;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
using Libplanet.Blocks;
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
                    difficulty: 1024L,
                    totalDifficulty: _fx.GenesisBlock.TotalDifficulty + 1024L,
                    previousHash: _fx.GenesisBlock.Hash,
                    txHash: null),
                transactions: _emptyTransactions)
                .Mine()
                .Evaluate(_fx.Miner, _blockChain);
            _blockChain.Append(validNextBlock);
            Assert.Equal(_blockChain.Tip, validNextBlock);
        }

        [Fact]
        private void ValidateNextBlockProtocolVersion()
        {
            var protocolVersion = _blockChain.Tip.ProtocolVersion;
            Block<DumbAction> block1 = new BlockContent<DumbAction>(
                new BlockMetadata(
                    protocolVersion: protocolVersion,
                    index: 1L,
                    timestamp: _fx.GenesisBlock.Timestamp.AddDays(1),
                    miner: _fx.Miner.PublicKey.ToAddress(),
                    publicKey: protocolVersion >= 2 ? _fx.Miner.PublicKey : null,
                    difficulty: 1024L,
                    totalDifficulty: _fx.GenesisBlock.TotalDifficulty + 1024L,
                    previousHash: _fx.GenesisBlock.Hash,
                    txHash: null),
                transactions: _emptyTransactions).Mine().Evaluate(_fx.Miner, _blockChain);
            _blockChain.Append(block1);

            Block<DumbAction> block2 = new BlockContent<DumbAction>(
                new BlockMetadata(
                    protocolVersion: protocolVersion - 1,
                    index: 2L,
                    timestamp: _fx.GenesisBlock.Timestamp.AddDays(2),
                    miner: _fx.Miner.PublicKey.ToAddress(),
                    publicKey: protocolVersion - 1 >= 2 ? _fx.Miner.PublicKey : null,
                    difficulty: 1024L,
                    totalDifficulty: block1.TotalDifficulty + 1024L,
                    previousHash: block1.Hash,
                    txHash: null),
                transactions: _emptyTransactions).Mine().Evaluate(_fx.Miner, _blockChain);

            Assert.Throws<InvalidBlockProtocolVersionException>(() => _blockChain.Append(block2));
            Assert.Throws<InvalidBlockProtocolVersionException>(() =>
            {
                Block<DumbAction> block3 = new BlockContent<DumbAction>(
                    new BlockMetadata(
                        protocolVersion: BlockMetadata.CurrentProtocolVersion + 1,
                        index: 2L,
                        timestamp: _fx.GenesisBlock.Timestamp.AddDays(1),
                        miner: _fx.Miner.PublicKey.ToAddress(),
                        publicKey: _fx.Miner.PublicKey,
                        difficulty: 1024L,
                        totalDifficulty: block1.TotalDifficulty + 1024L,
                        previousHash: block1.Hash,
                        txHash: null),
                    transactions: _emptyTransactions).Mine().Evaluate(_fx.Miner, _blockChain);
                _blockChain.Append(block3);
            });
        }

        [Fact]
        private void ValidateNextBlockInvalidIndex()
        {
            _blockChain.Append(_validNext);

            Block<DumbAction> prev = _blockChain.Tip;
            Block<DumbAction> blockWithAlreadyUsedIndex = new BlockContent<DumbAction>(
                new BlockMetadata(
                    index: prev.Index,
                    timestamp: DateTimeOffset.UtcNow,
                    publicKey: _fx.Miner.PublicKey,
                    difficulty: 1L,
                    totalDifficulty: prev.TotalDifficulty + 1L,
                    previousHash: prev.Hash,
                    txHash: null)).Mine().Evaluate(_fx.Miner, _blockChain);
            Assert.Throws<InvalidBlockIndexException>(
                () => _blockChain.Append(blockWithAlreadyUsedIndex)
            );

            Block<DumbAction> blockWithIndexAfterNonexistentIndex = new BlockContent<DumbAction>(
                new BlockMetadata(
                    index: prev.Index + 2,
                    timestamp: DateTimeOffset.UtcNow,
                    publicKey: _fx.Miner.PublicKey,
                    difficulty: 1L,
                    totalDifficulty: prev.TotalDifficulty + 1L,
                    previousHash: prev.Hash,
                    txHash: null)).Mine().Evaluate(_fx.Miner, _blockChain);
            Assert.Throws<InvalidBlockIndexException>(
                () => _blockChain.Append(blockWithIndexAfterNonexistentIndex)
            );
        }

        [Fact]
        private void ValidateNextBlockInvalidDifficulty()
        {
            _blockChain.Append(_validNext);

            Block<DumbAction> invalidDifficultyBlock = new BlockContent<DumbAction>(
                new BlockMetadata(
                    index: 2L,
                    timestamp: DateTimeOffset.UtcNow,
                    publicKey: _fx.Miner.PublicKey,
                    difficulty: 1L,
                    totalDifficulty: _validNext.TotalDifficulty,
                    previousHash: _validNext.Hash,
                    txHash: null)).Mine().Evaluate(_fx.Miner, _blockChain);
            Assert.Throws<InvalidBlockDifficultyException>(() =>
                    _blockChain.Append(invalidDifficultyBlock));
        }

        [Fact]
        private void ValidateNextBlockInvalidTotalDifficulty()
        {
            _blockChain.Append(_validNext);

            long difficulty = _policy.GetNextBlockDifficulty(_blockChain);
            Block<DumbAction> invalidTotalDifficultyBlock = new BlockContent<DumbAction>(
                new BlockMetadata(
                    index: 2,
                    timestamp: DateTimeOffset.UtcNow,
                    publicKey: _fx.Miner.PublicKey,
                    difficulty: difficulty,
                    totalDifficulty: _validNext.TotalDifficulty + difficulty - 1,
                    previousHash: _validNext.Hash,
                    txHash: null)).Mine().Evaluate(_fx.Miner, _blockChain);
            Assert.Throws<InvalidBlockTotalDifficultyException>(() =>
                    _blockChain.Append(invalidTotalDifficultyBlock));
        }

        [Fact]
        private void ValidateNextBlockInvalidPreviousHash()
        {
            _blockChain.Append(_validNext);

            long difficulty = _policy.GetNextBlockDifficulty(_blockChain);
            Block<DumbAction> invalidPreviousHashBlock = new BlockContent<DumbAction>(
                new BlockMetadata(
                    index: 2,
                    timestamp: DateTimeOffset.UtcNow,
                    publicKey: _fx.Miner.PublicKey,
                    difficulty: difficulty,
                    totalDifficulty: _validNext.TotalDifficulty + difficulty,
                    // Should be _validNext.Hash instead
                    previousHash: _validNext.PreviousHash,
                    txHash: null)).Mine().Evaluate(_fx.Miner, _blockChain);
            Assert.Throws<InvalidBlockPreviousHashException>(() =>
                    _blockChain.Append(invalidPreviousHashBlock));
        }

        [Fact]
        private void ValidateNextBlockInvalidTimestamp()
        {
            _blockChain.Append(_validNext);

            long difficulty = _policy.GetNextBlockDifficulty(_blockChain);
            Block<DumbAction> invalidPreviousTimestamp = new BlockContent<DumbAction>(
                new BlockMetadata(
                    index: 2,
                    timestamp: _validNext.Timestamp.AddSeconds(-1),
                    publicKey: _fx.Miner.PublicKey,
                    difficulty: difficulty,
                    totalDifficulty: _validNext.TotalDifficulty + difficulty,
                    previousHash: _validNext.Hash,
                    txHash: null),
                transactions: _emptyTransactions).Mine().Evaluate(_fx.Miner, _blockChain);
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
                    difficulty: 1024L,
                    totalDifficulty: genesisBlock.TotalDifficulty + 1024L,
                    previousHash: genesisBlock.Hash,
                    txHash: null),
                transactions: _emptyTransactions).Mine().Evaluate(TestUtils.GenesisMiner, chain1);

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
