namespace Libplanet.PoS
{
    public static class ReservedAddress
    {
        public static readonly Address BondedPool
            = new Address("0000000000000000000000000000000000100001");

        public static readonly Address UnbondedPool
            = new Address("0000000000000000000000000000000000100002");

        public static readonly Address RewardPool
            = new Address("0000000000000000000000000000000000100003");

        public static readonly Address ValidatorPowerIndex
            = new Address("0000000000000000000000000000000000100004");

        public static readonly Address PreviousBondedValidatorSet
            = new Address("0000000000000000000000000000000000100005");

        public static readonly Address BondedValidatorSet
            = new Address("0000000000000000000000000000000000100006");

        public static readonly Address UnbondedValidatorSet
            = new Address("0000000000000000000000000000000000100007");

        public static readonly Address UnbondingSet
            = new Address("0000000000000000000000000000000000100008");

        public static readonly Address BlockRewardHistory
            = new Address("0000000000000000000000000000000000100009");

        public static readonly Address CommunityPool
            = new Address("0000000000000000000000000000000000100010");
    }
}
