using System;
using System.Numerics;
using Libplanet.Blocks;

namespace Libplanet.Net
{
    /// <summary>
    /// Struct represents <see cref="Swarm{T}"/>'s block demand status.
    /// </summary>
    public readonly struct BlockDemand : IBlockExcerpt
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

        public int ProtocolVersion => Header.ProtocolVersion;

        public long Index => Header.Index;

        public BlockHash Hash => ((IBlockExcerpt)Header).Hash;

        public BigInteger TotalDifficulty => Header.TotalDifficulty;
    }
}
