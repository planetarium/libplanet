using System;
using System.Collections.Immutable;
using System.Linq;
using System.Security.Cryptography;
using System.Threading;
using System.Threading.Tasks;
using Bencodex;
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
        {
            _output = output;
        }

        [Fact]
        public void Constructor()
        {
            DateTimeOffset before = DateTimeOffset.UtcNow;
            var m = new BlockContent<Arithmetic>();
            DateTimeOffset after = DateTimeOffset.UtcNow;
            Assert.Equal(BlockMetadata.CurrentProtocolVersion, m.ProtocolVersion);
            Assert.Equal(0, m.Index);
            Assert.InRange(m.Timestamp, before, after);
            AssertBytesEqual(default(Address), m.Miner);
            Assert.Equal(0, m.Difficulty);
            Assert.Equal(0, m.TotalDifficulty);
            AssertBytesEqual(null, m.PreviousHash);
            AssertBytesEqual(null, m.TxHash);
            Assert.Empty(m.Transactions);
        }

        [Fact]
        public void CopyConstructors()
        {
            var g = new BlockContent<Arithmetic>(Genesis);
            AssertBlockContentsEqual(Genesis, g);

            var b1 = new BlockContent<Arithmetic>(Block1);
            AssertBlockContentsEqual(Block1, b1);

            Assert.Throws<InvalidBlockTxHashException>(() =>
                new BlockContent<Arithmetic>(new BlockMetadata(Block1))
            );

            var gM = new BlockContent<Arithmetic>(new BlockMetadata(Genesis));
            AssertBlockMetadataEqual(Genesis, gM);

            var genesis = new BlockContent<Arithmetic>(GenesisMetadata);
            AssertBlockContentsEqual(Genesis, genesis);

            var block1 = new BlockContent<Arithmetic>(BlockMetadata1, Block1.Transactions);
            AssertBlockContentsEqual(Block1, block1);

            var blockPv0 = new BlockContent<Arithmetic>(BlockMetadataPv0);
            AssertBlockContentsEqual(BlockPv0, blockPv0);

            Assert.Throws<InvalidBlockTxHashException>(() =>
                new BlockContent<Arithmetic>(BlockMetadata1, Array.Empty<Transaction<Arithmetic>>())
            );
            Assert.Throws<InvalidBlockTxHashException>(
                () => new BlockContent<Arithmetic>(BlockMetadata1, new[] { Tx0InBlock1 })
            );
        }

        [Fact]
        public void Transactions()
        {
            var key = PrivateKey.FromString(
                "ea0493b0ed67fc97b2e5e85a1d145adea294112f09df15398cb10f2ed5ad1a83"
            );
            var tx2 = new Transaction<Arithmetic>(
                metadata: new TxMetadata(key.PublicKey)
                {
                    GenesisHash = GenesisHash,
                    Timestamp = new DateTimeOffset(
                        2021, 9, 7, 10, 23, 12, 345, TimeSpan.FromHours(9)),
                },
                customActions: Array.Empty<Arithmetic>(),
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
                metadata: new TxMetadata(Tx1InBlock1.PublicKey)
                {
                    Nonce = 1L,
                    GenesisHash = GenesisHash,
                    UpdatedAddresses = ImmutableHashSet.Create(Tx1InBlock1.Signer),
                    Timestamp = Tx1InBlock1.Timestamp,
                },
                customActions: Array.Empty<Arithmetic>(),
                signature: ByteUtil.ParseHex(
                    "304502210099e580e8599acf0b26ad0a80315f2d488703ffde01e9449b4bf399593b8cc" +
                    "e63022002feb21bf0e4d76d25d17c8c1c4fbb3dfbda986e0693f984fbb302183ab7ece1"
                )
            );
            var block = Block1.Copy();
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
                metadata: new TxMetadata(Tx1InBlock1.PublicKey)
                {
                    Nonce = 3L,
                    GenesisHash = GenesisHash,
                    UpdatedAddresses = ImmutableHashSet.Create(Tx1InBlock1.Signer),
                    Timestamp = Tx1InBlock1.Timestamp,
                },
                customActions: Array.Empty<Arithmetic>(),
                signature: ByteUtil.ParseHex(
                    "3045022100bfdf79427028efea9449ad46fbf46d5a806694aa5bbab1a01f4c76b21acd" +
                    "cb16022057c851a01dd74797121385ccfc81e7b33842941189154b4d46d05e891a28e3eb"
                )
            );
            var block = Block1.Copy();
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
                metadata: new TxMetadata(key.PublicKey)
                {
                    Nonce = 0L,
                    GenesisHash = differentGenesisHash,
                    Timestamp = new DateTimeOffset(
                        2021, 9, 7, 12, 1, 12, 345, TimeSpan.FromHours(9)),
                },
                customActions: Array.Empty<Arithmetic>(),
                signature: ByteUtil.ParseHex(
                    "304402202027a31e4298c685daaa944b1d120b4e6894f3bfffa13563331c0a7071a04b" +
                    "310220167507575e982d47d7c6753b782a5f1beb6415af96e7db3ccaf83b516d5133d1"
                )
            );
            BlockContent<Arithmetic> block = Block1.Copy();
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
            AssertBytesEqual(expected, Block1.TxHash);
            Assert.Null(BlockPv0.TxHash);

            Assert.Throws<InvalidBlockTxHashException>(
                () => Genesis.TxHash = default(HashDigest<SHA256>)
            );
            Assert.Throws<InvalidBlockTxHashException>(() => Block1.TxHash = null);
            Assert.Throws<InvalidBlockTxHashException>(
                () => Block1.TxHash = default(HashDigest<SHA256>)
            );
            Assert.Throws<InvalidBlockTxHashException>(
                () => BlockPv0.TxHash = default(HashDigest<SHA256>)
            );
        }

        [Fact]
        public void Mine()
        {
            var codec = new Codec();

            HashAlgorithmType sha256 = HashAlgorithmType.Of<SHA256>();
            PreEvaluationBlock<Arithmetic> preEvalBlock = Genesis.Mine(sha256);
            Assert.True(ByteUtil.Satisfies(preEvalBlock.PreEvaluationHash, Genesis.Difficulty));
            AssertBytesEqual(
                sha256.Digest(codec.Encode(Genesis.MakeCandidateData(preEvalBlock.Nonce))),
                preEvalBlock.PreEvaluationHash.ToArray()
            );

            HashAlgorithmType sha512 = HashAlgorithmType.Of<SHA512>();
            preEvalBlock = Block1.Mine(sha512);
            Assert.True(ByteUtil.Satisfies(preEvalBlock.PreEvaluationHash, Block1.Difficulty));
            AssertBytesEqual(
                sha512.Digest(codec.Encode(Block1.MakeCandidateData(preEvalBlock.Nonce))),
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
                Assert.IsAssignableFrom<OperationCanceledException>(exception);
            }
        }

        [Fact]
        public void DeriveTxHash()
        {
            Assert.Null(
                BlockContent<Arithmetic>.DeriveTxHash(Array.Empty<Transaction<Arithmetic>>())
            );
            AssertBytesEqual(
                BlockMetadata1.TxHash,
                BlockContent<Arithmetic>.DeriveTxHash(Block1.Transactions)
            );
            Assert.Throws<ArgumentException>(
                () => BlockContent<Arithmetic>.DeriveTxHash(Block1.Transactions.Reverse())
            );
        }
    }
}
