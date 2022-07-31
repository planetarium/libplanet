using System;
using System.Collections.Generic;
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
        /// Determines how often to broadcast <see cref="BlockHeaderMsg"/>.
        /// </summary>
        public TimeSpan BlockBroadcastInterval { get; set; } = TimeSpan.FromSeconds(15);

        /// <summary>
        /// Determines how often to broadcast <see cref="TxIdsMsg"/>.
        /// </summary>
        public TimeSpan TxBroadcastInterval { get; set; } = TimeSpan.FromSeconds(5);

        /// <summary>
        /// A list of <see cref="BoundPeer"/>s to be treated as static.
        /// </summary>
        /// <remarks>
        /// Despite its name, static peers are not truly static in the sense that it is not kept
        /// in a <see cref="RoutingTable"/>. <see cref="StaticPeers"/> are artificially added
        /// to a <see cref="RoutingTable"/> periodically.
        /// </remarks>
        public IEnumerable<BoundPeer> StaticPeers { get; set; } = new List<BoundPeer>();

        /// <summary>
        /// Determines how often a <see cref="BoundPeer"/> from <see cref="StaticPeers"/> is
        /// artificially added to a <see cref="RoutingTable"/>.
        /// </summary>
        /// <remarks>
        /// A static <see cref="BoundPeer"/> is only added to a <see cref="RoutingTable"/> if
        /// the dialing is successful, just like any other normal <see cref="BoundPeer"/>.
        /// </remarks>
        public TimeSpan StaticPeersMaintainPeriod { get; set; }

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
