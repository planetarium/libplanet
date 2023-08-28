using System;
using System.Collections.Generic;
using System.Linq;
using Bencodex.Types;
using Libplanet.Store.Trie.Nodes;

namespace Libplanet.Store.Trie
{
    /// <summary>
    /// An extension class to provide some convenient methods to deal with <see cref="MerkleTrie"/>.
    /// </summary>
    public static class MerkleTrieExtensions
    {
        /// <summary>
        /// Compares two given tries and gets different value nodes (leaf node).
        /// </summary>
        /// <param name="origin">A trie to compare.</param>
        /// <param name="other">An other trie to compare.</param>
        /// <returns><see cref="Tuple{KeyBytes,IValue,IValue}"/>s consists of different nodes.
        /// The first element is different values' key.
        /// The second element is the value at the given <paramref name="origin"/> trie.
        /// And the third element is the value at the given <paramref name="other"/> trie but
        /// it is <see langword="null"/> if it doesn't exist in <paramref name="other"/> trie.
        /// </returns>
        public static IEnumerable<(KeyBytes Key, IValue OriginValue, IValue? OtherValue)>
            DifferentNodes(
            this MerkleTrie origin,
            MerkleTrie other)
        {
            foreach (var pair in origin.ListAllStates())
            {
                IValue? otherValue = other.Get(pair.Key);
                if (otherValue is null || !pair.Value.Equals(otherValue))
                {
                    yield return (pair.Key, pair.Value, otherValue);
                }
            }
        }

        /// <summary>
        /// Lists the all states key and the all states in the given <paramref name="merkleTrie"/>.
        /// </summary>
        /// <param name="merkleTrie">A trie to discover.</param>
        /// <returns>All state keys and the all states.</returns>
        public static IEnumerable<KeyValuePair<KeyBytes, IValue>> ListAllStates(
            this MerkleTrie merkleTrie)
        {
            return merkleTrie.IterateNodes()
                .Where(pair => pair.Node is ValueNode)
                .Select(pair =>
                    new KeyValuePair<KeyBytes, IValue>(
                        pair.Path.ToKeyBytes(),
                        ((ValueNode)pair.Node).Value));
        }
    }
}
