using System;
using System.Diagnostics.Contracts;
using System.Numerics;
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
        /// Mints the fungible asset <paramref name="value"/> (i.e., in-game monetary),
        /// and give it to the <paramref name="recipient"/>.
        /// </summary>
        /// <param name="context">The <see cref="IActionContext"/> of the <see cref="IAction"/>
        /// executing this method.</param>
        /// <param name="recipient">The address who receives the minted asset.</param>
        /// <param name="value">The asset value to mint.</param>
        /// <returns>A new <see cref="IWorld"/> instance that the given <paramref
        /// name="value"/> is added to <paramref name="recipient"/>'s balance.</returns>
        /// <exception cref="ArgumentOutOfRangeException">Thrown when the <paramref name="value"/>
        /// is less than or equal to 0.</exception>
        /// <exception cref="CurrencyPermissionException">Thrown when a transaction signer
        /// (or a miner in case of block actions) is not a member of the <see
        /// cref="FungibleAssetValue.Currency"/>'s <see cref="Currency.Minters"/>.</exception>
        /// <exception cref="SupplyOverflowException">Thrown when the sum of the
        /// <paramref name="value"/> to be minted and the current total supply amount of the
        /// <see cref="FungibleAssetValue.Currency"/> exceeds the
        /// <see cref="Currency.MaximumSupply"/>.</exception>
        [Pure]
        public static IWorld MintAsset(
            this IWorld world,
            IActionContext context,
            Address recipient,
            FungibleAssetValue value)
        {
            if (value.Sign <= 0)
            {
                throw new ArgumentOutOfRangeException(
                    nameof(value),
                    "The value to mint has to be greater than zero."
                );
            }

            Currency currency = value.Currency;
            if (!currency.AllowsToMint(context.Signer))
            {
                throw new CurrencyPermissionException(
                    $"The account {context.Signer} has no permission to mint currency {currency}.",
                    context.Signer,
                    currency
                );
            }

            FungibleAssetValue balance = GetBalance(world, recipient, currency);
            BigInteger rawBalance = (balance + value).RawValue;

            if (currency.TotalSupplyTrackable)
            {
                var currentTotalSupply = GetTotalSupply(world, currency);
                if (currency.MaximumSupply < currentTotalSupply + value)
                {
                    var msg = $"The amount {value} attempted to be minted added to the current"
                              + $" total supply of {currentTotalSupply} exceeds the"
                              + $" maximum allowed supply of {currency.MaximumSupply}.";
                    throw new SupplyOverflowException(msg, value);
                }

                return UpdateFungibleAssets(
                    world,
                    recipient,
                    currency,
                    rawBalance,
                    (currentTotalSupply + value).RawValue);
            }
            else
            {
                return UpdateFungibleAssets(world, recipient, currency, rawBalance);
            }
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

        private static IWorld UpdateFungibleAssets(
            IWorld world,
            Address address,
            Currency currency,
            BigInteger amount,
            BigInteger? supplyAmount = null)
        {
            IAccount account = supplyAmount is { } sa
                ? new Account(new AccountState(
                    world.GetAccount(ReservedAddresses.LegacyAccount).Trie
                        .Set(ToFungibleAssetKey(address, currency), new Integer(amount))
                        .Set(ToTotalSupplyKey(currency), new Integer(sa))))
                : new Account(new AccountState(
                    world.GetAccount(ReservedAddresses.LegacyAccount).Trie
                        .Set(ToFungibleAssetKey(address, currency), new Integer(amount))));

            return world.SetAccount(ReservedAddresses.LegacyAccount, account);
        }
    }
}
