using Libplanet.PoS;
using Xunit;

namespace Libplanet.Tests.PoS
{
    public class ValidatorPowerIndexTest : PoSTest
    {
        private readonly ValidatorPowerIndex _validatorPowerIndex;

        public ValidatorPowerIndexTest()
        {
            _validatorPowerIndex = new ValidatorPowerIndex();
        }

        [Fact]
        public void MarshallingTest()
        {
            ValidatorPowerIndex newValidatorPowerIndex = new ValidatorPowerIndex(
                _validatorPowerIndex.Serialize());
            Assert.Equal(_validatorPowerIndex.Index, newValidatorPowerIndex.Index);
        }
    }
}
