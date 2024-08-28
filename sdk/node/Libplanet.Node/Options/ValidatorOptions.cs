using System.ComponentModel;
using Libplanet.Node.DataAnnotations;

namespace Libplanet.Node.Options;

[Options(Position)]
public sealed class ValidatorOptions : OptionsBase<ValidatorOptions>, IEnabledOptions
{
    public const string Position = "Validator";

    [DefaultValue(true)]
    public bool IsEnabled { get; set; }

    [DnsEndPoint]
    public string EndPoint { get; set; } = string.Empty;

    [BoundPeer]
    [Description("The endpoint of the node to consensus.")]
    public string ConsensusSeedPeer { get; set; } = string.Empty;
}
