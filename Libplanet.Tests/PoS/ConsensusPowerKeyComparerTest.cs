using Libplanet.PoS;
using Xunit;

namespace Libplanet.Tests.PoS
{
    public class ConsensusPowerKeyComparerTest : PoSTest
    {
        private readonly ConsensusPowerKeyComparer _consensusPowerKeyComparer;

        public ConsensusPowerKeyComparerTest()
        {
            _consensusPowerKeyComparer = new ConsensusPowerKeyComparer();
        }

        [Fact]
        public void CompareDifferentTokenTest()
        {
            ConsensusPowerKey consensusPowerKeyA = new ConsensusPowerKey(
                CreateAddress(), Asset.ConsensusToken * 10);
            ConsensusPowerKey consensusPowerKeyB = new ConsensusPowerKey(
                CreateAddress(), Asset.ConsensusToken * 11);
            Assert.True(_consensusPowerKeyComparer.Compare(
                consensusPowerKeyA, consensusPowerKeyB) > 0);
        }

        [Fact]
        public void CompareSameTokenTest()
        {
            ConsensusPowerKey consensusPowerKeyA = new ConsensusPowerKey(
                new Address("1000000000000000000000000000000000000001"), Asset.ConsensusToken * 10);
            ConsensusPowerKey consensusPowerKeyB = new ConsensusPowerKey(
                new Address("1000000000000000000000000000000000000002"), Asset.ConsensusToken * 10);
            Assert.True(_consensusPowerKeyComparer.Compare(
                consensusPowerKeyA, consensusPowerKeyB) > 0);
        }
    }
}
