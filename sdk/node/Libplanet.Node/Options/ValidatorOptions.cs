using System.ComponentModel;
using Libplanet.Node.DataAnnotations;
using Libplanet.Node.DependencyInjection;

namespace Libplanet.Node.Options;

[Options(Position, Scope = "Validator")]
public sealed class ValidatorOptions : OptionsBase<ValidatorOptions>
{
    public const string Position = "Validator";

    [DnsEndPoint]
    public string EndPoint { get; set; } = string.Empty;

    [BoundPeer]
    [Description("The endpoint of the node to consensus.")]
    public string ConsensusSeedPeer { get; set; } = string.Empty;
}
