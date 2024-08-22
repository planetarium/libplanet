using Libplanet.Common;
using Libplanet.Crypto;
using Libplanet.Node.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace Libplanet.Node.Options;

[Singleton<IConfigureOptions<SwarmOptions>>(Scope = "Swarm")]
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
    }
}
