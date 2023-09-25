using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Security.Cryptography;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Action.Sys;
using Libplanet.Common;
using Libplanet.Crypto;
using Libplanet.Types.Blocks;
using Libplanet.Types.Tx;
using Xunit;

namespace Libplanet.Tests.Fixtures
{
    public class BlockContentFixture
    {
        public readonly PrivateKey GenesisKey;
        public readonly BlockHash GenesisHash;
        public readonly BlockContent GenesisContent;
        public readonly BlockMetadata GenesisMetadata;

        public readonly PrivateKey Block1Key;
        public readonly PrivateKey Block1Tx0Key;
        public readonly PrivateKey Block1Tx1Key;
        public readonly Transaction Block1Tx0;
        public readonly Transaction Block1Tx1;
        public readonly BlockContent Block1Content;
        public readonly HashDigest<SHA256> Block1TxHash;
        public readonly BlockMetadata Block1Metadata;

        public readonly BlockContent GenesisContentPv0;
        public readonly BlockMetadata GenesisMetadataPv0;
        public readonly BlockContent Block1ContentPv1;
        public readonly BlockMetadata Block1MetadataPv1;

        public BlockContentFixture()
        {
            TimeSpan kst = TimeSpan.FromHours(9);
            GenesisKey = PrivateKey.FromString(
                "9bf4664ba09a89faeb684b94e69ffde01d26ae14b556204d3f6ab58f61f78418");
            Transaction genTx = Transaction.Create(
                0,
                GenesisKey,
                null,
                actions: new IAction[]
                    {
                        new Initialize(
                            validatorSet: TestUtils.ValidatorSet,
                            states: ImmutableDictionary.Create<
                                Address, IImmutableDictionary<Address, IValue>>()),
                    }.ToPlainValues(),
                timestamp: DateTimeOffset.MinValue
            );
            Transaction[] genTxs = new[] { genTx };
            GenesisContent = new BlockContent(
                new BlockMetadata(
                    index: 0,
                    timestamp: new DateTimeOffset(2021, 9, 6, 13, 46, 39, 123, kst),
                    publicKey: GenesisKey.PublicKey,
                    previousHash: null,
                    txHash: BlockContent.DeriveTxHash(genTxs),
                    lastCommit: null),
                transactions: genTxs);
            GenesisMetadata = new BlockMetadata(GenesisContent);
            GenesisHash = BlockHash.FromString(
                "341e8f360597d5bc45ab96aabc5f1b0608063f30af7bd4153556c9536a07693a");

            Block1Key = PrivateKey.FromString(
                "fcf30b333d04ccfeb562f000a32df488e7154949d31ddcac3cf9278acb5786c7");
            Block1Tx0Key = PrivateKey.FromString(
                "2d5c20079bc4b2e6eab9ecbb405da8ba6590c436edfb07b7d4466563d7dac096");
            Block1Tx0 = new Transaction(
                new UnsignedTx(
                    new TxInvoice(
                        genesisHash: GenesisHash,
                        updatedAddresses: new[] { Block1Tx0Key.ToAddress() },
                        timestamp: new DateTimeOffset(2021, 9, 6, 17, 0, 1, 1, default),
                        actions: new TxActionList(new IAction[]
                        {
                            Arithmetic.Add(10), Arithmetic.Add(50), Arithmetic.Sub(25),
                        }.ToPlainValues())
                    ),
                    new TxSigningMetadata(Block1Tx0Key.PublicKey, nonce: 0L)
                ),
                signature: ByteUtil.ParseHexToImmutable(
                    "30440220422c85ea44845a56253654d95595ad06d6f09f862ca71b97e986ecbb453eac" +
                    "ae0220606e76276e40fa8f0795b880f712531fd6bd9db253bd8ab9c86aa4ab7d791d37"
                )
            );
            Block1Tx1Key = PrivateKey.FromString(
                "105341c78dfb0dd313b961081630444c2586a1f01fb0c625368ffdc9136cfa30");
            Block1Tx1 = new Transaction(
                new UnsignedTx(
                    new TxInvoice(
                        genesisHash: GenesisHash,
                        updatedAddresses: new[] { Block1Tx1Key.ToAddress() },
                        timestamp: new DateTimeOffset(2021, 9, 6, 17, 0, 1, 1, default),
                        actions: new TxActionList(new IAction[]
                        {
                            Arithmetic.Add(30),
                        }.ToPlainValues())
                    ),
                    new TxSigningMetadata(Block1Tx1Key.PublicKey, nonce: 1L)
                ),
                signature: ByteUtil.ParseHexToImmutable(
                    "3045022100abe3caabf2a46a297f2e4496f2c46d7e2f723e75fc42025d19f3ed7fce382" +
                    "d4e02200ffd36f7bef759b6c7ab43bc0f8959a0c463f88fd0f1faeaa209a8661506c4f0"
                )
            );

            var block1Transactions = new List<Transaction>() { Block1Tx0, Block1Tx1 }
                .OrderBy(tx => tx.Id).ToList();
            Block1Content = new BlockContent(
                new BlockMetadata(
                    index: 1,
                    timestamp: new DateTimeOffset(2021, 9, 6, 17, 1, 9, 45, kst),
                    publicKey: Block1Key.PublicKey,
                    previousHash: GenesisHash,
                    txHash: BlockContent.DeriveTxHash(block1Transactions),
                    lastCommit: null),
                transactions: block1Transactions);
            Block1TxHash = HashDigest<SHA256>.FromString(
                "654698d34b6d9a55b0c93e4ffb2639278324868c91965bc5f96cb3071d6903a0");
            Block1Metadata = new BlockMetadata(Block1Content);

            GenesisContentPv0 = new BlockContent(
                new BlockMetadata(
                    protocolVersion: 0,
                    index: 0,
                    timestamp: new DateTimeOffset(2021, 9, 6, 13, 46, 39, 123, kst),
                    miner: GenesisKey.ToAddress(),
                    publicKey: null,
                    previousHash: null,
                    txHash: null,
                    lastCommit: null),
                transactions: new List<Transaction>()); // Tweaked GenesisContent
            GenesisMetadataPv0 = new BlockMetadata(GenesisContentPv0);
            Block1ContentPv1 = new BlockContent(
                new BlockMetadata(
                    protocolVersion: 1,
                    index: 1,
                    timestamp: new DateTimeOffset(2021, 9, 6, 17, 1, 9, 45, kst),
                    miner: Block1Key.ToAddress(),
                    publicKey: null,
                    previousHash: GenesisHash,
                    txHash: BlockContent.DeriveTxHash(block1Transactions),
                    lastCommit: null),
                transactions: block1Transactions); // Tweaked Block1Content
            Block1MetadataPv1 = new BlockMetadata(Block1ContentPv1);
        }

        [Fact]
        public void ValidateBlockContentFixture()
        {
            Assert.Equal(Block1TxHash, Block1Content.TxHash);
            Assert.Equal(Block1TxHash, Block1ContentPv1.TxHash);
        }
    }
}
