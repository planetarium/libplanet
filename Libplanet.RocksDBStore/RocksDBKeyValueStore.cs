#nullable enable
using System.Collections.Generic;
using Libplanet.Store.Trie;
using RocksDbSharp;

namespace Libplanet.RocksDBStore
{
    /// <summary>
    /// The <a href="https://rocksdb.org/">RocksDB</a> <see cref="IKeyValueStore"/> implementation.
    /// This stores data in the RocksDB.
    /// </summary>
    public class RocksDBKeyValueStore : IKeyValueStore
    {
        private readonly RocksDb _keyValueDb;
        private bool _disposed = false;

        /// <summary>
        /// Creates a new <see cref="RocksDBKeyValueStore"/>.
        /// </summary>
        /// <param name="path">The path of the storage file will be saved.</param>
        public RocksDBKeyValueStore(string path)
        {
            var options = new DbOptions()
                .SetCreateIfMissing();

            _keyValueDb = RocksDBUtils.OpenRocksDb(options, path);
        }

        /// <inheritdoc/>
        public byte[] Get(in KeyBytes key) => _keyValueDb.Get(key.ToByteArray())
            ?? throw new KeyNotFoundException($"No such key: ${key}.");

        /// <inheritdoc/>
        public void Set(in KeyBytes key, byte[] value)
        {
            _keyValueDb.Put(key.ToByteArray(), value);
        }

        /// <inheritdoc/>
        public void Set(IDictionary<KeyBytes, byte[]> values)
        {
            using var writeBatch = new WriteBatch();

            foreach (KeyValuePair<KeyBytes, byte[]> kv in values)
            {
                writeBatch.Put(kv.Key.ToByteArray(), kv.Value);
            }

            _keyValueDb.Write(writeBatch);
        }

        /// <inheritdoc/>
        public void Delete(in KeyBytes key)
        {
            _keyValueDb.Remove(key.ToByteArray());
        }

        /// <inheritdoc cref="System.IDisposable.Dispose()"/>
        public void Dispose()
        {
            if (!_disposed)
            {
                _keyValueDb.Dispose();
                _disposed = true;
            }
        }

        /// <inheritdoc/>
        public bool Exists(in KeyBytes key) =>
            _keyValueDb.Get(key.ToByteArray()) is { };

        /// <inheritdoc/>
        public IEnumerable<KeyBytes> ListKeys()
        {
            using Iterator it = _keyValueDb.NewIterator();
            for (it.SeekToFirst(); it.Valid(); it.Next())
            {
                yield return new KeyBytes(it.Key());
            }
        }
    }
}
