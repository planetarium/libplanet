using System;
using System.Collections.Generic;
using System.Linq;
using Bencodex.Types;

namespace Libplanet.Store.Trie
{
    // FIXME: As it's not an interface, it should be renamed to TrieExtensions.
    internal static class ITrieExtensions
    {
        public static ITrie Set(this ITrie trie, IEnumerable<KeyValuePair<KeyBytes, IValue?>> pairs)
        {
            foreach (var pair in pairs)
            {
                if (pair.Value is { } v)
                {
                    trie = trie.Set(pair.Key, v);
                }
                else
                {
                    throw new NotSupportedException(
                        "Unsetting states is not supported yet.  " +
                        "See also: https://github.com/planetarium/libplanet/issues/1383"
                    );
                }
            }

            return trie;
        }

        public static ITrie Set(this ITrie trie, IEnumerable<KeyValuePair<string, IValue?>> pairs)
            => trie.Set(
                pairs.Select(pair =>
                    new KeyValuePair<KeyBytes, IValue?>(
                        StateStoreExtensions.EncodeKey(pair.Key),
                        pair.Value
                    )
                )
            );
    }
}
