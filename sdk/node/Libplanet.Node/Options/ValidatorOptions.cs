using System.ComponentModel;
using Libplanet.Node.DataAnnotations;

namespace Libplanet.Node.Options;

[Options(Position)]
public sealed class ValidatorOptions : AppProtocolOptionsBase<ValidatorOptions>
{
    public const string Position = "Validator";

    public bool IsEnabled { get; set; }

    [PrivateKey]
    [Description("The private key of Validator.")]
    public string PrivateKey { get; set; } = string.Empty;

    [DnsEndPoint]
    public string EndPoint { get; set; } = string.Empty;

    [BoundPeer]
    [Description("The endpoint of the node to consensus.")]
    public string ConsensusSeedPeer { get; set; } = string.Empty;
}
