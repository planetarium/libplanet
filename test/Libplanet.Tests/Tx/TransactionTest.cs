using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Action.Sys;
using Libplanet.Action.Tests.Common;
using Libplanet.Common;
using Libplanet.Crypto;
using Libplanet.Types.Blocks;
using Libplanet.Types.Consensus;
using Libplanet.Types.Tx;
using Xunit;
using static Libplanet.Tests.TestUtils;

namespace Libplanet.Tests.Tx
{
    public class TransactionTest
    {
        private readonly TxFixture _fx;

        public TransactionTest()
        {
            _fx = new TxFixture(null);
        }

        [Fact]
        public void ConstructorWithVerification()
        {
            var tx = new Transaction(
                _fx.Tx,
                ImmutableArray.Create(_fx.Tx.Signature));
            Assert.Equal<ITransaction>(_fx.Tx, tx);

            var wrongSig = ImmutableArray.Create(_fx.TxWithActions.Signature);
            InvalidTxSignatureException e = Assert.Throws<InvalidTxSignatureException>(
                () => new Transaction(_fx.Tx, wrongSig));
            TestUtils.AssertBytesEqual(
                "d4e3e4db802ef1b19c4bc74dd8fae5da60108414a6772b060752825034cb7f1b",
                e.TxId.ByteArray);
        }

        [Fact]
        public void ConstructorWithSigning()
        {
            PrivateKey validKey = _fx.PrivateKey1;
            var tx = new Transaction(_fx.Tx, validKey);
            Assert.Equal<ITransaction>(_fx.Tx, tx);

            var wrongKey = new PrivateKey();
            ArgumentException e = Assert.Throws<ArgumentException>(
                () => new Transaction(_fx.Tx, wrongKey));
            Assert.Equal("privateKey", e.ParamName);
        }

        [Fact]
        public void CreateWithSystemAction()
        {
            var privateKey = new PrivateKey(
                new byte[]
                {
                    0xcf, 0x36, 0xec, 0xf9, 0xe4, 0x7c, 0x87, 0x9a, 0x0d, 0xbf,
                    0x46, 0xb2, 0xec, 0xd8, 0x3f, 0xd2, 0x76, 0x18, 0x2a, 0xde,
                    0x02, 0x65, 0x82, 0x5e, 0x3b, 0x8c, 0x6b, 0xa2, 0x14, 0x46,
                    0x7b, 0x76,
                }
            );
            var timestamp =
                new DateTimeOffset(2018, 11, 21, 0, 0, 0, TimeSpan.Zero);
            var action = new Initialize(
                new ValidatorSet(new List<Validator>()
                    { new Validator(privateKey.PublicKey, 1) }),
                new Dictionary<Address, IValue>
                {
                    [default] = (Text)"initial value",
                }.ToImmutableDictionary());
            Transaction tx = Transaction.Create(
                0,
                privateKey,
                null,
                actions: new IAction[] { action }.Select(x => x.PlainValue),
                timestamp: timestamp
            );

            AssertBytesEqual(privateKey.Address, tx.Signer);
            Assert.Empty(tx.UpdatedAddresses);
            Assert.Equal(privateKey.PublicKey, tx.PublicKey);
            Assert.Equal(timestamp, tx.Timestamp);
            AssertBytesEqual(
                new byte[]
                {
                    0x30, 0x44, 0x02, 0x20, 0x60, 0x8a, 0xbf, 0x3d, 0xdf, 0x50,
                    0xf2, 0x00, 0x27, 0x56, 0xbb, 0x84, 0xc5, 0x65, 0x7c, 0xd9,
                    0x4f, 0xbc, 0x33, 0x81, 0xe1, 0x0d, 0xc1, 0x5b, 0x23, 0x11,
                    0xc4, 0x97, 0x61, 0x3e, 0xa0, 0xff, 0x02, 0x20, 0x44, 0x08,
                    0xf8, 0x71, 0x43, 0x8c, 0x51, 0xd6, 0xa8, 0x22, 0x7d, 0x8c,
                    0x7d, 0xb2, 0xc5, 0x97, 0x5b, 0xef, 0x72, 0x07, 0xfe, 0x4f,
                    0x9d, 0x4c, 0x25, 0xc6, 0xb2, 0x1a, 0x89, 0xc7, 0xad, 0x10,
                },
                tx.Signature
            );
            AssertBytesEqual(
                TxId.FromHex("eff61a6ee0faa2705b3dbd23abefbf18b4c864fa6b344c4fc3846cbb71a0e294"),
                tx.Id
            );
        }

        [Fact]
        public void CreateWithCustomActions()
        {
            var privateKey = new PrivateKey(ByteUtil.ParseHex(
                "cf36ecf9e47c879a0dbf46b2ecd83fd276182ade0265825e3b8c6ba214467b76"));
            var timestamp =
                new DateTimeOffset(2018, 11, 21, 0, 0, 0, TimeSpan.Zero);
            Address stateStore = new Address(
                new byte[]
                {
                    0xe6, 0x95, 0x1c, 0x43, 0x02, 0xdf, 0x13, 0xf9, 0x29, 0xfc,
                    0xdb, 0xc5, 0x56, 0xd9, 0xac, 0x20, 0x41, 0xfe, 0xf9, 0x5f,
                }
            );
            Transaction tx = Transaction.Create(
                0,
                privateKey,
                null,
                new[]
                {
                    DumbAction.Create((stateStore, "F"), recordRandom: false),
                }.Select(x => x.PlainValue),
                null,
                null,
                timestamp
            );

            Assert.Equal(
                new Address(privateKey.PublicKey),
                tx.Signer
            );
            Assert.Equal(privateKey.PublicKey, tx.PublicKey);
            Assert.Equal(timestamp, tx.Timestamp);
            AssertBytesEqual(
                "3045022100c489671a0c97a0033c3273b15bb90bdff96e47bfaf475a1914ad5441bac32" +
                "d6e022066ed765bbfead057a5cb12fa3ad4188833f1ea139f80383d062ffd315213289d",
                tx.Signature
            );
            AssertBytesEqual(
                new TxId(ByteUtil.ParseHex(
                    "201ff302e08e0a3a6ce62415265dff6ec7c4439673f5079ceaeb2572fe05f632")),
                tx.Id
            );
        }

        [Fact]
        public void CreateWithDefaultUpdatedAddresses()
        {
            Transaction emptyTx = Transaction.Create(
                0,
                _fx.PrivateKey1,
                null,
                Array.Empty<DumbAction>().Select(x => x.PlainValue));
            Assert.Empty(emptyTx.UpdatedAddresses);
        }

        [Fact]
        public void CreateWithDefaultTimestamp()
        {
            DateTimeOffset rightBefore = DateTimeOffset.UtcNow;
            Transaction tx = Transaction.Create(
                0,
                _fx.PrivateKey1,
                null,
                Array.Empty<DumbAction>().Select(x => x.PlainValue),
                null,
                null);
            DateTimeOffset rightAfter = DateTimeOffset.UtcNow;

            Assert.InRange(tx.Timestamp, rightBefore, rightAfter);
        }

        [Fact]
        public void CreateWithMissingRequiredArguments()
        {
            // The privateKey parameter cannot be null.
            Assert.Throws<ArgumentNullException>(() =>
                Transaction.Create(
                    0,
                    null,
                    null,
                    Array.Empty<DumbAction>().Select(x => x.PlainValue),
                    null,
                    null,
                    DateTimeOffset.UtcNow
                )
            );
        }

        [Fact]
        public void MakeWithSignature()
        {
            var privateKey = new PrivateKey(
                new byte[]
                {
                    0xcf, 0x36, 0xec, 0xf9, 0xe4, 0x7c, 0x87, 0x9a, 0x0d, 0xbf,
                    0x46, 0xb2, 0xec, 0xd8, 0x3f, 0xd2, 0x76, 0x18, 0x2a, 0xde,
                    0x02, 0x65, 0x82, 0x5e, 0x3b, 0x8c, 0x6b, 0xa2, 0x14, 0x46,
                    0x7b, 0x76,
                }
            );
            var timestamp = new DateTimeOffset(2018, 11, 21, 0, 0, 0, TimeSpan.Zero);
            var signature = new byte[]
            {
                0x30, 0x44, 0x02, 0x20, 0x2f, 0x2d, 0xbe, 0x5a, 0x91, 0x65, 0x59, 0xde, 0xdb, 0xe8,
                0xd8, 0x4f, 0xa9, 0x20, 0xe2, 0x01, 0x29, 0x4d, 0x4f, 0x40, 0xea, 0x1e, 0x97, 0x44,
                0x1f, 0xbf, 0xa2, 0x5c, 0x8b, 0xd0, 0x0e, 0x23, 0x02, 0x20, 0x3c, 0x06, 0x02, 0x1f,
                0xb8, 0x3f, 0x67, 0x49, 0x92, 0x3c, 0x07, 0x59, 0x67, 0x96, 0xa8, 0x63, 0x04, 0xb0,
                0xc3, 0xfe, 0xbb, 0x6c, 0x7a, 0x7b, 0x58, 0x58, 0xe9, 0x7d, 0x37, 0x67, 0xe1, 0xe9,
            };
            var tx = new Transaction(
                new UnsignedTx(
                new TxInvoice(timestamp: timestamp),
                new TxSigningMetadata(privateKey.PublicKey, nonce: 0L)
                ),
                signature: signature.ToImmutableArray()
            );

            Assert.Equal(
                new Address(privateKey.PublicKey),
                tx.Signer
            );
            Assert.Equal(ImmutableHashSet<Address>.Empty, tx.UpdatedAddresses);
            Assert.Equal(privateKey.PublicKey, tx.PublicKey);
            Assert.Equal(timestamp, tx.Timestamp);
            AssertBytesEqual(
                signature,
                tx.Signature
            );
            AssertBytesEqual(
                new TxId(
                    new byte[]
                    {
                        0xb0, 0x69, 0xfd, 0xe2, 0x53, 0x88, 0x53, 0xbe, 0x81, 0xb3, 0xea, 0xac,
                        0xc2, 0x38, 0x55, 0x42, 0x0e, 0x03, 0xe5, 0x62, 0x6f, 0x75, 0x7f, 0xa1,
                        0x9b, 0x37, 0x92, 0x60, 0x1a, 0x94, 0x88, 0x81,
                    }
                ),
                tx.Id
            );

            var invalidSignature = new byte[]
            {
                0x30, 0x45, 0x02, 0x21, 0x00, 0x9b, 0x8e, 0xb8, 0xb8, 0x6b,
                0x31, 0x8d, 0xb4, 0x86, 0xb5, 0x9a, 0x4f, 0x8e, 0x54, 0xea,
                0xa6, 0x8f, 0x88, 0x73, 0x94, 0x63, 0xa9, 0x19, 0x36, 0x1a,
                0x4b, 0x1a, 0x32, 0xcf, 0x22, 0xf2, 0x1e, 0x02, 0x20, 0x76,
                0xbe, 0x7f, 0xbf, 0x76, 0xa2, 0x09, 0x71, 0xfe, 0xf9, 0x28,
                0xc6, 0x44, 0x0e, 0xdf, 0xda, 0xf3, 0x82, 0x29, 0x7b, 0x0f,
                0x09, 0xf4, 0x50, 0x9f, 0xb1, 0xb1, 0x1e, 0xab, 0x11, 0x4b,
                0x3f,
            };
        }

        [Fact]
        public void DetectBadSignature()
        {
            Assert.Throws<InvalidTxSignatureException>(() =>
                new Transaction(
                    (IUnsignedTx)_fx.Tx,
                    new byte[_fx.Tx.Signature.Length].ToImmutableArray()
                )
            );
        }

        [Fact]
        public void ActionsAreIsolatedFromOutside()
        {
            var actions = new List<DumbAction>();
            Transaction tx = Transaction.Create(
                0,
                _fx.PrivateKey1,
                null,
                actions.ToPlainValues()
            );
            actions.Add(new DumbAction());
            Assert.Empty(tx.Actions);
        }

        [Fact]
        public void Equality()
        {
            var genesisHash = BlockHash.Parse(
                "92854cf0a62a7103b9c610fd588ad45254e64b74ceeeb209090ba572a41bf265");
            Address addressA = new Address("D6D639DA5a58A78A564C2cD3DB55FA7CeBE244A9");
            Address addressB = new Address("B61CE2Ce6d28237C1BC6E114616616762f1a12Ab");
            var updatedAddresses = ImmutableHashSet.Create(addressA, addressB);
            var timestamp = new DateTimeOffset(2023, 3, 29, 1, 2, 3, 456, TimeSpan.Zero);
            var actions = new TxActionList(new IAction[]
            {
                DumbAction.Create((addressA, "foo")),
                DumbAction.Create((addressB, "bar")),
            }.ToPlainValues());
            var invoice = new TxInvoice(
                genesisHash,
                updatedAddresses,
                timestamp,
                actions,
                null,
                null);
            var privateKey =
                new PrivateKey("51fb8c2eb261ed761429c297dd1f8952c8ce327d2ec2ec5bcc7728e3362627c2");
            PublicKey publicKey = privateKey.PublicKey;
            var signingMetadata = new TxSigningMetadata(publicKey, 123L);
            var unsignedTx = new UnsignedTx(invoice, signingMetadata);
            ImmutableArray<byte> signature = ByteUtil.ParseHexToImmutable(
                "30430220502da40025cf537d0517a111bb2078b04ec421755743177e0bad75ff47dcf" +
                "066021f154bb551ec7e5e9228debcd44beee5a74db8249670e06f2c5b355f56730627");
            var tx = new Transaction(unsignedTx, signature: signature);

            Assert.Equal<ITxInvoice>(invoice, tx);
            Assert.Equal<ITxSigningMetadata>(signingMetadata, tx);
            Assert.Equal<IUnsignedTx>(unsignedTx, tx);

            var copy = new Transaction(unsignedTx, signature: signature);
            Assert.Equal<IUnsignedTx>(tx, copy);
            Assert.Equal<ITransaction>(tx, copy);
            Assert.Equal<Transaction>(tx, copy);
            Assert.True(tx.Equals((object)copy));
            Assert.Equal(tx.GetHashCode(), copy.GetHashCode());

            var wrongKey = new PrivateKey();
            for (int i = 0; i < 6; i++)
            {
                var diffInvoice = new TxInvoice(
                    i == 0 ? (BlockHash?)null : invoice.GenesisHash,
                    i == 1 ? AddressSet.Empty : invoice.UpdatedAddresses,
                    i == 2 ? DateTimeOffset.MinValue : invoice.Timestamp,
                    i == 3 ? TxActionList.Empty : invoice.Actions,
                    null,
                    null);
                var diffSigningMetadata = new TxSigningMetadata(
                    i == 4 ? wrongKey.PublicKey : signingMetadata.PublicKey,
                    i == 5 ? 456L : signingMetadata.Nonce
                );

                if (i < 4)
                {
                    Assert.NotEqual<ITxInvoice>(diffInvoice, unsignedTx);
                    Assert.Equal<ITxSigningMetadata>(diffSigningMetadata, unsignedTx);
                }
                else
                {
                    Assert.Equal<ITxInvoice>(diffInvoice, unsignedTx);
                    Assert.NotEqual<ITxSigningMetadata>(diffSigningMetadata, unsignedTx);
                }

                var diffUnsignedTx = new UnsignedTx(diffInvoice, diffSigningMetadata);
                var diffTx = new Transaction(
                    diffUnsignedTx,
                    i == 4 ? wrongKey : privateKey);
                Assert.NotEqual<IUnsignedTx>(tx, diffTx);
                Assert.NotEqual<ITransaction>(tx, diffTx);
                Assert.NotEqual<Transaction>(tx, diffTx);
                Assert.False(tx.Equals((object)diffTx));
                Assert.NotEqual(tx.GetHashCode(), diffTx.GetHashCode());
            }
        }

        [Fact]
        public void JsonSerialization()
        {
            var genesisHash = BlockHash.Parse(
                "92854cf0a62a7103b9c610fd588ad45254e64b74ceeeb209090ba572a41bf265");
            Address addressA = new Address("D6D639DA5a58A78A564C2cD3DB55FA7CeBE244A9");
            Address addressB = new Address("B61CE2Ce6d28237C1BC6E114616616762f1a12Ab");
            var updatedAddresses = ImmutableHashSet.Create(addressA, addressB);
            var timestamp = new DateTimeOffset(2023, 3, 29, 1, 2, 3, 456, TimeSpan.Zero);
            var actions = new TxActionList(new IAction[]
            {
                DumbAction.Create((addressA, "foo")),
                DumbAction.Create((addressB, "bar")),
            }.ToPlainValues());
            var invoice = new TxInvoice(
                genesisHash,
                updatedAddresses,
                timestamp,
                actions,
                null,
                null);
            var privateKey =
                new PrivateKey("51fb8c2eb261ed761429c297dd1f8952c8ce327d2ec2ec5bcc7728e3362627c2");
            PublicKey publicKey = privateKey.PublicKey;
            var signingMetadata = new TxSigningMetadata(publicKey, 123L);
            var unsignedTx = new UnsignedTx(invoice, signingMetadata);
            ImmutableArray<byte> signature = ByteUtil.ParseHexToImmutable(
                "30430220502da40025cf537d0517a111bb2078b04ec421755743177e0bad75ff47dcf" +
                "066021f154bb551ec7e5e9228debcd44beee5a74db8249670e06f2c5b355f56730627");
            var tx = new Transaction(unsignedTx, signature: signature);

#pragma warning disable MEN002  // Long lines are OK for test JSON data.
            AssertJsonSerializable(
                tx,
                @"
                    {
                      ""id"": ""926c8ee03479bfe29ee78ab71e81684badca177cee9c63bcc1a8f3bdf6ad4d45"",
                      ""nonce"": 123,
                      ""signer"": ""89F0eE48e8BeaE3131B17Dc79A1282A0D7EdC6b9"",
                      ""updatedAddresses"": [
                        ""B61CE2Ce6d28237C1BC6E114616616762f1a12Ab"",
                        ""D6D639DA5a58A78A564C2cD3DB55FA7CeBE244A9""
                      ],
                      ""signature"": ""MEMCIFAtpAAlz1N9BRehEbsgeLBOxCF1V0MXfgutdf9H3PBmAh8VS7VR7H5ekijevNRL7uWnTbgklnDgbyxbNV9WcwYn"",
                      ""actions"": [
                        {
                          ""\uFEFFitem"": ""\uFEFFfoo"",
                          ""\uFEFFtarget_address"": ""0xd6d639da5a58a78a564c2cd3db55fa7cebe244a9"",
                          ""\uFEFFtype_id"": ""\uFEFFDumbAction""
                        },
                        {
                          ""\uFEFFitem"": ""\uFEFFbar"",
                          ""\uFEFFtarget_address"": ""0xb61ce2ce6d28237c1bc6e114616616762f1a12ab"",
                          ""\uFEFFtype_id"": ""\uFEFFDumbAction""
                        }
                      ],
                      ""timestamp"": ""2023-03-29T01:02:03.456\u002B00:00"",
                      ""publicKey"": ""03f804c12768bf9e05978ee37c56d037f68523fd9079642691eec82e233e1559bf"",
                      ""genesisHash"": ""92854cf0a62a7103b9c610fd588ad45254e64b74ceeeb209090ba572a41bf265"",
                      ""maxGasPrice"": null,
                      ""gasLimit"": null
                    }
                ",
                false);
#pragma warning restore MEN002
        }
    }
}
