namespace Libplanet.PoS
{
    internal static class ReservedAddress
    {
        internal static readonly Address BondedPool
            = new Address("0000000000000000000000000000000000000001");

        internal static readonly Address UnbondedPool
            = new Address("0000000000000000000000000000000000000002");

        internal static readonly Address RewardPool
            = new Address("0000000000000000000000000000000000000003");

        internal static readonly Address ValidatorPowerIndex
            = new Address("0000000000000000000000000000000000000004");

        internal static readonly Address PreviousBondedValidatorSet
            = new Address("0000000000000000000000000000000000000005");

        internal static readonly Address BondedValidatorSet
            = new Address("0000000000000000000000000000000000000006");

        internal static readonly Address UnbondedValidatorSet
            = new Address("0000000000000000000000000000000000000007");

        internal static readonly Address UnbondingSet
            = new Address("0000000000000000000000000000000000000008");

        internal static readonly Address BlockRewardHistory
            = new Address("0000000000000000000000000000000000000009");

        internal static readonly Address CommunityPool
            = new Address("0000000000000000000000000000000000000010");
    }
}
