using System;
using Bencodex.Types;
using Libplanet.Action.Sys;
using Libplanet.Blockchain;

namespace Libplanet.Action.Loader
{
    /// <summary>
    /// An <see cref="IActionLoader"/> implementation for a single <see cref="IAction"/> type.
    /// </summary>
    public class SingleActionLoader : IActionLoader
    {
        private Type _type;

        /// <summary>
        /// Creates a new <see cref="SingleActionLoader"/> instance.
        /// The <see cref="IAction"/> type to load is restricted to given type
        /// <paramref name="type"/>, except for those handled by <see cref="Registry"/>
        /// for system <see cref="IAction"/>s.
        /// </summary>
        /// <param name="type">The type of <see cref="IAction"/> to load.  It should match
        /// the <see cref="BlockChain"/>'s type parameter.</param>
        /// <exception cref="ArgumentException">Thrown when given type <paramref name="type"/>
        /// is not a <see langword="class"/> or cannot be assigned to <see cref="IAction"/>.
        /// </exception>
        public SingleActionLoader(Type type)
        {
            if (!type.IsClass)
            {
                throw new ArgumentException(
                    $"Given {nameof(type)} must be a class: {type}", nameof(type));
            }
            else if (!typeof(IAction).IsAssignableFrom(type))
            {
                throw new ArgumentException(
                    $"Given {nameof(type)} must be assignable to {nameof(IAction)}: {type}",
                    nameof(type));
            }

            _type = type;
        }

        public Type Type => _type;

        /// <inheritdoc cref="IActionLoader.LoadAction"/>.
        public IAction LoadAction(long index, IValue value)
        {
            try
            {
                if (Registry.IsSystemAction(value))
                {
                    return Registry.Deserialize(value);
                }

                IAction action = (IAction)Activator.CreateInstance(_type)!;
                action.LoadPlainValue(value);
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
    }
}
