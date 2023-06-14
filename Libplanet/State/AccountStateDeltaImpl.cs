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
            TotalUpdatedFungibles = ImmutableDictionary<(Address, Currency), BigInteger>.Empty;
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

        protected AccountStateGetter StateGetter { get; set; }

        protected AccountBalanceGetter BalanceGetter { get; set; }

        protected TotalSupplyGetter TotalSupplyGetter { get; set; }

        protected ValidatorSetGetter ValidatorSetGetter { get; set; }

        protected Address Signer { get; set; }

        protected IImmutableDictionary<Address, IValue> UpdatedStates { get; set; }

        protected IImmutableDictionary<(Address, Currency), BigInteger> UpdatedFungibles
            { get; set; }

        protected IImmutableDictionary<Currency, BigInteger> UpdatedTotalSupply { get; set; }

        protected ValidatorSet? UpdatedValidatorSet { get; set; } = null;

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
        /// <returns>A null delta of type <see cref="AccountStateDeltaImplV0"/>
        /// with <see langword="default"/> <see cref="Address"/> as its
        /// <see cref="AccountStateDeltaImpl.Signer"/>.</returns>
        /// <remarks>
        /// This is not immediately usable.  Choose its proper type with <see cref="ChooseVersion"/>
        /// and signer with <see cref="ChooseSigner"/> before use.
        /// </remarks>
        /// <seealso cref="ChooseVersion"/>
        /// <seealso cref="ChooseSigner"/>
        internal static IAccountStateDelta Create(
            AccountStateGetter accountStateGetter,
            AccountBalanceGetter accountBalanceGetter,
            TotalSupplyGetter totalSupplyGetter,
            ValidatorSetGetter validatorSetGetter)
        {
            return new AccountStateDeltaImplV0(
                accountStateGetter,
                accountBalanceGetter,
                totalSupplyGetter,
                validatorSetGetter,
                default(Address));
        }

        /// <summary>
        /// Creates a null delta with given <paramref name="protocolVersion"/>.
        /// </summary>
        /// <param name="delta">The previous <see cref="IAccountStateDelta"/> to use.</param>
        /// <param name="protocolVersion">The <see cref="Block.ProtocolVersion"/> for which
        /// this delta will be used.</param>
        /// <returns>A null delta with an appropriate type as <see cref="IAccountStateDelta"/>
        /// given <paramref name="protocolVersion"/>.</returns>
        /// <remarks>
        /// This clears <see cref="IAccountStateDelta.TotalUpdatedFungibleAssets"/> and should be
        /// only used right after <see cref="Create"/>.
        /// </remarks>
        /// <seealso cref="Create"/>
        internal static IAccountStateDelta ChooseVersion(
            IAccountStateDelta delta,
            int protocolVersion) => protocolVersion > 0
                ? new AccountStateDeltaImpl(
                    delta.GetStates,
                    delta.GetBalance,
                    delta.GetTotalSupply,
                    delta.GetValidatorSet,
                    default(Address))
                : new AccountStateDeltaImplV0(
                    delta.GetStates,
                    delta.GetBalance,
                    delta.GetTotalSupply,
                    delta.GetValidatorSet,
                    default(Address));

        /// <summary>
        /// Creates a null delta with given <paramref name="signer"/>.
        /// </summary>
        /// <param name="delta">The previous <see cref="IAccountStateDelta"/> to use.</param>
        /// <param name="signer">The <see cref="Address"/> to set.</param>
        /// <returns>A null delta with given <paramref name="signer"/> that is of the same type
        /// as <paramref name="delta"/>.</returns>
        /// <exception cref="ArgumentException">Thrown if given <paramref name="delta"/>
        /// is neither <see cref="AccountStateDeltaImplV0"/>
        /// nor <see cref="AccountStateDeltaImpl"/>.
        /// </exception>
        /// <remarks>
        /// This inherits <paramref name="delta"/>'s
        /// <see cref="IAccountStateDelta.TotalUpdatedFungibleAssets"/>.
        /// </remarks>
        internal static IAccountStateDelta ChooseSigner(
            IAccountStateDelta delta,
            Address signer)
        {
            // The order is important since AccountStateDeltaImplV0 inherits from
            // AccountStateDeltaImpl
            if (delta is AccountStateDeltaImplV0 implV0)
            {
                return new AccountStateDeltaImplV0(
                    delta.GetStates,
                    delta.GetBalance,
                    delta.GetTotalSupply,
                    delta.GetValidatorSet,
                    signer)
                    {
                        TotalUpdatedFungibles = implV0.TotalUpdatedFungibles,
                    };
            }
            else if (delta is AccountStateDeltaImpl impl)
            {
                return new AccountStateDeltaImpl(
                    delta.GetStates,
                    delta.GetBalance,
                    delta.GetTotalSupply,
                    delta.GetValidatorSet,
                    signer)
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
                TotalUpdatedFungibles = TotalUpdatedFungibles,
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
                TotalUpdatedFungibles = TotalUpdatedFungibles.SetItems(updatedFungibleAssets),
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
                TotalUpdatedFungibles = TotalUpdatedFungibles,
            };
    }
}
