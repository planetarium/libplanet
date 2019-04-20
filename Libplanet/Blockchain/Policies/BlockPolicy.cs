using System;
using System.Collections.Generic;
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

        /// <inheritdoc/>
        public InvalidBlockException ValidateNextBlock(
            IReadOnlyList<Block<T>> blocks,
            Block<T> nextBlock)
        {
            int index = blocks.Count;
            int difficulty = index < 2 ? index : GetNextBlockDifficulty(blocks);

            Block<T> lastBlock = index >= 1 ? blocks[index - 1] : null;
            HashDigest<SHA256>? prevHash = lastBlock?.Hash;
            DateTimeOffset? prevTimestamp = lastBlock?.Timestamp;

            if (nextBlock.Index != index)
            {
                return new InvalidBlockIndexException(
                    $"the expected block index is {index}, but its index" +
                    $" is {nextBlock.Index}'");
            }

            if (nextBlock.Difficulty < difficulty)
            {
                return new InvalidBlockDifficultyException(
                    $"the expected difficulty of the block #{index} " +
                    $"is {difficulty}, but its difficulty is " +
                    $"{nextBlock.Difficulty}'");
            }

            if (!nextBlock.PreviousHash.Equals(prevHash))
            {
                if (prevHash is null)
                {
                    return new InvalidBlockPreviousHashException(
                        "the genesis block must have not previous block");
                }

                return new InvalidBlockPreviousHashException(
                    $"the block #{index} is not continuous from the " +
                    $"block #{index - 1}; while previous block's hash is " +
                    $"{prevHash}, the block #{index}'s pointer to " +
                    "the previous hash refers to " +
                    (nextBlock.PreviousHash?.ToString() ?? "nothing"));
            }

            if (nextBlock.Timestamp < prevTimestamp)
            {
                return new InvalidBlockTimestampException(
                    $"the block #{index}'s timestamp " +
                    $"({nextBlock.Timestamp}) is earlier than" +
                    $" the block #{index - 1}'s ({prevTimestamp})");
            }

            return null;
        }

        /// <inheritdoc />
        public int GetNextBlockDifficulty(IReadOnlyList<Block<T>> blocks)
        {
            int index = blocks.Count;

            if (index <= 1)
            {
                return index;
            }

            DateTimeOffset prevPrevTimestamp = blocks[index - 2].Timestamp;
            DateTimeOffset prevTimestamp = blocks[index - 1].Timestamp;
            int prevDifficulty = blocks[index - 1].Difficulty;

            bool needMore = prevTimestamp - prevPrevTimestamp < BlockInterval;

            return Math.Max(
                needMore ? prevDifficulty + 1 : prevDifficulty - 1,
                1);
        }
    }
}
