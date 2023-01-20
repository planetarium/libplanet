using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Diagnostics.Contracts;
using System.Linq;
using System.Numerics;
using Bencodex.Types;
using Libplanet.Assets;
using Libplanet.Consensus;
using Serilog;

namespace Libplanet.Action
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
        /// <param name="signer">A signer address. Used for authenticating if a signer is allowed
        /// to mint a currency.</param>
        internal AccountStateDeltaImpl(
            AccountStateGetter accountStateGetter,
            AccountBalanceGetter accountBalanceGetter,
            TotalSupplyGetter totalSupplyGetter,
            ValidatorSetGetter validatorSetGetter,
            Address signer
        )
        {
            StateGetter = accountStateGetter;
            BalanceGetter = accountBalanceGetter;
            TotalSupplyGetter = totalSupplyGetter;
            ValidatorSetGetter = validatorSetGetter;
            UpdatedStates = ImmutableDictionary<Address, IValue>.Empty;
            UpdatedFungibles = ImmutableDictionary<(Address, Currency), BigInteger>.Empty;
            UpdatedTotalSupply = ImmutableDictionary<Currency, BigInteger>.Empty;
            Signer = signer;
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
            IAccountStateDelta.UpdatedFungibleAssets =>
            UpdatedFungibles.GroupBy(kv => kv.Key.Item1).ToImmutableDictionary(
                g => g.Key,
                g => (IImmutableSet<Currency>)g.Select(kv => kv.Key.Item2).ToImmutableHashSet()
            );

        [Pure]
        IImmutableSet<Currency> IAccountStateDelta.TotalSupplyUpdatedCurrencies =>
            UpdatedTotalSupply.Keys.ToImmutableHashSet();

        protected AccountStateGetter StateGetter { get; set; }

        protected AccountBalanceGetter BalanceGetter { get; set; }

        protected TotalSupplyGetter TotalSupplyGetter { get; set; }

        protected ValidatorSetGetter ValidatorSetGetter { get; set; }

        protected Address Signer { get; set; }

        protected IImmutableDictionary<Address, IValue> UpdatedStates { get; set; }

        protected IImmutableDictionary<(Address, Currency), BigInteger> UpdatedFungibles
        {
            get;
            set;
        }

        protected IImmutableDictionary<Currency, BigInteger> UpdatedTotalSupply { get; set; }

        protected ValidatorSet? UpdatedValidatorSet { get; set; } = null;

        /// <inheritdoc/>
        [Pure]
        IValue? IAccountStateView.GetState(Address address) =>
            UpdatedStates.TryGetValue(address, out IValue? value)
                ? value
                : StateGetter(new[] { address })[0];

        /// <inheritdoc cref="IAccountStateView.GetStates(IReadOnlyList{Address})"/>
        [Pure]
        IReadOnlyList<IValue?> IAccountStateView.GetStates(IReadOnlyList<Address> addresses)
        {
            int length = addresses.Count;
            IValue?[] values = new IValue?[length];
            var notFound = new List<Address>(length);
            for (int i = 0; i < length; i++)
            {
                Address address = addresses[i];
                if (UpdatedStates.TryGetValue(address, out IValue? v))
                {
                    values[i] = v;
                    continue;
                }

                notFound.Add(address);
            }

            IReadOnlyList<IValue?> restValues = StateGetter(notFound);
            for (int i = 0, j = 0; i < length && j < notFound.Count; i++)
            {
                if (addresses[i].Equals(notFound[j]))
                {
                    values[i] = restValues[j];
                    j++;
                }
            }

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
        public virtual IAccountStateDelta MintAsset(Address recipient, FungibleAssetValue value)
        {
            if (value.Sign <= 0)
            {
                throw new ArgumentOutOfRangeException(
                    nameof(value),
                    "The value to mint has to be greater than zero."
                );
            }

            Currency currency = value.Currency;
            if (!currency.AllowsToMint(Signer))
            {
                throw new CurrencyPermissionException(
                    $"The account {Signer} has no permission to mint the currency {currency}.",
                    Signer,
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
                    UpdatedFungibles.SetItem((recipient, currency), (balance + value).RawValue),
                    UpdatedTotalSupply.SetItem(currency, (currentTotalSupply + value).RawValue)
                );
            }

            return UpdateFungibleAssets(
                UpdatedFungibles.SetItem((recipient, currency), (balance + value).RawValue)
            );
        }

        /// <inheritdoc/>
        [Pure]
        public virtual IAccountStateDelta TransferAsset(
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

            if (!allowNegativeBalance && senderBalance < value)
            {
                var msg = $"The account {sender}'s balance of {currency} is insufficient to " +
                          $"transfer: {senderBalance} < {value}.";
                throw new InsufficientBalanceException(msg, sender, senderBalance);
            }

            IImmutableDictionary<(Address, Currency), BigInteger> updatedFungibleAssets =
                UpdatedFungibles
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

        /// <inheritdoc/>
        [Pure]
        public virtual IAccountStateDelta BurnAsset(Address owner, FungibleAssetValue value)
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
            if (!currency.AllowsToMint(Signer))
            {
                msg = $"The account {Signer} has no permission to burn assets of " +
                      $"the currency {currency}.";
                throw new CurrencyPermissionException(msg, Signer, currency);
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
                    UpdatedFungibles.SetItem((owner, currency), (balance - value).RawValue),
                    UpdatedTotalSupply.SetItem(
                        currency,
                        (GetTotalSupply(currency) - value).RawValue)
                );
            }

            return UpdateFungibleAssets(
                UpdatedFungibles.SetItem((owner, currency), (balance - value).RawValue)
            );
        }

        /// <inheritdoc/>
        [Pure]
        public IAccountStateDelta SetValidator(Validator validator)
        {
            Log.Debug(
                "Update validator set with validator {PublicKey} {Power}",
                validator.PublicKey,
                validator.Power);
            return UpdateValidatorSet(GetValidatorSet().Update(validator));
        }

        /// <summary>
        /// Creates a null delta from the given <paramref name="accountStateGetter"/>,
        /// <paramref name="accountBalanceGetter"/>, and <paramref name="totalSupplyGetter"/>,
        /// with a subtype of <see cref="AccountStateDeltaImpl"/> that corresponds to the
        /// <paramref name="protocolVersion"/>.
        /// </summary>
        /// <param name="protocolVersion">The protocol version of which to create a delta.</param>
        /// <param name="accountStateGetter">A view to the &#x201c;epoch&#x201d; states.</param>
        /// <param name="accountBalanceGetter">A view to the &#x201c;epoch&#x201d; asset balances.
        /// </param>
        /// <param name="totalSupplyGetter">A view to the &#x201c;epoch&#x201d; total supplies of
        /// currencies.</param>
        /// <param name="validatorSetGetter">A view to the &#x201c;epoch&#x201d; validator
        /// set.</param>
        /// <param name="signer">A signer address. Used for authenticating if a signer is allowed
        /// to mint a currency.</param>
        /// <returns>A instance of a subtype of <see cref="AccountStateDeltaImpl"/> which
        /// corresponds to the <paramref name="protocolVersion"/>.</returns>
        [Pure]
        internal static AccountStateDeltaImpl ChooseVersion(
            int protocolVersion,
            AccountStateGetter accountStateGetter,
            AccountBalanceGetter accountBalanceGetter,
            TotalSupplyGetter totalSupplyGetter,
            ValidatorSetGetter validatorSetGetter,
            Address signer) => protocolVersion > 0
            ? new AccountStateDeltaImpl(
                accountStateGetter,
                accountBalanceGetter,
                totalSupplyGetter,
                validatorSetGetter,
                signer)
            : new AccountStateDeltaImplV0(
                accountStateGetter,
                accountBalanceGetter,
                totalSupplyGetter,
                validatorSetGetter,
                signer);

        [Pure]
        protected virtual FungibleAssetValue GetBalance(
            Address address,
            Currency currency,
            IImmutableDictionary<(Address, Currency), BigInteger> balances) =>
            balances.TryGetValue((address, currency), out BigInteger balance)
                ? FungibleAssetValue.FromRawValue(currency, balance)
                : BalanceGetter(address, currency);

        [Pure]
        protected virtual AccountStateDeltaImpl UpdateStates(
            IImmutableDictionary<Address, IValue> updatedStates
        ) =>
            new AccountStateDeltaImpl(
                StateGetter,
                BalanceGetter,
                TotalSupplyGetter,
                ValidatorSetGetter,
                Signer)
            {
                UpdatedStates = updatedStates,
                UpdatedFungibles = UpdatedFungibles,
                UpdatedTotalSupply = UpdatedTotalSupply,
                UpdatedValidatorSet = UpdatedValidatorSet,
            };

        [Pure]
        protected virtual AccountStateDeltaImpl UpdateFungibleAssets(
            IImmutableDictionary<(Address, Currency), BigInteger> updatedFungibleAssets
        ) =>
            UpdateFungibleAssets(updatedFungibleAssets, UpdatedTotalSupply);

        [Pure]
        protected virtual AccountStateDeltaImpl UpdateFungibleAssets(
            IImmutableDictionary<(Address, Currency), BigInteger> updatedFungibleAssets,
            IImmutableDictionary<Currency, BigInteger> updatedTotalSupply
        ) =>
            new AccountStateDeltaImpl(
                StateGetter,
                BalanceGetter,
                TotalSupplyGetter,
                ValidatorSetGetter,
                Signer)
            {
                UpdatedStates = UpdatedStates,
                UpdatedFungibles = updatedFungibleAssets,
                UpdatedTotalSupply = updatedTotalSupply,
                UpdatedValidatorSet = UpdatedValidatorSet,
            };

        [Pure]
        protected virtual AccountStateDeltaImpl UpdateValidatorSet(
            ValidatorSet updatedValidatorSet
        ) =>
            new AccountStateDeltaImpl(
                StateGetter,
                BalanceGetter,
                TotalSupplyGetter,
                ValidatorSetGetter,
                Signer)
            {
                UpdatedStates = UpdatedStates,
                UpdatedFungibles = UpdatedFungibles,
                UpdatedTotalSupply = UpdatedTotalSupply,
                UpdatedValidatorSet = updatedValidatorSet,
            };
    }
}
