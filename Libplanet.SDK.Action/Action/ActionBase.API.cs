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

        public static List GenerateMethodConstraintsSchema(Type actionType, string methodName)
        {
            if (!typeof(ActionBase).IsAssignableFrom(actionType))
            {
                throw new ArgumentException(
                    $"Given {nameof(actionType)} is not assignable to " +
                    $"{nameof(ActionBase)}: {actionType}",
                    nameof(actionType));
            }

            ActionTypeAttribute actionTypeAttribute =
                actionType.GetCustomAttribute<ActionTypeAttribute>() ??
                    throw new ArgumentException(
                        $"Type is missing a {nameof(ActionTypeAttribute)}.",
                        nameof(actionType));
            Text typeId = actionTypeAttribute.TypeIdentifier is Text text
                ? text
                : throw new ArgumentException(
                    $"Type of {nameof(ActionTypeAttribute.TypeIdentifier)} is expected " +
                    $"to be {nameof(Text)}: {actionTypeAttribute.TypeIdentifier.GetType()}");
            MethodInfo methodInfo = actionType.GetMethod(methodName) ??
                throw new ArgumentException(
                    $"Method named {methodName} cannot be found for {actionType}.",
                    nameof(methodName));
            ParameterInfo[] paramInfos = methodInfo.GetParameters();

            int minItems = paramInfos.Length, maxItems = paramInfos.Length;
            var prefixItems = List.Empty;
            foreach (var paramInfo in paramInfos)
            {
                if (paramInfo.ParameterType.Equals(typeof(Bencodex.Types.Boolean)))
                {
                    prefixItems = prefixItems.Add(Dictionary.Empty.Add("type", "boolean"));
                }
                else if (paramInfo.ParameterType.Equals(typeof(Bencodex.Types.Integer)))
                {
                    prefixItems = prefixItems.Add(Dictionary.Empty.Add("type", "integer"));
                }
                else if (paramInfo.ParameterType.Equals(typeof(Bencodex.Types.Text)))
                {
                    prefixItems = prefixItems.Add(Dictionary.Empty.Add("type", "text"));
                }
                else if (paramInfo.ParameterType.Equals(typeof(Bencodex.Types.List)))
                {
                    prefixItems = prefixItems.Add(Dictionary.Empty.Add("type", "list"));
                }
                else if (paramInfo.ParameterType.Equals(typeof(Bencodex.Types.Dictionary)))
                {
                    prefixItems = prefixItems.Add(Dictionary.Empty.Add("type", "dictionary"));
                }
                else
                {
                    throw new ArgumentException(
                        $"Method named {methodName} has a parameter named {paramInfo.Name}" +
                        $"that has an invalid type: {paramInfo.ParameterType}");
                }
            }

            Dictionary argsConstraints = Dictionary.Empty
                .Add(
                    "if",
                    Dictionary.Empty
                        .Add(
                            "properties",
                            Dictionary.Empty
                                .Add(
                                    "type_id",
                                    Dictionary.Empty.Add("const", typeId))
                                .Add(
                                    "exec",
                                    Dictionary.Empty.Add("const", methodName))))
                .Add(
                    "then",
                    Dictionary.Empty
                        .Add(
                            "properties",
                            Dictionary.Empty
                                .Add(
                                    "args",
                                    Dictionary.Empty
                                        .Add("type", "list")
                                        .Add("prefixItems", prefixItems)
                                        .Add("minItems", minItems)
                                        .Add("maxItems", maxItems))));
            return List.Empty.Add(argsConstraints);
        }

        public static List GenerateClassConstraintsSchema(Type actionType)
        {
            if (!typeof(ActionBase).IsAssignableFrom(actionType))
            {
                throw new ArgumentException(
                    $"Given {nameof(actionType)} is not assignable to " +
                    $"{nameof(ActionBase)}: {actionType}",
                    nameof(actionType));
            }

            ActionTypeAttribute actionTypeAttribute =
                actionType.GetCustomAttribute<ActionTypeAttribute>() ??
                    throw new ArgumentException(
                        $"Type is missing a {nameof(ActionTypeAttribute)}: {actionType}",
                        nameof(actionType));
            Text typeId = actionTypeAttribute.TypeIdentifier is Text text
                ? text
                : throw new ArgumentException(
                    $"Type of {nameof(ActionTypeAttribute.TypeIdentifier)} is expected " +
                    $"to be {nameof(Text)}: {actionTypeAttribute.TypeIdentifier.GetType()}");

            MethodInfo[] methodInfos = actionType
                .GetMethods()
                .Where(methodInfo => methodInfo.IsPublic)
                .Where(methodInfo => methodInfo.GetCustomAttribute<ExecutableAttribute>() is { })
                .ToArray();

            Dictionary classConstraints = Dictionary.Empty
                .Add(
                    "if",
                    Dictionary.Empty
                        .Add(
                            "properties",
                            Dictionary.Empty
                                .Add(
                                    "type_id",
                                    Dictionary.Empty.Add("const", typeId))))
                .Add(
                    "then",
                    Dictionary.Empty
                        .Add(
                            "properties",
                            Dictionary.Empty
                                .Add(
                                    "exec",
                                    Dictionary.Empty.Add(
                                        "enum",
                                        new List(methodInfos.Select(methodInfo => methodInfo.Name)
                                            .ToList())))));
            List result = List.Empty;
            result = result.Add(classConstraints);
            foreach (var methodInfo in methodInfos)
            {
                var methodConstraints =
                    GenerateMethodConstraintsSchema(actionType, methodInfo.Name);
                foreach (var methodConstraint in methodConstraints)
                {
                    result = result.Add(methodConstraint);
                }
            }

            return result;
        }

        public static List GenerateConstraintsSchema(Assembly assembly, Type baseType)
        {
            List<Type> targetTypes = assembly
                .GetTypes()
                .Where(type => baseType.IsAssignableFrom(type))
                .Where(type => type.GetCustomAttribute<ActionTypeAttribute>() is { })
                .ToList();
#pragma warning disable MEN002
            List result = List.Empty
                .Add(
                    Dictionary.Empty
                        .Add(
                            "properties",
                            Dictionary.Empty
                                .Add(
                                    "type_id",
                                    Dictionary.Empty
                                        .Add(
                                            "enum",
                                            new List(targetTypes.Select(targetType => targetType.GetCustomAttribute<ActionTypeAttribute>()!.TypeIdentifier))))));
#pragma warning restore MEN002
            foreach (var targetType in targetTypes)
            {
                var constraints = GenerateClassConstraintsSchema(targetType);
                foreach (var constraint in constraints)
                {
                    result = result.Add(constraint);
                }
            }

            return result;
        }

        public static List GenerateConstraintsSchema(Assembly assembly) =>
            GenerateConstraintsSchema(assembly, typeof(ActionBase));

        public static List GenerateConstraintsSchema(Type baseType) =>
            GenerateConstraintsSchema(baseType.Assembly, baseType);

        public static Dictionary GenerateSchema(Assembly assembly, Type baseType)
        {
            Dictionary result = Dictionary.Empty
                .Add("type", "dictionary")
                .Add(
                    "properties",
                    Dictionary.Empty
                        .Add("type_id", Dictionary.Empty.Add("type", "text"))
                        .Add("exec", Dictionary.Empty.Add("type", "text"))
                        .Add("args", Dictionary.Empty.Add("type", "list")))
                .Add("required", List.Empty.Add("type_id").Add("exec").Add("args"));
            List constraints = GenerateConstraintsSchema(assembly, baseType);
            return result.Add("allOf", constraints);
        }

        public static Dictionary GenerateSchema(Assembly assembly) =>
            GenerateSchema(assembly, typeof(ActionBase));

        public static Dictionary GenerateSchema(Type baseType) =>
            GenerateSchema(baseType.Assembly, baseType);

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
