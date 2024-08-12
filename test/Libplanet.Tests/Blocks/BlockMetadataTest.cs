using System;
using System.Collections.Immutable;
using System.Numerics;
using System.Security.Cryptography;
using Libplanet.Common;
using Libplanet.Consensus;
using Libplanet.Crypto;
using Libplanet.Tests.Fixtures;
using Libplanet.Types.Blocks;
using Libplanet.Types.Consensus;
using Xunit;
using Xunit.Abstractions;
using static Libplanet.Common.ByteUtil;
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
                    lastCommit: null,
                    proof: null,
                    evidenceHash: null));
            Assert.Throws<InvalidBlockProtocolVersionException>(
                () => new BlockMetadata(
                    protocolVersion: BlockMetadata.CurrentProtocolVersion + 1,
                    index: Block1Metadata.Index,
                    timestamp: Block1Metadata.Timestamp,
                    miner: Block1Metadata.Miner,
                    publicKey: null,
                    previousHash: Block1Metadata.PreviousHash,
                    txHash: Block1Metadata.TxHash,
                    lastCommit: null,
                    proof: null,
                    evidenceHash: null));
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
                lastCommit: null,
                proof: null,
                evidenceHash: null));
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
                lastCommit: null,
                proof: null,
                evidenceHash: null);
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
                lastCommit: null,
                proof: null,
                evidenceHash: null));
            Assert.Throws<InvalidBlockPreviousHashException>(() => new BlockMetadata(
                index: Block1Metadata.Index,
                timestamp: DateTimeOffset.UtcNow,
                publicKey: Block1Metadata.PublicKey,
                previousHash: null,
                txHash: Block1Metadata.TxHash,
                lastCommit: null,
                proof: null,
                evidenceHash: null));
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
                .Add("protocol_version", BlockMetadata.CurrentProtocolVersion)
                .Add(
                    "transaction_fingerprint",
                    ParseHex("3d8e87977b1142863435b9385657e69557df8951a0698e9719f7d06c5fb8db1f")
                )
                .Add(
                    "proof",
                    ParseHex("0224313f215eb0c9d511f43a4aa55c5df1cd5dffbc29197f1dc7b936aa5a" +
                    "30813d88ad81348df92917b8fd2e88b513d3c4381e554c41f91f201fe07a7c6967718" +
                    "03b0740d363ab3e15a76823b092d2f245f288291bb01063fecd2298011449668b")
                )
                .Add(
                    "evidence_hash",
                    ParseHex("bd1b6bc740c7d74fe39f8c78dd6860b7b5bf9c58336a703a583a5a59651a4af3")
                );
            AssertBencodexEqual(expectedGenesis, GenesisMetadata.MakeCandidateData());

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
                    ParseHex("341e8f360597d5bc45ab96aabc5f1b0608063f30af7bd4153556c9536a07693a")
                )
                .Add(
                    "transaction_fingerprint",
                    ParseHex("654698d34b6d9a55b0c93e4ffb2639278324868c91965bc5f96cb3071d6903a0")
                )
                .Add("protocol_version", BlockMetadata.CurrentProtocolVersion)
                .Add(
                    "proof",
                    ParseHex("02b5de417ca459f8ab048625c55daf95fb47f7a9a41de80dcbbb0a454247" +
                    "e315ee845dda470812bf8b16741a8aacf7702c57d74e35c9e751089ee478d35a4fdcc" +
                    "7e150b5880ff57799bb7cd64fff33f99b663e98156f698d1590a472c520ffa9c8"
                    )
                )
                .Add(
                    "evidence_hash",
                    ParseHex("e7198889cc4a82a8b7be4b7f428b6201400ef222709f756e540b32bc1e8d5d86")
                );
            AssertBencodexEqual(
                expectedBlock1,
                Block1Metadata.MakeCandidateData());
        }

        [Fact]
        public void MakeCandidateDataPv1()
        {
            Bencodex.Types.Dictionary expected = Bencodex.Types.Dictionary.Empty
                .Add("index", 1L)
                .Add("timestamp", "2021-09-06T08:01:09.045000Z")
                .Add("nonce", ImmutableArray<byte>.Empty)
                .Add("reward_beneficiary", ParseHex("8a29de186B85560D708451101C4Bf02D63b25c50"))
                .Add(
                    "previous_hash",
                    ParseHex(
                        "341e8f360597d5bc45ab96aabc5f1b0608063f30af7bd4153556c9536a07693a"))
                .Add(
                    "transaction_fingerprint",
                    ParseHex(
                        "654698d34b6d9a55b0c93e4ffb2639278324868c91965bc5f96cb3071d6903a0"
                    )
                )
                .Add(
                    "evidence_hash",
                    ParseHex("e7198889cc4a82a8b7be4b7f428b6201400ef222709f756e540b32bc1e8d5d86")
                )
                .Add("protocol_version", 1);
            AssertBencodexEqual(expected, Block1MetadataPv1.MakeCandidateData());
        }

        [Fact]
        public void MakeCandidateDataPv0()
        {
            Bencodex.Types.Dictionary expected = Bencodex.Types.Dictionary.Empty
                .Add("index", 0L)
                .Add("timestamp", "2021-09-06T04:46:39.123000Z")
                .Add("nonce", ImmutableArray<byte>.Empty)
                .Add("reward_beneficiary", ParseHex("268344BA46e6CA2A8a5096565548b9018bc687Ce"));
            AssertBencodexEqual(expected, GenesisMetadataPv0.MakeCandidateData());
        }

        [Fact]
        public void DerivePreEvaluationHash()
        {
            ImmutableArray<byte> FromHex(string hex) => ParseHexToImmutable(hex);

            HashDigest<SHA256> hash = GenesisMetadata.DerivePreEvaluationHash();
            AssertBytesEqual(
                FromHex("b96b3a3bcb0afe52fb4b90a9bc00678dd18b4c4adf3a38099ebc1fd7b8fca4c8"),
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
                miner: validatorA.Address,
                publicKey: validatorA.PublicKey,
                previousHash: blockHash,
                txHash: null,
                lastCommit: invalidHeightLastCommit,
                proof: new ConsensusInformation(2L, 0, null).Prove(validatorA),
                evidenceHash: null));

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
                miner: validatorA.Address,
                publicKey: validatorA.PublicKey,
                previousHash: GenesisHash,
                txHash: null,
                lastCommit: invalidBlockHashLastCommit,
                proof: new ConsensusInformation(2L, 0, null).Prove(validatorA),
                evidenceHash: null));

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
                        BigInteger.One,
                        VoteFlag.Null).Sign(null),
                }.ToImmutableArray());
            var validMetadata = new BlockMetadata(
                protocolVersion: BlockMetadata.CurrentProtocolVersion,
                index: 2,
                timestamp: timestamp,
                miner: validatorA.Address,
                publicKey: validatorA.PublicKey,
                previousHash: blockHash,
                txHash: null,
                lastCommit: validLastCommit,
                proof: new ConsensusInformation(2L, 0, null).Prove(validatorA),
                evidenceHash: null);
        }

        private static Vote GenerateVote(BlockHash hash, long height, int round, VoteFlag flag)
        {
            var key = new PrivateKey();
            var voteMetadata = new VoteMetadata(
                height, round, hash, DateTimeOffset.UtcNow, key.PublicKey, BigInteger.One, flag);
            return flag == VoteFlag.PreVote || flag == VoteFlag.PreCommit
                ? voteMetadata.Sign(key)
                : voteMetadata.Sign(null);
        }
    }
}
