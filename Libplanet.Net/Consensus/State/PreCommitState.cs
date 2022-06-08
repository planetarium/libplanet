using Libplanet.Action;
using Libplanet.Consensus;
using Libplanet.Net.Messages;

namespace Libplanet.Net.Consensus.State
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

            RoundContext<T> roundContext = context.RoundContextOf(commit.Height, commit.Round);

            roundContext.Vote(commit.CommitVote);

            if (!roundContext.VoteSet.HasTwoThirdCommit())
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

            RoundContext<T> targetContext = context.RoundContextOf(vote.Height, vote.Round);
            targetContext.Vote(vote.ProposeVote);

            if (!targetContext.VoteSet.HasTwoThirdPrevote())
            {
                return null;
            }

            context.Round = vote.Round;
            targetContext.BlockHash = vote.BlockHash;
            return new ConsensusCommit(context.SignVote(targetContext.Voting(VoteFlag.Commit)));
        }
    }
}
