using System.Collections.Generic;
using Bencodex.Types;
using Libplanet.Assets;
using Libplanet.Consensus;
using Libplanet.State;

namespace Libplanet.Blocks
{
    /// <summary>
    /// A minimal interface to get states from output states of a <see cref="Block"/>.
    /// </summary>
    public interface IBlockStates
    {
        /// <summary>
        /// The <see cref="Block.Hash"/> of the <see cref="Block"/> that this
        /// <see cref="IBlockStates"/> represents.  This can be <see langword="null"/>
        /// in which case represents initial default states.
        /// </summary>
        BlockHash? BlockHash { get; }

        /// <summary>
        /// Gets the state associated to specified <paramref name="address"/>
        /// at <see cref="BlockHash"/>.
        /// </summary>
        /// <param name="address">The <see cref="Address"/> of the state to query.</param>
        /// <returns>The state associated to specified <paramref name="address"/>.
        /// An absent state is represented as <see langword="null"/>.  The returned value
        /// must be the same as the single element when retrieved via
        /// <see cref="GetStates"/>.
        /// </returns>
        /// <remarks>
        /// For performance reasons, it is generally recommended to use <see cref="GetStates"/>
        /// with a batch of <see cref="Address"/>es instead of iterating over this method.
        /// </remarks>
        IValue? GetState(Address address);

        /// <summary>
        /// Gets multiple states associated to specified <paramref name="addresses"/>
        /// at <see cref="BlockHash"/>.
        /// </summary>
        /// <param name="addresses">The <see cref="Address"/>es of the states to query.</param>
        /// <returns>The states associated to specified <paramref name="addresses"/>.
        /// Associated values are ordered the same to the corresponding
        /// <paramref name="addresses"/>.  Absent states are represented as <see langword="null"/>.
        /// </returns>
        IReadOnlyList<IValue?> GetStates(IReadOnlyList<Address> addresses);

        /// <summary>
        /// Gets <paramref name="address"/>'s balance for given <paramref name="currency"/>
        /// at <see cref="BlockHash"/>.
        /// </summary>
        /// <param name="address">The owner <see cref="Address"/> to query.</param>
        /// <param name="currency">The currency type to query.</param>
        /// <returns>The <paramref name="address"/>'s balance for <paramref name="currency"/>.
        /// If absent, returns 0 <see cref="FungibleAssetValue"/>
        /// for <paramref name="currency"/>.
        /// </returns>
        FungibleAssetValue GetBalance(Address address, Currency currency);

        /// <summary>
        /// Gets the total supply of a <paramref name="currency"/> at <see cref="BlockHash"/>.
        /// </summary>
        /// <param name="currency">The currency type to query.</param>
        /// <returns>The total supply value of <paramref name="currency"/>
        /// in <see cref="FungibleAssetValue"/>.  If absent, returns 0
        /// <see cref="FungibleAssetValue"/> for <paramref name="currency"/>.</returns>
        /// <exception cref="TotalSupplyNotTrackableException">Thrown when
        /// given <paramref name="currency"/>'s <see cref="Currency.TotalSupplyTrackable"/>
        /// is <see langword="false"/>.</exception>
        FungibleAssetValue GetTotalSupply(Currency currency);

        /// <summary>
        /// Returns the validator set.
        /// </summary>
        /// <returns>The validator set of type <see cref="ValidatorSet"/>
        /// at <see cref="BlockHash"/>.
        /// </returns>
        ValidatorSet GetValidatorSet();
    }
}
