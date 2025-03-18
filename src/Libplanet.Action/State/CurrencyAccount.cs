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
    public sealed class CurrencyAccount
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
            CheckCurrency(currency);
#pragma warning disable SA1118  // The parameter spans multiple lines
            return FungibleAssetValue.FromRawValue(
                Currency,
                WorldVersion >= BlockMetadata.CurrencyAccountProtocolVersion
                    ? GetRawBalanceV7(address)
                    : GetRawBalanceV0(address));
#pragma warning restore SA1118
        }

        public FungibleAssetValue GetTotalSupply(Currency currency)
        {
            CheckCurrency(currency);
#pragma warning disable SA1118  // The parameter spans multiple lines
            return FungibleAssetValue.FromRawValue(
                Currency,
                WorldVersion >= BlockMetadata.CurrencyAccountProtocolVersion
                    ? GetRawTotalSupplyV7()
                    : GetRawTotalSupplyV0());
#pragma warning restore SA1118
        }

        public CurrencyAccount MintAsset(
            Address recipient,
            FungibleAssetValue value)
        {
            CheckCurrency(value.Currency);
            if (value.Sign <= 0)
            {
                throw new ArgumentOutOfRangeException(
                    nameof(value),
                    $"The amount to mint, burn, or transfer must be greater than zero: {value}");
            }

            return WorldVersion >= BlockMetadata.CurrencyAccountProtocolVersion
                ? MintRawAssetV7(recipient, value.RawValue)
                : MintRawAssetV0(recipient, value.RawValue);
        }

        public CurrencyAccount BurnAsset(
            Address owner,
            FungibleAssetValue value)
        {
            CheckCurrency(value.Currency);
            if (value.Sign <= 0)
            {
                throw new ArgumentOutOfRangeException(
                    nameof(value),
                    $"The amount to mint, burn, or transfer must be greater than zero: {value}");
            }

            return WorldVersion >= BlockMetadata.CurrencyAccountProtocolVersion
                ? BurnRawAssetV7(owner, value.RawValue)
                : BurnRawAssetV0(owner, value.RawValue);
        }

        public CurrencyAccount TransferAsset(
            Address sender,
            Address recipient,
            FungibleAssetValue value)
        {
            CheckCurrency(value.Currency);
            if (value.Sign <= 0)
            {
                throw new ArgumentOutOfRangeException(
                    nameof(value),
                    $"The amount to mint, burn, or transfer must be greater than zero: {value}");
            }

            return WorldVersion >= BlockMetadata.CurrencyAccountProtocolVersion
                ? TransferRawAssetV7(sender, recipient, value.RawValue)
                : TransferRawAssetV1(sender, recipient, value.RawValue);
        }

        [Obsolete(
            "Should not be used unless to specifically keep backwards compatibility " +
            "for IActions that's been used when block protocol version was 0.")]
        public CurrencyAccount TransferAssetV0(
            Address sender,
            Address recipient,
            FungibleAssetValue value)
        {
            CheckCurrency(value.Currency);
            if (value.Sign <= 0)
            {
                throw new ArgumentOutOfRangeException(
                    nameof(value),
                    $"The amount to mint, burn, or transfer must be greater than zero: {value}");
            }

            return TransferRawAssetV0(sender, recipient, value.RawValue);
        }

        public IAccount AsAccount()
        {
            return new Account(new AccountState(Trie));
        }

        private CurrencyAccount MintRawAssetV0(
            Address recipient,
            BigInteger rawValue)
        {
            CurrencyAccount currencyAccount = this;
            BigInteger prevBalanceRawValue = currencyAccount.GetRawBalanceV0(recipient);
            currencyAccount =
                currencyAccount.WriteRawBalanceV0(recipient, prevBalanceRawValue + rawValue);
            if (Currency.TotalSupplyTrackable)
            {
                BigInteger prevTotalSupplyRawValue = currencyAccount.GetRawTotalSupplyV0();
                if (Currency.MaximumSupply is { } maximumSupply &&
                    maximumSupply.RawValue < prevTotalSupplyRawValue + rawValue)
                {
                    FungibleAssetValue prevTotalSupply =
                        FungibleAssetValue.FromRawValue(Currency, prevTotalSupplyRawValue);
                    FungibleAssetValue value =
                        FungibleAssetValue.FromRawValue(Currency, rawValue);
                    throw new SupplyOverflowException(
                        $"Cannot mint {value} in addition to " +
                        $"the current total supply of {prevTotalSupply} as it would exceed " +
                        $"the maximum supply {Currency.MaximumSupply}.",
                        value);
                }

                currencyAccount =
                    currencyAccount.WriteRawTotalSupplyV0(prevTotalSupplyRawValue + rawValue);
            }

            return currencyAccount;
        }

        private CurrencyAccount MintRawAssetV7(
            Address recipient,
            BigInteger rawValue)
        {
            CurrencyAccount currencyAccount = this;
            BigInteger prevBalanceRawValue = currencyAccount.GetRawBalanceV7(recipient);
            currencyAccount =
                currencyAccount.WriteRawBalanceV7(recipient, prevBalanceRawValue + rawValue);

            BigInteger prevTotalSupplyRawValue = currencyAccount.GetRawTotalSupplyV7();
            if (Currency.MaximumSupply is { } maximumSupply &&
                maximumSupply.RawValue < prevTotalSupplyRawValue + rawValue)
            {
                FungibleAssetValue prevTotalSupply =
                    FungibleAssetValue.FromRawValue(Currency, prevTotalSupplyRawValue);
                FungibleAssetValue value =
                    FungibleAssetValue.FromRawValue(Currency, rawValue);
                throw new SupplyOverflowException(
                    $"Cannot mint {value} in addition to " +
                    $"the current total supply of {prevTotalSupply} as it would exceed " +
                    $"the maximum supply {Currency.MaximumSupply}.",
                    prevTotalSupply);
            }

            currencyAccount =
                currencyAccount.WriteRawTotalSupplyV7(prevTotalSupplyRawValue + rawValue);

            return currencyAccount;
        }

        private CurrencyAccount BurnRawAssetV0(
            Address owner,
            BigInteger rawValue)
        {
            CurrencyAccount currencyAccount = this;
            BigInteger prevBalanceRawValue = currencyAccount.GetRawBalanceV0(owner);
            if (prevBalanceRawValue - rawValue < 0)
            {
                FungibleAssetValue prevBalance =
                    FungibleAssetValue.FromRawValue(Currency, prevBalanceRawValue);
                FungibleAssetValue value = FungibleAssetValue.FromRawValue(Currency, rawValue);
                throw new InsufficientBalanceException(
                    $"Cannot burn or transfer {value} from {owner} as the current balance " +
                    $"of {owner} is {prevBalance}.",
                    owner,
                    prevBalance);
            }

            currencyAccount =
                currencyAccount.WriteRawBalanceV0(owner, prevBalanceRawValue - rawValue);

            if (Currency.TotalSupplyTrackable)
            {
                BigInteger prevTotalSupply = currencyAccount.GetRawTotalSupplyV0();
                currencyAccount =
                    currencyAccount.WriteRawTotalSupplyV0(prevTotalSupply - rawValue);
            }

            return currencyAccount;
        }

        private CurrencyAccount BurnRawAssetV7(
            Address owner,
            BigInteger rawValue)
        {
            CurrencyAccount currencyAccount = this;
            BigInteger prevBalanceRawValue = currencyAccount.GetRawBalanceV7(owner);
            if (prevBalanceRawValue - rawValue < 0)
            {
                FungibleAssetValue prevBalance =
                    FungibleAssetValue.FromRawValue(Currency, prevBalanceRawValue);
                FungibleAssetValue value = FungibleAssetValue.FromRawValue(Currency, rawValue);
                throw new InsufficientBalanceException(
                    $"Cannot burn or transfer {value} from {owner} as the current balance " +
                    $"of {owner} is {prevBalance}.",
                    owner,
                    prevBalance);
            }

            currencyAccount =
                currencyAccount.WriteRawBalanceV7(owner, prevBalanceRawValue - rawValue);

            BigInteger prevTotalSupplyRawValue = currencyAccount.GetRawTotalSupplyV7();
            currencyAccount =
                currencyAccount.WriteRawTotalSupplyV7(prevTotalSupplyRawValue - rawValue);

            return currencyAccount;
        }

        private CurrencyAccount TransferRawAssetV7(
            Address sender,
            Address recipient,
            BigInteger rawValue)
        {
            CurrencyAccount currencyAccount = this;
            BigInteger prevSenderBalanceRawValue = currencyAccount.GetRawBalanceV7(sender);
            if (prevSenderBalanceRawValue - rawValue < 0)
            {
                FungibleAssetValue prevSenderBalance =
                    FungibleAssetValue.FromRawValue(Currency, prevSenderBalanceRawValue);
                FungibleAssetValue value = FungibleAssetValue.FromRawValue(Currency, rawValue);
                throw new InsufficientBalanceException(
                    $"Cannot burn or transfer {value} from {sender} as the current balance " +
                    $"of {sender} is {prevSenderBalance}.",
                    sender,
                    prevSenderBalance);
            }

            currencyAccount = currencyAccount.WriteRawBalanceV7(
                sender,
                prevSenderBalanceRawValue - rawValue);
            BigInteger prevRecipientBalanceRawValue = currencyAccount.GetRawBalanceV7(recipient);
            currencyAccount = currencyAccount.WriteRawBalanceV7(
                recipient,
                prevRecipientBalanceRawValue + rawValue);
            return currencyAccount;
        }

        private CurrencyAccount TransferRawAssetV1(
            Address sender,
            Address recipient,
            BigInteger rawValue)
        {
            CurrencyAccount currencyAccount = this;
            BigInteger prevSenderBalanceRawValue = currencyAccount.GetRawBalanceV0(sender);
            if (prevSenderBalanceRawValue - rawValue < 0)
            {
                FungibleAssetValue prevSenderBalance =
                    FungibleAssetValue.FromRawValue(Currency, prevSenderBalanceRawValue);
                FungibleAssetValue value = FungibleAssetValue.FromRawValue(Currency, rawValue);
                throw new InsufficientBalanceException(
                    $"Cannot burn or transfer {value} from {sender} as the current balance " +
                    $"of {sender} is {prevSenderBalance}.",
                    sender,
                    prevSenderBalance);
            }

            // NOTE: For backward compatibility with the bugged behavior before
            // protocol version 1.
            currencyAccount = currencyAccount.WriteRawBalanceV0(
                sender,
                prevSenderBalanceRawValue - rawValue);
            BigInteger prevRecipientBalanceRawValue =
                currencyAccount.GetRawBalanceV0(recipient);
            currencyAccount = currencyAccount.WriteRawBalanceV0(
                recipient,
                prevRecipientBalanceRawValue + rawValue);
            return currencyAccount;
        }

        private CurrencyAccount TransferRawAssetV0(
            Address sender,
            Address recipient,
            BigInteger rawValue)
        {
            CurrencyAccount currencyAccount = this;
            BigInteger prevSenderBalanceRawValue = currencyAccount.GetRawBalanceV0(sender);
            if (prevSenderBalanceRawValue - rawValue < 0)
            {
                FungibleAssetValue prevSenderBalance =
                    FungibleAssetValue.FromRawValue(Currency, prevSenderBalanceRawValue);
                FungibleAssetValue value = FungibleAssetValue.FromRawValue(Currency, rawValue);
                throw new InsufficientBalanceException(
                    $"Cannot burn or transfer {value} from {sender} as the current balance " +
                    $"of {sender} is {prevSenderBalance}.",
                    sender,
                    prevSenderBalance);
            }

            // NOTE: For backward compatibility with the bugged behavior before
            // protocol version 1.
            BigInteger prevRecipientBalanceRawValue =
                currencyAccount.GetRawBalanceV0(recipient);
            currencyAccount = currencyAccount.WriteRawBalanceV0(
                sender,
                prevSenderBalanceRawValue - rawValue);
            currencyAccount = currencyAccount.WriteRawBalanceV0(
                recipient,
                prevRecipientBalanceRawValue + rawValue);
            return currencyAccount;
        }

        private CurrencyAccount WriteRawBalanceV0(Address address, BigInteger rawValue) =>
            new CurrencyAccount(
                Trie.Set(
                    KeyConverters.ToFungibleAssetKey(address, Currency), new Integer(rawValue)),
                WorldVersion,
                Currency);

        private CurrencyAccount WriteRawBalanceV7(Address address, BigInteger rawValue) =>
            new CurrencyAccount(
                Trie.Set(KeyConverters.ToStateKey(address), new Integer(rawValue)),
                WorldVersion,
                Currency);

        private CurrencyAccount WriteRawTotalSupplyV0(BigInteger rawValue) =>
            new CurrencyAccount(
                Trie.Set(KeyConverters.ToTotalSupplyKey(Currency), new Integer(rawValue)),
                WorldVersion,
                Currency);

        private CurrencyAccount WriteRawTotalSupplyV7(BigInteger rawValue) =>
            new CurrencyAccount(
                Trie.Set(
                    KeyConverters.ToStateKey(CurrencyAccount.TotalSupplyAddress),
                    new Integer(rawValue)),
                WorldVersion,
                Currency);

        private BigInteger GetRawBalanceV0(Address address) =>
            Trie[KeyConverters.ToFungibleAssetKey(address, Currency)] is Integer i
                ? i.Value
                : BigInteger.Zero;

        private BigInteger GetRawBalanceV7(Address address) =>
            Trie[KeyConverters.ToStateKey(address)] is Integer i
                ? i.Value
                : BigInteger.Zero;

        private BigInteger GetRawTotalSupplyV0() =>
            Trie[KeyConverters.ToTotalSupplyKey(Currency)] is Integer i
                ? i.Value
                : BigInteger.Zero;

        private BigInteger GetRawTotalSupplyV7() =>
            Trie[KeyConverters.ToStateKey(TotalSupplyAddress)] is Integer i
                ? i.Value
                : BigInteger.Zero;

        private void CheckCurrency(Currency currency)
        {
            if (!Currency.Equals(currency))
            {
                throw new ArgumentException(
                    $"Given currency {currency} should match the account's currency {Currency}.",
                    nameof(currency));
            }
        }
    }
}
