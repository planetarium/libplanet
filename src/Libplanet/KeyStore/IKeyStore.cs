using System;
using System.Collections.Generic;

namespace Libplanet.KeyStore
{
    /// <summary>
    /// The interface to store <see cref="ProtectedPrivateKey"/>s.  An appropriate implementation
    /// should be used according to a running platform.
    /// </summary>
    public interface IKeyStore
    {
        /// <summary>
        /// Lists all keys IDs in the key store.
        /// </summary>
        /// <returns>All keys IDs in the key store.  The order is undefined and not deterministic.
        /// </returns>
        public IEnumerable<Guid> ListIds();

        /// <summary>
        /// Lists all keys in the key store.
        /// </summary>
        /// <returns>All keys in the key store.  The order is undefined and not deterministic.
        /// </returns>
        public IEnumerable<Tuple<Guid, ProtectedPrivateKey>> List();

        /// <summary>
        /// Looks for a key having the requested <paramref name="id"/> in the key store.
        /// </summary>
        /// <param name="id">The key ID to look for.</param>
        /// <returns>The found key.</returns>
        /// <exception cref="NoKeyException">Thrown when there are no key of the given
        /// <paramref name="id"/>.</exception>
        public ProtectedPrivateKey Get(Guid id);

        /// <summary>
        /// Adds a new <paramref name="key"/> into the key store.
        /// </summary>
        /// <param name="key">A key to add.</param>
        /// <returns>The id of the added <paramref name="key"/>.</returns>
        /// <exception cref="ArgumentNullException">Thrown when <see langword="null"/> is passed to
        /// <paramref name="key"/>.</exception>
        public Guid Add(ProtectedPrivateKey key);

        /// <summary>
        /// Removes a key having the given <pramref name="id"/> from the key store.
        /// </summary>
        /// <param name="id">The key ID to remove.</param>
        /// <exception cref="NoKeyException">Thrown when there is no key having
        /// the given <paramref name="id"/>.</exception>
        public void Remove(Guid id);
    }
}
