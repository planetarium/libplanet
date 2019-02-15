using System;
using System.Collections.Generic;
using Libplanet.Action;
using Libplanet.Blocks;

namespace Libplanet.Blockchain.Policies
{
    public interface IBlockPolicy<T>
        where T : IAction
    {
        InvalidBlockException ValidateBlocks(
            IEnumerable<Block<T>> blocks,
            DateTime currentTime
        );

        uint GetNextBlockDifficulty(IEnumerable<Block<T>> blocks);
    }
}
