using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Security.Cryptography;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Blocks;

namespace Libplanet.Store
{
    public interface IBlockStatesStore : IStateStore
    {
        /// <summary>
        /// Lists all keys that have ever had states.
        /// </summary>
        /// <param name="chainId">The ID of the chain to list state keys.</param>
        /// <returns>All state keys in an arbitrary order.  The order might
        /// be vary for each call.</returns>
        IEnumerable<string> ListStateKeys(Guid chainId);

        /// <summary>
        /// Lists all accounts, that have any states, in the given <paramref name="chainId"/> and
        /// their state references.
        /// </summary>
        /// <param name="chainId">The chain ID to look up state references.</param>
        /// <param name="lowestIndex">Includes state references only made after the block
        /// this argument refers to.</param>
        /// <param name="highestIndex">Excludes state references made after the block
        /// this argument refers to.</param>
        /// <returns>A dictionary of account addresses to lists of their corresponding state
        /// references.  Each list of state references is in ascending order, i.e., the block
        /// closest to the genesis goes first and the block closest to the tip goes last.</returns>
        IImmutableDictionary<string, IImmutableList<HashDigest<SHA256>>> ListAllStateReferences(
            Guid chainId,
            long lowestIndex = 0,
            long highestIndex = long.MaxValue
        );

        /// <summary>
        /// Looks up a state reference, which is a block's <see cref="Block{T}.Hash"/> that contains
        /// an action mutating the <paramref name="key"/>'s tate.
        /// </summary>
        /// <param name="chainId">The chain ID to look up a state reference.</param>
        /// <param name="key">The state key to look up.</param>
        /// <param name="lookupUntilBlockIndex">The index of the block to stop looking up.</param>
        /// <returns>Returns a nullable tuple consisting of <see cref="Block{T}.Hash"/> and
        /// <see cref="Block{T}.Index"/> of the <see cref="Block{T}"/> with the state of the
        /// address.</returns>
        /// <seealso>
        /// <cref>
        /// IBlockStatesStore.StoreStateReference(Guid,
        /// IImmutableSet{string},Libplanet.HashDigest{System.Security.Cryptography.SHA256},long)
        /// </cref>
        /// </seealso>
        /// <seealso cref=
        /// "IBlockStatesStore.IterateStateReferences(Guid, string, long?, long?, int?)"/>
        Tuple<HashDigest<SHA256>, long> LookupStateReference(
            Guid chainId,
            string key,
            long lookupUntilBlockIndex);

        /// <summary>
        /// Gets pairs of a state reference and a corresponding <see cref="Block{T}.Index"/> of
        /// the requested <paramref name="key"/> in the specified <paramref name="chainId"/>.
        /// </summary>
        /// <param name="chainId">The chain ID.</param>
        /// <param name="key">The key to get state references.</param>
        /// <param name="highestIndex">The highest index of state references to get. If it is
        /// <c>null</c>, it will be the highest index possible.</param>
        /// <param name="lowestIndex">The lowest index of state references to get.  If it is
        /// <c>null</c>, it will be the lowest index possible.</param>
        /// <param name="limit">The maximum number of state references to get.  If it is
        /// <c>null</c>, it does not limit the number of state references.</param>
        /// <returns><em>Ordered</em> pairs of a state reference and a corresponding
        /// <see cref="Block{T}.Index"/>.  The highest index (i.e., the closest to the tip) goes
        /// first and the lowest index (i.e., the closest to the genesis) goes last.</returns>
        /// <exception cref="ArgumentException">Thrown when the given
        /// <paramref name="highestIndex"/> is less than <paramref name="lowestIndex"/>.</exception>
        /// <seealso
        /// cref="StoreStateReference(Guid , IImmutableSet{string}, HashDigest{SHA256}, long)"/>
        IEnumerable<Tuple<HashDigest<SHA256>, long>> IterateStateReferences(
            Guid chainId,
            string key,
            long? highestIndex = null,
            long? lowestIndex = null,
            int? limit = null);

        /// <summary>
        /// Marks the specified <paramref name="keys"/> updated by any action in the specified block
        /// (i.e., <paramref name="blockHash"/>).
        /// </summary>
        /// <param name="chainId">The ID of the chain to store a state reference.</param>
        /// <param name="keys">The keys updated by the block.</param>
        /// <param name="blockHash">The <see cref="Block{T}.Hash"/> of the block which changes
        /// the <paramref name="keys"/>' states.</param>
        /// <param name="blockIndex">The block index.</param>
        /// <seealso cref="IterateStateReferences(Guid, string, long?, long?, int?)"/>
        void StoreStateReference(
            Guid chainId,
            IImmutableSet<string> keys,
            HashDigest<SHA256> blockHash,
            long blockIndex);

        /// <summary>
        /// Forks state references, which are <see cref="Block{T}.Hash"/>es that
        /// have the state of the <see cref="Address"/>es, from
        /// <paramref name="sourceChainId"/> to <paramref name="destinationChainId"/>.
        /// <para>This method copies state references from
        /// <paramref name="sourceChainId"/> to <paramref name="destinationChainId"/> and strips
        /// state references after <paramref name="branchPoint"/>.</para>
        /// </summary>
        /// <param name="sourceChainId">The chain ID of state references to fork.</param>
        /// <param name="destinationChainId">The new chain ID to have state references.</param>
        /// <param name="branchPoint">The branch point <see cref="Block{T}"/>
        /// to fork.</param>
        /// <typeparam name="T">An <see cref="IAction"/> class used with
        /// <paramref name="branchPoint"/>.</typeparam>
        /// <exception cref="ChainIdNotFoundException">Thrown when the given
        /// <paramref name="sourceChainId"/> does not exist.</exception>
        /// <seealso cref="IterateStateReferences(Guid, string, long?, long?, int?)"/>
        /// <seealso
        /// cref="StoreStateReference(Guid, IImmutableSet{string}, HashDigest{SHA256}, long)"/>
        void ForkStateReferences<T>(
            Guid sourceChainId,
            Guid destinationChainId,
            Block<T> branchPoint)
            where T : IAction, new();

        /// <summary>
        /// Gets the states updated by actions in the inquired block.
        /// </summary>
        /// <param name="blockHash"><see cref="Block{T}.Hash"/> to query.
        /// </param>
        /// <returns>The states updated by actions in the inquired block.
        /// If actions definitely do not update any addresses it returns
        /// an empty map.  If there is no record for the inquired block
        /// (because actions in it have never been evaluated yet) it returns
        /// <c>null</c> instead.
        /// </returns>
        /// <remarks>It does not return all states built up from the genesis
        /// block nor delta, but only dirty states by actions the inquired
        /// block.
        /// <para>For example, if actions in the genesis block do
        /// <c>a++; b++</c>, /// and actions in the second block do
        /// <c>b++; c++</c>, this method /// for the second block returns
        /// <c>b = 2; c = 1</c> (dirty), not
        /// <c>a = 1; b = 2; c = 1</c> (all states) nor
        /// <c>b = 1; c = 1</c> (delta).</para>
        /// </remarks>
        /// <seealso cref="SetBlockStates"/>
        IImmutableDictionary<string, IValue> GetBlockStates(HashDigest<SHA256> blockHash);

        /// <summary>
        /// Sets the states updated by actions in the specified block
        /// (i.e., <paramref name="blockHash"/>).
        /// </summary>
        /// <param name="blockHash"><see cref="Block{T}.Hash"/> to update states.
        /// </param>
        /// <param name="states">The states updated by actions in the specified block
        /// (i.e., <paramref name="blockHash"/>).
        /// </param>
        /// <seealso cref="GetBlockStates"/>
        void SetBlockStates(
            HashDigest<SHA256> blockHash,
            IImmutableDictionary<string, IValue> states
        );

        /// <summary>
        /// Prunes states in blockchain <paramref name="chainId"/> with until specified block
        /// <paramref name="until"/>.
        /// </summary>
        /// <param name="chainId">The chain ID to prune block states.</param>
        /// <param name="until">The upper bound block to prune states.</param>
        /// <typeparam name="T">An <see cref="IAction"/> class used with
        /// <paramref name="until"/>.</typeparam>
        void PruneBlockStates<T>(
            Guid chainId,
            Block<T> until)
            where T : IAction, new();
    }
}
