using System.ComponentModel;
using Libplanet.Node.DataAnnotations;
using Libplanet.Node.DependencyInjection;

namespace Libplanet.Node.Options;

[Options(Position)]
public sealed class NodeOptions : OptionsBase<NodeOptions>
{
    public const string Position = "Node";

    [DefaultValue(true)]
    public bool IsEnabled { get; set; }

    [PrivateKey]
    [Description("The private key of the node.")]
    public string PrivateKey { get; set; } = string.Empty;

    [BoundPeer]
    [Description("The endpoint of the node to block sync.")]
    public string BlocksyncSeedPeer { get; init; } = string.Empty;

    [BoundPeer]
    [Description("The endpoint of the node to consensus.")]
    public string ConsensusSeedPeer { get; init; } = string.Empty;
}
