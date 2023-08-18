using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using Bencodex.Types;

namespace Libplanet.Store.Trie
{
    public static class TrieExtensions
    {
        public static ITrie Set(this ITrie trie, IImmutableDictionary<KeyBytes, IValue> pairs)
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
    }
}
