using System;
using System.Collections.Immutable;
using Libplanet.Blockchain;
using Libplanet.Net.Messages;
using Libplanet.Net.Protocols;
using Libplanet.Net.Transports;
using Libplanet.Tx;

namespace Libplanet.Net
{
    public class SwarmOptions
    {
        /// <summary>
        /// The lifespan of block demand.
        /// </summary>
        public TimeSpan BlockDemandLifespan { get; set; } = TimeSpan.FromMinutes(1);

        /// <summary>
        /// The amount of difference in <see cref="TimeSpan"/> allowed from current local time for
        /// a received <see cref="Message"/>.
        /// </summary>
        public TimeSpan? MessageTimestampBuffer { get; set; } = TimeSpan.FromSeconds(60);

        /// <summary>
        /// The frequency of <see cref="IProtocol.RefreshTableAsync" />.
        /// </summary>
        public TimeSpan RefreshPeriod { get; set; } = TimeSpan.FromSeconds(10);

        /// <summary>
        /// The lifespan of <see cref="BoundPeer"/> in routing table.
        /// <seealso cref="IProtocol.RefreshTableAsync" />
        /// </summary>
        public TimeSpan RefreshLifespan { get; set; } = TimeSpan.FromSeconds(60);

        /// <summary>
        /// The list of <see cref="BoundPeer"/>s to keep in routing table permanently.
        /// The <see cref="BoundPeer"/>s in the list will be maintained periodically within
        /// <see cref="StaticPeersMaintainPeriod"/>.
        /// </summary>
        public IImmutableSet<BoundPeer> StaticPeers { get; set; } =
            ImmutableHashSet<BoundPeer>.Empty;

        /// <summary>
        /// The period of <c>Task</c> maintains static peer.
        /// </summary>
        /// <seealso cref="StaticPeers"/>
        public TimeSpan StaticPeersMaintainPeriod { get; set; } = TimeSpan.FromSeconds(10);

        /// <summary>
        /// The threshold for detecting branchpoint when block synchronization.
        /// If the branch point is outside threshold from the <see cref="BlockChain{T}.Tip" />,
        /// using an approximated value.
        /// </summary>
        public int BranchpointThreshold { get; set; } = 10;

        /// <summary>
        /// The minimum number to select from routing table when broadcast messages.
        /// It is 10 by default.
        /// </summary>
        public int MinimumBroadcastTarget { get; set; } = 10;

        /// <summary>
        /// Determines how often <see cref="Swarm{T}"/> braodcasts <see cref="BlockHeaderMsg"/>
        /// to its peers.
        /// </summary>
        /// <remarks>
        /// Broadcasts are also made whenever <see cref="BlockChain{T}.Tip"/> changes in addition
        /// to regular broadcasts determined by this option.
        /// </remarks>
        public TimeSpan BlockBroadcastInterval { get; set; }
            = TimeSpan.FromMilliseconds(15_000);

        /// <summary>
        /// Determines how often <see cref="Swarm{T}"/> braodcasts <see cref="TxIdsMsg"/>
        /// to its peers.
        /// </summary>
        /// <remarks>
        /// Broadcasts are also made whenever <see cref="Transaction{T}"/> is staged in addition
        /// to regular broadcasts determined by this option.
        /// </remarks>
        public TimeSpan TxBroadcastInterval { get; set; }
            = TimeSpan.FromMilliseconds(5_000);

        /// <summary>
        /// The number of buckets of the Kademlia based routing table.
        /// </summary>
        /// <seealso cref="RoutingTable"/>
        public int TableSize { get; set; } = Kademlia.TableSize;

        /// <summary>
        /// The size of each bucket of the Kademlia based routing table.
        /// </summary>
        /// <seealso cref="RoutingTable"/>
        public int BucketSize { get; set; } = Kademlia.BucketSize;

        /// <summary>
        /// The maximum number of peers to poll blocks.
        /// </summary>
        public int MaximumPollPeers { get; set; } = int.MaxValue;

        /// <summary>
        /// The lifespan of the <see cref="BlockChain{T}.Tip"/>.  When the tip has not been updated
        /// for the configured lifespan, <see cref="Swarm{T}"/> pulls new blocks from neighbor
        /// peers.
        /// </summary>
        public TimeSpan TipLifespan { get; set; } = TimeSpan.FromSeconds(60);

        /// <summary>
        /// Various options for the default bootstrap behavior of <see cref="Swarm{T}"/>.
        /// </summary>
        public BootstrapOptions BootstrapOptions { get; set; } = new BootstrapOptions();

        /// <summary>
        /// Various options for the default preload behavior of <see cref="Swarm{T}"/>.
        /// </summary>
        public PreloadOptions PreloadOptions { get; set; } = new PreloadOptions();

        /// <summary>
        /// Various timeout options for sending and receiving <see cref="Message"/>s through
        /// an <see cref="ITransport"/>.
        /// </summary>
        public TimeoutOptions TimeoutOptions { get; set; } = new TimeoutOptions();
    }
}
