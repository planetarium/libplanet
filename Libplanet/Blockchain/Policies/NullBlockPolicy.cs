#nullable disable
using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using Libplanet.Action;
using Libplanet.Assets;
using Libplanet.Blocks;
using Libplanet.Consensus;
using Libplanet.Crypto;
using Libplanet.Tx;

namespace Libplanet.Blockchain.Policies
{
    public class NullBlockPolicy<T> : IBlockPolicy<T>
        where T : IAction, new()
    {
        private readonly BlockPolicyViolationException _exceptionToThrow;
        private readonly long _difficulty;
        private readonly Func<long, ValidatorSet> _getValidatorSet;

        public NullBlockPolicy(
            BlockPolicyViolationException exceptionToThrow = null,
            long difficulty = 1,
            Func<long, ValidatorSet> getValidatorSet = null)
        {
            _exceptionToThrow = exceptionToThrow;
            _difficulty = difficulty;
            UpdateValidatorSetAction = new PoSAction();
        }

        public ISet<Address> BlockedMiners { get; } = new HashSet<Address>();

        public IAction BlockAction => null;

        public IAction UpdateValidatorSetAction { get; }

        /// <inheritdoc cref="IBlockPolicy{T}.NativeTokens"/>
        public IImmutableSet<Currency> NativeTokens => ImmutableHashSet<Currency>.Empty;

        public int GetMinTransactionsPerBlock(long index) => 0;

        public int GetMaxTransactionsPerBlock(long index) => int.MaxValue;

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

        public ValidatorSet GetValidatorSet(long index) => _getValidatorSet(index);
    }
}
