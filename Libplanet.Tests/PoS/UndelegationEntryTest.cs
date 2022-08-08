using System;
using Bencodex.Types;
using Libplanet.PoS;
using Xunit;

namespace Libplanet.Tests.PoS
{
    public class UndelegationEntryTest : PoSTest
    {
        private readonly UndelegationEntry _undelegationEntry;

        public UndelegationEntryTest()
        {
            _undelegationEntry = new UndelegationEntry(
                CreateAddress(), Asset.ConsensusToken * 1, 1, 1, 1);
        }

        [Fact]
        public void InvalidUnbondingConsensusToken()
        {
            Assert.Throws<ArgumentException>(
                () => _undelegationEntry.UnbondingConsensusToken = Asset.GovernanceToken * 1);
            Assert.Throws<ArgumentException>(
                () => _undelegationEntry.UnbondingConsensusToken = Asset.Share * 1);
        }

        [Fact]
        public void MarshallingTest()
        {
            UndelegationEntry newUndelegationEntry
                = new UndelegationEntry((List)_undelegationEntry.Serialize());
            Assert.Equal(
                _undelegationEntry.Address,
                newUndelegationEntry.Address);
            Assert.Equal(
                _undelegationEntry.UndelegationAddress,
                newUndelegationEntry.UndelegationAddress);
            Assert.Equal(
                _undelegationEntry.UnbondingConsensusToken,
                newUndelegationEntry.UnbondingConsensusToken);
            Assert.Equal(
                _undelegationEntry.Index,
                newUndelegationEntry.Index);
            Assert.Equal(
                _undelegationEntry.CompletionBlockHeight,
                newUndelegationEntry.CompletionBlockHeight);
        }
    }
}
