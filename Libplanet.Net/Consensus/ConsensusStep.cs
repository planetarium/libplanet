namespace Libplanet.Net.Consensus
{
    public enum ConsensusStep
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

        /// <summary>
        /// Pre-proposing Step.
        /// </summary>
        PrePropose,

        /// <summary>
        /// Voting step for pre-proposal.
        /// </summary>
        PreProposeVote,

        /// <summary>
        /// Commit voting step for pre-proposal.
        /// </summary>
        PreProposeCommit,

        /// <summary>
        /// Only when context does not exists.
        /// </summary>
        Null = 0x99,
    }
}
