using System.Collections.Concurrent;
using System.Collections.Immutable;
using System.Diagnostics;
using System.Numerics;
using System.Security.Cryptography;
using Bencodex;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Action.Loader;
using Libplanet.Action.Sys;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
using Libplanet.Blockchain.Renderers;
using Libplanet.Common;
using Libplanet.Crypto;
using Libplanet.Node.Actions;
using Libplanet.Node.Options;
using Libplanet.RocksDBStore;
using Libplanet.Store;
using Libplanet.Store.Trie;
using Libplanet.Types.Blocks;
using Libplanet.Types.Consensus;
using Libplanet.Types.Tx;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace Libplanet.Node.Services;

internal sealed class BlockChainService : IBlockChainService, IActionRenderer
{
    private static readonly Codec _codec = new();
    private readonly SynchronizationContext _synchronizationContext;
    private readonly ILogger<BlockChainService> _logger;
    private readonly BlockChain _blockChain;
    private readonly ConcurrentDictionary<TxId, ManualResetEvent> _eventByTxId = [];
    private readonly ConcurrentDictionary<IValue, Exception> _exceptionByAction = [];

    public BlockChainService(
        IOptions<GenesisOptions> genesisOptions,
        IOptions<StoreOptions> storeOptions,
        IOptions<ActionOptions> actionOptions,
        PolicyService policyService,
        ILogger<BlockChainService> logger)
    {
        _synchronizationContext = SynchronizationContext.Current ?? new();
        _logger = logger;
        _blockChain = CreateBlockChain(
            genesisOptions: genesisOptions.Value,
            storeOptions: storeOptions.Value,
            actionOptions: actionOptions.Value,
            stagePolicy: policyService.StagePolicy,
            renderers: [this]);
    }

    public event EventHandler<BlockEventArgs>? BlockAppended;

    public BlockChain BlockChain => _blockChain;

    void IRenderer.RenderBlock(Block oldTip, Block newTip)
    {
    }

    void IActionRenderer.RenderAction(
        IValue action, ICommittedActionContext context, HashDigest<SHA256> nextState)
    {
    }

    void IActionRenderer.RenderActionError(
        IValue action, ICommittedActionContext context, Exception exception)
    {
        _exceptionByAction.AddOrUpdate(action, exception, (_, _) => exception);
    }

    void IActionRenderer.RenderBlockEnd(Block oldTip, Block newTip)
    {
        _synchronizationContext.Post(Action, state: null);

        void Action(object? state)
        {
            foreach (var transaction in newTip.Transactions)
            {
                if (_eventByTxId.TryGetValue(transaction.Id, out var manualResetEvent))
                {
                    manualResetEvent.Set();
                }
            }

            _logger.LogInformation("#{Height}: Block appended", newTip.Index);
            BlockAppended?.Invoke(this, new(newTip));
        }
    }

    private static BlockChain CreateBlockChain(
        GenesisOptions genesisOptions,
        StoreOptions storeOptions,
        ActionOptions actionOptions,
        IStagePolicy stagePolicy,
        IRenderer[] renderers)
    {
        // var actionLoader = actionOptions.GetActionLoader();
        var policyActions = new PolicyActionsRegistry();

        var (store, stateStore, keyValueStore) = CreateStore(storeOptions);

        var actionEvaluator = new PluggedActionEvaluator("/Users/jeesu/Downloads/osx-arm64 (2)/Lib9c.Plugin.dll", "Lib9c.Plugin.PluginActionEvaluator", keyValueStore, new AggregateTypedActionLoader());
        // var actionEvaluator = new ActionEvaluator(
        //     policyActionsRegistry: policyActions,
        //     stateStore,
        //     actionLoader);

        var genesisBlock = CreateGenesisBlock(genesisOptions);
        var policy = new BlockPolicy(
            policyActionsRegistry: policyActions,
            blockInterval: TimeSpan.FromSeconds(8),
            validateNextBlockTx: (chain, transaction) => null,
            validateNextBlock: (chain, block) => null,
            getMaxTransactionsBytes: l => long.MaxValue,
            getMinTransactionsPerBlock: l => 0,
            getMaxTransactionsPerBlock: l => int.MaxValue,
            getMaxTransactionsPerSignerPerBlock: l => int.MaxValue
        );

        var blockChainStates = new BlockChainStates(store, stateStore);
        if (store.GetCanonicalChainId() is null)
        {
            return BlockChain.Create(
                policy: policy,
                stagePolicy: stagePolicy,
                store: store,
                stateStore: stateStore,
                genesisBlock: genesisBlock,
                actionEvaluator: actionEvaluator,
                renderers: renderers,
                blockChainStates: blockChainStates);
        }

        return new BlockChain(
            policy: policy,
            stagePolicy: stagePolicy,
            store: store,
            stateStore: stateStore,
            genesisBlock: genesisBlock,
            blockChainStates: blockChainStates,
            actionEvaluator: actionEvaluator,
            renderers: renderers);
    }

    private static (IStore, IStateStore, IKeyValueStore) CreateStore(StoreOptions storeOptions)
    {
        return storeOptions.Type switch
        {
            StoreType.Disk => CreateDiskStore(),
            StoreType.Memory => CreateMemoryStore(),
            _ => throw new NotSupportedException($"Unsupported store type: {storeOptions.Type}"),
        };

        (MemoryStore, TrieStateStore, MemoryKeyValueStore) CreateMemoryStore()
        {
            var store = new MemoryStore();
            var keyValueStore = new MemoryKeyValueStore();
            var stateStore = new TrieStateStore(keyValueStore);
            return (store, stateStore, keyValueStore);
        }

        (RocksDBStore.RocksDBStore, TrieStateStore, RocksDBKeyValueStore) CreateDiskStore()
        {
            var store = new RocksDBStore.RocksDBStore(storeOptions.StoreName);
            var keyValueStore = new RocksDBKeyValueStore(storeOptions.StateStoreName);
            var stateStore = new TrieStateStore(keyValueStore);
            return (store, stateStore, keyValueStore);
        }
    }

    private static Block CreateGenesisBlock(GenesisOptions genesisOptions)
    {
        if (genesisOptions.GenesisKey != string.Empty)
        {
            var genesisKey = PrivateKey.FromString(genesisOptions.GenesisKey);
            var validatorKeys = genesisOptions.Validators.Select(PublicKey.FromHex).ToArray();
            return CreateGenesisBlock(genesisKey, validatorKeys);
        }

        if (genesisOptions.GenesisBlockPath != string.Empty)
        {
            return genesisOptions.GenesisBlockPath switch
            {
                { } path when Uri.TryCreate(path, UriKind.Absolute, out var uri)
                    => LoadGenesisBlockFromUrl(uri),
                { } path => LoadGenesisBlock(path),
                _ => throw new NotSupportedException(),
            };
        }

        throw new UnreachableException("Genesis block path is not set.");
    }

    private static Block CreateGenesisBlock(PrivateKey genesisKey, PublicKey[] validatorKeys)
    {
        var validators = validatorKeys
            .Select(item => new Validator(item, new BigInteger(1000)))
            .ToArray();
        var validatorSet = new ValidatorSet(validators: [.. validators]);
        var nonce = 0L;
        IAction[] actions =
        [
            new Initialize(
                validatorSet: validatorSet,
                states: ImmutableDictionary.Create<Address, IValue>()),
        ];

        var transaction = Transaction.Create(
            nonce: nonce,
            privateKey: genesisKey,
            genesisHash: null,
            actions: [.. actions.Select(item => item.PlainValue)],
            timestamp: DateTimeOffset.MinValue);
        var transactions = ImmutableList.Create(transaction);
        return BlockChain.ProposeGenesisBlock(
            privateKey: genesisKey,
            transactions: transactions,
            timestamp: DateTimeOffset.MinValue);
    }

    private static Block LoadGenesisBlock(string genesisBlockPath)
    {
        var rawBlock = File.ReadAllBytes(Path.GetFullPath(genesisBlockPath));
        var blockDict = (Dictionary)new Codec().Decode(rawBlock);
        return BlockMarshaler.UnmarshalBlock(blockDict);
    }

    private static Block LoadGenesisBlockFromUrl(Uri genesisBlockUri)
    {
        using var client = new HttpClient();
        var rawBlock = client.GetByteArrayAsync(genesisBlockUri).Result;
        var blockDict = (Dictionary)_codec.Decode(rawBlock);
        return BlockMarshaler.UnmarshalBlock(blockDict);
    }
}
