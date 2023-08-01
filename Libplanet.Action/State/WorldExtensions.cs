using System.Collections.Immutable;
using Bencodex.Types;
using Libplanet.Crypto;

namespace Libplanet.Action.State
{
    internal static class WorldExtensions
    {
        internal static IAccount GetFungibleAssetsAccount(this IWorld world) =>
            world.GetAccount(
                world.Legacy
                    ? ReservedAddresses.LegacyAccount
                    : ReservedAddresses.FungibleAssetsAccount);

        internal static IAccount GetValidatorSetAccount(this IWorld world) =>
            world.GetAccount(
                world.Legacy
                    ? ReservedAddresses.LegacyAccount
                    : ReservedAddresses.ValidatorSetAddress);

        internal static IWorld SetFungibleAssetsAccount(this IWorld world, IAccount account) =>
            world.SetAccount(
                world.Legacy
                    ? ReservedAddresses.LegacyAccount
                    : ReservedAddresses.FungibleAssetsAccount,
                account);

        internal static IWorld SetValidatorSetAccount(this IWorld world, IAccount account) =>
            world.SetAccount(
                world.Legacy
                    ? ReservedAddresses.LegacyAccount
                    : ReservedAddresses.ValidatorSetAddress,
                account);
    }
}
