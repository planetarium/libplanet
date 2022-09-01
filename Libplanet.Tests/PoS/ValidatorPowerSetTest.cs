using Libplanet.PoS;
using Xunit;

namespace Libplanet.Tests.PoS
{
    public class ValidatorPowerSetTest : PoSTest
    {
        private readonly ValidatorPowerSet _validatorPowerSet;

        public ValidatorPowerSetTest()
        {
            _validatorPowerSet = new ValidatorPowerSet();
        }

        [Fact]
        public void MarshallingTest()
        {
            ValidatorPowerSet newValidatorPowerSet = new ValidatorPowerSet(
                _validatorPowerSet.Serialize());
            Assert.Equal(
                _validatorPowerSet.PreviousBondedSet,
                newValidatorPowerSet.PreviousBondedSet);
            Assert.Equal(
                _validatorPowerSet.BondedSet,
                newValidatorPowerSet.BondedSet);
            Assert.Equal(
                _validatorPowerSet.UnbondedSet,
                newValidatorPowerSet.UnbondedSet);
        }
    }
}
