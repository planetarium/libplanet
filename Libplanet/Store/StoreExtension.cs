using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Security.Cryptography;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Blocks;
using Libplanet.Tx;

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

        /// <summary>
        /// Makes a store, <paramref name="to"/>, logically (but not necessarily physically)
        /// identical to another store, <paramref name="from"/>.  As this copies the contents
        /// of the store, instead of its physicall data, this can be used for migrating
        /// between two different types of <see cref="IStore"/> implementations.
        /// </summary>
        /// <param name="from">The store containing the source contents.</param>
        /// <param name="to">The store to contain the copied contents. Expected to be empty.</param>
        /// <exception cref="ArgumentException">Thrown when the store passed through
        /// <paramref name="to"/> is not empty.</exception>
        public static void Copy(this IStore from, IStore to)
        {
            // TODO: take a IProgress<> so that a caller can be aware the progress of cloning.
            if (to.ListChainIds().Any())
            {
                throw new ArgumentException("The destination store has to be empty.", nameof(to));
            }

            foreach (Guid chainId in from.ListChainIds().ToArray())
            {
                foreach (HashDigest<SHA256> blockHash in from.IterateIndexes(chainId))
                {
                    Block<NullAction> block = from.GetBlock<NullAction>(blockHash);
                    to.PutBlock(block);
                    IImmutableDictionary<Address, IValue> states = from.GetBlockStates(blockHash);
                    to.SetBlockStates(blockHash, states);
                    to.AppendIndex(chainId, blockHash);
                }

                foreach (KeyValuePair<Address, long> kv in from.ListTxNonces(chainId))
                {
                    to.IncreaseTxNonce(chainId, kv.Key, kv.Value);
                }

                foreach (Address address in from.ListAddresses(chainId))
                {
                    foreach (var pair in from.IterateStateReferences(chainId, address).Reverse())
                    {
                        pair.Deconstruct(out HashDigest<SHA256> refHash, out long refIndex);
                        to.StoreStateReference(
                            chainId,
                            ImmutableHashSet.Create(address),
                            refHash,
                            refIndex
                        );
                    }
                }
            }

            ImmutableHashSet<TxId> stagedTxIds =
                from.IterateStagedTransactionIds().ToImmutableHashSet();
            foreach (TxId txid in stagedTxIds)
            {
                to.PutTransaction(from.GetTransaction<NullAction>(txid));
            }

            to.StageTransactionIds(stagedTxIds);

            if (from.GetCanonicalChainId() is Guid canonId)
            {
                to.SetCanonicalChainId(canonId);
            }
        }

        /// <summary>
        /// An action implementation which does nothing for filling type parameter taking of
        /// <see cref="IAction"/>.
        /// </summary>
        private class NullAction : IAction
        {
            private IValue _value;

            /// <inheritdoc/>
            public IValue PlainValue => _value;

            /// <inheritdoc/>
            public IAccountStateDelta Execute(IActionContext context) =>
                context.PreviousStates;

            /// <inheritdoc/>
            public void LoadPlainValue(IValue plainValue)
            {
                _value = plainValue;
            }

            /// <inheritdoc/>
            public void Render(IActionContext context, IAccountStateDelta nextStates)
            {
                // Does nothing.
            }

            /// <inheritdoc/>
            public void Unrender(IActionContext context, IAccountStateDelta nextStates)
            {
                // Does nothing.
            }
        }
    }
}
