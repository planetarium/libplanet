using System;
using System.Threading;
using Libplanet.Blocks;
using Libplanet.Net.Messages;
using Libplanet.Tx;

namespace Libplanet.Net
{
    public class SwarmOptions
    {
        /// <summary>
        /// The maximum timeout used in <see cref="Swarm{T}"/>.
        /// </summary>
        public TimeSpan MaxTimeout { get; set; } = TimeSpan.FromSeconds(150);

        /// <summary>
        /// The base timeout used to receive the block hashes from other peers.
        /// </summary>
        public TimeSpan BlockHashRecvTimeout { get; set; } = TimeSpan.FromSeconds(30);

        /// <summary>
        /// The base timeout used to receive <see cref="Block{T}"/> from other peers.
        /// </summary>
        public TimeSpan BlockRecvTimeout { get; set; } = TimeSpan.FromSeconds(15);

        /// <summary>
        /// The base timeout used to receive <see cref="Transaction{T}"/> from other peers.
        /// </summary>
        public TimeSpan TxRecvTimeout { get; set; } = TimeSpan.FromSeconds(3);

        /// <summary>
        /// The timeout used to receive recent states from other peers.
        /// </summary>
        public TimeSpan RecentStateRecvTimeout { get; set; } = TimeSpan.FromSeconds(90);

        /// <summary>
        /// The timeout used to block download in preloading.
        /// </summary>
        public TimeSpan BlockDownloadTimeout { get; set; } = Timeout.InfiniteTimeSpan;

        /// <summary>
        /// The lifespan of block demand.
        /// </summary>
        public TimeSpan BlockDemandLifespan { get; set; } = TimeSpan.FromMinutes(1);

        /// <summary>
        /// The lifespan of <see cref="Message"/>.
        /// </summary>
        public TimeSpan? MessageLifespan { get; set; } = null;
    }
}
