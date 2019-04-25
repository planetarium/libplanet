using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using Libplanet.Blockchain;
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
        private static readonly DateTimeOffset FixtureEpoch =
            new DateTimeOffset(2018, 1, 1, 0, 0, 0, TimeSpan.Zero);

        private readonly ITestOutputHelper _output;

        private List<Block<DumbAction>> _blocks;
        private IBlockPolicy<DumbAction> _policy;
        private List<Transaction<DumbAction>> _emptyTransaction;
        private Block<DumbAction> _genesis;
        private Block<DumbAction> _validNext;

        public BlockPolicyTest(ITestOutputHelper output)
        {
            _output = output;
            _blocks = new List<Block<DumbAction>>();
            _policy = new BlockPolicy<DumbAction>(
                TimeSpan.FromMilliseconds(5000),
                1024,
                128);
            _emptyTransaction = new List<Transaction<DumbAction>>();
            _genesis = TestUtils.MineGenesis<DumbAction>();
            _validNext = Block<DumbAction>.Mine(
                1,
                1024,
                _genesis.Miner.Value,
                _genesis.Hash,
                _genesis.Timestamp.AddSeconds(1),
                _emptyTransaction);
        }

        [Fact]
        public void Constructors()
        {
            var tenSec = new TimeSpan(0, 0, 10);
            var a = new BlockPolicy<DumbAction>(tenSec, 1024, 128);
            Assert.Equal(tenSec, a.BlockInterval);

            var b = new BlockPolicy<DumbAction>(65000);
            Assert.Equal(
                new TimeSpan(0, 1, 5),
                b.BlockInterval);

            var c = new BlockPolicy<DumbAction>();
            Assert.Equal(
                new TimeSpan(0, 0, 5),
                c.BlockInterval);

            Assert.Throws<ArgumentOutOfRangeException>(
                () => new BlockPolicy<DumbAction>(tenSec.Negate(), 1024, 128));
            Assert.Throws<ArgumentOutOfRangeException>(
                () => new BlockPolicy<DumbAction>(-5));

            Assert.Throws<ArgumentOutOfRangeException>(() =>
                new BlockPolicy<DumbAction>(tenSec, 0, 128));
            Assert.Throws<ArgumentOutOfRangeException>(() =>
                new BlockPolicy<DumbAction>(tenSec, 1024, 1024));
        }

        [Fact]
        public void GetNextBlockDifficulty()
        {
            var policy = new BlockPolicy<DumbAction>(new TimeSpan(3, 0, 0), 1024, 128);
            Block<DumbAction>[] blocks = MineBlocks(
                new[] { (0, 0), (1, 1024), (3, 1032), (7, 1040), (9, 1040), (13, 1048) }
            ).ToArray();

            Assert.Equal(
                0,
                policy.GetNextBlockDifficulty(blocks.Take(0).ToList())
            );
            Assert.Equal(
                1024,
                policy.GetNextBlockDifficulty(blocks.Take(1).ToList())
            );
            Assert.Equal(
                1032,
                policy.GetNextBlockDifficulty(blocks.Take(2).ToList())
            );
            Assert.Equal(
                1040,
                policy.GetNextBlockDifficulty(blocks.Take(3).ToList())
            );
            Assert.Equal(
                1040,
                policy.GetNextBlockDifficulty(blocks.Take(4).ToList())
            );
            Assert.Equal(
                1048,
                policy.GetNextBlockDifficulty(blocks.Take(5).ToList())
            );
            Assert.Equal(
                1048,
                policy.GetNextBlockDifficulty(blocks)
            );
        }

        [Fact]
        public void ValidateNextBlock()
        {
            _policy.ValidateNextBlock(_blocks, _genesis);
            _blocks.Add(_genesis);

            var validNextBlock = Block<DumbAction>.Mine(
                1,
                1,
                _genesis.Miner.Value,
                _genesis.Hash,
                _genesis.Timestamp.AddDays(1),
                _emptyTransaction);
            _policy.ValidateNextBlock(_blocks, validNextBlock);
        }

        [Fact]
        public void ValidateNextBlockGenesis()
        {
            var validGenesis = TestUtils.MineGenesis<DumbAction>();
            Assert.Null(
                _policy.ValidateNextBlock(_blocks, validGenesis));

            var invalidIndexGenesis = TestUtils.MineNext(validGenesis);
            Assert.IsType<InvalidBlockIndexException>(
                _policy.ValidateNextBlock(_blocks, invalidIndexGenesis));

            var invalidPreviousHashGenesis = new Block<DumbAction>(
                 0,
                 0,
                 new Nonce(new byte[] { 0x01, 0x00, 0x00, 0x00 }),
                 _genesis.Miner,
                 new HashDigest<SHA256>(new byte[32]),
                 _genesis.Timestamp,
                 _emptyTransaction);
            Assert.IsType<InvalidBlockPreviousHashException>(
                _policy.ValidateNextBlock(
                    _blocks,
                    invalidPreviousHashGenesis));
        }

        [Fact]
        public void ValidateNextBlockInvalidIndex()
        {
            _blocks.Add(_genesis);
            _blocks.Add(_validNext);

            var invalidIndexBlock = Block<DumbAction>.Mine(
                1,
                1,
                _genesis.Miner.Value,
                _validNext.Hash,
                _validNext.Timestamp.AddSeconds(1),
                _emptyTransaction);
            Assert.IsType<InvalidBlockIndexException>(
                _policy.ValidateNextBlock(_blocks, invalidIndexBlock));
        }

        [Fact]
        public void ValidateNextBlockInvalidDifficulty()
        {
            _blocks.Add(_genesis);
            _blocks.Add(_validNext);

            var invalidDifficultyBlock = Block<DumbAction>.Mine(
                2,
                1,
                _genesis.Miner.Value,
                _validNext.Hash,
                _validNext.Timestamp.AddSeconds(1),
                _emptyTransaction);
            Assert.IsType<InvalidBlockDifficultyException>(
                _policy.ValidateNextBlock(
                    _blocks,
                    invalidDifficultyBlock));
        }

        [Fact]
        public void ValidateNextBlockInvalidPreviousHash()
        {
            _blocks.Add(_genesis);
            _blocks.Add(_validNext);

            var invalidPreviousHashBlock = Block<DumbAction>.Mine(
                2,
                1032,
                _genesis.Miner.Value,
                new HashDigest<SHA256>(new byte[32]),
                _validNext.Timestamp.AddSeconds(1),
                _emptyTransaction);
            Assert.IsType<InvalidBlockPreviousHashException>(
                _policy.ValidateNextBlock(
                    _blocks,
                    invalidPreviousHashBlock));
        }

        [Fact]
        public void ValidateNextBlockInvalidTimestamp()
        {
            _blocks.Add(_genesis);
            _blocks.Add(_validNext);

            var invalidPreviousTimestamp = Block<DumbAction>.Mine(
                2,
                1032,
                _genesis.Miner.Value,
                _validNext.Hash,
                _validNext.Timestamp.Subtract(TimeSpan.FromSeconds(1)),
                _emptyTransaction);
            Assert.IsType<InvalidBlockTimestampException>(
                _policy.ValidateNextBlock(
                    _blocks,
                    invalidPreviousTimestamp));
        }

        [Fact]
        public void ValidateBlocks()
        {
            var policy = new BlockPolicy<DumbAction>(new TimeSpan(3, 0, 0), 1024, 128);

            // The genesis block must has the index #0.
            Assert.IsType<InvalidBlockIndexException>(
                policy.ValidateBlocks(
                    MineBlocks(
                        new[] { (0, 0) },
                        fields =>
                        {
                            fields.Index = 1;
                            return fields;
                        }).ToList(),
                    FixtureEpoch + new TimeSpan(0, 1, 0)
                )
            );

            // The genesis block must not have PreviousHash
            Assert.IsType<InvalidBlockPreviousHashException>(
                policy.ValidateBlocks(
                    MineBlocks(
                        new[] { (0, 0) },
                        fields =>
                        {
                            fields.PreviousHash = default(HashDigest<SHA256>);
                            return fields;
                        }).ToList(),
                    FixtureEpoch + new TimeSpan(0, 1, 0)
                )
            );

            // Block indices must be continous.
            Assert.IsType<InvalidBlockIndexException>(
                policy.ValidateBlocks(
                    MineBlocks(
                        new[] { (0, 0), (1, 1) },
                        fields =>
                        {
                            fields.Index = fields.Index == 0 ? 0 : 2;
                            return fields;
                        }).ToList(),
                    FixtureEpoch + new TimeSpan(1, 1, 0)
                )
            );

            // Block difficulties depend on interval between previous block
            // and previous of previous block.  If an interval is shorter than
            // BlockInterval (3 hours in this test case) it should be raised.
            // Otherwise it should be dropped.
            Assert.Null(
                policy.ValidateBlocks(
                    MineBlocks(
                        new[] { (0, 0), (1, 1024), (3, 1032) }).ToList(),
                    FixtureEpoch + new TimeSpan(3, 1, 0)
                )
            );
            Assert.IsType<InvalidBlockDifficultyException>(
                policy.ValidateBlocks(
                    MineBlocks(
                        new[] { (0, 0), (1, 1024), (3, 1024) }).ToList(),
                    FixtureEpoch + new TimeSpan(3, 1, 0)
                )
            );
            Assert.Null(
                policy.ValidateBlocks(
                    MineBlocks(
                        new[] { (0, 0), (1, 1024), (5, 1032), (9, 1032) }).ToList(),
                    FixtureEpoch + new TimeSpan(9, 1, 0)
                )
            );
            Assert.Null(
                policy.ValidateBlocks(
                    MineBlocks(
                        new[] { (0, 0), (1, 1024), (5, 1032), (9, 1032) }).ToList(),
                    FixtureEpoch + new TimeSpan(9, 1, 0)
                )
            );

            // A block's previous hash must refer to the hash of the block
            // appeared right before.
            Assert.IsType<InvalidBlockPreviousHashException>(
                policy.ValidateBlocks(
                    MineBlocks(
                        new[] { (0, 0), (1, 1024), (5, 1032) },
                        fields =>
                        {
                            if (fields.Index >= 2)
                            {
                                fields.PreviousHash =
                                    default(HashDigest<SHA256>);
                            }

                            return fields;
                        }).ToList(),
                    FixtureEpoch + new TimeSpan(5, 1, 0)
                )
            );

            // Block timestamp should not be overlapped.
            Assert.IsType<InvalidBlockTimestampException>(
                policy.ValidateBlocks(
                    MineBlocks(
                        new[] { (0, 0), (2, 1024), (1, 1032) }).ToList(),
                    FixtureEpoch + new TimeSpan(2, 1, 0)
                )
            );

            // Returns null if blocks are valid.
            Assert.Null(
                policy.ValidateBlocks(
                    MineBlocks(
                        new[] { (0, 0), (1, 1024), (3, 1032), (7, 1040), (9, 1040) })
                    .ToList(),
                    FixtureEpoch + new TimeSpan(9, 1, 0)
                )
            );
        }

        private IEnumerable<Block<DumbAction>> MineBlocks(
            (int, int)[] blockArgs,
            Func<BlockFields, BlockFields> interprocess = null
        )
        {
            _output.WriteLine($"MineBlocks({blockArgs.Length}):");
            var miner = default(Address);
            long i = 0;
            HashDigest<SHA256>? previousHash = null;
            foreach ((int timestampHour, long d) in blockArgs)
            {
                long difficulty = d;
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

                Block<DumbAction> block = Block<DumbAction>.Mine(
                    i,
                    difficulty,
                    miner,
                    previousHash,
                    timestamp,
                    new Transaction<DumbAction>[0]
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
            internal long Index;
            internal long Difficulty;
            internal HashDigest<SHA256>? PreviousHash;
            internal DateTimeOffset Timestamp;
        }
    }
}
