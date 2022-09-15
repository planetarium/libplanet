using System;
using System.Collections.Immutable;
using System.Threading;
using System.Threading.Tasks;
using Bencodex;
using Bencodex.Types;
using Libplanet.Blocks;
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
            int v = Block1Metadata.ProtocolVersion;
            Assert.Throws<InvalidBlockProtocolVersionException>(
                () => Block1Metadata.ProtocolVersion = -1
            );
            Assert.Equal(v, Block1Metadata.ProtocolVersion);
            Assert.Throws<InvalidBlockProtocolVersionException>(
                () => Block1Metadata.ProtocolVersion = Block<Arithmetic>.CurrentProtocolVersion + 1
            );
            Assert.Equal(v, Block1Metadata.ProtocolVersion);
        }

        [Fact]
        public void Index()
        {
            long idx = Block1Metadata.Index;
            Assert.Throws<InvalidBlockIndexException>(() => Block1Metadata.Index = -1);
            Assert.Equal(idx, Block1Metadata.Index);
        }

        [Fact]
        public void Timestamp()
        {
            DateTimeOffset kstTimestamp =
                new DateTimeOffset(2021, 9, 7, 9, 30, 12, 345, TimeSpan.FromHours(9));
            Block1Metadata.Timestamp = kstTimestamp;
            Assert.Equal(TimeSpan.Zero, Block1Metadata.Timestamp.Offset);
            Assert.Equal(
                new DateTime(2021, 9, 7, 0, 30, 12, 345),
                Block1Metadata.Timestamp.DateTime
            );
            Assert.Equal(kstTimestamp, Block1Metadata.Timestamp);
        }

        [Fact]
        public void Difficulty()
        {
            BlockMetadata a = Block1Metadata.Copy();
            a.Difficulty = Block1Metadata.Difficulty + 10L;
            Assert.Equal(Block1Metadata.Difficulty + 10L, a.Difficulty);
            Assert.Equal(Block1Metadata.TotalDifficulty + 10, a.TotalDifficulty);

            BlockMetadata b = Block1Metadata.Copy();
            Assert.Throws<InvalidBlockDifficultyException>(() => b.Difficulty = -1);
            Assert.Equal(Block1Metadata.Difficulty, b.Difficulty);
        }

        [Fact]
        public void TotalDifficulty()
        {
            BlockMetadata a = Block1Metadata.Copy();
            a.TotalDifficulty = Block1Metadata.TotalDifficulty + 10;
            Assert.Equal(Block1Metadata.TotalDifficulty + 10, a.TotalDifficulty);
            Assert.Equal(Block1Metadata.Difficulty, a.Difficulty);

            BlockMetadata b = Block1Content.Copy();
            InvalidBlockTotalDifficultyException e =
                Assert.Throws<InvalidBlockTotalDifficultyException>(() => b.TotalDifficulty = -1);
            Assert.Equal(Block1Metadata.TotalDifficulty, b.TotalDifficulty);
            Assert.Equal(Block1Metadata.Difficulty, b.Difficulty);
            Assert.Equal(b.Difficulty, e.Difficulty);
            Assert.Equal(-1, e.TotalDifficulty);

            e = Assert.Throws<InvalidBlockTotalDifficultyException>(
                () => b.TotalDifficulty = b.Difficulty - 1L
            );
            Assert.Equal(Block1Metadata.TotalDifficulty, b.TotalDifficulty);
            Assert.Equal(Block1Metadata.Difficulty, b.Difficulty);
            Assert.Equal(b.Difficulty, e.Difficulty);
            Assert.Equal(b.Difficulty - 1L, e.TotalDifficulty);
        }

        [Fact]
        public void MakeCandidateData()
        {
            Bencodex.Types.Dictionary expectedGenesis = Bencodex.Types.Dictionary.Empty
                .Add("index", 0L)
                .Add("timestamp", "2021-09-06T04:46:39.123000Z")
                .Add("difficulty", 0L)
                .Add("total_difficulty", 0)
                .Add("nonce", ImmutableArray<byte>.Empty)
                .Add(
                    "public_key",
                    ParseHex("0200e02709cc0c051dc105188c454a2e7ef7b36b85da34529d3abc1968167cf54f")
                )
                .Add("protocol_version", 3);
            AssertBencodexEqual(expectedGenesis, GenesisMetadata.MakeCandidateData(default));
            AssertBencodexEqual(
                expectedGenesis.SetItem("nonce", new byte[] { 0x00, 0x01, 0x02 }),
                GenesisMetadata.MakeCandidateData(new Nonce(new byte[] { 0x00, 0x01, 0x02 }))
            );

            Bencodex.Types.Dictionary expectedBlock1 = Bencodex.Types.Dictionary.Empty
                .Add("index", 1L)
                .Add("timestamp", "2021-09-06T08:01:09.045000Z")
                .Add("difficulty", 123L)
                .Add("total_difficulty", 123L)
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
                .Add("protocol_version", 3);
            AssertBencodexEqual(
                expectedBlock1,
                Block1Metadata.MakeCandidateData(new Nonce(new byte[] { 0xff, 0xef, 0x01, 0xcc }))
            );

            Bencodex.Types.Dictionary expectedPv0 = Bencodex.Types.Dictionary.Empty
                .Add("index", 0L)
                .Add("timestamp", "2021-09-06T04:46:39.123000Z")
                .Add("difficulty", 0L)
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
                .Add("difficulty", 123L)
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
                .Add("difficulty", 123L)
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
                .Add("difficulty", 0L)
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
            ImmutableArray<byte> FromHex(string hex) =>
                ParseHex(hex).ToImmutableArray();

            ImmutableArray<byte> hash = GenesisMetadata.DerivePreEvaluationHash(default);
            AssertBytesEqual(
                FromHex("98866bfa9622d47dda427a7d3eb2a44397e0eacedd01078acb5cc6de36bb6a90"),
                hash
            );

            hash = Block1Metadata.DerivePreEvaluationHash(
                new Nonce(FromHex("e7c1adf92c65d35aaae5"))
            );
            AssertBytesEqual(
                FromHex("9691d5845a0d0ef5bcc99b2bb22108abe0d0168ce240ade7c40452967feb33e6"),
                hash
            );
        }

        [Theory]
        [InlineData(null)]
        [InlineData(1)]
        [InlineData(2)]
        public void MineNonce(int? workers)
        {
            var codec = new Codec();

            HashAlgorithmType sha256 = BlockMetadata.HashAlgorithmType;
            (Nonce nonce, ImmutableArray<byte> preEvalHash) = workers is int w
                ? GenesisMetadata.MineNonce(workers: w)
                : GenesisMetadata.MineNonce();
            Assert.True(Satisfies(preEvalHash, GenesisMetadata.Difficulty));
            ImmutableArray<byte> actual = ImmutableArray.Create(
                sha256.Digest(codec.Encode(GenesisMetadata.MakeCandidateData(nonce)))
            );
            AssertBytesEqual(actual, preEvalHash);
        }

        [Theory]
        [InlineData(null)]
        [InlineData(1)]
        [InlineData(2)]
        public void CancelMineNonce(int? workers)
        {
            using (CancellationTokenSource source = new CancellationTokenSource())
            {
                Block1Metadata.Difficulty = long.MaxValue;

                Exception exception = null;
                Task task = Task.Run(() =>
                {
                    try
                    {
                        if (workers is int w)
                        {
                            Block1Metadata.MineNonce(w, source.Token);
                        }
                        else
                        {
                            Block1Metadata.MineNonce(source.Token);
                        }
                    }
                    catch (OperationCanceledException ce)
                    {
                        exception = ce;
                    }
                });

                source.Cancel();
                bool taskEnded = task.Wait(TimeSpan.FromSeconds(10));
                Assert.True(taskEnded);
                Assert.NotNull(exception);
                Assert.IsAssignableFrom<OperationCanceledException>(exception);
            }
        }
    }
}
