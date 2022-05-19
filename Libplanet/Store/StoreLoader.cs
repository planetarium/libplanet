using System;

namespace Libplanet.Store
{
    /// <summary>
    /// A function that parses a URI and returns a pair of <see cref="IStore"/> and
    /// <see cref="IStateStore"/>.
    /// </summary>
    /// <param name="storeUri">A URI referring to a store.</param>
    /// <returns>A pair of loaded <see cref="IStore"/> and <see cref="IStateStore"/> instances.
    /// </returns>
    public delegate (IStore Store, IStateStore StateStore) StoreLoader(Uri storeUri);
}
