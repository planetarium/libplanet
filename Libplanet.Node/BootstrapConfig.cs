using System;
using System.Collections.Generic;
using Libplanet.Net;

namespace Libplanet.Node
{
    /// <summary>
    /// Various options for a <see cref="Swarm{T}"/>'s bootstrapping phase.
    /// </summary>
    public class BootstrapConfig
    {
        /// <summary>
        /// The list of seed peers to connect to.
        /// </summary>
        public IEnumerable<BoundPeer> SeedPeers { get; set; } = new List<BoundPeer>();

        /// <summary>
        /// Determines the depth of the search when discovering neighbors for the local node.
        /// </summary>
        public int SearchDepth { get; set; } = 1;

        /// <summary>
        /// Determines how long to wait for dial responses during the bootstrapping phase.
        /// </summary>
        public TimeSpan DialTimeout { get; set; } = TimeSpan.FromSeconds(5);
    }
}
