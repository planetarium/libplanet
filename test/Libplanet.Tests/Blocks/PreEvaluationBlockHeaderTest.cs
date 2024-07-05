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
                new HashDigest<SHA256>(TestUtils.GetRandomBytes(HashDigest<SHA256>.Size)));

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
            Bencodex.Types.Dictionary expectedGenesis = Bencodex.Types.Dictionary.Empty
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
                    ParseHex("1620ee70e94cee1bbead145cd905181ec5a6f21d82a18abf5ca448f83296486f")
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

            Bencodex.Types.Dictionary expectedBlock1 = Bencodex.Types.Dictionary.Empty
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
                        "2fe13c69db80c99bb0dbd22cd30989fa6e843e780c531ef9a71ac68b8fabfba8"
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
            HashDigest<SHA256> arbitraryHash = HashDigest<SHA256>.FromString(
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
            HashDigest<SHA256> arbitraryHash = HashDigest<SHA256>.FromString(
                "e6b3803208416556db8de50670aaf0b642e13c90afd77d24da8f642dc3e8f320"
            );

            var block1 = new PreEvaluationBlockHeader(
                _contents.Block1Metadata,
                _contents.Block1Metadata.DerivePreEvaluationHash());

            // Same as block1.MakeSignature(_contents.Block1Key, arbitraryHash)
            ImmutableArray<byte> validSig = ByteUtil.ParseHexToImmutable(
                "304402203a1bd08940dcf10c696bbb04c882bc52d27519512f81a1d38c9d49956aead6" +
                "0102201cd079a4e53c3867b4b24542f107e680935b2f369bae4ecd347adc5fedcbaf36");
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
            Func<string, BlockHash> fromHex = BlockHash.FromString;
            HashDigest<SHA256> arbitraryHash = HashDigest<SHA256>.FromString(
                "e6b3803208416556db8de50670aaf0b642e13c90afd77d24da8f642dc3e8f320"
            );

            var genesis = new PreEvaluationBlockHeader(
                _contents.GenesisMetadata,
                _contents.GenesisMetadata.DerivePreEvaluationHash());
            AssertBytesEqual(
                fromHex("6b985ae01bde1f20cc2540d573e8ef29fa6850d5c5fed11b5f16f6725f4f9279"),
                genesis.DeriveBlockHash(default, null)
            );
            AssertBytesEqual(
                fromHex("4eabde1d1cffe6d757d45ee06ec2df06b3348df4019960be82a2f60b9a9aa824"),
                genesis.DeriveBlockHash(
                    default,
                    genesis.MakeSignature(_contents.GenesisKey, default)
                )
            );
            AssertBytesEqual(
                fromHex("32a983fd82abe6fae843f1719b53782eae55c4cdcf7698b30898369281f6a913"),
                genesis.DeriveBlockHash(arbitraryHash, null)
            );
            AssertBytesEqual(
                fromHex("7bda8e4ea57963b105c6420f0374ddaf5bb27e9c7fa7e34785bd21c44c8d46a1"),
                genesis.DeriveBlockHash(
                    arbitraryHash,
                    genesis.MakeSignature(_contents.GenesisKey, arbitraryHash))
            );

            var block1 = new PreEvaluationBlockHeader(
                _contents.Block1Metadata,
                _contents.Block1Metadata.DerivePreEvaluationHash());
            AssertBytesEqual(
                fromHex("d4e6f3193e0fe5891667deeb112daceef91ca42946696943726bf3cecf1bb07f"),
                block1.DeriveBlockHash(default, null)
            );
            AssertBytesEqual(
                fromHex("9e32da9a1127f8a7cf3d127f871664aed86d7c629dba1574d018c7322600b3e3"),
                block1.DeriveBlockHash(default, block1.MakeSignature(_contents.Block1Key, default))
            );
            AssertBytesEqual(
                fromHex("4ea630fb80d6235a5a7433b8935bac389c5dab486dd9c8dd24a840733ae5ce06"),
                block1.DeriveBlockHash(arbitraryHash, null)
            );
            AssertBytesEqual(
                fromHex("e86d8b1d9e37ffd051fcbc9ece3cc112f87b8653e5cf4e7c34a5cae4e9594624"),
                block1.DeriveBlockHash(
                    arbitraryHash, block1.MakeSignature(_contents.Block1Key, arbitraryHash)
                )
            );
        }
    }
}
