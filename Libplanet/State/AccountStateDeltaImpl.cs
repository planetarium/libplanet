using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Diagnostics.Contracts;
using System.Linq;
using System.Numerics;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Assets;
using Libplanet.Blocks;
using Libplanet.Consensus;

namespace Libplanet.State
{
    /// <summary>
    /// An internal implementation of <see cref="IAccountStateDelta"/>.
    /// </summary>
    [Pure]
    internal class AccountStateDeltaImpl : IValidatorSupportStateDelta, IAccountStateDelta
    {
        /// <summary>
        /// Creates a null delta from the given <paramref name="accountStateGetter"/>.
        /// </summary>
        /// <param name="accountStateGetter">A view to the &#x201c;epoch&#x201d; states.</param>
        /// <param name="accountBalanceGetter">A view to the &#x201c;epoch&#x201d; asset balances.
        /// </param>
        /// <param name="totalSupplyGetter">A view to the &#x201c;epoch&#x201d; total supplies of
        /// currencies.</param>
        /// <param name="validatorSetGetter">A view to the &#x201c;epoch&#x201d; validator
        /// set.</param>
        internal AccountStateDeltaImpl(
            AccountStateGetter accountStateGetter,
            AccountBalanceGetter accountBalanceGetter,
            TotalSupplyGetter totalSupplyGetter,
            ValidatorSetGetter validatorSetGetter)
        {
            StateGetter = accountStateGetter;
            BalanceGetter = accountBalanceGetter;
            TotalSupplyGetter = totalSupplyGetter;
            ValidatorSetGetter = validatorSetGetter;
            TotalUpdatedFungibles = ImmutableDictionary<(Address, Currency), BigInteger>.Empty;
            Delta = new Delta();
        }

        public IDelta Delta { get; protected set; }

        /// <inheritdoc/>
        [Pure]
        public IImmutableSet<Address> UpdatedAddresses => Delta.UpdatedAddresses;

        /// <inheritdoc/>
        public IImmutableSet<Address> StateUpdatedAddresses => Delta.StateUpdatedAddresses;

        public IImmutableSet<Address> FungibleUpdatedAddresses => Delta.FungibleUpdatedAddresses;

        /// <inheritdoc/>
        public IImmutableSet<(Address, Currency)> UpdatedFungibleAssets =>
            Delta.UpdatedFungibleAssets;

        [Pure]
        public IImmutableSet<Currency> UpdatedTotalSupplyCurrencies =>
            Delta.UpdatedTotalSupplyCurrencies;

        public IImmutableDictionary<Address, IValue> StatesDelta => Delta.States;

        public IImmutableDictionary<(Address, Currency), BigInteger> FungiblesDelta =>
            Delta.Fungibles;

        public IImmutableDictionary<Currency, BigInteger> TotalSuppliesDelta =>
            Delta.TotalSupplies;

        public ValidatorSet? ValidatorSetDelta => Delta.ValidatorSet;

        /// <inheritdoc/>
        public IImmutableDictionary<Address, IImmutableSet<Currency>> TotalUpdatedFungibleAssets =>
            TotalUpdatedFungibles
                .GroupBy(kv => kv.Key.Item1, kv => kv.Key.Item2)
                .ToImmutableDictionary(
                    group => group.Key,
                    group => (IImmutableSet<Currency>)group.ToImmutableHashSet());

        public IImmutableDictionary<(Address, Currency), BigInteger> TotalUpdatedFungibles
        { get; protected set; }

        protected AccountStateGetter StateGetter { get; set; }

        protected AccountBalanceGetter BalanceGetter { get; set; }

        protected TotalSupplyGetter TotalSupplyGetter { get; set; }

        protected ValidatorSetGetter ValidatorSetGetter { get; set; }

        /// <inheritdoc/>
        [Pure]
        IValue? IAccountStateView.GetState(Address address)
        {
            ActionContext.GetStateTimer.Value?.Start();
            ActionContext.GetStateCount.Value += 1;
            var state = StatesDelta.TryGetValue(address, out IValue? value)
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
                if (StatesDelta.TryGetValue(address, out IValue? updatedValue))
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
            UpdateStates(StatesDelta.SetItem(address, state));

        /// <inheritdoc/>
        [Pure]
        public virtual FungibleAssetValue GetBalance(Address address, Currency currency) =>
            GetBalance(address, currency, FungiblesDelta);

        /// <inheritdoc/>
        [Pure]
        public virtual FungibleAssetValue GetTotalSupply(Currency currency)
        {
            if (!currency.TotalSupplyTrackable)
            {
                throw TotalSupplyNotTrackableException.WithDefaultMessage(currency);
            }

            // Return dirty state if it exists.
            if (TotalSuppliesDelta.TryGetValue(currency, out BigInteger totalSupplyValue))
            {
                return FungibleAssetValue.FromRawValue(currency, totalSupplyValue);
            }

            return TotalSupplyGetter(currency);
        }

        /// <inheritdoc/>
        [Pure]
        public virtual ValidatorSet GetValidatorSet() =>
            ValidatorSetDelta ?? ValidatorSetGetter();

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
                    FungiblesDelta.SetItem((recipient, currency), (balance + value).RawValue),
                    TotalSuppliesDelta.SetItem(currency, (currentTotalSupply + value).RawValue)
                );
            }

            return UpdateFungibleAssets(
                FungiblesDelta.SetItem((recipient, currency), (balance + value).RawValue)
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

            if (currency.TotalSupplyTrackable)
            {
                return UpdateFungibleAssets(
                    FungiblesDelta.SetItem((owner, currency), (balance - value).RawValue),
                    TotalSuppliesDelta.SetItem(
                        currency,
                        (GetTotalSupply(currency) - value).RawValue)
                );
            }

            return UpdateFungibleAssets(
                FungiblesDelta.SetItem((owner, currency), (balance - value).RawValue)
            );
        }

        /// <inheritdoc/>
        [Pure]
        public IAccountStateDelta SetValidator(Validator validator)
        {
            return UpdateValidatorSet(GetValidatorSet().Update(validator));
        }

        /// <summary>
        /// Creates a default null delta.
        /// </summary>
        /// <param name="accountStateGetter">A view to the &#x201c;epoch&#x201d; states.</param>
        /// <param name="accountBalanceGetter">A view to the &#x201c;epoch&#x201d; asset balances.
        /// </param>
        /// <param name="totalSupplyGetter">A view to the &#x201c;epoch&#x201d; total supplies of
        /// currencies.</param>
        /// <param name="validatorSetGetter">A view to the &#x201c;epoch&#x201d; validator
        /// set.</param>
        /// <returns>A null <see cref="IAccountStateDelta"/> instance.</returns>
        internal static IAccountStateDelta Create(
            AccountStateGetter accountStateGetter,
            AccountBalanceGetter accountBalanceGetter,
            TotalSupplyGetter totalSupplyGetter,
            ValidatorSetGetter validatorSetGetter)
        {
            return new AccountStateDeltaImpl(
                accountStateGetter,
                accountBalanceGetter,
                totalSupplyGetter,
                validatorSetGetter);
        }

        /// <summary>
        /// Creates a default null delta from a <see cref="IBlockStates"/> as its
        /// base state.
        /// </summary>
        /// <param name="baseStates">The <see cref="IBlockStates"/> to use as
        /// the base state.</param>
        /// <returns>A null <see cref="IAccountStateDelta"/> instance.</returns>
        internal static IAccountStateDelta Create(
            IBlockStates baseStates)
        {
            return new AccountStateDeltaImpl(
                baseStates.GetStates,
                baseStates.GetBalance,
                baseStates.GetTotalSupply,
                baseStates.GetValidatorSet);
        }

        /// <summary>
        /// Creates a null delta from <paramref name="previousDelta"/> except
        /// total updated fungible assets.
        /// </summary>
        /// <param name="previousDelta">The previous <see cref="IAccountStateDelta"/> to flush.
        /// </param>
        /// <returns>A null delta created from <paramref name="previousDelta"/> except
        /// its <see cref="IAccountStateDelta.TotalUpdatedFungibleAssets"/> intact.</returns>
        internal static IAccountStateDelta Flush(
            IAccountStateDelta previousDelta)
        {
            return new AccountStateDeltaImpl(
                previousDelta.GetStates,
                previousDelta.GetBalance,
                previousDelta.GetTotalSupply,
                previousDelta.GetValidatorSet)
                {
                    TotalUpdatedFungibles =
                        ((AccountStateDeltaImpl)previousDelta).TotalUpdatedFungibles,
                };
        }

        [Pure]
        protected virtual FungibleAssetValue GetBalance(
            Address address,
            Currency currency,
            IImmutableDictionary<(Address, Currency), BigInteger> balances) =>
            balances.TryGetValue((address, currency), out BigInteger balance)
                ? FungibleAssetValue.FromRawValue(currency, balance)
                : BalanceGetter(address, currency);

        [Pure]
        protected virtual IAccountStateDelta UpdateStates(
            IImmutableDictionary<Address, IValue> statesDelta) =>
            new AccountStateDeltaImpl(
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
        protected virtual IAccountStateDelta UpdateFungibleAssets(
            IImmutableDictionary<(Address, Currency), BigInteger> fungiblesDelta
        ) =>
            UpdateFungibleAssets(fungiblesDelta, TotalSuppliesDelta);

        [Pure]
        protected virtual IAccountStateDelta UpdateFungibleAssets(
            IImmutableDictionary<(Address, Currency), BigInteger> fungiblesDelta,
            IImmutableDictionary<Currency, BigInteger> totalSuppliesDelta) =>
            new AccountStateDeltaImpl(
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
        protected virtual IAccountStateDelta UpdateValidatorSet(
            ValidatorSet validatorSetDelta) =>
            new AccountStateDeltaImpl(
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

            IImmutableDictionary<(Address, Currency), BigInteger> updatedFungibleAssets =
                FungiblesDelta
                .SetItem((sender, currency), (senderBalance - value).RawValue);

            FungibleAssetValue recipientBalance = GetBalance(
                recipient,
                currency,
                updatedFungibleAssets);

            return UpdateFungibleAssets(
                updatedFungibleAssets
                    .SetItem((recipient, currency), (recipientBalance + value).RawValue)
            );
        }
    }
}
