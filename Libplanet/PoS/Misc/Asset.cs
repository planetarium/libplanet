using Libplanet.Assets;

namespace Libplanet.PoS
{
    internal struct Asset
    {
        public static readonly Currency GovernanceToken =
            new Currency("GovernanceToken", 18, minters: null);

        public static readonly Currency ConsensusToken =
            new Currency("ConsensusToken", 18, minters: null);

        public static readonly Currency Share =
            new Currency("Share", 18, minters: null);

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
