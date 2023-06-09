using System;
using System.Collections.Generic;
using Bencodex.Types;
using Libplanet.Assets;
using Libplanet.Blocks;
using Libplanet.Consensus;
using Libplanet.Store;
using Libplanet.Store.Trie;

namespace Libplanet.Blockchain
{
    /// <summary>
    /// A minimal interface to get states from a blockchain.
    /// <para>Note that <see cref="BlockChain"/> implements this interface.</para>
    /// </summary>
    public interface IBlockChainStates
    {
        /// <summary>
        /// Gets multiple states associated to the specified <paramref name="addresses"/>.
        /// </summary>
        /// <param name="addresses">Addresses of states to query.</param>
        /// <param name="offset">The <see cref="HashDigest{T}"/> of the block to start finding
        /// the states.</param>
        /// <returns>The states associated to the specified <paramref name="addresses"/>.
        /// Associated values are ordered in the same way to the corresponding
        /// <paramref name="addresses"/>.  Absent states are represented as <see langword="null"/>.
        /// </returns>
        IReadOnlyList<IValue?> GetStates(
            IReadOnlyList<Address> addresses,
            BlockHash? offset
        );

        /// <summary>
        /// Queries <paramref name="address"/>'s balance of the <paramref name="currency"/> in the
        /// <see cref="BlockChain"/> from <paramref name="offset"/>.
        /// </summary>
        /// <param name="address">The owner <see cref="Address"/> to query.</param>
        /// <param name="currency">The currency type to query.</param>
        /// <param name="offset">The <see cref="HashDigest{T}"/> of the block to
        /// start finding the state.</param>
        /// <returns>The <paramref name="address"/>'s current balance (or balance as of the given
        /// <paramref name="offset"/>) of the <paramref name="currency"/>.
        /// </returns>
        FungibleAssetValue GetBalance(
            Address address,
            Currency currency,
            BlockHash? offset
        );

        /// <summary>
        /// Gets the total supply of a <paramref name="currency"/> in the
        /// <see cref="BlockChain"/> from <paramref name="offset"/>, and if not found, return 0.
        /// </summary>
        /// <param name="currency">The currency type to query.</param>
        /// <param name="offset">The <see cref="HashDigest{T}"/> of the block to
        /// start finding the state.</param>
        /// <returns>The total supply value of <paramref name="currency"/> at
        /// <paramref name="offset"/> in <see cref="FungibleAssetValue"/>.</returns>
        FungibleAssetValue GetTotalSupply(
            Currency currency,
            BlockHash? offset
        );

        /// <summary>
        /// Returns the validator set in the
        /// <see cref="BlockChain"/> from <paramref name="offset"/>.
        /// </summary>
        /// <param name="offset">The <see cref="HashDigest{T}"/> of the block to
        /// start finding the state.</param>
        /// <returns>The validator set of type <see cref="ValidatorSet"/> at the
        /// <paramref name="offset"/>.
        /// </returns>
        ValidatorSet GetValidatorSet(BlockHash? offset);

        /// <summary>
        /// Returns the state root associated with <see cref="BlockHash"/>
        /// <paramref name="offset"/>.
        /// </summary>
        /// <param name="offset">The <see cref="BlockHash"/> to look up in
        /// the internally held <see cref="IStore"/>.</param>
        /// <returns>An <see cref="ITrie"/> representing the state root associated with
        /// <paramref name="offset"/>.</returns>
        /// <exception cref="ArgumentException">Thrown for one of the following reasons.
        /// <list type="bullet">
        ///     <item><description>
        ///         If <paramref name="offset"/> is not <see langword="null"/> and
        ///         <paramref name="offset"/> cannot be found in <see cref="IStore"/>.
        ///     </description></item>
        ///     <item><description>
        ///         If <paramref name="offset"/> is not <see langword="null"/> and
        ///         the state root hash associated with <paramref name="offset"/>
        ///         cannot be found in <see cref="IStateStore"/>.
        ///     </description></item>
        /// </list>
        /// </exception>
        ITrie GetStateRoot(BlockHash? offset);
    }
}
