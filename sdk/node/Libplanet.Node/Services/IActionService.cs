using Libplanet.Action;
using Libplanet.Action.Loader;

namespace Libplanet.Node.Services;

public interface IActionService
{
    IActionLoader ActionLoader { get; }

    IPolicyActionsRegistry PolicyActionsRegistry { get; }
}
