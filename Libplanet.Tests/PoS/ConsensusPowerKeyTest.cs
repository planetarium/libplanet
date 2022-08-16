using System;
using Libplanet.PoS;
using Xunit;

namespace Libplanet.Tests.PoS
{
    public class ConsensusPowerKeyTest : PoSTest
    {
        private readonly ConsensusPowerKey _consensusPowerKey;

        public ConsensusPowerKeyTest()
        {
            _consensusPowerKey = new ConsensusPowerKey(CreateAddress(), Asset.ConsensusToken * 10);
        }

        [Fact]
        public void InvalidUnbondingConsensusToken()
        {
            Assert.Throws<ArgumentException>(
                () => _consensusPowerKey.ConsensusToken = Asset.GovernanceToken * 1);
            Assert.Throws<ArgumentException>(
                () => _consensusPowerKey.ConsensusToken = Asset.Share * 1);
        }

        [Fact]
        public void MarshallingTest()
        {
            ConsensusPowerKey newConsensusPowerKey = new ConsensusPowerKey(
                _consensusPowerKey.Serialize());
            Assert.Equal(
                _consensusPowerKey.ValidatorAddress, newConsensusPowerKey.ValidatorAddress);
            Assert.Equal(_consensusPowerKey.ConsensusToken, newConsensusPowerKey.ConsensusToken);
        }
    }
}
