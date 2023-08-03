using Libplanet.Crypto;

namespace Libplanet.Action.State
{
    public static class ReservedAddresses
    {
        public static readonly Address LegacyAccount
            = new Address("1000000000000000000000000000000000000000");

        public static readonly Address FungibleAssetsAccount
            = new Address("1000000000000000000000000000000000000001");

        public static readonly Address ValidatorSetAddress
            = new Address("1000000000000000000000000000000000000002");
    }
}
