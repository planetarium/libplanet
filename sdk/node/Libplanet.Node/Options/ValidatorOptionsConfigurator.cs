using Libplanet.Common;
using Libplanet.Crypto;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace Libplanet.Node.Options;

internal sealed class ValidatorOptionsConfigurator(
    IOptions<SwarmOptions> swarmOptions,
    ILogger<ValidatorOptionsConfigurator> logger)
    : OptionsConfiguratorBase<ValidatorOptions>
{
    protected override void OnConfigure(ValidatorOptions options)
    {
        if (options.PrivateKey == string.Empty)
        {
            options.PrivateKey = swarmOptions.Value.PrivateKey;
            logger.LogWarning(
                "Validator's private key is not set. Use the swarm's private key: {PrivateKey}",
                options.PrivateKey);
        }

        if (options.AppProtocolVersion == string.Empty)
        {
            options.AppProtocolVersion = swarmOptions.Value.AppProtocolVersion;
            logger.LogWarning(
                "Validator's app protocol version is not set. Use the swarm's " +
                "app protocol version: {AppProtocolVersion}",
                options.AppProtocolVersion);
        }

        if (options.EndPoint == string.Empty)
        {
            options.EndPoint = EndPointUtility.ToString(EndPointUtility.Next());
            logger.LogWarning(
                "Validator's endpoint is not set. A new endpoint is generated: {EndPoint}",
                options.EndPoint);
        }
    }
}
