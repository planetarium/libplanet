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
                    IImmutableDictionary<string, IValue> states = from.GetBlockStates(blockHash);
                    to.SetBlockStates(blockHash, states);
                    to.AppendIndex(chainId, blockHash);
                }

                foreach (KeyValuePair<Address, long> kv in from.ListTxNonces(chainId))
                {
                    to.IncreaseTxNonce(chainId, kv.Key, kv.Value);
                }

                foreach (string key in from.ListStateKeys(chainId))
                {
                    foreach (var pair in from.IterateStateReferences(chainId, key).Reverse())
                    {
                        pair.Deconstruct(out HashDigest<SHA256> refHash, out long refIndex);
                        to.StoreStateReference(
                            chainId,
                            ImmutableHashSet.Create(key),
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
