using System;
using System.Collections.Immutable;
using System.Diagnostics.Contracts;
using System.Numerics;
using Bencodex.Types;
using Libplanet.Assets;

namespace Libplanet.Action
{
    /// <summary>
    /// Equivalent to <see cref="AccountStateDeltaImplV3"/> except that it maintains its old (v0)
    /// incorrect behavior of <see cref="TransferAsset"/>.
    /// </summary>
    [Pure]
    internal class AccountStateDeltaImplV0 : AccountStateDeltaImplV3
    {
        internal AccountStateDeltaImplV0(
            AccountStateGetter accountStateGetter,
            AccountBalanceGetter accountBalanceGetter,
            Address signer
        )
            : base(accountStateGetter, accountBalanceGetter, signer)
        {
        }

        /// <inheritdoc/>
        public override FungibleAssetValue GetBalance(Address address, Currency currency) =>
            UpdatedFungibles.TryGetValue((address, currency), out BigInteger balance)
                ? FungibleAssetValue.FromRawValue(currency, balance)
                : BalanceGetter(address, currency);

        /// <inheritdoc/>
        [Pure]
        public override IAccountStateDelta TransferAsset(
            Address sender,
            Address recipient,
            FungibleAssetValue value,
            bool allowNegativeBalance = false
        )
        {
            if (value.Sign <= 0)
            {
                throw new ArgumentOutOfRangeException(
                    nameof(value),
                    "The value to transfer has to be greater than zero."
                );
            }

            Currency currency = value.Currency;
            FungibleAssetValue senderBalance = GetBalance(sender, currency);
            FungibleAssetValue recipientBalance = GetBalance(recipient, currency);

            if (!allowNegativeBalance && senderBalance < value)
            {
                var msg = $"The account {sender}'s balance of {currency} is insufficient to " +
                          $"transfer: {senderBalance} < {value}.";
                throw new InsufficientBalanceException(sender, senderBalance, msg);
            }

            return UpdateFungibleAssets(
                UpdatedFungibles
                    .SetItem((sender, currency), (senderBalance - value).RawValue)
                    .SetItem((recipient, currency), (recipientBalance + value).RawValue)
            );
        }

        [Pure]
        protected override AccountStateDeltaImpl UpdateStates(
            IImmutableDictionary<Address, IValue> updatedStates
        ) =>
            new AccountStateDeltaImplV0(StateGetter, BalanceGetter, Signer)
            {
                UpdatedStates = updatedStates,
                UpdatedFungibles = UpdatedFungibles,
            };

        [Pure]
        protected override AccountStateDeltaImpl UpdateFungibleAssets(
            IImmutableDictionary<(Address, Currency), BigInteger> updatedFungibleAssets
        ) =>
            new AccountStateDeltaImplV0(StateGetter, BalanceGetter, Signer)
            {
                UpdatedStates = UpdatedStates,
                UpdatedFungibles = updatedFungibleAssets,
            };
    }
}
