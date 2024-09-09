using System.Reflection;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Crypto;
using Libplanet.SDK.Action.Attributes;

namespace Libplanet.SDK.Action
{
    public partial class ActionBase
    {
        public static IValue GeneratePlainValue<T>(string methodName, List arguments)
            where T : ActionBase
        {
            ActionTypeAttribute actionType = typeof(T).GetCustomAttribute<ActionTypeAttribute>() ??
                throw new ArgumentException(
                    $"Type is missing a {nameof(ActionTypeAttribute)}.");

            MethodInfo methodInfo = typeof(T).GetMethod(methodName) ??
                throw new ArgumentException(
                    $"Method named {methodName} cannot be found for {typeof(T)}.",
                    nameof(methodName));
            if (methodInfo.GetCustomAttribute<ExecutableAttribute>() is null)
            {
                throw new ArgumentException(
                    $"Target method is missing a {nameof(ExecutableAttribute)}.",
                    nameof(methodName));
            }

            ParameterInfo[] paramInfos = methodInfo.GetParameters();
            if (paramInfos.Length != arguments.Count)
            {
                throw new ArgumentException(
                    $"The length of {nameof(arguments)} should be {paramInfos.Length}: " +
                    $"{arguments.Count}",
                    nameof(arguments));
            }

            foreach (((ParameterInfo paramInfo, IValue argument), int index) in
                paramInfos.Zip(arguments).Select((pair, i) => (pair, i)))
            {
                Type expectedType = paramInfo.ParameterType;
                Type actualType = argument.GetType();
                if (!paramInfo.ParameterType.Equals(argument.GetType()))
                {
                    throw new ArgumentException(
                        $"The argument at {index} for given {nameof(arguments)} should be " +
                        $"{expectedType}: {actualType}",
                        nameof(arguments));
                }
            }

            return Dictionary.Empty
                .Add("type_id", actionType.TypeIdentifier)
                .Add("exec", methodName)
                .Add("args", arguments);
        }

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
                throw new ArgumentException(
                    $"Method named {methodName} cannot be found.");
            if (methodInfo.GetCustomAttribute<CallableAttribute>() is null)
            {
                throw new ArgumentException(
                    $"Target method {methodName} is missing a {nameof(CallableAttribute)}");
            }

            methodInfo.Invoke(calledAction, args);

            _world = calledAction._world;
            _actionContext = calledAction._actionContext;
        }

        protected TR Call<TA, TR>(string methodName, object?[]? args = null)
            where TA : ActionBase
        {
            if (Activator.CreateInstance(typeof(TA)) is not TA calledAction)
            {
                throw new Exception("Action cannot be found.");
            }

            calledAction.LoadContext(ActionContext, World);

            MethodInfo methodInfo = typeof(TA).GetMethod(methodName) ??
                throw new ArgumentException(
                    $"Method named {methodName} cannot be found.");
            if (methodInfo.GetCustomAttribute<CallableAttribute>() is null)
            {
                throw new ArgumentException(
                    $"Target method {methodName} is missing a {nameof(CallableAttribute)}");
            }

            var result = methodInfo.Invoke(calledAction, args);
            if (result is not TR typedResult)
            {
                throw new Exception(
                    $"Return type is expected to be {typeof(TR)}: {result?.GetType()}");
            }

            _world = calledAction._world;
            _actionContext = calledAction._actionContext;

            return typedResult;
        }
    }
}
