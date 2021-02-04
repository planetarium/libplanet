using System;
using System.Collections.Generic;
using Libplanet.Action;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
using Libplanet.Blocks;
using Libplanet.Tx;

namespace Libplanet.Tests.Blockchain
{
    public sealed class NullPolicy<T> : IBlockPolicy<T>
        where T : IAction, new()
    {
        private readonly InvalidBlockException _exceptionToThrow;
        private readonly long _difficulty;

        public NullPolicy(InvalidBlockException exceptionToThrow = null, long difficulty = 1)
        {
            _exceptionToThrow = exceptionToThrow;
            _difficulty = difficulty;
        }

        public IComparer<BlockPerception> CanonicalChainComparer =>
            new TotalDifficultyComparer(TimeSpan.FromSeconds(3));

        public IAction BlockAction => null;

        public int MaxTransactionsPerBlock => int.MaxValue;

        public bool DoesTransactionFollowsPolicy(
            Transaction<T> transaction,
            BlockChain<T> blockChain
        ) => true;

        public long GetNextBlockDifficulty(BlockChain<T> blocks) =>
            blocks.Count == 0 ? 0 : _difficulty;

        public InvalidBlockException ValidateNextBlock(BlockChain<T> blocks, Block<T> nextBlock) =>
            _exceptionToThrow;

        public int GetMaxBlockBytes(long index) => 1024 * 1024;
    }
}
