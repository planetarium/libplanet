using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Diagnostics.Contracts;
using System.Linq;
using System.Numerics;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Assets;
using Libplanet.Consensus;

namespace Libplanet.State
{
    /// <summary>
    /// An internal implementation of <see cref="IAccountStateDelta"/>.
    /// </summary>
    [Pure]
    internal class AccountStateDelta : IAccountStateDelta
    {
        /// <summary>
        /// Creates a null state delta from the given <paramref name="accountStateGetter"/>.
        /// </summary>
        /// <param name="accountStateGetter">A view to the &#x201c;epoch&#x201d; states.</param>
        /// <param name="accountBalanceGetter">A view to the &#x201c;epoch&#x201d; asset balances.
        /// </param>
        /// <param name="totalSupplyGetter">A view to the &#x201c;epoch&#x201d; total supplies of
        /// currencies.</param>
        /// <param name="validatorSetGetter">A view to the &#x201c;epoch&#x201d; validator
        /// set.</param>
        internal AccountStateDelta(
            AccountStateGetter accountStateGetter,
            AccountBalanceGetter accountBalanceGetter,
            TotalSupplyGetter totalSupplyGetter,
            ValidatorSetGetter validatorSetGetter)
        {
            Delta = new AccountDelta();
            StateGetter = accountStateGetter;
            BalanceGetter = accountBalanceGetter;
            TotalSupplyGetter = totalSupplyGetter;
            ValidatorSetGetter = validatorSetGetter;
            TotalUpdatedFungibles = ImmutableDictionary<(Address, Currency), BigInteger>.Empty;
        }

        /// <inheritdoc/>
        public IAccountDelta Delta { get; private set; }

        /// <inheritdoc/>
        [Pure]
        public IImmutableSet<Address> UpdatedAddresses =>
            Delta.UpdatedAddresses;

        /// <inheritdoc/>
        public IImmutableSet<Address> StateUpdatedAddresses =>
            Delta.StateUpdatedAddresses;

        /// <inheritdoc/>
        public IImmutableSet<(Address, Currency)> UpdatedFungibleAssets =>
            Delta.UpdatedFungibleAssets;

        /// <inheritdoc/>
        public IImmutableSet<(Address, Currency)> TotalUpdatedFungibleAssets =>
            TotalUpdatedFungibles.Keys.ToImmutableHashSet();

        [Pure]
        public IImmutableSet<Currency> TotalSupplyUpdatedCurrencies =>
            Delta.UpdatedTotalSupplyCurrencies;

        public IImmutableDictionary<(Address, Currency), BigInteger> TotalUpdatedFungibles
            { get; protected set; }

        private AccountStateGetter StateGetter { get; set; }

        private AccountBalanceGetter BalanceGetter { get; set; }

        private TotalSupplyGetter TotalSupplyGetter { get; set; }

        private ValidatorSetGetter ValidatorSetGetter { get; set; }

        /// <inheritdoc/>
        [Pure]
        IValue? IAccountStateView.GetState(Address address)
        {
            ActionContext.GetStateTimer.Value?.Start();
            ActionContext.GetStateCount.Value += 1;
            var state = Delta.States.TryGetValue(address, out IValue? value)
                ? value
                : StateGetter(new[] { address })[0];
            ActionContext.GetStateTimer.Value?.Stop();
            return state;
        }

        /// <inheritdoc cref="IAccountStateView.GetStates(IReadOnlyList{Address})"/>
        [Pure]
        IReadOnlyList<IValue?> IAccountStateView.GetStates(IReadOnlyList<Address> addresses)
        {
            ActionContext.GetStateTimer.Value?.Start();
            int length = addresses.Count;
            ActionContext.GetStateCount.Value += length;
            IValue?[] values = new IValue?[length];
            var notFoundIndices = new List<int>(length);
            for (int i = 0; i < length; i++)
            {
                Address address = addresses[i];
                if (Delta.States.TryGetValue(address, out IValue? updatedValue))
                {
                    values[i] = updatedValue;
                }
                else
                {
                    notFoundIndices.Add(i);
                }
            }

            if (notFoundIndices.Count > 0)
            {
                IReadOnlyList<IValue?> restValues = StateGetter(
                    notFoundIndices.Select(index => addresses[index]).ToArray());
                foreach ((var v, var i) in notFoundIndices.Select((v, i) => (v, i)))
                {
                    values[v] = restValues[i];
                }
            }

            ActionContext.GetStateTimer.Value?.Stop();
            return values;
        }

        /// <inheritdoc/>
        [Pure]
        IAccountStateDelta IAccountStateDelta.SetState(Address address, IValue state) =>
            UpdateStates(Delta.States.SetItem(address, state));

        /// <inheritdoc/>
        [Pure]
        public FungibleAssetValue GetBalance(Address address, Currency currency) =>
            GetBalance(address, currency, Delta.Fungibles);

        /// <inheritdoc/>
        [Pure]
        public FungibleAssetValue GetTotalSupply(Currency currency)
        {
            if (!currency.TotalSupplyTrackable)
            {
                throw TotalSupplyNotTrackableException.WithDefaultMessage(currency);
            }

            // Return dirty state if it exists.
            if (Delta.TotalSupplies.TryGetValue(currency, out BigInteger totalSupplyValue))
            {
                return FungibleAssetValue.FromRawValue(currency, totalSupplyValue);
            }

            return TotalSupplyGetter(currency);
        }

        /// <inheritdoc/>
        [Pure]
        public virtual IAccountStateDelta MintAsset(
            IActionContext context, Address recipient, FungibleAssetValue value)
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

            FungibleAssetValue balance = GetBalance(recipient, currency);
            (Address, Currency) assetKey = (recipient, currency);
            BigInteger rawBalance = (balance + value).RawValue;

            if (currency.TotalSupplyTrackable)
            {
                var currentTotalSupply = GetTotalSupply(currency);
                if (currency.MaximumSupply < currentTotalSupply + value)
                {
                    var msg = $"The amount {value} attempted to be minted added to the current"
                              + $" total supply of {currentTotalSupply} exceeds the"
                              + $" maximum allowed supply of {currency.MaximumSupply}.";
                    throw new SupplyOverflowException(msg, value);
                }

                return UpdateFungibleAssets(
                    Delta.Fungibles.SetItem(assetKey, rawBalance),
                    TotalUpdatedFungibles.SetItem(assetKey, rawBalance),
                    Delta.TotalSupplies.SetItem(currency, (currentTotalSupply + value).RawValue)
                );
            }

            return UpdateFungibleAssets(
                Delta.Fungibles.SetItem(assetKey, rawBalance),
                TotalUpdatedFungibles.SetItem(assetKey, rawBalance)
            );
        }

        /// <inheritdoc/>
        [Pure]
        public virtual IAccountStateDelta TransferAsset(
            IActionContext context,
            Address sender,
            Address recipient,
            FungibleAssetValue value,
            bool allowNegativeBalance = false) => context.BlockProtocolVersion > 0
                ? TransferAssetV1(sender, recipient, value, allowNegativeBalance)
                : TransferAssetV0(sender, recipient, value, allowNegativeBalance);

        /// <inheritdoc/>
        [Pure]
        public virtual IAccountStateDelta BurnAsset(
            IActionContext context, Address owner, FungibleAssetValue value)
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

            FungibleAssetValue balance = GetBalance(owner, currency);

            if (balance < value)
            {
                msg = $"The account {owner}'s balance of {currency} is insufficient to burn: " +
                      $"{balance} < {value}.";
                throw new InsufficientBalanceException(msg, owner, balance);
            }

            (Address, Currency) assetKey = (owner, currency);
            BigInteger rawBalance = (balance - value).RawValue;
            if (currency.TotalSupplyTrackable)
            {
                return UpdateFungibleAssets(
                    Delta.Fungibles.SetItem(assetKey, rawBalance),
                    TotalUpdatedFungibles.SetItem(assetKey, rawBalance),
                    Delta.TotalSupplies.SetItem(
                        currency,
                        (GetTotalSupply(currency) - value).RawValue)
                );
            }

            return UpdateFungibleAssets(
                Delta.Fungibles.SetItem(assetKey, rawBalance),
                TotalUpdatedFungibles.SetItem(assetKey, rawBalance)
            );
        }

        /// <summary>
        /// Creates a default null state delta.
        /// </summary>
        /// <param name="accountStateGetter">A view to the &#x201c;epoch&#x201d; states.</param>
        /// <param name="accountBalanceGetter">A view to the &#x201c;epoch&#x201d; asset balances.
        /// </param>
        /// <param name="totalSupplyGetter">A view to the &#x201c;epoch&#x201d; total supplies of
        /// currencies.</param>
        /// <param name="validatorSetGetter">A view to the &#x201c;epoch&#x201d; validator
        /// set.</param>
        /// <returns>A null state delta of type <see cref="AccountStateDelta"/>.</returns>
        internal static IAccountStateDelta Create(
            AccountStateGetter accountStateGetter,
            AccountBalanceGetter accountBalanceGetter,
            TotalSupplyGetter totalSupplyGetter,
            ValidatorSetGetter validatorSetGetter)
        {
            return new AccountStateDelta(
                accountStateGetter,
                accountBalanceGetter,
                totalSupplyGetter,
                validatorSetGetter);
        }

        /// <summary>
        /// Creates a default null state delta from <paramref name="stateDelta"/>.
        /// </summary>
        /// <param name="stateDelta">The previous <see cref="IAccountStateDelta"/> to use.</param>
        /// <returns>A null state delta made from <paramref name="stateDelta"/>.</returns>
        internal static IAccountStateDelta Create(
            IAccountStateDelta stateDelta) =>
            new AccountStateDelta(
                stateDelta.GetStates,
                stateDelta.GetBalance,
                stateDelta.GetTotalSupply,
                stateDelta.GetValidatorSet);

        /// <summary>
        /// Creates a null state delta while inheriting <paramref name="stateDelta"/>s
        /// total updated fungibles.
        /// </summary>
        /// <param name="stateDelta">The previous <see cref="IAccountStateDelta"/> to use.</param>
        /// <returns>A null state delta that is of the same type as <paramref name="stateDelta"/>.
        /// </returns>
        /// <exception cref="ArgumentException">Thrown if given <paramref name="stateDelta"/>
        /// is not <see cref="AccountStateDelta"/>.
        /// </exception>
        /// <remarks>
        /// This inherits <paramref name="stateDelta"/>'s
        /// <see cref="IAccountStateDelta.TotalUpdatedFungibleAssets"/>.
        /// </remarks>
        internal static IAccountStateDelta Flush(
            IAccountStateDelta stateDelta)
        {
            if (stateDelta is AccountStateDelta impl)
            {
                return new AccountStateDelta(
                    stateDelta.GetStates,
                    stateDelta.GetBalance,
                    stateDelta.GetTotalSupply,
                    stateDelta.GetValidatorSet)
                    {
                        TotalUpdatedFungibles = impl.TotalUpdatedFungibles,
                    };
            }
            else
            {
                throw new ArgumentException(
                    $"Unknown type for {nameof(stateDelta)}: {stateDelta.GetType()}");
            }
        }

        /// <summary>
        /// Returns the validator set.
        /// </summary>
        /// <returns>The validator set of type <see cref="ValidatorSet"/>.
        /// </returns>
        [Pure]
        internal ValidatorSet GetValidatorSet() =>
            Delta.ValidatorSet ?? ValidatorSetGetter();

        /// <summary>
        /// Sets <paramref name="validator"/> to the stored <see cref="ValidatorSet"/>.
        /// If 0 is given as its power, removes the validator from the <see cref="ValidatorSet"/>.
        /// </summary>
        /// <param name="validator">The <see cref="Validator"/> instance to write.</param>
        /// <returns>A new <see cref="IAccountStateDelta"/> instance with
        /// <paramref name="validator"/> set.</returns>
        [Pure]
        internal IAccountStateDelta SetValidator(Validator validator)
        {
            return UpdateValidatorSet(GetValidatorSet().Update(validator));
        }

        [Pure]
        private FungibleAssetValue GetBalance(
            Address address,
            Currency currency,
            IImmutableDictionary<(Address, Currency), BigInteger> balances) =>
            balances.TryGetValue((address, currency), out BigInteger balance)
                ? FungibleAssetValue.FromRawValue(currency, balance)
                : BalanceGetter(address, currency);

        [Pure]
        private AccountStateDelta UpdateStates(
            IImmutableDictionary<Address, IValue> updatedStates
        ) =>
            new AccountStateDelta(
                StateGetter,
                BalanceGetter,
                TotalSupplyGetter,
                ValidatorSetGetter)
            {
                Delta = new AccountDelta(
                    updatedStates,
                    Delta.Fungibles,
                    Delta.TotalSupplies,
                    Delta.ValidatorSet),
                TotalUpdatedFungibles = TotalUpdatedFungibles,
            };

        [Pure]
        private AccountStateDelta UpdateFungibleAssets(
            IImmutableDictionary<(Address, Currency), BigInteger> updatedFungibleAssets,
            IImmutableDictionary<(Address, Currency), BigInteger> totalUpdatedFungibles
        ) =>
            UpdateFungibleAssets(
                updatedFungibleAssets,
                totalUpdatedFungibles,
                Delta.TotalSupplies);

        [Pure]
        private AccountStateDelta UpdateFungibleAssets(
            IImmutableDictionary<(Address, Currency), BigInteger> updatedFungibleAssets,
            IImmutableDictionary<(Address, Currency), BigInteger> totalUpdatedFungibles,
            IImmutableDictionary<Currency, BigInteger> updatedTotalSupply
        ) =>
            new AccountStateDelta(
                StateGetter,
                BalanceGetter,
                TotalSupplyGetter,
                ValidatorSetGetter)
            {
                Delta = new AccountDelta(
                    Delta.States,
                    updatedFungibleAssets,
                    updatedTotalSupply,
                    Delta.ValidatorSet),
                TotalUpdatedFungibles = totalUpdatedFungibles,
            };

        [Pure]
        private AccountStateDelta UpdateValidatorSet(
            ValidatorSet updatedValidatorSet
        ) =>
            new AccountStateDelta(
                StateGetter,
                BalanceGetter,
                TotalSupplyGetter,
                ValidatorSetGetter)
            {
                Delta = new AccountDelta(
                    Delta.States,
                    Delta.Fungibles,
                    Delta.TotalSupplies,
                    updatedValidatorSet),
                TotalUpdatedFungibles = TotalUpdatedFungibles,
            };

        [Pure]
        private IAccountStateDelta TransferAssetV0(
            Address sender,
            Address recipient,
            FungibleAssetValue value,
            bool allowNegativeBalance = false)
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
                Delta.Fungibles
                    .SetItem((sender, currency), (senderBalance - value).RawValue)
                    .SetItem((recipient, currency), (recipientBalance + value).RawValue),
                TotalUpdatedFungibles
                    .SetItem((sender, currency), (senderBalance - value).RawValue)
                    .SetItem((recipient, currency), (recipientBalance + value).RawValue)
            );
        }

        [Pure]
        private IAccountStateDelta TransferAssetV1(
            Address sender,
            Address recipient,
            FungibleAssetValue value,
            bool allowNegativeBalance = false)
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

            if (!allowNegativeBalance && senderBalance < value)
            {
                var msg = $"The account {sender}'s balance of {currency} is insufficient to " +
                          $"transfer: {senderBalance} < {value}.";
                throw new InsufficientBalanceException(msg, sender, senderBalance);
            }

            (Address, Currency) senderAssetKey = (sender, currency);
            BigInteger senderRawBalance = (senderBalance - value).RawValue;

            IImmutableDictionary<(Address, Currency), BigInteger> updatedFungibleAssets =
                Delta.Fungibles.SetItem(senderAssetKey, senderRawBalance);
            IImmutableDictionary<(Address, Currency), BigInteger> totalUpdatedFungibles =
                TotalUpdatedFungibles.SetItem(senderAssetKey, senderRawBalance);

            FungibleAssetValue recipientBalance = GetBalance(
                recipient,
                currency,
                updatedFungibleAssets);
            (Address, Currency) recipientAssetKey = (recipient, currency);
            BigInteger recipientRawBalance = (recipientBalance + value).RawValue;

            return UpdateFungibleAssets(
                updatedFungibleAssets.SetItem(recipientAssetKey, recipientRawBalance),
                totalUpdatedFungibles.SetItem(recipientAssetKey, recipientRawBalance)
            );
        }
    }
}
