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

            var store = new DefaultStore(Path, blockCacheSize: 2, txCacheSize: 2);
            Store = store;
            StateStore = LoadTrieStateStore(Path);
        }

        public string Path { get; }

        public IStateStore LoadTrieStateStore(string path)
        {
            IKeyValueStore stateKeyValueStore =
                new DefaultKeyValueStore(path is null
                    ? null
                    : System.IO.Path.Combine(path, "states"));
            IKeyValueStore stateHashKeyValueStore =
                new DefaultKeyValueStore(path is null
                    ? null
                    : System.IO.Path.Combine(path, "states_hashes"));
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
