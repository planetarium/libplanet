using System;
using System.IO;
using Libplanet.Tests.Store.Trie;

namespace Libplanet.RocksDBStore.Tests
{
    public class RocksDBKeyValueStoreTest : KeyValueStoreTest
    {
        public RocksDBKeyValueStoreTest()
        {
            KeyValueStore = new RocksDBKeyValueStore(Path.Combine(
                    Path.GetTempPath(),
                    $"rocksdb_key_value_test_{Guid.NewGuid()}"));
            InitializePreStoredData();
        }
    }
}
