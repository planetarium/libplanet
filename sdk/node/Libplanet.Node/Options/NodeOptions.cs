using Libplanet.Node.DataAnnotations;

namespace Libplanet.Node.Options;

public sealed class NodeOptions
{
    public const string Position = "Node";

    [PrivateKey]
    public string PrivateKey { get; set; } = string.Empty;

    [BoundPeer]
    public string BlocksyncSeedPeer { get; init; } = string.Empty;

    [BoundPeer]
    public string ConsensusSeedPeer { get; init; } = string.Empty;
}
