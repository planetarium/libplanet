using System;
using System.Security.Cryptography;
using Libplanet.Common;
using Libplanet.Store;
using Libplanet.Store.Trie;
using Libplanet.Types.Blocks;

namespace Libplanet.Action.State
{
    /// <summary>
    /// A minimal interface to get states from a BlockChain.
    /// <para>Note that BlockChain implements this interface.</para>
    /// </summary>
    public interface IBlockChainStates
    {
        /// <summary>
        /// Returns the <see cref="IWorldState"/> in the BlockChain at <paramref name="offset"/>.
        /// </summary>
        /// <param name="offset">The <see cref="BlockHash"/> of the <see cref="Block"/> to create
        /// for which to create an <see cref="IWorldState"/>.</param>
        /// <returns>
        /// The <see cref="IWorldState"/> at <paramref name="offset"/>, which is the identical
        /// to what <see cref="Block.StateRootHash"/> of <paramref name="offset"/> indicates.
        /// </returns>
        /// <exception cref="ArgumentException">Thrown when <paramref name="offset"/>
        /// one of the following is true.
        /// <list type="bullet">
        ///     <item><description>
        ///         Corresponding <see cref="Block"/> is not found in the <see cref="IStore"/>.
        ///     </description></item>
        ///     <item><description>
        ///         Corresponding <see cref="Block"/> is found but its state root is not found
        ///         in the <see cref="IStateStore"/>.
        ///     </description></item>
        /// </list>
        /// </exception>
        /// <seealso cref="IWorldState"/>
        IWorldState GetWorldState(BlockHash offset);

        /// <summary>
        /// Returns the <see cref="IWorldState"/> in the BlockChain's state storage
        /// with <paramref name="stateRootHash"/>.
        /// </summary>
        /// <param name="stateRootHash">The state root hash for which to create
        /// an <see cref="IWorldState"/>.</param>
        /// <returns>
        /// The <see cref="IWorldState"/> with <paramref name="stateRootHash"/>.
        /// If <paramref name="stateRootHash"/> is <see langword="null"/>,
        /// returns the hash of the empty state root.
        /// </returns>
        /// <exception cref="ArgumentException">Thrown when no <see cref="ITrie"/> with
        /// <paramref name="hash"/> as its state root hash is found.
        /// </exception>
        /// <seealso cref="IWorldState"/>
        IWorldState GetWorldState(HashDigest<SHA256>? stateRootHash);

        /// <summary>
        /// Obsolete: Temporary method, avoid using it.
        /// Returns the <see cref="IWorldState"/> in the BlockChain at <paramref name="offset"/>.
        /// </summary>
        /// <param name="offset">The <see cref="BlockHash"/> of the <see cref="Block"/> to create
        /// for which to create an <see cref="IWorldState"/>.</param>
        /// <returns>
        /// The <see cref="IWorldState"/> at <paramref name="offset"/>.
        /// Returns <see langword="null"/> if next state root hash does not exists.
        /// </returns>
        /// <exception cref="ArgumentException">Thrown when next state root hash exists,
        /// but corresponding state root is not found in the <see cref="IStateStore"/>.
        /// </exception>
        /// <seealso cref="IWorldState"/>
        [Obsolete("Temporary method maintained during adaptation period")]
        IWorldState? GetNextWorldState(BlockHash offset);
    }
}
