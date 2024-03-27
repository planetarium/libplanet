using System.Diagnostics.Contracts;
using Bencodex.Types;
using Libplanet.Crypto;
using Libplanet.Types.Assets;
using static Libplanet.Action.State.KeyConverters;

namespace Libplanet.Action.State
{
    public static class IWorldExtensions
    {
        /// <summary>
        /// Queries <paramref name="address"/>'s balance of the <paramref name="currency"/>.
        /// </summary>
        /// <param name="address">The owner address to query.</param>
        /// <param name="currency">The currency type to query.</param>
        /// <returns>
        /// The <paramref name="address"/>'s balance of the <paramref name="currency"/>.
        /// </returns>
        [Pure]
        public static FungibleAssetValue GetBalance(
            this IWorldState worldState,
            Address address,
            Currency currency)
        {
            IAccountState account = worldState.GetAccountState(ReservedAddresses.LegacyAccount);
            IValue? value = account.Trie.Get(ToFungibleAssetKey(address, currency));
            return value is Integer i
                ? FungibleAssetValue.FromRawValue(currency, i)
                : currency * 0;
        }
    }
}
