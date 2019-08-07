namespace Libplanet.Net
{
    // <summary>
    // Indicates a progress of preloading things from the network.
    // </summary>
    [Equals]
    public class PreloadState
    {
        protected PreloadState(PreloadPhase currentPhase, int totalPhase)
        {
            CurrentPhase = (int)currentPhase;
            TotalPhase = totalPhase;
        }

        /// <summary>
        /// Each phase in the whole preloading process.
        /// </summary>
        protected enum PreloadPhase
        {
            /// <summary>
            /// The phase to download blocks.
            /// </summary>
            BlockDownload = 1,

            /// <summary>
            /// The phase to download state references.
            /// </summary>
            StateReferenceDownload = 2,

            /// <summary>
            /// The phase to download block states.
            /// </summary>
            BlockStatesDownload = 3,

            /// <summary>
            /// The phase to execute block actions.
            /// This phase is entered only when <see cref="Swarm{T}"/> fails to receive
            /// precalculated states from trusted peers or has no trusted peers at all.
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
