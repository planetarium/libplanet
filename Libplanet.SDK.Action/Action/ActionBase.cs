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
            .Add("type_id", _name ?? throw new NullReferenceException())
            .Add("call", _call ?? throw new NullReferenceException())
            .Add("args", _args ?? throw new NullReferenceException());

        public void LoadPlainValue(IValue plainValue)
        {
            Dictionary dict = (Dictionary)plainValue;
            _name = (Text)dict["type_id"];
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

            MethodInfo method = ExecutableMethods.FirstOrDefault(m => m.Name == _call) ??
                throw new InvalidOperationException($"Method {_call} is not found.");
            object?[]? args = new object?[] { _args };
            method.Invoke(this, args);

            return World;
        }
    }
}
