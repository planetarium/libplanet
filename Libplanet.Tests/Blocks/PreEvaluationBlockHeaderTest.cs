using System;
using System.Collections.Immutable;
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
        protected readonly (Nonce Nonce, ImmutableArray<byte> PreEvaluationHash) _validGenesisProof;
        protected readonly (Nonce Nonce, ImmutableArray<byte> PreEvaluationHash) _validBlock1Proof;
        protected readonly (Nonce Nonce, ImmutableArray<byte> PreEvaluationHash)
            _invalidBlock1Proof;

        public PreEvaluationBlockHeaderTest()
        {
            _contents = new BlockContentFixture();
            _codec = new Codec();

            var validGenesisNonce = default(Nonce);
            byte[] validGenesisBytes =
                _codec.Encode(_contents.GenesisMetadata.MakeCandidateData(validGenesisNonce));
            ImmutableArray<byte> validGenesisPreEvalHash =
                _hashAlgorithmType.Digest(validGenesisBytes).ToImmutableArray();
            _validGenesisProof = (validGenesisNonce, validGenesisPreEvalHash);

            // Checks if the hard-coded proof of the fixture is up-to-date.  If it's outdated,
            // throws an exception that prints a regenerated up-to-date one:
            const int lastCheckedProtocolVersion = 3;
            if (_contents.Block1Metadata.ProtocolVersion > lastCheckedProtocolVersion)
            {
                (Nonce Nonce, ImmutableArray<byte> Digest) regen =
                    Hashcash.Answer(
                        n => new[] { _codec.Encode(_contents.Block1Metadata.MakeCandidateData(n)) },
                        _hashAlgorithmType,
                        _contents.Block1Metadata.Difficulty,
                        0
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
                new byte[] { 0xf4, 0xbe, 0xc2, 0x4d, 0x1e, 0x04, 0xeb, 0x4b, 0xb5, 0x98 }
            );
            byte[] validBlock1Bytes =
                _codec.Encode(_contents.Block1Metadata.MakeCandidateData(validBlock1Nonce));
            ImmutableArray<byte> validBlock1PreEvalHash =
                _hashAlgorithmType.Digest(validBlock1Bytes).ToImmutableArray();
            _validBlock1Proof = (validBlock1Nonce, validBlock1PreEvalHash);

            var invalidBlock1Nonce = default(Nonce);
            byte[] invalidBlock1Bytes =
                _codec.Encode(_contents.Block1Metadata.MakeCandidateData(invalidBlock1Nonce));
            ImmutableArray<byte> invalidBlock1PreEvalHash =
                Hashcash<SHA256>.Digest(invalidBlock1Bytes).ToImmutableArray();
            _invalidBlock1Proof = (invalidBlock1Nonce, invalidBlock1PreEvalHash);
        }

        [Fact]
        public virtual void SafeConstructorWithPreEvaluationHash()
        {
            BlockMetadata metadata = _contents.GenesisMetadata;
            var preEvalBlock = new PreEvaluationBlockHeader(
                metadata, _validGenesisProof);
            AssertBlockMetadataEqual(metadata, preEvalBlock);
            AssertBytesEqual(_validGenesisProof.Nonce, preEvalBlock.Nonce);
            AssertBytesEqual(_validGenesisProof.PreEvaluationHash, preEvalBlock.PreEvaluationHash);

            metadata = _contents.Block1Metadata;
            preEvalBlock = new PreEvaluationBlockHeader(metadata, _validBlock1Proof);
            AssertBlockMetadataEqual(metadata, preEvalBlock);
            AssertBytesEqual(_validBlock1Proof.Nonce, preEvalBlock.Nonce);
            AssertBytesEqual(_validBlock1Proof.PreEvaluationHash, preEvalBlock.PreEvaluationHash);

            metadata = _contents.Block1Metadata;
            Assert.Throws<InvalidBlockNonceException>(() =>
                new PreEvaluationBlockHeader(metadata, _invalidBlock1Proof));
            Assert.Throws<InvalidBlockPreEvaluationHashException>(() =>
                new PreEvaluationBlockHeader(
                    metadata,
                    (_validBlock1Proof.Nonce, _invalidBlock1Proof.PreEvaluationHash)));
        }

        [Fact]
        public void CopyConstructor()
        {
            BlockMetadata metadata = new BlockMetadata(_contents.GenesisContent);
            var preEvalBlock = new PreEvaluationBlockHeader(
                metadata, metadata.DerivePreEvaluationHash(default));
            var copy = new PreEvaluationBlockHeader(preEvalBlock);
            AssertPreEvaluationBlockHeadersEqual(preEvalBlock, copy);
        }

        [Fact]
        public void ValidatePreEvaluationHash()
        {
            BlockMetadata metadataPv1 = new BlockMetadata(_contents.Block1ContentPv1);
            Assert.True(metadataPv1.ProtocolVersion <= BlockMetadata.PoWProtocolVersion);

            // Should be fine.
            var preEvaluationBlockHeaderPv1 = new PreEvaluationBlockHeader(
                metadataPv1,
                metadataPv1.DerivePreEvaluationHash(new Nonce(TestUtils.GetRandomBytes(4))));

            BlockMetadata metadata = new BlockMetadata(_contents.Block1Content);
            Assert.False(metadata.ProtocolVersion <= BlockMetadata.PoWProtocolVersion);
            var preEvaluationBlockHeader = new PreEvaluationBlockHeader(
                metadata,
                metadata.DerivePreEvaluationHash(default));
        }

        [Fact]
        public virtual void DontCheckPreEvaluationHashWithProtocolVersion0()
        {
            // Since PreEvaluationHash comparison between the actual and the expected was not
            // implemented in ProtocolVersion == 0, we need to maintain this bug on
            // ProtocolVersion < 1 for backward compatibility:
            BlockMetadata metadataPv0 = new BlockMetadata(
                protocolVersion: 0,
                index: _contents.Block1Metadata.Index,
                timestamp: _contents.Block1Metadata.Timestamp.AddSeconds(1),
                miner: _contents.Block1Metadata.Miner,
                publicKey: null,
                difficulty: _contents.Block1Metadata.Difficulty,
                totalDifficulty: _contents.Block1Metadata.TotalDifficulty,
                previousHash: _contents.Block1Metadata.PreviousHash,
                txHash: _contents.Block1Metadata.TxHash);
            var preEvalBlockPv0 = new PreEvaluationBlockHeader(metadataPv0, _validBlock1Proof);
            AssertBlockMetadataEqual(metadataPv0, preEvalBlockPv0);
            AssertBytesEqual(_validBlock1Proof.Nonce, preEvalBlockPv0.Nonce);
            AssertBytesEqual(
                _validBlock1Proof.PreEvaluationHash,
                preEvalBlockPv0.PreEvaluationHash
            );

            // However, such bug must be fixed after ProtocolVersion > 0:
            BlockMetadata metadataPv1 = new BlockMetadata(
                protocolVersion: 1,
                index: _contents.Block1Metadata.Index,
                timestamp: _contents.Block1Metadata.Timestamp.AddSeconds(1),
                miner: _contents.Block1Metadata.Miner,
                publicKey: null,
                difficulty: _contents.Block1Metadata.Difficulty,
                totalDifficulty: _contents.Block1Metadata.TotalDifficulty,
                previousHash: _contents.Block1Metadata.PreviousHash,
                txHash: _contents.Block1Metadata.TxHash);
            Assert.Throws<InvalidBlockPreEvaluationHashException>(() =>
                new PreEvaluationBlockHeader(metadataPv1, _validBlock1Proof));
        }

        [Fact]
        public void MakeCandidateData()
        {
            var random = new Random();
            Bencodex.Types.Dictionary expectedGenesis = Bencodex.Types.Dictionary.Empty
                .Add("index", 0L)
                .Add("timestamp", "2021-09-06T04:46:39.123000Z")
                .Add("nonce", default(Nonce).ByteArray)
                .Add(
                    "public_key",
                    ParseHex("0200e02709cc0c051dc105188c454a2e7ef7b36b85da34529d3abc1968167cf54f")
                )
                .Add("protocol_version", 4)
                .Add("state_root_hash", default(HashDigest<SHA256>).ByteArray)
                .Add(
                    "transaction_fingerprint",
                    ParseHex("eae2c77210d9a1a4ce4fdd68479e5b49d91c341ac071e51f3a525030a131270b"));
            var genesis = new PreEvaluationBlockHeader(
                _contents.GenesisMetadata,
                _contents.GenesisMetadata.DerivePreEvaluationHash(default));
            AssertBencodexEqual(expectedGenesis, genesis.MakeCandidateData(default));
            HashDigest<SHA256> stateRootHash = random.NextHashDigest<SHA256>();
            AssertBencodexEqual(
                expectedGenesis.SetItem("state_root_hash", stateRootHash.ByteArray),
                genesis.MakeCandidateData(stateRootHash)
            );

            Bencodex.Types.Dictionary expectedBlock1 = Bencodex.Types.Dictionary.Empty
                .Add("index", 1L)
                .Add("timestamp", "2021-09-06T08:01:09.045000Z")
                .Add("nonce", default(Nonce).ByteArray)
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
                .Add("protocol_version", 4)
                .Add("state_root_hash", default(HashDigest<SHA256>).ByteArray);
            var block1 = new PreEvaluationBlockHeader(
                _contents.Block1Metadata,
                _contents.Block1Metadata.DerivePreEvaluationHash(default));
            AssertBencodexEqual(expectedBlock1, block1.MakeCandidateData(default));
            stateRootHash = random.NextHashDigest<SHA256>();
            AssertBencodexEqual(
                expectedBlock1.SetItem("state_root_hash", stateRootHash.ByteArray),
                block1.MakeCandidateData(stateRootHash)
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
                _contents.Block1Metadata,
                _contents.Block1Metadata.DerivePreEvaluationHash(default));
            ImmutableArray<byte> validSig = block1.MakeSignature(key, arbitraryHash);
            Assert.True(
                key.PublicKey.Verify(
                    _codec.Encode(block1.MakeCandidateData(arbitraryHash)),
                    validSig
                )
            );
            Assert.False(
                key.PublicKey.Verify(_codec.Encode(block1.MakeCandidateData(default)), validSig)
            );
            Assert.False(
                new PrivateKey().PublicKey.Verify(
                    _codec.Encode(block1.MakeCandidateData(arbitraryHash)),
                    validSig
                )
            );

            ArgumentException e = Assert.Throws<ArgumentException>(
                () => block1.MakeSignature(new PrivateKey(), arbitraryHash)
            );
            Assert.Equal("privateKey", e.ParamName);
            Assert.Contains("does not match", e.Message);

            var blockPv1 = new PreEvaluationBlockHeader(
                _contents.Block1MetadataPv1,
                _contents.Block1MetadataPv1.DerivePreEvaluationHash(default));
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
                _contents.Block1Metadata,
                _contents.Block1Metadata.DerivePreEvaluationHash(default));

            // Same as block1.MakeSignature(_contents.Block1Key, arbitraryHash)
            ImmutableArray<byte> validSig = ByteUtil.ParseHex(
                "3044022100b285f684fe94524aa725c6b69cb858370f85af56420d275410e148b0ad18" +
                "b3d9021f324c828b1dd949ebf73591bc0ac8858debae7c5aabc420fd4a1cec53d61e60"
            ).ToImmutableArray();

            AssertBytesEqual(
                block1.MakeSignature(_contents.Block1Key, arbitraryHash),
                validSig);
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
                _contents.Block1MetadataPv1,
                _contents.Block1MetadataPv1.DerivePreEvaluationHash(default));
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
                _contents.GenesisMetadata.DerivePreEvaluationHash(default));
            AssertBytesEqual(
                fromHex("164f3b65f29e7b1a2440582c31fdcf9e26277c7ac389b139ac7c1b7c0e7b880b"),
                genesis.DeriveBlockHash(default, null)
            );
            AssertBytesEqual(
                fromHex("221ec2ef2c752547eae2b9f04300a3322ded62d747862e5aee9434aa8584fd68"),
                genesis.DeriveBlockHash(
                    default,
                    genesis.MakeSignature(_contents.GenesisKey, default)
                )
            );
            AssertBytesEqual(
                fromHex("edb7a84ac4ce3a7f2a11e0abe6c2deabe0583fd5a626784809f5fcf335de4ed9"),
                genesis.DeriveBlockHash(arbitraryHash, null)
            );
            AssertBytesEqual(
                fromHex("775015344e34a842d00db61f3f2e427678821f882b556ec7daacd1b1e77bb34b"),
                genesis.DeriveBlockHash(
                    arbitraryHash,
                    genesis.MakeSignature(_contents.GenesisKey, arbitraryHash))
            );

            var block1 = new PreEvaluationBlockHeader(
                _contents.Block1Metadata,
                _contents.Block1Metadata.DerivePreEvaluationHash(default));
            AssertBytesEqual(
                fromHex("9c999d048603c32369bcd982ac2488f8d2782f339f0296ad537d4f039984dc47"),
                block1.DeriveBlockHash(default, null)
            );
            AssertBytesEqual(
                fromHex("1ff0ca42037e91a07db6b42a2f0aadc7fc1249900033718d783334a90a333892"),
                block1.DeriveBlockHash(default, block1.MakeSignature(_contents.Block1Key, default))
            );
            AssertBytesEqual(
                fromHex("5e63ed240742d7dac4b7f290f5a7afc51e2d410b13d2ad9690e56ac66486b23d"),
                block1.DeriveBlockHash(arbitraryHash, null)
            );
            AssertBytesEqual(
                fromHex("54f7572223e4d642ca8772378528120392a9997655860a6ec108f3e4d8c1cc14"),
                block1.DeriveBlockHash(
                    arbitraryHash, block1.MakeSignature(_contents.Block1Key, arbitraryHash)
                )
            );
        }
    }
}
