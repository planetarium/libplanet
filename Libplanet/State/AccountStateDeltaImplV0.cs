using System;
using System.Collections.Immutable;
using System.Diagnostics.Contracts;
using System.Numerics;
using Bencodex.Types;
using Libplanet.Assets;

namespace Libplanet.State
{
    /// <summary>
    /// Equivalent to <see cref="AccountStateDeltaImpl"/> except that it maintains its old (v0)
    /// incorrect behavior of <see cref="TransferAsset"/>.
    /// </summary>
    [Pure]
    internal class AccountStateDeltaImplV0 : AccountStateDeltaImpl
    {
        internal AccountStateDeltaImplV0(
            AccountStateGetter accountStateGetter,
            AccountBalanceGetter accountBalanceGetter,
            TotalSupplyGetter totalSupplyGetter,
            ValidatorSetGetter validatorSetGetter,
            Address signer
        )
            : base(
                accountStateGetter,
                accountBalanceGetter,
                totalSupplyGetter,
                validatorSetGetter,
                signer)
        {
        }

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
                throw new InsufficientBalanceException(msg, sender, senderBalance);
            }

            return UpdateFungibleAssets(
                FungiblesDelta
                    .SetItem((sender, currency), (senderBalance - value).RawValue)
                    .SetItem((recipient, currency), (recipientBalance + value).RawValue)
            );
        }

        [Pure]
        protected override AccountStateDeltaImpl UpdateStates(
            IImmutableDictionary<Address, IValue> statesDelta
        ) =>
            new AccountStateDeltaImplV0(
                StateGetter,
                BalanceGetter,
                TotalSupplyGetter,
                ValidatorSetGetter,
                Signer)
            {
                StatesDelta = statesDelta,
                FungiblesDelta = FungiblesDelta,
            };

        [Pure]
        protected override AccountStateDeltaImpl UpdateFungibleAssets(
            IImmutableDictionary<(Address, Currency), BigInteger> fungiblesDelta
        ) =>
            new AccountStateDeltaImplV0(
                StateGetter,
                BalanceGetter,
                TotalSupplyGetter,
                ValidatorSetGetter,
                Signer)
            {
                StatesDelta = StatesDelta,
                FungiblesDelta = fungiblesDelta,
            };
    }
}
