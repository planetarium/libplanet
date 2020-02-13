using System;
using System.IO;
using Libplanet.Tests.Store;

namespace Libplanet.RocksDBStore.Tests
{
    public class RocksDBStoreFixture : StoreFixture
    {
        public RocksDBStoreFixture()
        {
            Path = System.IO.Path.Combine(
                System.IO.Path.GetTempPath(),
                $"rocksdb_test_{Guid.NewGuid()}"
            );

            Store = new RocksDBStore(Path, blockCacheSize: 2, txCacheSize: 2);
        }

        public string Path { get; }

        public override void Dispose()
        {
            (Store as RocksDBStore)?.Dispose();

            if (!(Path is null))
            {
                Directory.Delete(Path, true);
            }
        }
    }
}
