using System;
using System.IO;
using Libplanet.Tests.Store.Trie;
using Xunit;

namespace Libplanet.RocksDBStore.Tests
{
    public class RocksDBKeyValueStoreTest : KeyValueStoreTest, IDisposable
    {
        private readonly RocksDBKeyValueStore _rocksDbKeyValueStore;

        public RocksDBKeyValueStoreTest()
        {
            try
            {
                KeyValueStore = _rocksDbKeyValueStore = new RocksDBKeyValueStore(Path.Combine(
                        Path.GetTempPath(),
                        $"rocksdb_key_value_test_{Guid.NewGuid()}"));
                InitializePreStoredData();
            }
            catch (TypeInitializationException)
            {
                throw new SkipException("RocksDB is not available.");
            }
        }

        public void Dispose()
        {
            _rocksDbKeyValueStore.Dispose();
        }
    }
}
