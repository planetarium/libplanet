using System;
using System.Collections.Immutable;
using System.Linq;
using System.Security.Cryptography;
using Libplanet.Common;
using Libplanet.Crypto;
using Libplanet.Tests.Fixtures;
using Libplanet.Types.Blocks;
using Libplanet.Types.Tx;
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
        public void CopyConstructors()
        {
            var block1 = new BlockContent(Block1Metadata, Block1Content.Transactions);
            AssertBlockContentsEqual(Block1Content, block1);

            Assert.Throws<InvalidBlockTxHashException>(() =>
                new BlockContent(Block1Metadata, Array.Empty<Transaction>())
            );
            Assert.Throws<InvalidBlockTxHashException>(
                () => new BlockContent(Block1Metadata, new[] { Block1Tx0 })
            );
        }

        [Fact]
        public void Transactions()
        {
            var key = PrivateKey.FromString(
                "ea0493b0ed67fc97b2e5e85a1d145adea294112f09df15398cb10f2ed5ad1a83"
            );
            var tx2 = new Transaction(
                new UnsignedTx(
                    new TxInvoice(
                        genesisHash: GenesisHash,
                        timestamp: new DateTimeOffset(
                            2021, 9, 7, 10, 23, 12, 345, default)
                    ),
                    new TxSigningMetadata(key.PublicKey, nonce: 0)
                ),
                signature: ByteUtil.ParseHexToImmutable(
                    "304402202a8324c83390b1fe0fdd4014056a049bc02ca059369ef62145fe574cb31224f" +
                    "d022073bf8a48403cf46f5fa63f26f3e8ef4db8ef1d841684856da63d9b7eeb91759a"
                )
            );
            var txs = new[] { tx2, Block1Tx0, Block1Tx1 }.OrderBy(tx => tx.Id).ToImmutableList();
            var blockContent = new BlockContent(
                new BlockMetadata(
                    index: Block1Content.Index,
                    timestamp: DateTimeOffset.UtcNow,
                    publicKey: Block1Content.PublicKey,
                    previousHash: Block1Content.PreviousHash,
                    txHash: BlockContent.DeriveTxHash(txs),
                    lastCommit: null,
                    proof: null),
                transactions: txs);
            Assert.Equal(
                new[] { Block1Tx1.Id, Block1Tx0.Id, tx2.Id },
                blockContent.Transactions.Select(tx => tx.Id).ToArray());
        }

        [Fact]
        public void TransactionsWithDuplicateNonce()
        {
            var dupTx1 = new Transaction(
                new UnsignedTx(
                    new TxInvoice(
                        genesisHash: GenesisHash,
                        updatedAddresses: new AddressSet(new[] { Block1Tx1.Signer }),
                        timestamp: Block1Tx1.Timestamp,
                        actions: TxActionList.Empty,
                        maxGasPrice: null,
                        gasLimit: null),
                    new TxSigningMetadata(Block1Tx1.PublicKey, nonce: 1L)
                ),
                signature: ByteUtil.ParseHexToImmutable(
                    "304502210099e580e8599acf0b26ad0a80315f2d488703ffde01e9449b4bf399593b8cc" +
                    "e63022002feb21bf0e4d76d25d17c8c1c4fbb3dfbda986e0693f984fbb302183ab7ece1"
                )
            );
            var txs = new[] { Block1Tx0, Block1Tx1, dupTx1 }.OrderBy(tx => tx.Id).ToArray();
            InvalidTxNonceException e = Assert.Throws<InvalidTxNonceException>(
                () => new BlockContent(
                    new BlockMetadata(
                        index: Block1Content.Index,
                        timestamp: DateTimeOffset.UtcNow,
                        publicKey: Block1Content.PublicKey,
                        previousHash: Block1Content.PreviousHash,
                        txHash: BlockContent.DeriveTxHash(txs),
                        lastCommit: null,
                        proof: null),
                    transactions: txs));
            Assert.Equal(Block1Tx1.Id, e.TxId);
            Assert.Equal(2L, e.ExpectedNonce);
            Assert.Equal(Block1Tx1.Nonce, e.ImproperNonce);
        }

        [Fact]
        public void TransactionsWithMissingNonce()
        {
            var dupTx1 = new Transaction(
                new UnsignedTx(
                    new TxInvoice(
                        genesisHash: GenesisHash,
                        updatedAddresses: new AddressSet(new[] { Block1Tx1.Signer }),
                        timestamp: Block1Tx1.Timestamp,
                        actions: TxActionList.Empty,
                        maxGasPrice: null,
                        gasLimit: null),
                    new TxSigningMetadata(Block1Tx1.PublicKey, nonce: 3L)
                ),
                signature: ByteUtil.ParseHexToImmutable(
                    "3045022100bfdf79427028efea9449ad46fbf46d5a806694aa5bbab1a01f4c76b21acd" +
                    "cb16022057c851a01dd74797121385ccfc81e7b33842941189154b4d46d05e891a28e3eb"
                )
            );
            var txs = new[] { Block1Tx0, Block1Tx1, dupTx1 }.OrderBy(tx => tx.Id).ToArray();
            InvalidTxNonceException e = Assert.Throws<InvalidTxNonceException>(
                () => new BlockContent(
                    new BlockMetadata(
                        index: Block1Content.Index,
                        timestamp: DateTimeOffset.UtcNow,
                        publicKey: Block1Content.PublicKey,
                        previousHash: Block1Content.PreviousHash,
                        txHash: BlockContent.DeriveTxHash(txs),
                        lastCommit: null,
                        proof: null),
                    transactions: txs));
            Assert.Equal(dupTx1.Id, e.TxId);
            Assert.Equal(2L, e.ExpectedNonce);
            Assert.Equal(dupTx1.Nonce, e.ImproperNonce);
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
            var txWithDifferentGenesis = new Transaction(
                new UnsignedTx(
                    new TxInvoice(
                        genesisHash: differentGenesisHash,
                        timestamp: new DateTimeOffset(
                            2021, 9, 7, 12, 1, 12, 345, TimeSpan.FromHours(9)),
                        actions: TxActionList.Empty
                    ),
                    new TxSigningMetadata(key.PublicKey, nonce: 0L)
                ),
                key
            );
            Transaction[] inconsistentTxs =
                Block1Content.Transactions.Append(txWithDifferentGenesis).ToArray();
            InvalidTxGenesisHashException e = Assert.Throws<InvalidTxGenesisHashException>(
                () => new BlockContent(
                    new BlockMetadata(
                        index: Block1Content.Index,
                        timestamp: DateTimeOffset.UtcNow,
                        publicKey: Block1Content.PublicKey,
                        previousHash: Block1Content.PreviousHash,
                        txHash: BlockContent.DeriveTxHash(inconsistentTxs),
                        lastCommit: null,
                        proof: null),
                    transactions: inconsistentTxs));
            Assert.Equal(Block1Content.Transactions[0].GenesisHash, e.ExpectedGenesisHash);
            Assert.Equal(differentGenesisHash, e.ImproperGenesisHash);
        }

        [Fact]
        public void TxHash()
        {
            var expected = new HashDigest<SHA256>(new byte[]
            {
                0x65, 0x46, 0x98, 0xd3, 0x4b, 0x6d, 0x9a, 0x55, 0xb0, 0xc9, 0x3e,
                0x4f, 0xfb, 0x26, 0x39, 0x27, 0x83, 0x24, 0x86, 0x8c, 0x91, 0x96,
                0x5b, 0xc5, 0xf9, 0x6c, 0xb3, 0x07, 0x1d, 0x69, 0x03, 0xa0,
            });
            AssertBytesEqual(expected, Block1Content.TxHash);
            Assert.Null(GenesisContentPv0.TxHash);
        }

        [Fact]
        public void DeriveTxHash()
        {
            Assert.Null(
                BlockContent.DeriveTxHash(Array.Empty<Transaction>())
            );
            AssertBytesEqual(
                Block1Metadata.TxHash,
                BlockContent.DeriveTxHash(Block1Content.Transactions)
            );
            Assert.Throws<ArgumentException>(
                () => BlockContent.DeriveTxHash(Block1Content.Transactions.Reverse())
            );
        }
    }
}
