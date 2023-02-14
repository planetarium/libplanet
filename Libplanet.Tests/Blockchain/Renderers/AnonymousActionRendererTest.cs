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

        private static Block<DumbAction> _genesis =
            TestUtils.MineGenesisBlock<DumbAction>(TestUtils.GenesisMiner);

        private static Block<DumbAction> _blockA =
            TestUtils.MineNextBlock(_genesis, TestUtils.GenesisMiner);

        private static Block<DumbAction> _blockB =
            TestUtils.MineNextBlock(_genesis, TestUtils.GenesisMiner);

        [Fact]
        public void ActionRenderer()
        {
            (IAction, IActionContext, IAccountStateDelta)? record = null;
            var renderer = new AnonymousActionRenderer<DumbAction>
            {
                ActionRenderer = (action, context, nextStates) =>
                    record = (action, context, nextStates),
            };

            renderer.UnrenderAction(_action, _actionContext, _stateDelta);
            Assert.Null(record);
            renderer.RenderActionError(_action, _actionContext, _exception);
            Assert.Null(record);
            renderer.UnrenderActionError(_action, _actionContext, _exception);
            Assert.Null(record);
            renderer.RenderBlock(_genesis, _blockA);
            Assert.Null(record);
            renderer.RenderReorg(_blockA, _blockB, _genesis);
            Assert.Null(record);
            renderer.RenderReorgEnd(_blockA, _blockB, _genesis);
            Assert.Null(record);

            renderer.RenderAction(_action, _actionContext, _stateDelta);
            Assert.NotNull(record);
            Assert.Same(_action, record?.Item1);
            Assert.Same(_actionContext, record?.Item2);
            Assert.Same(_stateDelta, record?.Item3);
        }

        [Fact]
        public void ActionUnrenderer()
        {
            (IAction, IActionContext, IAccountStateDelta)? record = null;
            var renderer = new AnonymousActionRenderer<DumbAction>
            {
                ActionUnrenderer = (action, context, nextStates) =>
                    record = (action, context, nextStates),
            };

            renderer.RenderAction(_action, _actionContext, _stateDelta);
            Assert.Null(record);
            renderer.RenderActionError(_action, _actionContext, _exception);
            Assert.Null(record);
            renderer.UnrenderActionError(_action, _actionContext, _exception);
            Assert.Null(record);
            renderer.RenderBlock(_genesis, _blockA);
            Assert.Null(record);
            renderer.RenderReorg(_blockA, _blockB, _genesis);
            Assert.Null(record);
            renderer.RenderReorgEnd(_blockA, _blockB, _genesis);
            Assert.Null(record);

            renderer.UnrenderAction(_action, _actionContext, _stateDelta);
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
            renderer.UnrenderAction(_action, _actionContext, _stateDelta);
            Assert.Null(record);
            renderer.UnrenderActionError(_action, _actionContext, _exception);
            Assert.Null(record);
            renderer.RenderBlock(_genesis, _blockA);
            Assert.Null(record);
            renderer.RenderReorg(_blockA, _blockB, _genesis);
            Assert.Null(record);
            renderer.RenderReorgEnd(_blockA, _blockB, _genesis);
            Assert.Null(record);

            renderer.RenderActionError(_action, _actionContext, _exception);
            Assert.NotNull(record);
            Assert.Same(_action, record?.Item1);
            Assert.Same(_actionContext, record?.Item2);
            Assert.Same(_exception, record?.Item3);
        }

        [Fact]
        public void ActionErrorUnrenderer()
        {
            (IAction, IActionContext, Exception)? record = null;
            var renderer = new AnonymousActionRenderer<DumbAction>
            {
                ActionErrorUnrenderer = (action, context, exception) =>
                    record = (action, context, exception),
            };

            renderer.RenderAction(_action, _actionContext, _stateDelta);
            Assert.Null(record);
            renderer.UnrenderAction(_action, _actionContext, _stateDelta);
            Assert.Null(record);
            renderer.RenderActionError(_action, _actionContext, _exception);
            Assert.Null(record);
            renderer.RenderBlock(_genesis, _blockA);
            Assert.Null(record);
            renderer.RenderReorg(_blockA, _blockB, _genesis);
            Assert.Null(record);
            renderer.RenderReorgEnd(_blockA, _blockB, _genesis);
            Assert.Null(record);

            renderer.UnrenderActionError(_action, _actionContext, _exception);
            Assert.NotNull(record);
            Assert.Same(_action, record?.Item1);
            Assert.Same(_actionContext, record?.Item2);
            Assert.Same(_exception, record?.Item3);
        }

        [Fact]
        public void BlockRenderer()
        {
            (Block<DumbAction> Old, Block<DumbAction> New)? record = null;
            var renderer = new AnonymousActionRenderer<DumbAction>
            {
                BlockRenderer = (oldTip, newTip) => record = (oldTip, newTip),
            };

            renderer.RenderAction(_action, _actionContext, _stateDelta);
            Assert.Null(record);
            renderer.UnrenderAction(_action, _actionContext, _stateDelta);
            Assert.Null(record);
            renderer.RenderActionError(_action, _actionContext, _exception);
            Assert.Null(record);
            renderer.UnrenderActionError(_action, _actionContext, _exception);
            Assert.Null(record);
            renderer.RenderReorg(_blockA, _blockB, _genesis);
            Assert.Null(record);
            renderer.RenderReorgEnd(_blockA, _blockB, _genesis);
            Assert.Null(record);

            renderer.RenderBlock(_genesis, _blockA);
            Assert.NotNull(record);
            Assert.Same(_genesis, record?.Old);
            Assert.Same(_blockA, record?.New);
        }

        [Fact]
        public void BlockReorg()
        {
            (Block<DumbAction> Old, Block<DumbAction> New, Block<DumbAction> Bp)? record = null;
            var renderer = new AnonymousActionRenderer<DumbAction>
            {
                ReorgRenderer = (oldTip, newTip, bp) => record = (oldTip, newTip, bp),
            };

            renderer.RenderAction(_action, _actionContext, _stateDelta);
            Assert.Null(record);
            renderer.UnrenderAction(_action, _actionContext, _stateDelta);
            Assert.Null(record);
            renderer.RenderActionError(_action, _actionContext, _exception);
            Assert.Null(record);
            renderer.UnrenderActionError(_action, _actionContext, _exception);
            Assert.Null(record);
            renderer.RenderBlock(_genesis, _blockA);
            Assert.Null(record);
            renderer.RenderReorgEnd(_blockA, _blockB, _genesis);
            Assert.Null(record);

            renderer.RenderReorg(_blockA, _blockB, _genesis);
            Assert.NotNull(record);
            Assert.Same(_blockA, record?.Old);
            Assert.Same(_blockB, record?.New);
            Assert.Same(_genesis, record?.Bp);
        }

        [Fact]
        public void BlockReorgEnd()
        {
            (Block<DumbAction> Old, Block<DumbAction> New, Block<DumbAction> Bp)? record = null;
            var renderer = new AnonymousActionRenderer<DumbAction>
            {
                ReorgEndRenderer = (oldTip, newTip, bp) => record = (oldTip, newTip, bp),
            };

            renderer.RenderAction(_action, _actionContext, _stateDelta);
            Assert.Null(record);
            renderer.UnrenderAction(_action, _actionContext, _stateDelta);
            Assert.Null(record);
            renderer.RenderActionError(_action, _actionContext, _exception);
            Assert.Null(record);
            renderer.UnrenderActionError(_action, _actionContext, _exception);
            Assert.Null(record);
            renderer.RenderBlock(_genesis, _blockA);
            Assert.Null(record);
            renderer.RenderReorg(_blockA, _blockB, _genesis);
            Assert.Null(record);

            renderer.RenderReorgEnd(_blockA, _blockB, _genesis);
            Assert.NotNull(record);
            Assert.Same(_blockA, record?.Old);
            Assert.Same(_blockB, record?.New);
            Assert.Same(_genesis, record?.Bp);
        }
    }
}
