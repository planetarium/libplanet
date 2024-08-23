using System.Security.Cryptography;
using Bencodex.Types;
using BitFaster.Caching;
using BitFaster.Caching.Lru;
using Libplanet.Common;
using Libplanet.Store.Trie;

namespace Libplanet.Store
{
    /// <summary>
    /// A class used for internally caching hashed nodes of <see cref="MerkleTrie"/>s.
    /// </summary>
    public class HashNodeCache
    {
        // FIXME: Tuned to 9c mainnet.  Should be refactored to accept cache size as an argument.
        private const int _cacheSize = 524_288;

        private readonly ICache<HashDigest<SHA256>, IValue> _cache;

        internal HashNodeCache()
        {
            _cache = new FastConcurrentLru<HashDigest<SHA256>, IValue>(_cacheSize);
        }

        public bool TryGetValue(HashDigest<SHA256> hash, out IValue? value)
        {
            if (_cache.TryGet(hash, out value))
            {
                return true;
            }
            else
            {
                value = null;
                return false;
            }
        }

        public void AddOrUpdate(HashDigest<SHA256> hash, IValue value)
        {
            _cache.AddOrUpdate(hash, value);
        }
    }
}
