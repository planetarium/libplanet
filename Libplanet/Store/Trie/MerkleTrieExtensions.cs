using System;
using System.Collections.Generic;
using System.Collections.Immutable;
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
                IValue? otherValue = other.Get(new[] { pair.Key })[0];
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
            return merkleTrie.IterateNodes().Where(pair => pair.Node is ValueNode).Select(pair =>
                new KeyValuePair<KeyBytes, IValue>(
                    FromKey(pair.Path),
                    ((ValueNode)pair.Node).Value));
        }

        private static KeyBytes FromKey(KeyBytes keyBytes)
        {
            if (keyBytes.Length % 2 == 1)
            {
                throw new ArgumentException(nameof(keyBytes));
            }

            ImmutableArray<byte> bytes = keyBytes.ByteArray;
            var builder = ImmutableArray.CreateBuilder<byte>(bytes.Length / 2);
            builder.Count = bytes.Length / 2;
            for (int i = 0; i < bytes.Length / 2; ++i)
            {
                byte high = bytes[i * 2], low = bytes[i * 2 + 1];
                if (high >= 16)
                {
                    throw new ArgumentOutOfRangeException(nameof(bytes));
                }

                if (low >= 16)
                {
                    throw new ArgumentOutOfRangeException(nameof(bytes));
                }

                builder[i] = (byte)((high << 4) | low);
            }

            return new KeyBytes(builder.MoveToImmutable());
        }
    }
}
