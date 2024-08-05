using Libplanet.Net;

namespace Libplanet.Node.Services;

public interface IConsensusSeedService
{
    BoundPeer BoundPeer { get; }
}
