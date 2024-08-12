using Libplanet.Node.DataAnnotations;
using Libplanet.Node.DependencyInjection;

namespace Libplanet.Node.Options;

[Options(Position, Scope = "Node")]
public sealed class NodeOptions : OptionsBase<NodeOptions>
{
    public const string Position = "Node";

    [PrivateKey]
    public string PrivateKey { get; set; } = string.Empty;

    [BoundPeer]
    public string BlocksyncSeedPeer { get; init; } = string.Empty;

    [BoundPeer]
    public string ConsensusSeedPeer { get; init; } = string.Empty;
}
