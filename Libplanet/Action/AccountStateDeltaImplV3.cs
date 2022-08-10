using System;
using System.Collections.Immutable;
using System.Diagnostics.Contracts;
using System.Numerics;
using Bencodex.Types;
using Libplanet.Assets;

namespace Libplanet.Action
{
    /// <summary>
    /// Equivalent to <see cref="AccountStateDeltaImpl"/> except that it does not track the total
    /// supply of currencies.
    /// </summary>
    [Pure]
    internal class AccountStateDeltaImplV3 : AccountStateDeltaImpl, IAccountStateDelta
    {
        internal AccountStateDeltaImplV3(
            AccountStateGetter accountStateGetter,
            AccountBalanceGetter accountBalanceGetter,
            Address signer
        )
            : base(
                accountStateGetter,
                accountBalanceGetter,
                ActionEvaluator<NullAction>.NullTotalSupplyGetter,
                signer)
        {
        }

        [Pure]
        IImmutableSet<Currency> IAccountStateDelta.TotalSupplyUpdatedCurrencies
            => ImmutableHashSet<Currency>.Empty;

        /// <inheritdoc/>
        public override FungibleAssetValue GetTotalSupply(Currency currency)
        {
            var msg = $"The {nameof(IAccountStateDelta.GetTotalSupply)}() method is only supported"
                      + " with protocol versions 4 and above.";
            throw new NotSupportedException(msg);
        }

        /// <inheritdoc/>
        [Pure]
        public override IAccountStateDelta MintAsset(Address recipient, FungibleAssetValue value)
        {
            if (value.Currency.TotalSupplyTrackable)
            {
                const string msg =
                    "Minting currencies with total supply tracking enabled is only supported with"
                    + " protocol versions 4 and above.";
                throw new NotSupportedException(msg);
            }

            return base.MintAsset(recipient, value);
        }

        /// <inheritdoc/>
        [Pure]
        public override IAccountStateDelta BurnAsset(Address owner, FungibleAssetValue value)
        {
            if (value.Currency.TotalSupplyTrackable)
            {
                const string msg =
                    "Burning currencies with total supply tracking enabled is only supported with"
                    + " protocol versions 4 and above.";
                throw new NotSupportedException(msg);
            }

            return base.BurnAsset(owner, value);
        }

        FungibleAssetValue? IAccountStateDelta.GetTotalSupplyImpl(Currency currency) => null;

        [Pure]
        protected override AccountStateDeltaImpl UpdateStates(
            IImmutableDictionary<Address, IValue> updatedStates
        ) =>
            new AccountStateDeltaImplV3(StateGetter, BalanceGetter, Signer)
            {
                UpdatedStates = updatedStates,
                UpdatedFungibles = UpdatedFungibles,
            };

        [Pure]
        protected override AccountStateDeltaImpl UpdateFungibleAssets(
            IImmutableDictionary<(Address, Currency), BigInteger> updatedFungibleAssets
        ) =>
            new AccountStateDeltaImplV3(StateGetter, BalanceGetter, Signer)
            {
                UpdatedStates = UpdatedStates,
                UpdatedFungibles = updatedFungibleAssets,
            };
    }
}
