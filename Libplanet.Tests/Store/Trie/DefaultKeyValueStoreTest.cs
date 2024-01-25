using System;
using Libplanet.Store.Trie;

namespace Libplanet.Tests.Store.Trie
{
    public class DefaultKeyValueStoreTest : KeyValueStoreTest, IDisposable
    {
        private readonly DefaultKeyValueStore _defaultKeyValueStore;

        public DefaultKeyValueStoreTest()
        {
            // Memory mode.
            _defaultKeyValueStore = new DefaultKeyValueStore(null);
            InitializePreStoredData();
        }

        protected override IKeyValueStore KeyValueStore => _defaultKeyValueStore;

        public void Dispose()
        {
            _defaultKeyValueStore.Dispose();
        }
    }
}
