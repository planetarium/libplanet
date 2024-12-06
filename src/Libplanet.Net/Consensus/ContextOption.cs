using System;

namespace Libplanet.Net.Consensus
{
    /// <summary>
    /// An options class to configure <see cref="Context"/> timeout and delay
    /// for each <see cref="ConsensusStep"/> in milliseconds.
    /// </summary>
    public class ContextOption
    {
        public ContextOption(
            int proposeTimeoutBase = 8_000,
            int preVoteTimeoutBase = 1_000,
            int preCommitTimeoutBase = 1_000,
            int proposeTimeoutDelta = 4_000,
            int preVoteTimeoutDelta = 500,
            int preCommitTimeoutDelta = 500,
            int enterPreVoteDelay = 0,
            int enterPreCommitDelay = 0,
            int enterEndCommitDelay = 0)
        {
            if (proposeTimeoutBase <= 0)
            {
                throw new ArgumentOutOfRangeException(
                    nameof(proposeTimeoutBase),
                    "ProposeTimeoutBase must be greater than 0.");
            }

            ProposeTimeoutBase = proposeTimeoutBase;

            if (preVoteTimeoutBase <= 0)
            {
                throw new ArgumentOutOfRangeException(
                    nameof(preVoteTimeoutBase),
                    "PreVoteTimeoutBase must be greater than 0.");
            }

            PreVoteTimeoutBase = preVoteTimeoutBase;

            if (preCommitTimeoutBase <= 0)
            {
                throw new ArgumentOutOfRangeException(
                    nameof(preCommitTimeoutBase),
                    "PreCommitTimeoutBase must be greater than 0.");
            }

            PreCommitTimeoutBase = preCommitTimeoutBase;

            if (proposeTimeoutDelta <= 0)
            {
                throw new ArgumentOutOfRangeException(
                    nameof(proposeTimeoutDelta),
                    "ProposeTimeoutDelta must be greater than 0.");
            }

            ProposeTimeoutDelta = proposeTimeoutDelta;

            if (preVoteTimeoutDelta <= 0)
            {
                throw new ArgumentOutOfRangeException(
                    nameof(preVoteTimeoutDelta),
                    "PreVoteTimeoutDelta must be greater than 0.");
            }

            PreVoteTimeoutDelta = preVoteTimeoutDelta;

            if (preCommitTimeoutDelta <= 0)
            {
                throw new ArgumentOutOfRangeException(
                    nameof(preCommitTimeoutDelta),
                    "PreCommitTimeoutDelta must be greater than 0.");
            }

            PreCommitTimeoutDelta = preCommitTimeoutDelta;

            if (enterPreVoteDelay < 0)
            {
                throw new ArgumentOutOfRangeException(
                    nameof(enterPreVoteDelay),
                    "EnterPreVoteDelay must be greater than or equal to 0.");
            }

            EnterPreVoteDelay = enterPreVoteDelay;

            if (enterPreCommitDelay < 0)
            {
                throw new ArgumentOutOfRangeException(
                    nameof(enterPreCommitDelay),
                    "EnterPreCommitDelay must be greater than or equal to 0.");
            }

            EnterPreCommitDelay = enterPreCommitDelay;

            if (enterEndCommitDelay < 0)
            {
                throw new ArgumentOutOfRangeException(
                    nameof(enterEndCommitDelay),
                    "EnterEndCommitDelay must be greater than or equal to 0.");
            }

            EnterEndCommitDelay = enterEndCommitDelay;
        }

        public int ProposeTimeoutBase { get; }

        public int PreVoteTimeoutBase { get; }

        public int PreCommitTimeoutBase { get; }

        public int ProposeTimeoutDelta { get; }

        public int PreVoteTimeoutDelta { get; }

        public int PreCommitTimeoutDelta { get; }

        public int EnterPreVoteDelay { get; }

        public int EnterPreCommitDelay { get; }

        public int EnterEndCommitDelay { get; }
    }
}
