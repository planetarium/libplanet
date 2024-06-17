using System;
using Bencodex.Types;

namespace Libplanet.Store.Trie
{
    public static class TrieExtensions
    {
        public static readonly KeyBytes MetadataKey = new KeyBytes(Array.Empty<byte>());

        public static TrieMetadata? GetMetadata(this ITrie trie)
        {
            if (trie.Get(MetadataKey) is { } value)
            {
                return new TrieMetadata(value);
            }

            return null;
        }

        public static ITrie SetMetadata(this ITrie trie, TrieMetadata metadata)
        {
            return trie.Set(MetadataKey, metadata.Bencoded);
        }

        public static ITrie SetMetadata(this ITrie trie, IValue encoded)
        {
            return trie.Set(MetadataKey, encoded);
        }
    }
}
