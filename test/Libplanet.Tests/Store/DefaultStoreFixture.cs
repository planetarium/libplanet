#nullable enable
using System;
using System.IO;
using Libplanet.Action;
using Libplanet.Store;
using Libplanet.Store.Trie;

namespace Libplanet.Tests.Store;

public class DefaultStoreFixture : StoreFixture, IDisposable
{
    public DefaultStoreFixture(
        bool memory = true,
        IPolicyActionsRegistry? policyActionsRegistry = null)
        : base(policyActionsRegistry)
    {
        if (memory)
        {
            Path = string.Empty;
        }
        else
        {
            Path = System.IO.Path.Combine(
                System.IO.Path.GetTempPath(),
                $"defaultstore_test_{Guid.NewGuid()}"
            );
        }

        Scheme = "default+file://";

        var store = new DefaultStore(
            new DefaultStoreOptions
            {
                Path = Path,
                BlockCacheSize = 2,
                TxCacheSize = 2,
            });
        Store = store;
        StateStore = LoadTrieStateStore(Path);
    }

    public IStateStore LoadTrieStateStore(string path)
    {
        IKeyValueStore stateKeyValueStore =
            new DefaultKeyValueStore(path == string.Empty
                ? string.Empty
                : System.IO.Path.Combine(path, "states"));
        return new TrieStateStore(stateKeyValueStore);
    }

    public override void Dispose()
    {
        Store.Dispose();
        StateStore.Dispose();

        if (Directory.Exists(Path))
        {
            Directory.Delete(Path, true);
        }
    }
}
