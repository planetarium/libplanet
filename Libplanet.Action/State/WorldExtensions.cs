using System.Collections.Immutable;
using Bencodex.Types;
using Libplanet.Crypto;

namespace Libplanet.Action.State
{
    internal static class WorldExtensions
    {
        internal static IAccountState GetFungibleAssetsAccount(this IWorldState world) =>
            world.GetAccount(ReservedAddresses.LegacyAccount);

        internal static IAccount GetValidatorSetAccount(this IWorldState world) =>
            world.GetAccount(ReservedAddresses.LegacyAccount);

        internal static IWorld SetFungibleAssetsAccount(
            this IWorld world,
            IAccount account) =>
            world.SetAccount(ReservedAddresses.LegacyAccount, account);

        internal static IWorld SetValidatorSetAccount(
            this IWorld world,
            IAccount account) =>
            world.SetAccount(ReservedAddresses.LegacyAccount, account);
    }
}
