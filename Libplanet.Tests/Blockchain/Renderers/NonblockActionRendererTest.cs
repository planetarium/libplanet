using System;
using System.Collections.Generic;
using System.Threading;
using Libplanet.Action;
using Libplanet.Blockchain.Renderers;
using Libplanet.Blocks;
using Libplanet.Consensus;
using Libplanet.Tests.Common.Action;
using xRetry;
using Xunit;

namespace Libplanet.Tests.Blockchain.Renderers
{
    public class NonblockActionRendererTest
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
            new ActionContext(default, default, default, default, 1, _stateDelta, default);

        private static Exception _exception = new Exception("EXPECTED");

        private static Block<DumbAction> _genesis =
            TestUtils.MineGenesisBlock<DumbAction>(TestUtils.GenesisMiner);

        private static Block<DumbAction> _blockA =
            TestUtils.MineNextBlock(_genesis, TestUtils.GenesisMiner);

        private static Block<DumbAction> _blockB =
            TestUtils.MineNextBlock(_genesis, TestUtils.GenesisMiner);

        [RetryFact]
        public void Test()
        {
            const int sleepSeconds = 1;
            var log = new List<string>();
            var innerRenderer = new AnonymousActionRenderer<DumbAction>()
            {
                BlockRenderer = (Block<DumbAction> oldTip, Block<DumbAction> newTip) =>
                {
                    Thread.Sleep(sleepSeconds * 1000);
                    log.Add($"Block({oldTip.Index}, {newTip.Index})");
                },
                BlockEndRenderer = (Block<DumbAction> oldTip, Block<DumbAction> newTip) =>
                {
                    Thread.Sleep(sleepSeconds * 1000);
                    log.Add($"BlockEnd({oldTip.Index}, {newTip.Index})");
                },
                ReorgRenderer = (
                    Block<DumbAction> oldTip,
                    Block<DumbAction> newTip,
                    Block<DumbAction> branchpoint
                ) =>
                {
                    Thread.Sleep(sleepSeconds * 1000);
                    log.Add($"Reorg({oldTip.Index}, {newTip.Index}, {branchpoint.Index})");
                },
                ReorgEndRenderer = (
                    Block<DumbAction> oldTip,
                    Block<DumbAction> newTip,
                    Block<DumbAction> branchpoint
                ) =>
                {
                    Thread.Sleep(sleepSeconds * 1000);
                    log.Add($"ReorgEnd({oldTip.Index}, {newTip.Index}, {branchpoint.Index})");
                },
                ActionRenderer = (IAction act, IActionContext ctx, IAccountStateDelta delta) =>
                {
                    Thread.Sleep(sleepSeconds * 1000);
                    log.Add($"Action({act.GetType().Name}, {ctx.BlockIndex})");
                },
                ActionErrorRenderer = (IAction act, IActionContext ctx, Exception e) =>
                {
                    Thread.Sleep(sleepSeconds * 1000);
                    log.Add($"ActionError({act.GetType().Name}, {ctx.BlockIndex}, {e.Message})");
                },
                ActionUnrenderer = (IAction act, IActionContext ctx, IAccountStateDelta delta) =>
                {
                    Thread.Sleep(sleepSeconds * 1000);
                    log.Add($"~Action({act.GetType().Name}, {ctx.BlockIndex})");
                },
                ActionErrorUnrenderer = (IAction act, IActionContext ctx, Exception e) =>
                {
                    Thread.Sleep(sleepSeconds * 1000);
                    log.Add($"~ActionError({act.GetType().Name}, {ctx.BlockIndex}, {e.Message})");
                },
            };
            using (var renderer = new NonblockActionRenderer<DumbAction>(
                innerRenderer, 8, NonblockActionRenderer<DumbAction>.FullMode.DropNewest))
            {
                DateTimeOffset start = DateTimeOffset.UtcNow;
                renderer.RenderReorg(_blockA, _blockB, _genesis);
                Assert.Empty(log);
                renderer.UnrenderAction(_action, _actionContext, _stateDelta);
                Assert.Empty(log);
                renderer.UnrenderActionError(_action, _actionContext, _exception);
                Assert.Empty(log);
                renderer.RenderBlock(_blockA, _blockB);
                renderer.RenderActionError(_action, _actionContext, _exception);
                renderer.RenderAction(_action, _actionContext, _stateDelta);
                renderer.RenderBlockEnd(_blockA, _blockB);
                renderer.RenderReorgEnd(_blockA, _blockB, _genesis);
                DateTimeOffset end = DateTimeOffset.UtcNow;
                TimeSpan elapsed = end - start;
                Assert.True(
                    elapsed < TimeSpan.FromSeconds(3 * sleepSeconds),
                    $"Elapsed more than {3 * sleepSeconds} seconds ({elapsed}); seems blocking."
                );
            }

            Assert.Equal(
                new[]
                {
                    "Reorg(1, 1, 0)",
                    "~Action(DumbAction, 1)",
                    "~ActionError(DumbAction, 1, EXPECTED)",
                    "Block(1, 1)",
                    "ActionError(DumbAction, 1, EXPECTED)",
                    "Action(DumbAction, 1)",
                    "BlockEnd(1, 1)",
                    "ReorgEnd(1, 1, 0)",
                },
                log
            );
        }
    }
}
