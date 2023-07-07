using System;
using System.Collections.Immutable;
using Libplanet.Blocks;
using Libplanet.Consensus;
using Libplanet.Crypto;
using Xunit;

namespace Libplanet.Tests.Consensus
{
    public class VoteTest
    {
        private static Bencodex.Codec _codec = new Bencodex.Codec();

        [Fact]
        public void Sign()
        {
            var hash = new BlockHash(TestUtils.GetRandomBytes(BlockHash.Size));
            var privateKey = new PrivateKey();
            var voteMetadata = new VoteMetadata(
                1,
                2,
                hash,
                DateTimeOffset.UtcNow,
                privateKey.PublicKey,
                VoteFlag.PreCommit);
            Vote vote = voteMetadata.Sign(privateKey);
            Assert.True(
                privateKey.PublicKey.Verify(_codec.Encode(voteMetadata.Bencoded), vote.Signature));
        }

        [Fact]
        public void CannotSignWithWrongPrivateKey()
        {
            var hash = new BlockHash(TestUtils.GetRandomBytes(BlockHash.Size));
            var validatorPublicKey = new PrivateKey().PublicKey;
            var key = new PrivateKey();
            var voteMetadata = new VoteMetadata(
                height: 2,
                round: 3,
                blockHash: hash,
                timestamp: DateTimeOffset.UtcNow,
                validatorPublicKey: validatorPublicKey,
                flag: VoteFlag.PreCommit);

            // Cannot sign with Sign method
            Assert.Throws<ArgumentException>(() => voteMetadata.Sign(key));

            // Cannot bypass by attaching signature
            Assert.Throws<ArgumentException>(() =>
                new Vote(
                    voteMetadata,
                    key.Sign(_codec.Encode(voteMetadata.Bencoded).ToImmutableArray())));
        }

        [Fact]
        public void EmptySignatureNotAllowedForPreVoteAndPreCommit()
        {
            var hash = new BlockHash(TestUtils.GetRandomBytes(BlockHash.Size));
            var key = new PrivateKey();
            var preVoteMetadata = new VoteMetadata(
                height: 2,
                round: 3,
                blockHash: hash,
                timestamp: DateTimeOffset.UtcNow,
                validatorPublicKey: key.PublicKey,
                flag: VoteFlag.PreVote);
            var preCommitMetadata = new VoteMetadata(
                height: 2,
                round: 3,
                blockHash: hash,
                timestamp: DateTimeOffset.UtcNow,
                validatorPublicKey: key.PublicKey,
                flag: VoteFlag.PreCommit);

            // Works fine.
            _ = preVoteMetadata.Sign(key);
            _ = preCommitMetadata.Sign(key);

            Assert.Throws<ArgumentException>(() => preVoteMetadata.Sign(null));
            Assert.Throws<ArgumentException>(() =>
                new Vote(preVoteMetadata, ImmutableArray<byte>.Empty));
            Assert.Throws<ArgumentException>(() => preCommitMetadata.Sign(null));
            Assert.Throws<ArgumentException>(() =>
                new Vote(preCommitMetadata, ImmutableArray<byte>.Empty));
        }

        [Fact]
        public void NonEmptySignatureNotAllowedForNullAndUnknown()
        {
            var hash = new BlockHash(TestUtils.GetRandomBytes(BlockHash.Size));
            var key = new PrivateKey();
            var nullMetadata = new VoteMetadata(
                height: 2,
                round: 3,
                blockHash: hash,
                timestamp: DateTimeOffset.UtcNow,
                validatorPublicKey: key.PublicKey,
                flag: VoteFlag.Null);
            var unknownMetadata = new VoteMetadata(
                height: 2,
                round: 3,
                blockHash: hash,
                timestamp: DateTimeOffset.UtcNow,
                validatorPublicKey: key.PublicKey,
                flag: VoteFlag.Unknown);

            // Works fine.
            _ = nullMetadata.Sign(null);
            _ = unknownMetadata.Sign(null);

            Assert.Throws<ArgumentException>(() => nullMetadata.Sign(key));
            Assert.Throws<ArgumentException>(() =>
                new Vote(
                    nullMetadata,
                    key.Sign(_codec.Encode(nullMetadata.Bencoded)).ToImmutableArray()));
            Assert.Throws<ArgumentException>(() => unknownMetadata.Sign(key));
            Assert.Throws<ArgumentException>(() =>
                new Vote(
                    unknownMetadata,
                    key.Sign(_codec.Encode(unknownMetadata.Bencoded)).ToImmutableArray()));
        }

        [Fact]
        public void DefaultSignatureIsInvalid()
        {
            var voteMetadata = new VoteMetadata(
                0,
                0,
                default,
                DateTimeOffset.UtcNow,
                new PrivateKey().PublicKey,
                VoteFlag.PreCommit);
            Assert.Throws<ArgumentException>(() => new Vote(voteMetadata, default));
        }

        [Fact]
        public void Bencoded()
        {
            var hash = new BlockHash(TestUtils.GetRandomBytes(BlockHash.Size));
            var key = new PrivateKey();
            var expected = new VoteMetadata(
                1,
                2,
                hash,
                DateTimeOffset.UtcNow,
                key.PublicKey,
                VoteFlag.PreCommit).Sign(key);
            var decoded = new Vote(expected.Bencoded);
            Assert.Equal(expected, decoded);
        }
    }
}
