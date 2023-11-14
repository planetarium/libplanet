using System.Security.Cryptography;
using Bencodex.Types;
using Libplanet.Common;
using LruCacheNet;

namespace Libplanet.Store
{
    public class HashNodeCache
    {
        private const int _cahceSize = 10_000;
        private LruCache<HashDigest<SHA256>, IValue> _cache;

        public HashNodeCache()
        {
            _cache = new LruCache<HashDigest<SHA256>, IValue>(_cahceSize);
        }

        public bool TryGetValue(HashDigest<SHA256> hash, out IValue? value)
        {
            if (_cache.TryGetValue(hash, out value))
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
