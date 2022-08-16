using Libplanet.PoS;
using Xunit;

namespace Libplanet.Tests.PoS
{
    public class DelegationInfoTest : PoSTest
    {
        private readonly DelegationInfo _delegationInfo;

        public DelegationInfoTest()
        {
            _delegationInfo = new DelegationInfo(CreateAddress(), CreateAddress());
        }

        [Fact]
        public void MarshallingTest()
        {
            DelegationInfo newDelegationInfo
                = new DelegationInfo(_delegationInfo.Serialize());
            Assert.Equal(_delegationInfo.Address, newDelegationInfo.Address);
            Assert.Equal(_delegationInfo.DelegatorAddress, newDelegationInfo.DelegatorAddress);
            Assert.Equal(_delegationInfo.ValidatorAddress, newDelegationInfo.ValidatorAddress);
        }
    }
}
