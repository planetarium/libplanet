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
        private readonly Func<BlockChain<T>, Transaction<T>, TxPolicyViolationException?>
            _validateNextBlockTx;

        private readonly Func<BlockChain<T>, Block<T>, BlockPolicyViolationException?>
            _validateNextBlock;

        private readonly HashAlgorithmGetter _hashAlgorithmGetter;
        private readonly Func<long, int> _getMaxBlockBytes;
        private readonly Func<long, int> _getMinTransactionsPerBlock;
        private readonly Func<long, int> _getMaxTransactionsPerBlock;
        private readonly Func<long, int> _getMaxTransactionsPerSignerPerBlock;
        private readonly Func<BlockChain<T>, long> _getNextBlockDifficulty;

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
        /// <param name="blockInterval">Goes to <see cref="BlockInterval"/>.
        /// Set to <see cref="DifficultyAdjustment{T}.DefaultTargetBlockInterval"/>
        /// by default.
        /// </param>
        /// <param name="difficultyStability">Goes to <see cref="DifficultyStability"/>.
        /// Set to <see cref="DifficultyAdjustment{T}.DefaultDifficultyStability"/>
        /// by default.</param>
        /// <param name="minimumDifficulty">Goes to <see cref="MinimumDifficulty"/>.
        /// Set to <see cref="DifficultyAdjustment{T}.DefaultMinimumDifficulty"/>
        /// by default.</param>
        /// <param name="validateNextBlockTx">The predicate that determines if
        /// a <see cref="Transaction{T}"/> follows the policy.  Set to a constant function of
        /// <c>null</c> by default.</param>
        /// <param name="validateNextBlock">The predicate that determines if
        /// a <see cref="Block{T}"/> follows the policy.  Set to a constant function of
        /// <c>null</c> by default.</param>
        /// <param name="canonicalChainComparer">The custom rule to determine which is the canonical
        /// chain.  If omitted, <see cref="TotalDifficultyComparer"/> is used by default.</param>
        /// <param name="hashAlgorithmGetter">Configures <see cref="GetHashAlgorithm(long)"/>.
        /// If omitted, SHA-256 is used for every block.</param>
        /// <param name="getMaxBlockBytes">The function determining the maximum size of
        /// a <see cref="Block{T}"/> in number of <c>byte</c>s given
        /// its <see cref="Block{T}.Index"/>.  Goes to <see cref="GetMaxBlockBytes"/>.
        /// Set to a constant size of <c>100</c>KiB, i.e. <c>100 * 1024</c>, by default.</param>
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
            long? difficultyStability = null,
            long? minimumDifficulty = null,
            Func<BlockChain<T>, Transaction<T>, TxPolicyViolationException?>?
                validateNextBlockTx = null,
            Func<BlockChain<T>, Block<T>, BlockPolicyViolationException?>?
                validateNextBlock = null,
            IComparer<IBlockExcerpt>? canonicalChainComparer = null,
            HashAlgorithmGetter? hashAlgorithmGetter = null,
            Func<long, int>? getMaxBlockBytes = null,
            Func<long, int>? getMinTransactionsPerBlock = null,
            Func<long, int>? getMaxTransactionsPerBlock = null,
            Func<long, int>? getMaxTransactionsPerSignerPerBlock = null)
        {
            BlockAction = blockAction;
            BlockInterval = blockInterval
                ?? DifficultyAdjustment<T>.DefaultTargetBlockInterval;
            DifficultyStability = difficultyStability
                ?? DifficultyAdjustment<T>.DefaultDifficultyStability;
            MinimumDifficulty = minimumDifficulty
                ?? DifficultyAdjustment<T>.DefaultMinimumDifficulty;
            _validateNextBlockTx = validateNextBlockTx ?? ((_, __) => null);
            _validateNextBlock = validateNextBlock ?? ((_, __) => null);
            CanonicalChainComparer = canonicalChainComparer ?? new TotalDifficultyComparer();
            _hashAlgorithmGetter = hashAlgorithmGetter ?? (_ => HashAlgorithmType.Of<SHA256>());
            _getMaxBlockBytes = getMaxBlockBytes ?? (_ => 100 * 1024);
            _getMinTransactionsPerBlock = getMinTransactionsPerBlock ?? (_ => 0);
            _getMaxTransactionsPerBlock = getMaxTransactionsPerBlock ?? (_ => 100);
            _getMaxTransactionsPerSignerPerBlock = getMaxTransactionsPerSignerPerBlock
                ?? GetMaxTransactionsPerBlock;
            _getNextBlockDifficulty = DifficultyAdjustment<T>.AlgorithmFactory(
                BlockInterval, DifficultyStability, MinimumDifficulty);
        }

        /// <inheritdoc/>
        public IAction? BlockAction { get; }

        /// <summary>
        /// Targeted time interval between two consecutive <see cref="Block{T}"/>s.
        /// See the corresponding parameter description for
        /// <see cref="DifficultyAdjustment{T}.BaseAlgorithm"/> for full detail.
        /// </summary>
        public TimeSpan BlockInterval { get; }

        /// <summary>
        /// Stability of a series of difficulties for a <see cref="BlockChain{T}"/>.
        /// See the corresponding parameter description for
        /// <see cref="DifficultyAdjustment{T}.BaseAlgorithm"/> for full detail.
        /// </summary>
        public long DifficultyStability { get; }

        /// <summary>
        /// Minimum difficulty for a <see cref="Block{T}"/>.  See the corresponding
        /// parameter description for <see cref="DifficultyAdjustment{T}.BaseAlgorithm"/> for
        /// full detail.
        /// </summary>
        public long MinimumDifficulty { get; }

        /// <inheritdoc/>
        public IComparer<IBlockExcerpt> CanonicalChainComparer { get; }

        /// <inheritdoc/>
        public virtual TxPolicyViolationException? ValidateNextBlockTx(
            BlockChain<T> blockChain, Transaction<T> transaction)
        {
            return _validateNextBlockTx(blockChain, transaction);
        }

        /// <inheritdoc/>
        public virtual BlockPolicyViolationException? ValidateNextBlock(
            BlockChain<T> blockChain,
            Block<T> nextBlock)
        {
            return _validateNextBlock(blockChain, nextBlock);
        }

        /// <inheritdoc/>
        public virtual long GetNextBlockDifficulty(BlockChain<T> blockChain) =>
            _getNextBlockDifficulty(blockChain);

        /// <inheritdoc/>
        [Pure]
        public int GetMaxBlockBytes(long index) => _getMaxBlockBytes(index);

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
