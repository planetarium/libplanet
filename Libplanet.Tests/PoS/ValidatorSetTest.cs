using Libplanet.PoS.Model;
using Xunit;

namespace Libplanet.Tests.PoS
{
    public class ValidatorSetTest : PoSTest
    {
        private readonly ValidatorSet _validatorSet;

        public ValidatorSetTest()
        {
            _validatorSet = new ValidatorSet();
        }

        [Fact]
        public void MarshallingTest()
        {
            ValidatorSet newValidatorSet = new ValidatorSet(
                _validatorSet.Serialize());
            Assert.Equal(
                _validatorSet.Set,
                newValidatorSet.Set);
        }
    }
}
