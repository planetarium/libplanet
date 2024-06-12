using System;
using System.Security.Cryptography;
using Libplanet.Action.State;
using Libplanet.Common;
using Libplanet.Store;
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
        /// Gets the next world state in the <see cref="BlockChain"/>.
        /// </summary>
        /// <returns>The next world state.  If it does not exist, returns null.</returns>
        public IWorldState? GetNextWorldState() => GetNextWorldState(Tip.Hash);

        /// <summary>
        /// Returns the next <see cref="IWorldState"/> in the BlockChain
        /// at <paramref name="offset"/>.
        /// </summary>
        /// <param name="offset">The <see cref="BlockHash"/> of the <see cref="Block"/> to create
        /// for which to create an <see cref="IWorldState"/>.</param>
        /// <returns>
        /// The next <see cref="IWorldState"/> at <paramref name="offset"/>.
        /// Returns <see langword="null"/> if next state root hash does not exists.
        /// </returns>
        /// <exception cref="ArgumentException">Thrown when next state root hash exists,
        /// but corresponding state root is not found in the <see cref="IStateStore"/>.
        /// </exception>
        /// <seealso cref="IWorldState"/>
        public IWorldState? GetNextWorldState(BlockHash offset)
        {
            var nextSrh = Store.GetNextStateRootHash(offset);
            if (nextSrh is { } srh)
            {
                var trie = StateStore.GetStateRoot(srh);
                return trie.Recorded
                    ? new WorldBaseState(StateStore.GetStateRoot(nextSrh), StateStore)
                    : throw new ArgumentException(
                        $"Could not find state root {srh} in {nameof(StateStore)}.",
                        nameof(offset));
            }
            else
            {
                return null;
            }
        }
    }
}
