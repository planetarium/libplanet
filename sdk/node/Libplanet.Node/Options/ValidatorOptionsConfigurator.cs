using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace Libplanet.Node.Options;

internal sealed class ValidatorOptionsConfigurator(
    ILogger<ValidatorOptionsConfigurator> logger)
    : OptionsConfiguratorBase<ValidatorOptions>
{
    protected override void OnConfigure(ValidatorOptions options)
    {
        if (options.EndPoint == string.Empty)
        {
            options.EndPoint = EndPointUtility.ToString(EndPointUtility.Next());
            logger.LogWarning(
                "Validator's endpoint is not set. A new endpoint is generated: {EndPoint}",
                options.EndPoint);
        }
    }
}
