using System;
using System.Reflection;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Action.State;

namespace Libplanet.Explorer.Tests;

public abstract class SimpleAction : IAction
{
    public IValue TypeId => this
        .GetType()
        .GetCustomAttribute<ActionTypeAttribute>() is ActionTypeAttribute attribute
            ? attribute.TypeIdentifier
            : throw new NullReferenceException(
                $"Given type {this.GetType()} is missing {nameof(ActionTypeAttribute)}.");

    public IValue PlainValue => Dictionary.Empty
        .Add("type_id", TypeId)
        .Add("values", Null.Value);

    public void LoadPlainValue(IValue plainValue)
    {
    }

    public virtual IWorld Execute(IActionContext context) => context.PreviousState;

    public static SimpleAction GetAction(int seed) =>
        (seed % 10) switch
        {
            1 => new SimpleAction1(),
            2 => new SimpleAction2(),
            3 => new SimpleAction3(),
            4 => new SimpleAction4(),
            5 => new SimpleAction5(),
            6 => new SimpleAction6(),
            7 => new SimpleAction7(),
            8 => new SimpleAction8(),
            9 => new SimpleAction0Fail(),
            _ => new SimpleAction0(),
        };
}

[ActionType(nameof(SimpleAction0))]
public class SimpleAction0 : SimpleAction
{
}

[ActionType(nameof(SimpleAction1))]
public class SimpleAction1 : SimpleAction
{
}

[ActionType(nameof(SimpleAction2))]
public class SimpleAction2 : SimpleAction
{
}

[ActionType(nameof(SimpleAction3))]
public class SimpleAction3 : SimpleAction
{
}

[ActionType(nameof(SimpleAction4))]
public class SimpleAction4 : SimpleAction
{
}

[ActionType(nameof(SimpleAction5))]
public class SimpleAction5 : SimpleAction
{
}

[ActionType(nameof(SimpleAction6))]
public class SimpleAction6 : SimpleAction
{
}

[ActionType(nameof(SimpleAction7))]
public class SimpleAction7 : SimpleAction
{
}

[ActionType(nameof(SimpleAction8))]
public class SimpleAction8 : SimpleAction
{
}

// For overlapping custom action id test and fail test
[ActionType(nameof(SimpleAction0Fail))]
public class SimpleAction0Fail : SimpleAction
{
    public override IWorld Execute(IActionContext context) =>
        throw new CurrencyPermissionException("test message", context.Signer, default);
}
