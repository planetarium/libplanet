using System;
using System.Collections.Generic;

namespace Libplanet.Action
{
    /// <summary>
    /// An interface to load action types branched by block index.
    /// </summary>
    public interface IActionTypeLoader
    {
        /// <summary>
        /// Load action types branched by <paramref name="context"/>.
        /// </summary>
        /// <param name="context">A <see cref="IActionTypeLoaderContext"/> to determine
        /// what action types to use.</param>
        /// <returns>A dictionary made of action id to action type pairs.</returns>
        public IDictionary<string, Type> Load(IActionTypeLoaderContext context);

        /// <summary>
        /// Load action types branched by <paramref name="context"/>.
        /// </summary>
        /// <param name="context">A <see cref="IActionTypeLoader"/> to determine
        /// what action types to use.</param>
        /// <returns>Types of available actions. It also includes actions not having
        /// <see cref="ActionTypeAttribute"/>.</returns>
        public IEnumerable<Type> LoadAllActionTypes(IActionTypeLoaderContext context);
    }
}
