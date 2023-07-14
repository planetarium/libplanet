#nullable disable
using System.Collections.Generic;
using Libplanet.Action;
using Libplanet.Common.Crypto;
using Libplanet.Common.Types.Blocks;
using Libplanet.Common.Types.Tx;

namespace Libplanet.Blockchain.Policies
{
    public class NullBlockPolicy : IBlockPolicy
    {
        private readonly BlockPolicyViolationException _exceptionToThrow;
        private readonly long _difficulty;

        public NullBlockPolicy(
            BlockPolicyViolationException exceptionToThrow = null,
            long difficulty = 1)
        {
            _exceptionToThrow = exceptionToThrow;
            _difficulty = difficulty;
        }

        public ISet<Address> BlockedMiners { get; } = new HashSet<Address>();

        public IAction BlockAction => null;

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
    }
}
