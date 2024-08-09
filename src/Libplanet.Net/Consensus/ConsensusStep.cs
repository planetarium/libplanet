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
    }
}
