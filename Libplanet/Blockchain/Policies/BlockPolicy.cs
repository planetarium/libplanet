using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Diagnostics.Contracts;
using System.Linq;
using Libplanet.Action;
using Libplanet.Assets;
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

        private readonly Func<long, long> _getMaxTransactionsBytes;
        private readonly Func<long, int> _getMinTransactionsPerBlock;
        private readonly Func<long, int> _getMaxTransactionsPerBlock;
        private readonly Func<long, int> _getMaxTransactionsPerSignerPerBlock;
        private readonly Func<BlockChain<T>, long> _getNextBlockDifficulty;
        private readonly Func<long, int> _getMinBlockProtocolVersion;

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
        /// every <see cref="Block{T}"/>.  Set to <see langword="null"/> by default, which results
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
        /// <see langword="null"/> by default.</param>
        /// <param name="validateNextBlock">The predicate that determines if
        /// a <see cref="Block{T}"/> follows the policy.  Set to a default implementation
        /// where block's hash algorithm type, bytes count, and transactions count are validated.
        /// </param>
        /// <param name="canonicalChainComparer">The custom rule to determine which is the canonical
        /// chain.  If omitted, <see cref="TotalDifficultyComparer"/> is used by default.</param>
        /// <param name="getMaxTransactionsBytes">The function determining the maximum size of
        /// <see cref="Block{T}.Transactions"/> in number of <c>byte</c>s given
        /// its <see cref="Block{T}.Index"/>.  Goes to <see cref="GetMaxTransactionsBytes"/>.
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
        /// <param name="getMinBlockProtocolVersion">The function determining the minimum
        /// block protocol version of a <see cref="Block{T}"/> given the <see cref="Block{T}"/>'s
        /// index.  Set to a constant function of <c>0</c> by default.</param>
        /// <param name="nativeTokens">A fixed set of <see cref="Currency"/> objects that are
        /// supported by the blockchain as first-class citizens.  Empty by default.</param>
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
            Func<long, long>? getMaxTransactionsBytes = null,
            Func<long, int>? getMinTransactionsPerBlock = null,
            Func<long, int>? getMaxTransactionsPerBlock = null,
            Func<long, int>? getMaxTransactionsPerSignerPerBlock = null,
            Func<long, int>? getMinBlockProtocolVersion = null,
            IImmutableSet<Currency>? nativeTokens = null)
        {
            BlockAction = blockAction;
            BlockInterval = blockInterval
                ?? DifficultyAdjustment<T>.DefaultTargetBlockInterval;
            DifficultyStability = difficultyStability
                ?? DifficultyAdjustment<T>.DefaultDifficultyStability;
            MinimumDifficulty = minimumDifficulty
                ?? DifficultyAdjustment<T>.DefaultMinimumDifficulty;
            CanonicalChainComparer = canonicalChainComparer ?? new TotalDifficultyComparer();
            NativeTokens = nativeTokens ?? ImmutableHashSet<Currency>.Empty;
            _getMaxTransactionsBytes = getMaxTransactionsBytes ?? (_ => 100L * 1024L);
            _getMinTransactionsPerBlock = getMinTransactionsPerBlock ?? (_ => 0);
            _getMaxTransactionsPerBlock = getMaxTransactionsPerBlock ?? (_ => 100);
            _getMaxTransactionsPerSignerPerBlock = getMaxTransactionsPerSignerPerBlock
                ?? GetMaxTransactionsPerBlock;
            _getNextBlockDifficulty = DifficultyAdjustment<T>.AlgorithmFactory(
                BlockInterval, DifficultyStability, MinimumDifficulty);
            _getMinBlockProtocolVersion = getMinBlockProtocolVersion ?? (_ => 0);

            _validateNextBlockTx = validateNextBlockTx ?? ((_, __) => null);
            if (validateNextBlock is { } vnb)
            {
                _validateNextBlock = vnb;
            }
            else
            {
                _validateNextBlock = (blockchain, block) =>
                {
                    long maxTransactionsBytes = GetMaxTransactionsBytes(block.Index);
                    int minTransactionsPerBlock = GetMinTransactionsPerBlock(block.Index);
                    int maxTransactionsPerBlock = GetMaxTransactionsPerBlock(block.Index);
                    int maxTransactionsPerSignerPerBlock =
                        GetMaxTransactionsPerSignerPerBlock(block.Index);
                    int minBlockProtocolVersion = GetMinBlockProtocolVersion(block.Index);

                    long blockBytes = BlockMarshaler.MarshalTransactions<T>(block.Transactions)
                        .EncodingLength;
                    if (block.ProtocolVersion < minBlockProtocolVersion)
                    {
                        // NOTE: InvalidBlockProtocolVersionException would be more appropriate,
                        // but it is not a BlockPolicyViolationException; as this is a temporary
                        // solution to allow migration, we just use BlockPolicyViolationException.
                        return new BlockPolicyViolationException(
                            $"The minimum block protocol version of block #{block.Index} is " +
                            $"{minBlockProtocolVersion} while the given block has " +
                            $"block protocol versoin {block.ProtocolVersion}.");
                    }
                    else if (blockBytes > maxTransactionsBytes)
                    {
                        return new InvalidBlockBytesLengthException(
                            $"The size of block #{block.Index} {block.Hash} is too large where " +
                            $"the maximum number of bytes allowed is {maxTransactionsBytes}: " +
                            $"{blockBytes}.",
                            blockBytes
                        );
                    }
                    else if (block.Transactions.Count < minTransactionsPerBlock)
                    {
                        return new InvalidBlockTxCountException(
                            $"Block #{block.Index} {block.Hash} should include " +
                            $"at least {minTransactionsPerBlock} transaction(s): " +
                            $"{block.Transactions.Count}",
                            block.Transactions.Count);
                    }
                    else if (block.Transactions.Count > maxTransactionsPerBlock)
                    {
                        return new InvalidBlockTxCountException(
                            $"Block #{block.Index} {block.Hash} should include " +
                            $"at most {maxTransactionsPerBlock} transaction(s): " +
                            $"{block.Transactions.Count}",
                            block.Transactions.Count);
                    }
                    else
                    {
                        var groups = block.Transactions
                            .GroupBy(tx => tx.Signer)
                            .Where(group => group.Count() > maxTransactionsPerSignerPerBlock);
                        if (groups.FirstOrDefault() is { } offendingGroup)
                        {
                            int offendingGroupCount = offendingGroup.Count();
                            return new InvalidBlockTxCountPerSignerException(
                                $"Block #{block.Index} {block.Hash} includes too many " +
                                $"transactions from signer {offendingGroup.Key} where " +
                                $"the maximum number of transactions allowed by a single signer " +
                                $"per block is {maxTransactionsPerSignerPerBlock}: " +
                                $"{offendingGroupCount}",
                                offendingGroup.Key,
                                offendingGroupCount);
                        }
                    }

                    return null;
                };
            }
        }

        /// <inheritdoc/>
        public IAction? BlockAction { get; }

        /// <inheritdoc cref="IBlockPolicy{T}.NativeTokens"/>
        // TODO: This should be configurable through the constructor.
        public IImmutableSet<Currency> NativeTokens { get; }

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
        public long GetMaxTransactionsBytes(long index) => _getMaxTransactionsBytes(index);

        /// <inheritdoc/>
        [Pure]
        public int GetMinTransactionsPerBlock(long index) => _getMinTransactionsPerBlock(index);

        /// <inheritdoc/>
        [Pure]
        public int GetMaxTransactionsPerBlock(long index) => _getMaxTransactionsPerBlock(index);

        /// <inheritdoc/>
        [Pure]
        public int GetMaxTransactionsPerSignerPerBlock(long index)
            => _getMaxTransactionsPerSignerPerBlock(index);

        /// <inheritdoc/>
        [Pure]
        public int GetMinBlockProtocolVersion(long index)
            => _getMinBlockProtocolVersion(index);
    }
}
