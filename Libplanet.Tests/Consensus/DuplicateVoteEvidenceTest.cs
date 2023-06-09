using System;
using System.Collections.Generic;
using System.Numerics;
using Libplanet.Blocks;
using Libplanet.Consensus;
using Libplanet.Crypto;
using Xunit;

namespace Libplanet.Tests.Consensus
{
    public class DuplicateVoteEvidenceTest
    {
        [Fact]
        public void CannotCreateWithSingleVote()
        {
            var key = new PrivateKey();
            var vote = new VoteMetadata(
                1,
                2,
                new BlockHash(TestUtils.GetRandomBytes(BlockHash.Size)),
                DateTimeOffset.UtcNow,
                key.PublicKey,
                VoteFlag.PreCommit).Sign(key);

            Assert.Throws<ArgumentException>(
                () => new DuplicateVoteEvidence(
                    new Vote[] { vote },
                    new ValidatorSet(
                        new List<Validator> { new Validator(key.PublicKey, BigInteger.One) }),
                    DateTimeOffset.UtcNow));
        }

        [Fact]
        public void CannotCreateWithDifferentHeight()
        {
            var key = new PrivateKey();
            var voteRef = new VoteMetadata(
                1,
                2,
                new BlockHash(TestUtils.GetRandomBytes(BlockHash.Size)),
                DateTimeOffset.UtcNow,
                key.PublicKey,
                VoteFlag.PreCommit).Sign(key);
            var voteDup = new VoteMetadata(
                2,
                2,
                new BlockHash(TestUtils.GetRandomBytes(BlockHash.Size)),
                DateTimeOffset.UtcNow,
                key.PublicKey,
                VoteFlag.PreCommit).Sign(key);

            Assert.Throws<ArgumentException>(
                () => new DuplicateVoteEvidence(
                    new Vote[] { voteRef, voteDup },
                    new ValidatorSet(
                        new List<Validator> { new Validator(key.PublicKey, BigInteger.One) }),
                    DateTimeOffset.UtcNow));
        }

        [Fact]
        public void CannotCreateWithDifferentRound()
        {
            var key = new PrivateKey();
            var voteRef = new VoteMetadata(
                1,
                2,
                new BlockHash(TestUtils.GetRandomBytes(BlockHash.Size)),
                DateTimeOffset.UtcNow,
                key.PublicKey,
                VoteFlag.PreCommit).Sign(key);
            var voteDup = new VoteMetadata(
                1,
                3,
                new BlockHash(TestUtils.GetRandomBytes(BlockHash.Size)),
                DateTimeOffset.UtcNow,
                key.PublicKey,
                VoteFlag.PreCommit).Sign(key);

            Assert.Throws<ArgumentException>(
                () => new DuplicateVoteEvidence(
                    new Vote[] { voteRef, voteDup },
                    new ValidatorSet(
                        new List<Validator>
                        {
                            new Validator(key.PublicKey, BigInteger.One),
                        }),
                    DateTimeOffset.UtcNow));
        }

        [Fact]
        public void CannotCreateWithDifferentPublicKey()
        {
            var keyA = new PrivateKey();
            var keyB = new PrivateKey();
            var voteRef = new VoteMetadata(
                1,
                2,
                new BlockHash(TestUtils.GetRandomBytes(BlockHash.Size)),
                DateTimeOffset.UtcNow,
                keyA.PublicKey,
                VoteFlag.PreCommit).Sign(keyA);
            var voteDup = new VoteMetadata(
                1,
                2,
                new BlockHash(TestUtils.GetRandomBytes(BlockHash.Size)),
                DateTimeOffset.UtcNow,
                keyB.PublicKey,
                VoteFlag.PreCommit).Sign(keyB);

            Assert.Throws<ArgumentException>(
                () => new DuplicateVoteEvidence(
                    new Vote[] { voteRef, voteDup },
                    new ValidatorSet(
                        new List<Validator>
                        {
                            new Validator(keyA.PublicKey, BigInteger.One),
                            new Validator(keyB.PublicKey, BigInteger.One),
                        }),
                    DateTimeOffset.UtcNow));
        }

        [Fact]
        public void CannotCreateWithDifferentFlag()
        {
            var key = new PrivateKey();
            var voteRef = new VoteMetadata(
                1,
                2,
                new BlockHash(TestUtils.GetRandomBytes(BlockHash.Size)),
                DateTimeOffset.UtcNow,
                key.PublicKey,
                VoteFlag.PreCommit).Sign(key);
            var voteDup = new VoteMetadata(
                1,
                2,
                new BlockHash(TestUtils.GetRandomBytes(BlockHash.Size)),
                DateTimeOffset.UtcNow,
                key.PublicKey,
                VoteFlag.PreVote).Sign(key);

            Assert.Throws<ArgumentException>(
                () => new DuplicateVoteEvidence(
                    new Vote[] { voteRef, voteDup },
                    new ValidatorSet(
                        new List<Validator>
                        {
                            new Validator(key.PublicKey, BigInteger.One),
                        }),
                    DateTimeOffset.UtcNow));
        }

        [Fact]
        public void CannotCreateWithNilVote()
        {
            var key = new PrivateKey();
            var voteRef = new VoteMetadata(
                1,
                2,
                new BlockHash(TestUtils.GetRandomBytes(BlockHash.Size)),
                DateTimeOffset.UtcNow,
                key.PublicKey,
                VoteFlag.PreCommit).Sign(key);
            var voteDup = new VoteMetadata(
                1,
                2,
                null,
                DateTimeOffset.UtcNow,
                key.PublicKey,
                VoteFlag.PreCommit).Sign(key);

            Assert.Throws<ArgumentException>(
                () => new DuplicateVoteEvidence(
                    new Vote[] { voteRef, voteDup },
                    new ValidatorSet(
                        new List<Validator>
                        {
                            new Validator(key.PublicKey, BigInteger.One),
                        }),
                    DateTimeOffset.UtcNow));
        }

        [Fact]
        public void CannotCreateWithSameBlock()
        {
            var key = new PrivateKey();
            var blockHash = new BlockHash(TestUtils.GetRandomBytes(BlockHash.Size));
            var voteRef = new VoteMetadata(
                1,
                2,
                blockHash,
                DateTimeOffset.UtcNow,
                key.PublicKey,
                VoteFlag.PreCommit).Sign(key);
            var voteDup = new VoteMetadata(
                1,
                2,
                blockHash,
                DateTimeOffset.UtcNow,
                key.PublicKey,
                VoteFlag.PreCommit).Sign(key);

            Assert.Throws<ArgumentException>(
                () => new DuplicateVoteEvidence(
                    new Vote[] { voteRef, voteDup },
                    new ValidatorSet(
                        new List<Validator>
                        {
                            new Validator(key.PublicKey, BigInteger.One),
                        }),
                    DateTimeOffset.UtcNow));
        }

        [Fact]
        public void Bencoded()
        {
            var key = new PrivateKey();
            var voteRef = new VoteMetadata(
                1,
                2,
                new BlockHash(TestUtils.GetRandomBytes(BlockHash.Size)),
                DateTimeOffset.UtcNow,
                key.PublicKey,
                VoteFlag.PreCommit).Sign(key);
            var voteDup = new VoteMetadata(
                1,
                2,
                new BlockHash(TestUtils.GetRandomBytes(BlockHash.Size)),
                DateTimeOffset.UtcNow,
                key.PublicKey,
                VoteFlag.PreCommit).Sign(key);

            var expected = new DuplicateVoteEvidence(
                new Vote[] { voteRef, voteDup },
                new ValidatorSet(
                    new List<Validator> { new Validator(key.PublicKey, BigInteger.One) }),
                DateTimeOffset.UtcNow);

            var decoded = new DuplicateVoteEvidence(expected.Bencoded);
            Assert.Equal(expected, decoded);
        }
    }
}
