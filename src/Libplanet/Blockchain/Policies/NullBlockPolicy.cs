#nullable disable
using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using Libplanet.Action;
using Libplanet.Crypto;
using Libplanet.Types.Blocks;
using Libplanet.Types.Tx;

namespace Libplanet.Blockchain.Policies
{
    public class NullBlockPolicy : IBlockPolicy
    {
        private readonly BlockPolicyViolationException _exceptionToThrow;

        public NullBlockPolicy(
            BlockPolicyViolationException exceptionToThrow = null)
        {
            _exceptionToThrow = exceptionToThrow;
        }

        public ISet<Address> BlockedMiners { get; } = new HashSet<Address>();

        public IPolicyActionsRegistry PolicyActionsRegistry => new PolicyActionsRegistry();

        public ImmutableArray<IAction> BeginBlockActions => ImmutableArray<IAction>.Empty;

        public ImmutableArray<IAction> EndBlockActions => ImmutableArray<IAction>.Empty;

        public ImmutableArray<IAction> BeginTxActions => ImmutableArray<IAction>.Empty;

        public ImmutableArray<IAction> EndTxActions => ImmutableArray<IAction>.Empty;

        public int GetMinTransactionsPerBlock(long index) => 0;

        public int GetMaxTransactionsPerBlock(long index) => int.MaxValue;

        public virtual TxPolicyViolationException ValidateNextBlockTx(
            BlockChain blockChain, Transaction transaction) => null;

        public virtual BlockPolicyViolationException ValidateNextBlock(
            BlockChain blockChain,
            Block nextBlock
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

        public long GetMaxEvidencePendingDuration(long index) => 10L;
    }
}
