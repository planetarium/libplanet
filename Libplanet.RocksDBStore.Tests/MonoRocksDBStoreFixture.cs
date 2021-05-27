using System;
using System.IO;
using Libplanet.Store;
using Libplanet.Store.Trie;
using Libplanet.Tests.Store;

namespace Libplanet.RocksDBStore.Tests
{
    public class MonoRocksDBStoreFixture : StoreFixture
    {
        public MonoRocksDBStoreFixture()
        {
            Path = System.IO.Path.Combine(
                System.IO.Path.GetTempPath(),
                $"rocksdb_test_{Guid.NewGuid()}"
            );

            Scheme = "monorocksdb://";

            var store = new MonoRocksDBStore(Path, blockCacheSize: 2, txCacheSize: 2);
            Store = store;
            StateStore = LoadTrieStateStore(Path);
        }

        public IStateStore LoadTrieStateStore(string path)
        {
            IKeyValueStore stateKeyValueStore =
                new RocksDBKeyValueStore(System.IO.Path.Combine(path, "states"));
            IKeyValueStore stateHashKeyValueStore =
                new RocksDBKeyValueStore(System.IO.Path.Combine(path, "states_hashes"));
            return new TrieStateStore(stateKeyValueStore, stateHashKeyValueStore);
        }

        public override void Dispose()
        {
            (Store as IDisposable)?.Dispose();
            (StateStore as IDisposable)?.Dispose();

            if (!(Path is null))
            {
                Directory.Delete(Path, true);
            }
        }
    }
}
