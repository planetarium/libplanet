using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Security.Cryptography;
using Bencodex.Types;
using Libplanet.Common;
using Libplanet.Store.Trie;

namespace Libplanet.Store
{
    /// <summary>
    /// Convenient extension methods for <see cref="IStateStore"/>.
    /// </summary>
    public static class StateStoreExtensions
    {
        /// <summary>
        /// Records <paramref name="rawStatesDelta"/> which is based on the previous state
        /// root, and returns the new state root.
        /// </summary>
        /// <param name="stateStore">The <see cref="IStateStore"/> to records
        /// the <paramref name="rawStatesDelta"/>.</param>
        /// <param name="previousStateRootHash">The state root hash on which
        /// the <paramref name="rawStatesDelta"/> is based.</param>
        /// <param name="rawStatesDelta">The raw states delta to be recorded.</param>
        /// <returns>The new state root.</returns>
        public static ITrie Commit(
            this IStateStore stateStore,
            HashDigest<SHA256>? previousStateRootHash,
            IImmutableDictionary<KeyBytes, IValue> rawStatesDelta
        )
        {
            IRecordableTrie trie = stateStore.GetRecordableStateRoot(previousStateRootHash);
            foreach (KeyValuePair<KeyBytes, IValue> pair in rawStatesDelta)
            {
                trie = trie.Set(pair.Key, pair.Value);
            }

            ITrie stage = trie.Commit();
            return stateStore.GetStateRoot(stage.Hash);
        }

        /// <summary>
        /// Gets multiple states at once.
        /// </summary>
        /// <param name="stateStore">The <see cref="IStateStore"/> to get states.</param>
        /// <param name="stateRootHash">The root hash of the state trie to look up states from.
        /// </param>
        /// <param name="rawStateKeys">State keys to get.</param>
        /// <returns>The state values associated to the specified <paramref name="rawStateKeys"/>.
        /// The associated values are ordered in the same way to the corresponding
        /// <paramref name="rawStateKeys"/>.  Absent values are represented as
        /// <see langword="null"/>.</returns>
        public static IReadOnlyList<IValue?> GetStates(
            this IStateStore stateStore,
            HashDigest<SHA256>? stateRootHash,
            IReadOnlyList<KeyBytes> rawStateKeys
        )
        {
            ITrie trie = stateStore.GetStateRoot(stateRootHash);
            KeyBytes[] keys = rawStateKeys.ToArray();
            return trie.Get(keys);
        }

        /// <summary>
        /// Checks if the state root is recorded in the <paramref name="stateStore"/>.
        /// </summary>
        /// <param name="stateStore">The <see cref="IStateStore"/> to check if the state root is
        /// recorded in it.</param>
        /// <param name="stateRootHash">The hash of the state root to check if it is recorded.
        /// </param>
        /// <returns><see langword="true"/> if the state root exists in the
        /// <paramref name="stateStore"/>; otherwise, <see langword="false"/>.</returns>
        public static bool ContainsStateRoot(
            this IStateStore stateStore,
            HashDigest<SHA256> stateRootHash
        ) =>
            stateStore.GetStateRoot(stateRootHash).Recorded;
    }
}
