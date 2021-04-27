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

        [Fact]
#pragma warning disable S2699 // Tests should include assertions
        public void IdempotentDispose()
#pragma warning restore S2699 // Tests should include assertions
        {
            var store = new RocksDBKeyValueStore(
                Path.Combine(
                    Path.GetTempPath(),
                    $"rocksdb_key_value_test_{Guid.NewGuid()}"
                )
            );
            store.Dispose();
#pragma warning disable S3966 // Objects should not be disposed more than once
            store.Dispose();
#pragma warning restore S3966 // Objects should not be disposed more than once
        }

        public void Dispose()
        {
            _rocksDbKeyValueStore.Dispose();
        }
    }
}
