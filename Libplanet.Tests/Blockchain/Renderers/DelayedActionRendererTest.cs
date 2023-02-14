using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Libplanet.Action;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
using Libplanet.Blockchain.Renderers;
using Libplanet.Blockchain.Renderers.Debug;
using Libplanet.Blocks;
using Libplanet.Consensus;
using Libplanet.Crypto;
using Libplanet.Tests.Common.Action;
using Libplanet.Tests.Store;
using Serilog;
using Serilog.Events;
using xRetry;
using Xunit;
using Xunit.Abstractions;

namespace Libplanet.Tests.Blockchain.Renderers
{
    public class DelayedActionRendererTest : DelayedRendererTest
    {
        private static readonly IAccountStateDelta _emptyStates =
            new AccountStateDeltaImpl(
                _ => null,
                (_, __) => default,
                _ => default,
                () => new ValidatorSet(),
                default);

        public DelayedActionRendererTest(ITestOutputHelper output)
            : base(output)
        {
            Log.Logger = _logger;
        }

        [InlineData(0)]
        [InlineData(-123)]
        [Theory]
        public override void Constructor(int invalidConfirmations)
        {
            ArgumentOutOfRangeException e = Assert.Throws<ArgumentOutOfRangeException>(() =>
                new DelayedActionRenderer<DumbAction>(
                    new AnonymousActionRenderer<DumbAction>(),
                    _canonicalChainComparer,
                    _store,
                    confirmations: invalidConfirmations
                )
            );
            Assert.Equal("confirmations", e.ParamName);
        }

        [Fact]
        public override void BlocksBeingAppended()
        {
            // FIXME: Eliminate duplication between this and DelayedRendererTest
            var blockLogs = new List<(Block<DumbAction> OldTip, Block<DumbAction> NewTip)>();
            var actionEvaluations = new List<ActionEvaluation>();
            uint unintendedCalls = 0;
            var innerRenderer = new AnonymousActionRenderer<DumbAction>
            {
                BlockRenderer = (oldTip, newTip) => blockLogs.Add((oldTip, newTip)),
                ActionRenderer = (action, context, nextStates) =>
                    actionEvaluations.Add(new ActionEvaluation(action, context, nextStates)),
                ActionErrorRenderer = (action, context, e) =>
                    actionEvaluations.Add(
                        new ActionEvaluation(action, context, context.PreviousStates, e)
                    ),
                ReorgRenderer = (oldTip, newTip, bp) =>
                {
                    // Note that this callback should not be invoked in this test case.
                    unintendedCalls++;
                },
                ActionUnrenderer = (action, context, nextStates) =>
                {
                    // Note that this callback should not be invoked in this test case.
                    unintendedCalls++;
                },
                ActionErrorUnrenderer = (action, context, nextStates) =>
                {
                    // Note that this callback should not be invoked in this test case.
                    unintendedCalls++;
                },
            };

            var renderer = new DelayedActionRenderer<DumbAction>(
                innerRenderer,
                _canonicalChainComparer,
                _store,
                confirmations: 3
            );
            Assert.Null(renderer.Tip);
            Assert.Empty(blockLogs);
            Assert.Empty(actionEvaluations);
            Assert.Equal(0U, unintendedCalls);

            // #0 -> 1 confirm; #1 -> no confirms; #2 -> no confirms
            renderer.RenderBlock(_chainA[0], _chainA[1]);
            renderer.RenderAction(new DumbAction(default, "#1.1"), FakeContext(), _emptyStates);
            renderer.RenderAction(new DumbAction(default, "#1.2"), FakeContext(), _emptyStates);
            renderer.RenderBlockEnd(_chainA[0], _chainA[1]);
            Assert.Null(renderer.Tip);
            Assert.Empty(blockLogs);
            Assert.Empty(actionEvaluations);
            Assert.Equal(0U, unintendedCalls);

            // #0 -> 2 confirms; #1 -> 1 confirm; #2 -> no confirms
            renderer.RenderBlock(_chainA[1], _chainA[2]);
            renderer.RenderActionError(
                new DumbAction(default, "#2.1"),
                FakeContext(),
                new ThrowException.SomeException("#2.1")
            );
            renderer.RenderAction(new DumbAction(default, "#2.2"), FakeContext(), _emptyStates);
            renderer.RenderBlockEnd(_chainA[1], _chainA[2]);
            Assert.Null(renderer.Tip);
            Assert.Empty(blockLogs);
            Assert.Empty(actionEvaluations);
            Assert.Equal(0U, unintendedCalls);

            // #0 -> 3 confirms; #1 -> 2 confirms; #2 -> 1 confirm; tip changed -> #0
            renderer.RenderBlock(_chainA[2], _chainA[3]);
            renderer.RenderAction(new DumbAction(default, "#3.1"), FakeContext(), _emptyStates);
            renderer.RenderBlockEnd(_chainA[2], _chainA[3]);
            Assert.Equal(_chainA[0], renderer.Tip);
            Assert.Empty(blockLogs);
            Assert.Empty(actionEvaluations);
            Assert.Equal(0U, unintendedCalls);

            // #0 -> gone; #1 -> 3 confirms; #2 -> 2 confirms; tip changed -> #1; render(#0, #1)
            renderer.RenderBlock(_chainA[3], _chainA[4]);
            renderer.RenderAction(new DumbAction(default, "#4.1"), FakeContext(), _emptyStates);
            renderer.RenderBlockEnd(_chainA[3], _chainA[4]);
            Assert.Equal(_chainA[1], renderer.Tip);
            Assert.Single(blockLogs);
            Assert.Equal((_chainA[0], _chainA[1]), blockLogs[0]);
            Assert.Equal(2, actionEvaluations.Count);
            Assert.Equal("#1.1", ((DumbAction)actionEvaluations[0].Action).Item);
            Assert.Null(actionEvaluations[0].Exception);
            Assert.Equal("#1.2", ((DumbAction)actionEvaluations[1].Action).Item);
            Assert.Null(actionEvaluations[1].Exception);
            Assert.Equal(0U, unintendedCalls);

            // #0 -> gone; #1 -> gone; #2 -> 3 confirms; tip changed -> #2; render(#1, #2)
            renderer.RenderBlock(_chainA[4], _chainA[5]);
            renderer.RenderBlockEnd(_chainA[4], _chainA[5]);
            Assert.Equal(_chainA[2], renderer.Tip);
            Assert.Equal(2, blockLogs.Count);
            Assert.Equal((_chainA[0], _chainA[1]), blockLogs[0]);
            Assert.Equal((_chainA[1], _chainA[2]), blockLogs[1]);
            Assert.Equal(4, actionEvaluations.Count);
            Assert.Equal("#1.1", ((DumbAction)actionEvaluations[0].Action).Item);
            Assert.Null(actionEvaluations[0].Exception);
            Assert.Equal("#1.2", ((DumbAction)actionEvaluations[1].Action).Item);
            Assert.Null(actionEvaluations[1].Exception);
            Assert.Equal("#2.1", ((DumbAction)actionEvaluations[2].Action).Item);
            Assert.NotNull(actionEvaluations[2].Exception);
            Assert.IsType<ThrowException.SomeException>(actionEvaluations[2].Exception);
            Assert.Equal("#2.2", ((DumbAction)actionEvaluations[3].Action).Item);
            Assert.Null(actionEvaluations[3].Exception);
            Assert.Equal(0U, unintendedCalls);
        }

        [SkippableFact]
        public override void BlocksBeingAppendedInParallel()
        {
            // FIXME: Eliminate duplication between this and DelayedRendererTest
            var blockLogs = new List<(Block<DumbAction> OldTip, Block<DumbAction> NewTip)>();
            var reorgLogs = new List<(
                Block<DumbAction> OldTip,
                Block<DumbAction> NewTip,
                Block<DumbAction> Branchpoint
            )>();
            var renderLogs = new List<(bool Unrender, ActionEvaluation Evaluation)>();
            var innerRenderer = new AnonymousActionRenderer<DumbAction>
            {
                BlockRenderer = (oldTip, newTip) => blockLogs.Add((oldTip, newTip)),
                ReorgRenderer = (oldTip, newTip, bp) => reorgLogs.Add((oldTip, newTip, bp)),
                ActionRenderer = (action, context, nextStates) =>
                    renderLogs.Add((false, new ActionEvaluation(action, context, nextStates))),
                ActionErrorRenderer = (act, ctx, e) =>
                    renderLogs.Add((false, new ActionEvaluation(act, ctx, ctx.PreviousStates, e))),
                ActionUnrenderer = (action, context, nextStates) =>
                    renderLogs.Add((true, new ActionEvaluation(action, context, nextStates))),
                ActionErrorUnrenderer = (act, ctx, e) =>
                    renderLogs.Add((true, new ActionEvaluation(act, ctx, ctx.PreviousStates, e))),
            };
            var delayedRenderer = new DelayedActionRenderer<DumbAction>(
                innerRenderer,
                _canonicalChainComparer,
                _store,
                confirmations: 3
            );
            var renderer = new LoggedActionRenderer<DumbAction>(
                delayedRenderer,
                _logger,
                LogEventLevel.Verbose
            );
            Assert.Null(delayedRenderer.Tip);
            Assert.Empty(blockLogs);
            Assert.Empty(reorgLogs);

            // Some explanation on the fixture: there are two chains that shares a certain block
            // as a branchpoint: _chainA and _chainB.  The topmost mutual block, i.e., branchpoint,
            // between _chainA and _chainB is _chainA[4] (== _chainB[4]).
            // In this test, we tries to simulate blocks from two parallel chains being "appended"
            // (discovered) to a peer.  The order of discovery can be drawn as below (the prime
            // [apostrophe] after the block index number like #N' shows it's from _chainB; the bare
            // block index without that like #N means it's from _chainA):
            //
            //          #4 (1st)
            //            |
            //          /   \
            //    #5 (2nd)  #5' (3rd)
            //        |       |
            //    #6 (3rd)  #6' (4th)
            //        |       |
            //    #7 (5th)  #7' (6th)
            //        |       |
            //    #8 (7th)  #8' (8th)
            //                |
            //              #9' (9th)

            // #4  -> 1 confirm
            // #5  -> no confirms
            // #5' -> no confirms
            renderer.RenderBlock(_chainA[4], _chainA[5]);
            renderer.RenderAction(new DumbAction(default, "#5.1"), FakeContext(5), _emptyStates);
            renderer.RenderBlockEnd(_chainA[4], _chainA[5]);
            var expectedBlockLogs = new List<(Block<DumbAction> OldTip, Block<DumbAction> NewTip)>
            {
                (_chainA[1], _chainA[2]),
            };
            Assert.Equal(_chainA[2], delayedRenderer.Tip);
            Assert.Empty(reorgLogs);
            Assert.Equal(expectedBlockLogs, blockLogs);
            Assert.Empty(renderLogs);

            // #4  -> 1 confirms
            // #5  -> no confirms
            // #5' -> no confirms
            renderer.RenderReorg(_chainA[5], _chainB[5], _branchpoint);
            renderer.UnrenderAction(new DumbAction(default, "#5.1"), FakeContext(5), _emptyStates);
            renderer.RenderBlock(_chainA[5], _chainB[5]);
            renderer.RenderAction(new DumbAction(default, "#5'.1"), FakeContext(5), _emptyStates);
            renderer.RenderActionError(
                new DumbAction(default, "#5'.2"),
                FakeContext(5),
                new ThrowException.SomeException("#5'.2")
            );
            renderer.RenderBlockEnd(_chainA[5], _chainB[5]);
            renderer.RenderReorgEnd(_chainA[5], _chainB[5], _branchpoint);
            Assert.Equal(_chainA[2], delayedRenderer.Tip);
            Assert.Empty(reorgLogs);
            Assert.Equal(expectedBlockLogs, blockLogs);
            Assert.Empty(renderLogs);

            // #4  -> 2 confirms; tip changed -> #3
            // #5  -> 1 confirm;  #6 -> no confirm
            // #5' -> no confirms
            renderer.RenderReorg(_chainB[5], _chainA[6], _branchpoint);
            renderer.UnrenderActionError(
                new DumbAction(default, "#5'.2"),
                FakeContext(5),
                new ThrowException.SomeException("#5'.2")
            );
            renderer.UnrenderAction(new DumbAction(default, "#5'.1"), FakeContext(5), _emptyStates);
            renderer.RenderBlock(_chainB[5], _chainA[6]);
            renderer.RenderAction(new DumbAction(default, "#5.1"), FakeContext(5), _emptyStates);
            renderer.RenderAction(new DumbAction(default, "#6.1"), FakeContext(6), _emptyStates);
            renderer.RenderBlockEnd(_chainB[5], _chainA[6]);
            renderer.RenderReorgEnd(_chainB[5], _chainA[6], _branchpoint);
            expectedBlockLogs.Add((_chainA[2], _chainA[3]));
            Assert.Equal(_chainA[3], delayedRenderer.Tip);
            Assert.Empty(reorgLogs);
            Assert.Equal(expectedBlockLogs, blockLogs);
            Assert.Empty(renderLogs);

            // #4  -> 2 confirms
            // #5  -> 1 confirm; #6  -> no confirm
            // #5' -> 1 confirm; #6' -> no confirm
            renderer.RenderReorg(_chainA[6], _chainB[6], _branchpoint);
            renderer.UnrenderAction(new DumbAction(default, "#6.1"), FakeContext(6), _emptyStates);
            renderer.UnrenderAction(new DumbAction(default, "#5.1"), FakeContext(5), _emptyStates);
            renderer.RenderBlock(_chainA[6], _chainB[6]);
            renderer.RenderAction(new DumbAction(default, "#5'.1"), FakeContext(5), _emptyStates);
            renderer.RenderActionError(
                new DumbAction(default, "#5'.2"),
                FakeContext(5),
                new ThrowException.SomeException("#5'.2")
            );
            renderer.RenderAction(new DumbAction(default, "#6'.1"), FakeContext(6), _emptyStates);
            renderer.RenderBlockEnd(_chainA[6], _chainB[6]);
            renderer.RenderReorgEnd(_chainA[6], _chainB[6], _branchpoint);
            Assert.Equal(_chainA[3], delayedRenderer.Tip);
            Assert.Empty(reorgLogs);
            Assert.Equal(expectedBlockLogs, blockLogs);
            Assert.Empty(renderLogs);

            // #4  -> 3 confirms; tip changed -> #4
            // #5  -> 2 confirms; #6  -> 1 confirm; #7 -> no confirm
            // #5' -> 1 confirm;  #6' -> no confirm
            renderer.RenderReorg(_chainB[6], _chainA[7], _branchpoint);
            renderer.UnrenderAction(new DumbAction(default, "#6'.1"), FakeContext(6), _emptyStates);
            renderer.UnrenderActionError(
                new DumbAction(default, "#5'.2"),
                FakeContext(5),
                new ThrowException.SomeException("#5'.2")
            );
            renderer.UnrenderAction(new DumbAction(default, "#5'.1"), FakeContext(5), _emptyStates);
            renderer.RenderBlock(_chainB[6], _chainA[7]);
            renderer.RenderAction(new DumbAction(default, "#5.1"), FakeContext(5), _emptyStates);
            renderer.RenderAction(new DumbAction(default, "#6.1"), FakeContext(6), _emptyStates);
            renderer.RenderAction(new DumbAction(default, "#7.1"), FakeContext(7), _emptyStates);
            renderer.RenderBlockEnd(_chainB[6], _chainA[7]);
            renderer.RenderReorgEnd(_chainB[6], _chainA[7], _branchpoint);
            expectedBlockLogs.Add((_chainA[3], _chainA[4]));
            Assert.Equal(_chainA[4], delayedRenderer.Tip);
            Assert.Empty(reorgLogs);
            Assert.Equal(expectedBlockLogs, blockLogs);
            Assert.Empty(renderLogs);

            // #4  -> gone but still is tip
            // #5  -> 2 confirms; #6  -> 1 confirm; #7  -> no confirm
            // #5' -> 2 confirms; #6' -> 1 confirm; #7' -> no confirm
            renderer.RenderReorg(_chainA[7], _chainB[7], _branchpoint);
            renderer.UnrenderAction(new DumbAction(default, "#7.1"), FakeContext(7), _emptyStates);
            renderer.UnrenderAction(new DumbAction(default, "#6.1"), FakeContext(6), _emptyStates);
            renderer.UnrenderAction(new DumbAction(default, "#5.1"), FakeContext(5), _emptyStates);
            renderer.RenderBlock(_chainA[7], _chainB[7]);
            renderer.RenderAction(new DumbAction(default, "#5'.1"), FakeContext(5), _emptyStates);
            renderer.RenderActionError(
                new DumbAction(default, "#5'.2"),
                FakeContext(5),
                new ThrowException.SomeException("#5'.2")
            );
            renderer.RenderAction(new DumbAction(default, "#6'.1"), FakeContext(6), _emptyStates);
            renderer.RenderAction(new DumbAction(default, "#7'.1"), FakeContext(7), _emptyStates);
            renderer.RenderBlockEnd(_chainA[7], _chainB[7]);
            renderer.RenderReorgEnd(_chainA[7], _chainB[7], _branchpoint);
            Assert.Equal(_chainA[4], delayedRenderer.Tip);
            Assert.Empty(reorgLogs);
            Assert.Equal(expectedBlockLogs, blockLogs);
            Assert.Empty(renderLogs);

            // #4  -> gone; tip changed -> #5; render(#4, #5)
            // #5  -> 3 confirms; #6  -> 2 confirms; #7  -> 1 confirm; #8 -> no confirm
            // #5' -> 2 confirms; #6' -> 1 confirm;  #7' -> no confirm
            renderer.RenderReorg(_chainB[7], _chainA[8], _branchpoint);
            renderer.UnrenderAction(new DumbAction(default, "#7'.1"), FakeContext(7), _emptyStates);
            renderer.UnrenderAction(new DumbAction(default, "#6'.1"), FakeContext(6), _emptyStates);
            renderer.UnrenderActionError(
                new DumbAction(default, "#5'.2"),
                FakeContext(5),
                new ThrowException.SomeException("#5'.2")
            );
            renderer.UnrenderAction(new DumbAction(default, "#5'.1"), FakeContext(5), _emptyStates);
            renderer.RenderBlock(_chainB[7], _chainA[8]);
            renderer.RenderAction(new DumbAction(default, "#5.1"), FakeContext(5), _emptyStates);
            renderer.RenderAction(new DumbAction(default, "#6.1"), FakeContext(6), _emptyStates);
            renderer.RenderAction(new DumbAction(default, "#7.1"), FakeContext(7), _emptyStates);
            renderer.RenderAction(new DumbAction(default, "#8.1"), FakeContext(8), _emptyStates);
            renderer.RenderBlockEnd(_chainB[7], _chainA[8]);
            renderer.RenderReorgEnd(_chainB[7], _chainA[8], _branchpoint);
            expectedBlockLogs.Add((_chainA[4], _chainA[5]));
            Assert.Equal(_chainA[5], delayedRenderer.Tip);
            Assert.Empty(reorgLogs);
            Assert.Equal(expectedBlockLogs, blockLogs);
            Assert.Single(renderLogs);
            Assert.False(renderLogs[0].Unrender);
            Assert.Equal("#5.1", ((DumbAction)renderLogs[0].Evaluation.Action).Item);
            Assert.Null(renderLogs[0].Evaluation.Exception);

            // tip changed -> #5'; render(#5, #5'); reorg(#5, #5', #4)
            // #5  -> 3 confirms; #6  -> 2 confirms; #7  -> 1 confirm; #8  -> no confirm
            // #5' -> 3 confirms; #6' -> 2 confirms; #7' -> 1 confirm; #8' -> no confirm
            renderer.RenderReorg(_chainA[8], _chainB[8], _branchpoint);
            renderer.UnrenderAction(new DumbAction(default, "#8.1"), FakeContext(8), _emptyStates);
            renderer.UnrenderAction(new DumbAction(default, "#7.1"), FakeContext(7), _emptyStates);
            renderer.UnrenderAction(new DumbAction(default, "#6.1"), FakeContext(6), _emptyStates);
            renderer.UnrenderAction(new DumbAction(default, "#5.1"), FakeContext(5), _emptyStates);
            renderer.RenderBlock(_chainA[8], _chainB[8]);
            renderer.RenderAction(new DumbAction(default, "#5'.1"), FakeContext(5), _emptyStates);
            renderer.RenderActionError(
                new DumbAction(default, "#5'.2"),
                FakeContext(5),
                new ThrowException.SomeException("#5'.2")
            );
            renderer.RenderAction(new DumbAction(default, "#6'.1"), FakeContext(6), _emptyStates);
            renderer.RenderAction(new DumbAction(default, "#7'.1"), FakeContext(7), _emptyStates);
            renderer.RenderAction(new DumbAction(default, "#8'.1"), FakeContext(8), _emptyStates);
            renderer.RenderBlockEnd(_chainA[8], _chainB[8]);
            renderer.RenderReorgEnd(_chainA[8], _chainB[8], _branchpoint);
            expectedBlockLogs.Add((_chainA[5], _chainB[5]));
            Assert.Equal(_chainB[5], delayedRenderer.Tip);
            Assert.Equal(new[] { (_chainA[5], _chainB[5], _branchpoint) }, reorgLogs);
            Assert.Equal(expectedBlockLogs, blockLogs);
            Assert.Equal(1 + 1 + 2, renderLogs.Count);
            Assert.True(renderLogs[1].Unrender);
            Assert.Equal("#5.1", ((DumbAction)renderLogs[1].Evaluation.Action).Item);
            Assert.Null(renderLogs[1].Evaluation.Exception);
            Assert.False(renderLogs[2].Unrender);
            Assert.Equal("#5'.1", ((DumbAction)renderLogs[2].Evaluation.Action).Item);
            Assert.Null(renderLogs[2].Evaluation.Exception);
            Assert.False(renderLogs[3].Unrender);
            Assert.Equal("#5'.2", ((DumbAction)renderLogs[3].Evaluation.Action).Item);
            Assert.NotNull(renderLogs[3].Evaluation.Exception);

            // tip changed -> #6'; render(#5', #6')
            // #5' -> gone; #6' -> 3 confirms; #7' -> 2 confirm; #8' -> 1 confirm; #9' -> 1 confirm
            renderer.RenderBlock(_chainB[8], _chainB[9]);
            renderer.RenderAction(new DumbAction(default, "#9'.1"), FakeContext(9), _emptyStates);
            renderer.RenderBlockEnd(_chainB[8], _chainB[9]);
            expectedBlockLogs.Add((_chainB[5], _chainB[6]));
            Assert.Equal(_chainB[6], delayedRenderer.Tip);
            Assert.Single(reorgLogs);
            Assert.Equal(expectedBlockLogs, blockLogs);
            Assert.Equal(1 + 1 + 2 + 1, renderLogs.Count);
            Assert.False(renderLogs[4].Unrender);
            Assert.Equal("#6'.1", ((DumbAction)renderLogs[4].Evaluation.Action).Item);
            Assert.Null(renderLogs[4].Evaluation.Exception);
        }

        [Fact]
        public void LocateBlockPath()
        {
            var renderer = new DelayedActionRenderer<DumbAction>(
                new AnonymousActionRenderer<DumbAction>(),
                _canonicalChainComparer,
                _store,
                confirmations: 3
            );
            Assert.Equal(
                new[] { _chainA[5].Hash, _chainA[6].Hash, _chainA[7].Hash },
                renderer.LocateBlockPath(_chainA[4], _chainA[7])
            );
            Assert.Throws<ArgumentException>(
                () => renderer.LocateBlockPath(_chainA[5], _chainA[4])
            );
            Assert.Throws<ArgumentException>(
                () => renderer.LocateBlockPath(_chainA[4], _chainA[4])
            );
        }

        // FIXME: This should be properly addressed.
        // https://github.com/planetarium/libplanet/issues/2166
        [RetryFact]
        public async Task ClearRenderBufferWhenItsInterval()
        {
            var policy = new BlockPolicy<DumbAction>(new MinerReward(1));
            var fx = new MemoryStoreFixture(policy.BlockAction);
            var blockLogs = new List<(Block<DumbAction> OldTip, Block<DumbAction> NewTip)>();
            var reorgLogs = new List<(
                Block<DumbAction> OldTip,
                Block<DumbAction> NewTip,
                Block<DumbAction> Branchpoint
                )>();
            var renderLogs = new List<(bool Unrender, ActionEvaluation Evaluation)>();
            var innerRenderer = new AnonymousActionRenderer<DumbAction>
            {
                BlockRenderer = (oldTip, newTip) => blockLogs.Add((oldTip, newTip)),
                ReorgRenderer = (oldTip, newTip, bp) => reorgLogs.Add((oldTip, newTip, bp)),
                ActionRenderer = (action, context, nextStates) =>
                    renderLogs.Add((false, new ActionEvaluation(action, context, nextStates))),
                ActionErrorRenderer = (act, ctx, e) =>
                    renderLogs.Add((false, new ActionEvaluation(act, ctx, ctx.PreviousStates, e))),
                ActionUnrenderer = (action, context, nextStates) =>
                    renderLogs.Add((true, new ActionEvaluation(action, context, nextStates))),
                ActionErrorUnrenderer = (act, ctx, e) =>
                    renderLogs.Add((true, new ActionEvaluation(act, ctx, ctx.PreviousStates, e))),
            };
            var delayedRenderer = new DelayedActionRenderer<DumbAction>(
                innerRenderer,
                _canonicalChainComparer,
                fx.Store,
                2,
                4
            );

            var chain = new BlockChain<DumbAction>(
                policy,
                new VolatileStagePolicy<DumbAction>(),
                fx.Store,
                fx.StateStore,
                fx.GenesisBlock,
                new IActionRenderer<DumbAction>[] { delayedRenderer }
            );
            var key = new PrivateKey();
            var fork1 = chain.Fork(chain.Tip.Hash);
            var fork2 = chain.Fork(chain.Tip.Hash);
            var fork3 = chain.Fork(chain.Tip.Hash);

            var repeatCount = 10;
            for (int i = 0; i < repeatCount; i++)
            {
                await chain.MineBlock(key);
                await fork1.MineBlock(key);
                await fork2.MineBlock(key);
                await fork3.MineBlock(key);
            }

            Assert.Equal(17, delayedRenderer.GetBufferedActionRendererCount());
            Assert.Equal(0, delayedRenderer.GetBufferedActionUnRendererCount());

            chain.Swap(fork1, true)();
            chain.Swap(fork2, true)();
            chain.Swap(fork3, true)();
            Assert.Equal(17, delayedRenderer.GetBufferedActionRendererCount());
            Assert.Equal(15, delayedRenderer.GetBufferedActionUnRendererCount());

            for (int i = 0; i < 5; i++)
            {
                await chain.MineBlock(key);
            }

            Assert.Equal(2, delayedRenderer.GetBufferedActionRendererCount());
            Assert.Equal(0, delayedRenderer.GetBufferedActionUnRendererCount());
        }

        [Fact]
        public async Task DelayedRendererInReorg()
        {
            var policy = new BlockPolicy<DumbAction>(new MinerReward(1));
            var fx = new MemoryStoreFixture(policy.BlockAction);
            var blockLogs = new List<(Block<DumbAction> OldTip, Block<DumbAction> NewTip)>();
            var reorgLogs = new List<(
                Block<DumbAction> OldTip,
                Block<DumbAction> NewTip,
                Block<DumbAction> Branchpoint
            )>();
            var renderLogs = new List<(bool Unrender, ActionEvaluation Evaluation)>();
            var innerRenderer = new AnonymousActionRenderer<DumbAction>
            {
                BlockRenderer = (oldTip, newTip) => blockLogs.Add((oldTip, newTip)),
                ReorgRenderer = (oldTip, newTip, bp) => reorgLogs.Add((oldTip, newTip, bp)),
                ActionRenderer = (action, context, nextStates) =>
                    renderLogs.Add((false, new ActionEvaluation(action, context, nextStates))),
                ActionErrorRenderer = (act, ctx, e) =>
                    renderLogs.Add((false, new ActionEvaluation(act, ctx, ctx.PreviousStates, e))),
                ActionUnrenderer = (action, context, nextStates) =>
                    renderLogs.Add((true, new ActionEvaluation(action, context, nextStates))),
                ActionErrorUnrenderer = (act, ctx, e) =>
                    renderLogs.Add((true, new ActionEvaluation(act, ctx, ctx.PreviousStates, e))),
            };
            var delayedRenderer = new DelayedActionRenderer<DumbAction>(
                innerRenderer,
                _canonicalChainComparer,
                fx.Store,
                confirmations: 2
            );
            var renderer = new LoggedActionRenderer<DumbAction>(
                delayedRenderer,
                Log.Logger,
                LogEventLevel.Verbose
            );
            var validator = new ValidatingActionRenderer<DumbAction>();
            var delayedValidatingActionRenderer = new DelayedActionRenderer<DumbAction>(
                validator,
                _canonicalChainComparer,
                fx.Store,
                confirmations: 2
            );

            var chain = new BlockChain<DumbAction>(
                policy,
                new VolatileStagePolicy<DumbAction>(),
                fx.Store,
                fx.StateStore,
                fx.GenesisBlock,
                new IActionRenderer<DumbAction>[] { renderer, delayedValidatingActionRenderer }
            );
            validator.BlockChain = chain;

            Assert.Null(delayedRenderer.Tip);
            Assert.Empty(blockLogs);
            Assert.Empty(reorgLogs);
            Assert.Empty(renderLogs);

            var key = new PrivateKey();

            var tx1 = chain.MakeTransaction(key, new[] { new DumbAction(fx.Address2, "#1") });
            await chain.MineBlock(key);

            Assert.Null(delayedRenderer.Tip);
            Assert.Empty(reorgLogs);
            Assert.Empty(blockLogs);
            Assert.Empty(renderLogs);

            var tx2 = chain.MakeTransaction(key, new[] { new DumbAction(fx.Address2, "#2") });
            await chain.MineBlock(key);

            Assert.Equal(chain[0], delayedRenderer.Tip);
            Assert.Empty(reorgLogs);
            Assert.Empty(blockLogs);
            Assert.Empty(renderLogs);

            var forked = chain.Fork(chain[0].Hash);
            chain.StagePolicy.Stage(chain, tx1);
            var block = await forked.MineBlock(key, append: false);
            forked.Append(
                    block,
                    evaluateActions: true,
                    renderBlocks: false,
                    renderActions: false
                );
            chain.StagePolicy.Stage(chain, tx2);
            block = await forked.MineBlock(key, append: false);
            forked.Append(
                    block,
                    evaluateActions: true,
                    renderBlocks: false,
                    renderActions: false
                );
            forked.MakeTransaction(key, new[] { new DumbAction(fx.Address2, "#3") });
            block = await forked.MineBlock(key, append: false);
            forked.Append(
                    block,
                    evaluateActions: true,
                    renderBlocks: false,
                    renderActions: false
                );
            forked.MakeTransaction(key, new[] { new DumbAction(fx.Address2, "#4") });
            block = await forked.MineBlock(key, append: false);
            forked.Append(
                    block,
                    evaluateActions: true,
                    renderBlocks: false,
                    renderActions: false
                );

            chain.Swap(forked, true)();

            Assert.Equal(chain[2], delayedRenderer.Tip);
            Assert.Empty(reorgLogs);
            Assert.Equal(new[] { (chain[0], chain[1]), (chain[1], chain[2]) }, blockLogs);
            Assert.Equal(4, renderLogs.Count);
        }

        [Fact]
        public async Task DelayedRendererAfterReorg()
        {
            var policy = new BlockPolicy<DumbAction>(new MinerReward(1));
            var fx = new MemoryStoreFixture(policy.BlockAction);
            var blockLogs = new List<(Block<DumbAction> OldTip, Block<DumbAction> NewTip)>();
            var reorgLogs = new List<(
                Block<DumbAction> OldTip,
                Block<DumbAction> NewTip,
                Block<DumbAction> Branchpoint
            )>();
            var renderLogs = new List<(bool Unrender, ActionEvaluation Evaluation)>();
            var innerRenderer = new AnonymousActionRenderer<DumbAction>
            {
                BlockRenderer = (oldTip, newTip) => blockLogs.Add((oldTip, newTip)),
                ReorgRenderer = (oldTip, newTip, bp) => reorgLogs.Add((oldTip, newTip, bp)),
                ActionRenderer = (action, context, nextStates) =>
                    renderLogs.Add((false, new ActionEvaluation(action, context, nextStates))),
                ActionErrorRenderer = (act, ctx, e) =>
                    renderLogs.Add((false, new ActionEvaluation(act, ctx, ctx.PreviousStates, e))),
                ActionUnrenderer = (action, context, nextStates) =>
                    renderLogs.Add((true, new ActionEvaluation(action, context, nextStates))),
                ActionErrorUnrenderer = (act, ctx, e) =>
                    renderLogs.Add((true, new ActionEvaluation(act, ctx, ctx.PreviousStates, e))),
            };
            var delayedRenderer = new DelayedActionRenderer<DumbAction>(
                innerRenderer,
                _canonicalChainComparer,
                fx.Store,
                confirmations: 2
            );
            var renderer = new LoggedActionRenderer<DumbAction>(
                delayedRenderer,
                Log.Logger,
                LogEventLevel.Verbose
            );
            var validator = new ValidatingActionRenderer<DumbAction>();
            var delayedValidatingActionRenderer = new DelayedActionRenderer<DumbAction>(
                validator,
                _canonicalChainComparer,
                fx.Store,
                confirmations: 2
            );

            var chain = new BlockChain<DumbAction>(
                policy,
                new VolatileStagePolicy<DumbAction>(),
                fx.Store,
                fx.StateStore,
                fx.GenesisBlock,
                new IActionRenderer<DumbAction>[] { renderer, delayedValidatingActionRenderer }
            );
            validator.BlockChain = chain;

            Assert.Null(delayedRenderer.Tip);
            Assert.Empty(blockLogs);
            Assert.Empty(reorgLogs);
            Assert.Empty(renderLogs);

            var key = new PrivateKey();

            var tx1 = chain.MakeTransaction(key, new[] { new DumbAction(fx.Address2, "#1") });
            await chain.MineBlock(key);

            Assert.Null(delayedRenderer.Tip);
            Assert.Empty(reorgLogs);
            Assert.Empty(blockLogs);
            Assert.Empty(renderLogs);

            var tx2 = chain.MakeTransaction(key, new[] { new DumbAction(fx.Address2, "#2") });
            await chain.MineBlock(key);

            Assert.Equal(chain[0], delayedRenderer.Tip);
            Assert.Empty(reorgLogs);
            Assert.Empty(blockLogs);
            Assert.Empty(renderLogs);

            var forked = chain.Fork(chain[1].Hash);
            chain.StagePolicy.Stage(chain, tx2);
            var block = await forked.MineBlock(key, append: false);
            forked.Append(
                    block,
                    evaluateActions: true,
                    renderBlocks: false,
                    renderActions: false
                );
            block = await forked.MineBlock(key, append: false);
            forked.Append(
                    block,
                    evaluateActions: true,
                    renderBlocks: false,
                    renderActions: false
                );

            chain.Swap(forked, true)();

            Assert.Equal(chain[1], delayedRenderer.Tip);
            Assert.Empty(reorgLogs);
            Assert.Equal(new[] { (chain[0], chain[1]) }, blockLogs);
            Assert.Equal(2, renderLogs.Count);

            await chain.MineBlock(key);
            Assert.Equal(chain[2], delayedRenderer.Tip);
            Assert.Empty(reorgLogs);
            Assert.Equal(new[] { (chain[0], chain[1]), (chain[1], chain[2]) }, blockLogs);
            Assert.Equal(4, renderLogs.Count);
        }

        private IActionContext FakeContext(long blockIndex = 1) =>
            new ActionContext(default, default, default, default, blockIndex, _emptyStates, 0);
    }
}
