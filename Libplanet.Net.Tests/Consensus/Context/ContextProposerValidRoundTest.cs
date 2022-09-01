using System.Threading.Tasks;
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
    public class ContextProposerValidRoundTest : ContextTestBase
    {
        private const int NodeId = 1;

        public ContextProposerValidRoundTest(ITestOutputHelper output)
            : base(output, NodeId, 1, 2, Step.Propose)
        {
        }

        [Fact(Timeout = Timeout)]
        public async Task EnterValidRoundPreVoteBlock()
        {
            Block<DumbAction> block = BlockChain.ProposeBlock(TestUtils.PrivateKeys[1]);
            var voteSent = new AsyncAutoResetEvent();
            ConsensusMessageSent += (observer, message) =>
            {
                if (message is ConsensusVote vote && vote.BlockHash.Equals(block.Hash))
                {
                    voteSent.Set();
                }
            };

            // Bypass StartAsync() to avoid StartRound(0).
            _ = Context.MessageConsumerTask(default);
            _ = Context.MutationConsumerTask(default);

            Context.ProduceMessage(TestUtils.CreateConsensusPropose(
                block, TestUtils.ConsensusPrivateKeys[NodeId], round: 0, validRound: -1));

            Context.ProduceMessage(TestUtils.CreateConsensusPropose(
                block, TestUtils.ConsensusPrivateKeys[2], round: 1, validRound: 0));

            Context.ProduceMessage(TestUtils.CreateConsensusPropose(
                block, TestUtils.ConsensusPrivateKeys[3], round: 2, validRound: 1));

            Context.ProduceMessage(
                new ConsensusVote(TestUtils.CreateVote(
                    TestUtils.ConsensusPrivateKeys[0],
                    1,
                    round: 1,
                    hash: block.Hash,
                    flag: VoteFlag.Absent))
                {
                    Remote = TestUtils.Peers[0],
                });

            Context.ProduceMessage(new
                ConsensusVote(TestUtils.CreateVote(
                    TestUtils.ConsensusPrivateKeys[2],
                    1,
                    round: 1,
                    hash: block.Hash,
                    flag: VoteFlag.Absent))
                {
                    Remote = TestUtils.Peers[2],
                });

            Context.ProduceMessage(
                new ConsensusVote(TestUtils.CreateVote(
                    TestUtils.ConsensusPrivateKeys[3],
                    1,
                    round: 1,
                    hash: block.Hash,
                    flag: VoteFlag.Absent))
                {
                    Remote = TestUtils.Peers[3],
                });

            await voteSent.WaitAsync();
            Assert.Equal(Step.PreVote, Context.Step);
            Assert.Equal(1, Context.Height);
            Assert.Equal(2, Context.Round);
        }

        [Fact(Timeout = Timeout)]
        public async void EnterValidRoundPreVoteNil()
        {
            Block<DumbAction> invalidBlock = GetInvalidBlock();
            var voteSent = new AsyncAutoResetEvent();
            ConsensusMessageSent += (observer, message) =>
            {
                if (message is ConsensusVote vote && vote.BlockHash is null)
                {
                    voteSent.Set();
                }
            };

            // Bypass StartAsync() to avoid StartRound(0).
            _ = Context.MessageConsumerTask(default);
            _ = Context.MutationConsumerTask(default);

            Context.ProduceMessage(TestUtils.CreateConsensusPropose(
                invalidBlock, TestUtils.ConsensusPrivateKeys[NodeId], round: 0, validRound: -1));

            Context.ProduceMessage(TestUtils.CreateConsensusPropose(
                invalidBlock, TestUtils.ConsensusPrivateKeys[2], round: 1, validRound: 0));

            Context.ProduceMessage(TestUtils.CreateConsensusPropose(
                invalidBlock, TestUtils.ConsensusPrivateKeys[3], round: 2, validRound: 1));

            Context.ProduceMessage(
                new ConsensusVote(TestUtils.CreateVote(
                    TestUtils.ConsensusPrivateKeys[0],
                    1,
                    round: 1,
                    hash: invalidBlock.Hash,
                    flag: VoteFlag.Absent))
                {
                    Remote = TestUtils.Peers[0],
                });

            Context.ProduceMessage(new
                ConsensusVote(TestUtils.CreateVote(
                    TestUtils.ConsensusPrivateKeys[2],
                    1,
                    round: 1,
                    hash: invalidBlock.Hash,
                    flag: VoteFlag.Absent))
                {
                    Remote = TestUtils.Peers[2],
                });

            Context.ProduceMessage(
                new ConsensusVote(TestUtils.CreateVote(
                    TestUtils.ConsensusPrivateKeys[3],
                    1,
                    round: 1,
                    hash: invalidBlock.Hash,
                    flag: VoteFlag.Absent))
                {
                    Remote = TestUtils.Peers[3],
                });

            await voteSent.WaitAsync();
            Assert.Equal(Step.PreVote, Context.Step);
            Assert.Equal(1, Context.Height);
            Assert.Equal(2, Context.Round);
        }
    }
}
