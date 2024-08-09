using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Numerics;
using Libplanet.Blockchain;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Libplanet.Tests.Blockchain.Evidence;
using Libplanet.Types.Blocks;
using Libplanet.Types.Consensus;
using Libplanet.Types.Evidence;
using Xunit;

namespace Libplanet.Tests.Blockchain
{
    public partial class BlockChainTest
    {
        [Fact]
        public void GetPendingEvidence_Test()
        {
            Assert.Empty(_blockChain.GetPendingEvidence());
        }

        [Fact]
        public void GetPendingEvidence_AfterAddingEvidence_Test()
        {
            // Given
            var blockChain = _blockChain;
            var height = blockChain.Tip.Index;
            var address = new PrivateKey().Address;
            var testEvidence = new TestEvidence(height, address, DateTimeOffset.UtcNow);

            // When
            blockChain.AddEvidence(testEvidence);

            // Then
            Assert.Single(blockChain.GetPendingEvidence());
        }

        [Fact]
        public void GetPendingEvidence_Throw_Test()
        {
            var blockChain = _blockChain;
            var height = blockChain.Tip.Index;
            var address = new PrivateKey().Address;
            var testEvidence = new TestEvidence(height, address, DateTimeOffset.UtcNow);
            Assert.Throws<KeyNotFoundException>(
                () => _blockChain.GetPendingEvidence(testEvidence.Id));
        }

        [Fact]
        public void GetPendingEvidence_AfterAppendingBlock_Throw_Test()
        {
            // Given
            var blockChain = _blockChain;
            var key = TestUtils.ValidatorPrivateKeys.First();
            var proposer = key;
            var address = new PrivateKey().Address;
            var expectedEvidence = new TestEvidence(0, address, DateTimeOffset.UtcNow);

            // When
            NextBlock(blockChain, proposer, ImmutableArray.Create<EvidenceBase>(expectedEvidence));

            // Then
            Assert.Throws<KeyNotFoundException>(
                () => blockChain.GetPendingEvidence(expectedEvidence.Id));
        }

        [Fact]
        public void GetPendingEvidence_Add_Test()
        {
            // Given
            var blockChain = _blockChain;
            var address = new PrivateKey().Address;
            var expectedEvidence = new TestEvidence(0, address, DateTimeOffset.UtcNow);
            blockChain.AddEvidence(expectedEvidence);

            // Then
            var actualEvidence = blockChain.GetPendingEvidence(expectedEvidence.Id);
            Assert.Equal(expectedEvidence, actualEvidence);
        }

        [Fact]
        public void GetCommittedEvidence_Throw_Test()
        {
            var blockChain = _blockChain;
            var height = blockChain.Tip.Index;
            var address = new PrivateKey().Address;
            var testEvidence = new TestEvidence(height, address, DateTimeOffset.UtcNow);
            Assert.Throws<KeyNotFoundException>(
                () => _blockChain.GetCommittedEvidence(testEvidence.Id));
        }

        [Fact]
        public void GetCommittedEvidence_Test()
        {
            // Given
            var blockChain = _blockChain;
            var key = TestUtils.ValidatorPrivateKeys.First();
            var proposer = key;
            var address = new PrivateKey().Address;
            var expectedEvidence = new TestEvidence(0, address, DateTimeOffset.UtcNow);

            // When
            NextBlock(blockChain, proposer, ImmutableArray.Create<EvidenceBase>(expectedEvidence));

            // Then
            var actualEvidence = blockChain.GetCommittedEvidence(expectedEvidence.Id);
            Assert.Equal(expectedEvidence, actualEvidence);
        }

        [Fact]
        public void AddEvidence_CommittedEvidence_ThrowTest()
        {
            // Given
            var key = TestUtils.ValidatorPrivateKeys.First();
            var proposer = key;
            var blockChain = _blockChain;
            var address = new PrivateKey().Address;
            var testEvidence = new TestEvidence(0, address, DateTimeOffset.UtcNow);

            // When
            NextBlock(blockChain, proposer, ImmutableArray.Create<EvidenceBase>(testEvidence));

            // Then
            Assert.Throws<ArgumentException>(
                () => blockChain.AddEvidence(testEvidence));
        }

        [Fact]
        public void AddEvidence_PendingEvidence_ThrowTest()
        {
            // Given
            var key = TestUtils.ValidatorPrivateKeys.First();
            var proposer = key;
            var blockChain = _blockChain;
            var address = new PrivateKey().Address;
            var testEvidence = new TestEvidence(0, address, DateTimeOffset.UtcNow);
            blockChain.AddEvidence(testEvidence);

            // Then
            Assert.Throws<ArgumentException>(
                () => blockChain.AddEvidence(testEvidence));
        }

        [Fact]
        public void AddEvidence_HeightGreaterThanTip_ThrowTest()
        {
            // Given
            var key = TestUtils.ValidatorPrivateKeys.First();
            var proposer = key;
            var blockChain = _blockChain;
            var address = new PrivateKey().Address;
            var height = blockChain.Tip.Index + 1;
            var testEvidence = new TestEvidence(height, address, DateTimeOffset.UtcNow);

            // Then
            Assert.Throws<ArgumentException>(
                () => blockChain.AddEvidence(testEvidence));
        }

        [Fact]
        public void AddEvidence_ExpiredEvidence_ThrowTest()
        {
            // Given
            var key = TestUtils.ValidatorPrivateKeys.First();
            var proposer = key;
            var blockChain = _blockChain;
            var address = new PrivateKey().Address;
            var testEvidence = new TestEvidence(0, address, DateTimeOffset.UtcNow);
            var index = blockChain.Tip.Index;
            var pendingDuration = blockChain.Policy.GetMaxEvidencePendingDuration(
                index: index);
            var emptyEvidence = ImmutableArray<EvidenceBase>.Empty;

            // When
            for (var i = index; i < pendingDuration + 1; i++)
            {
                NextBlock(blockChain, proposer, emptyEvidence);
            }

            // Then
            Assert.Throws<ArgumentException>(
                () => blockChain.AddEvidence(testEvidence));
        }

        [Fact]
        public void AddEvidence_Test()
        {
            // Given
            var address = new PrivateKey().Address;
            var blockChain = _blockChain;
            var testEvidence = new TestEvidence(0, address, DateTimeOffset.UtcNow);

            // When
            blockChain.AddEvidence(testEvidence);

            // Then
            Assert.Single(blockChain.GetPendingEvidence());
        }

        [Fact]
        public void CommitEvidence_AddingCommittedEvidence_ThrowTest()
        {
            // Given
            var key = TestUtils.ValidatorPrivateKeys.First();
            var proposer = key;
            var blockChain = _blockChain;
            var address = new PrivateKey().Address;
            var testEvidence = new TestEvidence(0, address, DateTimeOffset.UtcNow);

            // When
            NextBlock(blockChain, proposer, ImmutableArray.Create<EvidenceBase>(testEvidence));

            // Then
            Assert.Throws<ArgumentException>(
                () => blockChain.CommitEvidence(testEvidence));
        }

        [Fact]
        public void CommitEvidence_AddingExpiredEvidence_ThrowTest()
        {
            // Given
            var key = TestUtils.ValidatorPrivateKeys.First();
            var proposer = key;
            var blockChain = _blockChain;
            var address = new PrivateKey().Address;
            var testEvidence = new TestEvidence(0, address, DateTimeOffset.UtcNow);
            var index = blockChain.Tip.Index;
            var pendingDuration = blockChain.Policy.GetMaxEvidencePendingDuration(
                index: index);
            var emptyEvidence = ImmutableArray<EvidenceBase>.Empty;

            // When
            for (var i = index; i < pendingDuration + 1; i++)
            {
                NextBlock(blockChain, proposer, emptyEvidence);
            }

            // Then
            Assert.Throws<ArgumentException>(
                () => blockChain.CommitEvidence(testEvidence));
        }

        [Fact]
        public void CommitEvidence_WithoutPendingEvidence_Test()
        {
            // Given
            var key = TestUtils.ValidatorPrivateKeys.First();
            var proposer = key;
            var blockChain = _blockChain;
            var address = new PrivateKey().Address;
            var testEvidence = new TestEvidence(0, address, DateTimeOffset.UtcNow);

            // When
            blockChain.CommitEvidence(testEvidence);

            // Then
            Assert.True(blockChain.IsEvidenceCommitted(testEvidence.Id));
        }

        [Fact]
        public void CommitEvidence_Test()
        {
            // Given
            var address = new PrivateKey().Address;
            var blockChain = _blockChain;
            var testEvidence = new TestEvidence(0, address, DateTimeOffset.UtcNow);
            blockChain.AddEvidence(testEvidence);

            // When
            blockChain.CommitEvidence(testEvidence);

            // Then
            Assert.Empty(blockChain.GetPendingEvidence());
            Assert.True(blockChain.IsEvidenceCommitted(testEvidence.Id));
        }

        [Fact]
        public void IsEvidencePending_True_Test()
        {
            // Given
            var address = new PrivateKey().Address;
            var testEvidence = new TestEvidence(0, address, DateTimeOffset.UtcNow);
            _blockChain.AddEvidence(testEvidence);

            // Then
            Assert.True(_blockChain.IsEvidencePending(testEvidence.Id));
        }

        [Fact]
        public void IsEvidencePending_False_Test()
        {
            // Given
            var address = new PrivateKey().Address;
            var testEvidence = new TestEvidence(0, address, DateTimeOffset.UtcNow);

            // Then
            Assert.False(_blockChain.IsEvidencePending(testEvidence.Id));
        }

        [Fact]
        public void IsEvidenceCommitted_True_Test()
        {
            // Given
            var address = new PrivateKey().Address;
            var testEvidence = new TestEvidence(0, address, DateTimeOffset.UtcNow);
            _blockChain.AddEvidence(testEvidence);
            _blockChain.CommitEvidence(testEvidence);

            // Then
            Assert.True(_blockChain.IsEvidenceCommitted(testEvidence.Id));
        }

        [Fact]
        public void IsEvidenceCommitted_False_Test()
        {
            // Given
            var address = new PrivateKey().Address;
            var testEvidence = new TestEvidence(0, address, DateTimeOffset.UtcNow);
            _blockChain.AddEvidence(testEvidence);

            // Then
            Assert.False(_blockChain.IsEvidenceCommitted(testEvidence.Id));
        }

        [Fact]
        public void IsEvidenceExpired_True_Test()
        {
            // Given
            var address = new PrivateKey().Address;
            var height = Random.Shared.Next(1, 6);
            var testEvidence = new TestEvidence(height, address, DateTimeOffset.UtcNow);
            var index = _blockChain.Tip.Index;
            var pendingDuration = _blockChain.Policy.GetMaxEvidencePendingDuration(
                index: index);
            var emptyEvidence = ImmutableArray<EvidenceBase>.Empty;

            // When
            for (var i = index; i < testEvidence.Height + pendingDuration + 1; i++)
            {
                NextBlock(_blockChain, TestUtils.ValidatorPrivateKeys.First(), emptyEvidence);
            }

            // Then
            Assert.True(_blockChain.IsEvidenceExpired(testEvidence));
        }

        [Fact]
        public void IsEvidenceExpired_False_Test()
        {
            // Given
            var address = new PrivateKey().Address;
            var height = Random.Shared.Next(1, 6);
            var testEvidence = new TestEvidence(height, address, DateTimeOffset.UtcNow);
            var index = _blockChain.Tip.Index;
            var emptyEvidence = ImmutableArray<EvidenceBase>.Empty;

            // When
            for (var i = index; i < testEvidence.Height; i++)
            {
                NextBlock(_blockChain, TestUtils.ValidatorPrivateKeys.First(), emptyEvidence);
            }

            // Then
            Assert.False(_blockChain.IsEvidenceExpired(testEvidence));
        }

        [Fact]
        public void DeletePendingEvidence_True_Test()
        {
            // Given
            var address = new PrivateKey().Address;
            var testEvidence = new TestEvidence(0, address, DateTimeOffset.UtcNow);
            _blockChain.AddEvidence(testEvidence);

            // Then
            Assert.True(_blockChain.DeletePendingEvidence(testEvidence.Id));
        }

        [Fact]
        public void DeletePendingEvidence_False_Test()
        {
            // Given
            var address = new PrivateKey().Address;
            var testEvidence = new TestEvidence(0, address, DateTimeOffset.UtcNow);

            // Then
            Assert.False(_blockChain.DeletePendingEvidence(testEvidence.Id));
            Assert.False(_blockChain.IsEvidencePending(testEvidence.Id));
            Assert.False(_blockChain.IsEvidenceCommitted(testEvidence.Id));
        }

        [Fact]
        public void AddEvidence_CommitEvidence_DuplicatedVoteEvidence_Test()
        {
            var key = TestUtils.ValidatorPrivateKeys.First();
            var proposer = key;
            var blockChain = _blockChain;
            var voteRef = new VoteMetadata(
                height: blockChain.Tip.Index,
                round: 2,
                blockHash: new BlockHash(TestUtils.GetRandomBytes(BlockHash.Size)),
                timestamp: DateTimeOffset.UtcNow,
                validatorPublicKey: key.PublicKey,
                validatorPower: BigInteger.One,
                flag: VoteFlag.PreCommit).Sign(key);
            var voteDup = new VoteMetadata(
                height: blockChain.Tip.Index,
                round: 2,
                blockHash: new BlockHash(TestUtils.GetRandomBytes(BlockHash.Size)),
                timestamp: DateTimeOffset.UtcNow,
                validatorPublicKey: key.PublicKey,
                validatorPower: BigInteger.One,
                flag: VoteFlag.PreCommit).Sign(key);
            var evidence = new DuplicateVoteEvidence(
                voteRef,
                voteDup,
                TestUtils.ValidatorSet,
                voteDup.Timestamp);

            Assert.Empty(blockChain.GetPendingEvidence());
            Assert.False(blockChain.IsEvidencePending(evidence.Id));
            Assert.False(blockChain.IsEvidenceCommitted(evidence.Id));

            blockChain.AddEvidence(evidence);
            NextBlock(blockChain, proposer, ImmutableArray<EvidenceBase>.Empty);

            Assert.Single(blockChain.GetPendingEvidence());
            Assert.Equal(evidence, blockChain.GetPendingEvidence().First());
            Assert.True(blockChain.IsEvidencePending(evidence.Id));
            Assert.False(blockChain.IsEvidenceCommitted(evidence.Id));

            blockChain.CommitEvidence(evidence);

            Assert.Empty(blockChain.GetPendingEvidence());
            Assert.False(blockChain.IsEvidencePending(evidence.Id));
            Assert.True(blockChain.IsEvidenceCommitted(evidence.Id));
        }

        [Fact]
        public void CommitEvidence_DuplicateVoteEvidence_Test()
        {
            var key = TestUtils.ValidatorPrivateKeys.First();
            var blockChain = _blockChain;
            var voteRef = new VoteMetadata(
                height: blockChain.Tip.Index,
                round: 2,
                blockHash: new BlockHash(TestUtils.GetRandomBytes(BlockHash.Size)),
                timestamp: DateTimeOffset.UtcNow,
                validatorPublicKey: key.PublicKey,
                validatorPower: BigInteger.One,
                flag: VoteFlag.PreCommit).Sign(key);
            var voteDup = new VoteMetadata(
                height: blockChain.Tip.Index,
                round: 2,
                blockHash: new BlockHash(TestUtils.GetRandomBytes(BlockHash.Size)),
                timestamp: DateTimeOffset.UtcNow,
                validatorPublicKey: key.PublicKey,
                validatorPower: BigInteger.One,
                flag: VoteFlag.PreCommit).Sign(key);
            var evidence = new DuplicateVoteEvidence(
                voteRef,
                voteDup,
                TestUtils.ValidatorSet,
                voteDup.Timestamp);

            Assert.Empty(blockChain.GetPendingEvidence());
            Assert.False(blockChain.IsEvidencePending(evidence.Id));
            Assert.False(blockChain.IsEvidenceCommitted(evidence.Id));

            blockChain.CommitEvidence(evidence);

            Assert.Empty(blockChain.GetPendingEvidence());
            Assert.False(blockChain.IsEvidencePending(evidence.Id));
            Assert.True(blockChain.IsEvidenceCommitted(evidence.Id));
        }

        [Fact]
        public void AddEvidence_DuplicateVoteEvidence_FromNonValidator_ThrowTest()
        {
            var key = new PrivateKey();
            var voteRef = new VoteMetadata(
                height: _blockChain.Tip.Index,
                round: 2,
                blockHash: new BlockHash(TestUtils.GetRandomBytes(BlockHash.Size)),
                timestamp: DateTimeOffset.UtcNow,
                validatorPublicKey: key.PublicKey,
                validatorPower: BigInteger.One,
                flag: VoteFlag.PreCommit).Sign(key);
            var voteDup = new VoteMetadata(
                height: _blockChain.Tip.Index,
                round: 2,
                blockHash: new BlockHash(TestUtils.GetRandomBytes(BlockHash.Size)),
                timestamp: DateTimeOffset.UtcNow,
                validatorPublicKey: key.PublicKey,
                validatorPower: BigInteger.One,
                flag: VoteFlag.PreCommit).Sign(key);
            var evidence = new DuplicateVoteEvidence(
                voteRef,
                voteDup,
                new ValidatorSet(
                    new List<Validator> { new Validator(key.PublicKey, BigInteger.One) }),
                voteDup.Timestamp);

            Assert.Empty(_blockChain.GetPendingEvidence());
            Assert.False(_blockChain.IsEvidencePending(evidence.Id));
            Assert.False(_blockChain.IsEvidenceCommitted(evidence.Id));

            Assert.Throws<InvalidEvidenceException>(
                () => _blockChain.AddEvidence(evidence));

            Assert.Empty(_blockChain.GetPendingEvidence());
            Assert.False(_blockChain.IsEvidencePending(evidence.Id));
            Assert.False(_blockChain.IsEvidenceCommitted(evidence.Id));
        }

        [Fact]
        public void EvidenceExpired_ThrowTest()
        {
            var key = TestUtils.ValidatorPrivateKeys.First();
            var proposer = key;
            var blockChain = _blockChain;
            var voteRef = new VoteMetadata(
                height: blockChain.Tip.Index,
                round: 2,
                blockHash: new BlockHash(TestUtils.GetRandomBytes(BlockHash.Size)),
                timestamp: DateTimeOffset.UtcNow,
                validatorPublicKey: key.PublicKey,
                validatorPower: BigInteger.One,
                flag: VoteFlag.PreCommit).Sign(key);
            var voteDup = new VoteMetadata(
                height: blockChain.Tip.Index,
                round: 2,
                blockHash: new BlockHash(TestUtils.GetRandomBytes(BlockHash.Size)),
                timestamp: DateTimeOffset.UtcNow,
                validatorPublicKey: key.PublicKey,
                validatorPower: BigInteger.One,
                flag: VoteFlag.PreCommit).Sign(key);
            var evidence = new DuplicateVoteEvidence(
                voteRef,
                voteDup,
                TestUtils.ValidatorSet,
                voteDup.Timestamp);

            Assert.Empty(blockChain.GetPendingEvidence());
            Assert.False(blockChain.IsEvidencePending(evidence.Id));
            Assert.False(blockChain.IsEvidenceCommitted(evidence.Id));

            blockChain.AddEvidence(evidence);

            Assert.Single(blockChain.GetPendingEvidence());
            Assert.Equal(evidence, blockChain.GetPendingEvidence().First());
            Assert.True(blockChain.IsEvidencePending(evidence.Id));
            Assert.False(blockChain.IsEvidenceCommitted(evidence.Id));

            var pendingDuration = blockChain.Policy.GetMaxEvidencePendingDuration(
                index: blockChain.Tip.Index);
            var emptyEvidence = ImmutableArray<EvidenceBase>.Empty;

            for (var i = 0; i < pendingDuration; i++)
            {
                NextBlock(blockChain, proposer, emptyEvidence);
            }

            Assert.Throws<InvalidBlockEvidencePendingDurationException>(
                () => NextBlock(blockChain, proposer, blockChain.GetPendingEvidence()));

            Assert.Single(blockChain.GetPendingEvidence());

            NextBlock(blockChain, proposer, emptyEvidence);

            Assert.Empty(blockChain.GetPendingEvidence());
        }

        private static Block NextBlock(
            BlockChain blockChain, PrivateKey proposer, ImmutableArray<EvidenceBase> evidence)
        {
            var tip = blockChain.Tip;
            var block = blockChain.ProposeBlock(
                proposer: proposer,
                lastCommit: TestUtils.CreateBlockCommit(tip, true),
                proof: TestUtils.CreateZeroRoundProof(tip, proposer),
                evidence: evidence);
            blockChain.Append(block, TestUtils.CreateBlockCommit(block, true));
            return block;
        }
    }
}
