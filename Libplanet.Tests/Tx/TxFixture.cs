using System;
using Libplanet.Action;
using Libplanet.Crypto;
using Libplanet.Tests.Common.Action;
using Libplanet.Tx;

namespace Libplanet.Tests.Tx
{
    public class TxFixture
    {
        public TxFixture()
        {
            PrivateKey1 = new PrivateKey(
                new byte[]
                {
                    0xcf, 0x36, 0xec, 0xf9, 0xe4, 0x7c, 0x87, 0x9a, 0x0d, 0xbf,
                    0x46, 0xb2, 0xec, 0xd8, 0x3f, 0xd2, 0x76, 0x18, 0x2a, 0xde,
                    0x02, 0x65, 0x82, 0x5e, 0x3b, 0x8c, 0x6b, 0xa2, 0x14, 0x46,
                    0x7b, 0x76,
                }
            );
            PrivateKey2 = new PrivateKey(
                new byte[]
                {
                    0xa8, 0x69, 0xfd, 0xac, 0xed, 0x45, 0x18, 0xd5, 0x36, 0x30,
                    0x25, 0xe5, 0xfa, 0x15, 0x26, 0x10, 0x88, 0x39, 0x78, 0x0e,
                    0xac, 0x98, 0x73, 0x5c, 0x3f, 0x3f, 0x42, 0xec, 0xd3, 0xd2,
                    0x42, 0x46,
                }
            );
            PrivateKey3 = new PrivateKey(
                new byte[]
                {
                    0x92, 0x7e, 0xed, 0x40, 0x7f, 0x15, 0x0f, 0x50, 0xc5, 0x60,
                    0x50, 0x15, 0x54, 0x0d, 0xe7, 0xaa, 0x4d, 0x0e, 0xa3, 0x34,
                    0x31, 0x9b, 0x4e, 0xa8, 0x91, 0xab, 0xcd, 0x02, 0xdb, 0x14,
                    0x9f, 0x5f,
                }
            );
            var recipient = new Address(PrivateKey1.PublicKey);
            var timestamp = new DateTimeOffset(2018, 11, 21, 0, 0, 0, TimeSpan.Zero);

            Tx = Transaction<PolymorphicAction<BaseAction>>.Create(
                PrivateKey1,
                new PolymorphicAction<BaseAction>[0],
                timestamp: timestamp
            );
            PolymorphicAction<BaseAction>[] actions =
            {
                new Attack
                {
                    Weapon = "wand",
                    Target = "orc",
                    TargetAddress = recipient,
                },
                new Sleep
                {
                    ZoneId = 10,
                },
            };
            TxWithActions = Transaction<PolymorphicAction<BaseAction>>.Create(
                PrivateKey1,
                actions,
                timestamp: timestamp
            );
        }

        public PrivateKey PrivateKey1 { get; }

        public PrivateKey PrivateKey2 { get; }

        public PrivateKey PrivateKey3 { get; }

        public PublicKey PublicKey1 => PrivateKey1.PublicKey;

        public PublicKey PublicKey2 => PrivateKey2.PublicKey;

        public PublicKey PublicKey3 => PrivateKey3.PublicKey;

        public Address Address1 => PublicKey1.ToAddress();

        public Address Address2 => PublicKey2.ToAddress();

        public Address Address3 => PublicKey3.ToAddress();

        public Transaction<PolymorphicAction<BaseAction>> Tx { get; }

        public Transaction<PolymorphicAction<BaseAction>> TxWithActions { get; }
    }
}
