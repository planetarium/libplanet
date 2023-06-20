using System;
using System.Collections.Immutable;
using System.Diagnostics.Contracts;
using System.Numerics;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Assets;
using Libplanet.Consensus;

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
            ValidatorSetGetter validatorSetGetter)
            : base(
                accountStateGetter,
                accountBalanceGetter,
                totalSupplyGetter,
                validatorSetGetter)
        {
        }

        /// <inheritdoc/>
        [Pure]
        public override IAccountStateDelta TransferAsset(
            IActionContext context,
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

            // NOTE: If sender and recipient are the same, this increases the balance
            // by value amount as the latter SetItem() overwrites the former.
            // This is why new AccountStateDeltaImpl was introduced.
            return UpdateFungibleAssets(
                FungiblesDelta
                    .SetItem((sender, currency), (senderBalance - value).RawValue)
                    .SetItem((recipient, currency), (recipientBalance + value).RawValue)
            );
        }

        [Pure]
        protected override IAccountStateDelta UpdateStates(
            IImmutableDictionary<Address, IValue> statesDelta) =>
            new AccountStateDeltaImplV0(
                StateGetter,
                BalanceGetter,
                TotalSupplyGetter,
                ValidatorSetGetter)
            {
                Delta = new Delta(
                    statesDelta,
                    Delta.Fungibles,
                    Delta.TotalSupplies,
                    Delta.ValidatorSet),
                TotalUpdatedFungibles = TotalUpdatedFungibles,
            };

        [Pure]
        protected override IAccountStateDelta UpdateFungibleAssets(
            IImmutableDictionary<(Address, Currency), BigInteger> fungiblesDelta
        ) =>
            UpdateFungibleAssets(fungiblesDelta, TotalSuppliesDelta);

        [Pure]
        protected override IAccountStateDelta UpdateFungibleAssets(
            IImmutableDictionary<(Address, Currency), BigInteger> fungiblesDelta,
            IImmutableDictionary<Currency, BigInteger> totalSuppliesDelta) =>
            new AccountStateDeltaImplV0(
                StateGetter,
                BalanceGetter,
                TotalSupplyGetter,
                ValidatorSetGetter)
            {
                Delta = new Delta(
                    Delta.States,
                    fungiblesDelta,
                    totalSuppliesDelta,
                    Delta.ValidatorSet),
                TotalUpdatedFungibles = TotalUpdatedFungibles.SetItems(fungiblesDelta),
            };

        [Pure]
        protected override IAccountStateDelta UpdateValidatorSet(
            ValidatorSet validatorSetDelta) =>
            new AccountStateDeltaImplV0(
                StateGetter,
                BalanceGetter,
                TotalSupplyGetter,
                ValidatorSetGetter)
            {
                Delta = new Delta(
                    Delta.States,
                    Delta.Fungibles,
                    Delta.TotalSupplies,
                    validatorSetDelta),
                TotalUpdatedFungibles = TotalUpdatedFungibles,
            };
    }
}
