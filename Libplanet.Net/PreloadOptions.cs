using System;
using Libplanet.Net.Messages;
using Libplanet.Net.Transports;

namespace Libplanet.Net
{
    public class PreloadOptions
    {
        public const int DefaultDialTimeout = 5;
        public const long DefaultTipDeltaThreshold = 25L;

        /// <summary>
        /// Determines how long an <see cref="ITransport"/> should wait before timimg out
        /// when dialing peers for either <see cref="PongMsg"/>, <see cref="NeighborsMsg"/>,
        /// or <see cref="ChainStatusMsg"/> during a preloading phase.  Generally, a more relaxed
        /// <see cref="TimeSpan"/> is used compared to <see cref="TimeoutOptions.DialTimeout"/>.
        /// Set to <see cref="DefaultDialTimeout"/> seconds by default.
        /// </summary>
        /// <seealso cref="TimeoutOptions.DialTimeout"/>
        public TimeSpan DialTimeout { get; set; }
            = TimeSpan.FromSeconds(DefaultDialTimeout);

        /// <summary>
        /// Determines when to stop preloading. Preloading is considered complete when
        /// the delta between the local node's tip index and the best known tip
        /// index is less than or equal to this value.  Set to
        /// <see cref="DefaultTipDeltaThreshold"/> by default. </summary>
        public long TipDeltaThreshold { get; set; } = DefaultTipDeltaThreshold;
    }
}
