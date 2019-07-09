using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Security.Cryptography;
using Libplanet.Action;
using Libplanet.Blocks;
using Libplanet.Tx;

namespace Libplanet.Store
{
    public static class StoreExtension
    {
        /// <summary>
        /// Looks up a state reference, which is a block's
        /// <see cref="Block{TTxAction, TBlockAction}.Hash"/> that contains
        /// an action mutating the <paramref name="address"/>' state.
        /// </summary>
        /// <param name="store">The store object expected to contain the state reference.</param>
        /// <param name="namespace">The namespace to look up a state reference.</param>
        /// <param name="address">The <see cref="Address"/> to look up.</param>
        /// <param name="lookupUntil">The upper bound (i.e., the latest block) of the search range.
        /// <see cref="Block{TTxAction, TBlockAction}"/>s after <paramref name="lookupUntil"/> are
        /// ignored.</param>
        /// <returns>A <see cref="Block{TTxAction, TBlockAction}.Hash"/> which has the state of
        /// the <paramref name="address"/>.</returns>
        /// <typeparam name="TTxAction">An <see cref="IAction"/> class for
        /// <see cref="Transaction{T}"/> used with <paramref name="lookupUntil"/>.</typeparam>
        /// <typeparam name="TBlockAction">An <see cref="IAction"/> class for
        /// <see cref="Block{TTxAction,TBlockAction}"/> used with <paramref name="lookupUntil"/>.
        /// </typeparam>
        /// <seealso
        /// cref="IStore.StoreStateReference{TTxAction, TBlockAction}(string,
        /// IImmutableSet{Address}, Block{TTxAction, TBlockAction})"/>
        /// <seealso cref="IStore.IterateStateReferences(string, Address)"/>
        public static HashDigest<SHA256>? LookupStateReference<TTxAction, TBlockAction>(
            this IStore store,
            string @namespace,
            Address address,
            Block<TTxAction, TBlockAction> lookupUntil)
            where TTxAction : IAction, new()
            where TBlockAction : IAction, new()
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
                    return pair.Item1;
                }
            }

            return null;
        }
    }
}
