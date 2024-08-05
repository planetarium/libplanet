using Libplanet.Net;

namespace Libplanet.Node.Services;

public interface IBlocksyncSeedService
{
    BoundPeer BoundPeer { get; }
}
