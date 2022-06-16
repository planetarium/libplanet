using System;
using System.IO;
using Libplanet.Action;
using Libplanet.Store;
using Libplanet.Store.Trie;

namespace Libplanet.Tests.Store
{
    public class DefaultStoreFixture : StoreFixture, IDisposable
    {
        public DefaultStoreFixture(bool memory = true, IAction blockAction = null)
            : base(blockAction)
        {
            if (memory)
            {
                Path = null;
            }
            else
            {
                Path = System.IO.Path.Combine(
                    System.IO.Path.GetTempPath(),
                    $"defaultstore_test_{Guid.NewGuid()}"
                );
            }

            Scheme = "default+file://";

            var store = new DefaultStore(Path, blockCacheSize: 2, txCacheSize: 2);
            Store = store;
            StateStore = LoadTrieStateStore(Path);
        }

        public IStateStore LoadTrieStateStore(string path)
        {
            IKeyValueStore stateKeyValueStore =
                new DefaultKeyValueStore(path is null
                    ? null
                    : System.IO.Path.Combine(path, "states"));
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
