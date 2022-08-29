using Libplanet.PoS;
using Xunit;

namespace Libplanet.Tests.PoS
{
    public class ValidatorPowerComparerTest : PoSTest
    {
        private readonly ValidatorPowerComparer _validatorPowerComparer;

        public ValidatorPowerComparerTest()
        {
            _validatorPowerComparer = new ValidatorPowerComparer();
        }

        [Fact]
        public void CompareDifferentTokenTest()
        {
            ValidatorPower validatorPowerA = new ValidatorPower(
                CreateAddress(), Asset.ConsensusToken * 10);
            ValidatorPower validatorPowerB = new ValidatorPower(
                CreateAddress(), Asset.ConsensusToken * 11);
            Assert.True(_validatorPowerComparer.Compare(
                validatorPowerA, validatorPowerB) > 0);
        }

        [Fact]
        public void CompareSameTokenTest()
        {
            ValidatorPower validatorPowerA = new ValidatorPower(
                new Address("1000000000000000000000000000000000000001"), Asset.ConsensusToken * 10);
            ValidatorPower validatorPowerB = new ValidatorPower(
                new Address("1000000000000000000000000000000000000002"), Asset.ConsensusToken * 10);
            Assert.True(_validatorPowerComparer.Compare(
                validatorPowerA, validatorPowerB) > 0);
        }
    }
}
