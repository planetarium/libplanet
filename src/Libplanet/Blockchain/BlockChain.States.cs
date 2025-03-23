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

        /// <inheritdoc cref="IBlockChainStates.GetWorldState(HashDigest{SHA256})" />
        public IWorldState GetWorldState(HashDigest<SHA256> stateRootHash)
            => _blockChainStates.GetWorldState(stateRootHash);

        /// <summary>
        /// Gets the next world state in the <see cref="BlockChain"/>.
        /// </summary>
        /// <returns>The next world state.  If it does not exist, returns null.</returns>
        public IWorldState? GetNextWorldState()
        {
            if (GetNextStateRootHash() is { } nsrh)
            {
                var trie = StateStore.GetStateRoot(nsrh);
                return trie.IsCommitted
                    ? new WorldBaseState(trie, StateStore)
                    : throw new InvalidOperationException(
                        $"Could not find state root {nsrh} in {nameof(StateStore)} for " +
                        $"the current tip.");
            }
            else
            {
                return null;
            }
        }
    }
}
