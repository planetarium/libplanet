using System;
using System.Collections.Generic;
using System.Linq;
using Libplanet.Blockchain;
using Libplanet.Blocks;
using Libplanet.Tests.Blocks;
using Xunit;
using Xunit.Abstractions;

namespace Libplanet.Tests.Blockchain
{
    public class TotalDifficultyComparerTest
    {
        private static readonly IBlockExcerpt[] BlockExcerpts =
        {
            new SimpleBlockExcerpt
            { // 0
                ProtocolVersion = BlockMetadata.CurrentProtocolVersion - 1,
                Index = 604665,
                Hash = H("4f612467ed79cb854d1901f131ccfc8a40bba89651e1a9e1dcea1287dd70d8ee"),
                TotalDifficulty = 21584091240753,
            },
            new SimpleBlockExcerpt
            { // 1
                ProtocolVersion = BlockMetadata.CurrentProtocolVersion - 1,
                Index = 604664,
                Hash = H("9a87556f3198d8bd48300d2a6a5957d661c760a7fb72ef4a4b8c01c155b77e99"),
                TotalDifficulty = 21584061959429,
            },
            new SimpleBlockExcerpt
            { // 2
                ProtocolVersion = BlockMetadata.CurrentProtocolVersion - 1,
                Index = 604663,
                Hash = H("11358698ce49a8356c12578bdbdc986927ef02e82e3cfef2b6385023a56bad41"),
                TotalDifficulty = 21584032692395,
            },
            new SimpleBlockExcerpt
            { // 3
                ProtocolVersion = BlockMetadata.CurrentProtocolVersion,
                Index = 604662,
                Hash = H("3603b146dd66090df531d99061b9fb15e3314cd753b333cfc2432867620fd4f1"),
                TotalDifficulty = 21584003439644,
            },
            new SimpleBlockExcerpt
            { // 4
                ProtocolVersion = BlockMetadata.CurrentProtocolVersion - 1,
                Index = 604661,
                Hash = H("3ff1eeec63a8359cd4f805fdbc6461e1fb7429aa10ba2d0e99c515a56d942e0a"),
                TotalDifficulty = 21584091240754,
            },
        };

        private readonly ITestOutputHelper _output;

        public TotalDifficultyComparerTest(ITestOutputHelper output)
        {
            _output = output;
        }

        [Fact]
        public void Sort()
        {
            void PrintBlocks(IEnumerable<IBlockExcerpt> blocks)
            {
                foreach (IBlockExcerpt b in blocks)
                {
                    _output.WriteLine(
                        nameof(IBlockExcerpt) + "[{0}]",
                        Array.IndexOf(BlockExcerpts, b)
                    );
                }

                _output.WriteLine(string.Empty);
            }

            DateTimeOffset currentTime = DateTimeOffset.FromUnixTimeSeconds(1609426815);
            TimeSpan outdateAfter = TimeSpan.FromSeconds(15);
            var comparer = new TotalDifficultyComparer();
            IBlockExcerpt[] sorted = BlockExcerpts.OrderBy(e => e, comparer).ToArray();
            PrintBlocks(sorted);
            Assert.True(BlockExcerpts[2].ExcerptEquals(sorted[0]));
            Assert.True(BlockExcerpts[1].ExcerptEquals(sorted[1]));
            Assert.True(BlockExcerpts[0].ExcerptEquals(sorted[2]));
            Assert.True(BlockExcerpts[4].ExcerptEquals(sorted[3]));
            Assert.True(BlockExcerpts[3].ExcerptEquals(sorted[4]));

            sorted = BlockExcerpts
                .OrderBy(e => e, comparer)
                .ToArray();
            PrintBlocks(sorted);
            Assert.True(BlockExcerpts[2].ExcerptEquals(sorted[0]));
            Assert.True(BlockExcerpts[1].ExcerptEquals(sorted[1]));
            Assert.True(BlockExcerpts[0].ExcerptEquals(sorted[2]));
            Assert.True(BlockExcerpts[4].ExcerptEquals(sorted[3]));
            Assert.True(BlockExcerpts[3].ExcerptEquals(sorted[4]));

            sorted = BlockExcerpts
                .OrderBy(e => e, comparer)
                .ToArray();
            PrintBlocks(sorted);
            Assert.True(BlockExcerpts[2].ExcerptEquals(sorted[0]));
            Assert.True(BlockExcerpts[1].ExcerptEquals(sorted[1]));
            Assert.True(BlockExcerpts[0].ExcerptEquals(sorted[2]));
            Assert.True(BlockExcerpts[4].ExcerptEquals(sorted[3]));
            Assert.True(BlockExcerpts[3].ExcerptEquals(sorted[4]));
        }

        private static BlockHash H(string h) => BlockHash.FromString(h);
    }
}
