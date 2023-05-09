using System;
using Libplanet.Action;
using Libplanet.Blockchain.Renderers;
using Libplanet.Blocks;
using Libplanet.Consensus;
using Libplanet.Tests.Common.Action;
using Xunit;

namespace Libplanet.Tests.Blockchain.Renderers
{
    public class AnonymousActionRendererTest
    {
        private static IAction _action = new DumbAction();

        private static IAccountStateDelta _stateDelta =
            new AccountStateDeltaImpl(
                _ => null,
                (_, __) => default,
                _ => default,
                () => new ValidatorSet(),
                default);

        private static IActionContext _actionContext =
            new ActionContext(default, default, default, default, default, _stateDelta, default);

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
            (IAction, IActionContext, IAccountStateDelta)? record = null;
            var renderer = new AnonymousActionRenderer<DumbAction>
            {
                ActionRenderer = (action, context, nextStates) =>
                    record = (action, context, nextStates),
            };

            renderer.RenderActionError(_action, _actionContext, _exception);
            Assert.Null(record);
            renderer.RenderBlock(_genesis, _blockA);
            Assert.Null(record);

            renderer.RenderAction(_action, _actionContext, _stateDelta);
            Assert.NotNull(record);
            Assert.Same(_action, record?.Item1);
            Assert.Same(_actionContext, record?.Item2);
            Assert.Same(_stateDelta, record?.Item3);
        }

        [Fact]
        public void ActionErrorRenderer()
        {
            (IAction, IActionContext, Exception)? record = null;
            var renderer = new AnonymousActionRenderer<DumbAction>
            {
                ActionErrorRenderer = (action, context, exception) =>
                    record = (action, context, exception),
            };

            renderer.RenderAction(_action, _actionContext, _stateDelta);
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
            var renderer = new AnonymousActionRenderer<DumbAction>
            {
                BlockRenderer = (oldTip, newTip) => record = (oldTip, newTip),
            };

            renderer.RenderAction(_action, _actionContext, _stateDelta);
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
