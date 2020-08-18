using LruCacheNet;

namespace Libplanet.Store.Trie
{
    public class CacheableKeyValueStore : IKeyValueStore
    {
        private readonly IKeyValueStore _keyValueStore;
        private readonly LruCache<byte[], byte[]> _cache;

        public CacheableKeyValueStore(IKeyValueStore keyValueStore, int cacheSize = 100)
        {
            _keyValueStore = keyValueStore;
            _cache = new LruCache<byte[], byte[]>(cacheSize);
        }

        public byte[] Get(byte[] key)
        {
            if (_cache.ContainsKey(key))
            {
                return _cache[key];
            }

            return _cache[key] = _keyValueStore.Get(key);
        }

        public void Set(byte[] key, byte[] value)
        {
            _keyValueStore.Set(key, value);
            _cache[key] = value;
        }

        public void Delete(byte[] key)
        {
            _keyValueStore.Delete(key);
            _cache.Remove(key);
        }

        public bool Exists(byte[] key)
        {
            return _cache.ContainsKey(key) || _keyValueStore.Exists(key);
        }
    }
}
