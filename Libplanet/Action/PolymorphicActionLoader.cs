using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Reflection;
using Bencodex.Types;

namespace Libplanet.Action
{
    /// <summary>
    /// An <see cref="IActionLoader"/> implementation internally used by
    /// <see cref="PolymorphicAction{T}"/>.
    /// </summary>
    internal class PolymorphicActionLoader : IActionLoader
    {
        private readonly Type _baseType;

        private IDictionary<IValue, Type> _types;

        /// <summary>
        /// Creates a new <see cref="PolymorphicActionLoader"/> instance.
        /// </summary>
        /// <param name="assemblies">The assemblies to load actions from.</param>
        /// <param name="baseType">The base type of actions to load.  This corresponds to
        /// the type parameter of <see cref="PolymorphicAction{T}"/>.</param>
        private PolymorphicActionLoader(IEnumerable<Assembly> assemblies, Type baseType)
        {
            _baseType = baseType;
            _types = LoadTypes(assemblies.ToImmutableHashSet(), _baseType);
        }

        internal Type BaseType => _baseType;

        internal IDictionary<IValue, Type> Types => _types;

        /// <inheritdoc cref="IActionLoader.LoadAction"/>.
        public IAction LoadAction(long index, IValue value)
        {
            try
            {
                IAction action;
                if (value is Dictionary pv &&
                    pv.TryGetValue((Text)"type_id", out IValue rawTypeId) &&
                    rawTypeId is IValue typeId &&
                    Types.TryGetValue(typeId, out Type? actionType))
                {
                    action = (IAction)Activator.CreateInstance(actionType)!;
                    action.LoadPlainValue(pv["values"]);
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

        internal static PolymorphicActionLoader Create<T>()
            where T : IAction
        {
            return new PolymorphicActionLoader(new[] { typeof(T).Assembly }, typeof(T));
        }

        private static IDictionary<IValue, Type> LoadTypes(
            IEnumerable<Assembly> assembliesSet, Type baseType)
        {
            var types = new Dictionary<IValue, Type>();
            var actionType = typeof(IAction);
            foreach (Type t in LoadAllActionTypes(assembliesSet))
            {
                if (!baseType.IsAssignableFrom(t))
                {
                    continue;
                }

                if (ActionTypeAttribute.ValueOf(t) is IValue typeId)
                {
                    if (types.TryGetValue(typeId, out Type? existing))
                    {
                        if (existing != t)
                        {
                            throw new DuplicateActionTypeIdentifierException(
                                "Multiple action types are associated with the same type ID.",
                                typeId.ToString() ?? "null",
                                ImmutableHashSet.Create(existing, t));
                        }

                        continue;
                    }

                    types[typeId] = t;
                }
            }

            return types;
        }

        private static IEnumerable<Type> LoadAllActionTypes(IEnumerable<Assembly> assembliesSet)
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
    }
}
