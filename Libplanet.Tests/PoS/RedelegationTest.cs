using Libplanet.PoS;
using Xunit;

namespace Libplanet.Tests.PoS
{
    public class RedelegationTest : PoSTest
    {
        private readonly Redelegation _redelegation;

        public RedelegationTest()
        {
            _redelegation = new Redelegation(
                CreateAddress(), CreateAddress(), CreateAddress());
        }

        [Fact]
        public void MarshallingTest()
        {
            Redelegation newRedelegationInfo
                = new Redelegation(_redelegation.Serialize());
            Assert.Equal(
                _redelegation.Address,
                newRedelegationInfo.Address);
            Assert.Equal(
                _redelegation.DelegatorAddress,
                newRedelegationInfo.DelegatorAddress);
            Assert.Equal(
                _redelegation.SrcValidatorAddress,
                newRedelegationInfo.SrcValidatorAddress);
            Assert.Equal(
                _redelegation.DstValidatorAddress,
                newRedelegationInfo.DstValidatorAddress);
            Assert.Equal(
                _redelegation.RedelegationEntryIndex,
                newRedelegationInfo.RedelegationEntryIndex);
            Assert.Equal(
                _redelegation.RedelegationEntryAddresses,
                newRedelegationInfo.RedelegationEntryAddresses);
        }
    }
}
