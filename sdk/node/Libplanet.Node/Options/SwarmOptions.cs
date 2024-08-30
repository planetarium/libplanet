using System.ComponentModel;
using Libplanet.Node.DataAnnotations;

namespace Libplanet.Node.Options;

[Options(Position)]
public sealed class SwarmOptions : NodeOptionsBase<SwarmOptions>, IEnabledOptions
{
    public const string Position = "Swarm";

    public bool IsEnabled { get; set; }

    [DnsEndPoint]
    public string EndPoint { get; set; } = string.Empty;

    [BoundPeer]
    [Description("The endpoint of the node to block sync.")]
    public string BlocksyncSeedPeer { get; set; } = string.Empty;
}
