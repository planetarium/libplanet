using System;
using System.Collections.Immutable;
using System.Security.Cryptography;
using System.Threading;
using System.Threading.Tasks;
using Bencodex;
using Bencodex.Types;
using Libplanet.Blocks;
using Libplanet.Tests.Fixtures;
using Xunit;
using Xunit.Abstractions;
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
        public void Constructor()
        {
            DateTimeOffset before = DateTimeOffset.UtcNow;
            var m = new BlockMetadata();
            DateTimeOffset after = DateTimeOffset.UtcNow;
            Assert.Equal(BlockMetadata.CurrentProtocolVersion, m.ProtocolVersion);
            Assert.Equal(0, m.Index);
            Assert.InRange(m.Timestamp, before, after);
            AssertBytesEqual(default(Address), m.Miner);
            Assert.Equal(0, m.Difficulty);
            Assert.Equal(0, m.TotalDifficulty);
            AssertBytesEqual(null, m.PreviousHash);
            AssertBytesEqual(null, m.TxHash);
        }

        [Fact]
        public void CopyConstructor()
        {
            var g = new BlockMetadata(Genesis);
            AssertBlockMetadataEqual(Genesis, g);
            var b1 = new BlockMetadata(Block1);
            AssertBlockMetadataEqual(Block1, b1);
        }

        [Fact]
        public void ProtocolVersion()
        {
            int v = BlockMetadata1.ProtocolVersion;
            Assert.Throws<InvalidBlockProtocolVersionException>(
                () => BlockMetadata1.ProtocolVersion = -1
            );
            Assert.Equal(v, BlockMetadata1.ProtocolVersion);
            Assert.Throws<InvalidBlockProtocolVersionException>(
                () => BlockMetadata1.ProtocolVersion = Block<Arithmetic>.CurrentProtocolVersion + 1
            );
            Assert.Equal(v, BlockMetadata1.ProtocolVersion);
        }

        [Fact]
        public void Index()
        {
            long idx = BlockMetadata1.Index;
            Assert.Throws<InvalidBlockIndexException>(() => BlockMetadata1.Index = -1);
            Assert.Equal(idx, BlockMetadata1.Index);
        }

        [Fact]
        public void Timestamp()
        {
            DateTimeOffset kstTimestamp =
                new DateTimeOffset(2021, 9, 7, 9, 30, 12, 345, TimeSpan.FromHours(9));
            BlockMetadata1.Timestamp = kstTimestamp;
            Assert.Equal(TimeSpan.Zero, BlockMetadata1.Timestamp.Offset);
            Assert.Equal(
                new DateTime(2021, 9, 7, 0, 30, 12, 345),
                BlockMetadata1.Timestamp.DateTime
            );
            Assert.Equal(kstTimestamp, BlockMetadata1.Timestamp);
        }

        [Fact]
        public void Difficulty()
        {
            BlockMetadata a = BlockMetadata1.Copy();
            a.Difficulty = BlockMetadata1.Difficulty + 10L;
            Assert.Equal(BlockMetadata1.Difficulty + 10L, a.Difficulty);
            Assert.Equal(BlockMetadata1.TotalDifficulty + 10, a.TotalDifficulty);

            BlockMetadata b = BlockMetadata1.Copy();
            Assert.Throws<InvalidBlockDifficultyException>(() => b.Difficulty = -1);
            Assert.Equal(BlockMetadata1.Difficulty, b.Difficulty);
        }

        [Fact]
        public void TotalDifficulty()
        {
            BlockMetadata a = BlockMetadata1.Copy();
            a.TotalDifficulty = BlockMetadata1.TotalDifficulty + 10;
            Assert.Equal(BlockMetadata1.TotalDifficulty + 10, a.TotalDifficulty);
            Assert.Equal(BlockMetadata1.Difficulty, a.Difficulty);

            BlockMetadata b = Block1.Copy();
            InvalidBlockTotalDifficultyException e =
                Assert.Throws<InvalidBlockTotalDifficultyException>(() => b.TotalDifficulty = -1);
            Assert.Equal(BlockMetadata1.TotalDifficulty, b.TotalDifficulty);
            Assert.Equal(BlockMetadata1.Difficulty, b.Difficulty);
            Assert.Equal(b.Difficulty, e.Difficulty);
            Assert.Equal(-1, e.TotalDifficulty);

            e = Assert.Throws<InvalidBlockTotalDifficultyException>(
                () => b.TotalDifficulty = b.Difficulty - 1L
            );
            Assert.Equal(BlockMetadata1.TotalDifficulty, b.TotalDifficulty);
            Assert.Equal(BlockMetadata1.Difficulty, b.Difficulty);
            Assert.Equal(b.Difficulty, e.Difficulty);
            Assert.Equal(b.Difficulty - 1L, e.TotalDifficulty);
        }

        [Fact]
        public void ToBencodex()
        {
            Bencodex.Types.Dictionary expectedGenesis = Bencodex.Types.Dictionary.Empty
                .Add("index", 0L)
                .Add("timestamp", "2021-09-06T04:46:39.123000Z")
                .Add("difficulty", 0L)
                .Add("nonce", ImmutableArray<byte>.Empty)
                .Add(
                    "reward_beneficiary",
                    ByteUtil.ParseHex("268344BA46e6CA2A8a5096565548b9018bc687Ce")
                )
                .Add("protocol_version", 1);
            AssertBencodexEqual(expectedGenesis, GenesisMetadata.ToBencodex(default));
            AssertBencodexEqual(
                expectedGenesis.SetItem("nonce", new byte[] { 0x00, 0x01, 0x02 }),
                GenesisMetadata.ToBencodex(new Nonce(new byte[] { 0x00, 0x01, 0x02 }))
            );

            Bencodex.Types.Dictionary expectedBlock1 = Bencodex.Types.Dictionary.Empty
                .Add("index", 1L)
                .Add("timestamp", "2021-09-06T08:01:09.045000Z")
                .Add("difficulty", 12345L)
                .Add("nonce", new byte[] { 0xff, 0xef, 0x01, 0xcc })
                .Add(
                    "reward_beneficiary",
                    ByteUtil.ParseHex("8a29de186B85560D708451101C4Bf02D63b25c50")
                )
                .Add(
                    "previous_hash",
                    ByteUtil.ParseHex(
                        "341e8f360597d5bc45ab96aabc5f1b0608063f30af7bd4153556c9536a07693a"
                    )
                )
                .Add(
                    "transaction_fingerprint",
                    ByteUtil.ParseHex(
                        "654698d34b6d9a55b0c93e4ffb2639278324868c91965bc5f96cb3071d6903a0"
                    )
                )
                .Add("protocol_version", 1);
            AssertBencodexEqual(
                expectedBlock1,
                BlockMetadata1.ToBencodex(new Nonce(new byte[] { 0xff, 0xef, 0x01, 0xcc }))
            );

            AssertBencodexEqual(
                (IValue)expectedGenesis.Remove((Text)"protocol_version"),
                BlockMetadataPv0.ToBencodex(default)
            );
        }

        [Fact]
        public void DerivePreEvaluationHash()
        {
            ImmutableArray<byte> FromHex(string hex) =>
                ByteUtil.ParseHex(hex).ToImmutableArray();

            HashAlgorithmType sha256 = HashAlgorithmType.Of<SHA256>();
            HashAlgorithmType sha512 = HashAlgorithmType.Of<SHA512>();
            ImmutableArray<byte> hash = GenesisMetadata.DerivePreEvaluationHash(sha256, default);
            AssertBytesEqual(
                FromHex("29dc1a7dad84b68bfcc433a55c531ef81fb0d27967cd9e857ed2b9ef170ad1ae"),
                hash
            );

            hash = GenesisMetadata.DerivePreEvaluationHash(sha512, default);
            AssertBytesEqual(
                FromHex(
                    "b00ee7ec89245bf37a437b0ea16292c5b8c8b3b48d03b56b13a0e280384d2e89" +
                    "d79292867f9e7b31a829ea3f2afa55aab4f05bba6497103f87cfaf85ee9eb0d9"
                ),
                hash
            );

            hash = BlockMetadata1.DerivePreEvaluationHash(
                sha256,
                new Nonce(FromHex("e7c1adf92c65d35aaae5"))
            );
            AssertBytesEqual(
                FromHex("57e7c3056d366cb3c782029358812d4b56b3b4f69b9ee4687d0a3bc13e1c0000"),
                hash
            );

            hash = BlockMetadata1.DerivePreEvaluationHash(
                sha512,
                new Nonce(FromHex("e3fd5a6308a1979845cc"))
            );
            AssertBytesEqual(
                FromHex(
                    "480601d27986f05713b0d99b28a73e1d9a8eda16ead16511bad6da1454cdac30" +
                    "286544c8b6550d42a5939d388cd30c4f5bacb62e9e3a66880e29f07eec6b0100"
                ),
                hash
            );
        }

        [Fact]
        public void MineNonce()
        {
            var codec = new Codec();

            HashAlgorithmType sha256 = HashAlgorithmType.Of<SHA256>();
            (Nonce nonce, ImmutableArray<byte> preEvalHash) = GenesisMetadata.MineNonce(sha256);
            Assert.True(ByteUtil.Satisfies(preEvalHash, GenesisMetadata.Difficulty));
            AssertBytesEqual(
                sha256.Digest(codec.Encode(GenesisMetadata.ToBencodex(nonce))).ToImmutableArray(),
                preEvalHash
            );

            HashAlgorithmType sha512 = HashAlgorithmType.Of<SHA512>();
            (nonce, preEvalHash) = BlockMetadata1.MineNonce(sha512);
            Assert.True(ByteUtil.Satisfies(preEvalHash, BlockMetadata1.Difficulty));
            AssertBytesEqual(
                sha512.Digest(codec.Encode(BlockMetadata1.ToBencodex(nonce))).ToImmutableArray(),
                preEvalHash
            );
        }

        [Fact]
        public void CancelMineNonce()
        {
            using (CancellationTokenSource source = new CancellationTokenSource())
            {
                HashAlgorithmType sha512 = HashAlgorithmType.Of<SHA512>();
                BlockMetadata1.Difficulty = long.MaxValue;

                Exception exception = null;
                Task task = Task.Run(() =>
                {
                    try
                    {
                        BlockMetadata1.MineNonce(sha512, source.Token);
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
                Assert.IsType<OperationCanceledException>(exception);
            }
        }
    }
}
