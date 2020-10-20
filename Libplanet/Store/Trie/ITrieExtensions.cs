using System.Collections.Immutable;
using System.Text;
using Bencodex.Types;

namespace Libplanet.Store.Trie
{
    internal static class ITrieExtensions
    {
        public static ITrie Set(this ITrie trie, IImmutableDictionary<byte[], IValue> values)
        {
            foreach (var pair in values)
            {
                trie = trie.Set(pair.Key, pair.Value);
            }

            return trie;
        }

        public static ITrie Set(this ITrie trie, IImmutableDictionary<string, IValue> values)
        {
            return trie.Set(values.ToImmutableDictionary(
                pair => Encoding.UTF8.GetBytes(pair.Key),
                pair => pair.Value));
        }
    }
}
