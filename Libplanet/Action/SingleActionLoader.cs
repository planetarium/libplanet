using System;
using Bencodex.Types;
using Libplanet.Action.Sys;
using Libplanet.Blockchain;

namespace Libplanet.Action
{
    /// <summary>
    /// An <see cref="IActionLoader"/> implementation for a single <see cref="IAction"/> type.
    /// The <see cref="IAction"/> type to load is restricted to the generic type parameter
    /// <typeparamref name="T"/>, except for those handled by <see cref="Registry"/>
    /// for system <see cref="IAction"/>s, once an instance of this class is declared.
    /// </summary>
    /// <typeparam name="T">An <see cref="IAction"/> type.  It should match
    /// the <see cref="BlockChain{T}"/>'s type parameter.</typeparam>
    public class SingleActionLoader<T> : IActionLoader
        where T : IAction, new()
    {
        /// <summary>
        /// Creates a new <see cref="SingleActionLoader{T}"/> instance.
        /// </summary>
        public SingleActionLoader()
        {
        }

        /// <inheritdoc cref="IActionLoader.LoadAction"/>.
        public IAction LoadAction(long index, IValue value)
        {
            try
            {
                if (Registry.IsSystemAction(value))
                {
                    return Registry.Deserialize(value);
                }

                IAction action = new T();
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
