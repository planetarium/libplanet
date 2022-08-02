using System;
using System.Collections.Immutable;
using Libplanet.Net.Messages;
using Libplanet.Net.Protocols;
using Libplanet.Net.Transports;

namespace Libplanet.Net
{
    public class BootstrapOptions
    {
        public const int DefaultDialTimeout = 15;

        /// <summary>
        /// Determines how long an <see cref="ITransport"/> should wait before timimg out
        /// when dialing peers for either <see cref="PongMsg"/>, <see cref="NeighborsMsg"/>,
        /// or <see cref="ChainStatusMsg"/> during a bootstrapping phase.  Generally, a more relaxed
        /// <see cref="TimeSpan"/> is used compared to <see cref="TimeoutOptions.DialTimeout"/>.
        /// Set to <see cref="DefaultDialTimeout"/> seconds by default.
        /// </summary>
        /// <seealso cref="TimeoutOptions.DialTimeout"/>
        public TimeSpan DialTimeout { get; set; }
            = TimeSpan.FromSeconds(DefaultDialTimeout);

        /// <summary>
        /// The list of seed peers to connect to.
        /// </summary>
        public ImmutableList<BoundPeer> SeedPeers { get; set; } = ImmutableList<BoundPeer>.Empty;

        /// <summary>
        /// Determines the depth of the search when discovering neighbors for the local node.
        /// </summary>
        public int SearchDepth { get; set; } = Kademlia.MaxDepth;
    }
}
