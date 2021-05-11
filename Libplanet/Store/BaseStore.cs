using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Globalization;
using System.Linq;
using System.Security.Cryptography;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Assets;
using Libplanet.Blocks;
using Libplanet.Tx;
using Serilog;

namespace Libplanet.Store
{
    /// <summary>
    /// Common code for several <see cref="IStore"/> implementations.
    /// </summary>
    public abstract class BaseStore : IStore, IDisposable
    {
        /// <inheritdoc />
        public abstract IEnumerable<Guid> ListChainIds();

        /// <inheritdoc />
        public abstract Guid? GetCanonicalChainId();

        /// <inheritdoc />
        public abstract void SetCanonicalChainId(Guid chainId);

        public abstract long CountIndex(Guid chainId);

        /// <inheritdoc cref="IStore.IterateIndexes(Guid, int, int?)"/>
        public abstract IEnumerable<BlockHash> IterateIndexes(Guid chainId, int offset, int? limit);

        /// <inheritdoc cref="IStore.IndexBlockHash(Guid, long)"/>
        public abstract BlockHash? IndexBlockHash(Guid chainId, long index);

        /// <inheritdoc cref="IStore.AppendIndex(Guid, BlockHash)"/>
        public abstract long AppendIndex(Guid chainId, BlockHash hash);

        /// <inheritdoc cref="IStore.ForkBlockIndexes(Guid, Guid, BlockHash)"/>
        public abstract void ForkBlockIndexes(
            Guid sourceChainId,
            Guid destinationChainId,
            BlockHash branchpoint
        );

        /// <inheritdoc />
        public abstract void StageTransactionIds(IImmutableSet<TxId> txids);

        public abstract void UnstageTransactionIds(
            ISet<TxId> txids
        );

        /// <inheritdoc />
        public abstract IEnumerable<TxId> IterateStagedTransactionIds();

        public abstract IEnumerable<TxId> IterateTransactionIds();

        public abstract Transaction<T> GetTransaction<T>(TxId txid)
            where T : IAction, new();

        public abstract void PutTransaction<T>(Transaction<T> tx)
            where T : IAction, new();

        public abstract bool DeleteTransaction(TxId txid);

        /// <inheritdoc cref="IStore.IterateBlockHashes()"/>
        public abstract IEnumerable<BlockHash> IterateBlockHashes();

        /// <inheritdoc cref="IStore.GetBlock{T}(BlockHash)"/>
        public Block<T> GetBlock<T>(BlockHash blockHash)
            where T : IAction, new()
        {
            if (GetBlockDigest(blockHash) is BlockDigest blockDigest)
            {
                BlockHash? prevHash = blockDigest.Header.PreviousHash.Any()
                    ? new BlockHash(blockDigest.Header.PreviousHash)
                    : (BlockHash?)null;
                BlockHash? preEvaluationHash = blockDigest.Header.PreEvaluationHash.Any()
                    ? new BlockHash(blockDigest.Header.PreEvaluationHash)
                    : (BlockHash?)null;
                HashDigest<SHA256>? stateRootHash = blockDigest.Header.StateRootHash.Any()
                    ? new HashDigest<SHA256>(blockDigest.Header.StateRootHash)
                    : (HashDigest<SHA256>?)null;

                return new Block<T>(
                    index: blockDigest.Header.Index,
                    difficulty: blockDigest.Header.Difficulty,
                    totalDifficulty: blockDigest.Header.TotalDifficulty,
                    nonce: new Nonce(blockDigest.Header.Nonce.ToArray()),
                    miner: new Address(blockDigest.Header.Miner),
                    previousHash: prevHash,
                    timestamp: DateTimeOffset.ParseExact(
                        blockDigest.Header.Timestamp,
                        BlockHeader.TimestampFormat,
                        CultureInfo.InvariantCulture
                    ).ToUniversalTime(),
                    transactions: blockDigest.TxIds
                        .Select(bytes => GetTransaction<T>(new TxId(bytes.ToArray())))
                        .ToImmutableArray(),
                    preEvaluationHash: preEvaluationHash,
                    stateRootHash: stateRootHash,
                    protocolVersion: blockDigest.Header.ProtocolVersion
                );
            }

            return null;
        }

        /// <inheritdoc cref="IStore.GetBlockIndex(BlockHash)"/>
        public long? GetBlockIndex(BlockHash blockHash)
        {
            return GetBlockDigest(blockHash)?.Header.Index;
        }

        /// <inheritdoc cref="IStore.GetBlockDigest(BlockHash)"/>
        public abstract BlockDigest? GetBlockDigest(BlockHash blockHash);

        /// <inheritdoc />
        public abstract void PutBlock<T>(Block<T> block)
            where T : IAction, new();

        /// <inheritdoc cref="IStore.DeleteBlock(BlockHash)"/>
        public abstract bool DeleteBlock(BlockHash blockHash);

        /// <inheritdoc cref="IStore.ContainsBlock(BlockHash)"/>
        public abstract bool ContainsBlock(BlockHash blockHash);

        /// <inheritdoc cref="IStore.PutTxExecution(Libplanet.Tx.TxSuccess)"/>
        public abstract void PutTxExecution(TxSuccess txSuccess);

        /// <inheritdoc cref="IStore.PutTxExecution(Libplanet.Tx.TxFailure)"/>
        public abstract void PutTxExecution(TxFailure txFailure);

        /// <inheritdoc cref="IStore.GetTxExecution(BlockHash, TxId)"/>
        public abstract TxExecution GetTxExecution(BlockHash blockHash, TxId txid);

        /// <inheritdoc cref="IStore.SetBlockPerceivedTime(BlockHash, DateTimeOffset)"/>
        public abstract void SetBlockPerceivedTime(
            BlockHash blockHash,
            DateTimeOffset perceivedTime
        );

        /// <inheritdoc cref="IStore.GetBlockPerceivedTime(BlockHash)"/>
        public abstract DateTimeOffset? GetBlockPerceivedTime(BlockHash blockHash);

        /// <inheritdoc/>
        public abstract IEnumerable<KeyValuePair<Address, long>> ListTxNonces(Guid chainId);

        /// <inheritdoc/>
        public abstract long GetTxNonce(Guid chainId, Address address);

        /// <inheritdoc/>
        public abstract void IncreaseTxNonce(Guid chainId, Address signer, long delta = 1);

        public virtual long CountTransactions()
        {
            return IterateTransactionIds().LongCount();
        }

        public virtual long CountBlocks()
        {
            return IterateBlockHashes().LongCount();
        }

        /// <inheritdoc />
        public abstract bool ContainsTransaction(TxId txId);

        /// <inheritdoc/>
        public abstract void DeleteChainId(Guid chainId);

        /// <inheritdoc/>
        public abstract void Dispose();

        /// <inheritdoc/>
        public abstract void ForkTxNonces(Guid sourceChainId, Guid destinationChainId);

        protected static IValue SerializeTxExecution(TxSuccess txSuccess)
        {
            IEnumerable<IValue> sDelta = txSuccess.StateUpdatedAddresses
                .Select(a => (IValue)(Binary)a.ToByteArray());
            var aDelta = txSuccess.UpdatedFungibleAssets.Select(kv =>
                new KeyValuePair<IKey, IValue>(
                    (Binary)kv.Key.ToByteArray(),
                    new List(kv.Value.Select(c => c.Serialize()))
                )
            );
            return (Dictionary)Dictionary.Empty
                .Add("fail", false)
                .Add("sRoot", txSuccess.StateRootHash.ToByteArray())
                .Add("sDelta", sDelta)
                .Add((IKey)(Text)"aDelta", new Dictionary(aDelta));
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
                    " must be serialized as a Bencodex dictionary, not {ActualValue}.";
                logger?.Error(msg, decoded.Inspection);
                return null;
            }

            try
            {
                bool fail = d.GetValue<Bencodex.Types.Boolean>("fail");
                if (fail)
                {
                    string excName = d.GetValue<Text>("exc");
                    IValue excMetadata = d.ContainsKey("excMeta") ? d["excMeta"] : null;
                    return new TxFailure(blockHash, txid, excName, excMetadata);
                }

                var stateRootHash = new HashDigest<SHA256>(((Binary)d["sRoot"]).ByteArray);
                ImmutableHashSet<Address> stateUpdatedAddresses = ((List)d["sDelta"])
                    .Select(v => new Address(((Binary)v).ByteArray))
                    .ToImmutableHashSet();
                ImmutableDictionary<Address, IImmutableSet<Currency>> updatedFungibleAssets =
                    d.GetValue<Dictionary>("aDelta").Select(kv =>
                        new KeyValuePair<Address, IImmutableSet<Currency>>(
                            new Address(((Binary)kv.Key).ByteArray),
                            ((List)kv.Value).Select(v => new Currency(v)).ToImmutableHashSet()
                        )
                    ).ToImmutableDictionary();
                return new TxSuccess(
                    blockHash,
                    txid,
                    stateRootHash,
                    stateUpdatedAddresses,
                    updatedFungibleAssets
                );
            }
            catch (Exception e)
            {
                const string msg =
                    "Uncaught exception during deserializing a " + nameof(TxExecution) +
                    ": {Exception}";
                logger?.Error(e, msg, e);
                return null;
            }
        }
    }
}
