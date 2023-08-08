#nullable disable
using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Numerics;
using Bencodex.Types;
using Libplanet.Crypto;
using Libplanet.Types.Assets;
using Libplanet.Types.Blocks;
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

        /// <inheritdoc/>
        public abstract void ForkBlockIndexes(
            Guid sourceChainId,
            Guid destinationChainId,
            BlockHash branchpoint
        );

        public abstract Transaction GetTransaction(TxId txid);

        public abstract void PutTransaction(Transaction tx);

        /// <inheritdoc/>
        public abstract IEnumerable<BlockHash> IterateBlockHashes();

        /// <inheritdoc/>
        public Block GetBlock(BlockHash blockHash)
        {
            if (GetBlockDigest(blockHash) is BlockDigest blockDigest)
            {
                BlockHeader header = blockDigest.GetHeader();
                (Types.Tx.TxId TxId, Transaction Tx)[] txs = blockDigest.TxIds
                    .Select(bytes => new Types.Tx.TxId(bytes.ToArray()))
                    .OrderBy(txid => txid)
                    .Select(txid => (txid, GetTransaction(txid)))
                    .ToArray();

                Types.Tx.TxId[] missingTxIds =
                    txs.Where(pair => pair.Tx is null).Select(pair => pair.TxId).ToArray();
                if (missingTxIds.Any())
                {
                    throw new InvalidOperationException(
                        $"Failed to find {missingTxIds.Length} tx(s) (out of {txs.Length}) " +
                        $"at block {blockHash}:\n" + string.Join("\n  ", missingTxIds));
                }

                return new Block(header, txs.Select(pair => pair.Tx));
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
        public abstract void PutTxExecution(TxSuccess txSuccess);

        /// <inheritdoc/>
        public abstract void PutTxExecution(TxFailure txFailure);

        /// <inheritdoc/>
        public abstract TxExecution GetTxExecution(BlockHash blockHash, TxId txid);

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
        public abstract BlockCommit GetChainBlockCommit(Guid chainId);

        /// <inheritdoc/>
        public abstract void PutChainBlockCommit(Guid chainId, BlockCommit blockCommit);

        /// <inheritdoc/>
        public abstract BlockCommit GetBlockCommit(BlockHash blockHash);

        /// <inheritdoc/>
        public abstract void PutBlockCommit(BlockCommit blockCommit);

        /// <inheritdoc/>
        public abstract void DeleteBlockCommit(BlockHash blockHash);

        /// <inheritdoc/>
        public abstract IEnumerable<BlockHash> GetBlockCommitHashes();

        protected static IValue SerializeTxExecution(TxSuccess txSuccess)
        {
            var sDelta = new Dictionary(
                txSuccess.UpdatedStates.Select(kv =>
                    new KeyValuePair<IKey, IValue>(
                        new Binary(kv.Key.ByteArray),
                        kv.Value is { } v ? List.Empty.Add(v) : List.Empty
                    )
                )
            );
            var updatedFAVs = SerializeGroupedFAVs(txSuccess.UpdatedFungibleAssets);
            var serialized = Dictionary.Empty
                .Add("fail", false)
                .Add("sDelta", sDelta)
                .Add("updatedFAVs", new Dictionary(updatedFAVs));

            return serialized;
        }

        protected static IValue SerializeTxExecution(TxFailure txFailure)
        {
            Dictionary d = Dictionary.Empty
                .Add("fail", true)
                .Add("exc", txFailure.ExceptionName);

            return txFailure.ExceptionMetadata is { } v ? d.Add("excMeta", v) : d;
        }

        protected static TxExecution DeserializeTxExecution(
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
                logger?.Error(msg, decoded.Inspect(false));
                return null;
            }

            try
            {
                bool fail = d.GetValue<Bencodex.Types.Boolean>("fail");

                if (fail)
                {
                    string excName = d.GetValue<Text>("exc");
                    return new TxFailure(blockHash, txid, excName);
                }

                ImmutableDictionary<Address, IValue> sDelta = d.GetValue<Dictionary>("sDelta")
                    .ToImmutableDictionary(
                        kv => new Address((IValue)kv.Key),
                        kv => kv.Value is List l && l.Any() ? l[0] : null
                    );
                IImmutableDictionary<Address, IImmutableDictionary<Currency, FAV>>
                    updatedFAVs = DeserializeGroupedFAVs(d.GetValue<Dictionary>("updatedFAVs"));

                return new TxSuccess(
                    blockHash,
                    txid,
                    sDelta,
                    updatedFAVs
                );
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
