namespace Libplanet.Net.Consensus
{
    public enum Step
    {
        /// <summary>
        /// Initial Step.
        /// </summary>
        Default,

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
