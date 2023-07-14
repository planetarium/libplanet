using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Collections.Immutable;

namespace Libplanet.Store.Trie
{
    /// <summary>
    /// Volatile in-memory key-value store.
    /// <para>It is useful for storing temporal small chains, e.g., fixtures for unit tests of
    /// game logic.</para>
    /// <para><see cref="MemoryStore"/> and <see cref="MemoryKeyValueStore"/>-backed
    /// <see cref="TrieStateStore"/> can be instantiated from a URI with <c>memory:</c> scheme
    /// using <see cref="StoreLoaderAttribute.LoadStore(Uri)"/>, e.g.:</para>
    /// <list type="bullet">
    /// <item><description><c>memory:</c></description></item>
    /// <item><description><c>memory://?secure=true</c> (trie keys are hashed)</description></item>
    /// </list>
    /// </summary>
    public sealed class MemoryKeyValueStore : IKeyValueStore
    {
        private readonly ConcurrentDictionary<KeyBytes, byte[]> _dictionary =
            new ConcurrentDictionary<KeyBytes, byte[]>();

        /// <inheritdoc/>
        byte[] IKeyValueStore.Get(in KeyBytes key) =>
            _dictionary[key];

        /// <inheritdoc cref="IKeyValueStore.Get(IEnumerable{KeyBytes})"/>
        public IReadOnlyDictionary<KeyBytes, byte[]> Get(IEnumerable<KeyBytes> keys)
        {
            var dictBuilder = ImmutableDictionary.CreateBuilder<KeyBytes, byte[]>();
            foreach (KeyBytes key in keys)
            {
                if (_dictionary.TryGetValue(key, out byte[]? value) && value is { } v)
                {
                    dictBuilder[key] = v;
                }
            }

            return dictBuilder.ToImmutable();
        }

        /// <inheritdoc/>
        void IKeyValueStore.Set(in KeyBytes key, byte[] value) =>
            _dictionary[key] = value;

        /// <inheritdoc cref="IKeyValueStore.Set(IDictionary{KeyBytes, byte[]})"/>
        void IKeyValueStore.Set(IDictionary<KeyBytes, byte[]> values)
        {
            foreach (KeyValuePair<KeyBytes, byte[]> kv in values)
            {
                _dictionary[kv.Key] = kv.Value;
            }
        }

        /// <inheritdoc/>
        void IKeyValueStore.Delete(in KeyBytes key) =>
            _dictionary.TryRemove(key, out _);

        /// <inheritdoc cref="IKeyValueStore.Delete(IEnumerable{KeyBytes})"/>
        public void Delete(IEnumerable<KeyBytes> keys)
        {
            foreach (KeyBytes key in keys)
            {
                _dictionary.TryRemove(key, out _);
            }
        }

        /// <inheritdoc/>
        bool IKeyValueStore.Exists(in KeyBytes key) =>
            _dictionary.ContainsKey(key);

        /// <inheritdoc cref="IDisposable.Dispose()"/>
        void IDisposable.Dispose()
        {
            // Method intentionally left empty.
        }

        IEnumerable<KeyBytes> IKeyValueStore.ListKeys() =>
            _dictionary.Keys;
    }
}
