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
            Block<DumbAction> validNextBlock = new BlockContent<DumbAction>
            {
                Index = 1,
                PublicKey = _fx.Miner.PublicKey,
                PreviousHash = _fx.GenesisBlock.Hash,
                Timestamp = _fx.GenesisBlock.Timestamp.AddDays(1),
                Transactions = _emptyTransaction,
            }.Mine().Evaluate(_fx.Miner, _blockChain);
            _blockChain.Append(validNextBlock);
            Assert.Equal(_blockChain.Tip, validNextBlock);
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
            }.Mine().Evaluate(_fx.Miner, _blockChain);
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
            }.Mine().Evaluate(_fx.Miner, _blockChain);

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
                }.Mine().Evaluate(_fx.Miner, _blockChain);
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
            }.Mine().Evaluate(_fx.Miner, _blockChain);
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
            }.Mine().Evaluate(_fx.Miner, _blockChain);
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
            }.Mine().Evaluate(TestUtils.GenesisMiner, chain1);

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
