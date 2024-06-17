using System;
using Libplanet.Store.Trie;

namespace Libplanet.Tests.Store.Trie
{
    public class CacheableKeyValueStoreTest : KeyValueStoreTest, IDisposable
    {
        private readonly CacheableKeyValueStore _cacheableKeyValueStore;

        public CacheableKeyValueStoreTest()
        {
            // Memory mode.
            KeyValueStore = _cacheableKeyValueStore =
                new CacheableKeyValueStore(new DefaultKeyValueStore(null));
            InitializePreStoredData();
        }

        public void Dispose()
        {
            _cacheableKeyValueStore.Dispose();
        }
    }
}
