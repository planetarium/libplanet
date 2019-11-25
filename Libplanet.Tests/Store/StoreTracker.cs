using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Security.Cryptography;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Blocks;
using Libplanet.Store;
using Libplanet.Tx;

namespace Libplanet.Tests.Store
{
    public sealed class StoreTracker : IStore
    {
        private readonly IStore _store;

        private readonly List<(string, object, object)> _logs;

        public StoreTracker(IStore store)
        {
            _store = store;
            _logs = new List<(string, object, object)>();
        }

        public IImmutableList<(string, object, object)> Logs =>
            _logs.ToImmutableList();

        public void ClearLogs() => _logs.Clear();

        public long AppendIndex(Guid chainId, HashDigest<SHA256> hash)
        {
            _logs.Add((nameof(AppendIndex), chainId, hash));
            return _store.AppendIndex(chainId, hash);
        }

        public long CountBlocks()
        {
            _logs.Add((nameof(CountBlocks), null, null));
            return _store.CountBlocks();
        }

        public long CountIndex(Guid chainId)
        {
            _logs.Add((nameof(CountIndex), chainId, null));
            return _store.CountIndex(chainId);
        }

        public long CountTransactions()
        {
            _logs.Add((nameof(CountTransactions), null, null));
            return _store.CountTransactions();
        }

        public bool DeleteBlock(HashDigest<SHA256> blockHash)
        {
            _logs.Add((nameof(DeleteBlock), blockHash, null));
            return _store.DeleteBlock(blockHash);
        }

        public bool ContainsBlock(HashDigest<SHA256> blockHash)
        {
            _logs.Add((nameof(ContainsBlock), blockHash, null));
            return _store.ContainsBlock(blockHash);
        }

        public bool DeleteIndex(Guid chainId, HashDigest<SHA256> hash)
        {
            _logs.Add((nameof(DeleteIndex), chainId, hash));
            return _store.DeleteIndex(chainId, hash);
        }

        public IEnumerable<Address> ListAddresses(Guid chainId)
        {
            _logs.Add((nameof(ListAddresses), chainId, null));
            return _store.ListAddresses(chainId);
        }

        public void DeleteChainId(Guid chainId)
        {
            _logs.Add((nameof(DeleteChainId), chainId, null));
            _store.DeleteChainId(chainId);
        }

        public bool DeleteTransaction(TxId txid)
        {
            _logs.Add((nameof(DeleteTransaction), txid, null));
            return _store.DeleteTransaction(txid);
        }

        public Block<T> GetBlock<T>(HashDigest<SHA256> blockHash)
            where T : IAction, new()
        {
            _logs.Add((nameof(GetBlock), blockHash, null));
            return _store.GetBlock<T>(blockHash);
        }

        public long? GetBlockIndex(HashDigest<SHA256> blockHash)
        {
            _logs.Add((nameof(GetBlockIndex), blockHash, null));
            return _store.GetBlockIndex(blockHash);
        }

        public IImmutableDictionary<Address, IValue> GetBlockStates(HashDigest<SHA256> blockHash)
        {
            _logs.Add((nameof(GetBlockStates), blockHash, null));
            return _store.GetBlockStates(blockHash);
        }

        public Transaction<T> GetTransaction<T>(TxId txid)
            where T : IAction, new()
        {
            _logs.Add((nameof(GetTransaction), txid, null));
            return _store.GetTransaction<T>(txid);
        }

        public HashDigest<SHA256>? IndexBlockHash(Guid chainId, long index)
        {
            _logs.Add((nameof(IndexBlockHash), chainId, index));
            return _store.IndexBlockHash(chainId, index);
        }

        public IEnumerable<HashDigest<SHA256>> IterateBlockHashes()
        {
            _logs.Add((nameof(IterateBlockHashes), null, null));
            return _store.IterateBlockHashes();
        }

        public IEnumerable<HashDigest<SHA256>> IterateIndexes(Guid chainId, int offset, int? limit)
        {
             _logs.Add((nameof(IterateIndexes), chainId, (offset, limit)));
             return _store.IterateIndexes(chainId, offset, limit);
        }

        public IEnumerable<TxId> IterateStagedTransactionIds()
        {
            _logs.Add((nameof(IterateStagedTransactionIds), null, null));
            return _store.IterateStagedTransactionIds();
        }

        public IEnumerable<TxId> IterateTransactionIds()
        {
            _logs.Add((nameof(IterateTransactionIds), null, null));
            return _store.IterateTransactionIds();
        }

        public IEnumerable<Guid> ListChainIds()
        {
            _logs.Add((nameof(ListChainIds), null, null));
            return _store.ListChainIds();
        }

        public void PutBlock<T>(Block<T> block)
            where T : IAction, new()
        {
            _logs.Add((nameof(PutBlock), block, null));
            _store.PutBlock<T>(block);
        }

        public void PutTransaction<T>(Transaction<T> tx)
            where T : IAction, new()
        {
            _logs.Add((nameof(PutTransaction), tx, null));
            _store.PutTransaction<T>(tx);
        }

        public bool ContainsTransaction(TxId txId)
        {
            _logs.Add((nameof(ContainsTransaction), txId, null));
            return _store.ContainsTransaction(txId);
        }

        public void SetBlockStates(
            HashDigest<SHA256> blockHash,
            IImmutableDictionary<Address, IValue> states
        )
        {
            _logs.Add((nameof(SetBlockStates), blockHash, states));
            _store.SetBlockStates(blockHash, states);
        }

        public IEnumerable<Tuple<HashDigest<SHA256>, long>> IterateStateReferences(
            Guid chainId,
            Address address,
            long? highestIndex,
            long? lowestIndex,
            int? limit)
        {
            // FIXME: Log arguments properly
            _logs.Add((nameof(IterateStateReferences), chainId, address));
            return _store.IterateStateReferences(
                chainId, address, highestIndex, lowestIndex, limit);
        }

        public void StoreStateReference(
            Guid chainId,
            IImmutableSet<Address> addresses,
            HashDigest<SHA256> blockHash,
            long blockIndex)
        {
            // FIXME: Log arguments properly (including chainId).
            _logs.Add((nameof(StoreStateReference), blockHash, null));
            _store.StoreStateReference(chainId, addresses, blockHash, blockIndex);
        }

        public void ForkStateReferences<T>(
            Guid sourceChainId,
            Guid destinationChainId,
            Block<T> branchPoint)
            where T : IAction, new()
        {
            // FIXME: Log arguments properly.
            _logs.Add((nameof(ForkStateReferences), null, null));
            _store.ForkStateReferences(sourceChainId, destinationChainId, branchPoint);
        }

        public void ForkBlockIndexes(
            Guid sourceChainId,
            Guid destinationChainId,
            HashDigest<SHA256> branchPoint)
        {
            _logs.Add((nameof(ForkBlockIndexes), null, null));
            _store.ForkBlockIndexes(sourceChainId, destinationChainId, branchPoint);
        }

        public IEnumerable<KeyValuePair<Address, long>> ListTxNonces(Guid chainId)
        {
            _logs.Add((nameof(ListTxNonces), chainId, null));
            return _store.ListTxNonces(chainId);
        }

        public long GetTxNonce(Guid chainId, Address address)
        {
            _logs.Add((nameof(GetTxNonce), chainId, address));
            return _store.GetTxNonce(chainId, address);
        }

        public void IncreaseTxNonce(Guid chainId, Address address, long delta = 1)
        {
            // FIXME: Log arguments properly (including chainId).
            _logs.Add((nameof(IncreaseTxNonce), address, delta));
            _store.IncreaseTxNonce(chainId, address, delta);
        }

        public void StageTransactionIds(IImmutableSet<TxId> txids)
        {
            _logs.Add((nameof(StageTransactionIds), txids, null));
            _store.StageTransactionIds(txids);
        }

        public void UnstageTransactionIds(ISet<TxId> txids)
        {
            _logs.Add((nameof(UnstageTransactionIds), txids, null));
            _store.UnstageTransactionIds(txids);
        }

        public Guid? GetCanonicalChainId()
        {
            _logs.Add((nameof(GetCanonicalChainId), null, null));
            return _store.GetCanonicalChainId();
        }

        public void SetCanonicalChainId(Guid chainId)
        {
            _logs.Add((nameof(SetCanonicalChainId), chainId, null));
            _store.SetCanonicalChainId(chainId);
        }
    }
}
