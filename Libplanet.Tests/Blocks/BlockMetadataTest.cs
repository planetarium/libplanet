using System;
using System.Collections.Immutable;
using System.Security.Cryptography;
using Bencodex;
using Bencodex.Types;
using Libplanet.Blocks;
using Libplanet.Consensus;
using Libplanet.Crypto;
using Libplanet.Tests.Fixtures;
using Xunit;
using Xunit.Abstractions;
using static Libplanet.ByteUtil;
using static Libplanet.Tests.TestUtils;

namespace Libplanet.Tests.Blocks
{
    public class BlockMetadataTest : BlockContentFixture
    {
        private readonly ITestOutputHelper _output;

        public BlockMetadataTest(ITestOutputHelper output)
        {
            _output = output;
        }

        [Fact]
        public void CopyConstructor()
        {
            var g = new BlockMetadata(GenesisContent);
            AssertBlockMetadataEqual(GenesisContent, g);
            var b1 = new BlockMetadata(Block1Content);
            AssertBlockMetadataEqual(Block1Content, b1);
        }

        [Fact]
        public void ProtocolVersion()
        {
            Assert.Throws<InvalidBlockProtocolVersionException>(
                () => new BlockMetadata(
                    protocolVersion: -1,
                    index: Block1Metadata.Index,
                    timestamp: Block1Metadata.Timestamp,
                    miner: Block1Metadata.Miner,
                    publicKey: null,
                    previousHash: Block1Metadata.PreviousHash,
                    txHash: Block1Metadata.TxHash,
                    lastCommit: null));
            Assert.Throws<InvalidBlockProtocolVersionException>(
                () => new BlockMetadata(
                    protocolVersion: BlockMetadata.CurrentProtocolVersion + 1,
                    index: Block1Metadata.Index,
                    timestamp: Block1Metadata.Timestamp,
                    miner: Block1Metadata.Miner,
                    publicKey: null,
                    previousHash: Block1Metadata.PreviousHash,
                    txHash: Block1Metadata.TxHash,
                    lastCommit: null));
        }

        [Fact]
        public void Index()
        {
            Assert.Throws<InvalidBlockIndexException>(() => new BlockMetadata(
                index: -1L,
                timestamp: DateTimeOffset.UtcNow,
                publicKey: Block1Metadata.PublicKey,
                previousHash: Block1Metadata.PreviousHash,
                txHash: Block1Metadata.TxHash,
                lastCommit: null));
        }

        [Fact]
        public void Timestamp()
        {
            DateTimeOffset kstTimestamp =
                new DateTimeOffset(2021, 9, 7, 9, 30, 12, 345, TimeSpan.FromHours(9));
            BlockMetadata metadata = new BlockMetadata(
                protocolVersion: Block1Metadata.ProtocolVersion,
                index: Block1Metadata.Index,
                timestamp: kstTimestamp,
                miner: Block1Metadata.Miner,
                publicKey: Block1Metadata.PublicKey,
                previousHash: Block1Metadata.PreviousHash,
                txHash: Block1Metadata.TxHash,
                lastCommit: null);
            Assert.Equal(TimeSpan.Zero, metadata.Timestamp.Offset);
            Assert.Equal(
                new DateTime(2021, 9, 7, 0, 30, 12, 345),
                metadata.Timestamp.DateTime);
            Assert.Equal(kstTimestamp, metadata.Timestamp);
        }

        [Fact]
        public void PreviousHash()
        {
            Assert.Throws<InvalidBlockPreviousHashException>(() => new BlockMetadata(
                index: GenesisMetadata.Index,
                timestamp: DateTimeOffset.UtcNow,
                publicKey: GenesisMetadata.PublicKey,
                previousHash: Block1Metadata.PreviousHash,
                txHash: GenesisMetadata.TxHash,
                lastCommit: null));
            Assert.Throws<InvalidBlockPreviousHashException>(() => new BlockMetadata(
                index: Block1Metadata.Index,
                timestamp: DateTimeOffset.UtcNow,
                publicKey: Block1Metadata.PublicKey,
                previousHash: null,
                txHash: Block1Metadata.TxHash,
                lastCommit: null));
        }

        [Fact]
        public void MakeCandidateData()
        {
            Bencodex.Types.Dictionary expectedGenesis = Bencodex.Types.Dictionary.Empty
                .Add("index", 0L)
                .Add("timestamp", "2021-09-06T04:46:39.123000Z")
                .Add("nonce", ImmutableArray<byte>.Empty)
                .Add(
                    "public_key",
                    ParseHex("0200e02709cc0c051dc105188c454a2e7ef7b36b85da34529d3abc1968167cf54f")
                )
                .Add("protocol_version", 4)
                .Add(
                    "transaction_fingerprint",
                    ParseHex("3d8e87977b1142863435b9385657e69557df8951a0698e9719f7d06c5fb8db1f"));
            AssertBencodexEqual(expectedGenesis, GenesisMetadata.MakeCandidateData(default));
            AssertBencodexEqual(
                expectedGenesis.SetItem("nonce", new byte[] { 0x00, 0x01, 0x02 }),
                GenesisMetadata.MakeCandidateData(new Nonce(new byte[] { 0x00, 0x01, 0x02 }))
            );

            Bencodex.Types.Dictionary expectedBlock1 = Bencodex.Types.Dictionary.Empty
                .Add("index", 1L)
                .Add("timestamp", "2021-09-06T08:01:09.045000Z")
                .Add("nonce", new byte[] { 0xff, 0xef, 0x01, 0xcc })
                .Add(
                    "public_key",
                    ParseHex("0215ba27a461a986f4ce7bcda1fd73dc708da767d0405729edaacaad7b7ff60eed")
                )
                .Add(
                    "previous_hash",
                    ParseHex("341e8f360597d5bc45ab96aabc5f1b0608063f30af7bd4153556c9536a07693a")
                )
                .Add(
                    "transaction_fingerprint",
                    ParseHex("654698d34b6d9a55b0c93e4ffb2639278324868c91965bc5f96cb3071d6903a0")
                )
                .Add("protocol_version", 4);
            AssertBencodexEqual(
                expectedBlock1,
                Block1Metadata.MakeCandidateData(new Nonce(new byte[] { 0xff, 0xef, 0x01, 0xcc }))
            );

            Bencodex.Types.Dictionary expectedPv0 = Bencodex.Types.Dictionary.Empty
                .Add("index", 0L)
                .Add("timestamp", "2021-09-06T04:46:39.123000Z")
                .Add("nonce", ImmutableArray<byte>.Empty)
                .Add("reward_beneficiary", ParseHex("268344BA46e6CA2A8a5096565548b9018bc687Ce"));
            AssertBencodexEqual(expectedPv0, GenesisMetadataPv0.MakeCandidateData(default));
            AssertBencodexEqual(
                expectedPv0.SetItem("nonce", new byte[] { 0x00, 0x01, 0x02 }),
                GenesisMetadataPv0.MakeCandidateData(new Nonce(new byte[] { 0x00, 0x01, 0x02 }))
            );

            Bencodex.Types.Dictionary expectedPv1 = Bencodex.Types.Dictionary.Empty
                .Add("index", 1L)
                .Add("timestamp", "2021-09-06T08:01:09.045000Z")
                .Add("nonce", ImmutableArray<byte>.Empty)
                .Add("reward_beneficiary", ParseHex("8a29de186B85560D708451101C4Bf02D63b25c50"))
                .Add(
                    "previous_hash",
                    ParseHex("341e8f360597d5bc45ab96aabc5f1b0608063f30af7bd4153556c9536a07693a")
                )
                .Add(
                    "transaction_fingerprint",
                    ParseHex("654698d34b6d9a55b0c93e4ffb2639278324868c91965bc5f96cb3071d6903a0")
                )
                .Add("protocol_version", 1);
            AssertBencodexEqual(expectedPv1, Block1MetadataPv1.MakeCandidateData(default));
            AssertBencodexEqual(
                expectedPv1.SetItem("nonce", new byte[] { 0x00, 0x01, 0x02 }),
                Block1MetadataPv1.MakeCandidateData(new Nonce(new byte[] { 0x00, 0x01, 0x02 }))
            );
        }

        [Fact]
        public void MakeCandidateDataPv1()
        {
            Bencodex.Types.Dictionary expected = Bencodex.Types.Dictionary.Empty
                .Add("index", 1L)
                .Add("timestamp", "2021-09-06T08:01:09.045000Z")
                .Add("nonce", new byte[] { 0xff, 0xef, 0x01, 0xcc })
                .Add(
                    "reward_beneficiary",
                    ParseHex("8a29de186B85560D708451101C4Bf02D63b25c50")
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
                .Add("protocol_version", 1);
            AssertBencodexEqual(
                expected,
                Block1MetadataPv1.MakeCandidateData(
                    new Nonce(new byte[] { 0xff, 0xef, 0x01, 0xcc }))
            );
        }

        [Fact]
        public void MakeCandidateDataPv0()
        {
            Bencodex.Types.Dictionary expected = Bencodex.Types.Dictionary.Empty
                .Add("index", 0L)
                .Add("timestamp", "2021-09-06T04:46:39.123000Z")
                .Add("nonce", ImmutableArray<byte>.Empty)
                .Add(
                    "reward_beneficiary",
                    ParseHex("268344BA46e6CA2A8a5096565548b9018bc687Ce")
                );
            AssertBencodexEqual(
                (IValue)expected.Remove((Text)"protocol_version"),
                GenesisMetadataPv0.MakeCandidateData(default)
            );
        }

        [Fact]
        public void DerivePreEvaluationHash()
        {
            ImmutableArray<byte> FromHex(string hex) => ParseHexToImmutable(hex);

            HashDigest<SHA256> hash = GenesisMetadata.DerivePreEvaluationHash(default);
            AssertBytesEqual(
                FromHex("d6c03233c2fbe96c57c823c5edc679810f1714dceef7a466a3f7a6659af9fe17"),
                hash.ByteArray);

            hash = Block1Metadata.DerivePreEvaluationHash(
                new Nonce(FromHex("e7c1adf92c65d35aaae5")));
            AssertBytesEqual(
                FromHex("9ae70453c854c69c03e9841e117d269b97615dcf4f580fb99577d981d3f61ebf"),
                hash.ByteArray);
        }

        [Fact]
        public void ValidateLastCommit()
        {
            var validatorA = new PrivateKey();
            var validatorB = new PrivateKey();
            var validatorC = new PrivateKey();
            BlockHash blockHash = new BlockHash(TestUtils.GetRandomBytes(BlockHash.Size));
            BlockHash invalidBlockHash = new BlockHash(TestUtils.GetRandomBytes(BlockHash.Size));
            DateTimeOffset timestamp = DateTimeOffset.UtcNow;

            // Height of the last commit is invalid.
            var invalidHeightLastCommit = new BlockCommit(
                2,
                0,
                blockHash,
                new[]
                {
                    GenerateVote(blockHash, 2, 0, VoteFlag.PreCommit),
                    GenerateVote(blockHash, 2, 0, VoteFlag.PreCommit),
                    GenerateVote(blockHash, 2, 0, VoteFlag.PreCommit),
                }.ToImmutableArray());
            Assert.Throws<InvalidBlockLastCommitException>(() => new BlockMetadata(
                protocolVersion: BlockMetadata.CurrentProtocolVersion,
                index: 2,
                timestamp: timestamp,
                miner: validatorA.PublicKey.ToAddress(),
                publicKey: validatorA.PublicKey,
                previousHash: blockHash,
                txHash: null,
                lastCommit: invalidHeightLastCommit));

            // BlockHash of the last commit is invalid.
            var invalidBlockHashLastCommit = new BlockCommit(
                1,
                0,
                invalidBlockHash,
                new[]
                {
                    GenerateVote(invalidBlockHash, 1, 0, VoteFlag.PreCommit),
                    GenerateVote(invalidBlockHash, 1, 0, VoteFlag.PreCommit),
                    GenerateVote(invalidBlockHash, 1, 0, VoteFlag.PreCommit),
                }.ToImmutableArray());
            Assert.Throws<InvalidBlockLastCommitException>(() => new BlockMetadata(
                protocolVersion: BlockMetadata.CurrentProtocolVersion,
                index: 2,
                timestamp: timestamp,
                miner: validatorA.PublicKey.ToAddress(),
                publicKey: validatorA.PublicKey,
                previousHash: GenesisHash,
                txHash: null,
                lastCommit: invalidBlockHashLastCommit));

            var validLastCommit = new BlockCommit(
                1,
                0,
                blockHash,
                new[]
                {
                    GenerateVote(blockHash, 1, 0, VoteFlag.PreCommit),
                    GenerateVote(blockHash, 1, 0, VoteFlag.PreCommit),
                    GenerateVote(blockHash, 1, 0, VoteFlag.PreCommit),
                    new VoteMetadata(
                        1,
                        0,
                        blockHash,
                        timestamp,
                        validatorB.PublicKey,
                        VoteFlag.Null).Sign(null),
                }.ToImmutableArray());
            var validMetadata = new BlockMetadata(
                protocolVersion: BlockMetadata.CurrentProtocolVersion,
                index: 2,
                timestamp: timestamp,
                miner: validatorA.PublicKey.ToAddress(),
                publicKey: validatorA.PublicKey,
                previousHash: blockHash,
                txHash: null,
                lastCommit: validLastCommit);
        }

        private static Vote GenerateVote(BlockHash hash, long height, int round, VoteFlag flag)
        {
            var key = new PrivateKey();
            var voteMetadata = new VoteMetadata(
                height, round, hash, DateTimeOffset.UtcNow, key.PublicKey, flag);
            return flag == VoteFlag.PreVote || flag == VoteFlag.PreCommit
                ? voteMetadata.Sign(key)
                : voteMetadata.Sign(null);
        }
    }
}
