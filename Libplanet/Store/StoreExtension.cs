using System;
#pragma warning disable S1128 // Remove this unnecessary 'using'
using System.Collections.Immutable;
#pragma warning restore S1128 // Remove this unnecessary 'using'
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
        /// <seealso cref="IStore.IterateStateReferences(Guid, Address, long?, long?, int?)"/>
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

            return store.IterateStateReferences(chainId, address, lookupUntil.Index, limit: 1)
                    .FirstOrDefault();
        }
    }
}
