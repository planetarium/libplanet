using Libplanet.Crypto;
using Libplanet.PoS;
using Libplanet.PoS.Model;
using Xunit;

namespace Libplanet.Tests.PoS
{
    public class ValidatorTest : PoSTest
    {
        private readonly Validator _validator;

        public ValidatorTest()
        {
            _validator = new Validator(CreateAddress(), new PrivateKey().PublicKey);
        }

        [Fact]
        public void InvalidShareTypeTest()
        {
            Assert.Throws<InvalidCurrencyException>(
                () => _validator.DelegatorShares = Asset.ConsensusToken * 1);
            Assert.Throws<InvalidCurrencyException>(
                () => _validator.DelegatorShares = Asset.GovernanceToken * 1);
        }

        [Fact]
        public void MarshallingTest()
        {
            Validator newValidator = new Validator(_validator.Serialize());
            Assert.Equal(_validator, newValidator);
        }
    }
}
