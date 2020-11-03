#nullable enable
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

        public BlockDemand(BlockHeader header, BoundPeer peer)
        {
            Header = header;
            Peer = peer;
        }
    }
}
