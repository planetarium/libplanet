using System.Reflection;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Crypto;
using Libplanet.SDK.Action.Attributes;

namespace Libplanet.SDK.Action
{
    public partial class ActionBase
    {
        public static void ValidatePlainValue<T>(IValue plainValue)
            where T : ActionBase
        {
            ActionTypeAttribute actionType = typeof(T).GetCustomAttribute<ActionTypeAttribute>() ??
                throw new ArgumentException(
                    $"Type is missing a {nameof(ActionTypeAttribute)}.");

            // NOTE: Check type.
            if (!(plainValue is Dictionary dict))
            {
                throw new ArgumentException(
                    $"Given {nameof(plainValue)} must be of " +
                    $"type {nameof(Dictionary)}: {plainValue.GetType()}",
                    nameof(plainValue));
            }

            // NOTE: Check type id.
            if (!dict.ContainsKey("type_id"))
            {
                throw new ArgumentException(
                    $"Given dictionary {nameof(plainValue)} must contain \"type_id\" key",
                    nameof(plainValue));
            }

            if (!actionType.TypeIdentifier.Equals(dict["type_id"]))
            {
                throw new ArgumentException(
                    $"The value of \"type_id\" for {nameof(plainValue)} does not match " +
                    $"the expected value {actionType.TypeIdentifier} specified " +
                    $"by {nameof(ActionTypeAttribute)}: {dict["type_id"]}");
            }

            // NODE: Check exec.
            if (!dict.ContainsKey("exec"))
            {
                throw new ArgumentException(
                    $"Given dictionary {nameof(plainValue)} must contain \"exec\" key",
                    nameof(plainValue));
            }

            string methodName = dict["exec"] is Text methodNameText
                ? methodNameText.Value
                : throw new ArgumentException(
                    $"The value of \"exec\" for {nameof(plainValue)} is expected to be " +
                    $"of type {nameof(Text)}: {dict["exec"].GetType()}");
            MethodInfo methodInfo = typeof(T).GetMethod(methodName) ??
                throw new ArgumentException(
                    $"Method named {methodName} cannot be found for {typeof(T)}.",
                    nameof(plainValue));
            if (methodInfo.GetCustomAttribute<ExecutableAttribute>() is null)
            {
                throw new ArgumentException(
                    $"Target method is missing a {nameof(ExecutableAttribute)}.",
                    nameof(methodName));
            }

            // NOTE: Check arguments.
            if (!dict.ContainsKey("args"))
            {
                throw new ArgumentException(
                    $"Given dictionary {nameof(plainValue)} must contain \"args\" key",
                    nameof(plainValue));
            }

            List arguments = dict["args"] is List list
                ? list
                : throw new ArgumentException(
                    $"The value of \"args\" for {nameof(plainValue)} is expected to be " +
                    $"of type {nameof(Text)}: {dict["args"].GetType()}");

            ParameterInfo[] paramInfos = methodInfo.GetParameters();
            if (paramInfos.Length != arguments.Count)
            {
                throw new ArgumentException(
                    $"The length of \"args\" for {nameof(plainValue)} should be " +
                    $"{paramInfos.Length}: {arguments.Count}",
                    nameof(plainValue));
            }

            foreach (((ParameterInfo paramInfo, IValue argument), int index) in
                paramInfos.Zip(arguments).Select((pair, i) => (pair, i)))
            {
                Type expectedType = paramInfo.ParameterType;
                Type actualType = argument.GetType();
                if (!paramInfo.ParameterType.Equals(argument.GetType()))
                {
                    throw new ArgumentException(
                        $"The argument at {index} of \"args\" for {nameof(plainValue)} " +
                        $"should be {expectedType}: {actualType}",
                        nameof(plainValue));
                }
            }
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
