using Libplanet.Crypto;
using Libplanet.PoS;
using Xunit;

namespace Libplanet.Tests.PoS
{
    public class BondedValidatorTest : PoSTest
    {
        private readonly BondedValidator _bondedValidator;

        public BondedValidatorTest()
        {
            PublicKey operatorPublicKey = new PrivateKey().PublicKey;
            Address validatorAddress = operatorPublicKey.ToAddress();
            double powerFrac = 0.1;
            _bondedValidator = new BondedValidator(validatorAddress, operatorPublicKey, powerFrac);
        }

        [Fact]
        public void MarshallingTest()
        {
            BondedValidator newBondedValidator
                = new BondedValidator(_bondedValidator.Serialize());
            Assert.Equal(_bondedValidator, newBondedValidator);
        }
    }
}
