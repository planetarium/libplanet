namespace Libplanet.Consensus
{
    /// <summary>
    /// A State about <see cref="Vote"/>.
    /// </summary>
    public enum VoteFlag
    {
        /// <summary>
        /// Error.
        /// </summary>
        Null = 0,

        /// <summary>
        /// No response.
        /// </summary>
        Unknown = 1,

        /// <summary>
        /// Vote. but not commit.
        /// </summary>
        Absent = 2,

        /// <summary>
        /// Vote and Commit.
        /// </summary>
        Commit = 3,
    }
}
