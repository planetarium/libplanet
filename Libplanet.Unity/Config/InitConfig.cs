using System;
using System.Collections.Generic;
using Libplanet.Net;
using Libplanet.Net.Protocols;

namespace Libplanet.Unity.Config
{
    /// <summary>
    /// Various options for initializing an <see cref="Swarm{T}"/> instance.
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
        /// Determines sampling threshold.
        /// </summary>
        public int BlockLocatorIndexSampleThreshold { get; set; } = 10;

        public string? Host { get; set; } = null;

        public int? Port { get; set; } = null;

        public List<IceServer> IceServers { get; set; } = new List<IceServer>();
    }
}
