using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Libplanet.Net.Consensus;
using Xunit;

namespace Libplanet.Net.Tests.Consensus
{
    public class ConsensusContextTest
    {
        [Fact]
        public void ConsensusContext()
        {
            Assert.Throws<ArgumentOutOfRangeException>(
                () => new ConsensusContext(0, new List<Address>(), new BaseStore<string>()));
        }

        [Fact]
        public void CommitBlock()
        {
            ConsensusContext context = TestUtils.CreateConsensusContext();
            context.Round = 3;
            long prevHeight = context.Height;
            context.CommitBlock();
            Assert.Equal(prevHeight + 1, context.Height);
            Assert.Equal(0, context.Round);
        }

        [Fact]
        public void StoreLoadData()
        {
            byte[] data1 = { 0x01, 0x02 };
            byte[] data2 = { 0x02, 0x03 };
            ConsensusContext context = TestUtils.CreateConsensusContext();
            context.StoreData(data1);
            Assert.Single(context.LoadData());
            Assert.Equal(
                new[] { Encoding.Default.GetString(data1).TrimEnd('\0') }.ToHashSet(),
                context.LoadData().ToHashSet());
            context.StoreData(data2);
            Assert.Equal(2, context.LoadData().Length);
            Assert.Equal(
                new[]
                {
                    Encoding.Default.GetString(data1).TrimEnd('\0'),
                    Encoding.Default.GetString(data2).TrimEnd('\0'),
                }.ToHashSet(),
                context.LoadData().ToHashSet());
        }

        [Fact]
        public void NextRound()
        {
            ConsensusContext context = TestUtils.CreateConsensusContext();
            context.NextRound();
            Assert.Equal(1, context.Round);
        }

        [Fact]
        public void RoundContextOf()
        {
            ConsensusContext context = TestUtils.CreateConsensusContext();
            context.NextRound();
            Assert.Equal(0, context.RoundContextOf(0).Round);
            Assert.Equal(1, context.RoundContextOf(1).Round);
            Assert.Equal(1, context.CurrentRoundContext.Round);
        }

        [Fact]
        public void ToStringTest()
        {
            long nodeId = 3;
            var validators = new Address[4].ToList();
            long height = 6;
            long round = 5;
            string step = "DefaultState";
            ConsensusContext context = TestUtils.CreateConsensusContext(validators, nodeId);
            context.Height = height;
            context.Round = round;
            Assert.Equal(
                $"{{\"node_id\":{nodeId},\"number_of_validator\":{validators.Count}," +
                $"\"height\":{height},\"round\":{round},\"step\":\"{step}\"}}",
                context.ToString());
        }
    }
}
