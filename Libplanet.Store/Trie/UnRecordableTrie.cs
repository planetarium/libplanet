using System.Collections.Generic;
using System.Security.Cryptography;
using Bencodex.Types;
using Libplanet.Common;
using Libplanet.Store.Trie.Nodes;

namespace Libplanet.Store.Trie
{
    public class UnRecordableTrie : IUnRecordableTrie
    {
        private readonly ITrie _trie;

        public UnRecordableTrie(ITrie trie)
        {
            _trie = trie;
        }

        public INode? Root => _trie.Root;

        public HashDigest<SHA256> Hash => _trie.Hash;

        public IUnRecordableTrie Set(in KeyBytes key, IValue value)
            => new UnRecordableTrie(_trie.Set(key, value));

        public IValue? Get(KeyBytes key)
            => _trie.Get(key);

        public IReadOnlyList<IValue?> Get(IReadOnlyList<KeyBytes> keys)
            => _trie.Get(keys);
    }
}
