using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Security.Cryptography;
using Libplanet.Action;
using Libplanet.Blocks;
using Libplanet.Tx;

namespace Libplanet.Store
{
    /// <summary>
    /// Convenient extension methods for <see cref="IStore"/>.
    /// </summary>
    public static class StoreExtensions
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
                foreach (BlockHash blockHash in from.IterateIndexes(chainId))
                {
                    Block<NullAction> block = from.GetBlock<NullAction>(
                        _ => HashAlgorithmType.Of<SHA256>(),  // thunk getter; doesn't matter here
                        blockHash
                    );
                    to.PutBlock(block);
                    to.AppendIndex(chainId, blockHash);
                }

                foreach (KeyValuePair<Address, long> kv in from.ListTxNonces(chainId))
                {
                    to.IncreaseTxNonce(chainId, kv.Key, kv.Value);
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
        /// Gets the <see cref="Block{T}.StateRootHash"/> of the given <paramref name="blockHash"/>.
        /// </summary>
        /// <param name="store">The store that blocks are stored.</param>
        /// <param name="blockHash">The hash of the block to get the state root hash of.
        /// If <c>null</c> is present, <c>null</c> is returned.</param>
        /// <returns>The state root hash of the block, or <c>null</c> if the block is not found or
        /// <paramref name="blockHash"/> is <c>null</c>.</returns>
        public static HashDigest<SHA256>? GetStateRootHash(
            this IStore store,
            BlockHash? blockHash
        ) =>
            blockHash is { } hash && store.GetBlockDigest(hash) is BlockDigest digest
                ? digest.StateRootHash
                : (HashDigest<SHA256>?)null;
    }
}
