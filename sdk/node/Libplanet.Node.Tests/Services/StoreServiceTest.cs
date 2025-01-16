using Libplanet.Node.Options;
using Libplanet.Node.Services;
using Libplanet.Store;
using Libplanet.Store.Trie;
using Microsoft.Extensions.DependencyInjection;

namespace Libplanet.Node.Tests.Services;

public class StoreServiceTest
{
    [Fact]
    public void RocksDB_Test()
    {
        var settings = new Dictionary<string, string?>
        {
            [$"{StoreOptions.Position}:{nameof(StoreOptions.Type)}"] = $"{StoreType.RocksDB}",
        };
        var serviceProvider = TestUtility.CreateServiceProvider(settings);
        var storeService = serviceProvider.GetRequiredService<IStoreService>();

        Assert.IsType<RocksDBStore.RocksDBStore>(storeService.Store);
        Assert.IsType<RocksDBStore.RocksDBKeyValueStore>(storeService.KeyValueStore);
    }

    [Fact]
    public void InMemory_Test()
    {
        var settings = new Dictionary<string, string?>
        {
            [$"{StoreOptions.Position}:{nameof(StoreOptions.Type)}"] = $"{StoreType.InMemory}",
        };
        var serviceProvider = TestUtility.CreateServiceProvider(settings);
        var storeService = serviceProvider.GetRequiredService<IStoreService>();

        Assert.IsType<MemoryStore>(storeService.Store);
        Assert.IsType<MemoryKeyValueStore>(storeService.KeyValueStore);
    }
}
