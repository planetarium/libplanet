using System;
using System.Collections.Generic;
using Libplanet.Crypto;
using Libplanet.Tests.Common.Action;
using Libplanet.Tx;

namespace Libplanet.Tests.Tx
{
    public class TxFixture
    {
        public TxFixture()
        {
            var privateKey = new PrivateKey(
                ByteUtil.ParseHex(
                    "cf36ecf9e47c879a0dbf46b2ecd83fd276182ade0265825e3b8c6ba214467b76"));
            var recipient = new Address(privateKey.PublicKey);
            var timestamp = new DateTimeOffset(2018, 11, 21, 0, 0, 0, TimeSpan.Zero);

            Tx = Transaction<BaseAction>.Make(
                privateKey,
                recipient,
                new List<BaseAction>(),
                timestamp
            );
            TxWithActions = Transaction<BaseAction>.Make(
                privateKey,
                recipient,
                new List<BaseAction>
                {
                    new Attack
                    {
                        Weapon = "wand",
                        Target = "orc",
                    },
                    new Sleep
                    {
                        ZoneId = 10,
                    },
                },
                timestamp
            );
        }

        public Transaction<BaseAction> Tx { get; }

        public Transaction<BaseAction> TxWithActions { get; }
    }
}
