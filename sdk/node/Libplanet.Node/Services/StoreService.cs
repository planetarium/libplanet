using Libplanet.Node.DependencyInjection;
using Libplanet.Node.Options;
using Libplanet.RocksDBStore;
using Libplanet.Store;
using Libplanet.Store.Trie;
using Microsoft.Extensions.Options;

namespace Libplanet.Node.Services;

[Singleton]
internal sealed class StoreService
{
    public StoreService(
        IOptions<StoreOptions> storeOptions)
    {
        (Store, Statestore) = CreateStore(storeOptions.Value);
    }

    public IStore Store { get; }

    public IStateStore Statestore { get; }

    private static (IStore, IStateStore) CreateStore(StoreOptions storeOptions)
    {
        return storeOptions.Type switch
        {
            StoreType.Disk => CreateDiskStore(),
            StoreType.Memory => CreateMemoryStore(),
            _ => throw new NotSupportedException($"Unsupported store type: {storeOptions.Type}"),
        };

        (MemoryStore, TrieStateStore) CreateMemoryStore()
        {
            var store = new MemoryStore();
            var stateStore = new TrieStateStore(new MemoryKeyValueStore());
            return (store, stateStore);
        }

        (RocksDBStore.RocksDBStore, TrieStateStore) CreateDiskStore()
        {
            var store = new RocksDBStore.RocksDBStore(storeOptions.StoreName);
            var keyValueStore = new RocksDBKeyValueStore(storeOptions.StateStoreName);
            var stateStore = new TrieStateStore(keyValueStore);
            return (store, stateStore);
        }
    }
}
