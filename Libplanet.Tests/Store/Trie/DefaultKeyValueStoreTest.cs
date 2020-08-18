using Libplanet.Store.Trie;

namespace Libplanet.Tests.Store.Trie
{
    public class DefaultKeyValueStoreTest : KeyValueStoreTest
    {
        public DefaultKeyValueStoreTest()
        {
            // Memory mode.
            KeyValueStore = new DefaultKeyValueStore(null);
            InitializePreStoredData();
        }
    }
}
