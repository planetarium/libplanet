namespace Libplanet.Store.Trie
{
    /// <summary>
    /// An interface to access key-value store.
    /// </summary>
    internal interface IKeyValueStore
    {
        public byte[] Get(byte[] key);

        public void Set(byte[] key, byte[] value);

        public void Delete(byte[] key);
    }
}
