using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
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
        /// Encodes a raw state key string to internal bytes representation.
        /// </summary>
        /// <param name="key">The raw state key to encode.</param>
        /// <returns>An encoded key bytes.</returns>
        public static KeyBytes EncodeKey(string key) =>
            new KeyBytes(key, KeyEncoding);

        /// <summary>
        /// Decodes internal <paramref name="keyBytes"/> into a raw state key string.
        /// </summary>
        /// <param name="keyBytes">The key bytes to decode.</param>
        /// <returns>A decoded raw state key string.</returns>
        public static string DecodeKey(in KeyBytes keyBytes)
        {
            ImmutableArray<byte> immutableBytes = keyBytes.ByteArray;
#if NETSTANDARD2_0
            byte[] neverChangedBytes = System.Runtime.CompilerServices.Unsafe
                .As<ImmutableArray<byte>, byte[]>(ref immutableBytes);
            return KeyEncoding.GetString(neverChangedBytes);
#else
            return KeyEncoding.GetString(immutableBytes.AsSpan());
#endif
        }

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
            IImmutableDictionary<string, IValue> rawStatesDelta
        )
        {
            ITrie trie = stateStore.GetStateRoot(previousStateRootHash);
            foreach (KeyValuePair<string, IValue> pair in rawStatesDelta)
            {
                trie = trie.Set(EncodeKey(pair.Key), pair.Value);
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
            IReadOnlyList<string> rawStateKeys
        )
        {
            ITrie trie = stateStore.GetStateRoot(stateRootHash);
            KeyBytes[] keys = rawStateKeys.Select(EncodeKey).ToArray();
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
