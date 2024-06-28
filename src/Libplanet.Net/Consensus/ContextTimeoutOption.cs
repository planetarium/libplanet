using System;

namespace Libplanet.Net.Consensus
{
    /// <summary>
    /// A options class to configure <see cref="Context"/> timeout
    /// for each <see cref="ConsensusStep"/>.
    /// </summary>
    public class ContextTimeoutOption
    {
        public ContextTimeoutOption(
            int lotGatherSecond = 1,
            int sortitionSecondBase = 4,
            int proposeSecondBase = 4,
            int preVoteSecondBase = 4,
            int preCommitSecondBase = 4,
            int sortitionMultiplier = 2,
            int proposeMultiplier = 2,
            int preVoteMultiplier = 2,
            int preCommitMultiplier = 2)
        {
            if (lotGatherSecond <= 0)
            {
                throw new ArgumentOutOfRangeException(
                    nameof(lotGatherSecond),
                    "LotGatherSecond must be greater than 0.");
            }

            LotGatherSecond = lotGatherSecond;

            if (sortitionSecondBase <= 0)
            {
                throw new ArgumentOutOfRangeException(
                    nameof(sortitionSecondBase),
                    "SortitionSecondBase must be greater than 0.");
            }

            SortitionSecondBase = sortitionSecondBase;

            if (SortitionSecondBase < LotGatherSecond)
            {
                throw new ArgumentOutOfRangeException(
                    nameof(sortitionSecondBase),
                    "SortitionSecondBase must be greater than LotGatherSecond.");
            }

            if (proposeSecondBase <= 0)
            {
                throw new ArgumentOutOfRangeException(
                    nameof(proposeSecondBase),
                    "ProposeSecondBase must be greater than 0.");
            }

            ProposeSecondBase = proposeSecondBase;

            if (preVoteSecondBase <= 0)
            {
                throw new ArgumentOutOfRangeException(
                    nameof(preVoteSecondBase),
                    "PreVoteSecondBase must be greater than 0.");
            }

            PreVoteSecondBase = preVoteSecondBase;

            if (preCommitSecondBase <= 0)
            {
                throw new ArgumentOutOfRangeException(
                    nameof(preCommitSecondBase),
                    "PreCommitSecondBase must be greater than 0.");
            }

            PreCommitSecondBase = preCommitSecondBase;

            if (sortitionMultiplier <= 0)
            {
                throw new ArgumentOutOfRangeException(
                    nameof(sortitionMultiplier),
                    "SortitionMultiplier must be greater than 0.");
            }

            SortitionMultiplier = sortitionMultiplier;

            if (proposeMultiplier <= 0)
            {
                throw new ArgumentOutOfRangeException(
                    nameof(proposeMultiplier),
                    "ProposeMultiplier must be greater than 0.");
            }

            ProposeMultiplier = proposeMultiplier;

            if (preVoteMultiplier <= 0)
            {
                throw new ArgumentOutOfRangeException(
                    nameof(preVoteMultiplier),
                    "PreVoteMultiplier must be greater than 0.");
            }

            PreVoteMultiplier = preVoteMultiplier;

            if (preCommitMultiplier <= 0)
            {
                throw new ArgumentOutOfRangeException(
                    nameof(preCommitMultiplier),
                    "PreCommitMultiplier must be greater than 0.");
            }

            PreCommitMultiplier = preCommitMultiplier;
        }

        public int LotGatherSecond { get; }

        public int SortitionSecondBase { get; }

        public int ProposeSecondBase { get; }

        public int PreVoteSecondBase { get; }

        public int PreCommitSecondBase { get; }

        public int SortitionMultiplier { get; }

        public int ProposeMultiplier { get; }

        public int PreVoteMultiplier { get; }

        public int PreCommitMultiplier { get; }
    }
}
