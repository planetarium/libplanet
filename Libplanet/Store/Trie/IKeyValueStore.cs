using System.Collections.Generic;

#nullable enable
namespace Libplanet.Store.Trie
{
    /// <summary>
    /// An interface to access key-value store.
    /// </summary>
    public interface IKeyValueStore
    {
        public byte[] Get(byte[] key);

        public void Set(byte[] key, byte[] value);

        public void Delete(byte[] key);

        public bool Exists(byte[] key);

        public IEnumerable<byte[]> ListKeys();
    }
}
