using Libplanet.Blocks;
using Libplanet.Tests.Fixtures;
using Xunit;
using static Libplanet.Tests.TestUtils;

namespace Libplanet.Tests.Blocks
{
    public class BlockContentExtensionsTest : BlockContentFixture
    {
        [Fact]
        public void Copy()
        {
            AssertBlockContentsEqual(Genesis, Genesis.Copy());
            AssertBlockContentsEqual(Block1, Block1.Copy());
            AssertBlockContentsEqual(BlockPv0, BlockPv0.Copy());
        }
    }
}
