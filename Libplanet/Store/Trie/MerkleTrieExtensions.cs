#nullable enable
using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Security.Cryptography;
using Bencodex.Types;
using Libplanet.Store.Trie.Nodes;

namespace Libplanet.Store.Trie
{
    public static class MerkleTrieExtensions
    {
        /// <summary>
        /// Compare two given tries and get different value nodes (leaf node).
        /// </summary>
        /// <param name="origin">A trie to compare.</param>
        /// <param name="other">An other trie to compare.</param>
        /// <returns>A <see cref="IGrouping{TKey,TElement}"/>s,
        /// mapping path to tuple having the hash of the value is contained and the value.</returns>
        public static IEnumerable<IGrouping<string, (HashDigest<SHA256> Root, IValue Value)>>
            DifferentNodes(
            this MerkleTrie origin,
            MerkleTrie other)
        {
            var originValueNodes = origin.IterateNodes()
                .Where(pair => pair.Node is ValueNode)
                .Select(pair => (origin.Hash, ((ValueNode)pair.Node).Value, pair.Path));
            var otherValueNodes = other.IterateNodes()
                .Where(pair => pair.Node is ValueNode)
                .Select(pair => (other.Hash, ((ValueNode)pair.Node).Value, pair.Path));
            return originValueNodes.Concat(otherValueNodes)
                .GroupBy(
                    pair => ByteUtil.Hex(FromKey(pair.Path)),
                    pair => (pair.Hash, pair.Value))
                .Where(group =>
                    group.Count() == 1 || !group.All(v => v.Value.Equals(group.First().Value)));
        }

        private static ImmutableArray<byte> FromKey(ImmutableArray<byte> bytes)
        {
            if (bytes.Length % 2 == 1)
            {
                throw new ArgumentException(nameof(bytes));
            }

            var arr = new byte[bytes.Length / 2];
            for (int i = 0; i < bytes.Length / 2; ++i)
            {
                byte high = bytes[i * 2], low = bytes[i * 2 + 1];
                if (high < 0 || high >= 16)
                {
                    throw new ArgumentOutOfRangeException(nameof(bytes));
                }

                if (low < 0 || low >= 16)
                {
                    throw new ArgumentOutOfRangeException(nameof(bytes));
                }

                arr[i] = (byte)((high << 4) | low);
            }

            return arr.ToImmutableArray();
        }
    }
}
