using System.Collections.Generic;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Assets;
using Libplanet.Blocks;
using Libplanet.Consensus;

namespace Libplanet.Blockchain
{
    /// <summary>
    /// A minimal interface to get states from a blockchain.
    /// <para>Note that <see cref="BlockChain{T}"/> implements this interface.</para>
    /// </summary>
    /// <typeparam name="T">An <see cref="IAction"/> type.</typeparam>
    public interface IBlockChainStates<T>
        where T : IAction, new()
    {
        /// <summary>
        /// Gets multiple states associated to the specified <paramref name="addresses"/>.
        /// </summary>
        /// <param name="addresses">Addresses of states to query.</param>
        /// <param name="offset">The <see cref="HashDigest{T}"/> of the block to start finding
        /// the states.</param>
        /// <param name="stateCompleter">When the <see cref="BlockChain{T}"/> instance does not
        /// contain states of the block, this delegate is called and its return values are used
        /// instead.
        /// <para><see cref="StateCompleters{T}.Recalculate"/> makes the incomplete states
        /// recalculated and filled on the fly.</para>
        /// <para><see cref="StateCompleters{T}.Reject"/> makes the incomplete states (if needed)
        /// to cause <see cref="IncompleteBlockStatesException"/> instead.</para></param>
        /// <returns>The states associated to the specified <paramref name="addresses"/>.
        /// Associated values are ordered in the same way to the corresponding
        /// <paramref name="addresses"/>.  Absent states are represented as <see langword="null"/>.
        /// </returns>
        IReadOnlyList<IValue?> GetStates(
            IReadOnlyList<Address> addresses,
            BlockHash offset,
            StateCompleter<T> stateCompleter
        );

        /// <summary>
        /// Queries <paramref name="address"/>'s balance of the <paramref name="currency"/> in the
        /// <see cref="BlockChain{T}"/> from <paramref name="offset"/>.
        /// </summary>
        /// <param name="address">The owner <see cref="Address"/> to query.</param>
        /// <param name="currency">The currency type to query.</param>
        /// <param name="offset">The <see cref="HashDigest{T}"/> of the block to
        /// start finding the state.</param>
        /// <param name="stateCompleter">When the <see cref="BlockChain{T}"/> instance does not
        /// contain states dirty of the block which lastly updated states of a requested address,
        /// this delegate is called and its return value is used instead.
        /// <para><see cref="FungibleAssetStateCompleters{T}.Recalculate"/> makes the incomplete
        /// states recalculated and filled on the fly.</para>
        /// <para><see cref="FungibleAssetStateCompleters{T}.Reject"/> makes the incomplete states
        /// (if needed) to cause <see cref="IncompleteBlockStatesException"/> instead.</para>
        /// </param>
        /// <returns>The <paramref name="address"/>'s current balance (or balance as of the given
        /// <paramref name="offset"/>) of the <paramref name="currency"/>.
        /// </returns>
        FungibleAssetValue GetBalance(
            Address address,
            Currency currency,
            BlockHash offset,
            FungibleAssetStateCompleter<T> stateCompleter
        );

        /// <summary>
        /// Gets the total supply of a <paramref name="currency"/> in the
        /// <see cref="BlockChain{T}"/> from <paramref name="offset"/>, and if not found, return 0.
        /// </summary>
        /// <param name="currency">The currency type to query.</param>
        /// <param name="offset">The <see cref="HashDigest{T}"/> of the block to
        /// start finding the state.</param>
        /// <param name="stateCompleter">When the <see cref="BlockChain{T}"/> instance does not
        /// contain states of the block, this delegate is called and its return values are used
        /// instead.
        /// <para><see cref="FungibleAssetStateCompleters{T}.Recalculate"/> makes the incomplete
        /// states recalculated and filled on the fly.</para>
        /// <para><see cref="FungibleAssetStateCompleters{T}.Reject"/> makes the incomplete states
        /// (if needed) to cause <see cref="IncompleteBlockStatesException"/> instead.</para>
        /// </param>
        /// <returns>The total supply value of <paramref name="currency"/> at
        /// <paramref name="offset"/> in <see cref="FungibleAssetValue"/>.</returns>
        FungibleAssetValue GetTotalSupply(
            Currency currency,
            BlockHash offset,
            TotalSupplyStateCompleter<T> stateCompleter
        );

        ValidatorSet GetValidatorSet(
            BlockHash offset,
            ValidatorSetStateCompleter<T> stateCompleter);
    }
}
