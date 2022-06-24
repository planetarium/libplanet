using System;
using Libplanet.Blocks;
using Libplanet.Consensus;
using Libplanet.Net.Consensus;
using Libplanet.Net.Messages;
using Libplanet.Tests.Common.Action;
using Nito.AsyncEx;
using Xunit;
using Xunit.Abstractions;

namespace Libplanet.Net.Tests.Consensus.Context
{
    [Collection("NetMQConfiguration")]
    public class ContextProposerValidRoundTest : ContextTestBase
    {
        private const int NodeId = 1;

        public ContextProposerValidRoundTest(ITestOutputHelper output)
            : base(output, NodeId, 1, 2, Step.Propose)
        {
        }

        [Fact(Timeout = Timeout)]
        public async void EnterValidRoundPreVoteBlock()
        {
            Block<DumbAction> block =
                await BlockChain.MineBlock(TestUtils.PrivateKeys[1], append: false);

            _ = Transport.StartAsync();
            await Transport.WaitForRunningAsync();

            Context.AddMessage(TestUtils.CreateConsensusPropose(
                block, TestUtils.PrivateKeys[NodeId], round: 0, validRound: -1));

            Context.AddMessage(TestUtils.CreateConsensusPropose(
                block, TestUtils.PrivateKeys[2], nodeId: 2, round: 1, validRound: 0));

            Context.AddMessage(TestUtils.CreateConsensusPropose(
                block, TestUtils.PrivateKeys[3], nodeId: 3, round: 2, validRound: 1));

            Context.HandleMessage(
                new ConsensusVote(TestUtils.CreateVote(
                    TestUtils.PrivateKeys[0],
                    0,
                    1,
                    round: 1,
                    hash: block.Hash,
                    flag: VoteFlag.Absent))
                {
                    Remote = new Peer(TestUtils.Validators[0]),
                });

            Context.HandleMessage(new
                ConsensusVote(TestUtils.CreateVote(
                    TestUtils.PrivateKeys[2],
                    2,
                    1,
                    round: 1,
                    hash: block.Hash,
                    flag: VoteFlag.Absent))
                {
                    Remote = new Peer(TestUtils.Validators[2]),
                });

            Context.HandleMessage(
                new ConsensusVote(TestUtils.CreateVote(
                    TestUtils.PrivateKeys[3],
                    3,
                    1,
                    round: 1,
                    hash: block.Hash,
                    flag: VoteFlag.Absent))
                {
                    Remote = new Peer(TestUtils.Validators[3]),
                });

            Assert.Equal(Step.PreVote, Context.Step);
            Assert.Equal(1, Context.Height);
            Assert.Equal(2, Context.Round);
            await Transport.StopAsync(TimeSpan.FromSeconds(1));
        }

        [Fact(Timeout = Timeout)]
        public async void EnterValidRoundPreVoteNil()
        {
            var messageReceived = new AsyncManualResetEvent();
            void IsVoteSent(ConsensusMessage consensusMessage)
            {
                if (consensusMessage is ConsensusVote vote &&
                    vote.BlockHash.Equals(null))
                {
                    messageReceived.Set();
                }
            }

            watchConsensusMessage = IsVoteSent;
            Block<DumbAction> invalidBlock = GetInvalidBlock();

            _ = Transport.StartAsync();
            await Transport.WaitForRunningAsync();

            Context.AddMessage(TestUtils.CreateConsensusPropose(
                invalidBlock, TestUtils.PrivateKeys[NodeId], round: 0, validRound: -1));

            Context.AddMessage(TestUtils.CreateConsensusPropose(
                invalidBlock, TestUtils.PrivateKeys[2], nodeId: 2, round: 1, validRound: 0));

            Context.AddMessage(TestUtils.CreateConsensusPropose(
                invalidBlock, TestUtils.PrivateKeys[3], nodeId: 3, round: 2, validRound: 1));

            Context.HandleMessage(
                new ConsensusVote(TestUtils.CreateVote(
                    TestUtils.PrivateKeys[0],
                    0,
                    1,
                    round: 1,
                    hash: invalidBlock.Hash,
                    flag: VoteFlag.Absent))
                {
                    Remote = new Peer(TestUtils.Validators[0]),
                });

            Context.HandleMessage(new
                ConsensusVote(TestUtils.CreateVote(
                    TestUtils.PrivateKeys[2],
                    2,
                    1,
                    round: 1,
                    hash: invalidBlock.Hash,
                    flag: VoteFlag.Absent))
                {
                    Remote = new Peer(TestUtils.Validators[2]),
                });

            Context.HandleMessage(
                new ConsensusVote(TestUtils.CreateVote(
                    TestUtils.PrivateKeys[3],
                    3,
                    1,
                    round: 1,
                    hash: invalidBlock.Hash,
                    flag: VoteFlag.Absent))
                {
                    Remote = new Peer(TestUtils.Validators[3]),
                });

            await messageReceived.WaitAsync();
            Assert.Equal(Step.PreVote, Context.Step);
            Assert.Equal(1, Context.Height);
            Assert.Equal(2, Context.Round);
            await Transport.StopAsync(TimeSpan.FromSeconds(1));
        }
    }
}
