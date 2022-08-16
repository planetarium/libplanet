using Libplanet.PoS;
using Xunit;

namespace Libplanet.Tests.PoS
{
    public class ConsensusPowerIndexInfoTest : PoSTest
    {
        private readonly ConsensusPowerIndexInfo _consensusPowerIndexInfo;

        public ConsensusPowerIndexInfoTest()
        {
            _consensusPowerIndexInfo = new ConsensusPowerIndexInfo();
        }

        [Fact]
        public void MarshallingTest()
        {
            ConsensusPowerIndexInfo newConsensusPowerIndexInfo = new ConsensusPowerIndexInfo(
                _consensusPowerIndexInfo.Serialize());
            Assert.Equal(_consensusPowerIndexInfo.Index, newConsensusPowerIndexInfo.Index);
        }
    }
}
