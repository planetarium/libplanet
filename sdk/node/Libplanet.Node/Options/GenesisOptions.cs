using System.ComponentModel;
using Libplanet.Crypto;
using Libplanet.Net;
using Libplanet.Node.DataAnnotations;
using Libplanet.Node.DependencyInjection;

namespace Libplanet.Node.Options;

[Options(Position)]
[Description("Options for the genesis block.")]
public sealed class GenesisOptions : OptionsBase<GenesisOptions>
{
    public const string Position = "Genesis";

    public static readonly PrivateKey AppProtocolKey
        = PrivateKey.FromString("2a15e7deaac09ce631e1faa184efadb175b6b90989cf1faed9dfc321ad1db5ac");

    public static readonly AppProtocolVersion AppProtocolVersion = AppProtocolVersion.Sign(
        AppProtocolKey, 1);

    [PrivateKey]
    [Description("The key of the genesis block.")]
    public string GenesisKey { get; set; } = string.Empty;

    [PublicKeyArray]
    [Description("The hash of the genesis block.")]
    public string[] Validators { get; set; } = [];

    [Description("The timestamp of the genesis block.")]
    public DateTimeOffset Timestamp { get; set; } = DateTimeOffset.MinValue;
}
