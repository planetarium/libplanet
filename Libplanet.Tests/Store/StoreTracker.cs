using System;
using System.Collections.Generic;
using System.Collections.Immutable;
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

        public long AppendIndex(Guid chainId, BlockHash hash)
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

        public bool DeleteBlock(BlockHash blockHash)
        {
            Log(nameof(DeleteBlock), blockHash);
            return _store.DeleteBlock(blockHash);
        }

        public bool ContainsBlock(BlockHash blockHash)
        {
            Log(nameof(ContainsBlock), blockHash);
            return _store.ContainsBlock(blockHash);
        }

        public void PutTxExecution(TxSuccess txSuccess)
        {
            Log(nameof(PutTxExecution), txSuccess);
            _store.PutTxExecution(txSuccess);
        }

        public void PutTxExecution(TxFailure txFailure)
        {
            Log(nameof(PutTxExecution), txFailure);
            _store.PutTxExecution(txFailure);
        }

        public TxExecution GetTxExecution(BlockHash blockHash, TxId txid)
        {
            Log(nameof(GetTxExecution), blockHash, txid);
            return _store.GetTxExecution(blockHash, txid);
        }

        public void PutTxIdBlockHashIndex(Guid chainId, TxId txId, BlockHash blockHash)
        {
            Log(nameof(PutTxIdBlockHashIndex), chainId, txId, blockHash);
            _store.PutTxIdBlockHashIndex(chainId, txId, blockHash);
        }

        public bool HasTxIdBlockHashIndex(Guid chainId, TxId txId)
        {
            Log(nameof(HasTxIdBlockHashIndex), chainId, txId);
            return _store.HasTxIdBlockHashIndex(chainId, txId);
        }

        public BlockHash? GetTxIdBlockHashIndex(Guid chainId, TxId txId)
        {
            Log(nameof(GetTxIdBlockHashIndex), chainId, txId);
            return _store.GetTxIdBlockHashIndex(chainId, txId);
        }

        public void DeleteTxIdBlockHashIndex(Guid chainId, TxId txId)
        {
            Log(nameof(DeleteTxIdBlockHashIndex), chainId, txId);
            _store.DeleteTxIdBlockHashIndex(chainId, txId);
        }

        public void SetBlockPerceivedTime(BlockHash blockHash, DateTimeOffset perceivedTime)
        {
            Log(nameof(SetBlockPerceivedTime), blockHash, perceivedTime);
            _store.SetBlockPerceivedTime(blockHash, perceivedTime);
        }

        public DateTimeOffset? GetBlockPerceivedTime(BlockHash blockHash)
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

        public Block<T> GetBlock<T>(BlockHash blockHash)
            where T : IAction, new()
        {
            Log(nameof(GetBlock), blockHash);
            return _store.GetBlock<T>(blockHash);
        }

        public long? GetBlockIndex(BlockHash blockHash)
        {
            Log(nameof(GetBlockIndex), blockHash);
            return _store.GetBlockIndex(blockHash);
        }

        public BlockDigest? GetBlockDigest(BlockHash blockHash)
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

        public BlockHash? IndexBlockHash(Guid chainId, long index)
        {
            Log(nameof(IndexBlockHash), chainId, index);
            return _store.IndexBlockHash(chainId, index);
        }

        public IEnumerable<BlockHash> IterateBlockHashes()
        {
            Log(nameof(IterateBlockHashes));
            return _store.IterateBlockHashes();
        }

        public IEnumerable<BlockHash> IterateIndexes(Guid chainId, int offset, int? limit)
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
            BlockHash branchPoint)
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

        public void ForkTxNonces(Guid sourceChainId, Guid destinationChainId)
        {
            Log(nameof(ForkTxNonces), sourceChainId, destinationChainId);
            _store.ForkTxNonces(sourceChainId, destinationChainId);
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
