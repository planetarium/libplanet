using Libplanet.PoS;
using Xunit;

namespace Libplanet.Tests.PoS
{
    public class ValidatorsInfoTest : PoSTest
    {
        private readonly ValidatorsInfo _validatorsInfo;

        public ValidatorsInfoTest()
        {
            _validatorsInfo = new ValidatorsInfo();
        }

        [Fact]
        public void MarshallingTest()
        {
            ValidatorsInfo newValidatorsInfo = new ValidatorsInfo(_validatorsInfo.Serialize());
            Assert.Equal(
                _validatorsInfo.PreviousValidatorAddressSet,
                newValidatorsInfo.PreviousValidatorAddressSet);
            Assert.Equal(
                _validatorsInfo.ValidatorAddressSet,
                newValidatorsInfo.ValidatorAddressSet);
            Assert.Equal(
                _validatorsInfo.LatentAddressSet,
                newValidatorsInfo.LatentAddressSet);
        }
    }
}
