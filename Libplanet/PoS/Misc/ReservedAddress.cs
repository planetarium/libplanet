namespace Libplanet.PoS
{
    public static class ReservedAddress
    {
        public static readonly Address BondedPool
            = new Address("0000000000000000000000000000000000000001");

        public static readonly Address UnbondedPool
            = new Address("0000000000000000000000000000000000000002");

        public static readonly Address RewardPool
            = new Address("0000000000000000000000000000000000000003");

        public static readonly Address ValidatorPowerIndex
            = new Address("0000000000000000000000000000000000000004");

        public static readonly Address PreviousBondedValidatorSet
            = new Address("0000000000000000000000000000000000000005");

        public static readonly Address BondedValidatorSet
            = new Address("0000000000000000000000000000000000000006");

        public static readonly Address UnbondedValidatorSet
            = new Address("0000000000000000000000000000000000000007");

        public static readonly Address UnbondingSet
            = new Address("0000000000000000000000000000000000000008");

        public static readonly Address BlockRewardHistory
            = new Address("0000000000000000000000000000000000000009");

        public static readonly Address CommunityPool
            = new Address("0000000000000000000000000000000000000010");
    }
}
