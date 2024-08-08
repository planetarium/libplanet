using System.ComponentModel.DataAnnotations;
using Libplanet.Common;
using Libplanet.Crypto;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace Libplanet.Node.Options;

public sealed class SeedOptionsConfigurator(
    ILogger<SeedOptionsConfigurator> logger)
    : IConfigureNamedOptions<SeedOptions>
{
    private static readonly PrivateKey _defaultPrivateKey = new();

    public void Configure(string? name, SeedOptions options)
    {
        if (name == SeedOptions.BlocksyncSeed)
        {
            if (options.PrivateKey == string.Empty)
            {
                var message = """
                    BlocksyncSeed's private key is not set. A new private key is generated:
                    {PrivateKey}
                    """;
                options.PrivateKey = ByteUtil.Hex(_defaultPrivateKey.ByteArray);
                logger.LogWarning(message, options.PrivateKey);
            }
        }
        else if (name == SeedOptions.ConsensusSeed)
        {
            if (options.PrivateKey == string.Empty)
            {
                var message = """
                    ConsensusSeed's private key is not set. A new private key is generated:
                    {PrivateKey}
                    """;
                options.PrivateKey = ByteUtil.Hex(_defaultPrivateKey.ByteArray);
                logger.LogWarning(message, options.PrivateKey);
            }
        }
        else
        {
            logger.LogWarning(
                "SeedOptionsConfigurator is called with an unexpected name: {Name}",
                name);
        }

        if (options.EndPoint == string.Empty)
        {
            options.EndPoint = EndPointUtility.ToString(EndPointUtility.Next());
            logger.LogWarning(
                "{Name}'s endpoint is not set. A new endpoint is generated: {EndPoint}",
                name,
                options.EndPoint);
        }
    }

    public void Configure(SeedOptions options)
    {
        throw new NotSupportedException("This method should not be called.");
    }
}
