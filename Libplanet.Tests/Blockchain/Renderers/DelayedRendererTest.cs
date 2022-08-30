using System;
using System.Collections.Generic;
using System.Linq;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Renderers;
using Libplanet.Blocks;
using Libplanet.Store;
using Libplanet.Tests.Common.Action;
using Serilog;
using Serilog.Events;
using Xunit;
using Xunit.Abstractions;

namespace Libplanet.Tests.Blockchain.Renderers
{
    public class DelayedRendererTest
    {
        protected static readonly IReadOnlyList<Block<DumbAction>> _chainA;
        protected static readonly IReadOnlyList<Block<DumbAction>> _chainB;
        protected static readonly Block<DumbAction> _branchpoint;
        protected IComparer<IBlockExcerpt> _canonicalChainComparer;
        protected IStore _store;
        protected ILogger _logger;

#pragma warning disable S3963
        static DelayedRendererTest()
        {
            var chainA = new Block<DumbAction>[10];
            var chainB = new Block<DumbAction>[chainA.Length];
            chainA[0] = chainB[0] = TestUtils.MineGenesisBlock<DumbAction>(TestUtils.GenesisMiner);
            for (int i = 1; i < chainA.Length / 2; i++)
            {
                _branchpoint = chainA[i] = chainB[i] = TestUtils.MineNextBlock(
                    chainA[i - 1],
                    TestUtils.GenesisMiner
                );
            }

            int extraDifficulty = 1;
            for (int i = chainA.Length / 2; i < chainA.Length; i++)
            {
                chainA[i] = TestUtils.MineNextBlock(
                    chainA[i - 1],
                    TestUtils.GenesisMiner,
                    difficulty: 2
                );
                chainB[i] = TestUtils.MineNextBlock(
                    chainB[i - 1],
                    TestUtils.GenesisMiner,
                    difficulty: 2 + extraDifficulty
                );

                // The block right next the branchpoint in the chainB has 1 more difficulty than
                // the block with the same index in the chainA, and then rest blocks have the
                // same difficulty 2.  That means, every block after the branchpoint in the chainB
                // has exactly 1 more difficulty than a block with the same index in the chainA.
                extraDifficulty = 0;
            }

            _chainA = chainA;
            _chainB = chainB;
        }
#pragma warning restore S3963

        public DelayedRendererTest(ITestOutputHelper output)
        {
            _logger = new LoggerConfiguration()
                .MinimumLevel.Verbose()
                .Enrich.WithThreadId()
                .WriteTo.TestOutput(output)
                .CreateLogger()
                .ForContext(GetType());
            Log.Logger = _logger;
            _logger.CompareBothChains(
                LogEventLevel.Debug,
                nameof(_chainA),
                _chainA,
                nameof(_chainB),
                _chainB
            );

            _canonicalChainComparer = new TotalDifficultyComparer();

            _store = new MemoryStore();
            foreach (Block<DumbAction> b in _chainA.Concat(_chainB))
            {
                _store.PutBlock(b);
            }
        }

        [InlineData(0)]
        [InlineData(-123)]
        [Theory]
        public virtual void Constructor(int invalidConfirmations)
        {
            ArgumentOutOfRangeException e = Assert.Throws<ArgumentOutOfRangeException>(() =>
                new DelayedRenderer<DumbAction>(
                    new AnonymousRenderer<DumbAction>(),
                    _canonicalChainComparer,
                    _store,
                    confirmations: invalidConfirmations
                )
            );
            Assert.Equal("confirmations", e.ParamName);
        }

        [Fact]
        public virtual void BlocksBeingAppended()
        {
            var blockLogs = new List<(Block<DumbAction> OldTip, Block<DumbAction> NewTip)>();
            uint reorgs = 0;
            var innerRenderer = new AnonymousRenderer<DumbAction>
            {
                BlockRenderer = (oldTip, newTip) => blockLogs.Add((oldTip, newTip)),
                ReorgRenderer = (oldTip, newTip, bp) =>
                {
                    // Note that this callback should not be invoked in this test case.
                    reorgs++;
                },
            };
            var renderer = new DelayedRenderer<DumbAction>(
                innerRenderer,
                _canonicalChainComparer,
                _store,
                confirmations: 3
            );
            Assert.Null(renderer.Tip);
            Assert.Empty(blockLogs);
            Assert.Equal(0U, reorgs);

            // #0 -> 1 confirm; #1 -> no confirms; #2 -> no confirms
            renderer.RenderBlock(_chainA[0], _chainA[1]);
            Assert.Null(renderer.Tip);
            Assert.Empty(blockLogs);
            Assert.Equal(0U, reorgs);

            // #0 -> 2 confirms; #1 -> 1 confirm; #2 -> no confirms
            renderer.RenderBlock(_chainA[1], _chainA[2]);
            Assert.Null(renderer.Tip);
            Assert.Empty(blockLogs);
            Assert.Equal(0U, reorgs);

            // #0 -> 3 confirms; #1 -> 2 confirms; #2 -> 1 confirm; tip changed -> #0
            renderer.RenderBlock(_chainA[2], _chainA[3]);
            Assert.Equal(_chainA[0], renderer.Tip);
            Assert.Empty(blockLogs);
            Assert.Equal(0U, reorgs);

            // #0 -> gone; #1 -> 3 confirms; #2 -> 2 confirms; tip changed -> #1; render(#0, #1)
            renderer.RenderBlock(_chainA[3], _chainA[4]);
            Assert.Equal(_chainA[1], renderer.Tip);
            Assert.Single(blockLogs);
            Assert.Equal((_chainA[0], _chainA[1]), blockLogs[0]);
            Assert.Equal(0U, reorgs);

            // #0 -> gone; #1 -> gone; #2 -> 3 confirms; tip changed -> #2; render(#1, #2)
            renderer.RenderBlock(_chainA[4], _chainA[5]);
            Assert.Equal(_chainA[2], renderer.Tip);
            Assert.Equal(2, blockLogs.Count);
            Assert.Equal((_chainA[0], _chainA[1]), blockLogs[0]);
            Assert.Equal((_chainA[1], _chainA[2]), blockLogs[1]);
            Assert.Equal(0U, reorgs);
        }

        [Fact]
        public virtual void BlocksBeingAppendedInParallel()
        {
            var blockLogs = new List<(Block<DumbAction> OldTip, Block<DumbAction> NewTip)>();
            var reorgLogs = new List<(
                Block<DumbAction> OldTip,
                Block<DumbAction> NewTip,
                Block<DumbAction> Branchpoint
            )>();
            var innerRenderer = new AnonymousRenderer<DumbAction>
            {
                BlockRenderer = (oldTip, newTip) => blockLogs.Add((oldTip, newTip)),
                ReorgRenderer = (oldTip, newTip, bp) => reorgLogs.Add((oldTip, newTip, bp)),
            };
            var delayedRenderer = new DelayedRenderer<DumbAction>(
                innerRenderer,
                _canonicalChainComparer,
                _store,
                confirmations: 3
            );
            var renderer = new LoggedRenderer<DumbAction>(
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
            var expectedBlockLogs = new List<(Block<DumbAction> OldTip, Block<DumbAction> NewTip)>
            {
                (_chainA[1], _chainA[2]),
            };
            Assert.Equal(_chainA[2], delayedRenderer.Tip);
            Assert.Empty(reorgLogs);
            Assert.Equal(expectedBlockLogs, blockLogs);

            // #4  -> 1 confirms
            // #5  -> no confirms
            // #5' -> no confirms
            renderer.RenderReorg(_chainA[5], _chainB[5], _branchpoint);
            renderer.RenderBlock(_chainA[5], _chainB[5]);
            renderer.RenderReorgEnd(_chainA[5], _chainB[5], _branchpoint);
            Assert.Equal(_chainA[2], delayedRenderer.Tip);
            Assert.Empty(reorgLogs);
            Assert.Equal(expectedBlockLogs, blockLogs);

            // #4  -> 2 confirms; tip changed -> #3
            // #5  -> 1 confirm;  #6 -> no confirm
            // #5' -> no confirms
            renderer.RenderReorg(_chainB[5], _chainA[6], _branchpoint);
            renderer.RenderBlock(_chainB[5], _chainA[6]);
            renderer.RenderReorgEnd(_chainB[5], _chainA[6], _branchpoint);
            expectedBlockLogs.Add((_chainA[2], _chainA[3]));
            Assert.Equal(_chainA[3], delayedRenderer.Tip);
            Assert.Empty(reorgLogs);
            Assert.Equal(expectedBlockLogs, blockLogs);

            // #4  -> 2 confirms
            // #5  -> 1 confirm; #6  -> no confirm
            // #5' -> 1 confirm; #6' -> no confirm
            renderer.RenderReorg(_chainA[6], _chainB[6], _branchpoint);
            renderer.RenderBlock(_chainA[6], _chainB[6]);
            renderer.RenderReorgEnd(_chainA[6], _chainB[6], _branchpoint);
            Assert.Equal(_chainA[3], delayedRenderer.Tip);
            Assert.Empty(reorgLogs);
            Assert.Equal(expectedBlockLogs, blockLogs);

            // #4  -> 3 confirms; tip changed -> #4
            // #5  -> 2 confirms; #6  -> 1 confirm; #7 -> no confirm
            // #5' -> 1 confirm;  #6' -> no confirm
            renderer.RenderReorg(_chainB[6], _chainA[7], _branchpoint);
            renderer.RenderBlock(_chainB[6], _chainA[7]);
            renderer.RenderReorgEnd(_chainB[6], _chainA[7], _branchpoint);
            expectedBlockLogs.Add((_chainA[3], _chainA[4]));
            Assert.Equal(_chainA[4], delayedRenderer.Tip);
            Assert.Empty(reorgLogs);
            Assert.Equal(expectedBlockLogs, blockLogs);

            // #4  -> gone but still is tip
            // #5  -> 2 confirms; #6  -> 1 confirm; #7  -> no confirm
            // #5' -> 2 confirms; #6' -> 1 confirm; #7' -> no confirm
            renderer.RenderReorg(_chainA[7], _chainB[7], _branchpoint);
            renderer.RenderBlock(_chainA[7], _chainB[7]);
            renderer.RenderReorgEnd(_chainA[7], _chainB[7], _branchpoint);
            Assert.Equal(_chainA[4], delayedRenderer.Tip);
            Assert.Empty(reorgLogs);
            Assert.Equal(expectedBlockLogs, blockLogs);

            // #4  -> gone; tip changed -> #5; render(#4, #5)
            // #5  -> 3 confirms; #6  -> 2 confirms; #7  -> 1 confirm; #8 -> no confirm
            // #5' -> 2 confirms; #6' -> 1 confirm;  #7' -> no confirm
            renderer.RenderReorg(_chainB[7], _chainA[8], _branchpoint);
            renderer.RenderBlock(_chainB[7], _chainA[8]);
            renderer.RenderReorgEnd(_chainB[7], _chainA[8], _branchpoint);
            expectedBlockLogs.Add((_chainA[4], _chainA[5]));
            Assert.Equal(_chainA[5], delayedRenderer.Tip);
            Assert.Empty(reorgLogs);
            Assert.Equal(expectedBlockLogs, blockLogs);

            // tip changed -> #5'; render(#5, #5'); reorg(#5, #5', #4)
            // #5  -> 3 confirms; #6  -> 2 confirms; #7  -> 1 confirm; #8  -> no confirm
            // #5' -> 3 confirms; #6' -> 2 confirms; #7' -> 1 confirm; #8' -> no confirm
            renderer.RenderReorg(_chainA[8], _chainB[8], _branchpoint);
            renderer.RenderBlock(_chainA[8], _chainB[8]);
            renderer.RenderReorgEnd(_chainA[8], _chainB[8], _branchpoint);
            expectedBlockLogs.Add((_chainA[5], _chainB[5]));
            Assert.Equal(_chainB[5], delayedRenderer.Tip);
            Assert.Equal(new[] { (_chainA[5], _chainB[5], _branchpoint) }, reorgLogs);
            Assert.Equal(expectedBlockLogs, blockLogs);

            // tip changed -> #6'; render(#5', #6')
            // #5' -> gone; #6' -> 3 confirms; #7' -> 2 confirm; #8' -> 1 confirm; #9' -> 1 confirm
            renderer.RenderBlock(_chainB[8], _chainB[9]);
            expectedBlockLogs.Add((_chainB[5], _chainB[6]));
            Assert.Equal(_chainB[6], delayedRenderer.Tip);
            Assert.Single(reorgLogs);
            Assert.Equal(expectedBlockLogs, blockLogs);
        }
    }
}
