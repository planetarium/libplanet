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
        where T : IAction, new()
    {
        /// <summary>
        /// Creates a <see cref="BlockPolicy{T}"/> with configuring
        /// <see cref="BlockInterval"/> in milliseconds.
        /// </summary>
        /// <param name="blockIntervalMilliseconds">Configures
        /// <see cref="BlockInterval"/> in milliseconds.
        /// 5000 milliseconds by default.
        /// </param>
        public BlockPolicy(int blockIntervalMilliseconds = 5000)
            : this(
                TimeSpan.FromMilliseconds(blockIntervalMilliseconds)
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
        /// <see cref="GetNextBlockDifficulty(IReadOnlyList{Block{T}})"/> method
        /// raises the <see cref="Block{T}.Difficulty"/>.  If it took shorter
        /// than this <see cref="Block{T}.Difficulty"/> is dropped.</para>
        /// </summary>
        public TimeSpan BlockInterval { get; }

        /// <inheritdoc />
        public InvalidBlockException ValidateBlocks(
            IReadOnlyList<Block<T>> blocks,
            DateTimeOffset currentTime
        )
        {
            HashDigest<SHA256>? prevHash = null;
            DateTimeOffset? prevTimestamp = null;
            IEnumerable<(long i, DifficultyExpectation)> indexedDifficulties =
                ExpectDifficulties(blocks).Select(
                    (exp, i) => { return ((long)i, exp); }
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

        /// <inheritdoc/>
        public InvalidBlockException ValidateBlockToAppend(
            IReadOnlyList<Block<T>> blocks,
            Block<T> blockToAppend)
        {
            int blockCount = blocks.Count;
            Block<T> lastBlock =
                blockCount > 0 ? blocks[blockCount - 1] : null;

            int index = blockCount;
            int difficulty = GetNextBlockDifficulty(blocks);
            HashDigest<SHA256>? prevHash = lastBlock?.Hash;
            DateTimeOffset? prevTimestamp = lastBlock?.Timestamp;

            if (blockToAppend.Index != index)
            {
                return new InvalidBlockIndexException(
                    $"the expected block index is {index}, but its index" +
                    $" is {blockToAppend.Index}'");
            }

            if (blockToAppend.Difficulty < difficulty)
            {
                return new InvalidBlockDifficultyException(
                    $"the expected difficulty of the block #{index} " +
                    $"is {difficulty}, but its difficulty is " +
                    $"{blockToAppend.Difficulty}'");
            }

            if (!blockToAppend.PreviousHash.Equals(prevHash))
            {
                if (prevHash == null)
                {
                    return new InvalidBlockPreviousHashException(
                        "the genesis block must have not previous block");
                }

                return new InvalidBlockPreviousHashException(
                    $"the block #{index} is not continuous from the " +
                    $"block #{index - 1}; while previous block's hash is " +
                    $"{prevHash}, the block #{index}'s pointer to " +
                    "the previous hash refers to " +
                    (blockToAppend.PreviousHash?.ToString() ?? "nothing"));
            }

            if (blockToAppend.Timestamp < prevTimestamp)
            {
                return new InvalidBlockTimestampException(
                    $"the block #{index}'s timestamp " +
                    $"({blockToAppend.Timestamp}) is earlier than" +
                    $" the block #{index - 1}'s ({prevTimestamp})");
            }

            return null;
        }

        /// <inheritdoc />
        public int GetNextBlockDifficulty(IReadOnlyList<Block<T>> blocks)
        {
            int blockCount = blocks.Count;

            if (blockCount <= 1)
            {
                return blockCount;
            }

            Block<T> prevPrevBlock = blocks[blockCount - 2];
            Block<T> prevBlock = blocks[blockCount - 1];

            return GetNextDifficultyFromPrevTimestamp(
                prevPrevBlock.Timestamp,
                prevBlock.Timestamp,
                prevBlock.Difficulty);
        }

        private IEnumerable<DifficultyExpectation> ExpectDifficulties(
            IEnumerable<Block<T>> blocks, bool yieldNext = false)
        {
            DateTimeOffset? prevTimestamp = null;
            DateTimeOffset? prevPrevTimestamp = null;

            if (yieldNext)
            {
                blocks = blocks.Append(null);
            }

            bool genesis = true;
            int difficulty = 1;
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

                difficulty = GetNextDifficultyFromPrevTimestamp(
                    prevPrevTimestamp, prevTimestamp, difficulty);

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

        private int GetNextDifficultyFromPrevTimestamp(
            DateTimeOffset? prevPrevTimestamp,
            DateTimeOffset? prevTimestamp,
            int prevDifficulty)
        {
            bool needMore = prevTimestamp - prevPrevTimestamp < BlockInterval;
            return Math.Max(
                needMore ? prevDifficulty + 1 : prevDifficulty - 1,
                1);
        }

        private struct DifficultyExpectation
        {
            internal Block<T> Block;

            internal int Difficulty;
        }
    }
}
