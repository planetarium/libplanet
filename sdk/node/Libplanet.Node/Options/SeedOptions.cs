using System.ComponentModel.DataAnnotations;
using Libplanet.Node.DataAnnotations;
using Libplanet.Node.DependencyInjection;

namespace Libplanet.Node.Options;

[Options(BlocksyncSeed, Scope = "Seed")]
[Options(ConsensusSeed, Scope = "Seed")]
public sealed class SeedOptions : OptionsBase<SeedOptions>
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
