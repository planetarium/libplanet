namespace Libplanet.Common.Types.Consensus
{
    /// <summary>
    /// A State about <see cref="Vote"/>.
    /// </summary>
    public enum VoteFlag
    {
        /// <summary>
        /// A flag for a <see cref="Vote"/> indicating that there was no response from a validator.
        /// </summary>
        Null = 0,

        /// <summary>
        /// A flag for a <see cref="Vote"/> that is for a pre-vote phase.
        /// </summary>
        PreVote = 1,

        /// <summary>
        /// A flag for a <see cref="Vote"/> that is for a pre-commit phase.
        /// </summary>
        PreCommit = 2,

        /// <summary>
        /// A flag for a <see cref="Vote"/> that is currently unused.  Reserved only for
        /// possible future use.
        /// </summary>
        Unknown = 3,
    }
}
