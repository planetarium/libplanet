using Libplanet.Blockchain.Renderers;
using Libplanet.Types.Blocks;
using Xunit;

namespace Libplanet.Tests.Blockchain.Renderers
{
    public class AnonymousRendererTest
    {
        private static Block _genesis =
            TestUtils.ProposeGenesisBlock(TestUtils.GenesisProposer);

        private static Block _blockA =
            TestUtils.ProposeNextBlock(_genesis, TestUtils.GenesisProposer);

        private static Block _blockB =
            TestUtils.ProposeNextBlock(_genesis, TestUtils.GenesisProposer);

        [Fact]
        public void BlockRenderer()
        {
            (Block Old, Block New)? record = null;
            var renderer = new AnonymousRenderer
            {
                BlockRenderer = (oldTip, newTip) => record = (oldTip, newTip),
            };

            renderer.RenderBlock(_genesis, _blockA);
            Assert.NotNull(record);
            Assert.Same(_genesis, record?.Old);
            Assert.Same(_blockA, record?.New);
        }
    }
}
