using System.Reflection;
using System.Security;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Action.State;

[assembly: SecurityTransparent]

namespace Libplanet.SDK.Action
{
    public abstract partial class ActionBase : IAction
    {
        public IValue PlainValue => Dictionary.Empty
            .Add("name", _name ?? throw new NullReferenceException())
            .Add("call", _call ?? "Execute")
            .Add("args", _args ?? Null.Value);

        public void LoadPlainValue(IValue plainValue)
        {
            Dictionary dict = (Dictionary)plainValue;
            _name = (Text)dict["name"];
            _call = (Text)dict["call"];
            _args = dict["args"];
        }

        public IWorld Execute(IActionContext context)
        {
            if (!Loaded)
            {
                throw new InvalidOperationException("Action is not loaded.");
            }

            _actionContext = context;
            _world = context.PreviousState;

            MethodInfo? method = CallableMethods.FirstOrDefault(m => m.Name == _call) ??
                throw new InvalidOperationException($"Method {_call} is not found.");
            object?[]? args = new object?[] { _args };
            method.Invoke(this, args);

            return World;
        }
    }
}
