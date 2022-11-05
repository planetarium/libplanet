using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using Libplanet.Blocks;
using Libplanet.Consensus;
using Libplanet.Crypto;
using Xunit;

namespace Libplanet.Tests.Consensus
{
    public class ValidatorSetTest
    {
        [Fact]
        public void ValidatorsAreOrderedByAddress()
        {
            List<PublicKey> publicKeys = Enumerable
                .Range(0, 10)
                .Select(_ => new PrivateKey().PublicKey)
                .ToList();
            ValidatorSet validatorSet = new ValidatorSet(publicKeys);
            TestUtils.AssertSorted(validatorSet.Validators.Select(key => key.ToAddress()));
        }

        [Fact]
        public void ValidatorCount()
        {
            List<PublicKey> publicKeys = Enumerable
                .Range(0, 10)
                .Select(_ => new PrivateKey().PublicKey)
                .ToList();
            ValidatorSet validatorSet = new ValidatorSet(publicKeys);
            Assert.Equal(10, validatorSet.TotalCount);
            Assert.Equal(6, validatorSet.TwoThirdsCount);
            Assert.Equal(3, validatorSet.OneThirdCount);
        }

        [Fact]
        public void ValidateBlockCommitValidators()
        {
            Random random = new Random();
            long height = 3;
            int round = 5;
            BlockHash hash = random.NextBlockHash();

            var unorderedPrivateKeys = Enumerable
                .Range(0, 10)
                .Select(_ => new PrivateKey())
                .ToList();
            var orderedPrivateKeys = unorderedPrivateKeys
                .OrderBy(key => key.PublicKey.ToAddress())
                .ToList();
            var validatorSet = new ValidatorSet(
                unorderedPrivateKeys.Select(key => key.PublicKey).ToList());
            var unorderedVotes = unorderedPrivateKeys
                .Select(key => new VoteMetadata(
                    height, round, hash, DateTimeOffset.UtcNow, key.PublicKey, VoteFlag.PreCommit)
                        .Sign(key))
                .ToImmutableArray();
            var orderedVotes = orderedPrivateKeys
                .Select(key => new VoteMetadata(
                    height, round, hash, DateTimeOffset.UtcNow, key.PublicKey, VoteFlag.PreCommit)
                        .Sign(key))
                .ToImmutableArray();

            var invalidBlockCommit = new BlockCommit(height, round, hash, unorderedVotes);
            var validBlockCommit = new BlockCommit(height, round, hash, orderedVotes);

            Assert.False(validatorSet.ValidateBlockCommitValidators(invalidBlockCommit));
            Assert.True(validatorSet.ValidateBlockCommitValidators(validBlockCommit));
        }
    }
}
