using System;
using System.Collections.Generic;
using System.Security.Cryptography;
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
        private static HashAlgorithmType _hashAlgorithm = HashAlgorithmType.Of<SHA256>();

        private static Block<DumbAction> _genesis =
            TestUtils.MineGenesisBlock<DumbAction>(_ => _hashAlgorithm);

        private static Block<DumbAction> _blockA =
            TestUtils.MineNextBlock(_genesis, _ => _hashAlgorithm);

        private static Block<DumbAction> _blockB =
            TestUtils.MineNextBlock(_genesis, _ => _hashAlgorithm);

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
            using (var renderer = new NonblockRenderer<DumbAction>(
                innerRenderer, 3, NonblockRenderer<DumbAction>.FullMode.DropNewest))
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
        }
    }
}
