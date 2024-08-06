using System.ComponentModel.DataAnnotations;

namespace Libplanet.Node.Options;

public sealed class SeedOptions
{
    public const string BlocksyncSeed = nameof(BlocksyncSeed);
    public const string ConsensusSeed = nameof(ConsensusSeed);

    [RegularExpression("^(?:[0-9a-fA-F]{32})$")]
    public string PrivateKey { get; set; } = string.Empty;

    [RegularExpression(@"^((([a-zA-Z0-9\-\.]+)|(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})):\d{1,5})$")]
    public string EndPoint { get; set; } = string.Empty;

    [Range(0, int.MaxValue)]
    public int RefreshInterval { get; set; } = 5;

    [Range(0, int.MaxValue)]
    public int PeerLifetime { get; set; } = 120;

    [Range(0, int.MaxValue)]
    public int PingTimeout { get; set; } = 5;
}
