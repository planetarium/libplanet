using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Libplanet.Action;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Renderers;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Libplanet.Tests.Common;
using Libplanet.Tests.Common.Action;
using Serilog;
using Serilog.Events;
using Xunit;

namespace Libplanet.Tests.Blockchain
{
    public partial class BlockChainTest
    {
        [Fact]
        public async Task DelayedRendererInReorg()
        {
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
                innerRenderer, _fx.Store, 2);
            var renderer = new LoggedActionRenderer<DumbAction>(
                delayedRenderer,
                Log.Logger,
                LogEventLevel.Verbose
            );
            var delayedValidatingActionRenderer = new DelayedActionRenderer<DumbAction>(
                new ValidatingActionRenderer<DumbAction>(), _fx.Store, 2);

            var chain = new BlockChain<DumbAction>(
                _policy,
                _fx.Store,
                _fx.StateStore,
                _fx.GenesisBlock,
                new IActionRenderer<DumbAction>[] { renderer, delayedValidatingActionRenderer }
            );

            Assert.Null(delayedRenderer.Tip);
            Assert.Empty(blockLogs);
            Assert.Empty(reorgLogs);
            Assert.Empty(renderLogs);

            var key = new PrivateKey();

            var tx1 = chain.MakeTransaction(key, new[] { new DumbAction(_fx.Address2, "#1") });
            await chain.MineBlock(_fx.Address1);

            Assert.Null(delayedRenderer.Tip);
            Assert.Empty(reorgLogs);
            Assert.Empty(blockLogs);
            Assert.Empty(renderLogs);

            var tx2 = chain.MakeTransaction(key, new[] { new DumbAction(_fx.Address2, "#2") });
            await chain.MineBlock(_fx.Address1);

            Assert.Equal(chain[0], delayedRenderer.Tip);
            Assert.Empty(reorgLogs);
            Assert.Empty(blockLogs);
            Assert.Empty(renderLogs);

            var forked = chain.Fork(chain[0].Hash);
            _fx.Store.StageTransactionIds(new[] { tx1.Id }.ToImmutableHashSet());
            var block = await forked.MineBlock(_fx.Address1, append: false);
            forked.Append(
                    block,
                    DateTimeOffset.UtcNow,
                    evaluateActions: true,
                    renderBlocks: false,
                    renderActions: false
                );
            _fx.Store.StageTransactionIds(new[] { tx2.Id }.ToImmutableHashSet());
            block = await forked.MineBlock(_fx.Address1, append: false);
            forked.Append(
                    block,
                    DateTimeOffset.UtcNow,
                    evaluateActions: true,
                    renderBlocks: false,
                    renderActions: false
                );
            forked.MakeTransaction(key, new[] { new DumbAction(_fx.Address2, "#3") });
            block = await forked.MineBlock(_fx.Address1, append: false);
            forked.Append(
                    block,
                    DateTimeOffset.UtcNow,
                    evaluateActions: true,
                    renderBlocks: false,
                    renderActions: false
                );
            forked.MakeTransaction(key, new[] { new DumbAction(_fx.Address2, "#4") });
            block = await forked.MineBlock(_fx.Address1, append: false);
            forked.Append(
                    block,
                    DateTimeOffset.UtcNow,
                    evaluateActions: true,
                    renderBlocks: false,
                    renderActions: false
                );

            chain.Swap(forked, true);

            Assert.Equal(chain[2], delayedRenderer.Tip);
            Assert.Empty(reorgLogs);
            Assert.Equal(new[] { (chain[0], chain[1]), (chain[1], chain[2]) }, blockLogs);
            Assert.Equal(4, renderLogs.Count);
        }

        [Fact]
        public async Task DelayedRendererAfterReorg()
        {
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
                innerRenderer, _fx.Store, 2);
            var renderer = new LoggedActionRenderer<DumbAction>(
                delayedRenderer,
                Log.Logger,
                LogEventLevel.Verbose
            );
            var delayedValidatingActionRenderer = new DelayedActionRenderer<DumbAction>(
                new ValidatingActionRenderer<DumbAction>(), _fx.Store, 2);

            var chain = new BlockChain<DumbAction>(
                _policy,
                _fx.Store,
                _fx.StateStore,
                _fx.GenesisBlock,
                new IActionRenderer<DumbAction>[] { renderer, delayedValidatingActionRenderer }
            );

            Assert.Null(delayedRenderer.Tip);
            Assert.Empty(blockLogs);
            Assert.Empty(reorgLogs);
            Assert.Empty(renderLogs);

            var key = new PrivateKey();

            var tx1 = chain.MakeTransaction(key, new[] { new DumbAction(_fx.Address2, "#1") });
            await chain.MineBlock(_fx.Address1);

            Assert.Null(delayedRenderer.Tip);
            Assert.Empty(reorgLogs);
            Assert.Empty(blockLogs);
            Assert.Empty(renderLogs);

            var tx2 = chain.MakeTransaction(key, new[] { new DumbAction(_fx.Address2, "#2") });
            await chain.MineBlock(_fx.Address1);

            Assert.Equal(chain[0], delayedRenderer.Tip);
            Assert.Empty(reorgLogs);
            Assert.Empty(blockLogs);
            Assert.Empty(renderLogs);

            var forked = chain.Fork(chain[1].Hash);
            _fx.Store.StageTransactionIds(new[] { tx2.Id }.ToImmutableHashSet());
            var block = await forked.MineBlock(_fx.Address1, append: false);
            forked.Append(
                    block,
                    DateTimeOffset.UtcNow,
                    evaluateActions: true,
                    renderBlocks: false,
                    renderActions: false
                );
            block = await forked.MineBlock(_fx.Address1, append: false);
            forked.Append(
                    block,
                    DateTimeOffset.UtcNow,
                    evaluateActions: true,
                    renderBlocks: false,
                    renderActions: false
                );

            chain.Swap(forked, true);

            Assert.Equal(chain[1], delayedRenderer.Tip);
            Assert.Empty(reorgLogs);
            Assert.Equal(new[] { (chain[0], chain[1]) }, blockLogs);
            Assert.Equal(2, renderLogs.Count);

            await chain.MineBlock(_fx.Address1);
            Assert.Equal(chain[2], delayedRenderer.Tip);
            Assert.Empty(reorgLogs);
            Assert.Equal(new[] { (chain[0], chain[1]), (chain[1], chain[2]) }, blockLogs);
            Assert.Equal(4, renderLogs.Count);
        }
    }
}
