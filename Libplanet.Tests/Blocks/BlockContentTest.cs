using System;
using System.Collections.Immutable;
using System.Linq;
using System.Security.Cryptography;
using System.Threading;
using System.Threading.Tasks;
using Bencodex;
using Bencodex.Types;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Libplanet.Tests.Fixtures;
using Libplanet.Tx;
using Xunit;
using Xunit.Abstractions;
using static Libplanet.Tests.TestUtils;

namespace Libplanet.Tests.Blocks
{
    public class BlockContentTest : BlockContentFixture
    {
        private readonly ITestOutputHelper _output;

        public BlockContentTest(ITestOutputHelper output)
            : base()
        {
            _output = output;
        }

        [Fact]
        public void ProtocolVersion()
        {
            int v = Block1.ProtocolVersion;
            Assert.Throws<InvalidBlockProtocolVersionException>(() => Block1.ProtocolVersion = -1);
            Assert.Equal(v, Block1.ProtocolVersion);
            Assert.Throws<InvalidBlockProtocolVersionException>(
                () => Block1.ProtocolVersion = Block<Arithmetic>.CurrentProtocolVersion + 1
            );
            Assert.Equal(v, Block1.ProtocolVersion);
        }

        [Fact]
        public void Index()
        {
            long idx = Block1.Index;
            Assert.Throws<InvalidBlockIndexException>(() => Block1.Index = -1);
            Assert.Equal(idx, Block1.Index);
        }

        [Fact]
        public void Timestamp()
        {
            DateTimeOffset kstTimestamp =
                new DateTimeOffset(2021, 9, 7, 9, 30, 12, 345, TimeSpan.FromHours(9));
            Block1.Timestamp = kstTimestamp;
            Assert.Equal(TimeSpan.Zero, Block1.Timestamp.Offset);
            Assert.Equal(new DateTime(2021, 9, 7, 0, 30, 12, 345), Block1.Timestamp.DateTime);
            Assert.Equal(kstTimestamp, Block1.Timestamp);
        }

        [Fact]
        public void Difficulty()
        {
            BlockContent<Arithmetic> a = Block1.Clone();
            a.Difficulty = Block1.Difficulty + 10L;
            Assert.Equal(Block1.Difficulty + 10L, a.Difficulty);
            Assert.Equal(Block1.TotalDifficulty + 10, a.TotalDifficulty);

            BlockContent<Arithmetic> b = Block1.Clone();
            Assert.Throws<InvalidBlockDifficultyException>(() => b.Difficulty = -1);
            Assert.Equal(Block1.Difficulty, b.Difficulty);
        }

        [Fact]
        public void TotalDifficulty()
        {
            BlockContent<Arithmetic> a = Block1.Clone();
            a.TotalDifficulty = Block1.TotalDifficulty + 10;
            Assert.Equal(Block1.TotalDifficulty + 10, a.TotalDifficulty);
            Assert.Equal(Block1.Difficulty, a.Difficulty);

            BlockContent<Arithmetic> b = Block1.Clone();
            InvalidBlockTotalDifficultyException e =
                Assert.Throws<InvalidBlockTotalDifficultyException>(() => b.TotalDifficulty = -1);
            Assert.Equal(Block1.TotalDifficulty, b.TotalDifficulty);
            Assert.Equal(Block1.Difficulty, b.Difficulty);
            Assert.Equal(b.Difficulty, e.Difficulty);
            Assert.Equal(-1, e.TotalDifficulty);

            e = Assert.Throws<InvalidBlockTotalDifficultyException>(
                () => b.TotalDifficulty = b.Difficulty - 1L
            );
            Assert.Equal(Block1.TotalDifficulty, b.TotalDifficulty);
            Assert.Equal(Block1.Difficulty, b.Difficulty);
            Assert.Equal(b.Difficulty, e.Difficulty);
            Assert.Equal(b.Difficulty - 1L, e.TotalDifficulty);
        }

        [Fact]
        public void Transactions()
        {
            var key = PrivateKey.FromString(
                "ea0493b0ed67fc97b2e5e85a1d145adea294112f09df15398cb10f2ed5ad1a83"
            );
            var tx2 = new Transaction<Arithmetic>(
                nonce: 0L,
                signer: key.ToAddress(),
                publicKey: key.PublicKey,
                genesisHash: GenesisHash,
                updatedAddresses: ImmutableHashSet<Address>.Empty,
                timestamp: new DateTimeOffset(2021, 9, 7, 10, 23, 12, 345, TimeSpan.FromHours(9)),
                actions: Array.Empty<Arithmetic>(),
                signature: ByteUtil.ParseHex(
                    "304402202a8324c83390b1fe0fdd4014056a049bc02ca059369ef62145fe574cb31224f" +
                    "d022073bf8a48403cf46f5fa63f26f3e8ef4db8ef1d841684856da63d9b7eeb91759a"
                )
            );
            Block1.Transactions = new[] { tx2, Tx0InBlock1, Tx1InBlock1 };
            Assert.Equal(
                new[] { Tx1InBlock1.Id, Tx0InBlock1.Id, tx2.Id },
                Block1.Transactions.Select(tx => tx.Id).ToArray()
            );
        }

        [Fact]
        public void TransactionsWithDuplicateNonce()
        {
            var dupTx1 = new Transaction<Arithmetic>(
                nonce: 1L,
                signer: Tx1InBlock1.Signer,
                publicKey: Tx1InBlock1.PublicKey,
                genesisHash: GenesisHash,
                updatedAddresses: ImmutableHashSet<Address>.Empty.Add(Tx1InBlock1.Signer),
                timestamp: Tx1InBlock1.Timestamp,
                actions: Array.Empty<Arithmetic>(),
                signature: ByteUtil.ParseHex(
                    "304502210099e580e8599acf0b26ad0a80315f2d488703ffde01e9449b4bf399593b8cc" +
                    "e63022002feb21bf0e4d76d25d17c8c1c4fbb3dfbda986e0693f984fbb302183ab7ece1"
                )
            );
            var block = Block1.Clone();
            InvalidTxNonceException e = Assert.Throws<InvalidTxNonceException>(
                () => block.Transactions = new[] { Tx0InBlock1, Tx1InBlock1, dupTx1 }
            );
            Assert.Equal(dupTx1.Id, e.TxId);
            Assert.Equal(2L, e.ExpectedNonce);
            Assert.Equal(dupTx1.Nonce, e.ImproperNonce);
            Assert.Equal(Block1.Transactions, block.Transactions);
        }

        [Fact]
        public void TransactionsWithMissingNonce()
        {
            var dupTx1 = new Transaction<Arithmetic>(
                nonce: 3L,
                signer: Tx1InBlock1.Signer,
                publicKey: Tx1InBlock1.PublicKey,
                genesisHash: GenesisHash,
                updatedAddresses: ImmutableHashSet<Address>.Empty.Add(Tx1InBlock1.Signer),
                timestamp: Tx1InBlock1.Timestamp,
                actions: Array.Empty<Arithmetic>(),
                signature: ByteUtil.ParseHex(
                    "3045022100bfdf79427028efea9449ad46fbf46d5a806694aa5bbab1a01f4c76b21acd" +
                    "cb16022057c851a01dd74797121385ccfc81e7b33842941189154b4d46d05e891a28e3eb"
                )
            );
            var block = Block1.Clone();
            InvalidTxNonceException e = Assert.Throws<InvalidTxNonceException>(
                () => block.Transactions = new[] { Tx0InBlock1, Tx1InBlock1, dupTx1 }
            );
            Assert.Equal(dupTx1.Id, e.TxId);
            Assert.Equal(2L, e.ExpectedNonce);
            Assert.Equal(dupTx1.Nonce, e.ImproperNonce);
            Assert.Equal(Block1.Transactions, block.Transactions);
        }

        [Fact]
        public void TransactionsWithInconsistentGenesisHashes()
        {
            var key = PrivateKey.FromString(
                "2ed05de0b35d93e4ae801ae40c8bb4257a771ff67c1e5d1754562e4191953710"
            );
            var differentGenesisHash = BlockHash.FromString(
                "76942b42f99c28da02ed916ebd2fadb189415e8288a4bd87f9ae3594127b79e6"
            );
            var txWithDifferentGenesis = new Transaction<Arithmetic>(
                nonce: 0L,
                signer: key.ToAddress(),
                publicKey: key.PublicKey,
                genesisHash: differentGenesisHash,
                updatedAddresses: ImmutableHashSet<Address>.Empty,
                timestamp: new DateTimeOffset(2021, 9, 7, 12, 1, 12, 345, TimeSpan.FromHours(9)),
                actions: Array.Empty<Arithmetic>(),
                signature: ByteUtil.ParseHex(
                    "304402202027a31e4298c685daaa944b1d120b4e6894f3bfffa13563331c0a7071a04b" +
                    "310220167507575e982d47d7c6753b782a5f1beb6415af96e7db3ccaf83b516d5133d1"
                )
            );
            BlockContent<Arithmetic> block = Block1.Clone();
            Transaction<Arithmetic>[] inconsistentTxs =
                block.Transactions.Append(txWithDifferentGenesis).ToArray();
            InvalidTxGenesisHashException e = Assert.Throws<InvalidTxGenesisHashException>(
                () => block.Transactions = inconsistentTxs
            );
            Assert.Equal(Block1.Transactions[0].GenesisHash, e.ExpectedGenesisHash);
            Assert.Equal(differentGenesisHash, e.ImproperGenesisHash);
            Assert.Equal(Block1.Transactions, block.Transactions);
        }

        [Fact]
        public void TxHash()
        {
            Assert.Null(Genesis.TxHash);
            var expected = new HashDigest<SHA256>(new byte[]
            {
                0x65, 0x46, 0x98, 0xd3, 0x4b, 0x6d, 0x9a, 0x55, 0xb0, 0xc9, 0x3e,
                0x4f, 0xfb, 0x26, 0x39, 0x27, 0x83, 0x24, 0x86, 0x8c, 0x91, 0x96,
                0x5b, 0xc5, 0xf9, 0x6c, 0xb3, 0x07, 0x1d, 0x69, 0x03, 0xa0,
            });
            AssertBytesEqual(expected, Block1.TxHash ?? default);
            Assert.Null(BlockPv0.TxHash);
        }

        [Fact]
        public void Clone()
        {
            AssertBencodexEqual(
                Genesis.ToBencodex(default),
                Genesis.Clone().ToBencodex(default)
            );
            AssertBencodexEqual(
                Genesis.ToBencodex(default),
                ((BlockContent<Arithmetic>)((ICloneable)Genesis).Clone()).ToBencodex(default)
            );
            AssertBencodexEqual(
                Block1.ToBencodex(default),
                Block1.Clone().ToBencodex(default)
            );
            AssertBencodexEqual(
                Block1.ToBencodex(default),
                ((BlockContent<Arithmetic>)((ICloneable)Block1).Clone()).ToBencodex(default)
            );
            AssertBencodexEqual(
                BlockPv0.ToBencodex(default),
                BlockPv0.Clone().ToBencodex(default)
            );
            AssertBencodexEqual(
                BlockPv0.ToBencodex(default),
                ((BlockContent<Arithmetic>)((ICloneable)BlockPv0).Clone()).ToBencodex(default)
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
            AssertBencodexEqual(expectedGenesis, Genesis.ToBencodex(default));
            AssertBencodexEqual(
                expectedGenesis.SetItem("nonce", new byte[] { 0x00, 0x01, 0x02 }),
                Genesis.ToBencodex(new Nonce(new byte[] { 0x00, 0x01, 0x02 }))
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
                Block1.ToBencodex(new Nonce(new byte[] { 0xff, 0xef, 0x01, 0xcc }))
            );

            AssertBencodexEqual(
                (IValue)expectedGenesis.Remove((Text)"protocol_version"),
                BlockPv0.ToBencodex(default)
            );
        }

        [Fact]
        public void MineNonce()
        {
            var codec = new Codec();

            HashAlgorithmType sha256 = HashAlgorithmType.Of<SHA256>();
            (Nonce nonce, ImmutableArray<byte> preEvaluationHash) = Genesis.MineNonce(sha256);
            Assert.True(ByteUtil.Satisfies(preEvaluationHash, Genesis.Difficulty));
            AssertBytesEqual(
                sha256.Digest(codec.Encode(Genesis.ToBencodex(nonce))).ToImmutableArray(),
                preEvaluationHash
            );

            HashAlgorithmType sha512 = HashAlgorithmType.Of<SHA512>();
            (nonce, preEvaluationHash) = Block1.MineNonce(sha512);
            Assert.True(ByteUtil.Satisfies(preEvaluationHash, Block1.Difficulty));
            AssertBytesEqual(
                sha512.Digest(codec.Encode(Block1.ToBencodex(nonce))).ToImmutableArray(),
                preEvaluationHash
            );
        }

        [Fact]
        public void CancelMineNonce()
        {
            using (CancellationTokenSource source = new CancellationTokenSource())
            {
                HashAlgorithmType sha512 = HashAlgorithmType.Of<SHA512>();
                Block1.Difficulty = long.MaxValue;

                Exception exception = null;
                Task task = Task.Run(() =>
                {
                    try
                    {
                        Block1.MineNonce(sha512, source.Token);
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

        [Fact]
        public void Mine()
        {
            var codec = new Codec();

            HashAlgorithmType sha256 = HashAlgorithmType.Of<SHA256>();
            PreEvaluationBlock<Arithmetic> preEvalBlock = Genesis.Mine(sha256);
            Assert.True(ByteUtil.Satisfies(preEvalBlock.PreEvaluationHash, Genesis.Difficulty));
            AssertBytesEqual(
                sha256.Digest(codec.Encode(Genesis.ToBencodex(preEvalBlock.Nonce))),
                preEvalBlock.PreEvaluationHash.ToArray()
            );

            HashAlgorithmType sha512 = HashAlgorithmType.Of<SHA512>();
            preEvalBlock = Block1.Mine(sha512);
            Assert.True(ByteUtil.Satisfies(preEvalBlock.PreEvaluationHash, Block1.Difficulty));
            AssertBytesEqual(
                sha512.Digest(codec.Encode(Block1.ToBencodex(preEvalBlock.Nonce))),
                preEvalBlock.PreEvaluationHash.ToArray()
            );
        }

        [Fact]
        public void CancelMine()
        {
            using (CancellationTokenSource source = new CancellationTokenSource())
            {
                HashAlgorithmType sha512 = HashAlgorithmType.Of<SHA512>();
                Block1.Difficulty = long.MaxValue;

                Exception exception = null;
                Task task = Task.Run(() =>
                {
                    try
                    {
                        Block1.Mine(sha512, source.Token);
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
