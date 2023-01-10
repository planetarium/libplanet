using System;
using System.Collections.Generic;
using Libplanet.Blockchain;
using Libplanet.Net;
using Libplanet.Net.Protocols;

namespace Libplanet.Node
{
    /// <summary>
    /// Various options for initializing a <see cref="Swarm{T}"/> instance.
    /// </summary>
    public class InitConfig
    {
        /// <summary>
        /// Hard upper limit on how long to wait for a response when sending messages to peers.
        /// </summary>
        public TimeSpan MaxTimeout { get; set; } = TimeSpan.FromSeconds(120);

        /// <summary>
        /// Hard lower limit on how long to wait for a response when sending messages to peers.
        /// </summary>
        /// <remarks>
        /// Currently unused.
        /// </remarks>
        public TimeSpan MinTimeout { get; set; } = TimeSpan.FromSeconds(1);

        /// <summary>
        /// Determines how many buckets there are for a <see cref="RoutingTable"/>.
        /// </summary>
        public int RoutingTableNumBuckets { get; set; } = Kademlia.TableSize;

        /// <summary>
        /// Determines the bucket size for each bucket in a <see cref="RoutingTable"/>.
        /// </summary>
        public int RoutingTableBucketSize { get; set; } = Kademlia.BucketSize;

        /// <summary>
        /// Determines sampling threshold for <see cref="BlockLocator"/>s.
        /// </summary>
        public int BlockLocatorIndexSampleThreshold { get; set; } = 10;

        /// <summary>
        /// Determines the host.  Set to <c>"localhost"</c> by default.
        /// </summary>
        public string? Host { get; set; } = "localhost";

        /// <summary>
        /// Determines the <em>incoming</em> port.  Set to <c>0</c> by default.
        /// </summary>
        public int Port { get; set; } = 0;

        /// <summary>
        /// The list of <see cref="IceServers"/> to use when connecting to the network.
        /// If <see cref="Host"/> is provided, this gets ignored.
        /// </summary>
        public IEnumerable<IceServer> IceServers { get; set; } = new List<IceServer>();
    }
}
