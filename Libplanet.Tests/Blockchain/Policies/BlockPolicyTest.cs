using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Security.Cryptography;
using Libplanet.Blockchain.Policies;
using Libplanet.Blocks;
using Libplanet.Tests.Common.Action;
using Libplanet.Tests.Store;
using Libplanet.Tx;
using Xunit;
using Xunit.Abstractions;

namespace Libplanet.Tests.Blockchain.Policies
{
    public class BlockPolicyTest : IClassFixture<FileStoreFixture>
    {
        private static readonly DateTime FixtureEpoch =
            new DateTime(2018, 1, 1, 0, 0, 0, DateTimeKind.Utc);

        private readonly ITestOutputHelper _output;

        public BlockPolicyTest(ITestOutputHelper output)
        {
            _output = output;
        }

        [Fact]
        public void Constructors()
        {
            var tenSec = new TimeSpan(0, 0, 10);
            var a = new BlockPolicy<BaseAction>(tenSec);
            Assert.Equal(tenSec, a.BlockInterval);

            var b = new BlockPolicy<BaseAction>(65);
            Assert.Equal(
                new TimeSpan(0, 1, 5),
                b.BlockInterval
            );

            var c = new BlockPolicy<BaseAction>();
            Assert.Equal(
                new TimeSpan(0, 0, 5),
                c.BlockInterval
            );
        }

        [Fact]
        public void GetNextBlockDifficulty()
        {
            var policy = new BlockPolicy<BaseAction>(new TimeSpan(3, 0, 0));
            Block<BaseAction>[] blocks = MineBlocks(
                new[] { (0, 0U), (1, 1U), (3, 2U), (7, 3U), (9, 2U), (13, 3U) }
            ).ToArray();

            Assert.Equal(
                0U,
                policy.GetNextBlockDifficulty(blocks.Take(0))
            );
            Assert.Equal(
                1U,
                policy.GetNextBlockDifficulty(blocks.Take(1))
            );
            Assert.Equal(
                2U,
                policy.GetNextBlockDifficulty(blocks.Take(2))
            );
            Assert.Equal(
                3U,
                policy.GetNextBlockDifficulty(blocks.Take(3))
            );
            Assert.Equal(
                2U,
                policy.GetNextBlockDifficulty(blocks.Take(4))
            );
            Assert.Equal(
                3U,
                policy.GetNextBlockDifficulty(blocks.Take(5))
            );
            Assert.Equal(
                2U,
                policy.GetNextBlockDifficulty(blocks)
            );
        }

        [Fact]
        public void ValidateBlocks()
        {
            var policy = new BlockPolicy<BaseAction>(new TimeSpan(3, 0, 0));

            // The genesis block must has the index #0.
            Assert.IsType<InvalidBlockIndexException>(
                policy.ValidateBlocks(
                    MineBlocks(
                        new[] { (0, 0U) },
                        fields =>
                        {
                            fields.Index = 1UL;
                            return fields;
                        }
                    ),
                    FixtureEpoch + new TimeSpan(0, 1, 0)
                )
            );

            // The genesis block must not have PreviousHash
            Assert.IsType<InvalidBlockPreviousHashException>(
                policy.ValidateBlocks(
                    MineBlocks(
                        new[] { (0, 0U) },
                        fields =>
                        {
                            fields.PreviousHash = default(HashDigest<SHA256>);
                            return fields;
                        }
                    ),
                    FixtureEpoch + new TimeSpan(0, 1, 0)
                )
            );

            // Block indices must be continous.
            Assert.IsType<InvalidBlockIndexException>(
                policy.ValidateBlocks(
                    MineBlocks(
                        new[] { (0, 0U), (1, 1U) },
                        fields =>
                        {
                            fields.Index = fields.Index == 0UL ? 0UL : 2UL;
                            return fields;
                        }
                    ),
                    FixtureEpoch + new TimeSpan(1, 1, 0)
                )
            );

            // Block difficulties depend on interval between previous block
            // and previous of previous block.  If an interval is shorter than
            // BlockInterval (3 hours in this test case) it should be raised.
            // Otherwise it should be dropped.  It should be always raised or
            // dropped by only 1.
            Assert.Null(
                policy.ValidateBlocks(
                    MineBlocks(
                        new[] { (0, 0U), (1, 1U), (3, 2U) }
                    ),
                    FixtureEpoch + new TimeSpan(3, 1, 0)
                )
            );
            Assert.IsType<InvalidBlockDifficultyException>(
                policy.ValidateBlocks(
                    MineBlocks(
                        new[] { (0, 0U), (1, 1U), (3, 1U) }
                    ),
                    FixtureEpoch + new TimeSpan(3, 1, 0)
                )
            );
            Assert.Null(
                policy.ValidateBlocks(
                    MineBlocks(
                        new[] { (0, 0U), (1, 1U), (5, 2U), (9, 1U) }
                    ),
                    FixtureEpoch + new TimeSpan(9, 1, 0)
                )
            );
            Assert.Null(
                policy.ValidateBlocks(
                    MineBlocks(
                        new[] { (0, 0U), (1, 1U), (5, 2U), (9, 5U) }
                    ),
                    FixtureEpoch + new TimeSpan(9, 1, 0)
                )
            );

            // A block's previous hash must refer to the hash of the block
            // appeared right before.
            Assert.IsType<InvalidBlockPreviousHashException>(
                policy.ValidateBlocks(
                    MineBlocks(
                        new[] { (0, 0U), (1, 1U), (5, 2U) },
                        fields =>
                        {
                            if (fields.Index >= 2)
                            {
                                fields.PreviousHash =
                                    default(HashDigest<SHA256>);
                            }

                            return fields;
                        }
                    ),
                    FixtureEpoch + new TimeSpan(5, 1, 0)
                )
            );

            // Block timestamp should not be overlapped.
            Assert.IsType<InvalidBlockTimestampException>(
                policy.ValidateBlocks(
                    MineBlocks(
                        new[] { (0, 0U), (2, 1U), (1, 2U) }
                    ),
                    FixtureEpoch + new TimeSpan(2, 1, 0)
                )
            );

            // Returns null if blocks are valid.
            Assert.Null(
                policy.ValidateBlocks(
                    MineBlocks(
                        new[] { (0, 0U), (1, 1U), (3, 2U), (7, 3U), (9, 2U) }
                    ),
                    FixtureEpoch + new TimeSpan(9, 1, 0)
                )
            );
        }

        private IEnumerable<Block<BaseAction>> MineBlocks(
            (int, uint)[] blockArgs,
            Func<BlockFields, BlockFields> interprocess = null
        )
        {
            _output.WriteLine($"MineBlocks({blockArgs.Length}):");
            var miner = default(Address);
            ulong i = 0;
            HashDigest<SHA256>? previousHash = null;
            foreach ((int timestampHour, uint d) in blockArgs)
            {
                uint difficulty = d;
                var timestamp =
                    FixtureEpoch + TimeSpan.FromHours(timestampHour);
                if (interprocess != null)
                {
                    BlockFields fields = interprocess(
                        new BlockFields
                        {
                            Index = i,
                            Difficulty = difficulty,
                            PreviousHash = previousHash,
                            Timestamp = timestamp,
                        }
                    );
                    i = fields.Index;
                    difficulty = fields.Difficulty;
                    previousHash = fields.PreviousHash;
                    timestamp = fields.Timestamp;
                }

                Block<BaseAction> block = Block<BaseAction>.Mine(
                    i,
                    difficulty,
                    miner,
                    previousHash,
                    timestamp,
                    new Transaction<BaseAction>[0]
                );
                _output.WriteLine(
                    $"#{i}: {block.Hash}, difficulty={block.Difficulty}, " +
                    $"previousBlock={block.PreviousHash}, " +
                    $"timestamp={block.Timestamp}"
                );
                yield return block;
                previousHash = block.Hash;
                i++;
            }

            _output.WriteLine(string.Empty);
        }

        private struct BlockFields
        {
            internal ulong Index;
            internal uint Difficulty;
            internal HashDigest<SHA256>? PreviousHash;
            internal DateTime Timestamp;
        }
    }
}
