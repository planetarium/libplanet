using Libplanet.Action;
using Libplanet.Consensus;
using Libplanet.Net.Messages;
using Serilog;

namespace Libplanet.Net.Consensus
{
    public class PreCommitState<T> : IState<T>
        where T : IAction, new()
    {
        public string Name { get; } = "PreCommitState";

        public ConsensusMessage? Handle(ConsensusContext<T> context, ConsensusMessage message)
        {
            return message switch
            {
                ConsensusCommit commit => HandleCommit(context, commit),
                ConsensusVote vote => HandleResetRound(context, vote),
                _ => throw new TryUnexpectedMessageHandleException(message),
            };
        }

        private ConsensusMessage? HandleCommit(ConsensusContext<T> context, ConsensusCommit commit)
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

            if (!context.CurrentRoundContext.BlockHash.Equals(commit.BlockHash))
            {
                throw new UnexpectedBlockHashException(commit);
            }

            RoundContext<T> roundContext = context.CurrentRoundContext;

            roundContext.Vote(commit.CommitVote);

            if (!roundContext.HasTwoThirdsAny())
            {
                return null;
            }

            context.CommitBlock(roundContext.Height, roundContext.BlockHash);

            return null;
        }

        private ConsensusMessage? HandleResetRound(ConsensusContext<T> context, ConsensusVote vote)
        {
            if (context.Height != vote.Height)
            {
                return null;
            }

            if (context.Round >= vote.Round)
            {
                return null;
            }

            RoundContext<T> targetContext = context.RoundContextOf(vote.Round);
            targetContext.Vote(vote.ProposeVote);

            if (!targetContext.HasTwoThirdsAny())
            {
                return null;
            }

            context.Round = vote.Round;
            targetContext.BlockHash = vote.BlockHash;
            return new ConsensusCommit(targetContext.Voting(VoteFlag.Commit));
        }
    }
}
