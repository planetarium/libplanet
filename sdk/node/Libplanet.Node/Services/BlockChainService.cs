using Libplanet.Action;
using Libplanet.Action.Loader;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
using Libplanet.Crypto;
using Libplanet.Node.Options;
using Libplanet.RocksDBStore;
using Libplanet.Store;
using Libplanet.Store.Trie;
using Libplanet.Types.Blocks;
using Microsoft.Extensions.Options;

namespace Libplanet.Node.Services;

internal class BlockChainService
{
    private readonly StoreOption _storeOption;
    private readonly BlockChain _blockChain;

    public BlockChainService(IOptions<StoreOption> storeOption)
    {
        _storeOption = storeOption.Value;
        _blockChain = CreateBlockChain();
    }

    public BlockChain GetBlockChain() => _blockChain;

    private BlockChain CreateBlockChain()
    {
        var (store, stateStore) = CreateStore();

        PolicyActionsRegistry policyActionsRegistry = new PolicyActionsRegistry();
        IActionLoader actionLoader = new SingleActionLoader(typeof(DumbAction));

        var privateKey = PrivateKey.FromString(
            "38f0a934283dac31f961492e8a8053de7d6607ac298f307cd6989e71181b13ce");
        var genesis = BlockChain.ProposeGenesisBlock(
            privateKey,
            null,
            null,
            new DateTimeOffset(2024, 7, 24, 0, 0, 0, TimeSpan.Zero));

        if (store.GetCanonicalChainId() is null)
        {
            return BlockChain.Create(
                new BlockPolicy(),
                new VolatileStagePolicy(),
                store,
                stateStore,
                genesis,
                new ActionEvaluator(policyActionsRegistry, stateStore, actionLoader));
        }
        else
        {
            return new BlockChain(
                new BlockPolicy(),
                new VolatileStagePolicy(),
                store,
                stateStore,
                genesis,
                new BlockChainStates(store, stateStore),
                new ActionEvaluator(policyActionsRegistry, stateStore, actionLoader));
        }
    }

    private (IStore, IStateStore) CreateStore()
        => _storeOption.Type switch
        {
            StoreType.RocksDB => CreateRocksDBStore(),
            StoreType.InMemory => CreateInMemoryStore(),
            _ => throw new NotSupportedException($"Unsupported store type: {_storeOption.Type}"),
        };

    private (MemoryStore, TrieStateStore) CreateInMemoryStore()
    {
        var store = new MemoryStore();
        var stateStore = new TrieStateStore(new MemoryKeyValueStore());
        return (store, stateStore);
    }

    private (RocksDBStore.RocksDBStore, TrieStateStore) CreateRocksDBStore()
    {
        var store = new RocksDBStore.RocksDBStore(_storeOption.StorePath);
        var stateStore = new TrieStateStore(new RocksDBKeyValueStore(_storeOption.StateStorePath));
        return (store, stateStore);
    }
}
