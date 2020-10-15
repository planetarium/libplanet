#nullable enable
using Libplanet.Assets;

namespace Libplanet.Blockchain
{
    internal static class KeyConverters
    {
        internal static string ToStateKey(Address address) => address.ToHex().ToLowerInvariant();

        internal static string ToFungibleAssetKey(Address address, Currency currency) =>
            "_" + address.ToHex().ToLowerInvariant() +
            "_" + ByteUtil.Hex(currency.Hash.ByteArray).ToLowerInvariant();

        internal static string ToFungibleAssetKey((Address, Currency) pair) =>
            ToFungibleAssetKey(pair.Item1, pair.Item2);
    }
}
