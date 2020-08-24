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
            KeyValueStore = _defaultKeyValueStore = new DefaultKeyValueStore(null);
            InitializePreStoredData();
        }

        public void Dispose()
        {
            _defaultKeyValueStore.Dispose();
        }
    }
}
