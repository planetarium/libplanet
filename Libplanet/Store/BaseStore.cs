#nullable disable
using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Numerics;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Assets;
using Libplanet.Blocks;
using Libplanet.Tx;
using Serilog;
using FAV = Libplanet.Assets.FungibleAssetValue;

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

        public abstract Transaction<T> GetTransaction<T>(TxId txid)
            where T : IAction, new();

        public abstract void PutTransaction<T>(Transaction<T> tx)
            where T : IAction, new();

        /// <inheritdoc/>
        public abstract IEnumerable<BlockHash> IterateBlockHashes();

        /// <inheritdoc/>
        public Block<T> GetBlock<T>(BlockHash blockHash)
            where T : IAction, new()
        {
            if (GetBlockDigest(blockHash) is BlockDigest blockDigest)
            {
                BlockHeader header = blockDigest.GetHeader();
                (TxId TxId, Transaction<T> Tx)[] txs = blockDigest.TxIds
                    .Select(bytes => new TxId(bytes.ToArray()))
                    .OrderBy(txid => txid)
                    .Select(txid => (txid, GetTransaction<T>(txid)))
                    .ToArray();

                TxId[] missingTxIds =
                    txs.Where(pair => pair.Tx is null).Select(pair => pair.TxId).ToArray();
                if (missingTxIds.Any())
                {
                    throw new InvalidOperationException(
                        $"Failed to find {missingTxIds.Length} tx(s) (out of {txs.Length}) " +
                        $"at block {blockHash}:\n" + string.Join("\n  ", missingTxIds));
                }

                return new Block<T>(header, txs.Select(pair => pair.Tx));
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
        public abstract void PutBlock<T>(Block<T> block)
            where T : IAction, new();

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
            var favDelta = SerializeGroupedFAVs(txSuccess.FungibleAssetsDelta);
            var updatedFAVs = SerializeGroupedFAVs(txSuccess.UpdatedFungibleAssets);
            var serialized = Dictionary.Empty
                .Add("fail", false)
                .Add("sDelta", sDelta)
                .Add("favDelta", new Dictionary(favDelta))
                .Add("updatedFAVs", new Dictionary(updatedFAVs));

            if (txSuccess.ActionsLogsList is { } actionsLogsList)
            {
                serialized = serialized.Add("actionsLogsList", SerializeLogs(actionsLogsList));
            }

            return serialized;
        }

        protected static IValue SerializeTxExecution(TxFailure txFailure)
        {
            Dictionary d = Dictionary.Empty
                .Add("fail", true)
                .Add("exc", txFailure.ExceptionName);

            if (txFailure.ActionsLogsList is { } actionsLogsList)
            {
                d = d.Add("actionsLogsList", SerializeLogs(txFailure.ActionsLogsList));
            }

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

                List<List<string>> actionsLogsList = null;
                if (d.ContainsKey("actionsLogsList"))
                {
                    actionsLogsList =
                        DeserializeLogs(d.GetValue<List>("actionsLogsList"));
                }

                if (fail)
                {
                    string excName = d.GetValue<Text>("exc");
                    IValue excMetadata = d.ContainsKey("excMeta") ? d["excMeta"] : null;
                    return new TxFailure(blockHash, txid, actionsLogsList, excName, excMetadata);
                }

                ImmutableDictionary<Address, IValue> sDelta = d.GetValue<Dictionary>("sDelta")
                    .ToImmutableDictionary(
                        kv => new Address((IValue)kv.Key),
                        kv => kv.Value is List l && l.Any() ? l[0] : null
                    );
                IImmutableDictionary<Address, IImmutableDictionary<Currency, FungibleAssetValue>>
                    favDelta = DeserializeGroupedFAVs(d.GetValue<Dictionary>("favDelta"));
                IImmutableDictionary<Address, IImmutableDictionary<Currency, FungibleAssetValue>>
                    updatedFAVs = DeserializeGroupedFAVs(d.GetValue<Dictionary>("updatedFAVs"));

                return new TxSuccess(
                    blockHash,
                    txid,
                    actionsLogsList,
                    sDelta,
                    favDelta,
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
            List<List<string>> logs
        ) =>
            new List(logs.Select(l => new List(l.Select(x => (Text)x))));

        private static List<List<string>> DeserializeLogs(
            Bencodex.Types.List serialized) =>
            serialized.Cast<List>().Select(l => l.Select(x => (string)(Text)x).ToList()).ToList();

        private static Bencodex.Types.List SerializeFAVs(
            IImmutableDictionary<Currency, FungibleAssetValue> favs
        ) =>
            new List(
                favs.Select(
                    kv => List.Empty.Add(kv.Key.Serialize()).Add(kv.Value.RawValue)
                )
            );

        private static IImmutableDictionary<Currency, FungibleAssetValue> DeserializeFAVs(
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
