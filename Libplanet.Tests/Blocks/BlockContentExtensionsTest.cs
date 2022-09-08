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
            AssertBlockContentsEqual(GenesisContent, GenesisContent.Copy());
            AssertBlockContentsEqual(Block1Content, Block1Content.Copy());
            AssertBlockContentsEqual(GenesisContentPv0, GenesisContentPv0.Copy());
        }
    }
}
