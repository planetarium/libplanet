using Libplanet.PoS;
using Libplanet.PoS.Model;
using Xunit;

namespace Libplanet.Tests.PoS
{
    public class UndelegationEntryTest : PoSTest
    {
        private readonly UndelegationEntry _undelegationEntry;

        public UndelegationEntryTest()
        {
            _undelegationEntry = new UndelegationEntry(
                CreateAddress(), Asset.ConsensusToken * 1, 1, 1);
        }

        [Fact]
        public void InvalidUnbondingConsensusToken()
        {
            Assert.Throws<InvalidCurrencyException>(
                () => _undelegationEntry.UnbondingConsensusToken = Asset.GovernanceToken * 1);
            Assert.Throws<InvalidCurrencyException>(
                () => _undelegationEntry.UnbondingConsensusToken = Asset.Share * 1);
        }

        [Fact]
        public void MarshallingTest()
        {
            UndelegationEntry newUndelegationEntry
                = new UndelegationEntry(_undelegationEntry.Serialize());
            Assert.Equal(_undelegationEntry, newUndelegationEntry);
        }
    }
}
