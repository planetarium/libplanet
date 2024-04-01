using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using Bencodex;
using Bencodex.Types;
using Libplanet.Action.Loader;
using Libplanet.Action.Tests.Common;
using Libplanet.Common;
using Libplanet.Crypto;
using Libplanet.Types.Tx;
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
                TxMarshaler.UnmarshalTxInvoice(_marshaledTxInvoice),
                _fx.Tx);
            Assert.Equal<ITxInvoice>(
                TxMarshaler.UnmarshalTxInvoice(_marshaledTxInvoiceWithCustomActions),
                _fx.TxWithActions);
        }

        [Fact]
        public void UnmarshalTxInvoice_PreserveOrderOfUpdatedAddresses()
        {
            Bencodex.Types.Dictionary marshaledInvoiceA = _marshaledTxInvoice.SetItem(
                new byte[] { 0x75 },
                Bencodex.Types.List.Empty
                    .Add(ByteUtil.ParseHex("0000000000000000000000000000000000000000"))
                    .Add(ByteUtil.ParseHex("ffffffffffffffffffffffffffffffffffffffff")));
            Bencodex.Types.Dictionary marshaledInvoiceB = _marshaledTxInvoice.SetItem(
                new byte[] { 0x75 },
                Bencodex.Types.List.Empty
                    .Add(ByteUtil.ParseHex("ffffffffffffffffffffffffffffffffffffffff"))
                    .Add(ByteUtil.ParseHex("0000000000000000000000000000000000000000")));
            ITxInvoice invoiceA = TxMarshaler.UnmarshalTxInvoice(marshaledInvoiceA);
            ITxInvoice invoiceB = TxMarshaler.UnmarshalTxInvoice(marshaledInvoiceB);
            Assert.Equal<ITxInvoice>(invoiceA, invoiceB);
            Assert.Equal<IEnumerable<Address>>(
                new[] { default(Address), new Address("ffffffffffffffffffffffffffffffffffffffff") },
                invoiceA.UpdatedAddresses
            );
            Assert.Equal<IEnumerable<Address>>(
                new[] { new Address("ffffffffffffffffffffffffffffffffffffffff"), default(Address) },
                invoiceB.UpdatedAddresses
            );
            AssertBencodexEqual(marshaledInvoiceA, invoiceA.MarshalTxInvoice());
            AssertBencodexEqual(marshaledInvoiceB, invoiceB.MarshalTxInvoice());
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
                TxMarshaler.UnmarshalUnsignedTx(_marshaledUnsignedTx),
                _fx.Tx);
            Assert.Equal<IUnsignedTx>(
                TxMarshaler.UnmarshalUnsignedTx(
                    _marshaledUnsignedTxWithCustomActions),
                _fx.TxWithActions);
        }

        [Fact]
        public void UnmarshalTransactionSignature()
        {
            AssertBytesEqual(
                "304402202f2dbe5a916559dedbe8d84fa920e201294d4f40ea1e97441fbfa25c8bd00e" +
                "2302203c06021fb83f6749923c07596796a86304b0c3febb6c7a7b5858e97d3767e1e9",
                Assert.IsType<ImmutableArray<byte>>(
                    TxMarshaler.UnmarshalTransactionSignature(_marshaledTransaction)));

            Assert.Null(TxMarshaler.UnmarshalTransactionSignature(_marshaledUnsignedTx));
        }

        [Fact]
        public void UnmarshalTransaction()
        {
            PublicKey publicKey = new PrivateKey(ByteUtil.ParseHex(
                "cf36ecf9e47c879a0dbf46b2ecd83fd276182ade0265825e3b8c6ba214467b76")).PublicKey;
            Transaction tx =
                TxMarshaler.UnmarshalTransaction(_marshaledTransaction);

            Assert.Equal(publicKey, tx.PublicKey);
            Assert.Equal(ImmutableHashSet<Address>.Empty, tx.UpdatedAddresses);
            Assert.Equal(new Address(publicKey), tx.Signer);
            Assert.Equal(new DateTimeOffset(2018, 11, 21, 0, 0, 0, TimeSpan.Zero), tx.Timestamp);
            AssertBytesEqual(
                "304402202f2dbe5a916559dedbe8d84fa920e201294d4f40ea1e97441fbfa25c8bd00e" +
                "2302203c06021fb83f6749923c07596796a86304b0c3febb6c7a7b5858e97d3767e1e9",
                tx.Signature
            );
            AssertBytesEqual(
                new TxId(ByteUtil.ParseHex(
                    "b069fde2538853be81b3eaacc23855420e03e5626f757fa19b3792601a948881")),
                tx.Id
            );

            Assert.Throws<DecodingException>(() =>
                TxMarshaler.UnmarshalTransaction(_marshaledUnsignedTx));
        }

        [Fact]
        public void UnmarshalTransactionWithCustomActions()
        {
            PublicKey publicKey = new PrivateKey(ByteUtil.ParseHex(
                "cf36ecf9e47c879a0dbf46b2ecd83fd276182ade0265825e3b8c6ba214467b76")).PublicKey;
            Transaction tx =
                TxMarshaler.UnmarshalTransaction(
                    _marshaledTransactionWithCustomActions);

            Assert.Equal(publicKey, tx.PublicKey);
            Assert.Equal(
                ImmutableHashSet.Create(new Address(publicKey)),
                tx.UpdatedAddresses
            );
            Assert.Equal(new Address(publicKey), tx.Signer);
            Assert.Equal(new DateTimeOffset(2018, 11, 21, 0, 0, 0, TimeSpan.Zero), tx.Timestamp);
            AssertBytesEqual(
                "304402204cf2d4d92297a67fd04769f253e20e6213f063b8142fff4cb9e9c04733edbc" +
                "1602200efebb0e2a7bcf4d5c7a628ed2e7a91f440afa31197ff616fb32d8badad3e9cc",
                tx.Signature
            );
            AssertBytesEqual(
                new TxId(ByteUtil.ParseHex(
                    "2c7d15f4c1d536ce4ca2a359bcd873a94f3c6518109ffabcf87e3485f363a534")),
                tx.Id
            );

            Assert.Equal(2, tx.Actions.Count);

            var actionLoader = TypedActionLoader.Create(
                typeof(BaseAction).Assembly, typeof(BaseAction));
            var action0 = actionLoader.LoadAction(0, tx.Actions[0]);
            Assert.IsType<Attack>(action0);
            var targetAddress =
                ((Binary)((Dictionary)((Dictionary)action0.PlainValue)["values"])["target_address"])
                    .ByteArray;
            AssertBytesEqual(
                new Address(publicKey).ByteArray,
                targetAddress
            );
            Assert.Equal(
                Dictionary.Empty
                    .Add("type_id", "attack")
                    .Add("values", Dictionary.Empty
                        .Add("weapon", "wand")
                        .Add("target", "orc")
                        .Add("target_address", new Address(publicKey).Bencoded)),
                action0.PlainValue
            );

            var action1 = actionLoader.LoadAction(0, tx.Actions[1]);
            Assert.IsType<Sleep>(action1);
            Assert.Equal(
                Dictionary.Empty
                    .Add("type_id", "sleep")
                    .Add("values", Dictionary.Empty.Add("zone_id", 10)),
                action1.PlainValue
            );
            Assert.Throws<DecodingException>(() =>
                TxMarshaler.UnmarshalTransaction(
                    _marshaledUnsignedTxWithCustomActions));
        }
    }
}
