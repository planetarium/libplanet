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
        private readonly ConcurrentDictionary<byte[], byte[]> _dictionary =
            new ConcurrentDictionary<byte[], byte[]>(new BytesEqualityComparer());

        byte[] IKeyValueStore.Get(byte[] key) =>
            _dictionary[key];

        void IKeyValueStore.Set(byte[] key, byte[] value) =>
            _dictionary[key] = value;

        void IKeyValueStore.Set(IDictionary<byte[], byte[]> values)
        {
            foreach (KeyValuePair<byte[], byte[]> kv in values)
            {
                _dictionary[kv.Key] = kv.Value;
            }
        }

        void IKeyValueStore.Delete(byte[] key) =>
            _dictionary.TryRemove(key, out _);

        bool IKeyValueStore.Exists(byte[] key) =>
            _dictionary.ContainsKey(key);

        void IDisposable.Dispose()
        {
            // Method intentionally left empty.
        }

        IEnumerable<byte[]> IKeyValueStore.ListKeys() =>
            _dictionary.Keys;

        private class BytesEqualityComparer : EqualityComparer<byte[]>
        {
            public override bool Equals(byte[]? x, byte[]? y)
            {
                if (x is { } xa && y is { } ya)
                {
                    if (xa.Length != ya.Length)
                    {
                        return false;
                    }

                    for (int i = 0; i < xa.Length; i++)
                    {
                        if (xa[i] != ya[i])
                        {
                            return false;
                        }
                    }

                    return true;
                }

                return ReferenceEquals(x, y);
            }

            public override int GetHashCode(byte[] obj)
            {
                return 0;
            }
        }
    }
}
