namespace Libplanet.PoS
{
    public static class ReservedAddress
    {
        public static readonly Address BondedPool
            = new Address("0000000000000000000000000000000000000001");

        public static readonly Address UnbondedPool
            = new Address("0000000000000000000000000000000000000002");

        public static readonly Address ValidatorPowerIndex
            = new Address("0000000000000000000000000000000000000003");

        public static readonly Address ValidatorPowerSet
            = new Address("0000000000000000000000000000000000000005");

        public static readonly Address UnbondingSet
            = new Address("0000000000000000000000000000000000000006");
    }
}
