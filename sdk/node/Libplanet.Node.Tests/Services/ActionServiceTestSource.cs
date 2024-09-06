// This code does not compile because it is used by ActionServiceTest test.
#pragma warning disable MEN008 // A file's name should match or include the name of the main type it contains.
using System.Collections.Immutable;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Action.Loader;
using Libplanet.Action.State;
using Libplanet.Action.Sys;

namespace Libplanet.Node.DumbActions;

public class DumbAction : IAction
{
    public IValue PlainValue => Dictionary.Empty;

    public void LoadPlainValue(IValue plainValue)
    {
        // Do nothing.
    }

    public IWorld Execute(IActionContext context) =>
        context.PreviousState;
}

public sealed class DumbBeginAction : DumbAction
{
}

public sealed class DumbEndAction : DumbAction
{
}

public sealed class DumbBeginTxAction : DumbAction
{
}

public sealed class DumbEndTxAction : DumbAction
{
}

public sealed class DumbActionLoader : IActionLoader
{
    public IAction LoadAction(long index, IValue value)
    {
        if (Registry.IsSystemAction(value))
        {
            return Registry.Deserialize(value);
        }

        return new DumbAction();
    }
}

public sealed class DumbActionPolicyActionsRegistry : IPolicyActionsRegistry
{
    public ImmutableArray<IAction> BeginBlockActions => [new DumbBeginAction()];

    public ImmutableArray<IAction> EndBlockActions => [new DumbEndAction()];

    public ImmutableArray<IAction> BeginTxActions => [new DumbBeginTxAction()];

    public ImmutableArray<IAction> EndTxActions => [new DumbEndTxAction()];
}
