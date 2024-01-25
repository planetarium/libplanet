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
            _cacheableKeyValueStore =
                new CacheableKeyValueStore(new DefaultKeyValueStore(null));
            InitializePreStoredData();
        }

        protected override IKeyValueStore KeyValueStore => _cacheableKeyValueStore;

        public void Dispose()
        {
            _cacheableKeyValueStore.Dispose();
        }
    }
}
