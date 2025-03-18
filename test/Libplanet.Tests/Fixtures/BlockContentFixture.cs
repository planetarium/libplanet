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
using Libplanet.Tests.Blockchain.Evidence;
using Libplanet.Types.Blocks;
using Libplanet.Types.Evidence;
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
        public readonly EvidenceBase Block1Ev0;
        public readonly EvidenceBase Block1Ev1;
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
                            states: ImmutableDictionary.Create<Address, IValue>()),
                    }.ToPlainValues(),
                timestamp: DateTimeOffset.MinValue
            );
            Transaction[] genTxs = new[] { genTx };
            EvidenceBase[] genEvidence = new[]
            {
                new TestEvidence(
                    0, GenesisKey.Address, new DateTimeOffset(2024, 5, 24, 14, 12, 9, 45, kst)),
            };
            GenesisContent = new BlockContent(
                new BlockMetadata(
                    index: 0,
                    timestamp: new DateTimeOffset(2021, 9, 6, 13, 46, 39, 123, kst),
                    publicKey: GenesisKey.PublicKey,
                    previousHash: null,
                    txHash: BlockContent.DeriveTxHash(genTxs),
                    lastCommit: null,
                    evidenceHash: BlockContent.DeriveEvidenceHash(genEvidence)),
                transactions: genTxs,
                evidence: genEvidence);
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
                        updatedAddresses: new AddressSet(new[] { Block1Tx0Key.Address }),
                        timestamp: new DateTimeOffset(2021, 9, 6, 17, 0, 1, 1, default),
                        actions: new TxActionList(new IAction[]
                        {
                            Arithmetic.Add(10), Arithmetic.Add(50), Arithmetic.Sub(25),
                        }.ToPlainValues()),
                        maxGasPrice: null,
                        gasLimit: null),
                    new TxSigningMetadata(Block1Tx0Key.PublicKey, nonce: 0L)
                ),
                signature: ByteUtil.ParseHexToImmutable(
                    "6054008481425278039421becc25fcb030d12714dc53490fdd5d43bcc8fe2d2a5" +
                    "b80a751bbde0b4813bd94ecd8e63bafee4f18db787beb117a5fc1aa5c2af9ca1b"
                )
            );
            Block1Tx1Key = PrivateKey.FromString(
                "105341c78dfb0dd313b961081630444c2586a1f01fb0c625368ffdc9136cfa30");
            Block1Tx1 = new Transaction(
                new UnsignedTx(
                    new TxInvoice(
                        genesisHash: GenesisHash,
                        updatedAddresses: new AddressSet(new[] { Block1Tx1Key.Address }),
                        timestamp: new DateTimeOffset(2021, 9, 6, 17, 0, 1, 1, default),
                        actions: new TxActionList(new IAction[]
                        {
                            Arithmetic.Add(30),
                        }.ToPlainValues()),
                        maxGasPrice: null,
                        gasLimit: null),
                    new TxSigningMetadata(Block1Tx1Key.PublicKey, nonce: 1L)),
                signature: ByteUtil.ParseHexToImmutable(
                    "f74609d91b9c5348ba248df1dcbce4114031971beb39c12874df3a8c4c8651540" +
                    "b31c9460da2b673cae61502036f6054353303be3c0b210ad9659afc6e9f5ce71b")
            );
            Block1Ev0 = new TestEvidence(
                0, GenesisKey.Address, new DateTimeOffset(2024, 5, 24, 14, 13, 9, 45, kst));
            Block1Ev1 = new TestEvidence(
                0, GenesisKey.Address, new DateTimeOffset(2024, 5, 24, 14, 14, 9, 45, kst));

            var block1Transactions = new List<Transaction>() { Block1Tx0, Block1Tx1 }
                .OrderBy(tx => tx.Id).ToList();
            var block1Evidence = new List<EvidenceBase>() { Block1Ev0, Block1Ev1 }
                .OrderBy(tx => tx.Id).ToList();
            Block1Content = new BlockContent(
                new BlockMetadata(
                    index: 1,
                    timestamp: new DateTimeOffset(2021, 9, 6, 17, 1, 9, 45, kst),
                    publicKey: Block1Key.PublicKey,
                    previousHash: GenesisHash,
                    txHash: BlockContent.DeriveTxHash(block1Transactions),
                    lastCommit: null,
                    evidenceHash: BlockContent.DeriveEvidenceHash(block1Evidence)),
                transactions: block1Transactions,
                evidence: block1Evidence);
            Block1TxHash = HashDigest<SHA256>.FromString(
                "9d6457e7bdc4b19d1f341c45c787cf80a17c514da10d702606cc41f23387badb");
            Block1Metadata = new BlockMetadata(Block1Content);

            GenesisContentPv0 = new BlockContent(
                new BlockMetadata(
                    protocolVersion: 0,
                    index: 0,
                    timestamp: new DateTimeOffset(2021, 9, 6, 13, 46, 39, 123, kst),
                    miner: GenesisKey.Address,
                    publicKey: null,
                    previousHash: null,
                    txHash: null,
                    lastCommit: null,
                    evidenceHash: null),
                transactions: new List<Transaction>(),
                evidence: new List<EvidenceBase>()); // Tweaked GenesisContent
            GenesisMetadataPv0 = new BlockMetadata(GenesisContentPv0);
            Block1ContentPv1 = new BlockContent(
                new BlockMetadata(
                    protocolVersion: 1,
                    index: 1,
                    timestamp: new DateTimeOffset(2021, 9, 6, 17, 1, 9, 45, kst),
                    miner: Block1Key.Address,
                    publicKey: null,
                    previousHash: GenesisHash,
                    txHash: BlockContent.DeriveTxHash(block1Transactions),
                    lastCommit: null,
                    evidenceHash: BlockContent.DeriveEvidenceHash(block1Evidence)),
                transactions: block1Transactions,
                evidence: block1Evidence); // Tweaked Block1Content
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
