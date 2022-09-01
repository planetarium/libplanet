using Libplanet.PoS;
using Xunit;

namespace Libplanet.Tests.PoS
{
    public class DelegationTest : PoSTest
    {
        private readonly Delegation _delegation;

        public DelegationTest()
        {
            _delegation = new Delegation(CreateAddress(), CreateAddress());
        }

        [Fact]
        public void MarshallingTest()
        {
            Delegation newDelegationInfo
                = new Delegation(_delegation.Serialize());
            Assert.Equal(_delegation.Address, newDelegationInfo.Address);
            Assert.Equal(_delegation.DelegatorAddress, newDelegationInfo.DelegatorAddress);
            Assert.Equal(_delegation.ValidatorAddress, newDelegationInfo.ValidatorAddress);
        }
    }
}
