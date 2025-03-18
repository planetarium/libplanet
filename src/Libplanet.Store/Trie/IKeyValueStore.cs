using System;
using System.Collections.Generic;

namespace Libplanet.Store.Trie;

/// <summary>
/// An interface to access key-value store.
/// </summary>
public interface IKeyValueStore : IDisposable
{
    byte[] this[in KeyBytes key] { get; set; }

    /// <summary>
    /// Sets all values in the given dictionary.
    /// </summary>
    /// <param name="values">A values to set.</param>
    void Set(IDictionary<KeyBytes, byte[]> values)
    {
        foreach (var (key, value) in values)
        {
            this[key] = value;
        }
    }

    byte[] Get(in KeyBytes key) => this[key];

    void Set(in KeyBytes key, byte[] value) => this[key] = value;

    /// <summary>
    /// Deletes the given key.  If the key does not exist, nothing happens.
    /// </summary>
    /// <param name="key">A key to delete.</param>
    bool Remove(in KeyBytes key);

    /// <summary>
    /// Delete multiple <paramref name="keys"/> at once.
    /// </summary>
    /// <param name="keys">Keys to delete.  The order of keys does not matter.
    /// Non-existent keys are ignored.</param>
    void RemoveMany(IEnumerable<KeyBytes> keys)
    {
        foreach (var key in keys)
        {
            Remove(key);
        }
    }

    /// <summary>
    /// Checks whether the given key exists in the store.
    /// </summary>
    /// <param name="key">A key to check.</param>
    /// <returns><see langword="true"/> if the key exists; otherwise, <see langword="false"/>.
    /// </returns>
    bool ContainsKey(in KeyBytes key);

    /// <summary>
    /// Lists all keys that have been stored in the storage.
    /// </summary>
    /// <returns>All keys in an arbitrary order.  The order might be vary for each call.
    /// </returns>
    IEnumerable<KeyBytes> ListKeys();
}
