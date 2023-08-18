using System.Numerics;
using Libplanet.Action.State;
using Libplanet.Crypto;
using Libplanet.Store.Trie;
using Libplanet.Types.Assets;
using Libplanet.Types.Tx;

namespace Libplanet.Action.Tests.Mocks
{
    public static class MockAccount
    {
        public static IAccount Empty { get; } =
            new Account(default, new MerkleTrie(new MemoryKeyValueStore()));

        public static IAccount SetBalance(
            this IAccount account,
            Address address,
            FungibleAssetValue amount) =>
            SetBalance(account, (address, amount.Currency), amount);

        public static IAccount SetBalance(
            this IAccount account,
            Address address,
            Currency currency,
            BigInteger rawAmount) =>
            SetBalance(
                account,
                (address, currency),
                FungibleAssetValue.FromRawValue(currency, rawAmount));

        public static IAccount SetBalance(
            this IAccount account,
            (Address Address, Currency Currency) pair,
            FungibleAssetValue amount)
        {
            var context = CreateContext(account, pair.Address);
            var currentAmount = account.GetBalance(pair.Address, pair.Currency);
            var balanceDelta = currentAmount - amount;
            return balanceDelta.Sign switch
            {
                0 => account,
                > 0 => account.BurnAsset(context, pair.Address, balanceDelta),
                < 0 => account.MintAsset(context, pair.Address, balanceDelta.Abs()),
            };
        }

        public static IAccount AddBalance(
            this IAccount account, Address address, FungibleAssetValue amount) =>
            AddBalance(account, (address, amount.Currency), amount);

        public static IAccount AddBalance(
            this IAccount account, Address address, Currency currency, BigInteger rawAmount) =>
            AddBalance(
                account,
                (address, currency),
                FungibleAssetValue.FromRawValue(currency, rawAmount));

        public static IAccount AddBalance(
            this IAccount account,
            (Address Address, Currency Currency) pair,
            FungibleAssetValue rawAmount) =>
            SetBalance(
                account,
                pair,
                account.GetBalance(pair.Address, pair.Currency) + rawAmount);

        public static IAccount SubtractBalance(
            this IAccount account, Address address, FungibleAssetValue amount) =>
            SubtractBalance(account, (address, amount.Currency), amount);

        public static IAccount SubtractBalance(
            this IAccount account, Address address, Currency currency, BigInteger rawAmount) =>
            SubtractBalance(
                account,
                (address, currency),
                FungibleAssetValue.FromRawValue(currency, rawAmount));

        public static IAccount SubtractBalance(
            this IAccount account,
            (Address Address, Currency Currency) pair,
            FungibleAssetValue amount) =>
            SetBalance(
                account,
                pair,
                account.GetBalance(pair.Address, pair.Currency) - amount);

        public static IAccount TransferBalance(
            this IAccount account,
            Address sender,
            Address recipient,
            Currency currency,
            BigInteger rawAmount) =>
            TransferBalance(
                account,
                sender,
                recipient,
                FungibleAssetValue.FromRawValue(currency, rawAmount));

        public static IAccount TransferBalance(
            this IAccount account, Address sender, Address recipient, FungibleAssetValue amount) =>
            SubtractBalance(account, sender, amount).AddBalance(recipient, amount);

        private static IActionContext CreateContext(
            IAccount account,
            Address address = default,
            TxId? txId = null,
            int blockIndex = 0,
            int blockProtocolVersion = 0,
            int randomSeed = 0,
            int? gasLimit = null) =>
            new ActionContext(
                address,
                txId,
                address,
                blockIndex,
                blockProtocolVersion,
                account,
                randomSeed,
                gasLimit ?? long.MaxValue);
    }
}
