using System;
using System.Diagnostics.Contracts;
using System.Numerics;
using Bencodex.Types;
using Libplanet.Crypto;
using Libplanet.Store.Trie;
using Libplanet.Types.Assets;
using Libplanet.Types.Consensus;
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

        public World(IWorldState baseState, IWorldDelta delta)
        {
            _baseState = baseState;
            Delta = delta;
        }

        /// <inheritdoc cref="IWorld.Delta"/>
        public IWorldDelta Delta { get; }

        /// <inheritdoc cref="IWorldState.Trie"/>
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

            return new World(_baseState, Delta.SetAccount(address, account));
        }

        /// <inheritdoc cref="IWorld.BurnAsset"/>
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

            FungibleAssetValue balance = this.GetBalance(owner, currency);

            if (balance < value)
            {
                msg = $"The account {owner}'s balance of {currency} is insufficient to burn: " +
                      $"{balance} < {value}.";
                throw new InsufficientBalanceException(msg, owner, balance);
            }

            BigInteger rawBalance = (balance - value).RawValue;
            if (currency.TotalSupplyTrackable)
            {
                var currentTotalSupply = this.GetTotalSupply(currency);
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

        /// <inheritdoc cref="IWorld.TransferAsset"/>
        public IWorld TransferAsset(
            IActionContext context,
            Address sender,
            Address recipient,
            FungibleAssetValue value,
            bool allowNegativeBalance = false) => context.BlockProtocolVersion > 0
                ? TransferAssetV1(sender, recipient, value, allowNegativeBalance)
                : TransferAssetV0(sender, recipient, value, allowNegativeBalance);

        /// <inheritdoc cref="IWorld.SetValidator"/>
        public IWorld SetValidator(Validator validator) =>
            UpdateValidatorSet(this.GetValidatorSet().Update(validator));

        private IWorld UpdateFungibleAssets(
            Address address,
            Currency currency,
            BigInteger amount,
            BigInteger? supplyAmount = null)
        {
            IAccount account = supplyAmount is { } sa
                ? new Account(new AccountState(
                    GetAccount(ReservedAddresses.LegacyAccount).Trie
                        .Set(ToFungibleAssetKey(address, currency), new Integer(amount))
                        .Set(ToTotalSupplyKey(currency), new Integer(sa))))
                : new Account(new AccountState(
                    GetAccount(ReservedAddresses.LegacyAccount).Trie
                        .Set(ToFungibleAssetKey(address, currency), new Integer(amount))));

            return SetAccount(ReservedAddresses.LegacyAccount, account);
        }

        private IWorld UpdateValidatorSet(ValidatorSet validatorSet)
        {
            IAccount account = GetAccount(ReservedAddresses.LegacyAccount);
            return SetAccount(
                ReservedAddresses.LegacyAccount,
                new Account(new AccountState(
                    account.Trie.Set(ValidatorSetKey, validatorSet.Bencoded))));
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
            FungibleAssetValue senderBalance = this.GetBalance(sender, currency);
            FungibleAssetValue recipientBalance = this.GetBalance(recipient, currency);

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
            FungibleAssetValue senderBalance = this.GetBalance(sender, currency);

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
