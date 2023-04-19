using Libplanet.Blockchain.Renderers;
using Libplanet.Blocks;
using Libplanet.Tests.Common.Action;
using Xunit;

namespace Libplanet.Tests.Blockchain.Renderers
{
    public class AnonymousRendererTest
    {
        private static Block<DumbAction> _genesis =
            TestUtils.ProposeGenesisBlock<DumbAction>(TestUtils.GenesisProposer);

        private static Block<DumbAction> _blockA =
            TestUtils.ProposeNextBlock(_genesis, TestUtils.GenesisProposer);

        private static Block<DumbAction> _blockB =
            TestUtils.ProposeNextBlock(_genesis, TestUtils.GenesisProposer);

        [Fact]
        public void BlockRenderer()
        {
            (Block<DumbAction> Old, Block<DumbAction> New)? record = null;
            var renderer = new AnonymousRenderer<DumbAction>
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
