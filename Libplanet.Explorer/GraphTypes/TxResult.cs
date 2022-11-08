using System.Collections.Generic;
using System.Collections.Immutable;
using Bencodex.Types;
using Libplanet.Assets;
using Libplanet.Explorer.GraphTypes;

using FAV = Libplanet.Assets.FungibleAssetValue;

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
            IImmutableDictionary<Address, IValue?>? updatedStates,
            IImmutableDictionary<Address, IImmutableDictionary<Currency, FAV>>? fungibleAssetsDelta,
            IImmutableDictionary<Address, IImmutableDictionary<Currency, FAV>>?
                updatedFungibleAssets,
            List<List<string>>? actionsLogsList
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
            ActionsLogsList = actionsLogsList;
        }

        public TxStatus TxStatus { get; private set; }

        public long? BlockIndex { get; private set; }

        public string? BlockHash { get; private set; }

        public string? ExceptionName { get; private set; }

        public IValue? ExceptionMetadata { get; private set; }

        public IImmutableDictionary<Address, IValue?>? UpdatedStates { get; }

        public IImmutableDictionary<Address, IImmutableDictionary<Currency, FungibleAssetValue>>?
            FungibleAssetsDelta { get; }

        public IImmutableDictionary<Address, IImmutableDictionary<Currency, FungibleAssetValue>>?
            UpdatedFungibleAssets { get; }

        public List<List<string>>? ActionsLogsList { get; }
    }
}
