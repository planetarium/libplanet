using Bencodex.Types;

namespace Libplanet.Store.Trie;

public static class TrieExtensions
{
    public static TrieMetadata? GetMetadata(this ITrie @this)
    {
        if (@this.Get(KeyBytes.Empty) is { } value)
        {
            return new TrieMetadata(value);
        }

        return null;
    }

    public static ITrie SetMetadata(this ITrie @this, TrieMetadata metadata)
        => @this.Set(KeyBytes.Empty, metadata.Bencoded);

    public static ITrie SetMetadata(this ITrie @this, IValue encoded)
        => @this.Set(KeyBytes.Empty, encoded);
}
