using System.Collections.Immutable;
using Bencodex.Types;
using Libplanet.Crypto;

namespace Libplanet.Action.State
{
    internal static class WorldExtensions
    {
        internal static IAccountState GetFungibleAssetsAccountState(this IWorldState world) =>
            world.GetAccount(
                world.Legacy
                    ? ReservedAddresses.LegacyAccount
                    : ReservedAddresses.FungibleAssetsAccount);

        internal static IAccount GetValidatorSetAccountState(this IWorldState world) =>
            world.GetAccount(
                world.Legacy
                    ? ReservedAddresses.LegacyAccount
                    : ReservedAddresses.ValidatorSetAddress);

        internal static IWorld SetFungibleAssetsAccount(this IWorld world, IAccount account) =>
            world.SetAccount(account);
    }
}
