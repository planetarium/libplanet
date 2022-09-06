using Libplanet.PoS;
using Libplanet.PoS.Model;
using Xunit;

namespace Libplanet.Tests.PoS
{
    public class RedelegationEntryTest : PoSTest
    {
        private readonly RedelegationEntry _redelegationEntry;

        public RedelegationEntryTest()
        {
            _redelegationEntry = new RedelegationEntry(
                CreateAddress(),
                Asset.Share * 1,
                Asset.ConsensusToken * 1,
                Asset.Share * 1,
                1,
                1);
        }

        [Fact]
        public void InvalidUnbondingConsensusToken()
        {
            Assert.Throws<InvalidCurrencyException>(
                () => _redelegationEntry.RedelegatingShare = Asset.GovernanceToken * 1);
            Assert.Throws<InvalidCurrencyException>(
                () => _redelegationEntry.RedelegatingShare = Asset.ConsensusToken * 1);
            Assert.Throws<InvalidCurrencyException>(
                () => _redelegationEntry.UnbondingConsensusToken = Asset.GovernanceToken * 1);
            Assert.Throws<InvalidCurrencyException>(
                () => _redelegationEntry.UnbondingConsensusToken = Asset.Share * 1);
            Assert.Throws<InvalidCurrencyException>(
                () => _redelegationEntry.IssuedShare = Asset.GovernanceToken * 1);
            Assert.Throws<InvalidCurrencyException>(
                () => _redelegationEntry.IssuedShare = Asset.ConsensusToken * 1);
        }

        [Fact]
        public void MarshallingTest()
        {
            RedelegationEntry newRedelegationEntry
                = new RedelegationEntry(_redelegationEntry.Serialize());
            Assert.Equal(_redelegationEntry, newRedelegationEntry);
        }
    }
}
