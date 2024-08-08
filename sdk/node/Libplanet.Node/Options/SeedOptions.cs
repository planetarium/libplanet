using System.ComponentModel.DataAnnotations;
using Libplanet.Node.DataAnnotations;

namespace Libplanet.Node.Options;

public sealed class SeedOptions
{
    public const string BlocksyncSeed = nameof(BlocksyncSeed);
    public const string ConsensusSeed = nameof(ConsensusSeed);

    [PrivateKey]
    public string PrivateKey { get; set; } = string.Empty;

    [DnsEndPoint]
    public string EndPoint { get; set; } = string.Empty;

    [Range(0, int.MaxValue)]
    public int RefreshInterval { get; set; } = 5;

    [Range(0, int.MaxValue)]
    public int PeerLifetime { get; set; } = 120;

    [Range(0, int.MaxValue)]
    public int PingTimeout { get; set; } = 5;
}
