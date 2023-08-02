using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Diagnostics.Contracts;
using System.Linq;
using System.Numerics;
using Bencodex.Types;
using Libplanet.Crypto;
using Libplanet.Types.Assets;
using Libplanet.Types.Consensus;

namespace Libplanet.Action.State
{
    /// <summary>
    /// An internal implementation of <see cref="IAccount"/>.
    /// </summary>
    [Pure]
    internal class Account : IAccount
    {
        private readonly IAccountState _baseState;

        private Account(IAccountState baseState)
            : this(baseState, new AccountDelta())
        {
        }

        private Account(IAccountState baseState, IAccountDelta delta)
        {
            _baseState = baseState;
            Delta = delta;
            TotalUpdatedFungibles = ImmutableDictionary<(Address, Currency), BigInteger>.Empty;
        }

        /// <inheritdoc/>
        public IAccountDelta Delta { get; private set; }

        /// <inheritdoc/>
        public Address Address => _baseState.Address;

        /// <inheritdoc/>
        public IImmutableSet<(Address, Currency)> TotalUpdatedFungibleAssets =>
            TotalUpdatedFungibles.Keys.ToImmutableHashSet();

        public IImmutableDictionary<(Address, Currency), BigInteger> TotalUpdatedFungibles
            { get; private set; }

        /// <inheritdoc/>
        [Pure]
        public IValue? GetState(Address address)
        {
            AccountMetrics.GetStateTimer.Value?.Start();
            AccountMetrics.GetStateCount.Value += 1;
            IValue? state = GetStates(new[] { address })[0];
            AccountMetrics.GetStateTimer.Value?.Stop();
            return state;
        }

        /// <inheritdoc cref="IAccountState.GetStates(IReadOnlyList{Address})"/>
        [Pure]
        public IReadOnlyList<IValue?> GetStates(IReadOnlyList<Address> addresses)
        {
            AccountMetrics.GetStateTimer.Value?.Start();
            int length = addresses.Count;
            AccountMetrics.GetStateCount.Value += length;
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
                IReadOnlyList<IValue?> restValues = _baseState.GetStates(
                    notFoundIndices.Select(index => addresses[index]).ToArray());
                foreach ((var v, var i) in notFoundIndices.Select((v, i) => (v, i)))
                {
                    values[v] = restValues[i];
                }
            }

            AccountMetrics.GetStateTimer.Value?.Stop();
            return values;
        }

        /// <inheritdoc/>
        [Pure]
        public IAccount SetState(Address address, IValue state) =>
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

            return _baseState.GetTotalSupply(currency);
        }

        /// <inheritdoc/>
        [Pure]
        public ValidatorSet GetValidatorSet() =>
            Delta.ValidatorSet ?? _baseState.GetValidatorSet();

        /// <inheritdoc/>
        [Pure]
        public IAccount MintAsset(
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
        public IAccount TransferAsset(
            IActionContext context,
            Address sender,
            Address recipient,
            FungibleAssetValue value,
            bool allowNegativeBalance = false) => context.BlockProtocolVersion > 0
                ? TransferAssetV1(sender, recipient, value, allowNegativeBalance)
                : TransferAssetV0(sender, recipient, value, allowNegativeBalance);

        /// <inheritdoc/>
        [Pure]
        public IAccount BurnAsset(
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

        /// <inheritdoc/>
        [Pure]
        public IAccount SetValidator(Validator validator)
        {
            return UpdateValidatorSet(GetValidatorSet().Update(validator));
        }

        /// <summary>
        /// Creates a null account from given <paramref name="previousState"/>.
        /// </summary>
        /// <param name="previousState">The previous <see cref="IAccountState"/> to use as
        /// a basis.</param>
        /// <returns>A null account created from <paramref name="previousState"/>.
        /// </returns>
        internal static IAccount Create(IAccountState previousState) =>
            new Account(previousState);

        /// <summary>
        /// Creates a null account while inheriting <paramref name="account"/>s
        /// total updated fungibles.
        /// </summary>
        /// <param name="account">The previous <see cref="IAccount"/> to use.</param>
        /// <returns>A null account that is of the same type as <paramref name="account"/>.
        /// </returns>
        /// <exception cref="ArgumentException">Thrown if given <paramref name="account"/>
        /// is not <see cref="Account"/>.
        /// </exception>
        /// <remarks>
        /// This inherits <paramref name="account"/>'s
        /// <see cref="IAccount.TotalUpdatedFungibleAssets"/>.
        /// </remarks>
        internal static IAccount Flush(IAccount account) =>
            account is Account impl
                ? new Account(account)
                    {
                        TotalUpdatedFungibles = impl.TotalUpdatedFungibles,
                    }
                : throw new ArgumentException(
                    $"Unknown type for {nameof(account)}: {account.GetType()}");

        [Pure]
        private FungibleAssetValue GetBalance(
            Address address,
            Currency currency,
            IImmutableDictionary<(Address, Currency), BigInteger> balances) =>
            balances.TryGetValue((address, currency), out BigInteger balance)
                ? FungibleAssetValue.FromRawValue(currency, balance)
                : _baseState.GetBalance(address, currency);

        [Pure]
        private Account UpdateStates(
            IImmutableDictionary<Address, IValue> updatedStates) =>
            new Account(
                _baseState,
                new AccountDelta(
                    updatedStates,
                    Delta.Fungibles,
                    Delta.TotalSupplies,
                    Delta.ValidatorSet))
            {
                TotalUpdatedFungibles = TotalUpdatedFungibles,
            };

        [Pure]
        private Account UpdateFungibleAssets(
            IImmutableDictionary<(Address, Currency), BigInteger> updatedFungibleAssets,
            IImmutableDictionary<(Address, Currency), BigInteger> totalUpdatedFungibles
        ) =>
            UpdateFungibleAssets(
                updatedFungibleAssets,
                totalUpdatedFungibles,
                Delta.TotalSupplies);

        [Pure]
        private Account UpdateFungibleAssets(
            IImmutableDictionary<(Address, Currency), BigInteger> updatedFungibleAssets,
            IImmutableDictionary<(Address, Currency), BigInteger> totalUpdatedFungibles,
            IImmutableDictionary<Currency, BigInteger> updatedTotalSupply
        ) =>
            new Account(
                _baseState,
                new AccountDelta(
                    Delta.States,
                    updatedFungibleAssets,
                    updatedTotalSupply,
                    Delta.ValidatorSet))
            {
                TotalUpdatedFungibles = totalUpdatedFungibles,
            };

        [Pure]
        private Account UpdateValidatorSet(
            ValidatorSet updatedValidatorSet) =>
            new Account(
                _baseState,
                new AccountDelta(
                    Delta.States,
                    Delta.Fungibles,
                    Delta.TotalSupplies,
                    updatedValidatorSet))
            {
                TotalUpdatedFungibles = TotalUpdatedFungibles,
            };

        [Pure]
        private IAccount TransferAssetV0(
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
        private IAccount TransferAssetV1(
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
