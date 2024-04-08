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
        /// <param name="worldState">The <see cref="IWorldState"/> to read from.</param>
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
        /// <param name="world">The <see cref="IWorld"/> to manipulate.</param>
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
        /// Burns the fungible asset <paramref name="value"/> (i.e., in-game monetary) from
        /// <paramref name="owner"/>'s balance.
        /// </summary>
        /// <param name="world">The <see cref="IWorld"/> to manipulate.</param>
        /// <param name="context">The <see cref="IActionContext"/> of the <see cref="IAction"/>
        /// executing this method.</param>
        /// <param name="owner">The address who owns the fungible asset to burn.</param>
        /// <param name="value">The fungible asset <paramref name="value"/> to burn.</param>
        /// <returns>A new <see cref="IWorld"/> instance that the given <paramref
        /// name="value"/> is subtracted from <paramref name="owner"/>'s balance.</returns>
        /// <exception cref="ArgumentOutOfRangeException">Thrown when the <paramref name="value"/>
        /// is less than or equal to zero.</exception>
        /// <exception cref="CurrencyPermissionException">Thrown when a transaction signer
        /// (or a miner in case of block actions) is not a member of the <see
        /// cref="FungibleAssetValue.Currency"/>'s <see cref="Currency.Minters"/>.</exception>
        /// <exception cref="InsufficientBalanceException">Thrown when the <paramref name="owner"/>
        /// has insufficient balance than <paramref name="value"/> to burn.</exception>
        [Pure]
        public static IWorld BurnAsset(
            this IWorld world,
            IActionContext context,
            Address owner,
            FungibleAssetValue value)
        {
            string msg;
            if (value.Sign <= 0)
            {
                throw new ArgumentOutOfRangeException(
                    nameof(value),
                    "The value to burn has to be greater than zero."
                );
            }

            Currency currency = value.Currency;
            if (!currency.AllowsToMint(context.Signer))
            {
                msg = $"The account {context.Signer} has no permission to burn assets of " +
                      $"the currency {currency}.";
                throw new CurrencyPermissionException(msg, context.Signer, currency);
            }

            FungibleAssetValue balance = world.GetBalance(owner, currency);

            if (balance < value)
            {
                msg = $"The account {owner}'s balance of {currency} is insufficient to burn: " +
                      $"{balance} < {value}.";
                throw new InsufficientBalanceException(msg, owner, balance);
            }

            BigInteger rawBalance = (balance - value).RawValue;
            if (currency.TotalSupplyTrackable)
            {
                var currentTotalSupply = world.GetTotalSupply(currency);
                return UpdateFungibleAssets(
                    world,
                    owner,
                    currency,
                    rawBalance,
                    (currentTotalSupply - value).RawValue);
            }
            else
            {
                return UpdateFungibleAssets(world, owner, currency, rawBalance);
            }
        }

        /// <summary>
        /// Transfers the fungible asset <paramref name="value"/> (i.e., in-game monetary)
        /// from the <paramref name="sender"/> to the <paramref name="recipient"/>.
        /// </summary>
        /// <param name="world">The <see cref="IWorld"/> to manipulate.</param>
        /// <param name="context">The <see cref="IActionContext"/> of the <see cref="IAction"/>
        /// executing this method.</param>
        /// <param name="sender">The address who sends the fungible asset to
        /// the <paramref name="recipient"/>.</param>
        /// <param name="recipient">The address who receives the fungible asset from
        /// the <paramref name="sender"/>.</param>
        /// <param name="value">The asset value to transfer.</param>
        /// <returns>A new <see cref="IWorld"/> instance that the given <paramref
        /// name="value"/>  is subtracted from <paramref name="sender"/>'s balance and added to
        /// <paramref name="recipient"/>'s balance.</returns>
        /// <exception cref="ArgumentOutOfRangeException">Thrown when the <paramref name="value"/>
        /// is less than or equal to zero.</exception>
        /// <exception cref="InsufficientBalanceException">Thrown when the <paramref name="sender"/>
        /// has insufficient balance than <paramref name="value"/> to transfer.</exception>
        /// <remarks>
        /// The behavior is different depending on <paramref name="context"/>'s
        /// <see cref="IActionContext.BlockProtocolVersion"/>.  There is a bug for version 0
        /// where this may not act as intended.  Such behavior is left intact for backward
        /// compatibility.
        /// </remarks>
        [Pure]
        public static IWorld TransferAsset(
            this IWorld world,
            IActionContext context,
            Address sender,
            Address recipient,
            FungibleAssetValue value) => context.BlockProtocolVersion > 0
                ? TransferAssetV1(world, sender, recipient, value)
                : TransferAssetV0(world, sender, recipient, value);

        /// <summary>
        /// Returns the total supply of a <paramref name="currency"/>.
        /// </summary>
        /// <param name="worldState">The <see cref="IWorldState"/> to read from.</param>
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
        /// <param name="worldState">The <see cref="IWorldState"/> to read from.</param>
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

        /// <summary>
        /// Sets <paramref name="validator"/> to the stored <see cref="ValidatorSet"/>.
        /// If 0 is given as its power, removes the validator from the <see cref="ValidatorSet"/>.
        /// </summary>
        /// <param name="world">The <see cref="IWorld"/> to manipulate.</param>
        /// <param name="validator">The <see cref="Validator"/> instance to write.</param>
        /// <returns>A new <see cref="IWorld"/> instance with
        /// <paramref name="validator"/> set.</returns>
        [Pure]
        public static IWorld SetValidator(this IWorld world, Validator validator) =>
            UpdateValidatorSet(world, world.GetValidatorSet().Update(validator));

        /// <summary>
        /// Sets <paramref name="validatorSet"/> to the stored <see cref="ValidatorSet"/>.
        /// </summary>
        /// <param name="world">The <see cref="IWorld"/> to manipulate.</param>
        /// <param name="validatorSet">The <see cref="ValidatorSet"/> instance to write.</param>
        /// <returns>A new <see cref="IWorld"/> instance with
        /// <paramref name="validator"/> set.</returns>
        [Pure]
        public static IWorld SetValidatorSet(this IWorld world, ValidatorSet validatorSet) =>
            UpdateValidatorSet(world, validatorSet);

        [Pure]
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

        [Pure]
        private static IWorld TransferAssetV0(
            IWorld world,
            Address sender,
            Address recipient,
            FungibleAssetValue value)
        {
            if (value.Sign <= 0)
            {
                throw new ArgumentOutOfRangeException(
                    nameof(value),
                    "The value to transfer has to be greater than zero."
                );
            }

            Currency currency = value.Currency;
            FungibleAssetValue senderBalance = world.GetBalance(sender, currency);
            FungibleAssetValue recipientBalance = world.GetBalance(recipient, currency);

            if (senderBalance < value)
            {
                var msg = $"The account {sender}'s balance of {currency} is insufficient to " +
                          $"transfer: {senderBalance} < {value}.";
                throw new InsufficientBalanceException(msg, sender, senderBalance);
            }

            IWorld intermediate = UpdateFungibleAssets(
                world, sender, currency, (senderBalance - value).RawValue);
            return UpdateFungibleAssets(
                intermediate, recipient, currency, (recipientBalance + value).RawValue);
        }

        [Pure]
        private static IWorld TransferAssetV1(
            IWorld world,
            Address sender,
            Address recipient,
            FungibleAssetValue value)
        {
            if (value.Sign <= 0)
            {
                throw new ArgumentOutOfRangeException(
                    nameof(value),
                    "The value to transfer has to be greater than zero."
                );
            }

            Currency currency = value.Currency;
            FungibleAssetValue senderBalance = world.GetBalance(sender, currency);

            if (senderBalance < value)
            {
                var msg = $"The account {sender}'s balance of {currency} is insufficient to " +
                          $"transfer: {senderBalance} < {value}.";
                throw new InsufficientBalanceException(msg, sender, senderBalance);
            }

            BigInteger senderRawBalance = (senderBalance - value).RawValue;
            IWorld intermediate = UpdateFungibleAssets(world, sender, currency, senderRawBalance);
            FungibleAssetValue recipientBalance = intermediate.GetBalance(recipient, currency);
            BigInteger recipientRawBalance = (recipientBalance + value).RawValue;

            return UpdateFungibleAssets(intermediate, recipient, currency, recipientRawBalance);
        }

        [Pure]
        private static IWorld UpdateValidatorSet(IWorld world, ValidatorSet validatorSet)
        {
            IAccount account = world.GetAccount(ReservedAddresses.LegacyAccount);
            return world.SetAccount(
                ReservedAddresses.LegacyAccount,
                new Account(new AccountState(
                    account.Trie.Set(ValidatorSetKey, validatorSet.Bencoded))));
        }
    }
}
