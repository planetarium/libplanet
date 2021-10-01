#nullable enable
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Security.Cryptography;
using System.Text;
using Bencodex.Types;
using Libplanet.Store.Trie;

namespace Libplanet.Store
{
    /// <summary>
    /// Convenient extension methods for <see cref="IStateStore"/>.
    /// </summary>
    public static class StateStoreExtensions
    {
        /// <summary>
        /// The internal bytes encoding of raw state keys.
        /// </summary>
        internal static readonly Encoding KeyEncoding = Encoding.UTF8;

        /// <summary>
        /// Records <paramref name="rawStatesDelta"/> which is based on the previous state
        /// root, and returns the new state root.
        /// </summary>
        /// <param name="stateStore">The <see cref="IStateStore"/> to records
        /// the <paramref name="rawStatesDelta"/>.</param>
        /// <param name="previousStateRootHash">The state root hash on which
        /// the <paramref name="rawStatesDelta"/> is based.</param>
        /// <param name="rawStatesDelta">The raw states delta to be recorded.</param>
        /// <param name="rehearsal">If turned on, the <paramref name="rawStatesDelta"/> is not
        /// recorded to the <paramref name="stateStore"/>, but only shadow trie root is returned.
        /// Turned off by default.</param>
        /// <returns>The new state root.</returns>
        public static ITrie Commit(
            this IStateStore stateStore,
            HashDigest<SHA256>? previousStateRootHash,
            IImmutableDictionary<string, IValue> rawStatesDelta,
            bool rehearsal = false
        )
        {
            ITrie trie = stateStore.GetStateRoot(previousStateRootHash);
            foreach (KeyValuePair<string, IValue> pair in rawStatesDelta)
            {
                byte[] keyBytes = KeyEncoding.GetBytes(pair.Key);
                trie = trie.Set(keyBytes, pair.Value);
            }

            ITrie stage = trie.Commit(rehearsal);
            return rehearsal ? stage : stateStore.GetStateRoot(stage.Hash);
        }

        /// <summary>
        /// Gets the state of the <paramref name="rawStateKey"/> from
        /// the <paramref name="stateRootHash"/>.
        /// </summary>
        /// <param name="stateStore">The <see cref="IStateStore"/> to get the state.</param>
        /// <param name="rawStateKey">The key of the state to get.</param>
        /// <param name="stateRootHash">The state root hash to get the state.</param>
        /// <returns>The state of the <paramref name="rawStateKey"/> if any.  If there is no such
        /// key, returns <c>null</c>.</returns>
        public static IValue? GetState(
            this IStateStore stateStore,
            string rawStateKey,
            HashDigest<SHA256>? stateRootHash
        )
        {
            byte[] keyBytes = KeyEncoding.GetBytes(rawStateKey);
            ITrie trie = stateStore.GetStateRoot(stateRootHash);
            return trie.TryGet(keyBytes, out IValue? value) ? value : null;
        }

        /// <summary>
        /// Checks if the state root is recorded in the <paramref name="stateStore"/>.
        /// </summary>
        /// <param name="stateStore">The <see cref="IStateStore"/> to check if the state root is
        /// recorded in it.</param>
        /// <param name="stateRootHash">The hash of the state root to check if it is recorded.
        /// </param>
        /// <returns><c>true</c> if the state root exists in the <paramref name="stateStore"/>;
        /// otherwise, <c>false</c>.</returns>
        public static bool ContainsStateRoot(
            this IStateStore stateStore,
            HashDigest<SHA256> stateRootHash
        ) =>
            stateStore.GetStateRoot(stateRootHash).Recorded;
    }
}
