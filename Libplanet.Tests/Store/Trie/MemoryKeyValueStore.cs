using System.Collections.Generic;
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
            Dictionary = new Dictionary<byte[], byte[]>(dictionary, new BytesEqualityComparer());
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

        public bool Exists(byte[] key)
        {
            return Dictionary.ContainsKey(key);
        }

        public IEnumerable<byte[]> ListKeys() => Dictionary.Keys;
    }
}
