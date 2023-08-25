using System;
using System.Collections.Generic;
using Bencodex.Types;
using Libplanet.Crypto;
using Libplanet.Store;
using Libplanet.Types.Assets;
using Libplanet.Types.Blocks;
using Libplanet.Types.Consensus;

namespace Libplanet.Action.State
{
    /// <summary>
    /// A minimal interface to get states from a <see cref="BlockChain"/>.
    /// <para>Note that <see cref="BlockChain"/> implements this interface.</para>
    /// </summary>
    public interface IBlockChainStates
    {
        /// <summary>
        /// Gets a state associated to specified <paramref name="address"/>.
        /// </summary>
        /// <param name="address">The <see cref="Address"/> of the state to query.</param>
        /// <param name="offset">The <see cref="BlockHash"/> of the <see cref="Block"/> to fetch
        /// the states from.</param>
        /// <returns>The state associated to specified <paramref name="address"/>.
        /// An absent state is represented as <see langword="null"/>.  The returned value
        /// must be the same as the single element when retrieved via
        /// <see cref="GetStates"/>.
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
        /// <remarks>
        /// For performance reasons, it is generally recommended to use <see cref="GetStates"/>
        /// with a batch of <see cref="Address"/>es instead of iterating over this method.
        /// </remarks>
        IValue? GetState(Address address, BlockHash? offset);

        /// <summary>
        /// Gets multiple states associated to specified <paramref name="addresses"/>.
        /// </summary>
        /// <param name="addresses">The <see cref="Address"/>es of the states to query.</param>
        /// <param name="offset">The <see cref="BlockHash"/> of the <see cref="Block"/> to fetch
        /// the states from.</param>
        /// <returns>The states associated to specified <paramref name="addresses"/>.
        /// Associated values are ordered in the same way to the corresponding
        /// <paramref name="addresses"/>.  Absent states are represented as <see langword="null"/>.
        /// Hence, the returned <see cref="IReadOnlyList{T}"/> is guarenteeed to be of the same
        /// length as <paramref name="addresses"/> with possible <see langword="null"/> values.
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
        IReadOnlyList<IValue?> GetStates(
            IReadOnlyList<Address> addresses,
            BlockHash? offset);

        /// <summary>
        /// Gets <paramref name="address"/>'s balance for given <paramref name="currency"/> in the
        /// <see cref="BlockChain"/> at <paramref name="offset"/>.
        /// </summary>
        /// <param name="address">The owner <see cref="Address"/> to query.</param>
        /// <param name="currency">The currency type to query.</param>
        /// <param name="offset">The <see cref="BlockHash"/> of the <see cref="Block"/> to fetch
        /// the states from.</param>
        /// <returns>The <paramref name="address"/>'s balance for <paramref name="currency"/>
        /// at <paramref name="offset"/>.  If absent, returns 0 <see cref="FungibleAssetValue"/>
        /// for <paramref name="currency"/>.
        /// </returns>
        /// <exception cref="ArgumentException">Thrown when <see cref="IAccount"/> at
        /// <paramref name="offset"/> cannot be created.</exception>
        FungibleAssetValue GetBalance(
            Address address,
            Currency currency,
            BlockHash? offset);

        /// <summary>
        /// Gets the total supply of a <paramref name="currency"/> in the
        /// <see cref="BlockChain"/> at <paramref name="offset"/>, and if not found, returns 0.
        /// </summary>
        /// <param name="currency">The currency type to query.</param>
        /// <param name="offset">The <see cref="BlockHash"/> of the <see cref="Block"/> to fetch
        /// the states from.</param>
        /// <returns>The total supply value of <paramref name="currency"/> at
        /// <paramref name="offset"/> in <see cref="FungibleAssetValue"/>.
        /// If absent, returns 0 <see cref="FungibleAssetValue"/>
        /// for <paramref name="currency"/>.</returns>
        /// <exception cref="ArgumentException">Thrown when <see cref="IAccount"/> at
        /// <paramref name="offset"/> cannot be created.</exception>
        /// <exception cref="TotalSupplyNotTrackableException">Thrown when
        /// given <paramref name="currency"/>'s <see cref="Currency.TotalSupplyTrackable"/>
        /// is <see langword="false"/>.</exception>
        /// <seealso cref="GetAccount"/>
        FungibleAssetValue GetTotalSupply(
            Currency currency,
            BlockHash? offset);

        /// <summary>
        /// Returns the validator set in the
        /// <see cref="BlockChain"/> at <paramref name="offset"/>.
        /// </summary>
        /// <param name="offset">The <see cref="BlockHash"/> of the <see cref="Block"/> to fetch
        /// the states from.</param>
        /// <returns>The validator set of type <see cref="ValidatorSet"/> at
        /// <paramref name="offset"/>.
        /// </returns>
        /// <exception cref="ArgumentException">Thrown when <see cref="IAccount"/> at
        /// <paramref name="offset"/> cannot be created.</exception>
        /// <seealso cref="GetAccount"/>
        ValidatorSet GetValidatorSet(BlockHash? offset);

        /// <summary>
        /// Returns the <see cref="IAccount"/> in the <see cref="BlockChain"/>
        /// at <paramref name="offset"/>.
        /// </summary>
        /// <param name="offset">The <see cref="BlockHash"/> of the <see cref="Block"/> to create
        ///     for which to create an <see cref="IAccount"/>.</param>
        /// <returns>
        /// The <see cref="IAccount"/> at <paramref name="offset"/>.
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
        /// <seealso cref="IAccount"/>
        IAccount GetAccount(BlockHash? offset);
    }
}
