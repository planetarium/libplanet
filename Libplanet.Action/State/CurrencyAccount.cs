using System;
using System.Numerics;
using Bencodex.Types;
using Libplanet.Crypto;
using Libplanet.Store.Trie;
using Libplanet.Types.Assets;
using Libplanet.Types.Blocks;

namespace Libplanet.Action.State
{
    /// <summary>
    /// A special "account" for managing <see cref="Currency"/> starting with
    /// <see cref="BlockMetadata.CurrencyAccountProtocolVersion"/>.
    /// </summary>
    public class CurrencyAccount
    {
        /// <summary>
        /// The <see cref="Address"/> location within the account where
        /// the total supply of the currency gets stored.
        /// </summary>
        public static readonly Address TotalSupplyAddress =
            new Address("1000000000000000000000000000000000000000");

        public CurrencyAccount(ITrie trie, int worldVersion, Currency currency)
        {
            Trie = trie;
            WorldVersion = worldVersion;
            Currency = currency;
        }

        public ITrie Trie { get; }

        public int WorldVersion { get; }

        public Currency Currency { get; }

        public FungibleAssetValue GetBalance(Address address, Currency currency)
        {
            if (!Currency.Equals(currency))
            {
                throw new ArgumentException();
            }

            return FungibleAssetValue.FromRawValue(
                Currency,
                WorldVersion >= BlockMetadata.CurrencyAccountProtocolVersion
                    ? GetRawBalanceV7(address)
                    : GetRawBalanceV0(address));
        }

        public FungibleAssetValue GetTotalSupply(Currency currency)
        {
            if (!Currency.Equals(currency))
            {
                throw new ArgumentException();
            }

            return FungibleAssetValue.FromRawValue(
                Currency,
                WorldVersion >= BlockMetadata.CurrencyAccountProtocolVersion
                    ? GetRawTotalSupplyV7()
                    : GetRawTotalSupplyV0());
        }

        public CurrencyAccount MintAsset(
            IActionContext context,
            Address recipient,
            FungibleAssetValue value)
        {
            if (!Currency.Equals(value.Currency))
            {
                throw new ArgumentException();
            }

            if (value.Sign <= 0)
            {
                throw new ArgumentOutOfRangeException(
                    nameof(value),
                    "The value to mint has to be greater than zero.");
            }

            if (!Currency.AllowsToMint(context.Signer))
            {
                throw new CurrencyPermissionException(
                    $"The account {context.Signer} has no permission to mint currency {Currency}.",
                    context.Signer,
                    Currency);
            }

            return WorldVersion >= BlockMetadata.CurrencyAccountProtocolVersion
                ? MintAssetV7(context, recipient, value)
                : MintAssetV0(context, recipient, value);
        }

        public CurrencyAccount BurnAsset(
            IActionContext context,
            Address owner,
            FungibleAssetValue value)
        {
            if (!Currency.Equals(value.Currency))
            {
                throw new ArgumentException();
            }

            if (value.Sign <= 0)
            {
                throw new ArgumentOutOfRangeException(
                    nameof(value),
                    "The value to burn has to be greater than zero.");
            }

            if (!Currency.AllowsToMint(context.Signer))
            {
                throw new CurrencyPermissionException(
                    $"The account {context.Signer} has no permission to burn currency {Currency}.",
                    context.Signer,
                    Currency);
            }

            return WorldVersion >= BlockMetadata.CurrencyAccountProtocolVersion
                ? BurnAssetV7(context, owner, value)
                : BurnAssetV0(context, owner, value);
        }

        public CurrencyAccount TransferAsset(
            IActionContext context,
            Address sender,
            Address recipient,
            FungibleAssetValue value)
        {
            if (!Currency.Equals(value.Currency))
            {
                throw new ArgumentException();
            }

            if (value.Sign <= 0)
            {
                throw new ArgumentOutOfRangeException(
                    nameof(value),
                    "The value to transfer has to be greater than zero.");
            }

            return WorldVersion >= BlockMetadata.CurrencyAccountProtocolVersion
                ? TransferAssetV7(context, sender, recipient, value)
                : TransferAssetV0(context, sender, recipient, value);
        }

        public IAccount AsAccount()
        {
            return new Account(new AccountState(Trie));
        }

        private CurrencyAccount MintAssetV0(
            IActionContext context,
            Address recipient,
            FungibleAssetValue value)
        {
            ValidateMinter(context.Signer);
            CurrencyAccount currencyAccount = this;
            BigInteger prevAmount = currencyAccount.GetRawBalanceV0(recipient);
            BigInteger newAmount = prevAmount + value.RawValue;
            currencyAccount = currencyAccount.WriteBalanceV0(recipient, newAmount);

            if (Currency.TotalSupplyTrackable)
            {
                // NOTE: This should never throw an exception.
                BigInteger prevTotalSupply = currencyAccount.GetRawTotalSupplyV0();
                currencyAccount =
                    currencyAccount.WriteTotalSupplyV0(prevTotalSupply + value.RawValue);
            }

            return currencyAccount;
        }

        private CurrencyAccount MintAssetV7(
            IActionContext context,
            Address recipient,
            FungibleAssetValue value)
        {
            ValidateMinter(context.Signer);
            CurrencyAccount currencyAccount = this;
            BigInteger prevAmount = currencyAccount.GetRawBalanceV7(recipient);
            BigInteger newAmount = prevAmount + value.RawValue;
            currencyAccount =
                currencyAccount.WriteBalanceV7(recipient, newAmount);
            BigInteger prevTotalSupply = currencyAccount.GetRawTotalSupplyV7();
            currencyAccount =
                currencyAccount.WriteTotalSupplyV7(prevTotalSupply + value.RawValue);

            return currencyAccount;
        }

        private CurrencyAccount BurnAssetV0(
            IActionContext context,
            Address owner,
            FungibleAssetValue value)
        {
            ValidateMinter(context.Signer);
            CurrencyAccount currencyAccount = this;
            BigInteger prevAmount = currencyAccount.GetRawBalanceV0(owner);
            BigInteger newAmount = prevAmount - value.RawValue;
            currencyAccount = currencyAccount.WriteBalanceV0(owner, newAmount);

            if (Currency.TotalSupplyTrackable)
            {
                // NOTE: This should never throw an exception.
                BigInteger prevTotalSupply = currencyAccount.GetRawTotalSupplyV0();
                currencyAccount =
                    currencyAccount.WriteTotalSupplyV0(prevTotalSupply - value.RawValue);
            }

            return currencyAccount;
        }

        private CurrencyAccount BurnAssetV7(
            IActionContext context,
            Address owner,
            FungibleAssetValue value)
        {
            ValidateMinter(context.Signer);
            CurrencyAccount currencyAccount = this;
            BigInteger prevAmount = currencyAccount.GetRawBalanceV7(owner);
            BigInteger newAmount = prevAmount - value.RawValue;
            currencyAccount = currencyAccount.WriteBalanceV7(owner, newAmount);
            BigInteger prevTotalSupply = currencyAccount.GetRawTotalSupplyV7();
            currencyAccount = currencyAccount.WriteTotalSupplyV7(prevTotalSupply - value.RawValue);

            return currencyAccount;
        }

        private CurrencyAccount TransferAssetV7(
            IActionContext context,
            Address sender,
            Address recipient,
            FungibleAssetValue value)
        {
            CurrencyAccount currencyAccount = this;

            BigInteger senderBalance = currencyAccount.GetRawBalanceV7(sender);
            currencyAccount = currencyAccount.WriteBalanceV7(
                sender,
                senderBalance - value.RawValue);
            BigInteger recipientBalance = currencyAccount.GetRawBalanceV7(recipient);
            currencyAccount = currencyAccount.WriteBalanceV7(
                recipient,
                recipientBalance + value.RawValue);
            return currencyAccount;
        }

        private CurrencyAccount TransferAssetV0(
            IActionContext context,
            Address sender,
            Address recipient,
            FungibleAssetValue value)
        {
            CurrencyAccount currencyAccount = this;

            // NOTE: For backward compatibility with the bugged behavior before
            // protocol version 1.
            if (context.BlockProtocolVersion == 0)
            {
                BigInteger senderBalance = currencyAccount.GetRawBalanceV0(sender);
                BigInteger recipientBalance = currencyAccount.GetRawBalanceV0(recipient);
                currencyAccount = currencyAccount.WriteBalanceV0(
                    sender,
                    senderBalance - value.RawValue);
                currencyAccount = currencyAccount.WriteBalanceV0(
                    recipient,
                    recipientBalance + value.RawValue);
            }
            else
            {
                BigInteger senderBalance = currencyAccount.GetRawBalanceV0(sender);
                currencyAccount = currencyAccount.WriteBalanceV0(
                    sender,
                    senderBalance - value.RawValue);
                BigInteger recipientBalance = currencyAccount.GetRawBalanceV0(recipient);
                currencyAccount = currencyAccount.WriteBalanceV0(
                    recipient,
                    recipientBalance + value.RawValue);
            }

            return currencyAccount;
        }

        private CurrencyAccount WriteBalanceV0(
            Address address,
            BigInteger value)
        {
            ValidateBalance(value);
            return new CurrencyAccount(
                Trie.Set(KeyConverters.ToFungibleAssetKey(address, Currency), new Integer(value)),
                WorldVersion,
                Currency);
        }

        private CurrencyAccount WriteBalanceV7(Address address, BigInteger value)
        {
            ValidateBalance(value);
            return new CurrencyAccount(
                Trie.Set(KeyConverters.ToStateKey(address), new Integer(value)),
                WorldVersion,
                Currency);
        }

        private CurrencyAccount WriteTotalSupplyV0(BigInteger value)
        {
            ValidateTotalSupply(value);
            return new CurrencyAccount(
                Trie.Set(KeyConverters.ToTotalSupplyKey(Currency), new Integer(value)),
                WorldVersion,
                Currency);
        }

        private CurrencyAccount WriteTotalSupplyV7(BigInteger value)
        {
            ValidateTotalSupply(value);
            return new CurrencyAccount(
                Trie.Set(
                    KeyConverters.ToStateKey(CurrencyAccount.TotalSupplyAddress),
                    new Integer(value)),
                WorldVersion,
                Currency);
        }

        private BigInteger GetRawBalanceV0(Address address)
        {
            return Trie.Get(
                KeyConverters.ToFungibleAssetKey(address, Currency)) is Integer i
                    ? i.Value
                    : BigInteger.Zero;
        }

        private BigInteger GetRawBalanceV7(Address address)
        {
            return Trie.Get(KeyConverters.ToStateKey(address)) is Integer i
                ? i.Value
                : BigInteger.Zero;
        }

        private BigInteger GetRawTotalSupplyV0()
        {
            if (!Currency.TotalSupplyTrackable)
            {
                throw TotalSupplyNotTrackableException.WithDefaultMessage(Currency);
            }

            return Trie.Get(KeyConverters.ToTotalSupplyKey(Currency)) is Integer i
                ? i.Value
                : BigInteger.Zero;
        }

        private BigInteger GetRawTotalSupplyV7()
        {
            return Trie.Get(KeyConverters.ToStateKey(TotalSupplyAddress)) is Integer i
                ? i.Value
                : BigInteger.Zero;
        }

        private void ValidateMinter(Address signer)
        {
            if (!Currency.AllowsToMint(signer))
            {
                // CurrencyPermission
                throw new ArgumentException();
            }
        }

        private void ValidateTotalSupply(BigInteger rawAmount)
        {
            if (Currency.MaximumSupply is { } maximumSupply &&
                maximumSupply.RawValue < rawAmount)
            {
                // SupplyOverflow
                throw new SupplyOverflowException(
                    "Some message",
                    FungibleAssetValue.FromRawValue(Currency, rawAmount));
            }
            else if (rawAmount < BigInteger.Zero)
            {
                throw new ArgumentException();
            }
        }

        private void ValidateBalance(BigInteger rawAmount)
        {
            if (rawAmount < 0)
            {
                // InsufficientBalance
                throw new InsufficientBalanceException(
                    "Some message",
                    new PrivateKey().Address,
                    FungibleAssetValue.FromRawValue(Currency, rawAmount));
            }
        }
    }
}
