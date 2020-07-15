using System;
using Libplanet.Blocks;
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
        /// The base timeout used to receive <see cref="Block{T}"/> from other peers.
        /// </summary>
        public TimeSpan BlockRecvTimeout { get; } = TimeSpan.FromSeconds(15);

        /// <summary>
        /// The base timeout used to receive <see cref="Transaction{T}"/> from other peers.
        /// </summary>
        public TimeSpan TxRecvTimeout { get; } = TimeSpan.FromSeconds(3);

        /// <summary>
        /// The timeout used to receive recent states from other peers.
        /// </summary>
        public TimeSpan RecentStateRecvTimeout { get; } = TimeSpan.FromSeconds(90);
    }
}
