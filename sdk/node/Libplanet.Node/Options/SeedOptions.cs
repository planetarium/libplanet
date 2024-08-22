using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using Libplanet.Node.DataAnnotations;

namespace Libplanet.Node.Options;

// [Options(BlocksyncSeed, Scope = "Seed")]
// [Options(ConsensusSeed, Scope = "Seed")]
public sealed class SeedOptions : OptionsBase<SeedOptions>
{
    public const string BlocksyncSeed = nameof(BlocksyncSeed);
    public const string ConsensusSeed = nameof(ConsensusSeed);

    [PrivateKey]
    [Description("The private key of the seed node.")]
    public string PrivateKey { get; set; } = string.Empty;

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
