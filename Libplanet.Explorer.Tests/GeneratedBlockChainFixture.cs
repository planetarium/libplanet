using System;
using System.Collections.Immutable;
using System.Linq;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Action.Loader;
using Libplanet.Action.State;
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

    public int MaxTxCount { get; }

    public ImmutableDictionary<Address, ImmutableArray<Block>>
        MinedBlocks { get; private set; }

    public ImmutableDictionary<Address, ImmutableArray<Transaction>>
        SignedTxs { get; private set; }

    private Random Random { get; }

    public GeneratedBlockChainFixture(
        int seed,
        int blockCount = 20,
        int maxTxCount = 20,
        int privateKeyCount = 10,
        ImmutableArray<ImmutableArray<ImmutableArray<SimpleAction>>>?
            txActionsForSuffixBlocks = null)
    {
        txActionsForSuffixBlocks ??=
            ImmutableArray<ImmutableArray<ImmutableArray<SimpleAction>>>.Empty;

        var store = new MemoryStore();
        var stateStore = new TrieStateStore(new MemoryKeyValueStore());

        Random = new Random(seed);
        MaxTxCount = maxTxCount;
        PrivateKeys = Enumerable
            .Range(0, privateKeyCount)
            .Select(_ => new PrivateKey())
            .ToImmutableArray();
        MinedBlocks = PrivateKeys
            .ToImmutableDictionary(
                key => key.Address,
                key => ImmutableArray<Block>.Empty);
        SignedTxs = PrivateKeys
            .ToImmutableDictionary(
                key => key.Address,
                key => ImmutableArray<Transaction>.Empty);

        var privateKey = new PrivateKey();
        var policy = new BlockPolicy(
            blockInterval: TimeSpan.FromMilliseconds(1),
            getMaxTransactionsPerBlock: _ => int.MaxValue,
            getMaxTransactionsBytes: _ => long.MaxValue);
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
                                    ImmutableDictionary.Create<Address, IValue>())
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

        while (Chain.Count < blockCount)
        {
            AddBlock(GetRandomTransactions());
        }

        if (txActionsForSuffixBlocks is { } txActionsForSuffixBlocksVal)
        {
            foreach (var actionsForTransactions in txActionsForSuffixBlocksVal)
            {
                var pk = PrivateKeys[Random.Next(PrivateKeys.Length)];
                AddBlock(actionsForTransactions
                    .Select(actions =>
                        Transaction.Create(
                            nonce: Chain.GetNextTxNonce(pk.Address),
                            privateKey: pk,
                            genesisHash: Chain.Genesis.Hash,
                            actions: actions.ToPlainValues()))
                    .ToImmutableArray());
            }
        }
    }

    private ImmutableArray<Transaction> GetRandomTransactions()
    {
        var nonces = ImmutableDictionary<PrivateKey, long>.Empty;
        return Enumerable
            .Range(0, Random.Next(MaxTxCount))
            .Select(_ =>
            {
                var pk = PrivateKeys[Random.Next(PrivateKeys.Length)];
                if (!nonces.TryGetValue(pk, out var nonce))
                {
                    nonce = Chain.GetNextTxNonce(pk.Address);
                }

                nonces = nonces.SetItem(pk, nonce + 1);

                return GetRandomTransaction(pk, nonce);
            })
            .OrderBy(tx => tx.Id)
            .ToImmutableArray();
    }

    private Transaction GetRandomTransaction(PrivateKey pk, long nonce)
    {
        return Transaction.Create(
            nonce: nonce,
            privateKey: pk,
            genesisHash: Chain.Genesis.Hash,
            actions: Random.Next() % 2 == 0
                ? GetRandomActions().ToPlainValues()
                : ImmutableHashSet<SimpleAction>.Empty.ToPlainValues(),
            maxGasPrice: null,
            gasLimit: null);
    }

    private ImmutableArray<SimpleAction> GetRandomActions()
    {
        return Enumerable
            .Range(0, Random.Next(10))
            .Select(_ => SimpleAction.GetAction(Random.Next()))
            .ToImmutableArray();
    }

    private void AddBlock(ImmutableArray<Transaction> transactions)
    {
        var proposer = PrivateKeys[Random.Next(PrivateKeys.Length)];
        var block = Chain.EvaluateAndSign(
            new BlockContent(
                new BlockMetadata(
                    Chain.Tip.Index + 1,
                    DateTimeOffset.UtcNow,
                    proposer.PublicKey,
                    Chain.Tip.Hash,
                    BlockContent.DeriveTxHash(transactions),
                    Chain.Store.GetChainBlockCommit(Chain.Store.GetCanonicalChainId()!.Value),
                    new LotMetadata(Chain.Tip.Index + 1, 0, Chain.Tip.Proof).Prove(proposer).Proof),
                transactions).Propose(),
            proposer);
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
        MinedBlocks = MinedBlocks
            .SetItem(
                proposer.Address,
                MinedBlocks[proposer.Address].Add(block));
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
