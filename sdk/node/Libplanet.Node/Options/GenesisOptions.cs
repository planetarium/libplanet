using System.ComponentModel;
using Libplanet.Node.DataAnnotations;

namespace Libplanet.Node.Options;

[Options(Position)]
[Description("Options for the genesis block.")]
public sealed class GenesisOptions : OptionsBase<GenesisOptions>
{
    public const string Position = "Genesis";

    [PrivateKey]
    [Description(
        $"The PrivateKey used to generate the genesis block. " +
        $"This property cannot be used with {nameof(GenesisBlockPath)} and " +
        $"{nameof(GenesisConfigurationPath)}.")]
    public string GenesisKey { get; set; } = string.Empty;

    [PublicKeyArray]
    [Description(
        $"Public keys of the validators. This property cannot be used with " +
        $"{nameof(GenesisBlockPath)}.")]
    public string[] Validators { get; set; } = [];

    [Description("The timestamp of the genesis block.")]
    public DateTimeOffset Timestamp { get; set; } = DateTimeOffset.MinValue;

    [Description(
        $"The path of the genesis block, which can be a file path or a URI." +
        $"This property cannot be used with {nameof(GenesisKey)} and " +
        $"{nameof(GenesisConfigurationPath)}.")]
    public string GenesisBlockPath { get; set; } = string.Empty;

    [Description(
        $"The path of the genesis configuration, which can be a file path or a URI." +
        $"This property cannot be used with {nameof(GenesisKey)} and {nameof(GenesisBlockPath)}.")]
    public string GenesisConfigurationPath { get; set; } = string.Empty;
}
