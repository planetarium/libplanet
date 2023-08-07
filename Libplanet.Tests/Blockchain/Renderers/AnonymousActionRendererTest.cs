using System;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Action.State;
using Libplanet.Action.Tests.Common;
using Libplanet.Action.Tests.Mocks;
using Libplanet.Blockchain.Renderers;
using Libplanet.Types.Blocks;
using Xunit;

namespace Libplanet.Tests.Blockchain.Renderers
{
    public class AnonymousActionRendererTest
    {
        private static IValue _action = new DumbAction().PlainValue;

        private static IWorld _world =
            World.Create(new MockWorldState());

        private static IActionContext _actionContext =
            new ActionContext(
                default,
                default,
                default,
                Block.CurrentProtocolVersion,
                default,
                _world,
                default,
                0);

        private static Exception _exception = new Exception();

        private static Block _genesis =
            TestUtils.ProposeGenesisBlock(TestUtils.GenesisProposer);

        private static Block _blockA =
            TestUtils.ProposeNextBlock(_genesis, TestUtils.GenesisProposer);

        private static Block _blockB =
            TestUtils.ProposeNextBlock(_genesis, TestUtils.GenesisProposer);

        [Fact]
        public void ActionRenderer()
        {
            (IValue, IActionContext, IWorld)? record = null;
            var renderer = new AnonymousActionRenderer
            {
                ActionRenderer = (action, context, nextStates) =>
                    record = (action, context, nextStates),
            };

            renderer.RenderActionError(_action, _actionContext, _exception);
            Assert.Null(record);
            renderer.RenderBlock(_genesis, _blockA);
            Assert.Null(record);

            renderer.RenderAction(_action, _actionContext, _world);
            Assert.NotNull(record);
            Assert.Same(_action, record?.Item1);
            Assert.Same(_actionContext, record?.Item2);
            Assert.Same(_world, record?.Item3);
        }

        [Fact]
        public void ActionErrorRenderer()
        {
            (IValue, IActionContext, Exception)? record = null;
            var renderer = new AnonymousActionRenderer
            {
                ActionErrorRenderer = (action, context, exception) =>
                    record = (action, context, exception),
            };

            renderer.RenderAction(_action, _actionContext, _world);
            Assert.Null(record);
            renderer.RenderBlock(_genesis, _blockA);
            Assert.Null(record);

            renderer.RenderActionError(_action, _actionContext, _exception);
            Assert.NotNull(record);
            Assert.Same(_action, record?.Item1);
            Assert.Same(_actionContext, record?.Item2);
            Assert.Same(_exception, record?.Item3);
        }

        [Fact]
        public void BlockRenderer()
        {
            (Block Old, Block New)? record = null;
            var renderer = new AnonymousActionRenderer
            {
                BlockRenderer = (oldTip, newTip) => record = (oldTip, newTip),
            };

            renderer.RenderAction(_action, _actionContext, _world);
            Assert.Null(record);
            renderer.RenderActionError(_action, _actionContext, _exception);
            Assert.Null(record);

            renderer.RenderBlock(_genesis, _blockA);
            Assert.NotNull(record);
            Assert.Same(_genesis, record?.Old);
            Assert.Same(_blockA, record?.New);
        }
    }
}
