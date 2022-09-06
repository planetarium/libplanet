using Libplanet.PoS.Model;
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
            Delegation newDelegation
                = new Delegation(_delegation.Serialize());
            Assert.Equal(_delegation, newDelegation);
        }
    }
}
