using Libplanet.Action.Loader;

namespace Libplanet.Node.Services;

public interface IActionLoaderProvider
{
    IActionLoader GetActionLoader();
}
