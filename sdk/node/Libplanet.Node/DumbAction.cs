using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Action.State;

namespace Libplanet.Node;

public class DumbAction : IAction
{
    public IValue PlainValue
    {
        get;
    }

    public void LoadPlainValue(IValue plainValue)
    {
    }

    public IWorld Execute(IActionContext context) =>
        context.PreviousState;
}
