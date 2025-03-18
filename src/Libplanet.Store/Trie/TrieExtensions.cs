using System.Collections.Generic;
using System.Linq;
using Bencodex.Types;

namespace Libplanet.Store.Trie;

public static class TrieExtensions
{
    public static TrieMetadata? GetMetadata(this ITrie @this)
    {
        if (@this[KeyBytes.Empty] is { } value)
        {
            return new TrieMetadata(value);
        }

        return null;
    }

    public static ITrie SetMetadata(this ITrie @this, TrieMetadata metadata)
        => @this.Set(KeyBytes.Empty, metadata.Bencoded);

    public static ITrie SetMetadata(this ITrie @this, IValue encoded)
        => @this.Set(KeyBytes.Empty, encoded);

    public static IReadOnlyList<IValue?> GetMany(this ITrie @this, IReadOnlyList<KeyBytes> keys)
    {
        const int parallelThreshold = 4;
        return keys.Count <= parallelThreshold
            ? keys.Select(key => @this[key]).ToArray()
            : keys.AsParallel().Select(key => @this[key]).ToArray();
    }
}
