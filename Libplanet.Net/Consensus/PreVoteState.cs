using Libplanet.Action;
using Libplanet.Net.Messages;

namespace Libplanet.Net.Consensus
{
    public class PreVoteState<T> : IState<T>
        where T : IAction, new()
    {
        public string Name { get; } = "PreVoteState";

        public ConsensusMessage? Handle(ConsensusContext<T> context, ConsensusMessage message)
        {
            return message switch
            {
                ConsensusVote vote => HandleVote(context, vote),
                _ => throw new TryUnexpectedMessageHandleException(message),
            };
        }

        private ConsensusMessage? HandleVote(ConsensusContext<T> context, ConsensusVote vote)
        {
            if (context.Height != vote.Height)
            {
                throw new UnexpectedHeightProposeException(vote);
            }

            if (context.Round != vote.Round)
            {
                throw new UnexpectedRoundProposeException(vote);
            }

            if (!context.CurrentRoundContext.BlockHash.Equals(vote.BlockHash))
            {
                throw new UnexpectedBlockHashException(vote);
            }

            RoundContext<T> roundContext = context.CurrentRoundContext;
            roundContext.Vote(vote.Remote?.Address);

            if (!roundContext.HasTwoThirdsAny())
            {
                return null;
            }

            roundContext.ResetVote();
            roundContext.State = new PreCommitState<T>();
            return new ConsensusCommit(
                context.NodeId,
                context.Height,
                context.Round,
                roundContext.BlockHash);
        }
    }
}
