using System;
using System.Collections.Generic;
using System.Linq;
using System.Numerics;
using Libplanet.Crypto;
using Libplanet.Types.Blocks;
using Libplanet.Types.Consensus;
using Libplanet.Types.Evidence;
using Xunit;

namespace Libplanet.Tests.Blockchain.Evidence
{
    public class DuplicateVoteEvidenceTest
    {
        [Fact]
        public void Create_WithDifferentHeight_FailTest()
        {
            // Given
            var privateKey = new PrivateKey();
            var validatorPublicKey = privateKey.PublicKey;
            var validatorList = new List<Validator>
            {
                new Validator(validatorPublicKey, BigInteger.One),
            };

            var voteRef = new VoteMetadata(
                height: 1,
                round: 2,
                blockHash: new BlockHash(TestUtils.GetRandomBytes(BlockHash.Size)),
                timestamp: DateTimeOffset.UtcNow,
                validatorPublicKey: validatorPublicKey,
                validatorPower: BigInteger.One,
                flag: VoteFlag.PreCommit).Sign(privateKey);
            var voteDup = new VoteMetadata(
                height: 2,
                round: 2,
                blockHash: new BlockHash(TestUtils.GetRandomBytes(BlockHash.Size)),
                timestamp: DateTimeOffset.UtcNow,
                validatorPublicKey: validatorPublicKey,
                validatorPower: BigInteger.One,
                flag: VoteFlag.PreCommit).Sign(privateKey);

            // When, Then
            Assert.Throws<ArgumentException>(() =>
            {
                new DuplicateVoteEvidence(
                    voteRef,
                    voteDup,
                    new ValidatorSet(validatorList),
                    DateTimeOffset.UtcNow);
            });
        }

        [Fact]
        public void Create_WithDifferentRound_FailTest()
        {
            // Given
            var privateKey = new PrivateKey();
            var validatorPublicKey = privateKey.PublicKey;
            var validatorList = new List<Validator>
            {
                new Validator(validatorPublicKey, BigInteger.One),
            };

            var voteRef = new VoteMetadata(
                height: 1,
                round: 2,
                blockHash: new BlockHash(TestUtils.GetRandomBytes(BlockHash.Size)),
                timestamp: DateTimeOffset.UtcNow,
                validatorPublicKey: validatorPublicKey,
                validatorPower: BigInteger.One,
                flag: VoteFlag.PreCommit).Sign(privateKey);
            var voteDup = new VoteMetadata(
                height: 1,
                round: 3,
                blockHash: new BlockHash(TestUtils.GetRandomBytes(BlockHash.Size)),
                timestamp: DateTimeOffset.UtcNow,
                validatorPublicKey: validatorPublicKey,
                validatorPower: BigInteger.One,
                flag: VoteFlag.PreCommit).Sign(privateKey);

            // When, Then
            Assert.Throws<ArgumentException>(() =>
            {
                new DuplicateVoteEvidence(
                    voteRef,
                    voteDup,
                    new ValidatorSet(validatorList),
                    DateTimeOffset.UtcNow);
            });
        }

        [Fact]
        public void Create_WithDifferentPublicKey_FailTest()
        {
            // Given
            var privateKeys = new PrivateKey[]
            {
                new PrivateKey(),
                new PrivateKey(),
            };
            var validatorPublicKeys = privateKeys.Select(item => item.PublicKey).ToArray();
            var validatorList
                = validatorPublicKeys.Select(item => new Validator(item, BigInteger.One)).ToList();

            var voteRef = new VoteMetadata(
                height: 1,
                round: 2,
                blockHash: new BlockHash(TestUtils.GetRandomBytes(BlockHash.Size)),
                timestamp: DateTimeOffset.UtcNow,
                validatorPublicKey: validatorPublicKeys[0],
                validatorPower: BigInteger.One,
                flag: VoteFlag.PreCommit).Sign(privateKeys[0]);
            var voteDup = new VoteMetadata(
                height: 1,
                round: 2,
                blockHash: new BlockHash(TestUtils.GetRandomBytes(BlockHash.Size)),
                timestamp: DateTimeOffset.UtcNow,
                validatorPublicKey: validatorPublicKeys[1],
                validatorPower: BigInteger.One,
                flag: VoteFlag.PreCommit).Sign(privateKeys[1]);

            // When, Then
            Assert.Throws<ArgumentException>(() =>
            {
                new DuplicateVoteEvidence(
                    voteRef: voteRef,
                    voteDup: voteDup,
                    validatorSet: new ValidatorSet(validatorList),
                    timestamp: DateTimeOffset.UtcNow);
            });
        }

        [Fact]
        public void Create_WithDifferentFlag_FailTest()
        {
            // Given
            var privateKey = new PrivateKey();
            var validatorPublicKey = privateKey.PublicKey;
            var validatorList = new List<Validator>
            {
                new Validator(validatorPublicKey, BigInteger.One),
            };

            var voteRef = new VoteMetadata(
                height: 1,
                round: 2,
                blockHash: new BlockHash(TestUtils.GetRandomBytes(BlockHash.Size)),
                timestamp: DateTimeOffset.UtcNow,
                validatorPublicKey: validatorPublicKey,
                validatorPower: BigInteger.One,
                flag: VoteFlag.PreCommit).Sign(privateKey);
            var voteDup = new VoteMetadata(
                height: 1,
                round: 2,
                blockHash: new BlockHash(TestUtils.GetRandomBytes(BlockHash.Size)),
                timestamp: DateTimeOffset.UtcNow,
                validatorPublicKey: validatorPublicKey,
                validatorPower: BigInteger.One,
                flag: VoteFlag.PreVote).Sign(privateKey);

            // When, Then
            Assert.Throws<ArgumentException>(() =>
            {
                new DuplicateVoteEvidence(
                    voteRef: voteRef,
                    voteDup: voteDup,
                    validatorSet: new ValidatorSet(validatorList),
                    timestamp: DateTimeOffset.UtcNow);
            });
        }

        [Fact]
        public void Create_WithSameBlock_FailTest()
        {
            // Given
            var privateKey = new PrivateKey();
            var validatorPublicKey = privateKey.PublicKey;
            var blockHash = new BlockHash(TestUtils.GetRandomBytes(BlockHash.Size));
            var validatorList = new List<Validator>
            {
                new Validator(validatorPublicKey, BigInteger.One),
            };

            var voteRef = new VoteMetadata(
                height: 1,
                round: 2,
                blockHash: blockHash,
                timestamp: DateTimeOffset.UtcNow,
                validatorPublicKey: validatorPublicKey,
                validatorPower: BigInteger.One,
                flag: VoteFlag.PreCommit).Sign(privateKey);
            var voteDup = new VoteMetadata(
                height: 1,
                round: 2,
                blockHash: blockHash,
                timestamp: DateTimeOffset.UtcNow,
                validatorPublicKey: validatorPublicKey,
                validatorPower: BigInteger.One,
                flag: VoteFlag.PreCommit).Sign(privateKey);

            // When, Then
            Assert.Throws<ArgumentException>(() =>
            {
                new DuplicateVoteEvidence(
                    voteRef: voteRef,
                    voteDup: voteDup,
                    validatorSet: new ValidatorSet(validatorList),
                    timestamp: DateTimeOffset.UtcNow);
            });
        }

        [Fact]
        public void Bencoded()
        {
            // Given
            var privateKey = new PrivateKey();
            var validatorPublicKey = privateKey.PublicKey;
            var validatorList = new List<Validator>
            {
                new Validator(validatorPublicKey, BigInteger.One),
            };

            var voteRef = new VoteMetadata(
                height: 1,
                round: 2,
                blockHash: new BlockHash(TestUtils.GetRandomBytes(BlockHash.Size)),
                timestamp: DateTimeOffset.UtcNow,
                validatorPublicKey: validatorPublicKey,
                validatorPower: BigInteger.One,
                flag: VoteFlag.PreCommit).Sign(privateKey);
            var voteDup = new VoteMetadata(
                height: 1,
                round: 2,
                blockHash: new BlockHash(TestUtils.GetRandomBytes(BlockHash.Size)),
                timestamp: DateTimeOffset.UtcNow,
                validatorPublicKey: validatorPublicKey,
                validatorPower: BigInteger.One,
                flag: VoteFlag.PreCommit).Sign(privateKey);

            // When
            var expectedEvidence = new DuplicateVoteEvidence(
                voteRef: voteRef,
                voteDup: voteDup,
                validatorSet: new ValidatorSet(validatorList),
                timestamp: voteDup.Timestamp);

            // Then
            var actualEvidence = new DuplicateVoteEvidence(expectedEvidence.Bencoded);

            Assert.Equal(expectedEvidence.Bencoded, actualEvidence.Bencoded);
            Assert.Equal(expectedEvidence, actualEvidence);
        }

        [Fact]
        public void Serialize_and_Deserialize_Test()
        {
            // Given
            var privateKey = new PrivateKey();
            var validatorPublicKey = privateKey.PublicKey;
            var validatorList = new List<Validator>
            {
                new Validator(validatorPublicKey, BigInteger.One),
            };

            var voteRef = new VoteMetadata(
                height: 1,
                round: 2,
                blockHash: new BlockHash(TestUtils.GetRandomBytes(BlockHash.Size)),
                timestamp: DateTimeOffset.UtcNow,
                validatorPublicKey: validatorPublicKey,
                validatorPower: BigInteger.One,
                flag: VoteFlag.PreCommit).Sign(privateKey);
            var voteDup = new VoteMetadata(
                height: 1,
                round: 2,
                blockHash: new BlockHash(TestUtils.GetRandomBytes(BlockHash.Size)),
                timestamp: DateTimeOffset.UtcNow,
                validatorPublicKey: validatorPublicKey,
                validatorPower: BigInteger.One,
                flag: VoteFlag.PreCommit).Sign(privateKey);

            // When
            var expectedEvidence = new DuplicateVoteEvidence(
                voteRef: voteRef,
                voteDup: voteDup,
                validatorSet: new ValidatorSet(validatorList),
                timestamp: voteDup.Timestamp);

            // Then
            var bencoded = expectedEvidence.Serialize();
            var actualEvidence = EvidenceBase.Deserialize(bencoded);

            Assert.Equal(expectedEvidence.Bencoded, actualEvidence.Bencoded);
            Assert.Equal(expectedEvidence, actualEvidence);
        }
    }
}
