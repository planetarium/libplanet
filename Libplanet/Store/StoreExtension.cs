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
        /// <summary>
        /// Looks up a state reference, which is a block's <see cref="Block{T}.Hash"/> that contains
        /// an action mutating the <paramref name="address"/>' state.
        /// </summary>
        /// <param name="store">The store object expected to contain the state reference.</param>
        /// <param name="namespace">The namespace to look up a state reference.</param>
        /// <param name="address">The <see cref="Address"/> to look up.</param>
        /// <param name="lookupUntil">The upper bound (i.e., the latest block) of the search range.
        /// <see cref="Block{T}"/>s after <paramref name="lookupUntil"/> are ignored.</param>
        /// <returns>Returns a nullable tuple consisting of <see cref="Block{T}.Hash"/> and
        /// <see cref="Block{T}.Index"/> of the <see cref="Block{T}"/> with the state of the
        /// address.</returns>
        /// <typeparam name="T">An <see cref="IAction"/> class used with
        /// <paramref name="lookupUntil"/>.</typeparam>
        /// <seealso
        /// cref="IStore.StoreStateReference{T}(string, IImmutableSet{Address}, Block{T})"/>
        /// <seealso cref="IStore.IterateStateReferences(string, Address)"/>
        public static Tuple<HashDigest<SHA256>, long> LookupStateReference<T>(
            this IStore store,
            string @namespace,
            Address address,
            Block<T> lookupUntil)
            where T : IAction, new()
        {
            if (lookupUntil is null)
            {
                throw new ArgumentNullException(nameof(lookupUntil));
            }

            IEnumerable<Tuple<HashDigest<SHA256>, long>> stateRefs =
                store.IterateStateReferences(@namespace, address);
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
        /// Lists all accounts, that have any states, in the given <paramref name="namespace"/> and
        /// their state references.
        /// </summary>
        /// <param name="store">A store object.</param>
        /// <param name="namespace">The namespace to look up state references.</param>
        /// <returns>A dictionary of account addresses to lists of their corresponding state
        /// references.  Each list of state references is in ascending order, i.e., the block
        /// closest to the genesis goes first and the block closest to the tip goes last.</returns>
        public static IImmutableDictionary<Address, IImmutableList<HashDigest<SHA256>>>
        ListAllStateReferences(this IStore store, string @namespace)
        {
            return store.ListAddresses(@namespace).Select(address =>
            {
                ImmutableList<HashDigest<SHA256>> refs = store
                    .IterateStateReferences(@namespace, address)
                    .Select(p => p.Item1)
                    .Reverse()
                    .ToImmutableList();
                return new KeyValuePair<Address, IImmutableList<HashDigest<SHA256>>>(address, refs);
            }).ToImmutableDictionary();
        }
    }
}
