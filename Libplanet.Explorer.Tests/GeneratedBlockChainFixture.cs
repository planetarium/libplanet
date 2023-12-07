using System;
using System.Collections.Immutable;
using System.Linq;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Action.Loader;
using Libplanet.Action.Sys;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
using Libplanet.Crypto;
using Libplanet.Types.Assets;
using Libplanet.Types.Blocks;
using Libplanet.Types.Consensus;
using Libplanet.Types.Tx;
using Libplanet.Store;
using Libplanet.Store.Trie;

namespace Libplanet.Explorer.Tests;

public class GeneratedBlockChainFixture
{
    public static Currency TestCurrency => Currency.Uncapped("TEST", 0, null);

    public BlockChain Chain { get; }

    public ImmutableArray<PrivateKey> PrivateKeys { get; }

    public ImmutableDictionary<Address, ImmutableArray<Block>>
        MinedBlocks { get; private set; }

    public ImmutableDictionary<Address, ImmutableArray<Transaction>>
        SignedTxs { get; private set; }

    public GeneratedBlockChainFixture(
        int seed,
        int blockCount = 20,
        int maxTxCount = 20,
        int privateKeyCount = 10,
        ImmutableArray<ImmutableArray<ImmutableArray<SimpleAction>>>?
            txActionsForPrefixBlocks = null,
        ImmutableArray<ImmutableArray<ImmutableArray<SimpleAction>>>?
            txActionsForSuffixBlocks = null)
    {
        var random = new System.Random(seed);
        var stateStore = new TrieStateStore(new MemoryKeyValueStore());

        PrivateKeys = Enumerable
            .Range(0, privateKeyCount)
            .Select(_ => new PrivateKey())
            .ToImmutableArray();
        MinedBlocks = PrivateKeys
            .ToImmutableDictionary(
                key => key.ToAddress(),
                key => ImmutableArray<Block>.Empty);
        SignedTxs = PrivateKeys
            .ToImmutableDictionary(
                key => key.ToAddress(),
                key => ImmutableArray<Transaction>.Empty);

        var privateKey = new PrivateKey();
        var policy = new BlockPolicy(
            blockInterval: TimeSpan.FromMilliseconds(1),
            getMaxTransactionsPerBlock: _ => int.MaxValue,
            getMaxTransactionsBytes: _ => long.MaxValue);
        IStore store = new MemoryStore();
        var actionEvaluator = new ActionEvaluator(
            _ => policy.BlockAction,
            stateStore,
            TypedActionLoader.Create(typeof(SimpleAction).Assembly, typeof(SimpleAction)));
        Block genesisBlock = BlockChain.ProposeGenesisBlock(
            actionEvaluator,
            transactions: PrivateKeys
                .OrderBy(pk => pk.Address.ToHex())
                .Select(
                    (pk, i) => Transaction.Create(
                        nonce: i,
                        privateKey: privateKey,
                        genesisHash: null,
                        actions: new IAction[]
                            {
                                new Initialize(
                                    new ValidatorSet(
                                        ImmutableList<Validator>.Empty.Add(
                                            new Validator(pk.PublicKey, 1)).ToList()),
                                    ImmutableDictionary<Address, IValue>.Empty),
                            }.ToPlainValues()))
                .ToImmutableList());
        Chain = BlockChain.Create(
            policy,
            new VolatileStagePolicy(),
            store,
            stateStore,
            genesisBlock,
            actionEvaluator);

        MinedBlocks = MinedBlocks.SetItem(
            Chain.Genesis.Miner,
            ImmutableArray<Block>.Empty.Add(Chain.Genesis));

        if (txActionsForPrefixBlocks is { } txActionsForPrefixBlocksVal)
        {
            foreach (var actionsForTransactions in txActionsForPrefixBlocksVal)
            {
                var pk = PrivateKeys[random.Next(PrivateKeys.Length)];
                AddBlock(
                    random.Next(),
                    actionsForTransactions.Select(actions =>
                            Transaction.Create(
                                Chain.GetNextTxNonce(pk.Address),
                                pk,
                                Chain.Genesis.Hash,
                                actions.ToPlainValues()))
                        .ToImmutableArray());
            }
        }

        while (Chain.Count < blockCount + (txActionsForPrefixBlocks?.Length ?? 0) + 1)
        {
            AddBlock(
                random.Next(),
                GetRandomTransactions(random.Next(), maxTxCount, Chain.Count == 1));
        }

        if (txActionsForSuffixBlocks is { } txActionsForSuffixBlocksVal)
        {
            foreach (var actionsForTransactions in txActionsForSuffixBlocksVal)
            {
                var pk = PrivateKeys[random.Next(PrivateKeys.Length)];
                AddBlock(
                    random.Next(),
                    actionsForTransactions.Select(actions =>
                            Transaction.Create(
                                Chain.GetNextTxNonce(pk.Address),
                                pk,
                                Chain.Genesis.Hash,
                                actions.ToPlainValues()))
                        .ToImmutableArray());
            }
        }
    }

    private ImmutableArray<Transaction> GetRandomTransactions(
        int seed,
        int maxCount,
        bool giveMax = false)
    {
        var random = new System.Random(seed);
        var nonces = ImmutableDictionary<PrivateKey, long>.Empty;
        return Enumerable
            .Range(0, giveMax ? maxCount : random.Next(maxCount))
            .Select(_ =>
            {
                var pk = PrivateKeys[random.Next(PrivateKeys.Length)];
                if (!nonces.TryGetValue(pk, out var nonce))
                {
                    nonce = Chain.GetNextTxNonce(pk.ToAddress());
                }

                nonces = nonces.SetItem(pk, nonce + 1);

                return GetRandomTransaction(random.Next(), pk, nonce);
            })
            .OrderBy(tx => tx.Id)
            .ToImmutableArray();
    }

    private Transaction GetRandomTransaction(int seed, PrivateKey pk, long nonce)
    {
        var random = new System.Random(seed);
        var addr = pk.Address;
        var bal = (int)(Chain.GetBalance(addr, TestCurrency).MajorUnit & int.MaxValue);
        return
        new Transaction(
            new UnsignedTx(
                new TxInvoice(
                    genesisHash: Chain.Genesis.Hash,
                    updatedAddresses: GetRandomAddresses(random.Next()),
                    timestamp: DateTimeOffset.UtcNow,
                    actions: new TxActionList(random.Next() % 2 == 0
                        ? GetRandomActions(random.Next()).ToPlainValues()
                        : ImmutableHashSet<SimpleAction>.Empty.ToPlainValues()),
                    maxGasPrice: null,
                    gasLimit: null),
                new TxSigningMetadata(pk.PublicKey, nonce)),
            pk);
    }

    private ImmutableArray<SimpleAction> GetRandomActions(int seed)
    {
        var random = new System.Random(seed);
        return Enumerable
            .Range(0, random.Next(10))
            .Select(_ => SimpleAction.GetAction(random.Next()))
            .ToImmutableArray();
    }

    private IImmutableSet<Address> GetRandomAddresses(int seed)
    {
        var random = new System.Random(seed);
        return Enumerable
            .Range(0, random.Next(PrivateKeys.Length - 1) + 1)
            .Select(_ => PrivateKeys[random.Next(PrivateKeys.Length)].ToAddress())
            .ToImmutableHashSet();
    }

    private void AddBlock(
        int seed,
        ImmutableArray<Transaction> transactions)
    {
        var random = new System.Random(seed);
        var pk = PrivateKeys[random.Next(PrivateKeys.Length)];
        var block = Chain.EvaluateAndSign(
            new BlockContent(
                new BlockMetadata(
                    Chain.Tip.Index + 1,
                    DateTimeOffset.UtcNow,
                    pk.PublicKey,
                    Chain.Tip.Hash,
                    BlockContent.DeriveTxHash(transactions),
                    Chain.Store.GetChainBlockCommit(Chain.Store.GetCanonicalChainId()!.Value)),
                transactions).Propose(),
            pk);
        Chain.Append(
            block,
            new BlockCommit(
                Chain.Tip.Index + 1,
                0,
                block.Hash,
                PrivateKeys
                    .OrderBy(pk => pk.Address.ToHex())
                    .Select(pk => new VoteMetadata(
                        Chain.Tip.Index + 1,
                        0,
                        block.Hash,
                        DateTimeOffset.UtcNow,
                        pk.PublicKey,
                        VoteFlag.PreCommit).Sign(pk)).ToImmutableArray()));
        MinedBlocks =
            MinedBlocks.SetItem(pk.Address, MinedBlocks[pk.Address].Add(block));
        SignedTxs = transactions.Aggregate(
            SignedTxs,
            (dict, tx) =>
                dict.SetItem(
                    tx.Signer,
                    dict[tx.Signer]
                        .Add(tx)
                        .OrderBy(tx => tx.Nonce)
                        .ToImmutableArray()));
    }
}
