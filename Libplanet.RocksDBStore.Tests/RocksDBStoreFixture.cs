using System;
using System.IO;
using Libplanet.Action;
using Libplanet.Store;
using Libplanet.Store.Trie;
using Libplanet.Tests.Store;

namespace Libplanet.RocksDBStore.Tests
{
    public class RocksDBStoreFixture : StoreFixture
    {
        public RocksDBStoreFixture(IAction blockAction = null)
            : base(blockAction)
        {
            Path = System.IO.Path.Combine(
                System.IO.Path.GetTempPath(),
                $"rocksdb_test_{Guid.NewGuid()}"
            );

            Scheme = "rocksdb+file://";

            var store = new RocksDBStore(Path, blockCacheSize: 2, txCacheSize: 2);
            Store = store;
            StateStore = LoadTrieStateStore(Path);
        }

        public IStateStore LoadTrieStateStore(string path)
        {
            IKeyValueStore stateKeyValueStore =
                new RocksDBKeyValueStore(System.IO.Path.Combine(path, "states"));
            return new TrieStateStore(stateKeyValueStore);
        }

        public override void Dispose()
        {
            Store?.Dispose();
            StateStore?.Dispose();

            if (!(Path is null))
            {
                Directory.Delete(Path, true);
            }
        }
    }
}
