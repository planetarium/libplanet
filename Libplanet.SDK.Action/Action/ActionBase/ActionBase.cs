using System.Reflection;
using System.Security;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Action.State;

[assembly: SecurityTransparent]

namespace Libplanet.SDK.Action.ActionBase
{
    public abstract partial class ActionBase : IAction
    {
        public IValue PlainValue => Dictionary.Empty
            .Add("call", _call ?? "Execute")
            .Add("args", _args ?? Null.Value);

        public void LoadPlainValue(IValue plainValue)
        {
            var dict = (Dictionary)plainValue;
            try
            {
                _call = (Text)dict["call"];
            }
            catch
            {
                _call = "Execute";
            }

            try
            {
                _args = dict["args"];
            }
            catch
            {
                _args = Null.Value;
            }

            IsLoaded = true;
        }

        public IWorld Execute(IActionContext context)
        {
            if (!IsLoaded)
            {
                throw new InvalidOperationException("Action is not loaded.");
            }

            _actionContext = context;
            _world = !ValidateStorage(StorageAddress, context.PreviousState)
                ? RegisterStorage(StorageAddress, context.PreviousState)
                : context.PreviousState;

            MethodInfo? method = CallableMethods.FirstOrDefault(m => m.Name == _call);
            if (method is null)
            {
                throw new InvalidOperationException($"Method {_call} is not found.");
            }

            object?[]? args = _args is Null ? null : new object?[] { _args };
            method.Invoke(this, args);

            return World;
        }
    }
}
