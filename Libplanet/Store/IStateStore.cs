#nullable enable
using System;
using System.Collections.Immutable;
using System.Security.Cryptography;
using Libplanet.Store.Trie;

namespace Libplanet.Store
{
    /// <summary>
    /// An interface to store states.
    /// </summary>
    public interface IStateStore : IDisposable
    {
        /// <summary>
        /// Gets the state root trie of the <paramref name="stateRootHash"/> from the state store.
        /// </summary>
        /// <param name="stateRootHash">The state root hash of the state root trie to get.
        /// If <c>null</c> is passed the empty state root trie is returned.</param>
        /// <returns>The state root trie of the <paramref name="stateRootHash"/>.
        /// If <c>null</c> is passed the empty state root trie is returned.</returns>
        ITrie GetStateRoot(HashDigest<SHA256>? stateRootHash);

        /// <summary>
        /// Prunes the states no more used from the state store.
        /// </summary>
        /// <param name="stateRootHashes">The state root hashes to prune.</param>
        void PruneStates(IImmutableSet<HashDigest<SHA256>> stateRootHashes);
    }
}
