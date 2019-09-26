using System.Collections.Generic;
using System.Linq;
using Libplanet.Action;
using Libplanet.Blockchain.Policies;
using Libplanet.Blocks;

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

        public IAction BlockAction => null;

        public long GetNextBlockDifficulty(IReadOnlyList<Block<T>> blocks) =>
            blocks.Any() ? _difficulty : 0;

        public InvalidBlockException ValidateNextBlock(
            IReadOnlyList<Block<T>> blocks, Block<T> nextBlock) =>
            _exceptionToThrow;
    }
}
