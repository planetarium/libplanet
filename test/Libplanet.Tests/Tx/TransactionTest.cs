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
                "0a5b3d8ac9819ecd8343d6816a0632c20a669c45ad94ffc9f4005af3815a0f1b",
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
            Assert.Equal(privateKey.Address, tx.Signer);
            Assert.Equal(timestamp, tx.Timestamp);
            AssertBytesEqual(
                new byte[]
                {
                    0x08, 0xef, 0x2a, 0x58, 0x52, 0x8b, 0x15, 0xe5, 0xc3, 0x25, 0xe1, 0x59, 0x2a,
                    0x5e, 0x1d, 0x3a, 0x8a, 0xf3, 0xeb, 0x12, 0x01, 0xfe, 0x1f, 0x2b, 0xf7, 0x42,
                    0x80, 0xd1, 0xc1, 0xaa, 0x09, 0xbc, 0x19, 0xb1, 0x59, 0x77, 0x95, 0xaa, 0x03,
                    0x74, 0x75, 0x5f, 0x6c, 0xdd, 0x69, 0x89, 0x3a, 0x82, 0x72, 0xd2, 0xcf, 0xee,
                    0x31, 0x31, 0x7f, 0x53, 0x39, 0x25, 0xe4, 0x1c, 0xdf, 0x3d, 0x55, 0x61, 0x1b,
                },
                tx.Signature
            );
            AssertBytesEqual(
                TxId.FromHex("babd317f0ce9961a528d9c923022fa4e0a360df0437463af7267ac40c5a889e6"),
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
            Assert.Equal(privateKey.Address, tx.Signer);
            Assert.Equal(timestamp, tx.Timestamp);
            AssertBytesEqual(
                "20687120cb1d510e954cb506af5e92d9b4e19cf1ddf509ba104863db202a5e2b7" +
                "77d056be4e09f044182af2ebb79c449a4f619b5c77f5bd34567400e6dfcab881c",
                tx.Signature
            );
            AssertBytesEqual(
                new TxId(ByteUtil.ParseHex(
                    "6b377f828e6e310d986f5812caa732f00841ebaf66ace2b2aab6fe417ee1b84d")),
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
                0xb6, 0x39, 0x6d, 0x8f, 0xbc, 0xb3, 0xb5, 0x9d, 0x88, 0xbb, 0x86, 0x93, 0x11, 0x7f,
                0xfb, 0x95, 0x57, 0xba, 0xcf, 0xc5, 0x1d, 0xef, 0x49, 0x28, 0x21, 0x62, 0x54, 0x55,
                0x0d, 0x7e, 0x17, 0xb0, 0x66, 0xdb, 0xc1, 0xb5, 0x07, 0x79, 0xd7, 0x45, 0x2c, 0x48,
                0xd2, 0xc9, 0x8d, 0x59, 0xb9, 0x91, 0xdb, 0x87, 0xfd, 0xfb, 0xda, 0x0c, 0xe0, 0x40,
                0xe2, 0x7e, 0xeb, 0xa2, 0x0f, 0xb8, 0xa3, 0xff, 0x1c,
            };
            var unsignedTx = new UnsignedTx(
                new TxInvoice(timestamp: timestamp),
                new TxSigningMetadata(privateKey.PublicKey, nonce: 0L));
            var tx = new Transaction(
                unsignedTx: unsignedTx,
                signature: signature.ToImmutableArray()
            );

            Assert.Equal(
                new Address(privateKey.PublicKey),
                tx.Signer
            );
            Assert.Equal(ImmutableHashSet<Address>.Empty, tx.UpdatedAddresses);
            Assert.Equal(privateKey.Address, tx.Signer);
            Assert.Equal(timestamp, tx.Timestamp);
            AssertBytesEqual(
                signature,
                tx.Signature
            );
            AssertBytesEqual(
                new TxId(
                    new byte[]
                    {
                        0x35, 0x50, 0x73, 0x12, 0xcf, 0x5b, 0xae, 0xd8, 0xa3, 0x79, 0x69, 0xd2,
                        0xb0, 0xb5, 0x9a, 0x16, 0xe4, 0x88, 0x81, 0xc1, 0x0e, 0xe4, 0xb4, 0x1d,
                        0xed, 0x2d, 0x0f, 0xf5, 0x41, 0xf0, 0x03, 0xd1,
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
            var genesisHash = BlockHash.FromString(
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
                "6624cbd4281c0fb29d73f7912f8bec6a9bf4be4b73538148e5ef0352885906c54" +
                "f05d12acbe0cf6afd8665b744db99a2a4a54cb473f9ac0077b93cc614e806a91c");
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
                    i == 4 ? wrongKey.Address : signingMetadata.Signer,
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
            var genesisHash = BlockHash.FromString(
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
                "6624cbd4281c0fb29d73f7912f8bec6a9bf4be4b73538148e5ef0352885906c54" +
                "f05d12acbe0cf6afd8665b744db99a2a4a54cb473f9ac0077b93cc614e806a91c");
            var tx = new Transaction(unsignedTx, signature: signature);

#pragma warning disable MEN002  // Long lines are OK for test JSON data.
            AssertJsonSerializable(
                tx,
                @"
                    {
                      ""id"": ""daa356224285b0a0aaafa1be222dc47ec1fea27b835e09c46a8b0c3cde797b73"",
                      ""nonce"": 123,
                      ""signer"": ""89F0eE48e8BeaE3131B17Dc79A1282A0D7EdC6b9"",
                      ""updatedAddresses"": [
                        ""B61CE2Ce6d28237C1BC6E114616616762f1a12Ab"",
                        ""D6D639DA5a58A78A564C2cD3DB55FA7CeBE244A9""
                      ],
                      ""signature"": ""ZiTL1CgcD7Kdc/eRL4vsapv0vktzU4FI5e8DUohZBsVPBdEqy\u002BDPav2GZbdE25mipKVMtHP5rAB3uTzGFOgGqRw="",
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
