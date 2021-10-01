using System;
using System.Collections.Immutable;
using System.Linq;
using System.Security.Cryptography;
using Bencodex;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Libplanet.Tests.Fixtures;
using Xunit;
using static Libplanet.ByteUtil;
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

            // Checks if the hard-coded proof of the fixture is up-to-date.  If it's outdated,
            // throws an exception that prints a regenerated up-to-date one:
            const int lastCheckedProtocolVersion = 2;
            if (_contents.BlockMetadata1.ProtocolVersion > lastCheckedProtocolVersion)
            {
                (Nonce Nonce, ImmutableArray<byte> Digest) regen =
                    Hashcash.Answer(
                        n => new[] { _codec.Encode(_contents.BlockMetadata1.ToBencodex(n)) },
                        _sha256,
                        _contents.BlockMetadata1.Difficulty
                    );
                string nonceLit = string.Join(
                    ", ",
                    regen.Nonce.ByteArray.Select(b => b < 0x10 ? $"0x0{b:x}" : $"0x{b:x}")
                );
                throw new Exception(
                    $"As the CurrentProtocolVersion was bumped from {lastCheckedProtocolVersion} " +
                    $"to {BlockMetadata.CurrentProtocolVersion}, hard-coded nonce proofs in " +
                    $"the fixture is now outdated.  Check {nameof(PreEvaluationBlockHeaderTest)} " +
                    "constructor and update the hard-coded nonce to the following up-to-date one:" +
                    $"\n\n    new {nameof(Nonce)}(new byte[] {{ {nonceLit} }})\n\n"
                );
            }

            var validBlock1Nonce = new Nonce(
                new byte[] { 0x0f, 0xe0, 0xb5, 0x1e, 0xa0, 0x6c, 0x6f, 0xc9, 0x0b, 0x4f }
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
            BlockMetadata metadata = _contents.GenesisMetadata.Copy();
            var preEvalBlock =
                new PreEvaluationBlockHeader(metadata, _sha256, _validGenesisProof);
            AssertBlockMetadataEqual(metadata, preEvalBlock);
            AssertBytesEqual(_validGenesisProof.Nonce, preEvalBlock.Nonce);
            Assert.Same(_sha256, preEvalBlock.HashAlgorithm);
            AssertBytesEqual(_validGenesisProof.PreEvaluationHash, preEvalBlock.PreEvaluationHash);

            metadata = _contents.BlockMetadata1.Copy();
            preEvalBlock = new PreEvaluationBlockHeader(metadata, _sha256, _validBlock1Proof);
            AssertBlockMetadataEqual(metadata, preEvalBlock);
            AssertBytesEqual(_validBlock1Proof.Nonce, preEvalBlock.Nonce);
            Assert.Same(_sha256, preEvalBlock.HashAlgorithm);
            AssertBytesEqual(_validBlock1Proof.PreEvaluationHash, preEvalBlock.PreEvaluationHash);

            Assert.Throws<InvalidBlockNonceException>(
                () => new PreEvaluationBlockHeader(metadata, _sha256, _invalidBlock1Proof)
            );

            metadata = _contents.BlockMetadata1.Copy();
            metadata.PreviousHash = null;
            Assert.Throws<InvalidBlockPreviousHashException>(
                () => new PreEvaluationBlockHeader(metadata, _sha256, _validBlock1Proof)
            );

            metadata = _contents.GenesisMetadata.Copy();
            metadata.PreviousHash = _contents.GenesisHash;
            Assert.Throws<InvalidBlockPreviousHashException>(
                () => new PreEvaluationBlockHeader(metadata, _sha256, _validGenesisProof)
            );

            metadata = _contents.BlockMetadata1.Copy();
            metadata.Difficulty = 0L;
            Assert.Throws<InvalidBlockDifficultyException>(
                () => new PreEvaluationBlockHeader(metadata, _sha256, _validBlock1Proof.Nonce)
            );

            metadata = _contents.GenesisMetadata.Copy();
            metadata.Difficulty = 1L;
            Assert.Throws<InvalidBlockDifficultyException>(
                () => new PreEvaluationBlockHeader(metadata, _sha256, _validGenesisProof)
            );

            metadata = _contents.GenesisMetadata.Copy();
            metadata.TotalDifficulty = 1;
            Assert.Throws<InvalidBlockTotalDifficultyException>(
                () => new PreEvaluationBlockHeader(metadata, _sha256, _validGenesisProof)
            );
        }

        [Fact]
        public virtual void SafeConstructorWithPreEvaluationHash()
        {
            BlockMetadata metadata = _contents.GenesisMetadata.Copy();
            var preEvalBlock = new PreEvaluationBlockHeader(
                metadata,
                hashAlgorithm: _sha256,
                nonce: _validGenesisProof.Nonce,
                preEvaluationHash: _validGenesisProof.PreEvaluationHash
            );
            AssertBlockMetadataEqual(metadata, preEvalBlock);
            AssertBytesEqual(_validGenesisProof.Nonce, preEvalBlock.Nonce);
            Assert.Same(_sha256, preEvalBlock.HashAlgorithm);
            AssertBytesEqual(_validGenesisProof.PreEvaluationHash, preEvalBlock.PreEvaluationHash);

            metadata = _contents.BlockMetadata1.Copy();
            preEvalBlock = new PreEvaluationBlockHeader(
                metadata,
                hashAlgorithm: _sha256,
                nonce: _validBlock1Proof.Nonce,
                preEvaluationHash: _validBlock1Proof.PreEvaluationHash
            );
            AssertBlockMetadataEqual(metadata, preEvalBlock);
            AssertBytesEqual(_validBlock1Proof.Nonce, preEvalBlock.Nonce);
            Assert.Same(_sha256, preEvalBlock.HashAlgorithm);
            AssertBytesEqual(_validBlock1Proof.PreEvaluationHash, preEvalBlock.PreEvaluationHash);

            // Mutating the BlockMetadata instance does not affect PreEvaluatingBlockHeader
            // instance:
            metadata.Index++;
            Assert.Equal(_contents.BlockMetadata1.Index, preEvalBlock.Index);

            metadata = _contents.BlockMetadata1.Copy();
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
            BlockMetadata metadata = _contents.Genesis.Copy();
            var preEvalBlock = new PreEvaluationBlockHeader(
                metadata,
                hashAlgorithm: _sha256,
                nonce: _validGenesisProof.Nonce
            );
            AssertBlockMetadataEqual(metadata, preEvalBlock);
            AssertBytesEqual(_validGenesisProof.Nonce, preEvalBlock.Nonce);
            Assert.Same(_sha256, preEvalBlock.HashAlgorithm);
            AssertBytesEqual(_validGenesisProof.PreEvaluationHash, preEvalBlock.PreEvaluationHash);

            metadata = _contents.BlockMetadata1.Copy();
            preEvalBlock = new PreEvaluationBlockHeader(
                metadata,
                hashAlgorithm: _sha256,
                nonce: _validBlock1Proof.Nonce
            );
            AssertBlockMetadataEqual(metadata, preEvalBlock);
            AssertBytesEqual(_validBlock1Proof.Nonce, preEvalBlock.Nonce);
            Assert.Same(_sha256, preEvalBlock.HashAlgorithm);
            AssertBytesEqual(_validBlock1Proof.PreEvaluationHash, preEvalBlock.PreEvaluationHash);

            // Mutating the BlockMetadata instance doesn't affect PreEvaluatingBlockHeader instance:
            metadata.Index++;
            Assert.Equal(_contents.BlockMetadata1.Index, preEvalBlock.Index);

            Assert.Throws<InvalidBlockNonceException>(() =>
                new PreEvaluationBlockHeader(
                    _contents.BlockMetadata1,
                    hashAlgorithm: _sha256,
                    nonce: _invalidBlock1Proof.Nonce
                )
            );

            metadata = _contents.BlockMetadata1.Copy();
            metadata.PreviousHash = null;
            Assert.Throws<InvalidBlockPreviousHashException>(
                () => new PreEvaluationBlockHeader(metadata, _sha256, _validBlock1Proof.Nonce)
            );

            metadata = _contents.GenesisMetadata.Copy();
            metadata.PreviousHash = _contents.GenesisHash;
            Assert.Throws<InvalidBlockPreviousHashException>(
                () => new PreEvaluationBlockHeader(metadata, _sha256, _validGenesisProof.Nonce)
            );

            metadata = _contents.BlockMetadata1.Copy();
            metadata.Difficulty = 0L;
            Assert.Throws<InvalidBlockDifficultyException>(
                () => new PreEvaluationBlockHeader(metadata, _sha256, _validBlock1Proof.Nonce)
            );

            metadata = _contents.GenesisMetadata.Copy();
            metadata.Difficulty = 1L;
            Assert.Throws<InvalidBlockDifficultyException>(
                () => new PreEvaluationBlockHeader(metadata, _sha256, _validGenesisProof)
            );

            metadata = _contents.GenesisMetadata.Copy();
            metadata.TotalDifficulty = 1;
            Assert.Throws<InvalidBlockTotalDifficultyException>(
                () => new PreEvaluationBlockHeader(metadata, _sha256, _validGenesisProof)
            );
        }

        [Fact]
        public void CopyConstructor()
        {
            BlockMetadata metadata = _contents.Genesis.Copy();
            var preEvalBlock = new PreEvaluationBlockHeader(
                metadata,
                hashAlgorithm: _sha256,
                nonce: _validGenesisProof.Nonce
            );
            var copy = new PreEvaluationBlockHeader(preEvalBlock);
            AssertPreEvaluationBlockHeadersEqual(preEvalBlock, copy);
        }

        [Fact]
        public virtual void DontCheckPreEvaluationHashWithProtocolVersion0()
        {
            // Since PreEvaluationHash comparison between the actual and the expected was not
            // implemented in ProtocolVersion == 0, we need to maintain this bug on
            // ProtocolVersion < 1 for backward compatibility:
            BlockMetadata metadataPv0 = _contents.BlockMetadata1.Copy();
            metadataPv0.ProtocolVersion = 0;
            metadataPv0.PublicKey = null;
            metadataPv0.Timestamp += TimeSpan.FromSeconds(1);
            var preEvalBlockPv0 = new PreEvaluationBlockHeader(
                metadataPv0,
                hashAlgorithm: _sha256,
                nonce: _validBlock1Proof.Nonce,
                preEvaluationHash: _validBlock1Proof.PreEvaluationHash
            );
            AssertBlockMetadataEqual(metadataPv0, preEvalBlockPv0);
            AssertBytesEqual(_validBlock1Proof.Nonce, preEvalBlockPv0.Nonce);
            Assert.Same(_sha256, preEvalBlockPv0.HashAlgorithm);
            AssertBytesEqual(
                _validBlock1Proof.PreEvaluationHash,
                preEvalBlockPv0.PreEvaluationHash
            );

            // However, such bug must be fixed after ProtocolVersion > 0:
            BlockMetadata contentPv1 = _contents.BlockMetadata1.Copy();
            contentPv1.ProtocolVersion = 1;
            contentPv1.PublicKey = null;
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

        [Fact]
        public void ToBencodex()
        {
            var random = new Random();

            Bencodex.Types.Dictionary expectedGenesis = Bencodex.Types.Dictionary.Empty
                .Add("index", 0L)
                .Add("timestamp", "2021-09-06T04:46:39.123000Z")
                .Add("difficulty", 0L)
                .Add("total_difficulty", 0L)
                .Add("nonce", _validGenesisProof.Nonce.ByteArray)
                .Add(
                    "public_key",
                    ParseHex("0200e02709cc0c051dc105188c454a2e7ef7b36b85da34529d3abc1968167cf54f")
                )
                .Add("protocol_version", 2)
                .Add("state_root_hash", default(HashDigest<SHA256>).ByteArray);
            var genesis = new PreEvaluationBlockHeader(
                _contents.GenesisMetadata,
                hashAlgorithm: _sha256,
                nonce: _validGenesisProof.Nonce,
                preEvaluationHash: _validGenesisProof.PreEvaluationHash
            );
            AssertBencodexEqual(expectedGenesis, genesis.ToBencodex(default));
            HashDigest<SHA256> stateRootHash = random.NextHashDigest<SHA256>();
            AssertBencodexEqual(
                expectedGenesis.SetItem("state_root_hash", stateRootHash.ByteArray),
                genesis.ToBencodex(stateRootHash)
            );

            Bencodex.Types.Dictionary expectedBlock1 = Bencodex.Types.Dictionary.Empty
                .Add("index", 1L)
                .Add("timestamp", "2021-09-06T08:01:09.045000Z")
                .Add("difficulty", 123L)
                .Add("total_difficulty", 123L)
                .Add("nonce", _validBlock1Proof.Nonce.ByteArray)
                .Add(
                    "public_key",
                    ParseHex("0215ba27a461a986f4ce7bcda1fd73dc708da767d0405729edaacaad7b7ff60eed")
                )
                .Add(
                    "previous_hash",
                    ParseHex(
                        "341e8f360597d5bc45ab96aabc5f1b0608063f30af7bd4153556c9536a07693a"
                    )
                )
                .Add(
                    "transaction_fingerprint",
                    ParseHex(
                        "654698d34b6d9a55b0c93e4ffb2639278324868c91965bc5f96cb3071d6903a0"
                    )
                )
                .Add("protocol_version", 2)
                .Add("state_root_hash", default(HashDigest<SHA256>).ByteArray);
            var block1 = new PreEvaluationBlockHeader(
                _contents.BlockMetadata1,
                hashAlgorithm: _sha256,
                nonce: _validBlock1Proof.Nonce
            );
            AssertBencodexEqual(expectedBlock1, block1.ToBencodex(default));
            stateRootHash = random.NextHashDigest<SHA256>();
            AssertBencodexEqual(
                expectedBlock1.SetItem("state_root_hash", stateRootHash.ByteArray),
                block1.ToBencodex(stateRootHash)
            );

            var blockPv0 = _contents.BlockPv0.Mine(_sha256);
            Bencodex.Types.Dictionary expectedBlockPv0 = Bencodex.Types.Dictionary.Empty
                .Add("index", 0L)
                .Add("timestamp", "2021-09-06T04:46:39.123000Z")
                .Add("difficulty", 0L)
                .Add("nonce", blockPv0.Nonce.ByteArray)
                .Add("reward_beneficiary", ParseHex("268344BA46e6CA2A8a5096565548b9018bc687Ce"))
                .Add("state_root_hash", default(HashDigest<SHA256>).ByteArray);
            AssertBencodexEqual(expectedBlockPv0, blockPv0.ToBencodex(default));
            stateRootHash = random.NextHashDigest<SHA256>();
            AssertBencodexEqual(
                expectedBlockPv0.SetItem("state_root_hash", stateRootHash.ByteArray),
                blockPv0.ToBencodex(stateRootHash)
            );

            var blockPv1 = _contents.BlockPv1.Mine(_sha256);
            Bencodex.Types.Dictionary expectedBlockPv1 = Bencodex.Types.Dictionary.Empty
                .Add("index", 1L)
                .Add("timestamp", "2021-09-06T08:01:09.045000Z")
                .Add("difficulty", 123L)
                .Add("nonce", blockPv1.Nonce.ByteArray)
                .Add("reward_beneficiary", ParseHex("8a29de186B85560D708451101C4Bf02D63b25c50"))
                .Add(
                    "previous_hash",
                    ParseHex("341e8f360597d5bc45ab96aabc5f1b0608063f30af7bd4153556c9536a07693a")
                )
                .Add(
                    "transaction_fingerprint",
                    ParseHex("654698d34b6d9a55b0c93e4ffb2639278324868c91965bc5f96cb3071d6903a0")
                )
                .Add("protocol_version", 1)
                .Add("state_root_hash", default(HashDigest<SHA256>).ByteArray);
            AssertBencodexEqual(expectedBlockPv1, blockPv1.ToBencodex(default));
            stateRootHash = random.NextHashDigest<SHA256>();
            AssertBencodexEqual(
                expectedBlockPv1.SetItem("state_root_hash", stateRootHash.ByteArray),
                blockPv1.ToBencodex(stateRootHash)
            );
        }

        [Fact]
        public void MakeSignature()
        {
            HashDigest<SHA256> arbitraryHash = HashDigest<SHA256>.FromString(
                "e6b3803208416556db8de50670aaf0b642e13c90afd77d24da8f642dc3e8f320"
            );

            var key = _contents.Block1Key;
            var block1 = new PreEvaluationBlockHeader(
                _contents.BlockMetadata1,
                hashAlgorithm: _sha256,
                nonce: _validBlock1Proof.Nonce
            );
            ImmutableArray<byte> validSig = block1.MakeSignature(key, arbitraryHash);
            Assert.True(
                key.PublicKey.Verify(_codec.Encode(block1.ToBencodex(arbitraryHash)), validSig)
            );
            Assert.False(
                key.PublicKey.Verify(_codec.Encode(block1.ToBencodex(default)), validSig)
            );
            Assert.False(
                new PrivateKey().PublicKey.Verify(
                    _codec.Encode(block1.ToBencodex(arbitraryHash)),
                    validSig
                )
            );

            ArgumentException e = Assert.Throws<ArgumentException>(
                () => block1.MakeSignature(new PrivateKey(), arbitraryHash)
            );
            Assert.Equal("privateKey", e.ParamName);
            Assert.Contains("does not match", e.Message);

            var blockPv1 = new PreEvaluationBlockHeader(
                _contents.BlockPv1,
                _sha256,
                _contents.BlockPv1.Mine(_sha256).Nonce
            );
            InvalidOperationException e2 = Assert.Throws<InvalidOperationException>(
                () => blockPv1.MakeSignature(key, arbitraryHash)
            );
            Assert.Contains("protocol version", e2.Message);
        }

        [Fact]
        public void VerifySignature()
        {
            var random = new Random();
            HashDigest<SHA256> arbitraryHash = HashDigest<SHA256>.FromString(
                "e6b3803208416556db8de50670aaf0b642e13c90afd77d24da8f642dc3e8f320"
            );

            var block1 = new PreEvaluationBlockHeader(
                _contents.BlockMetadata1,
                hashAlgorithm: _sha256,
                nonce: _validBlock1Proof.Nonce
            );
            ImmutableArray<byte> validSig = ByteUtil.ParseHex(
                "3045022100ae733a8b3f54b8212710300f2cc2ca29de726be818880338aab39c5f0881d" +
                "ccd022033eb32a9cfb1c39798efb4037caa0bab9c2f0c269101a6f471d0efaf1cce09a5"
            ).ToImmutableArray();
            Assert.True(block1.VerifySignature(validSig, arbitraryHash));
            Assert.False(block1.VerifySignature(null, arbitraryHash));
            Assert.False(block1.VerifySignature(validSig, default));
            Assert.False(
                block1.VerifySignature(
                    random.NextBytes(validSig.Length).ToImmutableArray(),
                    arbitraryHash
                )
            );

            var blockPv1 = new PreEvaluationBlockHeader(
                _contents.BlockPv1,
                _sha256,
                _contents.BlockPv1.Mine(_sha256).Nonce
            );
            Assert.True(blockPv1.VerifySignature(null, arbitraryHash));
            Assert.False(blockPv1.VerifySignature(validSig, arbitraryHash));
        }

        [Fact]
        public void DeriveBlockHash()
        {
            Func<string, BlockHash> fromHex = BlockHash.FromString;
            HashDigest<SHA256> arbitraryHash = HashDigest<SHA256>.FromString(
                "e6b3803208416556db8de50670aaf0b642e13c90afd77d24da8f642dc3e8f320"
            );

            var genesis = new PreEvaluationBlockHeader(
                _contents.GenesisMetadata,
                hashAlgorithm: _sha256,
                nonce: _validGenesisProof.Nonce,
                preEvaluationHash: _validGenesisProof.PreEvaluationHash
            );
            AssertBytesEqual(
                fromHex("d8524ca6cea91244564eb8e95e4b83704d997b34bee023849c51eedfc57ec1a4"),
                genesis.DeriveBlockHash(default)
            );
            AssertBytesEqual(
                fromHex("100e07c7c447c539a1a15216f68ec7820c69a70c09aad6c4981ab30fba04503b"),
                genesis.DeriveBlockHash(arbitraryHash)
            );

            var block1 = new PreEvaluationBlockHeader(
                _contents.BlockMetadata1,
                hashAlgorithm: _sha256,
                nonce: _validBlock1Proof.Nonce
            );
            AssertBytesEqual(
                fromHex("60756799c3fda2f177cf0180b9f9b6bc6df1337a730d1b4d6ae8846f35906530"),
                block1.DeriveBlockHash(default)
            );
            AssertBytesEqual(
                fromHex("9c158442cb77066e3af85ff9bfc757728fb33648c75e238e906910fc628f3253"),
                block1.DeriveBlockHash(arbitraryHash)
            );
        }
    }
}
