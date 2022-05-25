using Libplanet.Action;
using Libplanet.Consensus;
using Libplanet.Net.Messages;

namespace Libplanet.Net.Consensus
{
    public class DefaultState<T> : IState<T>
        where T : IAction, new()
    {
        public string Name { get; } = "DefaultState";

        public ConsensusMessage? Handle(ConsensusContext<T> context, ConsensusMessage message)
        {
            return message switch
            {
                ConsensusPropose propose => HandlePropose(context, propose),
                _ => throw new TryUnexpectedMessageHandleException(message),
            };
        }

        private ConsensusMessage? HandlePropose(
            ConsensusContext<T> context,
            ConsensusPropose propose)
        {
            if (context.Height != propose.Height)
            {
                throw new UnexpectedHeightProposeException(propose);
            }

            if (context.Round != propose.Round)
            {
                throw new UnexpectedRoundProposeException(propose);
            }

            RoundContext<T> roundContext = context.CurrentRoundContext;
            if (roundContext.LeaderElection() != propose.NodeId)
            {
                throw new UnexpectedLeaderProposeException(propose);
            }

            if (roundContext.Proposer() != propose.Remote?.Address)
            {
                throw new UnexpectedLeaderProposeException(propose);
            }

            roundContext.BlockHash = propose.BlockHash;
            roundContext.State = new PreVoteState<T>();

            return context.ContainsBlock(propose.BlockHash) ?
                new ConsensusVote(
                    context.SignVote(
                    roundContext.Voting(VoteFlag.Absent))) : null;
        }
    }
}
