using Libplanet.PoS;
using Xunit;

namespace Libplanet.Tests.PoS
{
    public class UndelegationTest : PoSTest
    {
        private readonly Undelegation _undelegation;

        public UndelegationTest()
        {
            _undelegation = new Undelegation(CreateAddress(), CreateAddress());
        }

        [Fact]
        public void MarshallingTest()
        {
            Undelegation newUndelegationInfo
                = new Undelegation(_undelegation.Serialize());
            Assert.Equal(_undelegation, newUndelegationInfo);
        }
    }
}
