using Libplanet.Assets;

namespace Libplanet.PoS
{
    public struct Asset
    {
        public static readonly Currency GovernanceToken =
#pragma warning disable CS0618
            Currency.Uncapped("GovernanceToken", 18, minters: null);
#pragma warning restore CS0618

        public static readonly Currency ConsensusToken =
            Currency.Uncapped("ConsensusToken", 18, minters: null);

        public static readonly Currency Share =
            Currency.Uncapped("Share", 18, minters: null);

        public static FungibleAssetValue ConsensusFromGovernance(FungibleAssetValue governanceToken)
        {
            return new FungibleAssetValue(
                ConsensusToken, governanceToken.MajorUnit, governanceToken.MinorUnit);
        }

        public static FungibleAssetValue GovernanceFromConsensus(FungibleAssetValue consensusToken)
        {
            return new FungibleAssetValue(
                GovernanceToken, consensusToken.MajorUnit, consensusToken.MinorUnit);
        }
    }
}
