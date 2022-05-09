using Libplanet.Net.Messages;

namespace Libplanet.Net.Consensus
{
    public class PreVoteState : IState
    {
        public ConsensusMessage? Handle(ConsensusContext context, ConsensusMessage message)
        {
            return message switch
            {
                ConsensusVote vote => HandleVote(context, vote),
                _ => throw new TryUnexpectedMessageHandleException(message),
            };
        }

        private ConsensusMessage? HandleVote(ConsensusContext context, ConsensusVote vote)
        {
            if (context.Height != vote.Height)
            {
                throw new UnexpectedHeightProposeException(vote);
            }

            if (context.Round != vote.Round)
            {
                throw new UnexpectedRoundProposeException(vote);
            }

            RoundContext roundContext = context.CurrentRoundContext;
            roundContext.Vote(vote.Remote?.Address);

            if (!roundContext.HasTwoThirdsAny())
            {
                return null;
            }

            roundContext.ResetVote();
            roundContext.State = new PreCommitState();
            return new ConsensusCommit(
                context.NodeId,
                context.Height,
                context.Round,
                roundContext.Data);
        }
    }
}
