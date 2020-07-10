#nullable enable
using Libplanet.Blocks;

namespace Libplanet.Net
{
    internal readonly struct BlockHashDemand
    {
        public readonly BlockHeader Header;

        public readonly BoundPeer Peer;

        public BlockHashDemand(BlockHeader header, BoundPeer peer)
        {
            Header = header;
            Peer = peer;
        }
    }
}
