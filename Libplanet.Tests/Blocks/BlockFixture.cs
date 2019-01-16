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
            Next = TestUtils.MineNext(Genesis);
            HasTx = TestUtils.MineNext(
                Next, new List<Transaction<BaseAction>>
                {
                    txFixture.TxWithActions,
                });
        }

        internal Block<BaseAction> Genesis { get; }

        internal Block<BaseAction> Next { get; }

        internal Block<BaseAction> HasTx { get; }
    }
}
