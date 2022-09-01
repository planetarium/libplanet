namespace Libplanet.PoS
{
    internal static class ReservedAddress
    {
        internal static readonly Address BondedPool
            = new Address("0000000000000000000000000000000000000001");

        internal static readonly Address UnbondedPool
            = new Address("0000000000000000000000000000000000000002");

        internal static readonly Address ValidatorPowerIndex
            = new Address("0000000000000000000000000000000000000003");

        internal static readonly Address ValidatorPowerSet
            = new Address("0000000000000000000000000000000000000005");

        internal static readonly Address UnbondingSet
            = new Address("0000000000000000000000000000000000000006");
    }
}
