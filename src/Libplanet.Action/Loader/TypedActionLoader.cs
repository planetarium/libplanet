using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Reflection;
using Bencodex.Types;
using Libplanet.Action.Sys;

namespace Libplanet.Action.Loader
{
    /// <summary>
    /// An <see cref="IActionLoader"/> implementation for multiple <see cref="IAction"/> types.
    /// </summary>
    public class TypedActionLoader : IActionLoader
    {
        private IDictionary<IValue, Type> _types;

        /// <summary>
        /// <para>
        /// Creates a new <see cref="TypedActionLoader"/> instance with an explicit
        /// <see cref="IValue"/>s to <see cref="Type"/>s mapping.
        /// </para>
        /// <para>
        /// The mapping can be generated semi-automatically using
        /// <see cref="TypedActionLoader.Create"/>.
        /// </para>
        /// </summary>
        /// <param name="types">The <see cref="IValue"/>s to <see cref="Type"/>s mapping to use.
        /// </param>
        /// <seealso cref="TypedActionLoader.Create"/>
        public TypedActionLoader(IDictionary<IValue, Type> types)
        {
            if (types.Count == 0)
            {
                throw new ArgumentException(
                    $"Give {nameof(types)} cannot be empty.", nameof(types));
            }

            _types = types;
        }

        public IDictionary<IValue, Type> Types => _types;

        /// <inheritdoc cref="IActionLoader.LoadAction"/>.
        /// <summary>
        /// <para>
        /// Creates a new <see cref="TypedActionLoader"/> instance.
        /// </para>
        /// <para>
        /// The <see cref="IAction"/> type to load is restricted to given
        /// <paramref name="assembly"/> and <paramref name="baseType"/>,
        /// except for those handled by <see cref="Registry"/> for system <see cref="IAction"/>s.
        /// </para>
        /// <para>
        /// This automatically searches an <see cref="Assembly"/> with all <see cref="IAction"/>s
        /// according to the following rule:
        /// <list type="bullet">
        ///     <item><description>
        ///         The <see cref="Assembly"/> to search is <paramref name="assembly"/> if given,
        ///         or the <see cref="Assembly"/> of <paramref name="baseType"/> if not.
        ///     </description></item>
        ///     <item><description>
        ///         From the <see cref="Assembly"/> determined above, all <see cref="IAction"/>s
        ///         with <see cref="ActionTypeAttribute"/> attached are collected.
        ///     </description></item>
        ///     <item><description>
        ///         If <paramref name="baseType"/> is provided, only those <see cref="IAction"/>
        ///         types that are assignable to <paramref name="baseType"/> are selected.
        ///     </description></item>
        /// </list>
        /// </para>
        /// <para>
        /// Then a dictionary mapping from <see cref="IValue"/>s to <see cref="Type"/>s created
        /// from searched <see cref="IAction"/>s and the explicit loader is created by
        /// passing the map to <see cref="TypedActionLoader(IDictionary{IValue, Type})"/>.
        /// </para>
        /// </summary>
        /// <param name="assembly">The <see cref="Assembly"/> to search <see cref="IAction"/> types.
        /// </param>
        /// <param name="baseType">The type of <see cref="IAction"/> to filter.</param>
        /// <returns>A <see cref="TypedActionLoader"/> created from provided
        /// <paramref name="assembly"/> and <paramref name="baseType"/>.</returns>
        /// <exception cref="ArgumentException">Thrown when both <paramref name="assembly"/> and
        /// <paramref name="baseType"/> are <see langword="null"/>.
        /// </exception>
        /// <seealso cref="TypedActionLoader(IDictionary{IValue, Type})"/>
        public static TypedActionLoader Create(Assembly? assembly = null, Type? baseType = null)
        {
            if (assembly is null && baseType is null)
            {
                throw new ArgumentException(
                    $"At least one of {nameof(assembly)} and {nameof(baseType)} must be non-null.");
            }

            assembly = assembly ?? baseType!.Assembly;
            return new TypedActionLoader(LoadTypes(assembly, baseType));
        }

        public IAction LoadAction(long index, IValue value)
        {
            try
            {
                if (Registry.IsSystemAction(value))
                {
                    return Registry.Deserialize(value);
                }

                IAction action;
                if (value is Dictionary pv &&
                    pv.TryGetValue((Text)"type_id", out IValue rawTypeId) &&
                    rawTypeId is IValue typeId &&
                    Types.TryGetValue(typeId, out Type? actionType))
                {
                    // NOTE: This is different from how PolymorphicAction<T> handles plain values.
                    // Actual underlying types are expected to handle (or at least accept)
                    // a plainvalue *with* "type_id" field included.
                    action = (IAction)Activator.CreateInstance(actionType)!;
                    action.LoadPlainValue(pv);
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

        private static IDictionary<IValue, Type> LoadTypes(Assembly assembly, Type? baseType)
        {
            var types = new Dictionary<IValue, Type>();
            var actionType = typeof(IAction);
            foreach (Type type in LoadAllActionTypes(assembly))
            {
                if (baseType is { } bType && !bType.IsAssignableFrom(type))
                {
                    continue;
                }

                if (type.GetCustomAttribute<ActionTypeAttribute>()?.TypeIdentifier is { } typeId)
                {
                    if (types.TryGetValue(typeId, out Type? existing))
                    {
                        if (existing != type)
                        {
                            throw new DuplicateActionTypeIdentifierException(
                                "Multiple action types are associated with the same type ID.",
                                typeId.ToString() ?? "null",
                                ImmutableHashSet.Create(existing, type));
                        }

                        continue;
                    }

                    types[typeId] = type;
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
