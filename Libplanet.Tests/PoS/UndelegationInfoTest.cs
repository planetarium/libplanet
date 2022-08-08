using Bencodex.Types;
using Libplanet.PoS;
using Xunit;

namespace Libplanet.Tests.PoS
{
    public class UndelegationInfoTest : PoSTest
    {
        private readonly UndelegationInfo _undelegationInfo;

        public UndelegationInfoTest()
        {
            _undelegationInfo = new UndelegationInfo(CreateAddress(), CreateAddress());
        }

        [Fact]
        public void MarshallingTest()
        {
            UndelegationInfo newUndelegationInfo
                = new UndelegationInfo((List)_undelegationInfo.Serialize());
            Assert.Equal(
                _undelegationInfo.Address,
                newUndelegationInfo.Address);
            Assert.Equal(
                _undelegationInfo.DelegatorAddress,
                newUndelegationInfo.DelegatorAddress);
            Assert.Equal(
                _undelegationInfo.ValidatorAddress,
                newUndelegationInfo.ValidatorAddress);
            Assert.Equal(
                _undelegationInfo.UndelegationEntryIndex,
                newUndelegationInfo.UndelegationEntryIndex);
            Assert.Equal(
                _undelegationInfo.UndelegationEntryAddresses,
                newUndelegationInfo.UndelegationEntryAddresses);
        }
    }
}
