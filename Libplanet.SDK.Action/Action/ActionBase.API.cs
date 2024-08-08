using System.Reflection;
using Bencodex.Types;
using Libplanet.Crypto;
using Libplanet.SDK.Action.Attributes;

namespace Libplanet.SDK.Action
{
    public partial class ActionBase
    {
        protected IValue? GetState(Address address)
            => World.GetAccount(StorageAddress).GetState(address);

        protected void SetState(Address address, IValue value)
        {
            _world = World.SetAccount(
                StorageAddress,
                World.GetAccount(StorageAddress).SetState(address, value));
        }

        protected void Call<T>(string methodName, object?[]? args = null)
            where T : ActionBase
        {
            if (Activator.CreateInstance(typeof(T)) is not T calledAction)
            {
                throw new Exception("Action cannot be found.");
            }

            calledAction.LoadContext(ActionContext, World);

            MethodInfo methodInfo = typeof(T).GetMethod(methodName) ??
                throw new Exception("Method cannot be found.");
            if (methodInfo.GetCustomAttribute<CallableAttribute>() is null)
            {
                throw new Exception(
                    $"Target method is missing a {nameof(CallableAttribute)}");
            }

            methodInfo.Invoke(calledAction, args);

            _world = calledAction._world;
            _actionContext = calledAction._actionContext;
        }

        protected U Call<T, U>(string methodName, object?[]? args = null)
            where T : ActionBase
        {
            if (Activator.CreateInstance(typeof(T)) is not T calledAction)
            {
                throw new Exception("Action cannot be found.");
            }

            calledAction.LoadContext(ActionContext, World);

            MethodInfo methodInfo = typeof(T).GetMethod(methodName) ??
                throw new Exception("Method cannot be found.");

            if (methodInfo.Invoke(calledAction, args) is not U result)
            {
                throw new Exception("Return type doesn't match.");
            }

            _world = calledAction._world;
            _actionContext = calledAction._actionContext;

            return result;
        }
    }
}
