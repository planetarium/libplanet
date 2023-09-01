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
            foreach (var pair in origin.IterateValues())
            {
                IValue? otherValue = other.Get(pair.Path);
                if (otherValue is null || !pair.Value.Equals(otherValue))
                {
                    yield return (pair.Path, pair.Value, otherValue);
                }
            }
        }
    }
}
