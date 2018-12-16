using Libplanet.Blocks;
using Libplanet.Tests.Common.Action;

namespace Libplanet.Tests.Blocks
{
    public class BlockFixture
    {
        public BlockFixture()
        {
            Genesis = TestUtils.MineGenesis<BaseAction>();
            Next = TestUtils.MineNext(Genesis);
        }

        internal Block<BaseAction> Genesis { get; }

        internal Block<BaseAction> Next { get; }
    }
}
