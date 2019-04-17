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

        private FileStoreFixture _fx;
        private BlockChain<DumbAction> _blockChain;
        private IBlockPolicy<DumbAction> _policy;
        private List<Transaction<DumbAction>> _emptyTransaction;
        private Block<DumbAction> _genesis;
        private Block<DumbAction> _validNext;

        public BlockPolicyTest(ITestOutputHelper output)
        {
            _output = output;
            _fx = new FileStoreFixture();
            _blockChain = new BlockChain<DumbAction>(
                new BlockPolicy<DumbAction>(),
                _fx.Store
            );
            _policy = _blockChain.Policy;
            _emptyTransaction = new List<Transaction<DumbAction>>();
            _genesis = TestUtils.MineGenesis<DumbAction>();
            _validNext = Block<DumbAction>.Mine(
                1,
                1,
                _genesis.Miner.Value,
                _genesis.Hash,
                _genesis.Timestamp.AddSeconds(1),
                _emptyTransaction);
        }

        [Fact]
        public void Constructors()
        {
            var tenSec = new TimeSpan(0, 0, 10);
            var a = new BlockPolicy<DumbAction>(tenSec);
            Assert.Equal(tenSec, a.BlockInterval);

            var b = new BlockPolicy<DumbAction>(65000);
            Assert.Equal(
                new TimeSpan(0, 1, 5),
                b.BlockInterval
            );

            var c = new BlockPolicy<DumbAction>();
            Assert.Equal(
                new TimeSpan(0, 0, 5),
                c.BlockInterval
            );

            Assert.Throws<ArgumentOutOfRangeException>(
                () => new BlockPolicy<DumbAction>(tenSec.Negate())
            );
            Assert.Throws<ArgumentOutOfRangeException>(
                () => new BlockPolicy<DumbAction>(-5)
            );
        }

        [Fact]
        public void GetNextBlockDifficulty()
        {
            var policy = new BlockPolicy<DumbAction>(new TimeSpan(3, 0, 0));
            Block<DumbAction>[] blocks = MineBlocks(
                new[] { (0, 0), (1, 1), (3, 2), (7, 3), (9, 2), (13, 3) }
            ).ToArray();

            Assert.Equal(
                0,
                policy.GetNextBlockDifficulty(blocks.Take(0).ToList())
            );
            Assert.Equal(
                1,
                policy.GetNextBlockDifficulty(blocks.Take(1).ToList())
            );
            Assert.Equal(
                2,
                policy.GetNextBlockDifficulty(blocks.Take(2).ToList())
            );
            Assert.Equal(
                3,
                policy.GetNextBlockDifficulty(blocks.Take(3).ToList())
            );
            Assert.Equal(
                2,
                policy.GetNextBlockDifficulty(blocks.Take(4).ToList())
            );
            Assert.Equal(
                3,
                policy.GetNextBlockDifficulty(blocks.Take(5).ToList())
            );
            Assert.Equal(
                2,
                policy.GetNextBlockDifficulty(blocks)
            );
        }

        [Fact]
        public void ValidateBlockToAppend()
        {
            _blockChain.Append(_genesis);

            var validNextBlock = Block<DumbAction>.Mine(
                1,
                1,
                _genesis.Miner.Value,
                _genesis.Hash,
                _genesis.Timestamp.AddDays(1),
                _emptyTransaction);
            _policy.ValidateBlockToAppend(_blockChain, validNextBlock);
            _blockChain.Append(validNextBlock);
        }

        [Fact]
        public void ValidateBlockToAppendGenesis()
        {
            var policy = _blockChain.Policy;

            var validGenesis = TestUtils.MineGenesis<DumbAction>();
            Assert.Null(
                policy.ValidateBlockToAppend(_blockChain, validGenesis));

            var invalidIndexGenesis = TestUtils.MineNext(validGenesis);
            Assert.IsType<InvalidBlockIndexException>(
                policy.ValidateBlockToAppend(_blockChain, invalidIndexGenesis));

            var invalidPreviousHashGenesis = new Block<DumbAction>(
                 0,
                 0,
                 new Nonce(new byte[] { 0x01, 0x00, 0x00, 0x00 }),
                 _genesis.Miner,
                 new HashDigest<SHA256>(new byte[32]),
                 _genesis.Timestamp,
                 _emptyTransaction);
            Assert.IsType<InvalidBlockPreviousHashException>(
                policy.ValidateBlockToAppend(
                    _blockChain,
                    invalidPreviousHashGenesis));
        }

        [Fact]
        public void ValidateBlockToAppendInvalidIndex()
        {
            _blockChain.Append(_genesis);
            _blockChain.Append(_validNext);

            var invalidIndexBlock = Block<DumbAction>.Mine(
                1,
                1,
                _genesis.Miner.Value,
                _validNext.Hash,
                _validNext.Timestamp.AddSeconds(1),
                _emptyTransaction);
            Assert.IsType<InvalidBlockIndexException>(
                _policy.ValidateBlockToAppend(_blockChain, invalidIndexBlock));
        }

        [Fact]
        public void ValidateBlockToAppendInvalidDifficulty()
        {
            _blockChain.Append(_genesis);
            _blockChain.Append(_validNext);

            var invalidDifficultyBlock = Block<DumbAction>.Mine(
                2,
                1,
                _genesis.Miner.Value,
                _validNext.Hash,
                _validNext.Timestamp.AddSeconds(1),
                _emptyTransaction);
            Assert.IsType<InvalidBlockDifficultyException>(
                _policy.ValidateBlockToAppend(
                    _blockChain,
                    invalidDifficultyBlock));
        }

        [Fact]
        public void ValidateBlockToAppendInvalidPreviousHash()
        {
            _blockChain.Append(_genesis);
            _blockChain.Append(_validNext);

            var invalidPreviousHashBlock = Block<DumbAction>.Mine(
                2,
                2,
                _genesis.Miner.Value,
                new HashDigest<SHA256>(new byte[32]),
                _validNext.Timestamp.AddSeconds(1),
                _emptyTransaction);
            Assert.IsType<InvalidBlockPreviousHashException>(
                _policy.ValidateBlockToAppend(
                    _blockChain,
                    invalidPreviousHashBlock));
        }

        [Fact]
        public void ValidateBlockToAppendInvalidTimestamp()
        {
            _blockChain.Append(_genesis);
            _blockChain.Append(_validNext);

            var invalidPreviousTimestamp = Block<DumbAction>.Mine(
                2,
                2,
                _genesis.Miner.Value,
                _validNext.Hash,
                _validNext.Timestamp.Subtract(TimeSpan.FromSeconds(1)),
                _emptyTransaction);
            Assert.IsType<InvalidBlockTimestampException>(
                _policy.ValidateBlockToAppend(
                    _blockChain,
                    invalidPreviousTimestamp));
        }

        [Fact]
        public void ValidateBlocks()
        {
            var policy = new BlockPolicy<DumbAction>(new TimeSpan(3, 0, 0));

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
            // Otherwise it should be dropped.  It should be always raised or
            // dropped by only 1.
            Assert.Null(
                policy.ValidateBlocks(
                    MineBlocks(
                        new[] { (0, 0), (1, 1), (3, 2) }).ToList(),
                    FixtureEpoch + new TimeSpan(3, 1, 0)
                )
            );
            Assert.IsType<InvalidBlockDifficultyException>(
                policy.ValidateBlocks(
                    MineBlocks(
                        new[] { (0, 0), (1, 1), (3, 1) }).ToList(),
                    FixtureEpoch + new TimeSpan(3, 1, 0)
                )
            );
            Assert.Null(
                policy.ValidateBlocks(
                    MineBlocks(
                        new[] { (0, 0), (1, 1), (5, 2), (9, 1) }).ToList(),
                    FixtureEpoch + new TimeSpan(9, 1, 0)
                )
            );
            Assert.Null(
                policy.ValidateBlocks(
                    MineBlocks(
                        new[] { (0, 0), (1, 1), (5, 2), (9, 5) }).ToList(),
                    FixtureEpoch + new TimeSpan(9, 1, 0)
                )
            );

            // A block's previous hash must refer to the hash of the block
            // appeared right before.
            Assert.IsType<InvalidBlockPreviousHashException>(
                policy.ValidateBlocks(
                    MineBlocks(
                        new[] { (0, 0), (1, 1), (5, 2) },
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
                        new[] { (0, 0), (2, 1), (1, 2) }).ToList(),
                    FixtureEpoch + new TimeSpan(2, 1, 0)
                )
            );

            // Returns null if blocks are valid.
            Assert.Null(
                policy.ValidateBlocks(
                    MineBlocks(
                        new[] { (0, 0), (1, 1), (3, 2), (7, 3), (9, 2) })
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
            foreach ((int timestampHour, int d) in blockArgs)
            {
                int difficulty = d;
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
            internal int Difficulty;
            internal HashDigest<SHA256>? PreviousHash;
            internal DateTimeOffset Timestamp;
        }
    }
}
