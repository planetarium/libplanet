namespace Libplanet.Net
{
    [Equals]
    public class PreloadState
    {
        protected PreloadState(PreloadPhase currentPhase, int totalPhase)
        {
            CurrentPhase = (int)currentPhase;
            TotalPhase = totalPhase;
        }

        /// <summary>
        /// Enum to describe phases of progress in preload.
        /// </summary>
        protected enum PreloadPhase
        {
            /// <summary>
            /// The phase to download blocks.
            /// </summary>
            BlockDownload = 1,

            /// <summary>
            /// The phase to downloading state references.
            /// </summary>
            StateReferenceDownload = 2,

            /// <summary>
            /// The phase to download blocks.
            /// </summary>
            BlockStatesDownload = 3,

            /// <summary>
            /// The phase to execute actions.
            /// This phase will be came when <see cref="Swarm{T}"/> failed to receive
            /// state-references or block-states.
            /// </summary>
            BlockEvaluate = 4,
        }

        /// <summary>
        /// The current phase.
        /// </summary>
        public int CurrentPhase { get; }

        /// <summary>
        /// The number of total phases.
        /// </summary>
        public int TotalPhase { get; }
    }
}
