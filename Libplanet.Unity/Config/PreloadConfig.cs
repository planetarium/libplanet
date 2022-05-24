using System;

namespace Libplanet.Unity.Config
{
    /// <summary>
    /// Various options for the preloading phase.
    /// </summary>
    public class PreloadConfig
    {
        /// <summary>
        /// Determines whether to skip the preloading phase. If set to <c>true</c>, rest of
        /// the options are ignored.  Set to <c>false</c> by default.
        /// </summary>
        public bool Skip { get; set; } = false;

        /// <summary>
        /// Determines whether to call renderers during the preloading phase.
        /// Set to <c>false</c> by default.
        /// </summary>
        public bool Render { get; set; } = false;

        /// <summary>
        /// Determines when to stop preloading. Preloading is considered complete when
        /// the delta between the local node's tip index and the best known tip
        /// index is less than or equal to this value. Set to <c>10L</c> by default.
        /// </summary>
        public long DeltaThreshold { get; set; } = 10L;

        /// <summary>
        /// Determines how long to wait for dial responses during the preloading phase.
        /// </summary>
        public TimeSpan DialTimeout { get; set; } = TimeSpan.FromSeconds(3);
    }
}
