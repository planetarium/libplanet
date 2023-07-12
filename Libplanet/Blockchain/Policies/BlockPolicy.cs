using System;
using System.Diagnostics.Contracts;
using System.Linq;
using Libplanet.Action;
using Libplanet.Common.Types.Blocks;
using Libplanet.Common.Types.Tx;

namespace Libplanet.Blockchain.Policies
{
    /// <summary>
    /// A default implementation of <see cref="IBlockPolicy"/> interface.
    /// </summary>
    public class BlockPolicy : IBlockPolicy
    {
        public static readonly TimeSpan DefaultTargetBlockInterval = TimeSpan.FromSeconds(5);

        private readonly Func<BlockChain, Transaction, TxPolicyViolationException?>
            _validateNextBlockTx;

        private readonly Func<BlockChain, Block, BlockPolicyViolationException?>
            _validateNextBlock;

        private readonly Func<long, long> _getMaxTransactionsBytes;
        private readonly Func<long, int> _getMinTransactionsPerBlock;
        private readonly Func<long, int> _getMaxTransactionsPerBlock;
        private readonly Func<long, int> _getMaxTransactionsPerSignerPerBlock;

        /// <summary>
        /// <para>
        /// Creates a default <see cref="BlockPolicy"/> instance.
        /// </para>
        /// <para>
        /// Each unprovided argument will be assigned a default value.  See each parameter
        /// description for more detail.
        /// </para>
        /// </summary>
        /// <param name="blockAction">A <see cref="IAction"/> to executed for
        /// every <see cref="Block"/>.  Set to <see langword="null"/> by default, which results
        /// in no additional execution other than those included in <see cref="Transaction"/>s.
        /// </param>
        /// <param name="blockInterval">Goes to <see cref="BlockInterval"/>.
        /// Set to <see cref="DefaultTargetBlockInterval"/> by default.
        /// </param>
        /// <param name="validateNextBlockTx">The predicate that determines if
        /// a <see cref="Transaction"/> follows the policy.  Set to a constant function of
        /// <see langword="null"/> by default.</param>
        /// <param name="validateNextBlock">The predicate that determines if
        /// a <see cref="Block"/> follows the policy.  Set to a default implementation
        /// where block's hash algorithm type, bytes count, and transactions count are validated.
        /// </param>
        /// <param name="getMaxTransactionsBytes">The function determining the maximum size of
        /// <see cref="Block.Transactions"/> in number of <c>byte</c>s given
        /// its <see cref="Block.Index"/>.  Goes to <see cref="GetMaxTransactionsBytes"/>.
        /// Set to a constant size of <c>100</c>KiB, i.e. <c>100 * 1024</c>, by default.</param>
        /// <param name="getMinTransactionsPerBlock">The function determining the minimum number of
        /// <see cref="Transaction"/>s that must be included in a <see cref="Block"/>.
        /// Goes to <see cref="GetMinTransactionsPerBlock"/>.  Set to a constant function
        /// of <c>0</c> by default.</param>
        /// <param name="getMaxTransactionsPerBlock">The function determining how many
        /// <see cref="Transaction"/>s can be included in a <see cref="Block"/>.
        /// Goes to <see cref="GetMaxTransactionsPerBlock"/>.  Set to a constant function
        /// of <c>100</c> by default.</param>
        /// <param name="getMaxTransactionsPerSignerPerBlock">The function determining the maximum
        /// number of transactions from the same signer that can be included in
        /// a <see cref="Block"/> given the <see cref="Block"/>'s index.
        /// Goes to <see cref="GetMaxTransactionsPerSignerPerBlock"/>.  Set to
        /// <see cref="GetMaxTransactionsPerBlock"/> by default.</param>
        public BlockPolicy(
            IAction? blockAction = null,
            TimeSpan? blockInterval = null,
            Func<BlockChain, Transaction, TxPolicyViolationException?>?
                validateNextBlockTx = null,
            Func<BlockChain, Block, BlockPolicyViolationException?>?
                validateNextBlock = null,
            Func<long, long>? getMaxTransactionsBytes = null,
            Func<long, int>? getMinTransactionsPerBlock = null,
            Func<long, int>? getMaxTransactionsPerBlock = null,
            Func<long, int>? getMaxTransactionsPerSignerPerBlock = null)
        {
            BlockAction = blockAction;
            BlockInterval = blockInterval ?? DefaultTargetBlockInterval;
            _getMaxTransactionsBytes = getMaxTransactionsBytes ?? (_ => 100L * 1024L);
            _getMinTransactionsPerBlock = getMinTransactionsPerBlock ?? (_ => 0);
            _getMaxTransactionsPerBlock = getMaxTransactionsPerBlock ?? (_ => 100);
            _getMaxTransactionsPerSignerPerBlock = getMaxTransactionsPerSignerPerBlock
                ?? GetMaxTransactionsPerBlock;

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

                    long blockBytes = BlockMarshaler.MarshalTransactions(block.Transactions)
                        .EncodingLength;
                    if (blockBytes > maxTransactionsBytes)
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

        /// <summary>
        /// Targeted time interval between two consecutive <see cref="Block"/>s.
        /// </summary>
        public TimeSpan BlockInterval { get; }

        /// <inheritdoc/>
        public virtual TxPolicyViolationException? ValidateNextBlockTx(
            BlockChain blockChain, Transaction transaction)
        {
            return _validateNextBlockTx(blockChain, transaction);
        }

        /// <inheritdoc/>
        public virtual BlockPolicyViolationException? ValidateNextBlock(
            BlockChain blockChain,
            Block nextBlock)
        {
            return _validateNextBlock(blockChain, nextBlock);
        }

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
    }
}
