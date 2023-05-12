using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Reflection;
using Bencodex.Types;
using Libplanet.Action.Loader;

namespace Libplanet.Action
{
    /// <summary>
    /// An <see cref="IActionLoader"/> implementation internally used by
    /// <see cref="PolymorphicAction{T}"/>.
    /// </summary>
    /// <remarks>
    /// This does not necessarily has to be an <see cref="IActionLoader"/>.
    /// This will be deprecated and removed soon together with <see cref="PolymorphicAction{T}"/>.
    /// </remarks>
    internal class PolymorphicActionLoader : IActionLoader
    {
        private readonly Type _baseType;

        private IDictionary<IValue, Type> _types;

        /// <summary>
        /// Creates a new <see cref="PolymorphicActionLoader"/> instance.
        /// </summary>
        /// <param name="baseType">The base type of actions to load.  This corresponds to
        /// the type parameter of <see cref="PolymorphicAction{T}"/>.</param>
        public PolymorphicActionLoader(Type baseType)
        {
            _baseType = baseType;
            _types = LoadTypes(baseType.Assembly, _baseType);
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

        private static IDictionary<IValue, Type> LoadTypes(
            Assembly assembly, Type baseType)
        {
            var types = new Dictionary<IValue, Type>();
            var actionType = typeof(IAction);
            foreach (Type t in LoadAllActionTypes(assembly))
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

        private static IEnumerable<Type> LoadAllActionTypes(Assembly assembly)
        {
            var actionType = typeof(IAction);
            foreach (Type t in assembly.GetTypes())
            {
                if (actionType.IsAssignableFrom(t))
                {
                    yield return t;
                }
            }
        }
    }
}
