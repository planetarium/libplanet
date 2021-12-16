#nullable enable
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;

namespace Libplanet.Store.Trie
{
    /// <summary>
    /// Volatile in-memory key-value store.
    /// <para>It is useful for storing temporal small chains, e.g., fixtures for unit tests of
    /// game logic.</para>
    /// </summary>
    public sealed class MemoryKeyValueStore : IKeyValueStore
    {
        private readonly ConcurrentDictionary<KeyBytes, byte[]> _dictionary =
            new ConcurrentDictionary<KeyBytes, byte[]>();

        byte[] IKeyValueStore.Get(in KeyBytes key) =>
            _dictionary[key];

        void IKeyValueStore.Set(in KeyBytes key, byte[] value) =>
            _dictionary[key] = value;

        void IKeyValueStore.Set(IDictionary<KeyBytes, byte[]> values)
        {
            foreach (KeyValuePair<KeyBytes, byte[]> kv in values)
            {
                _dictionary[kv.Key] = kv.Value;
            }
        }

        void IKeyValueStore.Delete(in KeyBytes key) =>
            _dictionary.TryRemove(key, out _);

        bool IKeyValueStore.Exists(in KeyBytes key) =>
            _dictionary.ContainsKey(key);

        void IDisposable.Dispose()
        {
            // Method intentionally left empty.
        }

        IEnumerable<KeyBytes> IKeyValueStore.ListKeys() =>
            _dictionary.Keys;
    }
}
