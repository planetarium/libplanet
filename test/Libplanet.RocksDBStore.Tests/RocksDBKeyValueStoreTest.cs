using System;
using System.Collections.Generic;
using System.IO;
using Libplanet.Store.Trie;
using Libplanet.Tests.Store.Trie;
using RocksDbSharp;
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
        public void ReadOnlyRocksDb()
        {
            var basePath = Path.Combine(
                Path.GetTempPath(),
                $"rocksdb_key_value_test_{Guid.NewGuid()}");
            var primaryRocksDb = new RocksDBKeyValueStore(basePath);
            var readonlyRocksDb = new RocksDBKeyValueStore(basePath, RocksDBInstanceType.ReadOnly);

            var key = new KeyBytes("new");
            var value = new byte[] { 1, 2, 3 };
            primaryRocksDb.Set(key, value);
            Assert.Equal(value, primaryRocksDb.Get(key));
            Assert.Throws<KeyNotFoundException>(() => readonlyRocksDb.Get(key));
            Assert.Throws<RocksDbException>(() => readonlyRocksDb.TryCatchUpWithPrimary());
        }

        [Fact]
        public void SecondaryRocksDb()
        {
            var basePath = Path.Combine(
                Path.GetTempPath(),
                $"rocksdb_key_value_test_{Guid.NewGuid()}");
            var primaryRocksDb = new RocksDBKeyValueStore(basePath);
            var secondaryRocksDb = new RocksDBKeyValueStore(
                basePath,
                RocksDBInstanceType.Secondary);

            var key = new KeyBytes("new");
            var value = new byte[] { 1, 2, 3 };
            primaryRocksDb.Set(key, value);
            Assert.Equal(value, primaryRocksDb.Get(key));
            Assert.Throws<KeyNotFoundException>(() => secondaryRocksDb.Get(key));

            secondaryRocksDb.TryCatchUpWithPrimary();
            Assert.Equal(value, secondaryRocksDb.Get(key));
        }

        public void Dispose()
        {
            _rocksDbKeyValueStore.Dispose();
        }
    }
}
