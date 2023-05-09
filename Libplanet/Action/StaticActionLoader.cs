using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Reflection;
using Bencodex.Types;
using Libplanet.Action.Sys;

namespace Libplanet.Action
{
    /// <summary>
    /// An <see cref="IActionLoader"/> implementation to load action types
    /// without branching by block index.
    /// </summary>
    public class StaticActionLoader : IActionLoader
    {
        private readonly Type? _baseType;
        private readonly ImmutableHashSet<Assembly> _assembliesSet;

        private IDictionary<IValue, Type>? _types;

        /// <summary>
        /// Creates a new <see cref="StaticActionLoader"/> instance.
        /// </summary>
        /// <param name="assemblies">The assemblies to load actions from.</param>
        /// <param name="baseType">The base type of actions to load.</param>
        public StaticActionLoader(IEnumerable<Assembly> assemblies, Type? baseType = null)
        {
            _baseType = baseType;
            _assembliesSet = assemblies.ToImmutableHashSet();
            _types = null;
        }

        internal Type? BaseType => _baseType;

        public IDictionary<IValue, Type> Load(long index) => Load();

        public IEnumerable<Type> LoadAllActionTypes(long index)
            => LoadAllActionTypesImpl(_assembliesSet);

        /// <inheritdoc cref="IActionLoader.LoadAction"/>.
        public IAction LoadAction(long index, IValue value)
        {
            try
            {
                if (Registry.IsSystemAction(value))
                {
                    return Registry.Deserialize(value);
                }

                IAction action;
                var types = Load(index);
                if (value is Dictionary pv &&
                    pv.TryGetValue((Text)"type_id", out IValue rawTypeId) &&
                    rawTypeId is Text typeId &&
                    types.TryGetValue(typeId, out Type? actionType))
                {
                    action = (IAction)Activator.CreateInstance(actionType)!;
                    action.LoadPlainValue(pv["values"]);
                }
                else if (BaseType is { } baseActionType)
                {
                    action = (IAction)Activator.CreateInstance(baseActionType)!;
                    action.LoadPlainValue(value);
                }
                else
                {
                    throw new InvalidOperationException(
                        $"Failed to instantiate an action from {value} for index {index}");
                }

                return action;
            }
            catch (Exception e)
            {
                throw new InvalidActionException(
                    $"Failed to instantiate an action from {value} for index {index}",
                    value,
                    e);
            }
        }

        internal static StaticActionLoader Create<T>()
            where T : IAction, new()
        {
            return new StaticActionLoader(
                Assembly.GetEntryAssembly() is Assembly entryAssembly
                    ? new[] { typeof(T).Assembly, entryAssembly }
                    : new[] { typeof(T).Assembly },
                typeof(T)
            );
        }

        internal IDictionary<IValue, Type> Load() =>
            _types ??= LoadImpl(_assembliesSet, _baseType);

        private static IEnumerable<Type> LoadAllActionTypesImpl(IEnumerable<Assembly> assembliesSet)
        {
            var actionType = typeof(IAction);
            foreach (Assembly asm in assembliesSet)
            {
                foreach (Type t in asm.GetTypes())
                {
                    if (actionType.IsAssignableFrom(t))
                    {
                        yield return t;
                    }
                }
            }
        }

        private static IDictionary<IValue, Type> LoadImpl(
            IEnumerable<Assembly> assembliesSet, Type? baseType = null)
        {
            var types = new Dictionary<IValue, Type>();
            var actionType = typeof(IAction);
            foreach (Type t in LoadAllActionTypesImpl(assembliesSet))
            {
                if (baseType is { } bt && !bt.IsAssignableFrom(t))
                {
                    continue;
                }

                if (ActionTypeAttribute.ValueOf(t) is IValue actionId)
                {
                    if (types.TryGetValue(actionId, out Type? existing))
                    {
                        if (existing != t)
                        {
                            throw new DuplicateActionTypeIdentifierException(
                                "Multiple action types are associated with the same type ID.",
                                actionId.ToString() ?? "null",
                                ImmutableHashSet.Create(existing, t)
                            );
                        }

                        continue;
                    }

                    types[actionId] = t;
                }
            }

            return types;
        }
    }
}
