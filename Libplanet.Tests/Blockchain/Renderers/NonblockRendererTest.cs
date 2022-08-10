using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Threading;
using Libplanet.Blockchain.Renderers;
using Libplanet.Blocks;
using Libplanet.Tests.Common.Action;
using xRetry;
using Xunit;

namespace Libplanet.Tests.Blockchain.Renderers
{
    public class NonblockRendererTest
    {
        private static Block<DumbAction> _genesis =
            TestUtils.MineGenesisBlock<DumbAction>(TestUtils.GenesisMiner);

        private static Block<DumbAction> _blockA =
            TestUtils.MineNextBlock(_genesis, TestUtils.GenesisMiner);

        private static Block<DumbAction> _blockB =
            TestUtils.MineNextBlock(_genesis, TestUtils.GenesisMiner);

        [SuppressMessage(
            "SonarQube",
            "S3966",
            Justification = "Tests if it is fine with double disposing."
        )]
        [RetryFact]
        public void Test()
        {
            const int sleepSeconds = 1;
            var log = new List<string>();
            var innerRenderer = new AnonymousRenderer<DumbAction>()
            {
                BlockRenderer = (Block<DumbAction> oldTip, Block<DumbAction> newTip) =>
                {
                    Thread.Sleep(sleepSeconds * 1000);
                    log.Add($"Block({oldTip.Index}, {newTip.Index})");
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
            };
            var renderer = new NonblockRenderer<DumbAction>(
                    innerRenderer, 3, NonblockRenderer<DumbAction>.FullMode.DropNewest);
            using (renderer)
            {
                DateTimeOffset start = DateTimeOffset.UtcNow;
                renderer.RenderReorg(_blockA, _blockB, _genesis);
                Assert.Empty(log);
                renderer.RenderBlock(_blockA, _blockB);
                Assert.Empty(log);
                renderer.RenderReorgEnd(_blockA, _blockB, _genesis);
                Assert.Empty(log);
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
                    "Block(1, 1)",
                    "ReorgEnd(1, 1, 0)",
                },
                log
            );

            // Any render events after disposed are dropped.
            log.Clear();
            renderer.RenderReorg(_blockB, _blockA, _genesis);
            Assert.Empty(log);

            // Double disposing does nothing.
            renderer.Dispose();
        }

        [Theory]
        [InlineData(4)]
        [InlineData(8)]
        [InlineData(16)]
        [InlineData(32)]
        public void StatingWorkerThreadOnlyOnce(int parallel)
        {
            // This is a regression test for the follwing bug:
            // https://github.com/planetarium/libplanet/issues/1772
            var renderer = new NonblockRenderer<DumbAction>(
                new AnonymousRenderer<DumbAction>(),
                25,
                NonblockRenderer<DumbAction>.FullMode.DropNewest
            );
            Thread[] threads = new Thread[parallel];
            Exception[] errors = new Exception[threads.Length];
            using (renderer)
            {
                for (int i = 0; i < threads.Length; i++)
                {
                    // Declare a new variable for each iteration to avoid being captured by closure:
                    int threadNo = i;
                    threads[threadNo] = new Thread(() =>
                    {
                        try
                        {
                            renderer.RenderBlock(_blockA, _blockB);
                        }
                        catch (Exception e)
                        {
                            errors[threadNo] = e;
                        }
                    });
                }

                for (int i = 0; i < threads.Length; i++)
                {
                    threads[i].Start();
                }

                for (int i = 0; i < threads.Length; i++)
                {
                    threads[i].Join();
                }
            }

            for (int i = 0; i < threads.Length; i++)
            {
                Assert.Null(errors[i]);
            }
        }
    }
}
