using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Numerics;
using System.Security.Cryptography;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Action.Loader;
using Libplanet.Action.State;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
using Libplanet.Blockchain.Renderers;
using Libplanet.Blockchain.Renderers.Debug;
using Libplanet.Common;
using Libplanet.Crypto;
using Libplanet.Store;
using Libplanet.Store.Trie;
using Libplanet.Types.Blocks;
using Libplanet.Types.Tx;

namespace Libplanet.Tests.Fixtures
{
    public sealed class IntegerSet
    {
        public readonly IReadOnlyList<PrivateKey> PrivateKeys;
        public readonly IReadOnlyList<Address> Addresses;
        public readonly IReadOnlyList<Arithmetic> Actions;
        public readonly IReadOnlyList<Transaction> Txs;
        public readonly PrivateKey Miner;
        public readonly Block Genesis;
        public readonly BlockChain Chain;
        public readonly IStore Store;
        public readonly IKeyValueStore KVStore;
        public readonly TrieStateStore StateStore;

        public IntegerSet(int[] initialStates)
            : this(initialStates.Select(s => new BigInteger?(s)).ToArray(), null, null)
        {
        }

        public IntegerSet(
            IReadOnlyList<BigInteger?> initialStates,
            IBlockPolicy policy = null,
            IEnumerable<IRenderer> renderers = null)
        {
            PrivateKeys = initialStates.Select(_ => new PrivateKey()).ToImmutableArray();
            Addresses = PrivateKeys.Select(AddressExtensions.ToAddress).ToImmutableArray();
            Actions = initialStates
                .Select((state, index) => new { State = state, Key = PrivateKeys[index] })
                .Where(pair => !(pair.State is null))
                .Select(pair => new { State = (BigInteger)pair.State, pair.Key })
                .Select(pair => Arithmetic.Add(pair.State)).ToImmutableArray();
            Txs = initialStates
                .Select((state, index) => new { State = state, Key = PrivateKeys[index] })
                .Where(pair => !(pair.State is null))
                .Select(pair => new { State = (BigInteger)pair.State, pair.Key })
                .Select(pair => new { Action = Arithmetic.Add(pair.State), pair.Key })
                .Select(pair =>
                    Transaction.Create(
                        0,
                        pair.Key,
                        null,
                        new[] { pair.Action }.ToPlainValues(),
                        null,
                        null,
                        ImmutableHashSet<Address>.Empty.Add(pair.Key.ToAddress())
                    )
                )
                .OrderBy(tx => tx.Id)
                .ToImmutableArray();
            Miner = new PrivateKey();
            policy = policy ?? new NullBlockPolicy();
            Store = new MemoryStore();
            KVStore = new MemoryKeyValueStore();
            StateStore = new TrieStateStore(KVStore);
            var actionEvaluator = new ActionEvaluator(
                _ => policy.BlockAction,
                new BlockChainStates(Store, StateStore),
                new SingleActionLoader(typeof(Arithmetic)));
            Genesis = TestUtils.ProposeGenesisBlock(
                actionEvaluator,
                TestUtils.ProposeGenesis(
                    Miner.PublicKey,
                    Txs,
                    null,
                    DateTimeOffset.UtcNow,
                    Block.CurrentProtocolVersion),
                Miner);
            Chain = BlockChain.Create(
                policy,
                new VolatileStagePolicy(),
                Store,
                StateStore,
                Genesis,
                actionEvaluator,
                renderers: renderers ?? new[] { new ValidatingActionRenderer() });
        }

        public int Count => Addresses.Count;

        public IBlockPolicy Policy => Chain.Policy;

        public IReadOnlyList<IRenderer> Renderers => Chain.Renderers;

        public Block Tip => Chain.Tip;

        public TxWithContext Sign(PrivateKey signer, params Arithmetic[] actions)
        {
            Address signerAddress = signer.ToAddress();
            KeyBytes rawStateKey = KeyConverters.ToStateKey(signerAddress);
            long nonce = Chain.GetNextTxNonce(signerAddress);
            Transaction tx =
                Transaction.Create(nonce, signer, Genesis.Hash, actions.ToPlainValues());
            BigInteger prevState = Chain.GetWorldState().GetAccount(
                ReservedAddresses.LegacyAccount).GetState(signerAddress) is Bencodex.Types.Integer i
                ? i.Value
                : 0;
            HashDigest<SHA256> prevStateRootHash = Chain.Tip.StateRootHash;
            ITrie prevTrie = GetTrie(Chain.Tip.Hash);
            (BigInteger, HashDigest<SHA256>) prevPair = (prevState, prevStateRootHash);
            (BigInteger, HashDigest<SHA256>) stagedStates = Chain.ListStagedTransactions()
                .Where(t => t.Signer.Equals(signerAddress))
                .OrderBy(t => t.Nonce)
                .SelectMany(t => t.Actions)
                .Aggregate(prevPair, (prev, act) =>
                {
                    var a = TestUtils.ToAction<Arithmetic>(act);
                    if (a.PlainValue is Text error)
                    {
                        return (prev.Item1, prev.Item2);
                    }
                    else
                    {
                        BigInteger nextState = a.Operator.ToFunc()(prev.Item1, a.Operand);
                        var updatedRawStates = ImmutableDictionary<KeyBytes, IValue>.Empty
                            .Add(rawStateKey, (Bencodex.Types.Integer)nextState);
                        HashDigest<SHA256> nextRootHash =
                            prevTrie.Set(updatedRawStates).Commit().Hash;
                        return (nextState, nextRootHash);
                    }
                });
            Chain.StageTransaction(tx);
            ImmutableArray<(BigInteger, HashDigest<SHA256>)> expectedDelta = tx.Actions
                .Aggregate(
                    ImmutableArray.Create(stagedStates),
                    (delta, act) =>
                    {
                        var a = TestUtils.ToAction<Arithmetic>(act);
                        if (a.PlainValue is Text error)
                        {
                            return delta.Add(delta[delta.Length - 1]);
                        }
                        else
                        {
                            BigInteger nextState =
                                a.Operator.ToFunc()(delta[delta.Length - 1].Item1, a.Operand);
                            var updatedRawStates = ImmutableDictionary<KeyBytes, IValue>.Empty
                                .Add(rawStateKey, (Bencodex.Types.Integer)nextState);
                            HashDigest<SHA256> nextRootHash =
                                prevTrie.Set(updatedRawStates).Commit().Hash;
                            return delta.Add((nextState, nextRootHash));
                        }
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

        public Block Propose() => Chain.ProposeBlock(
            Miner, TestUtils.CreateBlockCommit(Chain.Tip));

        public void Append(Block block) =>
            Chain.Append(block, TestUtils.CreateBlockCommit(block));

        public IWorld CreateWorld(BlockHash? offset = null)
            => World.Create(Chain.GetWorldState(offset ?? Tip.Hash));

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
            public Transaction Tx;
            public IReadOnlyList<(BigInteger Value, HashDigest<SHA256> RootHash)> ExpectedDelta;

            public void Deconstruct(
                out Transaction tx,
                out IReadOnlyList<(BigInteger Value, HashDigest<SHA256> RootHash)> expectedDelta
            )
            {
                tx = Tx;
                expectedDelta = ExpectedDelta;
            }
        }
    }
}
