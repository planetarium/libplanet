using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Numerics;
using System.Security.Cryptography;
using Bencodex.Types;
using Libplanet.Common;
using Libplanet.Crypto;
using Libplanet.Types.Assets;
using Libplanet.Types.Blocks;
using Libplanet.Types.Evidence;
using Libplanet.Types.Tx;
using Serilog;
using FAV = Libplanet.Types.Assets.FungibleAssetValue;

namespace Libplanet.Store
{
    /// <summary>
    /// Common code for several <see cref="IStore"/> implementations.
    /// </summary>
    public abstract class BaseStore : IStore
    {
        /// <inheritdoc/>
        public abstract IEnumerable<Guid> ListChainIds();

        /// <inheritdoc/>
        public abstract Guid? GetCanonicalChainId();

        /// <inheritdoc/>
        public abstract void SetCanonicalChainId(Guid chainId);

        public abstract long CountIndex(Guid chainId);

        /// <inheritdoc/>
        public abstract IEnumerable<BlockHash> IterateIndexes(Guid chainId, int offset, int? limit);

        /// <inheritdoc/>
        public abstract BlockHash? IndexBlockHash(Guid chainId, long index);

        /// <inheritdoc/>
        public abstract long AppendIndex(Guid chainId, BlockHash hash);

        public abstract Transaction? GetTransaction(TxId txid);

        public abstract void PutTransaction(Transaction tx);

        /// <inheritdoc/>
        public abstract IEnumerable<BlockHash> IterateBlockHashes();

        /// <inheritdoc/>
        public Block? GetBlock(BlockHash blockHash)
        {
            if (GetBlockDigest(blockHash) is BlockDigest blockDigest)
            {
                BlockHeader header = blockDigest.GetHeader();
                TxId[] txids = blockDigest.TxIds
                                .Select(bytes => new TxId(bytes.ToArray()))
                                .OrderBy(txid => txid)
                                .ToArray();
                Transaction[] txs = txids.Select(txid => GetTransaction(txid))
                                         .OfType<Transaction>()
                                         .ToArray();
                var evidenceIds = blockDigest.EvidenceIds
                                             .Select(bytes => new EvidenceId(bytes.ToArray()))
                                             .OrderBy(evidenceId => evidenceId)
                                             .ToArray();
                var evidence = evidenceIds.Select(evidenceId => GetCommittedEvidence(evidenceId))
                                           .OfType<EvidenceBase>()
                                           .ToArray();

                if (txids.Length != txs.Length)
                {
                    TxId[] missingTxIds = txids.Except(txs.Select(tx => tx.Id)).ToArray();
                    throw new InvalidOperationException(
                        $"Failed to find {missingTxIds.Length} tx(s) (out of {txs.Length}) " +
                        $"at block {blockHash}:\n" + string.Join("\n  ", missingTxIds));
                }

                if (evidenceIds.Length != evidence.Length)
                {
                    var missingEvidenceIds = evidenceIds.Except(evidence.Select(tx => tx.Id))
                                                         .ToArray();
                    throw new InvalidOperationException(
                        $"Failed to find {missingEvidenceIds.Length} evidence(s) " +
                        $"(out of {evidence.Length}) " +
                        $"at block {blockHash}:\n" + string.Join("\n  ", missingEvidenceIds));
                }

                return new Block(header, txs, evidence);
            }

            return null;
        }

        /// <inheritdoc/>
        public long? GetBlockIndex(BlockHash blockHash)
        {
            return GetBlockDigest(blockHash)?.Index;
        }

        /// <inheritdoc/>
        public abstract BlockDigest? GetBlockDigest(BlockHash blockHash);

        /// <inheritdoc/>
        public abstract void PutBlock(Block block);

        /// <inheritdoc/>
        public abstract bool DeleteBlock(BlockHash blockHash);

        /// <inheritdoc/>
        public abstract bool ContainsBlock(BlockHash blockHash);

        /// <inheritdoc/>
        public abstract void PutTxExecution(TxExecution txExecution);

        /// <inheritdoc/>
        public abstract TxExecution? GetTxExecution(BlockHash blockHash, TxId txid);

        /// <inheritdoc/>
        public abstract void PutTxIdBlockHashIndex(TxId txId, BlockHash blockHash);

        public BlockHash? GetFirstTxIdBlockHashIndex(TxId txId)
        {
            BlockHash? blockHash;
            try
            {
                blockHash = IterateTxIdBlockHashIndex(txId).First();
            }
            catch (InvalidOperationException)
            {
                blockHash = null;
            }

            return blockHash;
        }

        /// <inheritdoc/>
        public abstract IEnumerable<BlockHash> IterateTxIdBlockHashIndex(TxId txId);

        /// <inheritdoc/>
        public abstract void DeleteTxIdBlockHashIndex(TxId txId, BlockHash blockHash);

        /// <inheritdoc/>
        public abstract IEnumerable<KeyValuePair<Address, long>> ListTxNonces(Guid chainId);

        /// <inheritdoc/>
        public abstract long GetTxNonce(Guid chainId, Address address);

        /// <inheritdoc/>
        public abstract void IncreaseTxNonce(Guid chainId, Address signer, long delta = 1);

        public virtual long CountBlocks()
        {
            return IterateBlockHashes().LongCount();
        }

        /// <inheritdoc/>
        public abstract bool ContainsTransaction(TxId txId);

        /// <inheritdoc/>
        public abstract void DeleteChainId(Guid chainId);

        /// <inheritdoc/>
        public abstract void Dispose();

        /// <inheritdoc/>
        public abstract void ForkTxNonces(Guid sourceChainId, Guid destinationChainId);

        /// <inheritdoc/>
        public abstract void PruneOutdatedChains(bool noopWithoutCanon = false);

        /// <inheritdoc/>
        public abstract BlockCommit? GetChainBlockCommit(Guid chainId);

        /// <inheritdoc/>
        public abstract void PutChainBlockCommit(Guid chainId, BlockCommit blockCommit);

        /// <inheritdoc/>
        public abstract BlockCommit? GetBlockCommit(BlockHash blockHash);

        /// <inheritdoc/>
        public abstract void PutBlockCommit(BlockCommit blockCommit);

        /// <inheritdoc/>
        public abstract void DeleteBlockCommit(BlockHash blockHash);

        /// <inheritdoc/>
        public abstract IEnumerable<BlockHash> GetBlockCommitHashes();

        /// <inheritdoc/>
        public abstract HashDigest<SHA256>? GetNextStateRootHash(BlockHash blockHash);

        /// <inheritdoc/>
        public abstract void PutNextStateRootHash(
            BlockHash blockHash, HashDigest<SHA256> nextStateRootHash);

        /// <inheritdoc/>
        public abstract void DeleteNextStateRootHash(BlockHash blockHash);

        /// <inheritdoc/>
        public abstract IEnumerable<EvidenceId> IteratePendingEvidenceIds();

        /// <inheritdoc/>
        public abstract EvidenceBase? GetPendingEvidence(EvidenceId evidenceId);

        /// <inheritdoc/>
        public abstract EvidenceBase? GetCommittedEvidence(EvidenceId evidenceId);

        /// <inheritdoc/>
        public abstract void PutPendingEvidence(EvidenceBase evidence);

        /// <inheritdoc/>
        public abstract void PutCommittedEvidence(EvidenceBase evidence);

        /// <inheritdoc/>
        public abstract void DeletePendingEvidence(EvidenceId evidenceId);

        /// <inheritdoc/>
        public abstract void DeleteCommittedEvidence(EvidenceId evidenceId);

        /// <inheritdoc/>
        public abstract bool ContainsPendingEvidence(EvidenceId evidenceId);

        /// <inheritdoc/>
        public abstract bool ContainsCommittedEvidence(EvidenceId evidenceId);

        protected static IValue SerializeTxExecution(TxExecution txExecution)
        {
            return txExecution.ToBencodex();
        }

        protected static TxExecution? DeserializeTxExecution(
            BlockHash blockHash,
            TxId txid,
            IValue decoded,
            ILogger logger
        )
        {
            if (!(decoded is Bencodex.Types.Dictionary d))
            {
                const string msg = nameof(TxExecution) +
                    " must be serialized as a Bencodex dictionary, not {ActualValue}";
                logger?.Error(msg, decoded.Inspect());
                return null;
            }

            try
            {
                return new TxExecution(blockHash, txid, d);
            }
            catch (Exception e)
            {
                const string msg =
                    "Uncaught exception during deserializing a " + nameof(TxExecution);
                logger?.Error(e, msg);
                return null;
            }
        }

        private static Bencodex.Types.Dictionary SerializeGroupedFAVs(
            IImmutableDictionary<Address, IImmutableDictionary<Currency, FAV>> balanceDelta
        ) =>
            new Dictionary(
                balanceDelta.Select(pair =>
                    new KeyValuePair<IKey, IValue>(
                        new Binary(pair.Key.ByteArray),
                        SerializeFAVs(pair.Value)
                    )
                )
            );

        private static IImmutableDictionary<Address, IImmutableDictionary<Currency, FAV>>
        DeserializeGroupedFAVs(Bencodex.Types.Dictionary serialized) =>
            serialized.ToImmutableDictionary(
                kv => new Address((IValue)kv.Key),
                kv => DeserializeFAVs((List)kv.Value)
            );

        private static Bencodex.Types.List SerializeLogs(
            List<IReadOnlyList<string>> logs
        ) =>
            new List(logs.Select(l => new List(l.Select(x => (Text)x))));

        private static List<IReadOnlyList<string>> DeserializeLogs(
            Bencodex.Types.List serialized) =>
            serialized
                .Cast<List>()
                .Select(l => (IReadOnlyList<string>)l.Select(e => (string)(Text)e).ToList())
                .ToList();

        private static Bencodex.Types.List SerializeFAVs(
            IImmutableDictionary<Currency, FAV> favs
        ) =>
            new List(
                favs.Select(
                    kv => List.Empty.Add(kv.Key.Serialize()).Add(kv.Value.RawValue)
                )
            );

        private static IImmutableDictionary<Currency, FAV> DeserializeFAVs(
            List serialized
        ) =>
            serialized.Select(pList =>
            {
                var pair = (List)pList;
                var currency = new Currency(pair[0]);
                BigInteger rawValue = (Bencodex.Types.Integer)pair[1];
                return new KeyValuePair<Currency, FAV>(
                    currency,
                    FAV.FromRawValue(currency, rawValue)
                );
            }).ToImmutableDictionary();
    }
}
