using System;
using System.Security.Cryptography;
using Libplanet.Common;
using Libplanet.Store;
using Libplanet.Store.Trie;
using Libplanet.Types.Blocks;

namespace Libplanet.Action.State
{
    /// <summary>
    /// A minimal interface to get states from a <see cref="BlockChain"/>.
    /// <para>Note that <see cref="BlockChain"/> implements this interface.</para>
    /// </summary>
    public interface IBlockChainStates
    {
        /// <summary>
        /// Returns the <see cref="IWorldState"/> in the <see cref="BlockChain"/>
        /// at <paramref name="offset"/>.
        /// </summary>
        /// <param name="offset">The <see cref="BlockHash"/> of the <see cref="Block"/> to create
        /// for which to create an <see cref="IWorldState"/>.</param>
        /// <returns>
        /// The <see cref="IWorldState"/> at <paramref name="offset"/>.
        /// </returns>
        /// <exception cref="ArgumentException">Thrown when <paramref name="offset"/> is not
        /// <see langword="null"/> and one of the following is true.
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
        IWorldState GetWorldState(BlockHash? offset);

        /// <summary>
        /// Returns the <see cref="IWorldState"/> in the <see cref="BlockChain"/>'s state storage
        /// with <paramref name="stateRootHash"/>.
        /// </summary>
        /// <param name="stateRootHash">The state root hash for which to create
        /// an <see cref="IWorldState"/>.</param>
        /// <returns>
        /// The <see cref="IWorldState"/> with <paramref name="stateRootHash"/>.
        /// </returns>
        /// <exception cref="ArgumentException">Thrown when no <see cref="ITrie"/> with
        /// <paramref name="hash"/> as its state root hash is found.
        /// </exception>
        /// <seealso cref="IWorldState"/>
        IWorldState GetWorldState(HashDigest<SHA256>? stateRootHash);
    }
}
