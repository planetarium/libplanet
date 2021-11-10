using System;
using System.Collections.Immutable;
using System.Threading;
using Libplanet.Blockchain;
using Libplanet.Blocks;
using Libplanet.Net.Messages;
using Libplanet.Net.Protocols;
using Libplanet.Net.Transports;
using Libplanet.Tx;

namespace Libplanet.Net
{
    public class SwarmOptions
    {
        /// <summary>
        /// <c>Enum</c> represents the type of the <see cref="ITransport"/>.
        /// </summary>
        public enum TransportType : byte
        {
            /// <summary>
            /// NetMQ based transport.
            /// </summary>
            NetMQTransport = 0x01,

            /// <summary>
            /// TCP based transport.
            /// </summary>
            TcpTransport = 0x02,
        }

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

        /// <summary>
        /// The frequency of <see cref="IProtocol.RefreshTableAsync" />.
        /// </summary>
        public TimeSpan RefreshPeriod { get; set; } = TimeSpan.FromSeconds(10);

        /// <summary>
        /// The lifespan of <see cref="Peer"/> in routing table.
        /// <seealso cref="IProtocol.RefreshTableAsync" />
        /// </summary>
        public TimeSpan RefreshLifespan { get; set; } = TimeSpan.FromSeconds(60);

        /// <summary>
        /// The list of <see cref="Peer"/>s to keep in routing table permanently.
        /// The <see cref="Peer"/>s in the list will be maintained periodically within
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
        /// The interval between block polling.
        /// </summary>
        public TimeSpan PollInterval { get; set; } = TimeSpan.FromSeconds(15);

        /// <summary>
        /// The maximum number of peers to poll blocks.
        /// </summary>
        public int MaximumPollPeers { get; set; } = int.MaxValue;

        /// <summary>
        /// The lifespan of the <see cref="BlockChain{T}.Tip"/>.  When the tip has not been updated
        /// for the configured lifespan, <see cref="Swarm{T}"/> pulls new blocks from neighbor
        /// peers.
        /// </summary>
        public TimeSpan TipLifespan { get; set; } = TimeSpan.FromSeconds(30);

        /// <summary>
        /// The type of <see cref="ITransport"/> used in <see cref="Swarm{T}"/>.
        /// </summary>
        public TransportType Type { get; set; } = TransportType.TcpTransport;
    }
}
