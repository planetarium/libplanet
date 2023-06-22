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
            UpdatedStates = ImmutableDictionary<Address, IValue>.Empty;
            UpdatedFungibles = ImmutableDictionary<(Address, Currency), BigInteger>.Empty;
            UpdatedTotalSupply = ImmutableDictionary<Currency, BigInteger>.Empty;
            TotalUpdatedFungibles = ImmutableDictionary<(Address, Currency), BigInteger>.Empty;
        }

        /// <inheritdoc/>
        [Pure]
        IImmutableSet<Address> IAccountStateDelta.UpdatedAddresses =>
            UpdatedStates.Keys.ToImmutableHashSet().Union(
                UpdatedFungibles.Select(kv => kv.Key.Item1)
            );

        /// <inheritdoc/>
        IImmutableSet<Address> IAccountStateDelta.StateUpdatedAddresses =>
            UpdatedStates.Keys.ToImmutableHashSet();

        /// <inheritdoc/>
        IImmutableDictionary<Address, IImmutableSet<Currency>>
            IAccountStateDelta.UpdatedFungibleAssets => UpdatedFungibles
                .GroupBy(kv => kv.Key.Item1, kv => kv.Key.Item2)
                .ToImmutableDictionary(
                    group => group.Key,
                    group => (IImmutableSet<Currency>)group.ToImmutableHashSet());

        /// <inheritdoc/>
        IImmutableDictionary<Address, IImmutableSet<Currency>>
            IAccountStateDelta.TotalUpdatedFungibleAssets => TotalUpdatedFungibles
                .GroupBy(kv => kv.Key.Item1, kv => kv.Key.Item2)
                .ToImmutableDictionary(
                    group => group.Key,
                    group => (IImmutableSet<Currency>)group.ToImmutableHashSet());

        [Pure]
        IImmutableSet<Currency> IAccountStateDelta.TotalSupplyUpdatedCurrencies =>
            UpdatedTotalSupply.Keys.ToImmutableHashSet();

        public IImmutableDictionary<(Address, Currency), BigInteger> TotalUpdatedFungibles
            { get; protected set; }

        private AccountStateGetter StateGetter { get; set; }

        private AccountBalanceGetter BalanceGetter { get; set; }

        private TotalSupplyGetter TotalSupplyGetter { get; set; }

        private ValidatorSetGetter ValidatorSetGetter { get; set; }

        private Address Signer => default(Address);

        private IImmutableDictionary<Address, IValue> UpdatedStates { get; set; }

        private IImmutableDictionary<(Address, Currency), BigInteger> UpdatedFungibles
            { get; set; }

        private IImmutableDictionary<Currency, BigInteger> UpdatedTotalSupply { get; set; }

        private ValidatorSet? UpdatedValidatorSet { get; set; } = null;

        /// <inheritdoc/>
        [Pure]
        IValue? IAccountStateView.GetState(Address address)
        {
            ActionContext.GetStateTimer.Value?.Start();
            ActionContext.GetStateCount.Value += 1;
            var state = UpdatedStates.TryGetValue(address, out IValue? value)
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
                if (UpdatedStates.TryGetValue(address, out IValue? updatedValue))
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
            UpdateStates(UpdatedStates.SetItem(address, state));

        /// <inheritdoc/>
        [Pure]
        public virtual FungibleAssetValue GetBalance(Address address, Currency currency) =>
            GetBalance(address, currency, UpdatedFungibles);

        /// <inheritdoc/>
        [Pure]
        public virtual FungibleAssetValue GetTotalSupply(Currency currency)
        {
            if (!currency.TotalSupplyTrackable)
            {
                throw TotalSupplyNotTrackableException.WithDefaultMessage(currency);
            }

            // Return dirty state if it exists.
            if (UpdatedTotalSupply.TryGetValue(currency, out BigInteger totalSupplyValue))
            {
                return FungibleAssetValue.FromRawValue(currency, totalSupplyValue);
            }

            return TotalSupplyGetter(currency);
        }

        /// <inheritdoc/>
        [Pure]
        public virtual ValidatorSet GetValidatorSet() =>
            UpdatedValidatorSet ?? ValidatorSetGetter();

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
                    UpdatedFungibles.SetItem(assetKey, rawBalance),
                    TotalUpdatedFungibles.SetItem(assetKey, rawBalance),
                    UpdatedTotalSupply.SetItem(currency, (currentTotalSupply + value).RawValue)
                );
            }

            return UpdateFungibleAssets(
                UpdatedFungibles.SetItem(assetKey, rawBalance),
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
                    UpdatedFungibles.SetItem(assetKey, rawBalance),
                    TotalUpdatedFungibles.SetItem(assetKey, rawBalance),
                    UpdatedTotalSupply.SetItem(
                        currency,
                        (GetTotalSupply(currency) - value).RawValue)
                );
            }

            return UpdateFungibleAssets(
                UpdatedFungibles.SetItem(assetKey, rawBalance),
                TotalUpdatedFungibles.SetItem(assetKey, rawBalance)
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
        /// <returns>A null delta of type <see cref="AccountStateDeltaImpl"/>
        /// with <see langword="default"/> <see cref="Address"/> as its
        /// <see cref="AccountStateDeltaImpl.Signer"/>.</returns>
        /// <remarks>
        /// This is not immediately usable.  Choose its proper signer with
        /// <see cref="ChooseSigner"/> before use.
        /// </remarks>
        /// <seealso cref="ChooseSigner"/>
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
        /// Creates a default null delta from <paramref name="delta"/>.
        /// </summary>
        /// <param name="delta">The previous <see cref="IAccountStateDelta"/> to use.</param>
        /// <returns>A null delta made from <paramref name="delta"/>.</returns>
        internal static IAccountStateDelta Create(
            IAccountStateDelta delta) =>
            new AccountStateDeltaImpl(
                delta.GetStates,
                delta.GetBalance,
                delta.GetTotalSupply,
                delta.GetValidatorSet);

        /// <summary>
        /// Creates a null delta with given <paramref name="signer"/> while inheriting
        /// <paramref name="delta"/>s total updated fungibles.
        /// </summary>
        /// <param name="delta">The previous <see cref="IAccountStateDelta"/> to use.</param>
        /// <param name="signer">The <see cref="Address"/> to set.</param>
        /// <returns>A null delta with given <paramref name="signer"/> that is of the same type
        /// as <paramref name="delta"/>.</returns>
        /// <exception cref="ArgumentException">Thrown if given <paramref name="delta"/>
        /// is not <see cref="AccountStateDeltaImpl"/>.
        /// </exception>
        /// <remarks>
        /// This inherits <paramref name="delta"/>'s
        /// <see cref="IAccountStateDelta.TotalUpdatedFungibleAssets"/>.
        /// </remarks>
        internal static IAccountStateDelta ChooseSigner(
            IAccountStateDelta delta,
            Address signer)
        {
            if (delta is AccountStateDeltaImpl impl)
            {
                return new AccountStateDeltaImpl(
                    delta.GetStates,
                    delta.GetBalance,
                    delta.GetTotalSupply,
                    delta.GetValidatorSet)
                    {
                        TotalUpdatedFungibles = impl.TotalUpdatedFungibles,
                    };
            }
            else
            {
                throw new ArgumentException(
                    $"Unknown type for {nameof(delta)}: {delta.GetType()}");
            }
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
        private AccountStateDeltaImpl UpdateStates(
            IImmutableDictionary<Address, IValue> updatedStates
        ) =>
            new AccountStateDeltaImpl(
                StateGetter,
                BalanceGetter,
                TotalSupplyGetter,
                ValidatorSetGetter)
            {
                UpdatedStates = updatedStates,
                UpdatedFungibles = UpdatedFungibles,
                UpdatedTotalSupply = UpdatedTotalSupply,
                UpdatedValidatorSet = UpdatedValidatorSet,
                TotalUpdatedFungibles = TotalUpdatedFungibles,
            };

        [Pure]
        private AccountStateDeltaImpl UpdateFungibleAssets(
            IImmutableDictionary<(Address, Currency), BigInteger> updatedFungibleAssets,
            IImmutableDictionary<(Address, Currency), BigInteger> totalUpdatedFungibles
        ) =>
            UpdateFungibleAssets(
                updatedFungibleAssets,
                totalUpdatedFungibles,
                UpdatedTotalSupply
            );

        [Pure]
        private AccountStateDeltaImpl UpdateFungibleAssets(
            IImmutableDictionary<(Address, Currency), BigInteger> updatedFungibleAssets,
            IImmutableDictionary<(Address, Currency), BigInteger> totalUpdatedFungibles,
            IImmutableDictionary<Currency, BigInteger> updatedTotalSupply
        ) =>
            new AccountStateDeltaImpl(
                StateGetter,
                BalanceGetter,
                TotalSupplyGetter,
                ValidatorSetGetter)
            {
                UpdatedStates = UpdatedStates,
                UpdatedFungibles = updatedFungibleAssets,
                UpdatedTotalSupply = updatedTotalSupply,
                UpdatedValidatorSet = UpdatedValidatorSet,
                TotalUpdatedFungibles = totalUpdatedFungibles,
            };

        [Pure]
        private AccountStateDeltaImpl UpdateValidatorSet(
            ValidatorSet updatedValidatorSet
        ) =>
            new AccountStateDeltaImpl(
                StateGetter,
                BalanceGetter,
                TotalSupplyGetter,
                ValidatorSetGetter)
            {
                UpdatedStates = UpdatedStates,
                UpdatedFungibles = UpdatedFungibles,
                UpdatedTotalSupply = UpdatedTotalSupply,
                UpdatedValidatorSet = updatedValidatorSet,
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
                UpdatedFungibles
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
                UpdatedFungibles.SetItem(senderAssetKey, senderRawBalance);
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
