using Microsoft.Extensions.Logging;

namespace Libplanet.Node.Options;

internal sealed class StoreOptionsConfigurator(ILogger<StoreOptionsConfigurator> logger)
    : OptionsConfiguratorBase<StoreOptions>
{
    protected override void OnConfigure(StoreOptions options)
    {
        if (options.Type == StoreType.Memory)
        {
            if (options.RootPath != string.Empty)
            {
                options.RootPath = string.Empty;
                logger.LogWarning(
                    "RootPath is ignored because StoreType is {Memory}.", StoreType.Memory);
            }

            if (options.StoreName != string.Empty)
            {
                options.StoreName = string.Empty;
                logger.LogWarning(
                    "StorePath is ignored because StoreType is {Memory}.", StoreType.Memory);
            }

            if (options.StateStoreName != string.Empty)
            {
                options.StateStoreName = string.Empty;
                logger.LogWarning(
                    "StateStorePath is ignored because StoreType is {Memory}.", StoreType.Memory);
            }
        }
        else
        {
            if (options.RootPath == string.Empty)
            {
                options.RootPath = StoreOptions.DefaultRootPath;
                logger.LogDebug(
                    "RootPath is not set. Use the default path: {RootPath}", options.RootPath);
            }

            if (options.StoreName == string.Empty)
            {
                options.StoreName = StoreOptions.DefaultStorePath;
                logger.LogDebug(
                    "StorePath is not set. Use the default path: {StorePath}",
                    options.StoreName);
            }

            if (options.StateStoreName == string.Empty)
            {
                options.StateStoreName = StoreOptions.DefaultStateStorePath;
                logger.LogDebug(
                    "StateStorePath is not set. Use the default path: {StateStorePath}",
                    options.StateStoreName);
            }

            options.RootPath = Path.GetFullPath(options.RootPath);
            options.StoreName = Path.GetFullPath(
                Path.Combine(options.RootPath, options.StoreName));
            options.StateStoreName = Path.GetFullPath(
                Path.Combine(options.RootPath, options.StateStoreName));
        }
    }
}
