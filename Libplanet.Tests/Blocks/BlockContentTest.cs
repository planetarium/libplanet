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
    public class BlockContentTest
    {
        private readonly ITestOutputHelper _output;
        private readonly BlockHash _genesisHash;
        private readonly BlockContent<Arithmetic> _genesis;
        private readonly BlockContent<Arithmetic> _block1;
        private readonly Transaction<Arithmetic> _block1Tx0;
        private readonly Transaction<Arithmetic> _block1Tx1;
        private readonly BlockContent<Arithmetic> _blockPv0;

        public BlockContentTest(ITestOutputHelper output)
        {
            _output = output;
            TimeSpan kst = TimeSpan.FromHours(9);
            var genesisKey = new PrivateKey(new byte[]
            {
                0x9b, 0xf4, 0x66, 0x4b, 0xa0, 0x9a, 0x89, 0xfa, 0xeb, 0x68, 0x4b,
                0x94, 0xe6, 0x9f, 0xfd, 0xe0, 0x1d, 0x26, 0xae, 0x14, 0xb5, 0x56,
                0x20, 0x4d, 0x3f, 0x6a, 0xb5, 0x8f, 0x61, 0xf7, 0x84, 0x18,
            });
            _genesis = new BlockContent<Arithmetic>
            {
                Index = 0,
                Timestamp = new DateTimeOffset(2021, 9, 6, 13, 46, 39, 123, kst),
                Miner = genesisKey.ToAddress(),
                Difficulty = 0,
                PreviousHash = null,
                Transactions = Array.Empty<Transaction<Arithmetic>>(),
            };
            _genesisHash = BlockHash.FromString(
                "341e8f360597d5bc45ab96aabc5f1b0608063f30af7bd4153556c9536a07693a"
            );
            var block1Key = new PrivateKey(new byte[]
            {
                0xfc, 0xf3, 0x0b, 0x33, 0x3d, 0x04, 0xcc, 0xfe, 0xb5, 0x62, 0xf0,
                0x00, 0xa3, 0x2d, 0xf4, 0x88, 0xe7, 0x15, 0x49, 0x49, 0xd3, 0x1d,
                0xdc, 0xac, 0x3c, 0xf9, 0x27, 0x8a, 0xcb, 0x57, 0x86, 0xc7,
            });
            var block1Tx0Key = PrivateKey.FromString(
                "2d5c20079bc4b2e6eab9ecbb405da8ba6590c436edfb07b7d4466563d7dac096"
            );
            _block1Tx0 = new Transaction<Arithmetic>(
                nonce: 0L,
                signer: block1Tx0Key.ToAddress(),
                publicKey: block1Tx0Key.PublicKey,
                genesisHash: _genesisHash,
                updatedAddresses: ImmutableHashSet<Address>.Empty.Add(block1Tx0Key.ToAddress()),
                timestamp: new DateTimeOffset(2021, 9, 6, 17, 0, 1, 1, kst),
                actions: new[]
                {
                    Arithmetic.Add(10), Arithmetic.Add(50), Arithmetic.Sub(25),
                },
                signature: ByteUtil.ParseHex(
                    "30440220422c85ea44845a56253654d95595ad06d6f09f862ca71b97e986ecbb453eac" +
                    "ae0220606e76276e40fa8f0795b880f712531fd6bd9db253bd8ab9c86aa4ab7d791d37"
                )
            );
            _block1Tx0.Validate(block1Tx0Key);
            var block1Tx1Key = PrivateKey.FromString(
                "105341c78dfb0dd313b961081630444c2586a1f01fb0c625368ffdc9136cfa30"
            );
            _block1Tx1 = new Transaction<Arithmetic>(
                nonce: 1L,
                signer: block1Tx1Key.ToAddress(),
                publicKey: block1Tx1Key.PublicKey,
                genesisHash: _genesisHash,
                updatedAddresses: ImmutableHashSet<Address>.Empty.Add(block1Tx1Key.ToAddress()),
                timestamp: new DateTimeOffset(2021, 9, 6, 17, 0, 1, 1, kst),
                actions: new[] { Arithmetic.Add(30) },
                signature: ByteUtil.ParseHex(
                    "3045022100abe3caabf2a46a297f2e4496f2c46d7e2f723e75fc42025d19f3ed7fce382" +
                    "d4e02200ffd36f7bef759b6c7ab43bc0f8959a0c463f88fd0f1faeaa209a8661506c4f0"
                )
            );
            _block1Tx1.Validate(block1Tx1Key);
            _block1 = new BlockContent<Arithmetic>
            {
                Index = 1,
                Timestamp = new DateTimeOffset(2021, 9, 6, 17, 1, 9, 45, kst),
                Miner = block1Key.ToAddress(),
                Difficulty = 12345,
                PreviousHash = _genesisHash,
                Transactions = new[]
                {
                    _block1Tx0,
                    _block1Tx1,
                },
            };
            _blockPv0 = new BlockContent<Arithmetic>
            {
                ProtocolVersion = 0,
                Index = 0,
                Timestamp = new DateTimeOffset(2021, 9, 6, 13, 46, 39, 123, kst),
                Miner = genesisKey.ToAddress(),
                Difficulty = 0,
                PreviousHash = null,
                Transactions = Array.Empty<Transaction<Arithmetic>>(),
            };
        }

        [Fact]
        public void ProtocolVersion()
        {
            int v = _block1.ProtocolVersion;
            Assert.Throws<InvalidBlockProtocolVersionException>(() => _block1.ProtocolVersion = -1);
            Assert.Equal(v, _block1.ProtocolVersion);
            Assert.Throws<InvalidBlockProtocolVersionException>(
                () => _block1.ProtocolVersion = Block<Arithmetic>.CurrentProtocolVersion + 1
            );
            Assert.Equal(v, _block1.ProtocolVersion);
        }

        [Fact]
        public void Index()
        {
            long idx = _block1.Index;
            Assert.Throws<InvalidBlockIndexException>(() => _block1.Index = -1);
            Assert.Equal(idx, _block1.Index);
        }

        [Fact]
        public void Timestamp()
        {
            DateTimeOffset kstTimestamp =
                new DateTimeOffset(2021, 9, 7, 9, 30, 12, 345, TimeSpan.FromHours(9));
            _block1.Timestamp = kstTimestamp;
            Assert.Equal(TimeSpan.Zero, _block1.Timestamp.Offset);
            Assert.Equal(new DateTime(2021, 9, 7, 0, 30, 12, 345), _block1.Timestamp.DateTime);
            Assert.Equal(kstTimestamp, _block1.Timestamp);
        }

        [Fact]
        public void Difficulty()
        {
            BlockContent<Arithmetic> a = _block1.Clone();
            a.Difficulty = _block1.Difficulty + 10L;
            Assert.Equal(_block1.Difficulty + 10L, a.Difficulty);
            Assert.Equal(_block1.TotalDifficulty + 10, a.TotalDifficulty);

            BlockContent<Arithmetic> b = _block1.Clone();
            Assert.Throws<InvalidBlockDifficultyException>(() => b.Difficulty = -1);
            Assert.Equal(_block1.Difficulty, b.Difficulty);
        }

        [Fact]
        public void TotalDifficulty()
        {
            BlockContent<Arithmetic> a = _block1.Clone();
            a.TotalDifficulty = _block1.TotalDifficulty + 10;
            Assert.Equal(_block1.TotalDifficulty + 10, a.TotalDifficulty);
            Assert.Equal(_block1.Difficulty, a.Difficulty);

            BlockContent<Arithmetic> b = _block1.Clone();
            InvalidBlockTotalDifficultyException e =
                Assert.Throws<InvalidBlockTotalDifficultyException>(() => b.TotalDifficulty = -1);
            Assert.Equal(_block1.TotalDifficulty, b.TotalDifficulty);
            Assert.Equal(_block1.Difficulty, b.Difficulty);
            Assert.Equal(b.Difficulty, e.Difficulty);
            Assert.Equal(-1, e.TotalDifficulty);

            e = Assert.Throws<InvalidBlockTotalDifficultyException>(
                () => b.TotalDifficulty = b.Difficulty - 1L
            );
            Assert.Equal(_block1.TotalDifficulty, b.TotalDifficulty);
            Assert.Equal(_block1.Difficulty, b.Difficulty);
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
                genesisHash: _genesisHash,
                updatedAddresses: ImmutableHashSet<Address>.Empty,
                timestamp: new DateTimeOffset(2021, 9, 7, 10, 23, 12, 345, TimeSpan.FromHours(9)),
                actions: Array.Empty<Arithmetic>(),
                signature: ByteUtil.ParseHex(
                    "304402202a8324c83390b1fe0fdd4014056a049bc02ca059369ef62145fe574cb31224f" +
                    "d022073bf8a48403cf46f5fa63f26f3e8ef4db8ef1d841684856da63d9b7eeb91759a"
                )
            );
            _block1.Transactions = new[] { tx2, _block1Tx0, _block1Tx1 };
            Assert.Equal(
                new[] { _block1Tx1.Id, _block1Tx0.Id, tx2.Id },
                _block1.Transactions.Select(tx => tx.Id).ToArray()
            );
        }

        [Fact]
        public void TransactionsWithDuplicateNonce()
        {
            var dupTx1 = new Transaction<Arithmetic>(
                nonce: 1L,
                signer: _block1Tx1.Signer,
                publicKey: _block1Tx1.PublicKey,
                genesisHash: _genesisHash,
                updatedAddresses: ImmutableHashSet<Address>.Empty.Add(_block1Tx1.Signer),
                timestamp: _block1Tx1.Timestamp,
                actions: Array.Empty<Arithmetic>(),
                signature: ByteUtil.ParseHex(
                    "304502210099e580e8599acf0b26ad0a80315f2d488703ffde01e9449b4bf399593b8cc" +
                    "e63022002feb21bf0e4d76d25d17c8c1c4fbb3dfbda986e0693f984fbb302183ab7ece1"
                )
            );
            var block = _block1.Clone();
            InvalidTxNonceException e = Assert.Throws<InvalidTxNonceException>(
                () => block.Transactions = new[] { _block1Tx0, _block1Tx1, dupTx1 }
            );
            Assert.Equal(dupTx1.Id, e.TxId);
            Assert.Equal(2L, e.ExpectedNonce);
            Assert.Equal(dupTx1.Nonce, e.ImproperNonce);
            Assert.Equal(_block1.Transactions, block.Transactions);
        }

        [Fact]
        public void TransactionsWithMissingNonce()
        {
            var dupTx1 = new Transaction<Arithmetic>(
                nonce: 3L,
                signer: _block1Tx1.Signer,
                publicKey: _block1Tx1.PublicKey,
                genesisHash: _genesisHash,
                updatedAddresses: ImmutableHashSet<Address>.Empty.Add(_block1Tx1.Signer),
                timestamp: _block1Tx1.Timestamp,
                actions: Array.Empty<Arithmetic>(),
                signature: ByteUtil.ParseHex(
                    "3045022100bfdf79427028efea9449ad46fbf46d5a806694aa5bbab1a01f4c76b21acd" +
                    "cb16022057c851a01dd74797121385ccfc81e7b33842941189154b4d46d05e891a28e3eb"
                )
            );
            var block = _block1.Clone();
            InvalidTxNonceException e = Assert.Throws<InvalidTxNonceException>(
                () => block.Transactions = new[] { _block1Tx0, _block1Tx1, dupTx1 }
            );
            Assert.Equal(dupTx1.Id, e.TxId);
            Assert.Equal(2L, e.ExpectedNonce);
            Assert.Equal(dupTx1.Nonce, e.ImproperNonce);
            Assert.Equal(_block1.Transactions, block.Transactions);
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
            BlockContent<Arithmetic> block = _block1.Clone();
            Transaction<Arithmetic>[] inconsistentTxs =
                block.Transactions.Append(txWithDifferentGenesis).ToArray();
            InvalidTxGenesisHashException e = Assert.Throws<InvalidTxGenesisHashException>(
                () => block.Transactions = inconsistentTxs
            );
            Assert.Equal(_block1.Transactions[0].GenesisHash, e.ExpectedGenesisHash);
            Assert.Equal(differentGenesisHash, e.ImproperGenesisHash);
            Assert.Equal(_block1.Transactions, block.Transactions);
        }

        [Fact]
        public void TxHash()
        {
            Assert.Null(_genesis.TxHash);
            var expected = new HashDigest<SHA256>(new byte[]
            {
                0x65, 0x46, 0x98, 0xd3, 0x4b, 0x6d, 0x9a, 0x55, 0xb0, 0xc9, 0x3e,
                0x4f, 0xfb, 0x26, 0x39, 0x27, 0x83, 0x24, 0x86, 0x8c, 0x91, 0x96,
                0x5b, 0xc5, 0xf9, 0x6c, 0xb3, 0x07, 0x1d, 0x69, 0x03, 0xa0,
            });
            AssertBytesEqual(expected, _block1.TxHash ?? default);
            Assert.Null(_blockPv0.TxHash);
        }

        [Fact]
        public void Clone()
        {
            AssertBencodexEqual(
                _genesis.ToBencodex(default),
                _genesis.Clone().ToBencodex(default)
            );
            AssertBencodexEqual(
                _genesis.ToBencodex(default),
                ((BlockContent<Arithmetic>)((ICloneable)_genesis).Clone()).ToBencodex(default)
            );
            AssertBencodexEqual(
                _block1.ToBencodex(default),
                _block1.Clone().ToBencodex(default)
            );
            AssertBencodexEqual(
                _block1.ToBencodex(default),
                ((BlockContent<Arithmetic>)((ICloneable)_block1).Clone()).ToBencodex(default)
            );
            AssertBencodexEqual(
                _blockPv0.ToBencodex(default),
                _blockPv0.Clone().ToBencodex(default)
            );
            AssertBencodexEqual(
                _blockPv0.ToBencodex(default),
                ((BlockContent<Arithmetic>)((ICloneable)_blockPv0).Clone()).ToBencodex(default)
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
            AssertBencodexEqual(expectedGenesis, _genesis.ToBencodex(default));
            AssertBencodexEqual(
                expectedGenesis.SetItem("nonce", new byte[] { 0x00, 0x01, 0x02 }),
                _genesis.ToBencodex(new Nonce(new byte[] { 0x00, 0x01, 0x02 }))
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
                _block1.ToBencodex(new Nonce(new byte[] { 0xff, 0xef, 0x01, 0xcc }))
            );

            AssertBencodexEqual(
                (IValue)expectedGenesis.Remove((Text)"protocol_version"),
                _blockPv0.ToBencodex(default)
            );
        }

        [Fact]
        public void MineNonce()
        {
            var codec = new Codec();

            HashAlgorithmType sha256 = HashAlgorithmType.Of<SHA256>();
            (Nonce nonce, ImmutableArray<byte> preEvaluationHash) = _genesis.MineNonce(sha256);
            Assert.True(ByteUtil.Satisfies(preEvaluationHash, _genesis.Difficulty));
            AssertBytesEqual(
                sha256.Digest(codec.Encode(_genesis.ToBencodex(nonce))).ToImmutableArray(),
                preEvaluationHash
            );

            HashAlgorithmType sha512 = HashAlgorithmType.Of<SHA512>();
            (nonce, preEvaluationHash) = _block1.MineNonce(sha512);
            Assert.True(ByteUtil.Satisfies(preEvaluationHash, _block1.Difficulty));
            AssertBytesEqual(
                sha512.Digest(codec.Encode(_block1.ToBencodex(nonce))).ToImmutableArray(),
                preEvaluationHash
            );
        }

        [Fact]
        public void CancelMineNonce()
        {
            using (CancellationTokenSource source = new CancellationTokenSource())
            {
                HashAlgorithmType sha512 = HashAlgorithmType.Of<SHA512>();
                _block1.Difficulty = long.MaxValue;

                Exception exception = null;
                Task task = Task.Run(() =>
                {
                    try
                    {
                        _block1.MineNonce(sha512, source.Token);
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
