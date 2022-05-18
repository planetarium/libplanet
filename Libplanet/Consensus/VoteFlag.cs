namespace Libplanet.Consensus
{
    /// <summary>
    /// A State about <see cref="Vote"/>.
    /// </summary>
    public enum VoteFlag
    {
        /// <summary>
        /// No response.
        /// </summary>
        Unknown = 0,

        /// <summary>
        /// Vote. but not commit.
        /// </summary>
        Absent = 1,

        /// <summary>
        /// Vote and Commit.
        /// </summary>
        Commit = 2,

        /// <summary>
        /// Error.
        /// </summary>
        Null = 3,
    }
}
