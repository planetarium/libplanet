namespace Libplanet.Action.State
{
    internal static class WorldExtensions
    {
        internal static IAccount GetFungibleAssetsAccount(this IWorld world) =>
            world.GetAccount(ReservedAddresses.LegacyAccount);

        internal static IAccount GetValidatorSetAccount(this IWorld world) =>
            world.GetAccount(ReservedAddresses.LegacyAccount);

        internal static IWorld SetFungibleAssetsAccount(
            this IWorld world,
            IAccount account) =>
            world.SetAccount(ReservedAddresses.LegacyAccount, account);
    }
}
