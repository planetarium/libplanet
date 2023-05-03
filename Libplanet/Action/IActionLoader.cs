using System;
using System.Collections.Generic;
using Bencodex.Types;

namespace Libplanet.Action
{
    /// <summary>
    /// An interface to load actions branched by block index.
    /// </summary>
    public interface IActionLoader
    {
        /// <summary>
        /// Load action types branched by <paramref name="index"/>.
        /// </summary>
        /// <param name="index">The index of a block to use as context for deserializing
        /// <see cref="IValue"/>s to <see cref="IAction"/>s.</param>
        /// <returns>A dictionary made of action id to action type pairs.</returns>
        public IDictionary<IValue, Type> Load(long index);

        /// <summary>
        /// Load action types branched by <paramref name="index"/>.
        /// </summary>
        /// <param name="index">The index of a block to use as context for deserializing
        /// <see cref="IValue"/>s to <see cref="IAction"/>s.</param>
        /// <returns>Types of available actions.  This also includes actions not having
        /// <see cref="ActionTypeAttribute"/>.</returns>
        public IEnumerable<Type> LoadAllActionTypes(long index);

        /// <summary>
        /// Loads a concrete <see cref="IAction"/> from <paramref name="value"/>
        /// given <paramref name="index"/>.
        /// </summary>
        /// <param name="index">The index of a block to use as context for deserializing
        /// <paramref name="value"/>.</param>
        /// <param name="value">The <see cref="IValue"/> to deserialize to
        /// an <see cref="IAction"/>.</param>
        /// <returns>An <see cref="IAction"/> instantiated with <paramref name="value"/>.</returns>
        public IAction LoadAction(long index, IValue value);
    }
}
