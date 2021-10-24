using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;

namespace Libplanet.Store.Trie
{
    public class MemoryKeyValueStore : IKeyValueStore
    {
        public MemoryKeyValueStore()
            : this(new Dictionary<byte[], byte[]>())
        {
        }

        public MemoryKeyValueStore(Dictionary<byte[], byte[]> dictionary)
        {
            Dictionary = new ConcurrentDictionary<byte[], byte[]>(dictionary, new BytesComparer());
        }

        private ConcurrentDictionary<byte[], byte[]> Dictionary { get; }

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
            Dictionary.TryRemove(key, out _);
        }

        public bool Exists(byte[] key)
        {
            return Dictionary.ContainsKey(key);
        }

        public void Dispose()
        {
            // Method intentionally left empty.
        }

        public IEnumerable<byte[]> ListKeys() => Dictionary.Keys;

        private class BytesComparer : EqualityComparer<byte[]>
        {
            public override bool Equals(byte[] x, byte[] y) => x is { } xa && y is { } ya &&
                xa.Length == ya.Length && Enumerable.Zip(xa, ya, (xb, yb) => xb == yb).All(b => b);

            public override int GetHashCode(byte[] obj) => 0;
        }
    }
}
