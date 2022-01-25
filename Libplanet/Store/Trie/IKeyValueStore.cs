using System;
using System.Collections.Generic;

namespace Libplanet.Store.Trie
{
    /// <summary>
    /// An interface to access key-value store.
    /// </summary>
    public interface IKeyValueStore : IDisposable
    {
        /// <summary>
        /// Gets the value associated with the specified key.
        /// </summary>
        /// <param name="key">The key whose value to get.</param>
        /// <returns>The value associated with the specified key.</returns>
        /// <exception cref="KeyNotFoundException">Thrown when the key is not found.</exception>
        public byte[] Get(in KeyBytes key);

        /// <summary>
        /// Gets multiple values associated with the specified keys at once.
        /// </summary>
        /// <param name="keys">Keys whose values to get.  The order of keys does not matter.
        /// Duplicate keys after their first occurrence are ignored.</param>
        /// <returns>Values associated the specified <paramref name="keys"/>.  Non-existent
        /// <paramref name="keys"/> are omitted (rather than being filled with
        /// <see langword="null"/>).</returns>
        public IReadOnlyDictionary<KeyBytes, byte[]> Get(IEnumerable<KeyBytes> keys);

        /// <summary>
        /// Sets the value to the key.  If the key already exists, the value is overwritten.
        /// </summary>
        /// <param name="key">The key of the value to set.</param>
        /// <param name="value">The value to set.</param>
        public void Set(in KeyBytes key, byte[] value);

        /// <summary>
        /// Sets all values in the given dictionary.
        /// </summary>
        /// <param name="values">A values to set.</param>
        public void Set(IDictionary<KeyBytes, byte[]> values);

        /// <summary>
        /// Deletes the given key.  If the key does not exist, nothing happens.
        /// </summary>
        /// <param name="key">A key to delete.</param>
        public void Delete(in KeyBytes key);

        /// <summary>
        /// Delete multiple <paramref name="keys"/> at once.
        /// </summary>
        /// <param name="keys">Keys to delete.  The order of keys does not matter.
        /// Non-existent keys are ignored.</param>
        public void Delete(IEnumerable<KeyBytes> keys);

        /// <summary>
        /// Checks whether the given key exists in the store.
        /// </summary>
        /// <param name="key">A key to check.</param>
        /// <returns><see langword="true"/> if the key exists; otherwise, <see langword="false"/>.
        /// </returns>
        public bool Exists(in KeyBytes key);

        /// <summary>
        /// Lists all keys that have been stored in the storage.
        /// </summary>
        /// <returns>All keys in an arbitrary order.  The order might be vary for each call.
        /// </returns>
        public IEnumerable<KeyBytes> ListKeys();
    }
}
