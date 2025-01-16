using Libplanet.Common;
using Libplanet.Crypto;
using Libplanet.Net;
using Microsoft.Extensions.Logging;

namespace Libplanet.Node.Options;

internal sealed class SwarmOptionsConfigurator(
    ILogger<SwarmOptionsConfigurator> logger)
    : OptionsConfiguratorBase<SwarmOptions>
{
    protected override void OnConfigure(SwarmOptions options)
    {
        if (options.PrivateKey == string.Empty)
        {
            options.PrivateKey = ByteUtil.Hex(new PrivateKey().ByteArray);
            logger.LogWarning(
                "Node's private key is not set. A new private key is generated: {PrivateKey}",
                options.PrivateKey);
        }

        if (options.EndPoint == string.Empty)
        {
            options.EndPoint = EndPointUtility.ToString(EndPointUtility.Next());
            logger.LogWarning(
                "Node's endpoint is not set. A new endpoint is generated: {EndPoint}",
                options.EndPoint);
        }

        if (options.AppProtocolVersion == string.Empty)
        {
            var privateKey = PrivateKey.FromString(options.PrivateKey);
            var version = 0;
            options.AppProtocolVersion = AppProtocolVersion.Sign(privateKey, version).Token;
            logger.LogWarning(
                "SwarmOptions.AppProtocolVersion is not set. A new version is " +
                "generated: {AppProtocolVersion}",
                options.AppProtocolVersion);
        }
    }
}
