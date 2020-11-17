#nullable enable
using System;
using Libplanet.Blocks;

namespace Libplanet.Net
{
    /// <summary>
    /// Struct represents <see cref="Swarm{T}"/>'s block demand status.
    /// </summary>
    public readonly struct BlockDemand
    {
        /// <summary>
        /// The <see cref="BlockHeader"/> of the block to request.
        /// </summary>
        public readonly BlockHeader Header;

        /// <summary>
        /// The <see cref="BoundPeer"/> to request block hash from.
        /// </summary>
        public readonly BoundPeer Peer;

        /// <summary>
        /// The <see cref="DateTimeOffset"/> when
        /// the corresponding block information was received.
        /// </summary>
        public readonly DateTimeOffset Timestamp;

        public BlockDemand(BlockHeader header, BoundPeer peer, DateTimeOffset timestamp)
        {
            Header = header;
            Peer = peer;
            Timestamp = timestamp;
        }
    }
}
