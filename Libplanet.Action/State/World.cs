using System;
using System.Diagnostics.Contracts;
using System.Numerics;
using Bencodex.Types;
using Libplanet.Crypto;
using Libplanet.Store.Trie;
using Libplanet.Types.Assets;
using static Libplanet.Action.State.KeyConverters;

namespace Libplanet.Action.State
{
    /// <summary>
    /// An internal implementation of <see cref="IWorld"/>.
    /// </summary>
    [Pure]
    public class World : IWorld
    {
        private readonly IWorldState _baseState;

        public World(IWorldState baseState)
            : this(baseState, new WorldDelta())
        {
        }

        public World(
            IWorldState baseState,
            IWorldDelta delta)
        {
            _baseState = baseState;
            Delta = delta;
        }

        /// <inheritdoc/>
        public IWorldDelta Delta { get; }

        /// <inheritdoc/>
        [Pure]
        public ITrie Trie => _baseState.Trie;

        /// <inheritdoc cref="IWorldState.Legacy/>
        [Pure]
        public bool Legacy => _baseState.Legacy;

        /// <inheritdoc cref="IWorld.GetAccount"/>
        [Pure]
        public IAccount GetAccount(Address address)
        {
            return Delta.Accounts.TryGetValue(address, out IAccount? account)
                ? account
                : new Account(_baseState.GetAccountState(address));
        }

        /// <inheritdoc cref="IWorldState.GetAccountState"/>
        [Pure]
        public IAccountState GetAccountState(Address address) => GetAccount(address);

        /// <inheritdoc cref="IWorld.SetAccount/>
        [Pure]
        public IWorld SetAccount(Address address, IAccount account)
        {
            if (Legacy && !address.Equals(ReservedAddresses.LegacyAccount))
            {
                throw new ArgumentException(
                    $"Cannot set a non-legacy account ({address}) to a legacy {nameof(IWorld)}.",
                    nameof(address));
            }

            if (!address.Equals(ReservedAddresses.LegacyAccount)
                && account.TotalUpdatedFungibleAssets.Count > 0)
            {
                throw new ArgumentException(
                    $"Cannot set a non-legacy account ({address}) with an updated fungible assets.",
                    nameof(address));
            }

            return new World(_baseState, Delta.SetAccount(address, account));
        }

        public FungibleAssetValue GetBalance(Address address, Currency currency) =>
            GetAccount(ReservedAddresses.LegacyAccount).GetBalance(address, currency);

        public FungibleAssetValue GetTotalSupply(Currency currency) =>
            GetAccount(ReservedAddresses.LegacyAccount).GetTotalSupply(currency);

        public IWorld MintAsset(IActionContext context, Address recipient, FungibleAssetValue value)
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
                    recipient,
                    currency,
                    rawBalance,
                    (currentTotalSupply + value).RawValue);
            }
            else
            {
                return UpdateFungibleAssets(recipient, currency, rawBalance);
            }
        }

        public IWorld BurnAsset(IActionContext context, Address owner, FungibleAssetValue value)
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

            BigInteger rawBalance = (balance - value).RawValue;
            if (currency.TotalSupplyTrackable)
            {
                var currentTotalSupply = GetTotalSupply(currency);
                return UpdateFungibleAssets(
                    owner,
                    currency,
                    rawBalance,
                    (currentTotalSupply - value).RawValue);
            }
            else
            {
                return UpdateFungibleAssets(owner, currency, rawBalance);
            }
        }

        public IWorld TransferAsset(
            IActionContext context,
            Address sender,
            Address recipient,
            FungibleAssetValue value,
            bool allowNegativeBalance = false) => context.BlockProtocolVersion > 0
                ? TransferAssetV1(sender, recipient, value, allowNegativeBalance)
                : TransferAssetV0(sender, recipient, value, allowNegativeBalance);

        private IWorld UpdateFungibleAssets(
            Address address,
            Currency currency,
            BigInteger amount,
            BigInteger? supplyAmount = null)
        {
            IAccount account = GetAccount(ReservedAddresses.LegacyAccount);
            if (supplyAmount is { } sa)
            {
                account = new Account(
                    new AccountState(
                        account.Trie
                            .Set(ToFungibleAssetKey(address, currency), new Integer(amount))
                            .Set(ToTotalSupplyKey(currency), new Integer(sa))),
                    account.TotalUpdatedFungibleAssets.Add((address, currency)));
            }
            else
            {
                account = new Account(
                    new AccountState(
                        account.Trie
                            .Set(ToFungibleAssetKey(address, currency), new Integer(amount))),
                    account.TotalUpdatedFungibleAssets.Add((address, currency)));
            }

            return SetAccount(ReservedAddresses.LegacyAccount, account);
        }

        private IWorld TransferAssetV0(
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

            return ((World)UpdateFungibleAssets(sender, currency, (senderBalance - value).RawValue))
                .UpdateFungibleAssets(recipient, currency, (recipientBalance + value).RawValue);
        }

        [Pure]
        private IWorld TransferAssetV1(
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

            BigInteger senderRawBalance = (senderBalance - value).RawValue;
            IWorld intermediate = UpdateFungibleAssets(sender, currency, senderRawBalance);
            FungibleAssetValue recipientBalance = intermediate.GetBalance(recipient, currency);
            BigInteger recipientRawBalance = (recipientBalance + value).RawValue;

            return ((World)intermediate).UpdateFungibleAssets(
                recipient, currency, recipientRawBalance);
        }
    }
}
