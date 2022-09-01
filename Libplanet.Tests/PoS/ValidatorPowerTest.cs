using Libplanet.Crypto;
using Libplanet.PoS;
using Xunit;

namespace Libplanet.Tests.PoS
{
    public class ValidatorPowerTest : PoSTest
    {
        private readonly ValidatorPower _consensusPowerKey;

        public ValidatorPowerTest()
        {
            _consensusPowerKey = new ValidatorPower(
                CreateAddress(),
                new PrivateKey().PublicKey,
                Asset.ConsensusToken * 10);
        }

        [Fact]
        public void InvalidUnbondingConsensusToken()
        {
            Assert.Throws<InvalidCurrencyException>(
                () => _consensusPowerKey.ConsensusToken = Asset.GovernanceToken * 1);
            Assert.Throws<InvalidCurrencyException>(
                () => _consensusPowerKey.ConsensusToken = Asset.Share * 1);
        }

        [Fact]
        public void MarshallingTest()
        {
            ValidatorPower newConsensusPowerKey = new ValidatorPower(
                _consensusPowerKey.Serialize());
            Assert.Equal(
                _consensusPowerKey.ValidatorAddress, newConsensusPowerKey.ValidatorAddress);
            Assert.Equal(_consensusPowerKey.ConsensusToken, newConsensusPowerKey.ConsensusToken);
        }
    }
}
