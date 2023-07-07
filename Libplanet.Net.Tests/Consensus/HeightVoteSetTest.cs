using System;
using System.Linq;
using Libplanet.Blockchain;
using Libplanet.Blocks;
using Libplanet.Consensus;
using Libplanet.Crypto;
using Libplanet.Net.Consensus;
using Libplanet.Tests.Store;
using Xunit;

namespace Libplanet.Net.Tests.Consensus
{
    public class HeightVoteSetTest
    {
        private static Bencodex.Codec _codec = new Bencodex.Codec();
        private BlockChain _blockChain;
        private BlockCommit _lastCommit;
        private HeightVoteSet _heightVoteSet;

        /// <summary>
        /// Sets up a <see cref="BlockChain"/> with tip index of 1, i.e. two blocks.
        /// </summary>
        public HeightVoteSetTest()
        {
            _blockChain = TestUtils.CreateDummyBlockChain(
                new MemoryStoreFixture(TestUtils.Policy.BlockAction));
            var block = _blockChain.ProposeBlock(TestUtils.PrivateKeys[1]);
            _lastCommit = TestUtils.CreateBlockCommit(block);
            _heightVoteSet = new HeightVoteSet(2, TestUtils.ValidatorSet);
            _blockChain.Append(block, TestUtils.CreateBlockCommit(block));
        }

        [Fact]
        public void CannotAddDifferentHeight()
        {
            var preVote = new VoteMetadata(
                3,
                0,
                default,
                DateTimeOffset.UtcNow,
                TestUtils.PrivateKeys[0].PublicKey,
                VoteFlag.PreVote).Sign(TestUtils.PrivateKeys[0]);

            Assert.Throws<InvalidVoteException>(() => _heightVoteSet.AddVote(preVote));
        }

        [Fact]
        public void CannotAddUnknownValidator()
        {
            var key = new PrivateKey();
            var preVote = new VoteMetadata(
                2, 0, default, DateTimeOffset.UtcNow, key.PublicKey, VoteFlag.PreVote).Sign(key);

            Assert.Throws<InvalidVoteException>(() => _heightVoteSet.AddVote(preVote));
        }

        [Fact]
        public void CannotAddMultipleVotesPerRoundPerValidator()
        {
            Random random = new Random();
            var preVote0 = new VoteMetadata(
                2,
                0,
                default,
                DateTimeOffset.UtcNow,
                TestUtils.PrivateKeys[0].PublicKey,
                VoteFlag.PreVote).Sign(TestUtils.PrivateKeys[0]);
            var preVote1 = new VoteMetadata(
                2,
                0,
                new BlockHash(TestUtils.GetRandomBytes(BlockHash.Size)),
                DateTimeOffset.UtcNow,
                TestUtils.PrivateKeys[0].PublicKey,
                VoteFlag.PreVote).Sign(TestUtils.PrivateKeys[0]);
            var preCommit0 = new VoteMetadata(
                2,
                0,
                default,
                DateTimeOffset.UtcNow,
                TestUtils.PrivateKeys[0].PublicKey,
                VoteFlag.PreCommit).Sign(TestUtils.PrivateKeys[0]);
            var preCommit1 = new VoteMetadata(
                2,
                0,
                new BlockHash(TestUtils.GetRandomBytes(BlockHash.Size)),
                DateTimeOffset.UtcNow,
                TestUtils.PrivateKeys[0].PublicKey,
                VoteFlag.PreCommit).Sign(TestUtils.PrivateKeys[0]);

            _heightVoteSet.AddVote(preVote0);
            Assert.Throws<InvalidVoteException>(() => _heightVoteSet.AddVote(preVote1));
            _heightVoteSet.AddVote(preCommit0);
            Assert.Throws<InvalidVoteException>(
                () => _heightVoteSet.AddVote(preCommit1));
        }

        [Fact]
        public void GetCount()
        {
            var preVotes = TestUtils.PrivateKeys.Select(key =>
                new VoteMetadata(
                    2, 0, default, DateTimeOffset.UtcNow, key.PublicKey, VoteFlag.PreVote)
                    .Sign(key)).ToList();
            var privateKey = TestUtils.PrivateKeys[0];
            var preCommit = new VoteMetadata(
                    2,
                    0,
                    default,
                    DateTimeOffset.UtcNow,
                    privateKey.PublicKey,
                    VoteFlag.PreCommit)
                .Sign(privateKey);

            foreach (var preVote in preVotes)
            {
                _heightVoteSet.AddVote(preVote);
            }

            _heightVoteSet.AddVote(preCommit);

            Assert.Equal(5, _heightVoteSet.Count);
        }
    }
}
