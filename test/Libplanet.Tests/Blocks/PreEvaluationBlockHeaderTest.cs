using System;
using System.Collections.Immutable;
using System.Security.Cryptography;
using Bencodex;
using Bencodex.Types;
using Libplanet.Common;
using Libplanet.Crypto;
using Libplanet.Tests.Fixtures;
using Libplanet.Types.Blocks;
using Xunit;
using static Libplanet.Common.ByteUtil;
using static Libplanet.Tests.TestUtils;

namespace Libplanet.Tests.Blocks
{
    // FIXME: The most of the following tests are duplicated in PreEvaluationBlockTest.
    public class PreEvaluationBlockHeaderTest
    {
        protected readonly BlockContentFixture _contents;
        protected readonly Codec _codec;

        public PreEvaluationBlockHeaderTest()
        {
            _contents = new BlockContentFixture();
            _codec = new Codec();
        }

        [Fact]
        public void CopyConstructor()
        {
            BlockMetadata metadata = new BlockMetadata(_contents.GenesisContent);
            var preEvalBlock = new PreEvaluationBlockHeader(
                metadata, metadata.DerivePreEvaluationHash());
            var copy = new PreEvaluationBlockHeader(preEvalBlock);
            AssertPreEvaluationBlockHeadersEqual(preEvalBlock, copy);
        }

        [Fact]
        public void ValidatePreEvaluationHash()
        {
            BlockMetadata metadataPv1 = new BlockMetadata(_contents.Block1ContentPv1);
            Assert.True(metadataPv1.ProtocolVersion < BlockMetadata.PBFTProtocolVersion);

            // Should be fine.
            var preEvaluationBlockHeaderPv1 = new PreEvaluationBlockHeader(
                metadataPv1,
                new HashDigest<SHA256>(GetRandomBytes(HashDigest<SHA256>.Size)));

            BlockMetadata metadata = new BlockMetadata(_contents.Block1Content);
            Assert.False(metadata.ProtocolVersion < BlockMetadata.PBFTProtocolVersion);
            var preEvaluationBlockHeader = new PreEvaluationBlockHeader(
                metadata,
                metadata.DerivePreEvaluationHash());
        }

        [Fact]
        public void MakeCandidateData()
        {
            var random = new Random();
            Bencodex.Types.Dictionary expectedGenesis = Dictionary.Empty
                .Add("index", 0L)
                .Add("timestamp", "2021-09-06T04:46:39.123000Z")
                .Add("nonce", ImmutableArray<byte>.Empty)
                .Add(
                    "public_key",
                    ParseHex("0200e02709cc0c051dc105188c454a2e7ef7b36b85da34529d3abc1968167cf54f")
                )
                .Add("protocol_version", BlockMetadata.CurrentProtocolVersion)
                .Add("state_root_hash", default(HashDigest<SHA256>).ByteArray)
                .Add(
                    "transaction_fingerprint",
                    ParseHex("3d8e87977b1142863435b9385657e69557df8951a0698e9719f7d06c5fb8db1f")
                )
                .Add(
                    "evidence_hash",
                    ParseHex("bd1b6bc740c7d74fe39f8c78dd6860b7b5bf9c58336a703a583a5a59651a4af3")
                );
            var genesis = new PreEvaluationBlockHeader(
                _contents.GenesisMetadata,
                _contents.GenesisMetadata.DerivePreEvaluationHash());
            AssertBencodexEqual(expectedGenesis, genesis.MakeCandidateData(default));
            HashDigest<SHA256> stateRootHash = random.NextHashDigest<SHA256>();
            AssertBencodexEqual(
                expectedGenesis.SetItem("state_root_hash", stateRootHash.ByteArray),
                genesis.MakeCandidateData(stateRootHash)
            );

            Bencodex.Types.Dictionary expectedBlock1 = Dictionary.Empty
                .Add("index", 1L)
                .Add("timestamp", "2021-09-06T08:01:09.045000Z")
                .Add("nonce", ImmutableArray<byte>.Empty)
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
                .Add(
                    "evidence_hash",
                    ParseHex(
                        "e7198889cc4a82a8b7be4b7f428b6201400ef222709f756e540b32bc1e8d5d86"
                    )
                )
                .Add("protocol_version", BlockMetadata.CurrentProtocolVersion)
                .Add("state_root_hash", default(HashDigest<SHA256>).ByteArray);
            var block1 = new PreEvaluationBlockHeader(
                _contents.Block1Metadata,
                _contents.Block1Metadata.DerivePreEvaluationHash());
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
            HashDigest<SHA256> arbitraryHash = HashDigest<SHA256>.Parse(
                "e6b3803208416556db8de50670aaf0b642e13c90afd77d24da8f642dc3e8f320"
            );

            var key = _contents.Block1Key;
            var block1 = new PreEvaluationBlockHeader(
                _contents.Block1Metadata,
                _contents.Block1Metadata.DerivePreEvaluationHash());
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
                _contents.Block1MetadataPv1.DerivePreEvaluationHash());
            InvalidOperationException e2 = Assert.Throws<InvalidOperationException>(
                () => blockPv1.MakeSignature(key, arbitraryHash)
            );
            Assert.Contains("protocol version", e2.Message);
        }

        [Fact]
        public void VerifySignature()
        {
            var random = new Random();
            HashDigest<SHA256> arbitraryHash = HashDigest<SHA256>.Parse(
                "e6b3803208416556db8de50670aaf0b642e13c90afd77d24da8f642dc3e8f320"
            );

            var block1 = new PreEvaluationBlockHeader(
                _contents.Block1Metadata,
                _contents.Block1Metadata.DerivePreEvaluationHash());

            // Same as block1.MakeSignature(_contents.Block1Key, arbitraryHash)
            ImmutableArray<byte> validSig = ParseHexToImmutable(
                "3045022100f975e902971092f16dbbb1fe6b7c956de648a8cd62346dbadc07e5fca4ce3" +
                "07a02200987a349f0763efd0448659ed66c6bd0ad0971dd57fbb89c672aed592fbd70d6");
            AssertBytesEqual(
                validSig,
                block1.MakeSignature(_contents.Block1Key, arbitraryHash));
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
                _contents.Block1MetadataPv1.DerivePreEvaluationHash());
            Assert.True(blockPv1.VerifySignature(null, arbitraryHash));
            Assert.False(blockPv1.VerifySignature(validSig, arbitraryHash));
        }

        [Fact]
        public void DeriveBlockHash()
        {
            Func<string, BlockHash> fromHex = BlockHash.Parse;
            HashDigest<SHA256> arbitraryHash = HashDigest<SHA256>.Parse(
                "9db253bdb987ec93df713522e5f90f4865a2d0fa337481d7a065d588ddae7fa7"
            );

            var genesis = new PreEvaluationBlockHeader(
                _contents.GenesisMetadata,
                _contents.GenesisMetadata.DerivePreEvaluationHash());
            AssertBytesEqual(
                fromHex("d790aa3b2d985d58e6fe6547336ca9d2bfdb749a27cd58a17dbfd0c6880da8e3"),
                genesis.DeriveBlockHash(default, null)
            );
            AssertBytesEqual(
                fromHex("47b5227dfdd99af4faf9ae9e82ef3b615063179d275081eae4c122685bbf7dcb"),
                genesis.DeriveBlockHash(
                    default,
                    genesis.MakeSignature(_contents.GenesisKey, default)
                )
            );
            AssertBytesEqual(
                fromHex("2c45bb52e4c7d79caa28da9b63ec0f492262836c975bfa5bb27f62e96f2aad99"),
                genesis.DeriveBlockHash(arbitraryHash, null)
            );
            AssertBytesEqual(
                fromHex("e985fcdce3f73dee90a4eaec9399283f856bb6f9326e4300bbe1d6126ff7ad55"),
                genesis.DeriveBlockHash(
                    arbitraryHash,
                    genesis.MakeSignature(_contents.GenesisKey, arbitraryHash))
            );

            var block1 = new PreEvaluationBlockHeader(
                _contents.Block1Metadata,
                _contents.Block1Metadata.DerivePreEvaluationHash());
            AssertBytesEqual(
                fromHex("ade696a646c9e4321cc90160807cba3d15d7cd28556d2dfb4103e8730a46038c"),
                block1.DeriveBlockHash(default, null)
            );
            AssertBytesEqual(
                fromHex("b3157a151d2168653e21ffc850f9d1a96bca6310275cccbeb9bd705f67c2e1c9"),
                block1.DeriveBlockHash(default, block1.MakeSignature(_contents.Block1Key, default))
            );
            AssertBytesEqual(
                fromHex("3fd4ee37ed2fc5dae5a9533984f06b3975e176bdaa70689a3c14acd8b4ea384d"),
                block1.DeriveBlockHash(arbitraryHash, null)
            );
            AssertBytesEqual(
                fromHex("83ceb4d1e5bbc385daaebfd044a5e4ba65bf1d8b63ef0aabe4d68fc5642b4516"),
                block1.DeriveBlockHash(
                    arbitraryHash, block1.MakeSignature(_contents.Block1Key, arbitraryHash)
                )
            );
        }
    }
}
