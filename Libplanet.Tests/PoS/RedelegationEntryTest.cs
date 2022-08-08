using System;
using Bencodex.Types;
using Libplanet.PoS;
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
            Assert.Throws<ArgumentException>(
                () => _redelegationEntry.RedelegatingShare = Asset.GovernanceToken * 1);
            Assert.Throws<ArgumentException>(
                () => _redelegationEntry.RedelegatingShare = Asset.ConsensusToken * 1);
            Assert.Throws<ArgumentException>(
                () => _redelegationEntry.UnbondingConsensusToken = Asset.GovernanceToken * 1);
            Assert.Throws<ArgumentException>(
                () => _redelegationEntry.UnbondingConsensusToken = Asset.Share * 1);
            Assert.Throws<ArgumentException>(
                () => _redelegationEntry.IssuedShare = Asset.GovernanceToken * 1);
            Assert.Throws<ArgumentException>(
                () => _redelegationEntry.IssuedShare = Asset.ConsensusToken * 1);
        }

        [Fact]
        public void MarshallingTest()
        {
            RedelegationEntry newRedelegationEntry
                = new RedelegationEntry((List)_redelegationEntry.Serialize());
            Assert.Equal(
                _redelegationEntry.Address,
                newRedelegationEntry.Address);
            Assert.Equal(
                _redelegationEntry.RedelegationAddress,
                newRedelegationEntry.RedelegationAddress);
            Assert.Equal(
                _redelegationEntry.RedelegatingShare,
                newRedelegationEntry.RedelegatingShare);
            Assert.Equal(
                _redelegationEntry.UnbondingConsensusToken,
                newRedelegationEntry.UnbondingConsensusToken);
            Assert.Equal(
                _redelegationEntry.IssuedShare,
                newRedelegationEntry.IssuedShare);
            Assert.Equal(
                _redelegationEntry.Index,
                newRedelegationEntry.Index);
            Assert.Equal(
                _redelegationEntry.CompletionBlockHeight,
                newRedelegationEntry.CompletionBlockHeight);
        }
    }
}
