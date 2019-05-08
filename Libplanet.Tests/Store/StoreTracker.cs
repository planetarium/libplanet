using System.Collections.Generic;
using System.Collections.Immutable;
using System.Security.Cryptography;
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

        public long AppendIndex(string @namespace, HashDigest<SHA256> hash)
        {
            _logs.Add((nameof(AppendIndex), @namespace, hash));
            return _store.AppendIndex(@namespace, hash);
        }

        public long CountBlocks()
        {
            _logs.Add((nameof(CountBlocks), null, null));
            return _store.CountBlocks();
        }

        public long CountIndex(string @namespace)
        {
            _logs.Add((nameof(CountIndex), @namespace, null));
            return _store.CountIndex(@namespace);
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

        public bool DeleteIndex(string @namespace, HashDigest<SHA256> hash)
        {
            _logs.Add((nameof(DeleteIndex), @namespace, hash));
            return _store.DeleteIndex(@namespace, hash);
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

        public AddressStateMap GetBlockStates(HashDigest<SHA256> blockHash)
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

        public HashDigest<SHA256>? IndexBlockHash(string @namespace, long index)
        {
            _logs.Add((nameof(IndexBlockHash), @namespace, index));
            return _store.IndexBlockHash(@namespace, index);
        }

        public IEnumerable<HashDigest<SHA256>> IterateBlockHashes()
        {
            _logs.Add((nameof(IterateBlockHashes), null, null));
            return _store.IterateBlockHashes();
        }

        public IEnumerable<HashDigest<SHA256>> IterateIndex(string @namespace)
        {
            _logs.Add((nameof(IterateIndex), @namespace, null));
            return _store.IterateIndex(@namespace);
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

        public IEnumerable<string> ListNamespaces()
        {
            _logs.Add((nameof(ListNamespaces), null, null));
            return _store.ListNamespaces();
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

        public void SetBlockStates(
            HashDigest<SHA256> blockHash,
            AddressStateMap states
        )
        {
            _logs.Add((nameof(SetBlockStates), blockHash, states));
            _store.SetBlockStates(blockHash, states);
        }

        public HashDigest<SHA256>? GetAddressStateBlockHash(
            string @namespace,
            Address address,
            long offsetIndex)
        {
            _logs.Add((nameof(GetAddressStateBlockHash), address, null));
            return _store.GetAddressStateBlockHash(@namespace, address, offsetIndex);
        }

        public void SetAddressStateBlockHash<T>(
            string @namespace,
            Block<T> block)
            where T : IAction, new()
        {
            _logs.Add((nameof(SetAddressStateBlockHash), block.Hash, null));
            _store.SetAddressStateBlockHash(@namespace, block);
        }

        public void StageTransactionIds(ISet<TxId> txids)
        {
            _logs.Add((nameof(StageTransactionIds), txids, null));
            _store.StageTransactionIds(txids);
        }

        public void UnstageTransactionIds(ISet<TxId> txids)
        {
            _logs.Add((nameof(UnstageTransactionIds), txids, null));
            _store.UnstageTransactionIds(txids);
        }
    }
}
