using Libplanet.Net.Messages;

namespace Libplanet.Net.Consensus
{
    public class DefaultState : IState
    {
        public ConsensusMessage Handle(ConsensusContext context, ConsensusMessage message)
        {
            return message switch
            {
                ConsensusPropose propose => HandlePropose(context, propose),
                _ => throw new TryUnexpectedMessageHandleException(message),
            };
        }

        private ConsensusMessage HandlePropose(ConsensusContext context, ConsensusPropose propose)
        {
            if (context.Height != propose.Height)
            {
                throw new UnexpectedHeightProposeException(propose);
            }

            if (context.Round != propose.Round)
            {
                throw new UnexpectedRoundProposeException(propose);
            }

            RoundContext roundContext = context.CurrentRoundContext;
            if (roundContext.LeaderElection() != propose.NodeId)
            {
                throw new UnexpectedLeaderProposeException(propose);
            }

            if (roundContext.Proposer() != propose.Remote?.Address)
            {
                throw new UnexpectedLeaderProposeException(propose);
            }

            roundContext.Data = propose.Data;
            roundContext.State = new PreVoteState();
            return new ConsensusVote(
                context.NodeId,
                context.Height,
                context.Round,
                roundContext.Data);
        }
    }
}
