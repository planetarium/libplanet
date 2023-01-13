using System;
using System.IO;
using System.Linq;
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

        [SkippableFact]
        public void ThrowObjectDisposedExceptionAfterDispose()
        {
            _rocksDbKeyValueStore.Dispose();
            Assert.Throws<ObjectDisposedException>(() => _rocksDbKeyValueStore.Exists(default));
            Assert.Throws<ObjectDisposedException>(() => _rocksDbKeyValueStore.ListKeys().First());
            Assert.Throws<ObjectDisposedException>(() => _rocksDbKeyValueStore.Delete(default));
            Assert.Throws<ObjectDisposedException>(() => _rocksDbKeyValueStore.Get(default));
            Assert.Throws<ObjectDisposedException>(() => _rocksDbKeyValueStore.Set(default));
        }

        public void Dispose()
        {
            _rocksDbKeyValueStore.Dispose();
        }
    }
}
