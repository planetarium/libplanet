using Libplanet.Store.Trie;
using RocksDbSharp;

namespace Libplanet.RocksDBStore
{
    public class RocksDBKeyValueStore : IKeyValueStore
    {
        private readonly RocksDb _keyValueDb;
        private readonly DbOptions _options;

        public RocksDBKeyValueStore(string path)
        {
            _options = new DbOptions()
                .SetCreateIfMissing();

            _keyValueDb = RocksDBUtils.OpenRocksDb(_options, path);
        }

        public byte[] Get(byte[] key) => _keyValueDb.Get(key);

        public void Set(byte[] key, byte[] value)
        {
            _keyValueDb.Put(key, value);
        }

        public void Delete(byte[] key)
        {
            _keyValueDb.Remove(key);
        }

        public bool Exists(byte[] key) => !(_keyValueDb.Get(key) is null);
    }
}
