using Libplanet.Store.Trie;

namespace Libplanet.Tests.Store.Trie
{
    public class CacheableKeyValueStoreTest : KeyValueStoreTest
    {
        public CacheableKeyValueStoreTest()
        {
            // Memory mode.
            KeyValueStore = new CacheableKeyValueStore(new DefaultKeyValueStore(null));
            InitializePreStoredData();
        }
    }
}
