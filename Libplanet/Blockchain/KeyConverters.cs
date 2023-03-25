using Libplanet.Assets;

namespace Libplanet.Blockchain
{
    internal static class KeyConverters
    {
        internal const string ValidatorSetKey = "___";

        internal static string ToStateKey(Address address) => ByteUtil.Hex(address.ByteArray);

        internal static string ToFungibleAssetKey(Address address, Currency currency) =>
            "_" + ByteUtil.Hex(address.ByteArray) +
            "_" + ByteUtil.Hex(currency.Hash.ByteArray);

        internal static string ToFungibleAssetKey((Address, Currency) pair) =>
            ToFungibleAssetKey(pair.Item1, pair.Item2);

        internal static string ToTotalSupplyKey(Currency currency) =>
            "__" + ByteUtil.Hex(currency.Hash.ByteArray);
    }
}
