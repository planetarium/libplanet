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
                "304402203ed4c76c5196b0fe280ea0235ba05211cfd4a96d2660e2c6883d11ddb49c47e" +
                "90220095958c7c019db2bb71e9f5fc857ff6c94c2cfdf8484f08050694451ddfe569c");
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
                "9db253bdb987ec93df713522e5f90f4865a2d0fa337481d7a065d588ddae7fa7"
            );

            var genesis = new PreEvaluationBlockHeader(
                _contents.GenesisMetadata,
                _contents.GenesisMetadata.DerivePreEvaluationHash());
            AssertBytesEqual(
                fromHex("6f8f1d4ca79463e85f56b2927ac4414bd8b0ac86942a2af44fa71ac10c61c3d5"),
                genesis.DeriveBlockHash(default, null)
            );
            AssertBytesEqual(
                fromHex("59a9d5a9f3de4859f557437f3667f91cda146b6e980bda8cb4f0c1b9eff3bd43"),
                genesis.DeriveBlockHash(
                    default,
                    genesis.MakeSignature(_contents.GenesisKey, default)
                )
            );
            AssertBytesEqual(
                fromHex("0b5ea8cf0a678075b9438cdf7d0a01bf61ec62c05d9320c597a255f63196f437"),
                genesis.DeriveBlockHash(arbitraryHash, null)
            );
            AssertBytesEqual(
                fromHex("8f8e5bdcbff809c89fcd295adba98c194babacb6ed69639b13cdc1b990b6c8e0"),
                genesis.DeriveBlockHash(
                    arbitraryHash,
                    genesis.MakeSignature(_contents.GenesisKey, arbitraryHash))
            );

            var block1 = new PreEvaluationBlockHeader(
                _contents.Block1Metadata,
                _contents.Block1Metadata.DerivePreEvaluationHash());
            AssertBytesEqual(
                fromHex("b15d91c7df2b6e568110dc0e0547e79218645fef159d90ca87ea6d347c814be7"),
                block1.DeriveBlockHash(default, null)
            );
            AssertBytesEqual(
                fromHex("de112dcbe27aa0f040ee9dc93c8681bb58b514e52f769f72d60cbaaf203962e8"),
                block1.DeriveBlockHash(default, block1.MakeSignature(_contents.Block1Key, default))
            );
            AssertBytesEqual(
                fromHex("1c3481fade04f4f82734f497fcdafb85745134506eacac288acb25f5d989be06"),
                block1.DeriveBlockHash(arbitraryHash, null)
            );
            AssertBytesEqual(
                fromHex("37cc2ae1e59e01192d14dc6d09b9d52e4fbc8cdf11db2fa181f000fd2c00b6c1"),
                block1.DeriveBlockHash(
                    arbitraryHash, block1.MakeSignature(_contents.Block1Key, arbitraryHash)
                )
            );
        }
    }
}
