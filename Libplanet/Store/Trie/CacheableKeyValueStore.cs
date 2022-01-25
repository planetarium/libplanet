using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using LruCacheNet;

namespace Libplanet.Store.Trie
{
    /// <summary>
    /// The proxy class to cache <see cref="IKeyValueStore"/> operations.
    /// </summary>
    public class CacheableKeyValueStore : IKeyValueStore
    {
        private readonly IKeyValueStore _keyValueStore;
        private readonly LruCache<KeyBytes, byte[]> _cache;

        /// <summary>
        /// Creates a new <see cref="CacheableKeyValueStore"/>.
        /// </summary>
        /// <param name="keyValueStore">An <see cref="IKeyValueStore"/> implementation to do real
        /// operations via <see cref="CacheableKeyValueStore"/>.</param>
        /// <param name="cacheSize">The capacity of the values cache.</param>
        public CacheableKeyValueStore(IKeyValueStore keyValueStore, int cacheSize = 100)
        {
            _keyValueStore = keyValueStore;
            _cache = new LruCache<KeyBytes, byte[]>(cacheSize);
        }

        /// <inheritdoc/>
        public byte[] Get(in KeyBytes key)
        {
            if (_cache.TryGetValue(key, out byte[]? value) && value is { } v)
            {
                return v;
            }

            if (_keyValueStore.Get(key) is { } bytes)
            {
                _cache[key] = bytes;
                return bytes;
            }

            throw new KeyNotFoundException($"No such key: ${key}.");
        }

        /// <inheritdoc cref="IKeyValueStore.Get(IEnumerable{KeyBytes})"/>
        public IReadOnlyDictionary<KeyBytes, byte[]> Get(IEnumerable<KeyBytes> keys)
        {
            var dictBuilder = ImmutableDictionary.CreateBuilder<KeyBytes, byte[]>();
            var uncached = new HashSet<KeyBytes>();
            foreach (KeyBytes key in keys)
            {
                if (_cache.TryGetValue(key, out byte[]? value) && value is { } v)
                {
                    dictBuilder[key] = v;
                }
                else
                {
                    uncached.Add(key);
                }
            }

            dictBuilder.AddRange(_keyValueStore.Get(uncached));
            return dictBuilder.ToImmutable();
        }

        /// <inheritdoc/>
        public void Set(in KeyBytes key, byte[] value)
        {
            _keyValueStore.Set(key, value);
            _cache[key] = value;
        }

        public void Set(IDictionary<KeyBytes, byte[]> values)
        {
            _keyValueStore.Set(values);
        }

        /// <inheritdoc/>
        public void Delete(in KeyBytes key)
        {
            _keyValueStore.Delete(key);
            _cache.Remove(key);
        }

        /// <inheritdoc cref="IKeyValueStore.Delete(IEnumerable{KeyBytes})"/>
        public void Delete(IEnumerable<KeyBytes> keys)
        {
            _keyValueStore.Delete(keys);
            foreach (KeyBytes key in keys)
            {
                _cache.Remove(key);
            }
        }

        /// <inheritdoc/>
        public bool Exists(in KeyBytes key)
        {
            return _cache.ContainsKey(key) || _keyValueStore.Exists(key);
        }

        /// <inheritdoc/>
        public IEnumerable<KeyBytes> ListKeys() => _keyValueStore.ListKeys();

        /// <inheritdoc cref="IDisposable.Dispose()"/>
        public void Dispose()
        {
            _keyValueStore?.Dispose();
        }
    }
}
