using Bencodex.Types;
using Libplanet.Store.Trie;

namespace Libplanet.Action.State
{
    internal static class TrieExtensions
    {
        public static readonly KeyBytes Key = new KeyBytes(new byte[] { });

        public static TrieMetadata? GetMetadata(this ITrie trie)
        {
            if (trie.Get(Key) is { } value)
            {
                return new TrieMetadata(value);
            }

            return null;
        }

        public static ITrie SetMetadata(this ITrie trie, TrieMetadata metadata)
        {
            return trie.Set(Key, metadata.Bencoded);
        }

        public static ITrie SetMetadata(this ITrie trie, IValue encoded)
        {
            return trie.Set(Key, encoded);
        }
    }
}
