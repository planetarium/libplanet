using System.Collections.Immutable;
using System.Diagnostics;
using System.Numerics;
using Bencodex;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Action.Loader;
using Libplanet.Action.Sys;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
using Libplanet.Blockchain.Renderers;
using Libplanet.Crypto;
using Libplanet.Node.Options;
using Libplanet.Node.Services.Renderer;
using Libplanet.Store;
using Libplanet.Types.Blocks;
using Libplanet.Types.Consensus;
using Libplanet.Types.Tx;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace Libplanet.Node.Services;

internal sealed class BlockChainService : IBlockChainService
{
    private static readonly Codec _codec = new();
    private readonly ILogger<BlockChainService> _logger;
    private readonly BlockChain _blockChain;

    public BlockChainService(
        IOptions<GenesisOptions> genesisOptions,
        IStoreService storeService,
        IActionService actionService,
        PolicyService policyService,
        IRenderObservables rendererService,
        ILogger<BlockChainService> logger)
    {
        _logger = logger;
        _blockChain = CreateBlockChain(
            genesisOptions: genesisOptions.Value,
            store: storeService.Store,
            stateStore: storeService.StateStore,
            actionLoader: actionService.ActionLoader,
            policyActionsRegistry: actionService.PolicyActionsRegistry,
            stagePolicy: policyService.StagePolicy,
            renderers:
            [
                rendererService.RenderActionObservable,
                rendererService.RenderActionErrorObservable,
                rendererService.RenderBlockObservable,
                rendererService.RenderBlockEndObservable,
            ]);
    }

    public BlockChain BlockChain => _blockChain;

    private static BlockChain CreateBlockChain(
        GenesisOptions genesisOptions,
        IStore store,
        IStateStore stateStore,
        IActionLoader actionLoader,
        IPolicyActionsRegistry policyActionsRegistry,
        IStagePolicy stagePolicy,
        IRenderer[] renderers)
    {
        var actionEvaluator = new ActionEvaluator(
            policyActionsRegistry: policyActionsRegistry,
            stateStore,
            actionLoader);
        var genesisBlock = CreateGenesisBlock(genesisOptions);
        var policy = new BlockPolicy(
            policyActionsRegistry: policyActionsRegistry,
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
