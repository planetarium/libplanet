using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Text;
using Libplanet.Action;
using Libplanet.Crypto;
using Libplanet.Tx;
using Xunit;

namespace Libplanet.Tests.Tx
{
    public class TransactionTest
    {
        [Fact]
        public void CanMake()
        {
            PrivateKey privateKey = new PrivateKey(
                ByteUtil.ParseHex(
                    "cf36ecf9e47c879a0dbf46b2ecd83fd276182ade0265825e3b8c6ba214467b76")
            );
            var recipient = Address.FromPublicKey(privateKey.PublicKey);
            var timestamp = new DateTime(2018, 11, 21);
            Transaction<Action> tx = Transaction<Action>.Make(
                privateKey,
                recipient,
                new List<Action>(),
                timestamp
            );

            Assert.Equal(
                Address.FromPublicKey(privateKey.PublicKey),
                tx.Sender
            );
            Assert.Equal(recipient, tx.Recipient);
            Assert.Equal(privateKey.PublicKey, tx.PublicKey);
            Assert.Equal(timestamp, tx.Timestamp);
            Assert.Equal(
                ByteUtil.ParseHex(
                    "3045022100d3009449764f77e5e3de701451f16e6555f0ab7d1fcb1533f1c8977a1af099100220254b158567b4b285d2a31bf3a922596ec8deeffc32e4f2d5e5982f4030478f4d"
                ),
                tx.Signature
            );
            Assert.Equal(
                new TxId(ByteUtil.ParseHex(
                    "4e3173d589db3378737ea7d90df318618728548432854a351545b756ae05c59b"
                )),
                tx.Id
            );
        }

        [Fact]
        public void CanSerialize()
        {
            PrivateKey privateKey = new PrivateKey(
                ByteUtil.ParseHex(
                    "cf36ecf9e47c879a0dbf46b2ecd83fd276182ade0265825e3b8c6ba214467b76"
                )
            );
            var recipient = Address.FromPublicKey(privateKey.PublicKey);
            var timestamp = new DateTime(2018, 11, 21);
            Transaction<Action> tx = Transaction<Action>.Make(
                privateKey,
                recipient,
                new List<Action>(),
                timestamp
            );
            byte[] expected = ByteUtil.ParseHex(
                "64373a616374696f6e736c6531303a7075626c69635f6b657936353a0446115b0131baccf94a5856ede871295f6f3d352e6847cda9c03e89fe09f732808711ec97af6e341f110a326da1bdb81f5ae3badf76a90b22c8c491aed3aaa296393a726563697069656e7432303ac2a86014073d662a4a9bfcf9cb54263dfa4f5cbc363a73656e64657232303ac2a86014073d662a4a9bfcf9cb54263dfa4f5cbc393a7369676e617475726537313a3045022100d3009449764f77e5e3de701451f16e6555f0ab7d1fcb1533f1c8977a1af099100220254b158567b4b285d2a31bf3a922596ec8deeffc32e4f2d5e5982f4030478f4d393a74696d657374616d7032373a323031382d31312d32315430303a30303a30302e3030303030305a65"
            );

            Assert.Equal(expected, tx.Bencode(true));
        }

        [Fact]
        public void CanSerializeWithActions()
        {
            PrivateKey privateKey = new PrivateKey(
                ByteUtil.ParseHex(
                    "cf36ecf9e47c879a0dbf46b2ecd83fd276182ade0265825e3b8c6ba214467b76"
                )
            );
            var recipient = Address.FromPublicKey(privateKey.PublicKey);
            var timestamp = new DateTime(2018, 11, 21);
            var actions = new List<Action>
            {
                new Attack { Weapon = "wand", Target = "orc" },
                new Sleep { ZoneId = 10 }
            };

            Transaction<Action> tx = Transaction<Action>.Make(
                privateKey,
                recipient,
                actions,
                timestamp
            );

            byte[] expected = ByteUtil.ParseHex(
                "64373a616374696f6e736c64373a747970655f6964363a61747461636b363a76616c75657364363a746172676574333a6f7263363a776561706f6e343a77616e64656564373a747970655f6964353a736c656570363a76616c75657364373a7a6f6e655f69646931306565656531303a7075626c69635f6b657936353a0446115b0131baccf94a5856ede871295f6f3d352e6847cda9c03e89fe09f732808711ec97af6e341f110a326da1bdb81f5ae3badf76a90b22c8c491aed3aaa296393a726563697069656e7432303ac2a86014073d662a4a9bfcf9cb54263dfa4f5cbc363a73656e64657232303ac2a86014073d662a4a9bfcf9cb54263dfa4f5cbc393a7369676e617475726537303a304402203a3ff2e174c64e91fb98fd8ddd7b4fa85fef7ec43483ed4085b213fca9ae73e80220401cae21a65451280e7bb389074231fe4b78861ab47417fe9a5ae0dbb2c0a7d4393a74696d657374616d7032373a323031382d31312d32315430303a30303a30302e3030303030305a65"
            );

            Assert.Equal(expected, tx.Bencode(true));
        }

        [Fact]
        public void CanBeDeserialized()
        {
            byte[] bytes = ByteUtil.ParseHex(
                "64373a616374696f6e736c6531303a7075626c69635f6b657936353a0446115b0131baccf94a5856ede871295f6f3d352e6847cda9c03e89fe09f732808711ec97af6e341f110a326da1bdb81f5ae3badf76a90b22c8c491aed3aaa296393a726563697069656e7432303ac2a86014073d662a4a9bfcf9cb54263dfa4f5cbc363a73656e64657232303ac2a86014073d662a4a9bfcf9cb54263dfa4f5cbc393a7369676e617475726537313a3045022100d3009449764f77e5e3de701451f16e6555f0ab7d1fcb1533f1c8977a1af099100220254b158567b4b285d2a31bf3a922596ec8deeffc32e4f2d5e5982f4030478f4d393a74696d657374616d7032373a323031382d31312d32315430303a30303a30302e3030303030305a65"
            );
            PublicKey publicKey = new PrivateKey(
                ByteUtil.ParseHex(
                    "cf36ecf9e47c879a0dbf46b2ecd83fd276182ade0265825e3b8c6ba214467b76"
                )
            ).PublicKey;
            Transaction<Action> tx = Transaction<Action>.FromBencoded(bytes);

            Assert.Equal(publicKey, tx.PublicKey);
            Assert.Equal(Address.FromPublicKey(publicKey), tx.Recipient);
            Assert.Equal(Address.FromPublicKey(publicKey), tx.Sender);
            Assert.Equal(new DateTime(2018, 11, 21), tx.Timestamp);
            Assert.Equal(
                ByteUtil.ParseHex(
                    "3045022100d3009449764f77e5e3de701451f16e6555f0ab7d1fcb1533f1c8977a1af099100220254b158567b4b285d2a31bf3a922596ec8deeffc32e4f2d5e5982f4030478f4d"
                ),
                tx.Signature
            );
            Assert.Equal(
                new TxId(ByteUtil.ParseHex(
                    "4e3173d589db3378737ea7d90df318618728548432854a351545b756ae05c59b"
                )),
                tx.Id
            );
        }

        [Fact]
        public void CanBeDeserializedWithActions()
        {
            byte[] bytes = ByteUtil.ParseHex(
                "64373a616374696f6e736c64373a747970655f6964363a61747461636b363a76616c75657364363a746172676574333a6f7263363a776561706f6e343a77616e64656564373a747970655f6964353a736c656570363a76616c75657364373a7a6f6e655f69646931306565656531303a7075626c69635f6b657936353a0446115b0131baccf94a5856ede871295f6f3d352e6847cda9c03e89fe09f732808711ec97af6e341f110a326da1bdb81f5ae3badf76a90b22c8c491aed3aaa296393a726563697069656e7432303ac2a86014073d662a4a9bfcf9cb54263dfa4f5cbc363a73656e64657232303ac2a86014073d662a4a9bfcf9cb54263dfa4f5cbc393a7369676e617475726537303a304402203a3ff2e174c64e91fb98fd8ddd7b4fa85fef7ec43483ed4085b213fca9ae73e80220401cae21a65451280e7bb389074231fe4b78861ab47417fe9a5ae0dbb2c0a7d4393a74696d657374616d7032373a323031382d31312d32315430303a30303a30302e3030303030305a65");
            PublicKey publicKey = new PrivateKey(
                ByteUtil.ParseHex(
                    "cf36ecf9e47c879a0dbf46b2ecd83fd276182ade0265825e3b8c6ba214467b76"
                )
            ).PublicKey;
            Transaction<Action> tx = Transaction<Action>.FromBencoded(bytes);

            Assert.Equal(publicKey, tx.PublicKey);
            Assert.Equal(Address.FromPublicKey(publicKey), tx.Recipient);
            Assert.Equal(Address.FromPublicKey(publicKey), tx.Sender);
            Assert.Equal(new DateTime(2018, 11, 21), tx.Timestamp);
            Assert.Equal(
                ByteUtil.ParseHex(
                    "304402203a3ff2e174c64e91fb98fd8ddd7b4fa85fef7ec43483ed4085b213fca9ae73e80220401cae21a65451280e7bb389074231fe4b78861ab47417fe9a5ae0dbb2c0a7d4"
                ),
                tx.Signature
            );
            Assert.Equal(
                new TxId(
                    ByteUtil.ParseHex(
                        "2b3ab29860911ea50199fd826288257a5dd2798b01c250badda609928a97fc57"
                    )
                ),
                tx.Id
            );

            Assert.Equal(2, tx.Actions.Count());
            Assert.IsType<Attack>(tx.Actions[0]);
            Assert.Equal(
                new Dictionary<string, object>()
                {
                    { "weapon", "wand" },
                    { "target", "orc" }
                },
                tx.Actions[0].PlainValue
            );
            Assert.IsType<Sleep>(tx.Actions[1]);
            Assert.Equal(
                new Dictionary<string, object>()
                {
                    { "zone_id", 10 }
                },
                tx.Actions[1].PlainValue
            );
        }

        [Fact]
        public void CanValidate()
        {
            PrivateKey privateKey = new PrivateKey(
                ByteUtil.ParseHex(
                    "cf36ecf9e47c879a0dbf46b2ecd83fd276182ade0265825e3b8c6ba214467b76"
                )
            );
            var recipient = Address.FromPublicKey(privateKey.PublicKey);
            var timestamp = new DateTime(2018, 11, 21);
            Transaction<Action> tx = Transaction<Action>.Make(
                privateKey,
                recipient,
                new List<Action>(),
                timestamp
            );

            tx.Validate();
        }

        [Fact]
        public void CanDetectBadSignature()
        {
            Transaction<Action> tx = Transaction<Action>.FromBencoded(
                ByteUtil.ParseHex(
                    "64373a616374696f6e736c6531303a7075626c69635f6b657936353a0446115b0131baccf94a5856ede871295f6f3d352e6847cda9c03e89fe09f732808711ec97af6e341f110a326da1bdb81f5ae3badf76a90b22c8c491aed3aaa296393a726563697069656e7432303ac2a86014073d662a4a9bfcf9cb54263dfa4f5cbc363a73656e64657232303ac2a86014073d662a4a9bfcf9cb54263dfa4f5cbc393a7369676e617475726537313a3045022100d3009449764f77e5e3de701451f16e6555f0ab7d1fcb1533f1c8977b1af099100220254b158567b4b285d2a31bf3a922596ec8deeffc32e4f2d5e5982f4030478f4d393a74696d657374616d7032373a323031382d31312d32315430303a30303a30302e3030303030305a65"
                )
            );

            Assert.Throws<InvalidTxSignatureException>(() => { tx.Validate(); });
        }

        [Fact]
        public void CanDetectAddressMismatch()
        {
            Transaction<Action> tx = Transaction<Action>.FromBencoded(
                ByteUtil.ParseHex(
                    "64373a616374696f6e736c6531303a7075626c69635f6b657936353a0446115b0131baccf94a5856ede871295f6f3d352e6847cda9c03e89fe09f732808711ec97af6e341f110a326da1bdb81f5ae3badf76a90b22c8c491aed3aaa296393a726563697069656e7432303ac2a86014073d662a4a9bfcf9cb54263dfa4f5cbc363a73656e64657232303a45a22187e2d8850bb357886958bc3e8560929c01393a7369676e617475726537313a304502210091d1af6ecff9ecf8c96024135f19d4692cfcdaa60524dd93dc99eb636b7fc229022023714e9f7ccbecb48fd989741a3bee9f92db9e3dff3f6236ffe87a43510d0cb6393a74696d657374616d7032373a323031382d31312d32315430303a30303a30302e3030303030305a65"
                )
            );

            Assert.Throws<InvalidTxPublicKeyException>(() => { tx.Validate(); });
        }

        [Fact]
        public void CanConvertToRaw()
        {
            PrivateKey privateKey = new PrivateKey(
                ByteUtil.ParseHex(
                    "cf36ecf9e47c879a0dbf46b2ecd83fd276182ade0265825e3b8c6ba214467b76"
                )
            );
            var recipient = Address.FromPublicKey(privateKey.PublicKey);
            var timestamp = new DateTime(2018, 11, 21);
            Transaction<Action> tx = Transaction<Action>.Make(
                privateKey,
                recipient,
                new List<Action>(),
                timestamp
            );

            var exepctedWithoutSign = new RawTransaction(
                sender: ByteUtil.ParseHex("c2a86014073d662a4a9bfcf9cb54263dfa4f5cbc"),
                recipient: ByteUtil.ParseHex("c2a86014073d662a4a9bfcf9cb54263dfa4f5cbc"),
                publicKey: ByteUtil.ParseHex("0446115b0131baccf94a5856ede871295f6f3d352e6847cda9c03e89fe09f732808711ec97af6e341f110a326da1bdb81f5ae3badf76a90b22c8c491aed3aaa296"),
                timestamp: "2018-11-21T00:00:00.000000Z",
                actions: new List<IDictionary<string, object>>()
            );

            Assert.Equal(exepctedWithoutSign, tx.ToRawTransaction(false));

            var exepctedWithSign = exepctedWithoutSign.AddSignature(
                ByteUtil.ParseHex("3045022100d3009449764f77e5e3de701451f16e6555f0ab7d1fcb1533f1c8977a1af099100220254b158567b4b285d2a31bf3a922596ec8deeffc32e4f2d5e5982f4030478f4d")
            );
            Assert.Equal(exepctedWithSign, tx.ToRawTransaction(true));
        }

        [Fact]
        public void CanConvertFromRawTransaction()
        {
            RawTransaction rawTx = new RawTransaction(
                sender: ByteUtil.ParseHex("c2a86014073d662a4a9bfcf9cb54263dfa4f5cbc"),
                recipient: ByteUtil.ParseHex("c2a86014073d662a4a9bfcf9cb54263dfa4f5cbc"),
                publicKey: ByteUtil.ParseHex("0446115b0131baccf94a5856ede871295f6f3d352e6847cda9c03e89fe09f732808711ec97af6e341f110a326da1bdb81f5ae3badf76a90b22c8c491aed3aaa296"),
                timestamp: "2018-11-21T00:00:00.000000Z",
                actions: new List<IDictionary<string, object>>(),
                signature: ByteUtil.ParseHex("3045022100d3009449764f77e5e3de701451f16e6555f0ab7d1fcb1533f1c8977a1af099100220254b158567b4b285d2a31bf3a922596ec8deeffc32e4f2d5e5982f4030478f4d")
            );

            var tx = new Transaction<Action>(rawTx);
            tx.Validate();
        }
    }

#pragma warning disable SA1402 // File may only contain a single class
    internal abstract class Action : IAction
    {
        public abstract IImmutableDictionary<string, object> PlainValue { get; }

        public AddressStateMap Execute(Address sender, Address recipient, AddressStateMap requestedStates)
        {
            throw new NotImplementedException();
        }

        public abstract void LoadPlainValue(
            IImmutableDictionary<string, object> plainValue);

        public ISet<Address> RequestStates(Address sender, Address recipient)
        {
            throw new NotImplementedException();
        }
    }

    [ActionType("attack")]
    internal class Attack : Action
    {
        public override IImmutableDictionary<string, object> PlainValue =>
            new Dictionary<string, object>()
            {
                { "weapon", Weapon },
                { "target", Target },
            }.ToImmutableDictionary();

        public string Weapon { get; set; }

        public string Target { get; set; }

        public override void LoadPlainValue(
            IImmutableDictionary<string, object> plainValue)
        {
            Weapon = Encoding.UTF8.GetString((byte[])plainValue["weapon"]);
            Target = Encoding.UTF8.GetString((byte[])plainValue["target"]);
        }
    }

    [ActionType("sleep")]
    internal class Sleep : Action
    {
        public int ZoneId { get; set; }

        public override IImmutableDictionary<string, object> PlainValue =>
            new Dictionary<string, object>()
            {
                { "zone_id", ZoneId },
            }.ToImmutableDictionary();

        public override void LoadPlainValue(
            IImmutableDictionary<string, object> plainValue)
        {
            ZoneId = Convert.ToInt32(plainValue["zone_id"]);
        }
    }
#pragma warning restore SA1402 // File may only contain a single class
}
