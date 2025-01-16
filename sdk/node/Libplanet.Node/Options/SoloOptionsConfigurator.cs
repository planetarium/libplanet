using Libplanet.Common;
using Libplanet.Crypto;
using Microsoft.Extensions.Logging;

namespace Libplanet.Node.Options;

internal sealed class SoloOptionsConfigurator(
    ILogger<SoloOptionsConfigurator> logger)
    : OptionsConfiguratorBase<SoloOptions>
{
    protected override void OnConfigure(SoloOptions options)
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
