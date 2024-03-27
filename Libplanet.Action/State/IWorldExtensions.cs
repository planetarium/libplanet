using System.Diagnostics.Contracts;
using Bencodex.Types;
using Libplanet.Crypto;
using Libplanet.Types.Assets;
using Libplanet.Types.Consensus;
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

        /// <summary>
        /// Returns the total supply of a <paramref name="currency"/>.
        /// </summary>
        /// <param name="currency">The currency type to query.</param>
        /// <returns>The total supply of the <paramref name="currency"/>.
        /// </returns>
        /// <exception cref="TotalSupplyNotTrackableException">Thrown when the total supply of the
        /// given <paramref name="currency"/> is not trackable.</exception>
        /// <seealso cref="Currency.MaximumSupply"/>
        [Pure]
        public static FungibleAssetValue GetTotalSupply(
            this IWorldState worldState,
            Currency currency)
        {
            if (!currency.TotalSupplyTrackable)
            {
                throw TotalSupplyNotTrackableException.WithDefaultMessage(currency);
            }

            IAccountState account = worldState.GetAccountState(ReservedAddresses.LegacyAccount);
            IValue? value = account.Trie.Get(ToTotalSupplyKey(currency));
            return value is Integer i
                ? FungibleAssetValue.FromRawValue(currency, i)
                : currency * 0;
        }

        /// <summary>
        /// Returns the validator set.
        /// </summary>
        /// <returns>The validator set of type <see cref="ValidatorSet"/>.
        /// </returns>
        [Pure]
        public static ValidatorSet GetValidatorSet(this IWorldState worldState)
        {
            IAccountState account = worldState.GetAccountState(ReservedAddresses.LegacyAccount);
            IValue? value = account.Trie.Get(ValidatorSetKey);
            return value is List list
                ? new ValidatorSet(list)
                : new ValidatorSet();
        }
    }
}
