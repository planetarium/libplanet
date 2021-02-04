using System;
using System.Collections.Generic;
using Libplanet.Action;
using Libplanet.Blocks;
using Libplanet.Tx;

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
        private readonly int _maxBlockBytes;
        private readonly int _maxGenesisBytes;
        private readonly Func<Transaction<T>, BlockChain<T>, bool> _doesTransactionFollowPolicy;

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
        /// <param name="maxTransactionsPerBlock">Configures <see cref="MaxTransactionsPerBlock"/>.
        /// 100 by default.</param>
        /// <param name="maxBlockBytes">Configures <see cref="GetMaxBlockBytes(long)"/> where
        /// the block is not a genesis.  100 KiB by default.</param>
        /// <param name="maxGenesisBytes">Configures <see cref="GetMaxBlockBytes(long)"/> where
        /// the block is a genesis.  1 MiB by default.</param>
        /// <param name="doesTransactionFollowPolicy">
        /// A predicate that determines if the transaction follows the block policy.
        /// </param>
        /// <param name="canonicalChainComparer">The custom rule to determine which is the canonical
        /// chain.  If omitted, <see cref="TotalDifficultyComparer"/> is used by default.</param>
        public BlockPolicy(
            IAction blockAction = null,
            int blockIntervalMilliseconds = 5000,
            long minimumDifficulty = 1024,
            int difficultyBoundDivisor = 128,
            int maxTransactionsPerBlock = 100,
            int maxBlockBytes = 100 * 1024,
            int maxGenesisBytes = 1024 * 1024,
            Func<Transaction<T>, BlockChain<T>, bool> doesTransactionFollowPolicy = null,
            IComparer<BlockPerception> canonicalChainComparer = null
        )
            : this(
                blockAction,
                TimeSpan.FromMilliseconds(blockIntervalMilliseconds),
                minimumDifficulty,
                difficultyBoundDivisor,
                maxTransactionsPerBlock,
                maxBlockBytes,
                maxGenesisBytes,
                doesTransactionFollowPolicy,
                canonicalChainComparer)
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
        /// <param name="maxTransactionsPerBlock">Configures <see cref="MaxTransactionsPerBlock"/>.
        /// </param>
        /// <param name="maxBlockBytes">Configures <see cref="GetMaxBlockBytes(long)"/> where
        /// the block is not a genesis.</param>
        /// <param name="maxGenesisBytes">Configures <see cref="GetMaxBlockBytes(long)"/> where
        /// the block is a genesis.</param>
        /// <param name="doesTransactionFollowPolicy">
        /// A predicate that determines if the transaction follows the block policy.
        /// </param>
        /// <param name="canonicalChainComparer">The custom rule to determine which is the canonical
        /// chain.  If omitted, <see cref="TotalDifficultyComparer"/> (having
        /// <see cref="TotalDifficultyComparer.OutdateAfter"/> configured to triple of
        /// <paramref name="blockInterval"/>) is used by default.</param>
        public BlockPolicy(
            IAction blockAction,
            TimeSpan blockInterval,
            long minimumDifficulty,
            int difficultyBoundDivisor,
            int maxTransactionsPerBlock,
            int maxBlockBytes,
            int maxGenesisBytes,
            Func<Transaction<T>, BlockChain<T>, bool> doesTransactionFollowPolicy = null,
            IComparer<BlockPerception> canonicalChainComparer = null
        )
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
            MaxTransactionsPerBlock = maxTransactionsPerBlock;
            _maxBlockBytes = maxBlockBytes;
            _maxGenesisBytes = maxGenesisBytes;
            _doesTransactionFollowPolicy = doesTransactionFollowPolicy ?? ((_, __) => true);
            CanonicalChainComparer = canonicalChainComparer
                ?? new TotalDifficultyComparer(blockInterval + blockInterval + blockInterval);
        }

        /// <inheritdoc/>
        public IAction BlockAction { get; }

        /// <inheritdoc cref="IBlockPolicy{T}.MaxTransactionsPerBlock"/>
        public int MaxTransactionsPerBlock { get; }

        /// <summary>
        /// An appropriate interval between consecutive <see cref="Block{T}"/>s.
        /// It is usually from 20 to 30 seconds.
        /// <para>If a previous interval took longer than this
        /// <see cref="GetNextBlockDifficulty(BlockChain{T})"/> method
        /// raises the <see cref="Block{T}.Difficulty"/>.  If it took shorter
        /// than this <see cref="Block{T}.Difficulty"/> is dropped.</para>
        /// </summary>
        public TimeSpan BlockInterval { get; }

        /// <inheritdoc />
        public IComparer<BlockPerception> CanonicalChainComparer { get; }

        private long MinimumDifficulty { get; }

        private int DifficultyBoundDivisor { get; }

        /// <inheritdoc
        /// cref="IBlockPolicy{T}.DoesTransactionFollowsPolicy(Transaction{T}, BlockChain{T})"/>
        public virtual bool DoesTransactionFollowsPolicy(
            Transaction<T> transaction,
            BlockChain<T> blockChain)
        {
            return _doesTransactionFollowPolicy(transaction, blockChain);
        }

        /// <inheritdoc/>
        public virtual InvalidBlockException ValidateNextBlock(
            BlockChain<T> blocks,
            Block<T> nextBlock)
        {
            return null;
        }

        /// <inheritdoc />
        public virtual long GetNextBlockDifficulty(BlockChain<T> blocks)
        {
            long index = blocks.Count;

            if (index < 0)
            {
                throw new InvalidBlockIndexException(
                    $"Count of blocks must be 0 or more, but its value is {index}.");
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

        /// <inheritdoc />
        public int GetMaxBlockBytes(long index) => index > 0 ? _maxBlockBytes : _maxGenesisBytes;
    }
}
