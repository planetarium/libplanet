using Bencodex.Types;
using Libplanet.PoS;
using Xunit;

namespace Libplanet.Tests.PoS
{
    public class RedelegationInfoTest : PoSTest
    {
        private readonly RedelegationInfo _redelegationInfo;

        public RedelegationInfoTest()
        {
            _redelegationInfo = new RedelegationInfo(
                CreateAddress(), CreateAddress(), CreateAddress());
        }

        [Fact]
        public void MarshallingTest()
        {
            RedelegationInfo newRedelegationInfo
                = new RedelegationInfo((List)_redelegationInfo.Serialize());
            Assert.Equal(
                _redelegationInfo.Address,
                newRedelegationInfo.Address);
            Assert.Equal(
                _redelegationInfo.DelegatorAddress,
                newRedelegationInfo.DelegatorAddress);
            Assert.Equal(
                _redelegationInfo.SrcValidatorAddress,
                newRedelegationInfo.SrcValidatorAddress);
            Assert.Equal(
                _redelegationInfo.DstValidatorAddress,
                newRedelegationInfo.DstValidatorAddress);
            Assert.Equal(
                _redelegationInfo.RedelegationEntryIndex,
                newRedelegationInfo.RedelegationEntryIndex);
            Assert.Equal(
                _redelegationInfo.RedelegationEntryAddresses,
                newRedelegationInfo.RedelegationEntryAddresses);
        }
    }
}
