using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Security.Cryptography;
using Libplanet.Action;
using Libplanet.Blocks;
using Libplanet.Store;
using Libplanet.Tx;

namespace Libplanet.Tests.Store
{
    public sealed class StoreTracker : BaseTracker, IStore
    {
        private readonly IStore _store;

        public StoreTracker(IStore store)
        {
            _store = store;
        }

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

        public void SetBlockPerceivedTime(
            HashDigest<SHA256> blockHash,
            DateTimeOffset perceivedTime
        )
        {
            Log(nameof(SetBlockPerceivedTime), blockHash, perceivedTime);
            _store.SetBlockPerceivedTime(blockHash, perceivedTime);
        }

        public DateTimeOffset? GetBlockPerceivedTime(HashDigest<SHA256> blockHash)
        {
            Log(nameof(GetBlockPerceivedTime), blockHash);
            return _store.GetBlockPerceivedTime(blockHash);
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

        public BlockDigest? GetBlockDigest(HashDigest<SHA256> blockHash)
        {
            Log(nameof(GetBlockDigest), blockHash);
            return _store.GetBlockDigest(blockHash);
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
    }
}
