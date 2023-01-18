using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Numerics;
using System.Security.Cryptography;
using System.Threading;
using System.Threading.Tasks;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
using Libplanet.Blockchain.Renderers;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Libplanet.Store;
using Libplanet.Store.Trie;
using Libplanet.Tx;

namespace Libplanet.Tests.Fixtures
{
    public sealed class IntegerSet
    {
        public readonly IReadOnlyList<PrivateKey> PrivateKeys;
        public readonly IReadOnlyList<Address> Addresses;
        public readonly IReadOnlyList<Transaction<Arithmetic>> Txs;
        public readonly PrivateKey Miner;
        public readonly Block<Arithmetic> Genesis;
        public readonly BlockChain<Arithmetic> Chain;
        public readonly IStore Store;
        public readonly IKeyValueStore KVStore;
        public readonly TrieStateStore StateStore;

        public IntegerSet(int[] initialStates)
            : this(initialStates.Select(s => new BigInteger?(s)).ToArray(), null, null)
        {
        }

        public IntegerSet(
            IReadOnlyList<BigInteger?> initialStates,
            IBlockPolicy<Arithmetic> policy = null,
            IEnumerable<IRenderer<Arithmetic>> renderers = null
        )
        {
            PrivateKeys = initialStates.Select(_ => new PrivateKey()).ToImmutableArray();
            Addresses = PrivateKeys.Select(AddressExtensions.ToAddress).ToImmutableArray();
            Txs = initialStates
                .Select((state, index) => new { State = state, Key = PrivateKeys[index] })
                .Where(pair => !(pair.State is null))
                .Select(pair => new { State = (BigInteger)pair.State, pair.Key })
                .Select(pair => new { Action = Arithmetic.Add(pair.State), pair.Key })
                .Select(pair =>
                    Transaction<Arithmetic>.Create(
                        0,
                        pair.Key,
                        null,
                        new[] { pair.Action },
                        ImmutableHashSet<Address>.Empty.Add(pair.Key.ToAddress())
                    )
                )
                .OrderBy(tx => tx.Id)
                .ToImmutableArray();
            Miner = new PrivateKey();
            policy = policy ?? new NullBlockPolicy<Arithmetic>();
            Store = new MemoryStore();
            KVStore = new MemoryKeyValueStore();
            StateStore = new TrieStateStore(KVStore);
            Genesis = new BlockContent<Arithmetic>(
                new BlockMetadata(
                    index: 0,
                    timestamp: DateTimeOffset.UtcNow,
                    publicKey: Miner.PublicKey,
                    difficulty: 0,
                    totalDifficulty: 0,
                    previousHash: null,
                    txHash: BlockContent<Arithmetic>.DeriveTxHash(Txs)),
                transactions: Txs)
                .Mine()
                .Evaluate(
                    privateKey: Miner,
                    blockAction: policy.BlockAction,
                    nativeTokenPredicate: policy.NativeTokens.Contains,
                    stateStore: StateStore
            );
            Chain = new BlockChain<Arithmetic>(
                policy,
                new VolatileStagePolicy<Arithmetic>(),
                Store,
                StateStore,
                Genesis,
                renderers
            );
        }

        public int Count => Addresses.Count;

        public IBlockPolicy<Arithmetic> Policy => Chain.Policy;

        public IReadOnlyList<IRenderer<Arithmetic>> Renderers => Chain.Renderers;

        public Block<Arithmetic> Tip => Chain.Tip;

        public TxWithContext Sign(PrivateKey signer, params Arithmetic[] actions)
        {
            Address signerAddress = signer.ToAddress();
            string rawStateKey = KeyConverters.ToStateKey(signerAddress);
            long nonce = Chain.GetNextTxNonce(signerAddress);
            Transaction<Arithmetic> tx =
                Transaction<Arithmetic>.Create(nonce, signer, Genesis.Hash, actions);
            BigInteger prevState = Chain.GetState(signerAddress) is Bencodex.Types.Integer i
                ? i.Value
                : 0;
            HashDigest<SHA256> prevStateRootHash = Chain.Tip.StateRootHash;
            ITrie prevTrie = GetTrie(Chain.Tip.Hash);
            (BigInteger, HashDigest<SHA256>) prevPair = (prevState, prevStateRootHash);
            (BigInteger, HashDigest<SHA256>) stagedStates = Chain.ListStagedTransactions()
                .Where(t => t.Signer.Equals(signerAddress))
                .OrderBy(t => t.Nonce)
                .SelectMany(t => t.CustomActions)
                .TakeWhile(a => a.Error is null)
                .Aggregate(prevPair, (prev, act) =>
                {
                    BigInteger nextState = act.Operator.ToFunc()(prev.Item1, act.Operand);
                    var updatedRawStates = ImmutableDictionary<string, IValue>.Empty
                        .Add(rawStateKey, (Bencodex.Types.Integer)nextState);
                    HashDigest<SHA256> nextRootHash =
                        prevTrie.Set(updatedRawStates).Commit().Hash;
                    return (nextState, nextRootHash);
                });
            Chain.StageTransaction(tx);
            ImmutableArray<(BigInteger, HashDigest<SHA256>)> expectedDelta = tx.CustomActions
                .Take(tx.CustomActions.TakeWhile(a => a.Error is null).Count() + 1)
                .Aggregate(
                    ImmutableArray.Create(stagedStates),
                    (delta, act) =>
                    {
                        BigInteger nextState =
                            act.Operator.ToFunc()(delta[delta.Length - 1].Item1, act.Operand);
                        var updatedRawStates = ImmutableDictionary<string, IValue>.Empty
                            .Add(rawStateKey, (Bencodex.Types.Integer)nextState);
                        HashDigest<SHA256> nextRootHash =
                            prevTrie.Set(updatedRawStates).Commit().Hash;
                        return delta.Add((nextState, nextRootHash));
                    }
                );
            return new TxWithContext()
            {
                Tx = tx,
                ExpectedDelta = expectedDelta,
            };
        }

        public TxWithContext Sign(int signerIndex, params Arithmetic[] actions) =>
            Sign(PrivateKeys[signerIndex], actions);

        public Task<Block<Arithmetic>> Mine(CancellationToken cancellationToken = default) =>
            Chain.MineBlock(
                Miner,
                DateTimeOffset.UtcNow,
                cancellationToken: cancellationToken
            );

        public IAccountStateDelta CreateAccountStateDelta(Address signer, BlockHash? offset = null)
        {
            offset = offset ?? Tip.Hash;
            return new AccountStateDeltaImpl(
                a => Chain.GetStates(a, offset),
                (a, c) => Chain.GetBalance(a, c, offset),
                c => Chain.GetTotalSupply(c),
                () => Chain.GetValidatorSet(),
                signer
            );
        }

        public IAccountStateDelta CreateAccountStateDelta(int signerIndex, BlockHash? offset = null)
            => CreateAccountStateDelta(Addresses[signerIndex], offset);

        public ITrie GetTrie(BlockHash? blockHash)
        {
            return (blockHash is BlockHash h &&
                    Store.GetBlockDigest(h) is BlockDigest d &&
                    d.StateRootHash is HashDigest<SHA256> rootHash)
                ? StateStore.GetStateRoot(rootHash)
                : null;
        }

        public struct TxWithContext
        {
            public Transaction<Arithmetic> Tx;
            public IReadOnlyList<(BigInteger Value, HashDigest<SHA256> RootHash)> ExpectedDelta;

            public void Deconstruct(
                out Transaction<Arithmetic> tx,
                out IReadOnlyList<(BigInteger Value, HashDigest<SHA256> RootHash)> expectedDelta
            )
            {
                tx = Tx;
                expectedDelta = ExpectedDelta;
            }
        }
    }
}
