using Libplanet.Net.Messages;
using Serilog;

namespace Libplanet.Net.Consensus
{
    public class PreCommitState : IState
    {
        public ConsensusMessage? Handle(ConsensusContext context, ConsensusMessage message)
        {
            return message switch
            {
                ConsensusCommit commit => HandleCommit(context, commit),
                ConsensusVote vote => HandleResetRound(context, vote),
                _ => throw new TryUnexpectedMessageHandleException(message),
            };
        }

        private ConsensusMessage? HandleCommit(ConsensusContext context, ConsensusCommit commit)
        {
            Log.Debug("Context: {@Context}, HandleCommit: {@Message}", context, commit);

            if (context.Height != commit.Height)
            {
                throw new UnexpectedHeightProposeException(commit);
            }

            if (context.Round != commit.Round)
            {
                throw new UnexpectedRoundProposeException(commit);
            }

            RoundContext roundContext = context.CurrentRoundContext;

            roundContext.Vote(commit.Remote?.Address);

            if (!roundContext.HasTwoThirdsAny())
            {
                return null;
            }

            context.CommitBlock();

            return null;
        }

        private ConsensusMessage? HandleResetRound(ConsensusContext context, ConsensusVote vote)
        {
            if (context.Height != vote.Height)
            {
                return null;
            }

            if (context.Round >= vote.Round)
            {
                return null;
            }

            RoundContext targetContext = context.RoundContextOf(vote.Round);
            targetContext.Vote(vote.Remote?.Address);

            if (!targetContext.HasTwoThirdsAny())
            {
                return null;
            }

            context.Round = vote.Round;
            targetContext.Data = vote.Data;
            return new ConsensusCommit(
                context.NodeId,
                context.Height,
                context.Round,
                targetContext.Data);
        }
    }
}
