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
        private readonly AccountStateGetter _accountStateGetter;
        private readonly AccountBalanceGetter _accountBalanceGetter;
        private readonly Address _signer;
        private IImmutableDictionary<Address, IValue> _updatedStates;
        private IImmutableDictionary<(Address, Currency), BigInteger> _updatedFungibleAssets;

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
        public BigInteger GetBalance(Address address, Currency currency) =>
            _updatedFungibleAssets.TryGetValue((address, currency), out BigInteger balance)
                ? balance
                : _accountBalanceGetter(address, currency);

        /// <inheritdoc/>
        [Pure]
        public IAccountStateDelta MintAsset(Address recipient, Currency currency, BigInteger amount)
        {
            if (amount <= 0)
            {
                throw new ArgumentOutOfRangeException(
                    nameof(amount),
                    "The amount to mint has to be greater than 0."
                );
            }
            else if (!currency.AllowsToMint(_signer))
            {
                throw new CurrencyPermissionException(
                    _signer,
                    currency,
                    $"The account {_signer} has no permission to mint the currency {currency}."
                );
            }

            BigInteger balance = GetBalance(recipient, currency);
            return UpdateFungibleAssets(
                _updatedFungibleAssets.SetItem((recipient, currency), balance + amount)
            );
        }

        /// <inheritdoc/>
        [Pure]
        public IAccountStateDelta TransferAsset(
            Address sender,
            Address recipient,
            Currency currency,
            BigInteger amount,
            bool allowNegativeBalance = false
        )
        {
            if (amount <= 0)
            {
                throw new ArgumentOutOfRangeException(
                    nameof(amount),
                    "The amount to transfer has to be greater than 0."
                );
            }

            BigInteger senderBalance = GetBalance(sender, currency),
                       recipientBalance = GetBalance(recipient, currency);

            if (!allowNegativeBalance && senderBalance < amount)
            {
                var msg = $"The account {sender}'s balance of {currency} is insufficient to " +
                          $"transfer: {senderBalance} {currency} < {amount} {currency}.";
                throw new InsufficientBalanceException(sender, currency, senderBalance, msg);
            }

            return UpdateFungibleAssets(
                _updatedFungibleAssets
                    .SetItem((sender, currency), senderBalance - amount)
                    .SetItem((recipient, currency), recipientBalance + amount)
            );
        }

        /// <inheritdoc/>
        [Pure]
        public IAccountStateDelta BurnAsset(Address owner, Currency currency, BigInteger amount)
        {
            string msg;

            if (amount <= 0)
            {
                throw new ArgumentOutOfRangeException(
                    nameof(amount),
                    "The amount to burn has to be greater than 0."
                );
            }
            else if (!currency.AllowsToMint(_signer))
            {
                msg = $"The account {_signer} has no permission to burn assets of " +
                      $"the currency {currency}.";
                throw new CurrencyPermissionException(_signer, currency, msg);
            }

            BigInteger balance = GetBalance(owner, currency);

            if (balance < amount)
            {
                msg = $"The account {owner}'s balance of {currency} is insufficient to burn: " +
                      $"{balance} {currency} < {amount} {currency}.";
                throw new InsufficientBalanceException(owner, currency, balance, msg);
            }

            return UpdateFungibleAssets(
                _updatedFungibleAssets.SetItem((owner, currency), balance - amount)
            );
        }

        [Pure]
        private AccountStateDeltaImpl UpdateStates(
            IImmutableDictionary<Address, IValue> updatedStates
        ) =>
            new AccountStateDeltaImpl(_accountStateGetter, _accountBalanceGetter, _signer)
            {
                _updatedStates = updatedStates,
                _updatedFungibleAssets = _updatedFungibleAssets,
            };

        [Pure]
        private AccountStateDeltaImpl UpdateFungibleAssets(
            IImmutableDictionary<(Address, Currency), BigInteger> updatedFungibleAssets
        ) =>
            new AccountStateDeltaImpl(_accountStateGetter, _accountBalanceGetter, _signer)
            {
                _updatedStates = _updatedStates,
                _updatedFungibleAssets = updatedFungibleAssets,
            };
    }
}
