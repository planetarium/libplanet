using Libplanet.Crypto;
using Libplanet.PoS;
using Libplanet.PoS.Model;
using Xunit;

namespace Libplanet.Tests.PoS
{
    public class ValidatorPowerTest : PoSTest
    {
        private readonly ValidatorPower _validatorPower;

        public ValidatorPowerTest()
        {
            _validatorPower = new ValidatorPower(
                CreateAddress(),
                new PrivateKey().PublicKey,
                Asset.ConsensusToken * 10);
        }

        [Fact]
        public void InvalidUnbondingConsensusToken()
        {
            Assert.Throws<InvalidCurrencyException>(
                () => _validatorPower.ConsensusToken = Asset.GovernanceToken * 1);
            Assert.Throws<InvalidCurrencyException>(
                () => _validatorPower.ConsensusToken = Asset.Share * 1);
        }

        [Fact]
        public void MarshallingTest()
        {
            ValidatorPower newValidatorPower = new ValidatorPower(
                _validatorPower.Serialize());
            Assert.Equal(_validatorPower, newValidatorPower);
        }
    }
}
