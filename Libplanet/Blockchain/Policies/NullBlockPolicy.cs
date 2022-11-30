#nullable disable
using System.Collections.Generic;
using System.Collections.Immutable;
using Libplanet.Action;
using Libplanet.Assets;
using Libplanet.Blocks;
using Libplanet.Tx;

namespace Libplanet.Blockchain.Policies
{
    public class NullBlockPolicy<T> : IBlockPolicy<T>
        where T : IAction, new()
    {
        private readonly BlockPolicyViolationException _exceptionToThrow;
        private readonly long _difficulty;

        public NullBlockPolicy(
            BlockPolicyViolationException exceptionToThrow = null, long difficulty = 1)
        {
            _exceptionToThrow = exceptionToThrow;
            _difficulty = difficulty;
        }

        public ISet<Address> BlockedMiners { get; } = new HashSet<Address>();

        public IComparer<IBlockExcerpt> CanonicalChainComparer =>
            new TotalDifficultyComparer();

        public IAction BlockAction => null;

        /// <inheritdoc cref="IBlockPolicy{T}.NativeTokens"/>
        public IImmutableSet<Currency> NativeTokens => ImmutableHashSet<Currency>.Empty;

        public int GetMinTransactionsPerBlock(long index) => 0;

        public int GetMaxTransactionsPerBlock(long index) => int.MaxValue;

        public virtual long GetNextBlockDifficulty(BlockChain<T> blockChain) =>
            blockChain.Count == 0 ? 0 : _difficulty;

        public virtual TxPolicyViolationException ValidateNextBlockTx(
            BlockChain<T> blockChain, Transaction<T> transaction) => null;

        public virtual BlockPolicyViolationException ValidateNextBlock(
            BlockChain<T> blockChain,
            Block<T> nextBlock
        )
        {
            if (_exceptionToThrow != null)
            {
                return _exceptionToThrow;
            }

            return BlockedMiners.Contains(nextBlock.Miner)
                ? new BlockPolicyViolationException(
                    $"Disallowed #{nextBlock.Index} {nextBlock.Hash} mined by {nextBlock.Miner}.")
                : null;
        }

        public long GetMaxTransactionsBytes(long index) => 1024 * 1024;

        public int GetMaxTransactionsPerSignerPerBlock(long index) =>
            GetMaxTransactionsPerBlock(index);

        public int GetMinBlockProtocolVersion(long index) => 0;
    }
}
