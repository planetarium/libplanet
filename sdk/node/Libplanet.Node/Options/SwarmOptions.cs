using System.ComponentModel;
using Libplanet.Node.DataAnnotations;

namespace Libplanet.Node.Options;

[Options(Position)]
public sealed class SwarmOptions : OptionsBase<SwarmOptions>, IEnabledOptions
{
    public const string Position = "Swarm";

    public bool IsEnabled { get; set; }

    [PrivateKey]
    [Description("The private key of the node.")]
    public string PrivateKey { get; set; } = string.Empty;

    [DnsEndPoint]
    public string EndPoint { get; set; } = string.Empty;

    [AppProtocolVersion]
    [Description("The version of the application protocol.")]
    public string AppProtocolVersion { get; set; } = string.Empty;

    [BoundPeer]
    [Description("The endpoint of the node to block sync.")]
    public string BlocksyncSeedPeer { get; set; } = string.Empty;
}
