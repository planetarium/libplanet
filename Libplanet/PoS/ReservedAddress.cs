namespace Libplanet.PoS
{
    public static class ReservedAddress
    {
        public static readonly Address BondedPool
            = new Address("0000000000000000000000000000000000000001");

        public static readonly Address UnbondedPool
            = new Address("0000000000000000000000000000000000000002");

        public static readonly Address ConsensusPowerIndex
            = new Address("0000000000000000000000000000000000000003");

        public static readonly Address UnbondingSet
            = new Address("0000000000000000000000000000000000000004");

        public static readonly Address Validators
            = new Address("0000000000000000000000000000000000000005");
    }
}
