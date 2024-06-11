using System;
using System.Security.Cryptography;
using Libplanet.Action.State;
using Libplanet.Common;
using Libplanet.Types.Blocks;

namespace Libplanet.Blockchain
{
    public partial class BlockChain
    {
        /// <summary>
        /// Gets the current world state in the <see cref="BlockChain"/>.
        /// </summary>
        /// <returns>The current world state.</returns>
        public IWorldState GetWorldState() => GetWorldState(Tip.Hash);

        /// <inheritdoc cref="IBlockChainStates.GetWorldState(BlockHash)" />
        public IWorldState GetWorldState(BlockHash offset)
            => _blockChainStates.GetWorldState(offset);

        /// <inheritdoc cref="IBlockChainStates.GetWorldState(HashDigest{SHA256}?)" />
        public IWorldState GetWorldState(HashDigest<SHA256>? stateRootHash)
            => _blockChainStates.GetWorldState(stateRootHash);

        /// <summary>
        /// Obsolete: Temporary method, avoid using it.
        /// Gets the next world state in the <see cref="BlockChain"/>.
        /// </summary>
        /// <returns>The next world state.  If it does not exist, returns null.</returns>
        [Obsolete("Temporary method maintained during adaptation period")]
        public IWorldState? GetNextWorldState() => GetNextWorldState(Tip.Hash);

        /// <inheritdoc cref="IBlockChainStates.GetNextWorldState(BlockHash)" />
        [Obsolete("Temporary method maintained during adaptation period")]
        public IWorldState? GetNextWorldState(BlockHash offset)
            => _blockChainStates.GetNextWorldState(offset);
    }
}
