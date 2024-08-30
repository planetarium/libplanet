using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using Libplanet.Node.DataAnnotations;

namespace Libplanet.Node.Options;

public sealed class SeedOptions : NodeOptionsBase<SeedOptions>
{
    public const string BlocksyncSeed = nameof(BlocksyncSeed);
    public const string ConsensusSeed = nameof(ConsensusSeed);

    [DnsEndPoint]
    [Description("The endpoint of the seed node.")]
    public string EndPoint { get; set; } = string.Empty;

    [Range(0, int.MaxValue)]
    [Description("The interval to refresh the peer list.")]
    public int RefreshInterval { get; set; } = 5;

    [Range(0, int.MaxValue)]
    [Description("The lifetime of a peer.")]
    public int PeerLifetime { get; set; } = 120;

    [Range(0, int.MaxValue)]
    [Description("The timeout for a ping.")]
    public int PingTimeout { get; set; } = 5;
}
