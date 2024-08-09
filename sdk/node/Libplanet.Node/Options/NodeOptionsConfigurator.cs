using Libplanet.Common;
using Libplanet.Crypto;
using Libplanet.Node.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace Libplanet.Node.Options;

[Singleton<IConfigureOptions<NodeOptions>>(Scope = "Node")]
internal sealed class NodeOptionsConfigurator(
    ILogger<NodeOptionsConfigurator> logger)
    : OptionsConfiguratorBase<NodeOptions>
{
    protected override void OnConfigure(NodeOptions options)
    {
        if (options.PrivateKey == string.Empty)
        {
            options.PrivateKey = ByteUtil.Hex(new PrivateKey().ByteArray);
            logger.LogWarning(
                "Node's private key is not set. A new private key is generated: {PrivateKey}",
                options.PrivateKey);
        }
    }
}
