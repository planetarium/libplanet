using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Security.Cryptography;
using Libplanet.Action;
using Libplanet.Blocks;

namespace Libplanet.Blockchain.Policies
{
    /// <summary>
    /// A default implementation of <see cref="IBlockPolicy{T}"/> interface.
    /// </summary>
    /// <typeparam name="T">An <see cref="IAction"/> type.  It should match
    /// to <see cref="Block{T}"/>'s type parameter.</typeparam>
    public class BlockPolicy<T> : IBlockPolicy<T>
        where T : IAction
    {
        /// <summary>
        /// Creates a <see cref="BlockPolicy{T}"/> with configuring
        /// <see cref="BlockInterval"/> in seconds.
        /// </summary>
        /// <param name="blockIntervalSeconds">Configures
        /// <see cref="BlockInterval"/> in seconds.  5 seconds by default.
        /// </param>
        public BlockPolicy(int blockIntervalSeconds = 5)
            : this(
                TimeSpan.FromSeconds(blockIntervalSeconds)
            )
        {
        }

        /// <summary>
        /// Creates a <see cref="BlockPolicy{T}"/> with configuring
        /// <see cref="BlockInterval"/>.
        /// </summary>
        /// <param name="blockInterval">Configures <see cref="BlockInterval"/>.
        /// </param>
        public BlockPolicy(TimeSpan blockInterval)
        {
            if (blockInterval < TimeSpan.Zero)
            {
                throw new ArgumentOutOfRangeException(
                    nameof(blockInterval),
                    "Interval between blocks cannot be negative."
                );
            }

            BlockInterval = blockInterval;
        }

        /// <summary>
        /// An appropriate interval between consecutive <see cref="Block{T}"/>s.
        /// It is usually from 20 to 30 seconds.
        /// <para>If a previous interval took longer than this
        /// <see cref="GetNextBlockDifficulty(IEnumerable{Block{T}})"/> method
        /// raises the <see cref="Block{T}.Difficulty"/>.  If it took shorter
        /// than this <see cref="Block{T}.Difficulty"/> is dropped.</para>
        /// </summary>
        public TimeSpan BlockInterval { get; }

        /// <inheritdoc />
        public InvalidBlockException ValidateBlocks(
            IEnumerable<Block<T>> blocks,
            DateTime currentTime
        )
        {
            HashDigest<SHA256>? prevHash = null;
            DateTime? prevTimestamp = null;
            IEnumerable<(ulong i, DifficultyExpectation)> indexedDifficulties =
                ExpectDifficulties(blocks).Select(
                    (exp, i) => { return ((ulong)i, exp); }
                ).ToArray();

            foreach (var (i, exp) in indexedDifficulties)
            {
                Trace.Assert(exp.Block != null);
                Block<T> block = exp.Block;

                if (i != block.Index)
                {
                    return new InvalidBlockIndexException(
                        $"the expected block index is {i}, but its index is" +
                        $" {block.Index}'"
                    );
                }

                if (block.Difficulty < exp.Difficulty)
                {
                    return new InvalidBlockDifficultyException(
                        $"the expected difficulty of the block #{i} " +
                        $"is {exp.Difficulty}, but its difficulty is " +
                        $"{block.Difficulty}'"
                    );
                }

                if (block.PreviousHash != prevHash)
                {
                    if (prevHash == null)
                    {
                        return new InvalidBlockPreviousHashException(
                            "the genesis block must have not previous block"
                        );
                    }

                    return new InvalidBlockPreviousHashException(
                        $"the block #{i} is not continuous from the " +
                        $"block #{i - 1}; while previous block's hash is " +
                        $"{prevHash}, the block #{i}'s pointer to " +
                        "the previous hash refers to " +
                        (block.PreviousHash?.ToString() ?? "nothing")
                    );
                }

                if (block.Timestamp < prevTimestamp)
                {
                    return new InvalidBlockTimestampException(
                        $"the block #{i}'s timestamp ({block.Timestamp}) is " +
                        $"earlier than the block #{i - 1}'s ({prevTimestamp})"
                    );
                }

                prevHash = block.Hash;
                prevTimestamp = block.Timestamp;
            }

            return null;
        }

        /// <inheritdoc />
        public uint GetNextBlockDifficulty(IEnumerable<Block<T>> blocks)
        {
            return ExpectDifficulties(blocks, yieldNext: true)
                .First(t => t.Block == null)
                .Difficulty;
        }

        private IEnumerable<DifficultyExpectation> ExpectDifficulties(
            IEnumerable<Block<T>> blocks, bool yieldNext = false)
        {
            DateTime? prevTimestamp = null;
            DateTime? prevPrevTimestamp = null;

            if (yieldNext)
            {
                blocks = blocks.Append(null);
            }

            bool genesis = true;
            uint difficulty = 1;
            prevTimestamp = blocks.FirstOrDefault()?.Timestamp;

            foreach (Block<T> block in blocks)
            {
                if (genesis)
                {
                    // genesis block's difficulty is 0
                    yield return new DifficultyExpectation
                    {
                        Difficulty = 0,
                        Block = block,
                    };
                    genesis = false;
                    continue;
                }

                bool needMore =
                    prevPrevTimestamp != null &&
                    (
                        prevPrevTimestamp == null ||
                        prevTimestamp - prevPrevTimestamp < BlockInterval
                    );
                difficulty = Math.Max(
                    needMore ? difficulty + 1 : difficulty - 1,
                    1
                );
                yield return new DifficultyExpectation
                {
                    Difficulty = difficulty,
                    Block = block,
                };

                if (block != null)
                {
                    prevPrevTimestamp = prevTimestamp;
                    prevTimestamp = block.Timestamp;
                }
            }
        }

        private struct DifficultyExpectation
        {
            internal Block<T> Block;

            internal uint Difficulty;
        }
    }
}
