using System;
using System.Collections.Immutable;
using System.Diagnostics.CodeAnalysis;
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

        [SuppressMessage("Usage", "xUnit1013", Justification = "Not a fixture.")]
        public static void AssertBlockMetadataEqual(BlockMetadata expected, BlockMetadata actual)
        {
            if (expected is null)
            {
                Assert.Null(actual);
                return;
            }

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
            BlockMetadata a = BlockMetadata1.Clone();
            a.Difficulty = BlockMetadata1.Difficulty + 10L;
            Assert.Equal(BlockMetadata1.Difficulty + 10L, a.Difficulty);
            Assert.Equal(BlockMetadata1.TotalDifficulty + 10, a.TotalDifficulty);

            BlockMetadata b = BlockMetadata1.Clone();
            Assert.Throws<InvalidBlockDifficultyException>(() => b.Difficulty = -1);
            Assert.Equal(BlockMetadata1.Difficulty, b.Difficulty);
        }

        [Fact]
        public void TotalDifficulty()
        {
            BlockMetadata a = BlockMetadata1.Clone();
            a.TotalDifficulty = BlockMetadata1.TotalDifficulty + 10;
            Assert.Equal(BlockMetadata1.TotalDifficulty + 10, a.TotalDifficulty);
            Assert.Equal(BlockMetadata1.Difficulty, a.Difficulty);

            BlockMetadata b = Block1.Clone();
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
        public void Clone()
        {
            AssertBlockMetadataEqual(GenesisMetadata, GenesisMetadata.Clone());
            AssertBlockMetadataEqual(
                GenesisMetadata,
                (BlockMetadata)((ICloneable)GenesisMetadata).Clone()
            );
            AssertBlockMetadataEqual(BlockMetadata1, BlockMetadata1.Clone());
            AssertBlockMetadataEqual(
                BlockMetadata1,
                (BlockMetadata)((ICloneable)BlockMetadata1).Clone()
            );
            AssertBlockMetadataEqual(BlockMetadataPv0, BlockMetadataPv0.Clone());
            AssertBlockMetadataEqual(
                BlockMetadataPv0,
                (BlockMetadata)((ICloneable)BlockMetadataPv0).Clone()
            );
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
