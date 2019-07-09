using System.Collections.Generic;
using Libplanet.Action;
using Libplanet.Blocks;
using Libplanet.Tests.Common.Action;
using Libplanet.Tests.Tx;
using Libplanet.Tx;

namespace Libplanet.Tests.Blocks
{
    public class BlockFixture
    {
        public BlockFixture()
        {
            TxFixture = new TxFixture();

            Genesis = TestUtils
                .MineGenesis<PolymorphicAction<BaseAction>, PolymorphicAction<BaseAction>>();
            Next = TestUtils.MineNext(
                Genesis,
                nonce: new byte[] { 0x02, 0x00, 0x00, 0x00 }
            );
            byte[] hasTxNonce =
            {
                0x5c, 0x77, 0x74, 0xc2, 0x39, 0x69, 0x37, 0x51, 0x87, 0xa5,
            };
            HasTx = TestUtils.MineNext(
                Next,
                new List<Transaction<PolymorphicAction<BaseAction>>>
                {
                    TxFixture.TxWithActions,
                },
                hasTxNonce
            );
        }

        internal TxFixture TxFixture { get; }

        internal Block<PolymorphicAction<BaseAction>, PolymorphicAction<BaseAction>> Genesis
        {
            get;
        }

        internal Block<PolymorphicAction<BaseAction>, PolymorphicAction<BaseAction>> Next { get; }

        internal Block<PolymorphicAction<BaseAction>, PolymorphicAction<BaseAction>> HasTx { get; }
    }
}
