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
            IImmutableDictionary<Address, IValue>? updatedStates,
            IImmutableDictionary<Address, IImmutableDictionary<Currency, FAV>>?
                updatedFungibleAssets
        )
        {
            TxStatus = status;
            BlockIndex = blockIndex;
            BlockHash = blockHash;
            ExceptionName = exceptionName;
            UpdatedStates = updatedStates;
            UpdatedFungibleAssets = updatedFungibleAssets;
        }

        public TxStatus TxStatus { get; private set; }

        public long? BlockIndex { get; private set; }

        public string? BlockHash { get; private set; }

        public string? ExceptionName { get; private set; }

        public IImmutableDictionary<Address, IValue>? UpdatedStates { get; }

        public IImmutableDictionary<Address, IImmutableDictionary<Currency, FungibleAssetValue>>?
            UpdatedFungibleAssets { get; }
    }
}
