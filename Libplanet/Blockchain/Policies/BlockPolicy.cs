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
        /// <see cref="BlockInterval"/> in milliseconds,
        /// <see cref="MinimumDifficulty"/> and
        /// <see cref="DifficultyBoundDivisor"/>.
        /// </summary>
        /// <param name="blockAction">A block action to execute and be rendered for every block.
        /// </param>
        /// <param name="blockIntervalMilliseconds">Configures
        /// <see cref="BlockInterval"/> in milliseconds.
        /// 5000 milliseconds by default.
        /// </param>
        /// <param name="minimumDifficulty">Configures
        /// <see cref="MinimumDifficulty"/>. 1024 by default.</param>
        /// <param name="difficultyBoundDivisor">Configures
        /// <see cref="DifficultyBoundDivisor"/>. 128 by default.</param>
        public BlockPolicy(
            IAction blockAction = null,
            int blockIntervalMilliseconds = 5000,
            long minimumDifficulty = 1024,
            int difficultyBoundDivisor = 128)
            : this(
                blockAction,
                TimeSpan.FromMilliseconds(blockIntervalMilliseconds),
                minimumDifficulty,
                difficultyBoundDivisor)
        {
        }

        /// <summary>
        /// Creates a <see cref="BlockPolicy{T}"/> with configuring
        /// <see cref="BlockInterval"/>, <see cref="MinimumDifficulty"/> and
        /// <see cref="DifficultyBoundDivisor"/>.
        /// </summary>
        /// <param name="blockAction">A block action to execute and be rendered for every block.
        /// </param>
        /// <param name="blockInterval">Configures <see cref="BlockInterval"/>.
        /// </param>
        /// <param name="minimumDifficulty">Configures
        /// <see cref="MinimumDifficulty"/>.</param>
        /// <param name="difficultyBoundDivisor">Configures
        /// <see cref="DifficultyBoundDivisor"/>.</param>
        public BlockPolicy(
            IAction blockAction,
            TimeSpan blockInterval,
            long minimumDifficulty,
            int difficultyBoundDivisor)
        {
            if (blockInterval < TimeSpan.Zero)
            {
                throw new ArgumentOutOfRangeException(
                    nameof(blockInterval),
                    "Interval between blocks cannot be negative.");
            }

            if (minimumDifficulty < 0)
            {
                throw new ArgumentOutOfRangeException(
                    nameof(minimumDifficulty),
                    "Minimum difficulty must be greater than 0.");
            }

            if (minimumDifficulty <= difficultyBoundDivisor)
            {
                const string message =
                    "Difficulty bound divisor must be less than " +
                    "the minimum difficulty.";

                throw new ArgumentOutOfRangeException(
                    nameof(difficultyBoundDivisor),
                    message);
            }

            BlockAction = blockAction;
            BlockInterval = blockInterval;
            MinimumDifficulty = minimumDifficulty;
            DifficultyBoundDivisor = difficultyBoundDivisor;
        }

        /// <inheritdoc/>
        public IAction BlockAction { get; }

        /// <summary>
        /// An appropriate interval between consecutive <see cref="Block{T}"/>s.
        /// It is usually from 20 to 30 seconds.
        /// <para>If a previous interval took longer than this
        /// <see cref="GetNextBlockDifficulty(BlockChain{T})"/> method
        /// raises the <see cref="Block{T}.Difficulty"/>.  If it took shorter
        /// than this <see cref="Block{T}.Difficulty"/> is dropped.</para>
        /// </summary>
        public TimeSpan BlockInterval { get; }

        private long MinimumDifficulty { get; }

        private int DifficultyBoundDivisor { get; }

        /// <inheritdoc/>
        public InvalidBlockException ValidateNextBlock(
            BlockChain<T> blocks,
            Block<T> nextBlock)
        {
            long index = blocks.Count;
            long difficulty = GetNextBlockDifficulty(blocks);

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
        public long GetNextBlockDifficulty(BlockChain<T> blocks)
        {
            long index = blocks.Count;

            if (index < 0)
            {
                throw new InvalidBlockIndexException(
                    $"index must be 0 or more, but its index is {index}.");
            }

            if (index <= 1)
            {
                return index == 0 ? 0 : MinimumDifficulty;
            }

            var prevBlock = blocks[index - 1];

            DateTimeOffset prevPrevTimestamp = blocks[index - 2].Timestamp;
            DateTimeOffset prevTimestamp = prevBlock.Timestamp;
            TimeSpan timeDiff = prevTimestamp - prevPrevTimestamp;
            long timeDiffMilliseconds = (long)timeDiff.TotalMilliseconds;
            const long minimumMultiplier = -99;
            long multiplier = 1 - (timeDiffMilliseconds /
                                   (long)BlockInterval.TotalMilliseconds);
            multiplier = Math.Max(multiplier, minimumMultiplier);

            var prevDifficulty = prevBlock.Difficulty;
            var offset = prevDifficulty / DifficultyBoundDivisor;
            long nextDifficulty = prevDifficulty + (offset * multiplier);

            return Math.Max(nextDifficulty, MinimumDifficulty);
        }
    }
}
