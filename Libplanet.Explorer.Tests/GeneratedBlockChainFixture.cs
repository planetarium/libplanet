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
using Libplanet.Consensus;
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

    public ImmutableDictionary<
            Address,
            ImmutableArray<Transaction>>
        SignedTxs { get; private set; }

    public ImmutableDictionary<
            Address,
            ImmutableArray<Transaction>>
        InvolvedTxs { get; private set; }

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
        PrivateKeys = Enumerable.Range(0, privateKeyCount)
            .Aggregate(ImmutableArray<PrivateKey>.Empty, (arr, _) => arr.Add(new PrivateKey()));
        MinedBlocks = PrivateKeys.Aggregate(
            ImmutableDictionary<Address, ImmutableArray<Block>>
                .Empty,
            (dict, pk) =>
                dict.SetItem(
                    pk.ToAddress(),
                    ImmutableArray<Block>.Empty));
        SignedTxs = PrivateKeys.Aggregate(
            ImmutableDictionary<
                Address,
                ImmutableArray<Transaction>>.Empty,
            (dict, pk) =>
                dict.SetItem(
                    pk.ToAddress(),
                    ImmutableArray<Transaction>.Empty));
        InvolvedTxs = PrivateKeys.Aggregate(
            ImmutableDictionary<
                Address,
                ImmutableArray<Transaction>>.Empty,
            (dict, pk) =>
                dict.SetItem(
                    pk.ToAddress(),
                    ImmutableArray<Transaction>.Empty));

        var privateKey = new PrivateKey();
        var policy = new BlockPolicy(
            blockInterval: TimeSpan.FromMilliseconds(1),
            getMaxTransactionsPerBlock: _ => int.MaxValue,
            getMaxTransactionsBytes: _ => long.MaxValue);
        IStore store = new MemoryStore();
        var actionEvaluator = new ActionEvaluator(
            _ => policy.BlockAction,
            new BlockChainStates(store, stateStore),
            TypedActionLoader.Create(typeof(SimpleAction).Assembly, typeof(SimpleAction)));
        Block genesisBlock = BlockChain.ProposeGenesisBlock(
            actionEvaluator,
            transactions: PrivateKeys
                .OrderBy(pk => pk.ToAddress().ToHex())
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
                                    ImmutableDictionary.Create<
                                        Address, IImmutableDictionary<Address, IValue>>())
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
                                Chain.GetNextTxNonce(pk.ToAddress()),
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
                                Chain.GetNextTxNonce(pk.ToAddress()),
                                pk,
                                Chain.Genesis.Hash,
                                actions.ToPlainValues()))
                        .ToImmutableArray());
            }
        }
    }

    private ImmutableArray<Transaction> GetRandomTransactions(
        int seed, int maxCount, bool giveMax = false)
    {
        var random = new System.Random(seed);
        var nonces = ImmutableDictionary<PrivateKey, long>.Empty;
        return Enumerable.Range(0, giveMax ? maxCount : random.Next(maxCount))
            .Aggregate(
                ImmutableArray<Transaction>.Empty,
                (arr, _) =>
                {
                    var pk = PrivateKeys[random.Next(PrivateKeys.Length)];
                    if (!nonces.TryGetValue(pk, out var nonce))
                    {
                        nonce = Chain.GetNextTxNonce(pk.ToAddress());
                    }

                    nonces = nonces.SetItem(pk, nonce + 1);

                    return arr.Add(GetRandomTransaction(random.Next(), pk, nonce));
                })
            .OrderBy(tx => tx.Id)
            .ToImmutableArray();
    }

    private Transaction
        GetRandomTransaction(int seed, PrivateKey pk, long nonce)
    {
        var random = new System.Random(seed);
        var addr = pk.ToAddress();
        var bal = (int)(Chain.GetBalance(addr, TestCurrency).MajorUnit & int.MaxValue);
        return Transaction.Create(
            nonce,
            pk,
            Chain.Genesis.Hash,
            random.Next() % 2 == 0
                ? GetRandomActions(random.Next()).ToPlainValues()
                : ImmutableHashSet<SimpleAction>.Empty.ToPlainValues(),
            null,
            null,
            GetRandomAddresses(random.Next()));
    }

    private ImmutableArray<SimpleAction> GetRandomActions(int seed)
    {
        var random = new System.Random(seed);
        return Enumerable.Range(0, random.Next(10))
            .Aggregate(
                ImmutableArray<SimpleAction>.Empty,
                (arr, _) => arr.Add(SimpleAction.GetAction(random.Next())));
    }

    private IImmutableSet<Address> GetRandomAddresses(int seed)
    {
        var random = new System.Random(seed);
        return Enumerable.Range(0, random.Next(PrivateKeys.Length - 1) + 1)
            .Aggregate(
                ImmutableHashSet<Address>.Empty,
                (arr, _) => arr.Add(PrivateKeys[random.Next(PrivateKeys.Length)].ToAddress()));
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
                    .OrderBy(pk => pk.ToAddress().ToHex())
                    .Select(pk => new VoteMetadata(
                        Chain.Tip.Index + 1,
                        0,
                        block.Hash,
                        DateTimeOffset.UtcNow,
                        pk.PublicKey,
                        VoteFlag.PreCommit).Sign(pk)).ToImmutableArray()));
        MinedBlocks =
            MinedBlocks.SetItem(pk.ToAddress(), MinedBlocks[pk.ToAddress()].Add(block));
        SignedTxs = transactions.Aggregate(
            SignedTxs,
            (dict, tx) =>
                dict.SetItem(
                    tx.Signer,
                    dict[tx.Signer]
                        .Add(tx)
                        .OrderBy(tx => tx.Nonce)
                        .ToImmutableArray()));
        InvolvedTxs = transactions.Aggregate(
            InvolvedTxs,
            (dict, tx) => tx.UpdatedAddresses.Aggregate(
                dict,
                (dict, addr) => dict.SetItem(addr, dict[addr].Add(tx))));
    }
}
