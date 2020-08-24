using System;
using System.IO;
using Libplanet.Tests.Store.Trie;

namespace Libplanet.RocksDBStore.Tests
{
    public class RocksDBKeyValueStoreTest : KeyValueStoreTest, IDisposable
    {
        private readonly RocksDBKeyValueStore _rocksDbKeyValueStore;

        public RocksDBKeyValueStoreTest()
        {
            KeyValueStore = _rocksDbKeyValueStore = new RocksDBKeyValueStore(Path.Combine(
                    Path.GetTempPath(),
                    $"rocksdb_key_value_test_{Guid.NewGuid()}"));
            InitializePreStoredData();
        }

        public void Dispose()
        {
            _rocksDbKeyValueStore.Dispose();
        }
    }
}
