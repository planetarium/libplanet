using System;
using System.Collections.Immutable;
using System.Linq;
using Libplanet.Blocks;
using Libplanet.Consensus;
using Libplanet.Crypto;
using Libplanet.Tests.Store;
using Xunit;
using Xunit.Abstractions;

namespace Libplanet.Tests.Blocks
{
    public class BlockCommitTest
    {
        private readonly ITestOutputHelper _output;

        public BlockCommitTest(ITestOutputHelper output)
        {
            _output = output;
        }

        [Fact]
        public void Marshalling()
        {
            var fx = new MemoryStoreFixture();
            var keys = Enumerable.Range(0, 4).Select(_ => new PrivateKey()).ToList();
            var votes = keys.Select(key =>
                new VoteMetadata(
                    1,
                    0,
                    fx.Hash1,
                    DateTimeOffset.Now,
                    key.PublicKey,
                    VoteFlag.PreCommit).Sign(key))
                .ToImmutableArray();
            var blockCommit = new BlockCommit(1, 0, fx.Hash1, votes);

            byte[] marshaled = blockCommit.ByteArray;
            var unMarshaled = new BlockCommit(marshaled);

            Assert.Equal(blockCommit, unMarshaled);
        }

        [Fact]
        public void HeightAndRoundMustNotBeNegative()
        {
            var hash = new BlockHash(TestUtils.GetRandomBytes(32));
            var key = new PrivateKey();
            var votes = ImmutableArray<Vote>.Empty
                .Add(new VoteMetadata(
                    0, 0, hash, DateTimeOffset.UtcNow, key.PublicKey, VoteFlag.PreCommit)
                        .Sign(key));

            // Negative height is not allowed.
            Assert.Throws<ArgumentOutOfRangeException>(() =>
                new BlockCommit(-1, 0, hash, votes));

            // Negative round is not allowed.
            Assert.Throws<ArgumentOutOfRangeException>(() =>
                new BlockCommit(0, -1, hash, votes));
        }

        [Fact]
        public void VotesCannotBeEmpty()
        {
            var hash = new BlockHash(TestUtils.GetRandomBytes(32));
            Assert.Throws<ArgumentException>(() =>
                new BlockCommit(0, 0, hash, default));
            Assert.Throws<ArgumentException>(() =>
                new BlockCommit(0, 0, hash, ImmutableArray<Vote>.Empty));
        }

        [Fact]
        public void EveryVoteMustHaveSameHeightAndRoundAsBlockCommit()
        {
            var height = 2;
            var round = 3;
            var hash = new BlockHash(TestUtils.GetRandomBytes(32));
            var key = new PrivateKey();

            // Vote with different height is not allowed.
            var votes = ImmutableArray<Vote>.Empty
                .Add(new VoteMetadata(
                    height + 1,
                    round,
                    hash,
                    DateTimeOffset.UtcNow,
                    key.PublicKey,
                    VoteFlag.PreCommit).Sign(key));
            Assert.Throws<ArgumentException>(() =>
                new BlockCommit(height, round, hash, votes));

            // Vote with different round is not allowed.
            votes = ImmutableArray<Vote>.Empty
                .Add(new VoteMetadata(
                    height,
                    round + 1,
                    hash,
                    DateTimeOffset.UtcNow,
                    key.PublicKey,
                    VoteFlag.PreCommit).Sign(key));
            Assert.Throws<ArgumentException>(() =>
                new BlockCommit(height, round, hash, votes));
        }

        [Fact]
        public void EveryVoteMustHaveSameHashAsBlockCommit()
        {
            var height = 2;
            var round = 3;
            var hash = new BlockHash(TestUtils.GetRandomBytes(32));
            var badHash = new BlockHash(TestUtils.GetRandomBytes(32));
            var key = new PrivateKey();

            var votes = ImmutableArray<Vote>.Empty
                .Add(new VoteMetadata(
                    height,
                    round,
                    badHash,
                    DateTimeOffset.UtcNow,
                    key.PublicKey,
                    VoteFlag.PreCommit).Sign(key));
            Assert.Throws<ArgumentException>(() => new BlockCommit(height, round, hash, votes));
        }

        [Fact]
        public void EveryVoteFlagMustBeNullOrPreCommit()
        {
            var height = 2;
            var round = 3;
            var hash = new BlockHash(TestUtils.GetRandomBytes(32));
            var key = new PrivateKey();

            var votes = ImmutableArray<Vote>.Empty
                .Add(new VoteMetadata(
                    height,
                    round,
                    hash,
                    DateTimeOffset.UtcNow,
                    key.PublicKey,
                    VoteFlag.Null).Sign(null));
            _ = new BlockCommit(height, round, hash, votes);

            votes = ImmutableArray<Vote>.Empty
                .Add(new VoteMetadata(
                    height,
                    round,
                    hash,
                    DateTimeOffset.UtcNow,
                    key.PublicKey,
                    VoteFlag.Unknown).Sign(null));
            Assert.Throws<ArgumentException>(() => new BlockCommit(height, round, hash, votes));

            votes = ImmutableArray<Vote>.Empty
                .Add(new VoteMetadata(
                    height,
                    round,
                    hash,
                    DateTimeOffset.UtcNow,
                    key.PublicKey,
                    VoteFlag.PreVote).Sign(key));
            Assert.Throws<ArgumentException>(() => new BlockCommit(height, round, hash, votes));

            votes = ImmutableArray<Vote>.Empty
                .Add(new VoteMetadata(
                    height,
                    round,
                    hash,
                    DateTimeOffset.UtcNow,
                    key.PublicKey,
                    VoteFlag.PreCommit).Sign(key));
            _ = new BlockCommit(height, round, hash, votes);
        }
    }
}
