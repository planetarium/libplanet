using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Security.Cryptography;
using Libplanet.Action;
using Libplanet.Blocks;

namespace Libplanet.Store
{
    public static class StoreExtension
    {
        #pragma warning disable MEN002
        /// <summary>
        /// Looks up a state reference, which is a block's <see cref="Block{T}.Hash"/> that contains
        /// an action mutating the <paramref name="address"/>' state.
        /// </summary>
        /// <param name="store">The store object expected to contain the state reference.</param>
        /// <param name="chainId">The chain ID to look up a state reference.</param>
        /// <param name="address">The <see cref="Address"/> to look up.</param>
        /// <param name="lookupUntil">The upper bound (i.e., the latest block) of the search range.
        /// <see cref="Block{T}"/>s after <paramref name="lookupUntil"/> are ignored.</param>
        /// <returns>Returns a nullable tuple consisting of <see cref="Block{T}.Hash"/> and
        /// <see cref="Block{T}.Index"/> of the <see cref="Block{T}"/> with the state of the
        /// address.</returns>
        /// <typeparam name="T">An <see cref="IAction"/> class used with
        /// <paramref name="lookupUntil"/>.</typeparam>
        /// <seealso cref="IStore.StoreStateReference(Guid, IImmutableSet{Address}, HashDigest{SHA256}, long)"/>
        /// <seealso cref="IStore.IterateStateReferences(Guid, Address)"/>
        #pragma warning restore MEN002
        public static Tuple<HashDigest<SHA256>, long> LookupStateReference<T>(
            this IStore store,
            Guid chainId,
            Address address,
            Block<T> lookupUntil)
            where T : IAction, new()
        {
            if (lookupUntil is null)
            {
                throw new ArgumentNullException(nameof(lookupUntil));
            }

            IEnumerable<Tuple<HashDigest<SHA256>, long>> stateRefs =
                store.IterateStateReferences(chainId, address);
            foreach (Tuple<HashDigest<SHA256>, long> pair in stateRefs)
            {
                if (pair.Item2 <= lookupUntil.Index)
                {
                    return Tuple.Create(pair.Item1, pair.Item2);
                }
            }

            return null;
        }

        /// <summary>
        /// Lists all accounts, that have any states, in the given <paramref name="chainId"/> and
        /// their state references.
        /// </summary>
        /// <param name="store">A store object.</param>
        /// <param name="chainId">The chain ID to look up state references.</param>
        /// <param name="onlyAfter">Includes state references only made after the block
        /// this argument refers to, if present.</param>
        /// <param name="ignoreAfter">Excludes state references made after the block
        /// this argument refers to, if present.</param>
        /// <returns>A dictionary of account addresses to lists of their corresponding state
        /// references.  Each list of state references is in ascending order, i.e., the block
        /// closest to the genesis goes first and the block closest to the tip goes last.</returns>
        public static IImmutableDictionary<Address, IImmutableList<HashDigest<SHA256>>>
        ListAllStateReferences(
            this IStore store,
            Guid chainId,
            HashDigest<SHA256>? onlyAfter = null,
            HashDigest<SHA256>? ignoreAfter = null
        )
        {
            (HashDigest<SHA256>, long)? baseBlock =
                onlyAfter is HashDigest<SHA256> @base && store.GetBlockIndex(@base) is long baseIdx
                    ? (@base, baseIdx)
                    : null as (HashDigest<SHA256>, long)?;
            (HashDigest<SHA256>, long)? targetBlock =
                ignoreAfter is HashDigest<SHA256> tgt && store.GetBlockIndex(tgt) is long tgtIdx
                    ? (tgt, tgtIdx)
                    : null as (HashDigest<SHA256>, long)?;
            return store.ListAddresses(chainId).Select(address =>
            {
                IEnumerable<Tuple<HashDigest<SHA256>, long>> refIndices =
                    store.IterateStateReferences(chainId, address);

                if (targetBlock is ValueTuple<HashDigest<SHA256>, long> targetIndex)
                {
                    refIndices = refIndices.SkipWhile(p => p.Item2 > targetIndex.Item2);
                }

                if (baseBlock is ValueTuple<HashDigest<SHA256>, long> baseIndex)
                {
                    refIndices = refIndices.TakeWhile(p => p.Item2 > baseIndex.Item2);
                }

                ImmutableList<HashDigest<SHA256>> refs = refIndices
                    .Select(p => p.Item1)
                    .Reverse()
                    .ToImmutableList();
                return new KeyValuePair<Address, IImmutableList<HashDigest<SHA256>>>(address, refs);
            }).Where(pair => pair.Value.Any()).ToImmutableDictionary();
        }
    }
}
