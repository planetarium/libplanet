using System;
using Libplanet.Net;
using Libplanet.Net.Messages;
using Libplanet.Net.Protocols;

namespace Libplanet.Node
{
    /// <summary>
    /// Various options for a <see cref="Swarm{T}"/>'s sync phase.
    /// </summary>
    public class SyncConfig
    {
        /// <summary>
        /// Determines the lifespan of a tip.
        /// </summary>
        public TimeSpan TipLifespan { get; set; } = TimeSpan.FromSeconds(60);

        /// <summary>
        /// Determines how long to wait for dial responses during the syncing phase.
        /// </summary>
        public TimeSpan DialTimeout { get; set; } = TimeSpan.FromSeconds(5);

        /// <summary>
        /// Determines how often to broadcast <see cref="BlockHeaderMessage"/>.
        /// </summary>
        public TimeSpan BlockBroadcastInterval { get; set; } = TimeSpan.FromSeconds(15);

        /// <summary>
        /// Determines how often to broadcast <see cref="TxIds"/>.
        /// </summary>
        public TimeSpan TxBroadcastInterval { get; set; } = TimeSpan.FromSeconds(5);

        /// <summary>
        /// Determines how often a <see cref="RoutingTable"/> gets refreshed.
        /// </summary>
        public TimeSpan RoutingTableRefreshPeriod { get; set; } = TimeSpan.FromSeconds(10);

        /// <summary>
        /// Determines the lifespan of a <see cref="BoundPeer"/> in a <see cref="RoutingTable"/>.
        /// </summary>
        public TimeSpan RoutingTableBoundPeerLifespan { get; set; } = TimeSpan.FromSeconds(60);

        /// <summary>
        /// Determines the maximum number of <see cref="BoundPeer"/>s to poll when pulling
        /// blocks.
        /// </summary>
        public int MaximumPollNumPeers { get; set; } = int.MaxValue;

        /// <summary>
        /// Determines the minimum number of <see cref="BoundPeer"/>s to broadcast.
        /// </summary>
        public int MinimumBroadcastNumPeers { get; set; } = 10;

        /// <summary>
        /// Determines the lifespan of blocks in <see cref="BlockDemandTable{T}"/>.
        /// </summary>
        public TimeSpan BlockDemandLifespan { get; set; } = TimeSpan.FromSeconds(60);
    }
}
