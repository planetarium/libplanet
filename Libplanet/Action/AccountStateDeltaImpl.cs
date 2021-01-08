#nullable enable
using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Diagnostics.Contracts;
using System.Linq;
using System.Numerics;
using Bencodex.Types;
using Libplanet.Assets;

namespace Libplanet.Action
{
    /// <summary>
    /// An internal implementation of <see cref="IAccountStateDelta"/>.
    /// </summary>
    [Pure]
    internal class AccountStateDeltaImpl : IAccountStateDelta
    {
#pragma warning disable SA1401
        protected readonly AccountStateGetter _accountStateGetter;
        protected readonly AccountBalanceGetter _accountBalanceGetter;
        protected readonly Address _signer;
        protected IImmutableDictionary<Address, IValue> _updatedStates;
        protected IImmutableDictionary<(Address, Currency), BigInteger> _updatedFungibleAssets;
#pragma warning restore SA1401

        /// <summary>
        /// Creates a null delta from the given <paramref name="accountStateGetter"/>.
        /// </summary>
        /// <param name="accountStateGetter">A view to the &#x201c;epoch&#x201d; states.</param>
        /// <param name="accountBalanceGetter">A view to the &#x201c;epoch&#x201d; asset balances.
        /// </param>
        /// <param name="signer">A signer address. Used for authenticating if a signer is allowed
        /// to mint a currency.</param>
        internal AccountStateDeltaImpl(
            AccountStateGetter accountStateGetter,
            AccountBalanceGetter accountBalanceGetter,
            Address signer
        )
        {
            _accountStateGetter = accountStateGetter;
            _accountBalanceGetter = accountBalanceGetter;
            _updatedStates = ImmutableDictionary<Address, IValue>.Empty;
            _updatedFungibleAssets = ImmutableDictionary<(Address, Currency), BigInteger>.Empty;
            _signer = signer;
        }

        /// <inheritdoc/>
        [Pure]
        IImmutableSet<Address> IAccountStateDelta.UpdatedAddresses =>
            _updatedStates.Keys.ToImmutableHashSet().Union(
                _updatedFungibleAssets.Select(kv => kv.Key.Item1)
            );

        /// <inheritdoc/>
        IImmutableSet<Address> IAccountStateDelta.StateUpdatedAddresses =>
            _updatedStates.Keys.ToImmutableHashSet();

        /// <inheritdoc/>
        IImmutableDictionary<Address, IImmutableSet<Currency>>
            IAccountStateDelta.UpdatedFungibleAssets =>
            _updatedFungibleAssets.GroupBy(kv => kv.Key.Item1).ToImmutableDictionary(
                g => g.Key,
                g => (IImmutableSet<Currency>)g.Select(kv => kv.Key.Item2).ToImmutableHashSet()
            );

        /// <inheritdoc/>
        [Pure]
        IValue? IAccountStateDelta.GetState(Address address) =>
            _updatedStates.TryGetValue(address, out IValue? value)
                ? value
                : _accountStateGetter(address);

        /// <inheritdoc/>
        [Pure]
        IAccountStateDelta IAccountStateDelta.SetState(Address address, IValue state) =>
            UpdateStates(_updatedStates.SetItem(address, state));

        /// <inheritdoc/>
        [Pure]
        public virtual FungibleAssetValue GetBalance(Address address, Currency currency) =>
            GetBalance(address, currency, _updatedFungibleAssets);

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
            if (!currency.AllowsToMint(_signer))
            {
                throw new CurrencyPermissionException(
                    _signer,
                    currency,
                    $"The account {_signer} has no permission to mint the currency {currency}."
                );
            }

            FungibleAssetValue balance = GetBalance(recipient, currency);
            return UpdateFungibleAssets(
                _updatedFungibleAssets.SetItem((recipient, currency), (balance + value).RawValue)
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
                throw new InsufficientBalanceException(sender, senderBalance, msg);
            }

            IImmutableDictionary<(Address, Currency), BigInteger> updatedFungibleAssets =
                _updatedFungibleAssets
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
            if (!currency.AllowsToMint(_signer))
            {
                msg = $"The account {_signer} has no permission to burn assets of " +
                      $"the currency {currency}.";
                throw new CurrencyPermissionException(_signer, currency, msg);
            }

            FungibleAssetValue balance = GetBalance(owner, currency);

            if (balance < value)
            {
                msg = $"The account {owner}'s balance of {currency} is insufficient to burn: " +
                      $"{balance} < {value}.";
                throw new InsufficientBalanceException(owner, balance, msg);
            }

            return UpdateFungibleAssets(
                _updatedFungibleAssets.SetItem((owner, currency), (balance - value).RawValue)
            );
        }

        [Pure]
        protected virtual FungibleAssetValue GetBalance(
            Address address,
            Currency currency,
            IImmutableDictionary<(Address, Currency), BigInteger> balances) =>
            balances.TryGetValue((address, currency), out BigInteger balance)
                ? FungibleAssetValue.FromRawValue(currency, balance)
                : _accountBalanceGetter(address, currency);

        [Pure]
        protected virtual AccountStateDeltaImpl UpdateStates(
            IImmutableDictionary<Address, IValue> updatedStates
        ) =>
            new AccountStateDeltaImpl(_accountStateGetter, _accountBalanceGetter, _signer)
            {
                _updatedStates = updatedStates,
                _updatedFungibleAssets = _updatedFungibleAssets,
            };

        [Pure]
        protected virtual AccountStateDeltaImpl UpdateFungibleAssets(
            IImmutableDictionary<(Address, Currency), BigInteger> updatedFungibleAssets
        ) =>
            new AccountStateDeltaImpl(_accountStateGetter, _accountBalanceGetter, _signer)
            {
                _updatedStates = _updatedStates,
                _updatedFungibleAssets = updatedFungibleAssets,
            };
    }
}
