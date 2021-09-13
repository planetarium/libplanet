using System;
using System.Collections.Immutable;
using System.Security.Cryptography;
using Bencodex;
using Libplanet.Blocks;
using Libplanet.Tests.Fixtures;
using Xunit;
using static Libplanet.Tests.TestUtils;

namespace Libplanet.Tests.Blocks
{
    // FIXME: The most of the following tests are duplicated in PreEvaluationBlockTest.
    public class PreEvaluationBlockHeaderTest
    {
        protected readonly BlockContentFixture _contents;
        protected readonly Codec _codec;
        protected readonly HashAlgorithmType _sha256;
        protected readonly (Nonce Nonce, ImmutableArray<byte> PreEvaluationHash) _validGenesisProof;
        protected readonly (Nonce Nonce, ImmutableArray<byte> PreEvaluationHash) _validBlock1Proof;
        protected readonly (Nonce Nonce, ImmutableArray<byte> PreEvaluationHash)
            _invalidBlock1Proof;

        public PreEvaluationBlockHeaderTest()
        {
            _contents = new BlockContentFixture();
            _codec = new Codec();
            _sha256 = HashAlgorithmType.Of<SHA256>();

            var validGenesisNonce = default(Nonce);
            byte[] validGenesisBytes =
                _codec.Encode(_contents.GenesisMetadata.ToBencodex(validGenesisNonce));
            ImmutableArray<byte> validGenesisPreEvalHash =
                _sha256.Digest(validGenesisBytes).ToImmutableArray();
            _validGenesisProof = (validGenesisNonce, validGenesisPreEvalHash);

            var validBlock1Nonce = new Nonce(
                new byte[] { 0x14, 0xf1, 0xa7, 0x05, 0x37, 0xbb, 0x97, 0xb2, 0x5f, 0x94 }
            );
            byte[] validBlock1Bytes =
                _codec.Encode(_contents.BlockMetadata1.ToBencodex(validBlock1Nonce));
            ImmutableArray<byte> validBlock1PreEvalHash =
                _sha256.Digest(validBlock1Bytes).ToImmutableArray();
            _validBlock1Proof = (validBlock1Nonce, validBlock1PreEvalHash);

            var invalidBlock1Nonce = default(Nonce);
            byte[] invalidBlock1Bytes =
                _codec.Encode(_contents.BlockMetadata1.ToBencodex(invalidBlock1Nonce));
            ImmutableArray<byte> invalidBlock1PreEvalHash =
                _sha256.Digest(invalidBlock1Bytes).ToImmutableArray();
            _invalidBlock1Proof = (invalidBlock1Nonce, invalidBlock1PreEvalHash);
        }

        [Fact]
        public virtual void UnsafeConstructor()
        {
            BlockMetadata metadata = _contents.GenesisMetadata.Clone();
            var preEvalBlock =
                new PreEvaluationBlockHeader(metadata, _sha256, _validGenesisProof);
            AssertBlockContentEquals(metadata, preEvalBlock);
            AssertBytesEqual(_validGenesisProof.Nonce, preEvalBlock.Nonce);
            Assert.Same(_sha256, preEvalBlock.HashAlgorithm);
            AssertBytesEqual(_validGenesisProof.PreEvaluationHash, preEvalBlock.PreEvaluationHash);

            metadata = _contents.BlockMetadata1.Clone();
            preEvalBlock = new PreEvaluationBlockHeader(metadata, _sha256, _validBlock1Proof);
            AssertBlockContentEquals(metadata, preEvalBlock);
            AssertBytesEqual(_validBlock1Proof.Nonce, preEvalBlock.Nonce);
            Assert.Same(_sha256, preEvalBlock.HashAlgorithm);
            AssertBytesEqual(_validBlock1Proof.PreEvaluationHash, preEvalBlock.PreEvaluationHash);

            Assert.Throws<InvalidBlockNonceException>(
                () => new PreEvaluationBlockHeader(metadata, _sha256, _invalidBlock1Proof)
            );

            metadata = _contents.BlockMetadata1.Clone();
            metadata.PreviousHash = null;
            Assert.Throws<InvalidBlockPreviousHashException>(
                () => new PreEvaluationBlockHeader(metadata, _sha256, _validBlock1Proof)
            );

            metadata = _contents.GenesisMetadata.Clone();
            metadata.PreviousHash = _contents.GenesisHash;
            Assert.Throws<InvalidBlockPreviousHashException>(
                () => new PreEvaluationBlockHeader(metadata, _sha256, _validGenesisProof)
            );

            metadata = _contents.BlockMetadata1.Clone();
            metadata.Difficulty = 0L;
            Assert.Throws<InvalidBlockDifficultyException>(
                () => new PreEvaluationBlockHeader(metadata, _sha256, _validBlock1Proof.Nonce)
            );

            metadata = _contents.GenesisMetadata.Clone();
            metadata.Difficulty = 1L;
            Assert.Throws<InvalidBlockDifficultyException>(
                () => new PreEvaluationBlockHeader(metadata, _sha256, _validGenesisProof)
            );

            metadata = _contents.GenesisMetadata.Clone();
            metadata.TotalDifficulty = 1;
            Assert.Throws<InvalidBlockTotalDifficultyException>(
                () => new PreEvaluationBlockHeader(metadata, _sha256, _validGenesisProof)
            );
        }

        [Fact]
        public virtual void SafeConstructorWithPreEvaluationHash()
        {
            BlockMetadata metadata = _contents.GenesisMetadata.Clone();
            var preEvalBlock = new PreEvaluationBlockHeader(
                metadata,
                hashAlgorithm: _sha256,
                nonce: _validGenesisProof.Nonce,
                preEvaluationHash: _validGenesisProof.PreEvaluationHash
            );
            AssertBlockContentEquals(metadata, preEvalBlock);
            AssertBytesEqual(_validGenesisProof.Nonce, preEvalBlock.Nonce);
            Assert.Same(_sha256, preEvalBlock.HashAlgorithm);
            AssertBytesEqual(_validGenesisProof.PreEvaluationHash, preEvalBlock.PreEvaluationHash);

            metadata = _contents.BlockMetadata1.Clone();
            preEvalBlock = new PreEvaluationBlockHeader(
                metadata,
                hashAlgorithm: _sha256,
                nonce: _validBlock1Proof.Nonce,
                preEvaluationHash: _validBlock1Proof.PreEvaluationHash
            );
            AssertBlockContentEquals(metadata, preEvalBlock);
            AssertBytesEqual(_validBlock1Proof.Nonce, preEvalBlock.Nonce);
            Assert.Same(_sha256, preEvalBlock.HashAlgorithm);
            AssertBytesEqual(_validBlock1Proof.PreEvaluationHash, preEvalBlock.PreEvaluationHash);

            // Mutating the BlockMetadata instance does not affect PreEvaluatingBlockHeader
            // instance:
            metadata.Index++;
            Assert.Equal(_contents.BlockMetadata1.Index, preEvalBlock.Index);

            metadata = _contents.BlockMetadata1.Clone();
            Assert.Throws<InvalidBlockNonceException>(() =>
                new PreEvaluationBlockHeader(
                    metadata,
                    hashAlgorithm: _sha256,
                    nonce: _invalidBlock1Proof.Nonce,
                    preEvaluationHash: _invalidBlock1Proof.PreEvaluationHash
                )
            );
            Assert.Throws<InvalidBlockPreEvaluationHashException>(() =>
                new PreEvaluationBlockHeader(
                    metadata,
                    hashAlgorithm: _sha256,
                    nonce: _validBlock1Proof.Nonce,
                    preEvaluationHash: _invalidBlock1Proof.PreEvaluationHash
                )
            );
        }

        [Fact]
        public virtual void SafeConstructorWithoutPreEvaluationHash()
        {
            BlockMetadata metadata = _contents.Genesis.Clone();
            var preEvalBlock = new PreEvaluationBlockHeader(
                metadata,
                hashAlgorithm: _sha256,
                nonce: _validGenesisProof.Nonce
            );
            AssertBlockContentEquals(metadata, preEvalBlock);
            AssertBytesEqual(_validGenesisProof.Nonce, preEvalBlock.Nonce);
            Assert.Same(_sha256, preEvalBlock.HashAlgorithm);
            AssertBytesEqual(_validGenesisProof.PreEvaluationHash, preEvalBlock.PreEvaluationHash);

            metadata = _contents.BlockMetadata1.Clone();
            preEvalBlock = new PreEvaluationBlockHeader(
                metadata,
                hashAlgorithm: _sha256,
                nonce: _validBlock1Proof.Nonce
            );
            AssertBlockContentEquals(metadata, preEvalBlock);
            AssertBytesEqual(_validBlock1Proof.Nonce, preEvalBlock.Nonce);
            Assert.Same(_sha256, preEvalBlock.HashAlgorithm);
            AssertBytesEqual(_validBlock1Proof.PreEvaluationHash, preEvalBlock.PreEvaluationHash);

            // Mutating the BlockMetadata instance doesn't affect PreEvaluatingBlockHeader instance:
            metadata.Index++;
            Assert.Equal(_contents.BlockMetadata1.Index, preEvalBlock.Index);

            Assert.Throws<InvalidBlockNonceException>(() =>
                new PreEvaluationBlockHeader(
                    metadata,
                    hashAlgorithm: _sha256,
                    nonce: _invalidBlock1Proof.Nonce
                )
            );

            metadata = _contents.BlockMetadata1.Clone();
            metadata.PreviousHash = null;
            Assert.Throws<InvalidBlockPreviousHashException>(
                () => new PreEvaluationBlockHeader(metadata, _sha256, _validBlock1Proof.Nonce)
            );

            metadata = _contents.GenesisMetadata.Clone();
            metadata.PreviousHash = _contents.GenesisHash;
            Assert.Throws<InvalidBlockPreviousHashException>(
                () => new PreEvaluationBlockHeader(metadata, _sha256, _validGenesisProof.Nonce)
            );

            metadata = _contents.BlockMetadata1.Clone();
            metadata.Difficulty = 0L;
            Assert.Throws<InvalidBlockDifficultyException>(
                () => new PreEvaluationBlockHeader(metadata, _sha256, _validBlock1Proof.Nonce)
            );

            metadata = _contents.GenesisMetadata.Clone();
            metadata.Difficulty = 1L;
            Assert.Throws<InvalidBlockDifficultyException>(
                () => new PreEvaluationBlockHeader(metadata, _sha256, _validGenesisProof)
            );

            metadata = _contents.GenesisMetadata.Clone();
            metadata.TotalDifficulty = 1;
            Assert.Throws<InvalidBlockTotalDifficultyException>(
                () => new PreEvaluationBlockHeader(metadata, _sha256, _validGenesisProof)
            );
        }

        [Fact]
        public virtual void DontCheckPreEvaluationHashWithProtocolVersion0()
        {
            // Since PreEvaluationHash comparison between the actual and the expected was not
            // implemented in ProtocolVersion == 0, we need to maintain this bug on
            // ProtocolVersion < 1 for backward compatibility:
            BlockMetadata metadataPv0 = _contents.BlockMetadata1.Clone();
            metadataPv0.ProtocolVersion = 0;
            metadataPv0.Timestamp += TimeSpan.FromSeconds(1);
            var preEvalBlockPv0 = new PreEvaluationBlockHeader(
                metadataPv0,
                hashAlgorithm: _sha256,
                nonce: _validBlock1Proof.Nonce,
                preEvaluationHash: _validBlock1Proof.PreEvaluationHash
            );
            AssertBlockContentEquals(metadataPv0, preEvalBlockPv0);
            AssertBytesEqual(_validBlock1Proof.Nonce, preEvalBlockPv0.Nonce);
            Assert.Same(_sha256, preEvalBlockPv0.HashAlgorithm);
            AssertBytesEqual(
                _validBlock1Proof.PreEvaluationHash,
                preEvalBlockPv0.PreEvaluationHash
            );

            // However, such bug must be fixed after ProtocolVersion > 0:
            BlockMetadata contentPv1 = _contents.BlockMetadata1.Clone();
            contentPv1.Timestamp += TimeSpan.FromSeconds(1);
            Assert.Throws<InvalidBlockPreEvaluationHashException>(() =>
                new PreEvaluationBlockHeader(
                    contentPv1,
                    hashAlgorithm: _sha256,
                    nonce: _validBlock1Proof.Nonce,
                    preEvaluationHash: _validBlock1Proof.PreEvaluationHash
                )
            );
        }

        protected void AssertBlockContentEquals(
            BlockMetadata expected,
            PreEvaluationBlockHeader actual
        )
        {
            Assert.NotNull(expected);
            Assert.NotNull(actual);
            Assert.Equal(expected.ProtocolVersion, actual.ProtocolVersion);
            Assert.Equal(expected.Index, actual.Index);
            Assert.Equal(expected.Timestamp, actual.Timestamp);
            AssertBytesEqual(expected.Miner, actual.Miner);
            Assert.Equal(expected.Difficulty, actual.Difficulty);
            Assert.Equal(expected.TotalDifficulty, actual.TotalDifficulty);
            AssertBytesEqual(expected.PreviousHash, actual.PreviousHash);
            AssertBytesEqual(expected.TxHash, actual.TxHash);
        }
    }
}
