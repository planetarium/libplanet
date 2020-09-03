#nullable enable
using System;
using System.Collections.Generic;
using LruCacheNet;

namespace Libplanet.Store.Trie
{
    /// <summary>
    /// The proxy class to cache <see cref="IKeyValueStore"/> operations.
    /// </summary>
    public class CacheableKeyValueStore : IKeyValueStore, IDisposable
    {
        private readonly IKeyValueStore _keyValueStore;
        private readonly LruCache<byte[], byte[]> _cache;

        /// <summary>
        /// Creates a new <see cref="CacheableKeyValueStore"/>.
        /// </summary>
        /// <param name="keyValueStore">An <see cref="IKeyValueStore"/> implementation to do real
        /// operations via <see cref="CacheableKeyValueStore"/>.</param>
        /// <param name="cacheSize">The capacity of the values cache.</param>
        public CacheableKeyValueStore(IKeyValueStore keyValueStore, int cacheSize = 100)
        {
            _keyValueStore = keyValueStore;
            _cache = new LruCache<byte[], byte[]>(cacheSize);
        }

        /// <inheritdoc/>
        public byte[] Get(byte[] key)
        {
            if (_cache.ContainsKey(key))
            {
                return _cache[key];
            }

            if (_keyValueStore.Get(key) is byte[] bytes)
            {
                _cache[key] = bytes;
                return bytes;
            }

            throw new KeyNotFoundException("There were no elements that correspond to the key" +
                                           $" (hex: {ByteUtil.Hex(key)}).");
        }

        /// <inheritdoc/>
        public void Set(byte[] key, byte[] value)
        {
            _keyValueStore.Set(key, value);
            _cache[key] = value;
        }

        /// <inheritdoc/>
        public void Delete(byte[] key)
        {
            _keyValueStore.Delete(key);
            _cache.Remove(key);
        }

        /// <inheritdoc/>
        public bool Exists(byte[] key)
        {
            return _cache.ContainsKey(key) || _keyValueStore.Exists(key);
        }

        /// <inheritdoc/>
        public IEnumerable<byte[]> ListKeys() => _keyValueStore.ListKeys();

        public void Dispose()
        {
            (_keyValueStore as IDisposable)?.Dispose();
        }
    }
}
