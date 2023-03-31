using System;
using System.Collections.Immutable;
using Bencodex;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Crypto;
using Libplanet.Tests.Common.Action;
using Libplanet.Tx;
using Xunit;
using static Libplanet.Tests.TestUtils;

namespace Libplanet.Tests.Tx
{
    public class TxMarshalerTest
    {
        private readonly TxFixture _fx;
        private readonly Dictionary _marshaledTxInvoice;
        private readonly Dictionary _marshaledTxSigningMetadata;
        private readonly Dictionary _marshaledUnsignedTx;
        private readonly Dictionary _marshaledTransaction;
        private readonly Dictionary _marshaledTxInvoiceWithCustomActions;
        private readonly Dictionary _marshaledUnsignedTxWithCustomActions;
        private readonly Dictionary _marshaledTransactionWithCustomActions;

        public TxMarshalerTest()
        {
            _fx = new TxFixture(null);

            _marshaledTxInvoice = Bencodex.Types.Dictionary.Empty
                .Add(new byte[] { 0x61 }, Bencodex.Types.List.Empty) // 'a'
                .Add(new byte[] { 0x74 }, "2018-11-21T00:00:00.000000Z") // 't'
                .Add(new byte[] { 0x75 }, Bencodex.Types.List.Empty); // 'u'
            _marshaledTxSigningMetadata = Bencodex.Types.Dictionary.Empty
                .Add(new byte[] { 0x6e }, 0L) // 'n'
                .Add(
                    new byte[] { 0x70 }, // 'p'
                    ByteUtil.ParseHex(
                        "0446115b0131baccf94a5856ede871295f6f3d352e6847cda9c03e89fe09f7328" +
                        "08711ec97af6e341f110a326da1bdb81f5ae3badf76a90b22c8c491aed3aaa296"))
                .Add(
                    new byte[] { 0x73 }, // 's'
                    ByteUtil.ParseHex("c2a86014073d662a4a9bfcf9cb54263dfa4f5cbc"));
            _marshaledUnsignedTx =
                (Dictionary)_marshaledTxInvoice.SetItems(_marshaledTxSigningMetadata);
            _marshaledTransaction = _marshaledUnsignedTx
                .Add(
                    new byte[] { 0x53 },  // 'S'
                    ByteUtil.ParseHex(
                        "304402202f2dbe5a916559dedbe8d84fa920e201294d4f40ea1e97441fbfa25c8bd00e" +
                        "2302203c06021fb83f6749923c07596796a86304b0c3febb6c7a7b5858e97d3767e1e9"
                    ));

            Bencodex.Types.Dictionary actionAttack = Bencodex.Types.Dictionary.Empty
                .Add("type_id", "attack")
                .Add(
                    "values",
                    Bencodex.Types.Dictionary.Empty
                        .Add("target", "orc")
                        .Add(
                            "target_address",
                            ByteUtil.ParseHex("c2a86014073d662a4a9bfcf9cb54263dfa4f5cbc"))
                        .Add("weapon", "wand"));
            Bencodex.Types.Dictionary actionSleep = Bencodex.Types.Dictionary.Empty
                .Add("type_id", "sleep")
                .Add("values", Bencodex.Types.Dictionary.Empty.Add("zone_id", 10));
            _marshaledTxInvoiceWithCustomActions = Bencodex.Types.Dictionary.Empty
                .Add(
                    new byte[] { 0x61 }, // 'a'
                    Bencodex.Types.List.Empty.Add(actionAttack).Add(actionSleep))
                .Add(new byte[] { 0x74 }, "2018-11-21T00:00:00.000000Z") // 't'
                .Add(
                    new byte[] { 0x75 }, // 'u'
                    Bencodex.Types.List.Empty
                        .Add(ByteUtil.ParseHex("c2a86014073d662a4a9bfcf9cb54263dfa4f5cbc")));
            _marshaledUnsignedTxWithCustomActions = (Dictionary)_marshaledTxInvoiceWithCustomActions
                .SetItems(_marshaledTxSigningMetadata);
            _marshaledTransactionWithCustomActions = _marshaledUnsignedTxWithCustomActions
                .Add(
                    new byte[] { 0x53 },  // 'S'
                    ByteUtil.ParseHex(
                        "304402204cf2d4d92297a67fd04769f253e20e6213f063b8142fff4cb9e9c04733edbc" +
                        "1602200efebb0e2a7bcf4d5c7a628ed2e7a91f440afa31197ff616fb32d8badad3e9cc"
                    ));
        }

        [Fact]
        public void MarshalTxInvoice()
        {
            AssertBencodexEqual(_marshaledTxInvoice, _fx.Tx.MarshalTxInvoice());
            AssertBencodexEqual(
                _marshaledTxInvoiceWithCustomActions,
                _fx.TxWithActions.MarshalTxInvoice());
        }

        [Fact]
        public void MarshalTxSigningMetadata()
        {
            AssertBencodexEqual(_marshaledTxSigningMetadata, _fx.Tx.MarshalTxSigningMetadata());
            AssertBencodexEqual(
                _marshaledTxSigningMetadata,
                _fx.TxWithActions.MarshalTxSigningMetadata());
        }

        [Fact]
        public void MarshalUnsignedTx()
        {
            AssertBencodexEqual(_marshaledUnsignedTx, _fx.Tx.MarshalUnsignedTx());
            AssertBencodexEqual(
                _marshaledUnsignedTxWithCustomActions,
                _fx.TxWithActions.MarshalUnsignedTx());
        }

        [Fact]
        public void MarshalTransaction()
        {
            AssertBencodexEqual(_marshaledTransaction, _fx.Tx.MarshalTransaction());
            AssertBencodexEqual(
                _marshaledTransactionWithCustomActions,
                _fx.TxWithActions.MarshalTransaction());
        }

        [Fact]
        public void UnmarshalTxInvoice()
        {
            Assert.Equal<ITxInvoice>(
                TxMarshaler.UnmarshalTxInvoice<DumbAction>(_marshaledTxInvoice),
                _fx.Tx);
            Assert.Equal<ITxInvoice>(
                TxMarshaler.UnmarshalTxInvoice<PolymorphicAction<BaseAction>>(
                    _marshaledTxInvoiceWithCustomActions),
                _fx.TxWithActions);
        }

        [Fact]
        public void UnmarshalTxSigningMetadata()
        {
            Assert.Equal<ITxSigningMetadata>(
                TxMarshaler.UnmarshalTxSigningMetadata(_marshaledTxSigningMetadata),
                _fx.Tx);
            Assert.Equal<ITxSigningMetadata>(
                TxMarshaler.UnmarshalTxSigningMetadata(_marshaledTxSigningMetadata),
                _fx.TxWithActions);
        }

        [Fact]
        public void UnmarshalUnsignedTx()
        {
            Assert.Equal<IUnsignedTx>(
                TxMarshaler.UnmarshalUnsignedTx<DumbAction>(_marshaledUnsignedTx),
                _fx.Tx);
            Assert.Equal<IUnsignedTx>(
                TxMarshaler.UnmarshalUnsignedTx<PolymorphicAction<BaseAction>>(
                    _marshaledUnsignedTxWithCustomActions),
                _fx.TxWithActions);
        }

        [Fact]
        public void UnmarshalTransactionSignature()
        {
            AssertBytesEqual(
                ImmutableArray.Create(new byte[]
                {
                    0x30, 0x44, 0x02, 0x20, 0x2f, 0x2d, 0xbe, 0x5a, 0x91, 0x65, 0x59, 0xde, 0xdb,
                    0xe8, 0xd8, 0x4f, 0xa9, 0x20, 0xe2, 0x01, 0x29, 0x4d, 0x4f, 0x40, 0xea, 0x1e,
                    0x97, 0x44, 0x1f, 0xbf, 0xa2, 0x5c, 0x8b, 0xd0, 0x0e, 0x23, 0x02, 0x20, 0x3c,
                    0x06, 0x02, 0x1f, 0xb8, 0x3f, 0x67, 0x49, 0x92, 0x3c, 0x07, 0x59, 0x67, 0x96,
                    0xa8, 0x63, 0x04, 0xb0, 0xc3, 0xfe, 0xbb, 0x6c, 0x7a, 0x7b, 0x58, 0x58, 0xe9,
                    0x7d, 0x37, 0x67, 0xe1, 0xe9,
                }),
                TxMarshaler.UnmarshalTransactionSignature(_marshaledTransaction));

            Assert.Null(TxMarshaler.UnmarshalTransactionSignature(_marshaledUnsignedTx));
        }

        [Fact]
        public void UnmarshalTransaction()
        {
            PublicKey publicKey = new PrivateKey(
                new byte[]
                {
                    0xcf, 0x36, 0xec, 0xf9, 0xe4, 0x7c, 0x87, 0x9a, 0x0d, 0xbf,
                    0x46, 0xb2, 0xec, 0xd8, 0x3f, 0xd2, 0x76, 0x18, 0x2a, 0xde,
                    0x02, 0x65, 0x82, 0x5e, 0x3b, 0x8c, 0x6b, 0xa2, 0x14, 0x46,
                    0x7b, 0x76,
                }
            ).PublicKey;
            Transaction<DumbAction> tx =
                TxMarshaler.UnmarshalTransaction<DumbAction>(_marshaledTransaction);

            Assert.Equal(publicKey, tx.PublicKey);
            Assert.Equal(ImmutableHashSet<Address>.Empty, tx.UpdatedAddresses);
            Assert.Equal(new Address(publicKey), tx.Signer);
            Assert.Equal(new DateTimeOffset(2018, 11, 21, 0, 0, 0, TimeSpan.Zero), tx.Timestamp);
            AssertBytesEqual(
                new byte[]
                {
                    0x30, 0x44, 0x02, 0x20, 0x2f, 0x2d, 0xbe, 0x5a, 0x91, 0x65, 0x59, 0xde, 0xdb,
                    0xe8, 0xd8, 0x4f, 0xa9, 0x20, 0xe2, 0x01, 0x29, 0x4d, 0x4f, 0x40, 0xea, 0x1e,
                    0x97, 0x44, 0x1f, 0xbf, 0xa2, 0x5c, 0x8b, 0xd0, 0x0e, 0x23, 0x02, 0x20, 0x3c,
                    0x06, 0x02, 0x1f, 0xb8, 0x3f, 0x67, 0x49, 0x92, 0x3c, 0x07, 0x59, 0x67, 0x96,
                    0xa8, 0x63, 0x04, 0xb0, 0xc3, 0xfe, 0xbb, 0x6c, 0x7a, 0x7b, 0x58, 0x58, 0xe9,
                    0x7d, 0x37, 0x67, 0xe1, 0xe9,
                },
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

            Assert.Throws<DecodingException>(() =>
                TxMarshaler.UnmarshalTransaction<DumbAction>(_marshaledUnsignedTx));
        }

        [Fact]
        public void UnmarshalTransactionWithCustomActions()
        {
            PublicKey publicKey = new PrivateKey(
                new byte[]
                {
                    0xcf, 0x36, 0xec, 0xf9, 0xe4, 0x7c, 0x87, 0x9a, 0x0d, 0xbf,
                    0x46, 0xb2, 0xec, 0xd8, 0x3f, 0xd2, 0x76, 0x18, 0x2a, 0xde,
                    0x02, 0x65, 0x82, 0x5e, 0x3b, 0x8c, 0x6b, 0xa2, 0x14, 0x46,
                    0x7b, 0x76,
                }
            ).PublicKey;
            Transaction<PolymorphicAction<BaseAction>> tx =
                TxMarshaler.UnmarshalTransaction<PolymorphicAction<BaseAction>>(
                    _marshaledTransactionWithCustomActions);

            Assert.Equal(publicKey, tx.PublicKey);
            Assert.Equal(
                ImmutableHashSet.Create(new Address(publicKey)),
                tx.UpdatedAddresses
            );
            Assert.Equal(new Address(publicKey), tx.Signer);
            Assert.Equal(new DateTimeOffset(2018, 11, 21, 0, 0, 0, TimeSpan.Zero), tx.Timestamp);
            AssertBytesEqual(
                new byte[]
                {
                    0x30, 0x44, 0x02, 0x20, 0x4c, 0xf2, 0xd4, 0xd9, 0x22, 0x97, 0xa6, 0x7f, 0xd0,
                    0x47, 0x69, 0xf2, 0x53, 0xe2, 0x0e, 0x62, 0x13, 0xf0, 0x63, 0xb8, 0x14, 0x2f,
                    0xff, 0x4c, 0xb9, 0xe9, 0xc0, 0x47, 0x33, 0xed, 0xbc, 0x16, 0x02, 0x20, 0x0e,
                    0xfe, 0xbb, 0x0e, 0x2a, 0x7b, 0xcf, 0x4d, 0x5c, 0x7a, 0x62, 0x8e, 0xd2, 0xe7,
                    0xa9, 0x1f, 0x44, 0x0a, 0xfa, 0x31, 0x19, 0x7f, 0xf6, 0x16, 0xfb, 0x32, 0xd8,
                    0xba, 0xda, 0xd3, 0xe9, 0xcc,
                },
                tx.Signature
            );
            AssertBytesEqual(
                new TxId(
                    new byte[]
                    {
                        0x2c, 0x7d, 0x15, 0xf4, 0xc1, 0xd5, 0x36, 0xce, 0x4c, 0xa2, 0xa3, 0x59,
                        0xbc, 0xd8, 0x73, 0xa9, 0x4f, 0x3c, 0x65, 0x18, 0x10, 0x9f, 0xfa, 0xbc,
                        0xf8, 0x7e, 0x34, 0x85, 0xf3, 0x63, 0xa5, 0x34,
                    }
                ),
                tx.Id
            );

            Assert.Equal(2, tx.CustomActions.Count);
            Assert.IsType<Attack>(tx.CustomActions[0].InnerAction);

            var targetAddress =
                ((Bencodex.Types.Dictionary)tx.CustomActions[0].InnerAction.PlainValue)
                    .GetValue<Binary>("target_address").ByteArray;
            AssertBytesEqual(
                new Address(publicKey).ByteArray,
                targetAddress
            );
            Assert.Equal(
                Bencodex.Types.Dictionary.Empty
                    .Add("weapon", "wand")
                    .Add("target", "orc")
                    .Add("target_address", new Address(publicKey).ByteArray),
                tx.CustomActions[0].InnerAction.PlainValue
            );
            Assert.IsType<Sleep>(tx.CustomActions[1].InnerAction);
            Assert.Equal(
                Bencodex.Types.Dictionary.Empty
                    .Add("zone_id", 10),
                tx.CustomActions[1].InnerAction.PlainValue
            );
            Assert.Throws<DecodingException>(() =>
                TxMarshaler.UnmarshalTransaction<DumbAction>(
                    _marshaledUnsignedTxWithCustomActions));
        }
    }
}
