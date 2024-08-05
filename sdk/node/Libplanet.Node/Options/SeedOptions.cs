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

    public TimeSpan RefreshInterval { get; set; } = TimeSpan.FromSeconds(5);

    public TimeSpan PeerLifetime { get; set; } = TimeSpan.FromSeconds(120);

    public TimeSpan PingTimeout { get; set; } = TimeSpan.FromSeconds(5);
}
