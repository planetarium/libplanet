using System.ComponentModel.DataAnnotations;
using Bencodex;
using Bencodex.Types;
using Libplanet.Crypto;
using Libplanet.Net;

namespace Libplanet.Node.Options;

public sealed record class GenesisOptions
{
    public const string Position = "Genesis";

    public static readonly PrivateKey AppProtocolKey
        = PrivateKey.FromString("2a15e7deaac09ce631e1faa184efadb175b6b90989cf1faed9dfc321ad1db5ac");

    public static readonly AppProtocolVersion AppProtocolVersion = AppProtocolVersion.Sign(
        AppProtocolKey, 1);

    private static readonly Codec _codec = new();

    public GenesisOptions()
    {
    }

    [Required]
    public required PrivateKey GenesisKey { get; init; }

    public PublicKey[] Validators { get; init; } = [];

    public DateTimeOffset Timestamp { get; init; } = DateTimeOffset.MinValue;

    public byte[] ToByteArray()
    {
        var genesisKey = GenesisKey.ToByteArray();
        var genesisValidators
            = new List(Validators.Select(item => item.ToImmutableArray(compress: false)));
        var timestamp = Timestamp.ToUnixTimeMilliseconds();
        var dictionary = Dictionary.Empty
                            .Add(nameof(GenesisKey), genesisKey)
                            .Add(nameof(Validators), genesisValidators)
                            .Add(nameof(Timestamp), timestamp);
        return _codec.Encode(dictionary);
    }
}
