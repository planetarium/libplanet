using System;
using System.Collections.Generic;
using System.Security.Cryptography;
using Libplanet.Action;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
using Libplanet.Blocks;
using Libplanet.Tx;

namespace Libplanet.Tests.Blockchain
{
    public class NullPolicy<T> : IBlockPolicy<T>
        where T : IAction, new()
    {
        private readonly InvalidBlockException _exceptionToThrow;
        private readonly long _difficulty;

        public NullPolicy(InvalidBlockException exceptionToThrow = null, long difficulty = 1)
        {
            _exceptionToThrow = exceptionToThrow;
            _difficulty = difficulty;
        }

        public IComparer<IBlockExcerpt> CanonicalChainComparer =>
            new TotalDifficultyComparer();

        public IAction BlockAction => null;

        public int GetMaxTransactionsPerBlock(long index) => int.MaxValue;

        public bool DoesTransactionFollowsPolicy(
            Transaction<T> transaction,
            BlockChain<T> blockChain
        ) => true;

        public long GetNextBlockDifficulty(BlockChain<T> blocks) =>
            blocks.Count == 0 ? 0 : _difficulty;

        public InvalidBlockException ValidateNextBlock(BlockChain<T> blocks, Block<T> nextBlock) =>
            _exceptionToThrow;

        public int GetMaxBlockBytes(long index) => 1024 * 1024;

        public virtual HashAlgorithmType GetHashAlgorithm(long index) =>
            HashAlgorithmType.Of<SHA256>();

        public int GetMaxTransactionsPerSignerPerBlock(long index) =>
            GetMaxTransactionsPerBlock(index);
    }
}
