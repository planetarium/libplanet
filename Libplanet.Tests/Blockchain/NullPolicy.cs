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

        public NullPolicy(InvalidBlockException exceptionToThrow = null)
        {
            _exceptionToThrow = exceptionToThrow;
        }

        public IAction BlockAction => null;

        public long GetNextBlockDifficulty(IReadOnlyList<Block<T>> blocks) =>
            blocks.Any() ? 1 : 0;

        public InvalidBlockException ValidateNextBlock(
            IReadOnlyList<Block<T>> blocks, Block<T> nextBlock) =>
            _exceptionToThrow;
    }
}
