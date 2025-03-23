using System;
using System.Collections.Generic;
using Libplanet.Crypto;
using Libplanet.Store;
using Libplanet.Types.Blocks;
using Libplanet.Types.Evidence;
using Libplanet.Types.Tx;

namespace Libplanet.Tests.Store
{
    public sealed class StoreTracker : BaseTracker, IStore
    {
        private readonly IStore _store;
        private bool _disposed = false;

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

        public void PutTxExecution(TxExecution txExecution)
        {
            Log(nameof(PutTxExecution), txExecution);
            _store.PutTxExecution(txExecution);
        }

        public TxExecution GetTxExecution(BlockHash blockHash, TxId txid)
        {
            Log(nameof(GetTxExecution), blockHash, txid);
            return _store.GetTxExecution(blockHash, txid);
        }

        public void PutTxIdBlockHashIndex(TxId txId, BlockHash blockHash)
        {
            Log(nameof(PutTxIdBlockHashIndex), txId, blockHash);
            _store.PutTxIdBlockHashIndex(txId, blockHash);
        }

        public BlockHash? GetFirstTxIdBlockHashIndex(TxId txId)
        {
            Log(nameof(GetFirstTxIdBlockHashIndex), txId);
            return _store.GetFirstTxIdBlockHashIndex(txId);
        }

        public IEnumerable<BlockHash> IterateTxIdBlockHashIndex(TxId txId)
        {
            Log(nameof(IterateTxIdBlockHashIndex), txId);
            return _store.IterateTxIdBlockHashIndex(txId);
        }

        public void DeleteTxIdBlockHashIndex(TxId txId, BlockHash blockHash)
        {
            Log(nameof(DeleteTxIdBlockHashIndex), txId, blockHash);
            _store.DeleteTxIdBlockHashIndex(txId, blockHash);
        }

        public void DeleteChainId(Guid chainId)
        {
            Log(nameof(DeleteChainId), chainId);
            _store.DeleteChainId(chainId);
        }

        public Block GetBlock(BlockHash blockHash)
        {
            Log(nameof(GetBlock), blockHash);
            return _store.GetBlock(blockHash);
        }

        public long? GetBlockIndex(BlockHash blockHash)
        {
            Log(nameof(GetBlockIndex), blockHash);
            return _store.GetBlockIndex(blockHash);
        }

        public BlockDigest GetBlockDigest(BlockHash blockHash)
        {
            Log(nameof(GetBlockDigest), blockHash);
            return _store.GetBlockDigest(blockHash);
        }

        public Transaction GetTransaction(TxId txid)
        {
            Log(nameof(GetTransaction), txid);
            return _store.GetTransaction(txid);
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

        public IEnumerable<Guid> ListChainIds()
        {
            Log(nameof(ListChainIds));
            return _store.ListChainIds();
        }

        public void PutBlock(Block block)
        {
            Log(nameof(PutBlock), block);
            _store.PutBlock(block);
        }

        public void PutTransaction(Transaction tx)
        {
            Log(nameof(PutTransaction), tx);
            _store.PutTransaction(tx);
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

        public void PruneOutdatedChains(bool noopWithoutCanon = false)
        {
            Log(nameof(PruneOutdatedChains));
            _store.PruneOutdatedChains();
        }

        public BlockCommit GetChainBlockCommit(Guid chainId)
        {
            Log(nameof(GetChainBlockCommit), chainId);
            return _store.GetChainBlockCommit(chainId);
        }

        public void PutChainBlockCommit(Guid chainId, BlockCommit blockCmmit)
        {
            Log(nameof(PutChainBlockCommit), blockCmmit);
            _store.PutChainBlockCommit(chainId, blockCmmit);
        }

        public BlockCommit GetBlockCommit(BlockHash blockHash)
        {
            Log(nameof(GetBlockCommit), blockHash);
            return _store.GetBlockCommit(blockHash);
        }

        public void PutBlockCommit(BlockCommit commit)
        {
            Log(nameof(PutBlockCommit), commit);
            _store.PutBlockCommit(commit);
        }

        public void DeleteBlockCommit(BlockHash blockHash)
        {
            Log(nameof(DeleteBlockCommit), blockHash);
            _store.DeleteBlockCommit(blockHash);
        }

        public IEnumerable<BlockHash> GetBlockCommitHashes()
        {
            Log(nameof(GetBlockCommitHashes));
            return _store.GetBlockCommitHashes();
        }

        public IEnumerable<EvidenceId> IteratePendingEvidenceIds()
        {
            Log(nameof(IteratePendingEvidenceIds));
            return _store.IteratePendingEvidenceIds();
        }

        public EvidenceBase GetPendingEvidence(EvidenceId evidenceId)
        {
            Log(nameof(GetPendingEvidence));
            return _store.GetPendingEvidence(evidenceId);
        }

        public EvidenceBase GetCommittedEvidence(EvidenceId evidenceId)
        {
            Log(nameof(GetCommittedEvidence));
            return _store.GetCommittedEvidence(evidenceId);
        }

        public void PutPendingEvidence(EvidenceBase evidence)
        {
            Log(nameof(PutPendingEvidence));
            _store.PutPendingEvidence(evidence);
        }

        public void PutCommittedEvidence(EvidenceBase evidence)
        {
            Log(nameof(PutCommittedEvidence));
            _store.PutCommittedEvidence(evidence);
        }

        public void DeletePendingEvidence(EvidenceId evidenceId)
        {
            Log(nameof(DeletePendingEvidence));
            _store.DeletePendingEvidence(evidenceId);
        }

        public void DeleteCommittedEvidence(EvidenceId evidenceId)
        {
            Log(nameof(DeleteCommittedEvidence));
            _store.DeleteCommittedEvidence(evidenceId);
        }

        public bool ContainsPendingEvidence(EvidenceId evidenceId)
        {
            Log(nameof(ContainsPendingEvidence));
            return _store.ContainsPendingEvidence(evidenceId);
        }

        public bool ContainsCommittedEvidence(EvidenceId evidenceId)
        {
            Log(nameof(ContainsCommittedEvidence));
            return _store.ContainsCommittedEvidence(evidenceId);
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

        public void Dispose()
        {
            if (!_disposed)
            {
                _store.Dispose();
                _disposed = true;
            }
        }
    }
}
