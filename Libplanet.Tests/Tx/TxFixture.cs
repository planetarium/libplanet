using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Net.Http.Headers;
using Libplanet.Crypto;
using Libplanet.Tests.Common.Action;
using Libplanet.Tx;

namespace Libplanet.Tests.Tx
{
    public class TxFixture
    {
        public TxFixture()
        {
            PrivateKey = new PrivateKey(
                new byte[]
                {
                    0xcf, 0x36, 0xec, 0xf9, 0xe4, 0x7c, 0x87, 0x9a, 0x0d, 0xbf,
                    0x46, 0xb2, 0xec, 0xd8, 0x3f, 0xd2, 0x76, 0x18, 0x2a, 0xde,
                    0x02, 0x65, 0x82, 0x5e, 0x3b, 0x8c, 0x6b, 0xa2, 0x14, 0x46,
                    0x7b, 0x76,
                }
            );
            var recipient = new Address(PrivateKey.PublicKey);
            var timestamp = new DateTimeOffset(2018, 11, 21, 0, 0, 0, TimeSpan.Zero);

            Tx = Transaction<BaseAction>.Make(
                PrivateKey,
                ImmutableHashSet<Address>.Empty,
                new BaseAction[0],
                timestamp
            );
            BaseAction[] actions =
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
            TxWithActions = Transaction<BaseAction>.Make(
                PrivateKey,
                ImmutableHashSet.Create(recipient),
                actions,
                timestamp
            );
        }

        public PrivateKey PrivateKey { get; }

        public Transaction<BaseAction> Tx { get; }

        public Transaction<BaseAction> TxWithActions { get; }
    }
}
