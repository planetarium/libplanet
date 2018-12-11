using Libplanet.Blocks;

namespace Libplanet.Tests.Blocks
{
    public class BlockFixture
    {
        public BlockFixture()
        {
            Genesis = TestUtils.MineGenesis<Action>();
            Next = TestUtils.MineNext(Genesis);
        }

        internal Block<Action> Genesis { get; }

        internal Block<Action> Next { get; }
    }
}
