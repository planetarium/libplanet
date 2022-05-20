using System;
using System.Collections.Generic;
using System.Linq;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Libplanet.Net.Consensus;
using Libplanet.Tests.Common.Action;
using Libplanet.Tests.Store;
using Xunit;

namespace Libplanet.Net.Tests.Consensus
{
    public class ConsensusContextTest
    {
        private readonly StoreFixture _fx;
        private readonly BlockChain<DumbAction> _blockChain;

        public ConsensusContextTest()
        {
            _fx = new MemoryStoreFixture(TestUtils.Policy.BlockAction);
            _blockChain = new BlockChain<DumbAction>(
                TestUtils.Policy,
                new VolatileStagePolicy<DumbAction>(),
                _fx.Store,
                _fx.StateStore,
                _fx.GenesisBlock);
        }

        [Fact]
        public void ConsensusContext()
        {
            Assert.Throws<ArgumentOutOfRangeException>(
                () => new ConsensusContext<DumbAction>(
                    0,
                    new List<PublicKey>(),
                    _blockChain));
        }

        [Fact]
        public async void CommitBlock()
        {
            Block<DumbAction> block =
                await _blockChain.MineBlock(new PrivateKey(), append: false);
            _fx.Store.PutBlock(block);
            ConsensusContext<DumbAction> context = TestUtils.CreateConsensusContext(_blockChain);
            context.Round = 3;
            long prevHeight = context.Height;
            context.CommitBlock(context.Height, block.Hash);
            Assert.Equal(prevHeight + 1, context.Height);
            Assert.Equal(0, context.Round);
        }

        [Fact]
        public void NextRound()
        {
            ConsensusContext<DumbAction> context = TestUtils.CreateConsensusContext(_blockChain);
            context.NextRound(context.Round);
            Assert.Equal(1, context.Round);
        }

        [Fact]
        public void RoundContextOf()
        {
            ConsensusContext<DumbAction> context = TestUtils.CreateConsensusContext(_blockChain);
            context.NextRound(0);
            Assert.Equal(0, context.RoundContextOf(0).Round);
            Assert.Equal(1, context.RoundContextOf(1).Round);
            Assert.Equal(1, context.CurrentRoundContext.Round);
        }

        [Fact]
        public void ToStringTest()
        {
            long nodeId = 3;
            var validators = Enumerable.Range(0, 7)
                                             .Select(x => new PrivateKey().PublicKey)
                                             .ToList();
            long height = 6;
            long round = 5;
            string step = "DefaultState";
            ConsensusContext<DumbAction> context =
                TestUtils.CreateConsensusContext(validators, _blockChain, nodeId);
            context.Height = height;
            context.Round = round;
            Assert.Equal(
                $"{{\"node_id\":{nodeId},\"number_of_validator\":{validators.Count}," +
                $"\"height\":{height},\"round\":{round},\"step\":\"{step}\"}}",
                context.ToString());
        }
    }
}
