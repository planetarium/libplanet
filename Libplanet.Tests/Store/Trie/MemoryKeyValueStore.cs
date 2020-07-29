using System.Collections.Generic;
using System.Linq;
using Libplanet.Store.Trie;

namespace Libplanet.Tests.Store.Trie
{
    public class MemoryKeyValueStore : IKeyValueStore
    {
        public MemoryKeyValueStore()
            : this(new Dictionary<byte[], byte[]>())
        {
        }

        public MemoryKeyValueStore(Dictionary<byte[], byte[]> dictionary)
        {
            Dictionary = new Dictionary<byte[], byte[]>(dictionary, new EqualityComparer());
        }

        private Dictionary<byte[], byte[]> Dictionary { get; }

        public byte[] Get(byte[] key)
        {
            return Dictionary[key];
        }

        public void Set(byte[] key, byte[] value)
        {
            Dictionary[key] = value;
        }

        public void Delete(byte[] key)
        {
            Dictionary.Remove(key);
        }

        private class EqualityComparer : IEqualityComparer<byte[]>
        {
            public bool Equals(byte[] x, byte[] y)
            {
                return !(x is null)
                       && !(y is null)
                       && x.LongLength == y.LongLength
                       && x.SequenceEqual(y);
            }

            public int GetHashCode(byte[] obj)
            {
                int hash = 17;
                unchecked
                {
                    foreach (byte b in obj)
                    {
                        hash *= 31 + b;
                    }
                }

                return hash;
            }
        }
    }
}
