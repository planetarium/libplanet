using System.Collections.Generic;
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
            var txFixture = new TxFixture();

            Genesis = TestUtils.MineGenesis<BaseAction>();
            Next = TestUtils.MineNext(
                Genesis,
                nonce: new byte[] { 0x02, 0x00, 0x00, 0x00 }
            );
            HasTx = TestUtils.MineNext(
                Next,
                new List<Transaction<BaseAction>>
                {
                    txFixture.TxWithActions,
                },
                new byte[] { 0x02, 0x00, 0x00, 0x00 }
            );
        }

        internal Block<BaseAction> Genesis { get; }

        internal Block<BaseAction> Next { get; }

        internal Block<BaseAction> HasTx { get; }
    }
}
