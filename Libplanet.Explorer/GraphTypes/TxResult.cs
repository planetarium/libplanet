using System.Collections.Immutable;
using Bencodex.Types;
using Libplanet.Crypto;
using Libplanet.Types.Assets;
using FAV = Libplanet.Types.Assets.FungibleAssetValue;

namespace Libplanet.Explorer.GraphTypes
{
    public class TxResult
    {
        public TxResult(
            TxStatus status,
            long? blockIndex,
            string? blockHash,
            string? exceptionName,
            IValue? exceptionMetadata,
            IImmutableDictionary<Address, IValue>? updatedStates,
            IImmutableDictionary<Address, IImmutableDictionary<Currency, FAV>>? fungibleAssetsDelta,
            IImmutableDictionary<Address, IImmutableDictionary<Currency, FAV>>?
                updatedFungibleAssets
        )
        {
            TxStatus = status;
            BlockIndex = blockIndex;
            BlockHash = blockHash;
            ExceptionName = exceptionName;
            ExceptionMetadata = exceptionMetadata;
            UpdatedStates = updatedStates;
            FungibleAssetsDelta = fungibleAssetsDelta;
            UpdatedFungibleAssets = updatedFungibleAssets;
        }

        public TxStatus TxStatus { get; private set; }

        public long? BlockIndex { get; private set; }

        public string? BlockHash { get; private set; }

        public string? ExceptionName { get; private set; }

        public IValue? ExceptionMetadata { get; private set; }

        public IImmutableDictionary<Address, IValue>? UpdatedStates { get; }

        public IImmutableDictionary<Address, IImmutableDictionary<Currency, FungibleAssetValue>>?
            FungibleAssetsDelta { get; }

        public IImmutableDictionary<Address, IImmutableDictionary<Currency, FungibleAssetValue>>?
            UpdatedFungibleAssets { get; }

        public static TxResult Success(
            long blockIndex,
            string blockHash,
            IImmutableDictionary<Address, IValue> updatedStates,
            IImmutableDictionary<Address, IImmutableDictionary<Currency, FAV>> fungibleAssetsDelta,
            IImmutableDictionary<Address, IImmutableDictionary<Currency, FAV>>
                updatedFungibleAssets
        )
        {
            return new TxResult(
                TxStatus.SUCCESS,
                blockIndex,
                blockHash,
                null,
                null,
                updatedStates,
                fungibleAssetsDelta,
                updatedFungibleAssets
            );
        }

        public static TxResult Failure(
            long blockIndex,
            string blockHash,
            string exceptionName,
            IValue exceptionMetadata
        )
        {
            return new TxResult(
                TxStatus.FAILURE,
                blockIndex,
                blockHash,
                exceptionName,
                exceptionMetadata,
                null,
                null,
                null
            );
        }

        public static TxResult FromStatus(TxStatus status)
        {
            return new TxResult(
                status,
                null,
                null,
                null,
                null,
                null,
                null,
                null
            );
        }
    }
}
