namespace Libplanet.Net.Consensus
{
    public enum ConsensusStep
    {
        /// <summary>
        /// Initial Step.
        /// </summary>
        Default,

        /// <summary>
        /// Sortition step.
        /// </summary>
        Sortition,

        /// <summary>
        /// Proposing Step.
        /// </summary>
        Propose,

        /// <summary>
        /// Voting Step.
        /// </summary>
        PreVote,

        /// <summary>
        /// Commit voting step.
        /// </summary>
        PreCommit,

        /// <summary>
        /// Commit end step.
        /// </summary>
        EndCommit,

        /// <summary>
        /// Pre-proposing Step.
        /// </summary>
        PrePropose,

        /// <summary>
        /// Only when context does not exists.
        /// </summary>
        Null = 0x99,
    }
}
