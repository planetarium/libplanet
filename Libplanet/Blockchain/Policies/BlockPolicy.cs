#nullable enable
using System;
using System.Collections.Generic;
using System.Diagnostics.Contracts;
using System.Security.Cryptography;
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
        private readonly Func<BlockChain<T>, Transaction<T>, bool> _validateTxForNextBlock;
        private readonly Func<BlockChain<T>, Block<T>, InvalidBlockException?> _validateNextBlock;
        private readonly HashAlgorithmGetter _hashAlgorithmGetter;
        private readonly Func<long, int> _getMinTransactionsPerBlock;
        private readonly Func<long, int> _getMaxTransactionsPerBlock;
        private readonly Func<long, int> _getMaxTransactionsPerSignerPerBlock;

        /// <summary>
        /// <para>
        /// Creates a default <see cref="BlockPolicy{T}"/> instance.
        /// </para>
        /// <para>
        /// Each unprovided argument will be assigned a default value.  See each parameter
        /// description for more detail.
        /// </para>
        /// </summary>
        /// <param name="blockAction">A <see cref="IAction"/> to executed for
        /// every <see cref="Block{T}"/>.  Set to <c>null</c> by default, which results
        /// in no additional execution other than those included in <see cref="Transaction{T}"/>s.
        /// </param>
        /// <param name="blockInterval">Configures <see cref="BlockInterval"/>.
        /// Set to <c>5</c> seconds by default.
        /// </param>
        /// <param name="minimumDifficulty">Configures
        /// <see cref="MinimumDifficulty"/>. 1024 by default.</param>
        /// <param name="difficultyBoundDivisor">Configures
        /// <see cref="DifficultyBoundDivisor"/>. 128 by default.</param>
        /// <param name="maxBlockBytes">Configures <see cref="GetMaxBlockBytes(long)"/> where
        /// the block is not a genesis.  100 KiB by default.</param>
        /// <param name="maxGenesisBytes">Configures <see cref="GetMaxBlockBytes(long)"/> where
        /// the block is a genesis.  1 MiB by default.</param>
        /// <param name="validateTxForNextBlock">The predicate that determines if
        /// a <see cref="Transaction{T}"/> follows the policy.  Set to a constant function of
        /// <c>true</c> by default.</param>
        /// <param name="validateNextBlock">The predicate that determines if
        /// a <see cref="Block{T}"/> follows the policy.  Set to a constant function of
        /// <c>null</c> by default.</param>
        /// <param name="canonicalChainComparer">The custom rule to determine which is the canonical
        /// chain.  If omitted, <see cref="TotalDifficultyComparer"/> is used by default.</param>
        /// <param name="hashAlgorithmGetter">Configures <see cref="GetHashAlgorithm(long)"/>.
        /// If omitted, SHA-256 is used for every block.</param>
        /// <param name="getMinTransactionsPerBlock">The function determining the minimum number of
        /// <see cref="Transaction{T}"/>s that must be included in a <see cref="Block{T}"/>.
        /// Goes to <see cref="GetMinTransactionsPerBlock"/>.  Set to a constant function
        /// of <c>0</c> by default.</param>
        /// <param name="getMaxTransactionsPerBlock">The function determining how many
        /// <see cref="Transaction{T}"/>s can be included in a <see cref="Block{T}"/>.
        /// Goes to <see cref="GetMaxTransactionsPerBlock"/>.  Set to a constant function
        /// of <c>100</c> by default.</param>
        /// <param name="getMaxTransactionsPerSignerPerBlock">The function determining the maximum
        /// number of transactions from the same signer that can be included in
        /// a <see cref="Block{T}"/> given the <see cref="Block{T}"/>'s index.
        /// Goes to <see cref="GetMaxTransactionsPerSignerPerBlock"/>.  Set to
        /// <see cref="GetMaxTransactionsPerBlock"/> by default.</param>
        public BlockPolicy(
            IAction? blockAction = null,
            TimeSpan? blockInterval = null,
            long minimumDifficulty = 1024,
            int difficultyBoundDivisor = 128,
            int maxBlockBytes = 100 * 1024,
            int maxGenesisBytes = 1024 * 1024,
            Func<BlockChain<T>, Transaction<T>, bool>? validateTxForNextBlock = null,
            Func<BlockChain<T>, Block<T>, InvalidBlockException?>? validateNextBlock = null,
            IComparer<IBlockExcerpt>? canonicalChainComparer = null,
            HashAlgorithmGetter? hashAlgorithmGetter = null,
            Func<long, int>? getMinTransactionsPerBlock = null,
            Func<long, int>? getMaxTransactionsPerBlock = null,
            Func<long, int>? getMaxTransactionsPerSignerPerBlock = null)
        {
            if (blockInterval < TimeSpan.Zero)
            {
                throw new ArgumentOutOfRangeException(
                    nameof(blockInterval),
                    "Interval between blocks cannot be negative.");
            }
            else if (minimumDifficulty < 0)
            {
                throw new ArgumentOutOfRangeException(
                    nameof(minimumDifficulty),
                    "Minimum difficulty must be greater than 0.");
            }
            else if (minimumDifficulty <= difficultyBoundDivisor)
            {
                const string message =
                    "Difficulty bound divisor must be less than " +
                    "the minimum difficulty.";
                throw new ArgumentOutOfRangeException(
                    nameof(difficultyBoundDivisor),
                    message);
            }

            BlockAction = blockAction;
            BlockInterval = blockInterval ?? TimeSpan.FromMilliseconds(5000);
            MinimumDifficulty = minimumDifficulty;
            DifficultyBoundDivisor = difficultyBoundDivisor;
            _maxBlockBytes = maxBlockBytes;
            _maxGenesisBytes = maxGenesisBytes;
            _validateTxForNextBlock = validateTxForNextBlock ?? ((_, __) => true);
            _validateNextBlock = validateNextBlock ?? ((_, __) => null);
            CanonicalChainComparer = canonicalChainComparer ?? new TotalDifficultyComparer();
            _hashAlgorithmGetter = hashAlgorithmGetter ?? (_ => HashAlgorithmType.Of<SHA256>());
            _getMinTransactionsPerBlock = getMinTransactionsPerBlock ?? (_ => 0);
            _getMaxTransactionsPerBlock = getMaxTransactionsPerBlock ?? (_ => 100);
            _getMaxTransactionsPerSignerPerBlock = getMaxTransactionsPerSignerPerBlock
                ?? GetMaxTransactionsPerBlock;
        }

        /// <inheritdoc/>
        public IAction? BlockAction { get; }

        /// <summary>
        /// An appropriate interval between consecutive <see cref="Block{T}"/>s.
        /// It is usually from 20 to 30 seconds.
        /// <para>If a previous interval took longer than this
        /// <see cref="GetNextBlockDifficulty(BlockChain{T})"/> method
        /// raises the <see cref="Block{T}.Difficulty"/>.  If it took shorter
        /// than this <see cref="Block{T}.Difficulty"/> is dropped.</para>
        /// </summary>
        public TimeSpan BlockInterval { get; }

        /// <inheritdoc/>
        public IComparer<IBlockExcerpt> CanonicalChainComparer { get; }

        private long MinimumDifficulty { get; }

        private int DifficultyBoundDivisor { get; }

        /// <inheritdoc/>
        public virtual bool ValidateTxForNextBlock(
            BlockChain<T> blockChain, Transaction<T> transaction)
        {
            return _validateTxForNextBlock(blockChain, transaction);
        }

        /// <inheritdoc/>
        public virtual InvalidBlockException? ValidateNextBlock(
            BlockChain<T> blockChain,
            Block<T> nextBlock)
        {
            return null;
        }

        /// <inheritdoc/>
        public virtual long GetNextBlockDifficulty(BlockChain<T>? blockChain)
        {
            if (blockChain is null)
            {
                return MinimumDifficulty;
            }

            long index = blockChain.Count;

            if (index < 0)
            {
                throw new InvalidBlockIndexException(
                    $"Count of blocks must be 0 or more, but its value is {index}.");
            }

            if (index <= 1)
            {
                return index == 0 ? 0 : MinimumDifficulty;
            }

            var prevBlock = blockChain[index - 1];

            DateTimeOffset prevPrevTimestamp = blockChain[index - 2].Timestamp;
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

        /// <inheritdoc/>
        public int GetMaxBlockBytes(long index) => index > 0 ? _maxBlockBytes : _maxGenesisBytes;

        /// <inheritdoc/>
        [Pure]
        public int GetMinTransactionsPerBlock(long index) => _getMinTransactionsPerBlock(index);

        /// <inheritdoc/>
        [Pure]
        public int GetMaxTransactionsPerBlock(long index) => _getMaxTransactionsPerBlock(index);

        /// <inheritdoc/>
        public HashAlgorithmType GetHashAlgorithm(long index) => _hashAlgorithmGetter(index);

        /// <inheritdoc/>
        [Pure]
        public int GetMaxTransactionsPerSignerPerBlock(long index)
            => _getMaxTransactionsPerSignerPerBlock(index);
    }
}
