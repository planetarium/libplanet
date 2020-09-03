#nullable enable
using System.Collections.Generic;

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

        /// <summary>
        /// Lists all keys that have been stored in the storage.
        /// </summary>
        /// <returns>All keys in an arbitrary order.  The order might be vary for each call.
        /// </returns>
        public IEnumerable<byte[]> ListKeys();
    }
}
