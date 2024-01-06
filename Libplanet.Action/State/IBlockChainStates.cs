using System;
using System.Security.Cryptography;
using Bencodex.Types;
using Libplanet.Common;
using Libplanet.Crypto;
using Libplanet.Store;
using Libplanet.Store.Trie;
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

        /// <summary>
        /// Gets a state associated to specified <paramref name="address"/>.
        /// </summary>
        /// <param name="offset">The <see cref="BlockHash"/> of the <see cref="Block"/> to fetch
        /// the state from.</param>
        /// <param name="address">The <see cref="Address"/> of the state to query.</param>
        /// <returns>The state associated to specified <paramref name="address"/>.
        /// An absent state is represented as <see langword="null"/>.
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
        IValue? GetState(BlockHash? offset, Address address);

        /// <summary>
        /// Gets a state associated to specified <paramref name="address"/>.
        /// </summary>
        /// <param name="stateRootHash">The <see cref="HashDigest{SHA256}"/> of the root hash
        /// for which to create an <see cref="IAccountState"/>.</param>
        /// <param name="address">The <see cref="Address"/> of the state to query.</param>
        /// <returns>The state associated to specified <paramref name="address"/>.
        /// An absent state is represented as <see langword="null"/>.
        /// </returns>
        IValue? GetState(HashDigest<SHA256>? stateRootHash, Address address);

        /// <summary>
        /// Gets <paramref name="address"/>'s balance for given <paramref name="currency"/> in the
        /// <see cref="BlockChain"/> at <paramref name="offset"/>.
        /// </summary>
        /// <param name="offset">The <see cref="BlockHash"/> of the <see cref="Block"/> to fetch
        /// the states from.</param>
        /// <param name="address">The owner <see cref="Address"/> to query.</param>
        /// <param name="currency">The currency type to query.</param>
        /// <returns>The <paramref name="address"/>'s balance for <paramref name="currency"/>
        /// at <paramref name="offset"/> and <see cref="ReservedAddresses.LegacyAccount"/>.
        /// If absent, returns 0 <see cref="FungibleAssetValue"/>
        /// for <paramref name="currency"/>.
        /// </returns>
        /// <exception cref="ArgumentException">Thrown when <see cref="IAccount"/> at
        /// <paramref name="offset"/> and <see cref="ReservedAddresses.LegacyAccount"/>
        /// cannot be created.
        /// </exception>
        FungibleAssetValue GetBalance(
            BlockHash? offset,
            Address address,
            Currency currency);

        /// <summary>
        /// Gets <paramref name="address"/>'s balance for given <paramref name="currency"/> in the
        /// <see cref="BlockChain"/> at <paramref name="stateRootHash"/>.
        /// </summary>
        /// <param name="stateRootHash">The state root hash of the <see cref="ITrie"/> to fetch
        /// the balance from.</param>
        /// <param name="address">The owner <see cref="Address"/> to query.</param>
        /// <param name="currency">The currency type to query.</param>
        /// <returns>The <paramref name="address"/>'s balance for <paramref name="currency"/>
        /// at <paramref name="stateRootHash"/>.
        /// If absent, returns 0 <see cref="FungibleAssetValue"/> for <paramref name="currency"/>.
        /// </returns>
        /// <exception cref="ArgumentException">Thrown when <see cref="IAccount"/> at
        /// <paramref name="stateRootHash"/> cannot be created.</exception>
        FungibleAssetValue GetBalance(
            HashDigest<SHA256>? stateRootHash,
            Address address,
            Currency currency);

        /// <summary>
        /// Gets the total supply of a <paramref name="currency"/> in the
        /// <see cref="BlockChain"/> at <paramref name="offset"/>, and if not found, returns 0.
        /// </summary>
        /// <param name="offset">The <see cref="BlockHash"/> of the <see cref="Block"/> to fetch
        /// the states from.</param>
        /// <param name="currency">The currency type to query.</param>
        /// <returns>The total supply value of <paramref name="currency"/> at
        /// <paramref name="offset"/> and <see cref="ReservedAddresses.LegacyAccount"/>
        /// in <see cref="FungibleAssetValue"/>.
        /// If absent, returns 0 <see cref="FungibleAssetValue"/>
        /// for <paramref name="currency"/>.</returns>
        /// <exception cref="ArgumentException">Thrown when <see cref="IAccount"/> at
        /// <paramref name="offset"/> and <see cref="ReservedAddresses.LegacyAccount"/>
        /// cannot be created.
        /// </exception>
        /// <exception cref="TotalSupplyNotTrackableException">Thrown when
        /// given <paramref name="currency"/>'s <see cref="Currency.TotalSupplyTrackable"/>
        /// is <see langword="false"/>.</exception>
        FungibleAssetValue GetTotalSupply(
            BlockHash? offset,
            Currency currency);

        /// <summary>
        /// Gets the total supply of a <paramref name="currency"/> in the <see cref="BlockChain"/>
        /// at <paramref name="stateRootHash"/>, and if not found, returns 0.
        /// </summary>
        /// <param name="stateRootHash">The state root hash of the <see cref="ITrie"/> to fetch
        /// the total supply from.</param>
        /// <param name="currency">The currency type to query.</param>
        /// <returns>The total supply value of <paramref name="currency"/> at
        /// <paramref name="stateRootHash"/> in <see cref="FungibleAssetValue"/>.
        /// If absent, returns 0 <see cref="FungibleAssetValue"/>
        /// for <paramref name="currency"/>.</returns>
        /// <exception cref="ArgumentException">Thrown when <see cref="IAccount"/> at
        /// <paramref name="stateRootHash"/> cannot be created.</exception>
        /// <exception cref="TotalSupplyNotTrackableException">Thrown when
        /// given <paramref name="currency"/>'s <see cref="Currency.TotalSupplyTrackable"/>
        /// is <see langword="false"/>.</exception>
        FungibleAssetValue GetTotalSupply(
            HashDigest<SHA256>? stateRootHash,
            Currency currency);

        /// <summary>
        /// Returns the validator set in the
        /// <see cref="BlockChain"/> at <paramref name="offset"/>.
        /// </summary>
        /// <param name="offset">The <see cref="BlockHash"/> of the <see cref="Block"/> to fetch
        /// the states from.</param>
        /// <returns>The validator set of type <see cref="ValidatorSet"/> at
        /// <paramref name="offset"/> and <see cref="ReservedAddresses.LegacyAccount"/>.
        /// </returns>
        /// <exception cref="ArgumentException">Thrown when <see cref="IAccount"/> at
        /// <paramref name="offset"/> and <see cref="ReservedAddresses.LegacyAccount"/>
        /// cannot be created.
        /// </exception>
        ValidatorSet GetValidatorSet(BlockHash? offset);

        /// <summary>
        /// Returns the validator set in the
        /// <see cref="BlockChain"/> at <paramref name="offset"/>.
        /// </summary>
        /// <param name="stateRootHash">The state root hash of the <see cref="ITrie"/> to fetch
        /// the validator set from.</param>
        /// <returns>The validator set of type <see cref="ValidatorSet"/> at
        /// <paramref name="stateRootHash"/>.
        /// </returns>
        /// <exception cref="ArgumentException">Thrown when <see cref="IAccount"/> at
        /// <paramref name="stateRootHash"/> cannot be created.</exception>
        ValidatorSet GetValidatorSet(HashDigest<SHA256>? stateRootHash);
    }
}
