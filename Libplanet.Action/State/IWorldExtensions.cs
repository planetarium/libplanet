using System;
using System.Diagnostics.Contracts;
using Libplanet.Crypto;
using Libplanet.Types.Assets;
using Libplanet.Types.Blocks;
using Libplanet.Types.Consensus;

namespace Libplanet.Action.State
{
    public static class IWorldExtensions
    {
        /// <summary>
        /// Queries <paramref name="address"/>'s balance of the <paramref name="currency"/>.
        /// </summary>
        /// <param name="worldState">The <see cref="IWorldState"/> to read from.</param>
        /// <param name="address">The owner address to query.</param>
        /// <param name="currency">The currency type to query.</param>
        /// <returns>
        /// The <paramref name="address"/>'s balance of the <paramref name="currency"/>.
        /// </returns>
        [Pure]
        public static FungibleAssetValue GetBalance(
            this IWorldState worldState,
            Address address,
            Currency currency) =>
                worldState.GetCurrencyAccount(currency).GetBalance(address, currency);

        /// <summary>
        /// Mints the fungible asset <paramref name="value"/> (i.e., in-game monetary),
        /// and give it to the <paramref name="recipient"/>.
        /// </summary>
        /// <param name="world">The <see cref="IWorld"/> to manipulate.</param>
        /// <param name="context">The <see cref="IActionContext"/> of the <see cref="IAction"/>
        /// executing this method.</param>
        /// <param name="recipient">The address who receives the minted asset.</param>
        /// <param name="value">The asset value to mint.</param>
        /// <returns>A new <see cref="IWorld"/> instance that the given <paramref
        /// name="value"/> is added to <paramref name="recipient"/>'s balance.</returns>
        /// <exception cref="ArgumentOutOfRangeException">Thrown when the <paramref name="value"/>
        /// is less than or equal to 0.</exception>
        /// <exception cref="CurrencyPermissionException">Thrown when a transaction signer
        /// (or a miner in case of block actions) is not a member of the <see
        /// cref="FungibleAssetValue.Currency"/>'s <see cref="Currency.Minters"/>.</exception>
        /// <exception cref="SupplyOverflowException">Thrown when the sum of the
        /// <paramref name="value"/> to be minted and the current total supply amount of the
        /// <see cref="FungibleAssetValue.Currency"/> exceeds the
        /// <see cref="Currency.MaximumSupply"/>.</exception>
        [Pure]
        public static IWorld MintAsset(
            this IWorld world,
            IActionContext context,
            Address recipient,
            FungibleAssetValue value) =>
                world.SetCurrencyAccount(
                    world.GetCurrencyAccount(value.Currency).MintAsset(context, recipient, value));

        /// <summary>
        /// Burns the fungible asset <paramref name="value"/> (i.e., in-game monetary) from
        /// <paramref name="owner"/>'s balance.
        /// </summary>
        /// <param name="world">The <see cref="IWorld"/> to manipulate.</param>
        /// <param name="context">The <see cref="IActionContext"/> of the <see cref="IAction"/>
        /// executing this method.</param>
        /// <param name="owner">The address who owns the fungible asset to burn.</param>
        /// <param name="value">The fungible asset <paramref name="value"/> to burn.</param>
        /// <returns>A new <see cref="IWorld"/> instance that the given <paramref
        /// name="value"/> is subtracted from <paramref name="owner"/>'s balance.</returns>
        /// <exception cref="ArgumentOutOfRangeException">Thrown when the <paramref name="value"/>
        /// is less than or equal to zero.</exception>
        /// <exception cref="CurrencyPermissionException">Thrown when a transaction signer
        /// (or a miner in case of block actions) is not a member of the <see
        /// cref="FungibleAssetValue.Currency"/>'s <see cref="Currency.Minters"/>.</exception>
        /// <exception cref="InsufficientBalanceException">Thrown when the <paramref name="owner"/>
        /// has insufficient balance than <paramref name="value"/> to burn.</exception>
        [Pure]
        public static IWorld BurnAsset(
            this IWorld world,
            IActionContext context,
            Address owner,
            FungibleAssetValue value) =>
                world.SetCurrencyAccount(
                    world.GetCurrencyAccount(value.Currency).BurnAsset(context, owner, value));

        /// <summary>
        /// Transfers the fungible asset <paramref name="value"/> (i.e., in-game monetary)
        /// from the <paramref name="sender"/> to the <paramref name="recipient"/>.
        /// </summary>
        /// <param name="world">The <see cref="IWorld"/> to manipulate.</param>
        /// <param name="context">The <see cref="IActionContext"/> of the <see cref="IAction"/>
        /// executing this method.</param>
        /// <param name="sender">The address who sends the fungible asset to
        /// the <paramref name="recipient"/>.</param>
        /// <param name="recipient">The address who receives the fungible asset from
        /// the <paramref name="sender"/>.</param>
        /// <param name="value">The asset value to transfer.</param>
        /// <returns>A new <see cref="IWorld"/> instance that the given <paramref
        /// name="value"/>  is subtracted from <paramref name="sender"/>'s balance and added to
        /// <paramref name="recipient"/>'s balance.</returns>
        /// <exception cref="ArgumentOutOfRangeException">Thrown when the <paramref name="value"/>
        /// is less than or equal to zero.</exception>
        /// <exception cref="InsufficientBalanceException">Thrown when the <paramref name="sender"/>
        /// has insufficient balance than <paramref name="value"/> to transfer.</exception>
        /// <remarks>
        /// The behavior is different depending on <paramref name="context"/>'s
        /// <see cref="IActionContext.BlockProtocolVersion"/>.  There is a bug for version 0
        /// where this may not act as intended.  Such behavior is left intact for backward
        /// compatibility.
        /// </remarks>
        [Pure]
        public static IWorld TransferAsset(
            this IWorld world,
            IActionContext context,
            Address sender,
            Address recipient,
            FungibleAssetValue value) =>
                context.BlockProtocolVersion > 0
                    ? world.SetCurrencyAccount(
                        world
                            .GetCurrencyAccount(value.Currency)
                            .TransferAsset(sender, recipient, value))
#pragma warning disable CS0618 // Obsolete
                    : world.SetCurrencyAccount(
                        world
                            .GetCurrencyAccount(value.Currency)
                            .TransferAssetV0(sender, recipient, value));
#pragma warning restore CS0618

        /// <summary>
        /// <para>
        /// Returns the total supply of <paramref name="currency"/>.
        /// </para>
        /// <para>
        /// The total supply of a given <see cref="Currency"/> is <em>determined</em>
        /// by the following:
        /// <list type="bullet">
        ///     <item><description>
        ///         If <see cref="IWorldState.Version"/> is less than
        ///         <see cref="BlockMetadata.CurrencyAccountProtocolVersion"/>,
        ///         it is the amount of total supply for the <see cref="Currency"/> in question
        ///         if the value of <see cref="Currency.TotalSupplyTrackable"/>
        ///         is <see langword="true"/>, and zero otherwise.  That is, an untracked
        ///         <see cref="Currency"/>'s total supply is always considered zero.
        ///     </description></item>
        ///     <item><description>
        ///         If <see cref="IWorldState.Version"/> is greater than or equal to
        ///         <see cref="BlockMetadata.CurrencyAccountProtocolVersion"/>,
        ///         it is the amount of total supply for the <see cref="Currency"/> in question
        ///         regardless of the value of <see cref="Currency.TotalSupplyTrackable"/>.
        ///     </description></item>
        /// </list>
        /// </para>
        /// </summary>
        /// <param name="worldState">The <see cref="IWorldState"/> to read from.</param>
        /// <param name="currency">The currency type to query.</param>
        /// <returns>The total supply of the <paramref name="currency"/>.
        /// </returns>
        [Pure]
        public static FungibleAssetValue GetTotalSupply(
            this IWorldState worldState,
            Currency currency) =>
                worldState.GetCurrencyAccount(currency).GetTotalSupply(currency);

        /// <summary>
        /// Returns the validator set.
        /// </summary>
        /// <param name="worldState">The <see cref="IWorldState"/> to read from.</param>
        /// <returns>The validator set of type <see cref="ValidatorSet"/>.
        /// </returns>
        [Pure]
        public static ValidatorSet GetValidatorSet(this IWorldState worldState) =>
            worldState.GetValidatorSetAccount().GetValidatorSet();

        /// <summary>
        /// Sets <paramref name="validatorSet"/> to the stored <see cref="ValidatorSet"/>.
        /// </summary>
        /// <param name="world">The <see cref="IWorld"/> to manipulate.</param>
        /// <param name="validatorSet">The <see cref="ValidatorSet"/> instance to write.</param>
        /// <returns>A new <see cref="IWorld"/> instance with
        /// <paramref name="validator"/> set.</returns>
        [Pure]
        public static IWorld SetValidatorSet(this IWorld world, ValidatorSet validatorSet) =>
            world.SetValidatorSetAccount(
                world.GetValidatorSetAccount().SetValidatorSet(validatorSet));

        [Pure]
        internal static ValidatorSetAccount GetValidatorSetAccount(this IWorldState worldState) =>
            worldState.Version >= BlockMetadata.ValidatorSetAccountProtocolVersion
                ? new ValidatorSetAccount(
                    worldState.GetAccountState(ReservedAddresses.ValidatorSetAccount).Trie,
                    worldState.Version)
                : new ValidatorSetAccount(
                    worldState.GetAccountState(ReservedAddresses.LegacyAccount).Trie,
                    worldState.Version);

        [Pure]
        internal static CurrencyAccount GetCurrencyAccount(
            this IWorldState worldState,
            Currency currency) =>
            worldState.Version >= BlockMetadata.CurrencyAccountProtocolVersion
                ? new CurrencyAccount(
                    worldState.GetAccountState(new Address(currency.Hash.ByteArray)).Trie,
                    worldState.Version,
                    currency)
                : new CurrencyAccount(
                    worldState.GetAccountState(ReservedAddresses.LegacyAccount).Trie,
                    worldState.Version,
                    currency);

        [Pure]
        internal static IWorld SetCurrencyAccount(
            this IWorld world,
            CurrencyAccount currencyAccount) =>
                world.Version == currencyAccount.WorldVersion
                    ? world.Version >= BlockMetadata.CurrencyAccountProtocolVersion
                        ? world.SetAccount(
                            new Address(currencyAccount.Currency.Hash.ByteArray),
                            currencyAccount.AsAccount())
                        : world.SetAccount(
                            ReservedAddresses.LegacyAccount,
                            currencyAccount.AsAccount())
                    : throw new ArgumentException(
                        $"Given {nameof(currencyAccount)} must have the same version as " +
                        $"the version of the world {world.Version}: " +
                        $"{currencyAccount.WorldVersion}",
                        nameof(currencyAccount));

        [Pure]
        internal static IWorld SetValidatorSetAccount(
            this IWorld world,
            ValidatorSetAccount validatorSetAccount) =>
                world.Version == validatorSetAccount.WorldVersion
                    ? world.Version >= BlockMetadata.ValidatorSetAccountProtocolVersion
                        ? world.SetAccount(
                            ReservedAddresses.ValidatorSetAccount,
                            validatorSetAccount.AsAccount())
                        : world.SetAccount(
                            ReservedAddresses.LegacyAccount,
                            validatorSetAccount.AsAccount())
                    : throw new ArgumentException(
                        $"Given {nameof(validatorSetAccount)} must have the same version as " +
                        $"the version of the world {world.Version}: " +
                        $"{validatorSetAccount.WorldVersion}",
                        nameof(validatorSetAccount));
    }
}
