using System.Collections.Generic;
using Libplanet.Store.Trie;

namespace Libplanet.Tests.Store.Trie
{
    // FIXME: This should be exposed as a public class:
    public class MemoryKeyValueStore : IKeyValueStore
    {
        public MemoryKeyValueStore()
            : this(new Dictionary<byte[], byte[]>())
        {
        }

        public MemoryKeyValueStore(Dictionary<byte[], byte[]> dictionary)
        {
            Dictionary = new Dictionary<byte[], byte[]>(dictionary, new BytesEqualityComparer());
        }

        // FIXME: This should be a ConcurrentDictionary<K, V>:
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

        public bool Exists(byte[] key)
        {
            return Dictionary.ContainsKey(key);
        }

        public void Dispose()
        {
        }

        public IEnumerable<byte[]> ListKeys() => Dictionary.Keys;
    }
}
