using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Action.State;

namespace Libplanet.Node;

public sealed class DumbAction : IAction
{
    public IValue PlainValue => Dictionary.Empty;

    public void LoadPlainValue(IValue plainValue)
    {
        // Do nothing.
    }

    public IWorld Execute(IActionContext context) =>
        context.PreviousState;
}
