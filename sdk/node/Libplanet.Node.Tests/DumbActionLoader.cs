using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Action.Loader;
using Libplanet.Action.Sys;

namespace Libplanet.Node.Tests;

public sealed class DumbActionLoader : IActionLoader
{
    public IAction LoadAction(long index, IValue value)
    {
        if (Registry.IsSystemAction(value))
        {
            return Registry.Deserialize(value);
        }

        var action = new DumbAction();
        action.LoadPlainValue(value);
        return action;
    }
}
