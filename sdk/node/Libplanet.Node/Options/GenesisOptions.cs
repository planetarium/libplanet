using System.ComponentModel;
using Libplanet.Node.DataAnnotations;

namespace Libplanet.Node.Options;

[Options(Position)]
[Description("Options for the genesis block.")]
public sealed class GenesisOptions : OptionsBase<GenesisOptions>
{
    public const string Position = "Genesis";

    [PrivateKey]
    [Description("The key of the genesis block.")]
    public string GenesisKey { get; set; } = string.Empty;

    [PublicKeyArray]
    [Description("Public keys of the validators.")]
    public string[] Validators { get; set; } = [];

    [Description("The timestamp of the genesis block.")]
    public DateTimeOffset Timestamp { get; set; } = DateTimeOffset.MinValue;
}
