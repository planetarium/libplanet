using System.Collections.Immutable;
using System.Diagnostics.Contracts;
using System.Numerics;
using Bencodex.Types;
using Libplanet.Assets;

namespace Libplanet.State
{
    /// <summary>
    /// Equivalent to <see cref="AccountStateDeltaImpl"/> except that it maintains its old (v0)
    /// incorrect behavior of <see cref="IAccountStateDelta.TransferAsset"/>.
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
        public override FungibleAssetValue GetBalance(Address address, Currency currency) =>
            UpdatedFungibles.TryGetValue((address, currency), out BigInteger balance)
                ? FungibleAssetValue.FromRawValue(currency, balance)
                : BalanceGetter(address, currency);

        [Pure]
        protected override AccountStateDeltaImpl UpdateStates(
            IImmutableDictionary<Address, IValue> updatedStates
        ) =>
            new AccountStateDeltaImplV0(
                StateGetter,
                BalanceGetter,
                TotalSupplyGetter,
                ValidatorSetGetter,
                Signer)
            {
                UpdatedStates = updatedStates,
                UpdatedFungibles = UpdatedFungibles,
                TotalUpdatedFungibles = TotalUpdatedFungibles,
            };

        [Pure]
        protected override AccountStateDeltaImpl UpdateFungibleAssets(
            IImmutableDictionary<(Address, Currency), BigInteger> updatedFungibleAssets,
            IImmutableDictionary<(Address, Currency), BigInteger> totalUpdatedFungibles
        ) =>
            new AccountStateDeltaImplV0(
                StateGetter,
                BalanceGetter,
                TotalSupplyGetter,
                ValidatorSetGetter,
                Signer)
            {
                UpdatedStates = UpdatedStates,
                UpdatedFungibles = updatedFungibleAssets,
                TotalUpdatedFungibles = totalUpdatedFungibles,
            };
    }
}
