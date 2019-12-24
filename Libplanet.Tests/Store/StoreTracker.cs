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

        private readonly List<StoreTrackLog> _logs;

        public StoreTracker(IStore store)
        {
            _store = store;
            _logs = new List<StoreTrackLog>();
        }

        public IImmutableList<StoreTrackLog> Logs =>
            _logs.ToImmutableList();

        public void ClearLogs() => _logs.Clear();

        public long AppendIndex(Guid chainId, HashDigest<SHA256> hash)
        {
            Log(nameof(AppendIndex), chainId, hash);
            return _store.AppendIndex(chainId, hash);
        }

        public long CountBlocks()
        {
            Log(nameof(CountBlocks));
            return _store.CountBlocks();
        }

        public long CountIndex(Guid chainId)
        {
            Log(nameof(CountIndex), chainId);
            return _store.CountIndex(chainId);
        }

        public long CountTransactions()
        {
            Log(nameof(CountTransactions));
            return _store.CountTransactions();
        }

        public bool DeleteBlock(HashDigest<SHA256> blockHash)
        {
            Log(nameof(DeleteBlock), blockHash);
            return _store.DeleteBlock(blockHash);
        }

        public bool ContainsBlock(HashDigest<SHA256> blockHash)
        {
            Log(nameof(ContainsBlock), blockHash);
            return _store.ContainsBlock(blockHash);
        }

        public bool DeleteIndex(Guid chainId, HashDigest<SHA256> hash)
        {
            Log(nameof(DeleteIndex), chainId, hash);
            return _store.DeleteIndex(chainId, hash);
        }

        public IEnumerable<Address> ListAddresses(Guid chainId)
        {
            Log(nameof(ListAddresses), chainId);
            return _store.ListAddresses(chainId);
        }

        public IImmutableDictionary<Address, IImmutableList<HashDigest<SHA256>>>
            ListAllStateReferences(
                Guid chainId,
                long lowestIndex,
                long highestIndex)
        {
            Log(nameof(ListAllStateReferences), chainId, lowestIndex, highestIndex);
            return _store.ListAllStateReferences(chainId, lowestIndex, highestIndex);
        }

        public void DeleteChainId(Guid chainId)
        {
            Log(nameof(DeleteChainId), chainId);
            _store.DeleteChainId(chainId);
        }

        public bool DeleteTransaction(TxId txid)
        {
            Log(nameof(DeleteTransaction), txid);
            return _store.DeleteTransaction(txid);
        }

        public Block<T> GetBlock<T>(HashDigest<SHA256> blockHash)
            where T : IAction, new()
        {
            Log(nameof(GetBlock), blockHash);
            return _store.GetBlock<T>(blockHash);
        }

        public long? GetBlockIndex(HashDigest<SHA256> blockHash)
        {
            Log(nameof(GetBlockIndex), blockHash);
            return _store.GetBlockIndex(blockHash);
        }

        public IImmutableDictionary<Address, IValue> GetBlockStates(HashDigest<SHA256> blockHash)
        {
            Log(nameof(GetBlockStates), blockHash);
            return _store.GetBlockStates(blockHash);
        }

        public Transaction<T> GetTransaction<T>(TxId txid)
            where T : IAction, new()
        {
            Log(nameof(GetTransaction), txid);
            return _store.GetTransaction<T>(txid);
        }

        public HashDigest<SHA256>? IndexBlockHash(Guid chainId, long index)
        {
            Log(nameof(IndexBlockHash), chainId, index);
            return _store.IndexBlockHash(chainId, index);
        }

        public IEnumerable<HashDigest<SHA256>> IterateBlockHashes()
        {
            Log(nameof(IterateBlockHashes));
            return _store.IterateBlockHashes();
        }

        public IEnumerable<HashDigest<SHA256>> IterateIndexes(Guid chainId, int offset, int? limit)
        {
             Log(nameof(IterateIndexes), chainId, offset, limit);
             return _store.IterateIndexes(chainId, offset, limit);
        }

        public IEnumerable<TxId> IterateStagedTransactionIds()
        {
            Log(nameof(IterateStagedTransactionIds));
            return _store.IterateStagedTransactionIds();
        }

        public IEnumerable<TxId> IterateTransactionIds()
        {
            Log(nameof(IterateTransactionIds));
            return _store.IterateTransactionIds();
        }

        public IEnumerable<Guid> ListChainIds()
        {
            Log(nameof(ListChainIds));
            return _store.ListChainIds();
        }

        public void PutBlock<T>(Block<T> block)
            where T : IAction, new()
        {
            Log(nameof(PutBlock), block);
            _store.PutBlock<T>(block);
        }

        public void PutTransaction<T>(Transaction<T> tx)
            where T : IAction, new()
        {
            Log(nameof(PutTransaction), tx);
            _store.PutTransaction<T>(tx);
        }

        public bool ContainsTransaction(TxId txId)
        {
            Log(nameof(ContainsTransaction), txId);
            return _store.ContainsTransaction(txId);
        }

        public void SetBlockStates(
            HashDigest<SHA256> blockHash,
            IImmutableDictionary<Address, IValue> states
        )
        {
            Log(nameof(SetBlockStates), blockHash, states);
            _store.SetBlockStates(blockHash, states);
        }

        public IEnumerable<Tuple<HashDigest<SHA256>, long>> IterateStateReferences(
            Guid chainId,
            Address address,
            long? highestIndex,
            long? lowestIndex,
            int? limit)
        {
            Log(
                nameof(IterateStateReferences),
                chainId,
                address,
                highestIndex,
                lowestIndex,
                limit);
            return _store.IterateStateReferences(
                chainId, address, highestIndex, lowestIndex, limit);
        }

        public void StoreStateReference(
            Guid chainId,
            IImmutableSet<Address> addresses,
            HashDigest<SHA256> blockHash,
            long blockIndex)
        {
            Log(nameof(StoreStateReference), chainId, addresses, blockHash, blockIndex);
            _store.StoreStateReference(chainId, addresses, blockHash, blockIndex);
        }

        public void ForkStateReferences<T>(
            Guid sourceChainId,
            Guid destinationChainId,
            Block<T> branchPoint)
            where T : IAction, new()
        {
            Log(nameof(ForkStateReferences), sourceChainId, destinationChainId, branchPoint);
            _store.ForkStateReferences(sourceChainId, destinationChainId, branchPoint);
        }

        public void ForkBlockIndexes(
            Guid sourceChainId,
            Guid destinationChainId,
            HashDigest<SHA256> branchPoint)
        {
            Log(nameof(ForkBlockIndexes), sourceChainId, destinationChainId, branchPoint);
            _store.ForkBlockIndexes(sourceChainId, destinationChainId, branchPoint);
        }

        public IEnumerable<KeyValuePair<Address, long>> ListTxNonces(Guid chainId)
        {
            Log(nameof(ListTxNonces), chainId);
            return _store.ListTxNonces(chainId);
        }

        public long GetTxNonce(Guid chainId, Address address)
        {
            Log(nameof(GetTxNonce), chainId, address);
            return _store.GetTxNonce(chainId, address);
        }

        public void IncreaseTxNonce(Guid chainId, Address address, long delta = 1)
        {
            Log(nameof(IncreaseTxNonce), chainId, address, delta);
            _store.IncreaseTxNonce(chainId, address, delta);
        }

        public void StageTransactionIds(IImmutableSet<TxId> txids)
        {
            Log(nameof(StageTransactionIds), txids);
            _store.StageTransactionIds(txids);
        }

        public void UnstageTransactionIds(ISet<TxId> txids)
        {
            Log(nameof(UnstageTransactionIds), txids);
            _store.UnstageTransactionIds(txids);
        }

        public Guid? GetCanonicalChainId()
        {
            Log(nameof(GetCanonicalChainId));
            return _store.GetCanonicalChainId();
        }

        public void SetCanonicalChainId(Guid chainId)
        {
            Log(nameof(SetCanonicalChainId), chainId);
            _store.SetCanonicalChainId(chainId);
        }

        private void Log(string method, params object[] @params)
        {
            _logs.Add(StoreTrackLog.Create(method, @params));
        }
    }
}
