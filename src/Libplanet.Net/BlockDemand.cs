using System;
using Libplanet.Types.Blocks;

namespace Libplanet.Net
{
    /// <summary>
    /// Struct represents <see cref="Swarm"/>'s block demand status.
    /// </summary>
    public readonly struct BlockDemand : IBlockExcerpt
    {
        /// <summary>
        /// The <see cref="IBlockExcerpt"/> of the block to request.
        /// </summary>
        public readonly IBlockExcerpt BlockExcerpt;

        /// <summary>
        /// The <see cref="BoundPeer"/> to request block hash from.
        /// </summary>
        public readonly BoundPeer Peer;

        /// <summary>
        /// The <see cref="DateTimeOffset"/> when
        /// the corresponding block information was received.
        /// </summary>
        public readonly DateTimeOffset Timestamp;

        public BlockDemand(IBlockExcerpt blockExcerpt, BoundPeer peer, DateTimeOffset timestamp)
        {
            BlockExcerpt = blockExcerpt;
            Peer = peer;
            Timestamp = timestamp;
        }

        /// <inheritdoc cref="IBlockExcerpt.ProtocolVersion"/>
        public int ProtocolVersion => BlockExcerpt.ProtocolVersion;

        /// <inheritdoc cref="IBlockExcerpt.Index"/>
        public long Index => BlockExcerpt.Index;

        /// <inheritdoc cref="IBlockExcerpt.Hash"/>
        public BlockHash Hash => BlockExcerpt.Hash;
    }
}
