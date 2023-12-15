using System.Collections.Generic;
using Libplanet.Store.Trie;
using RocksDbSharp;

namespace Libplanet.RocksDBStore
{
    /// <summary>
    /// The <a href="https://rocksdb.org/">RocksDB</a> <see cref="IKeyValueStore"/> implementation.
    /// This stores data in the RocksDB.
    /// <para><see cref="RocksDBStore"/> and <see cref="RocksDBKeyValueStore"/>-backed
    /// <see cref="TrieStateStore"/> can be instantiated from a URI with <c>rocksdb+file:</c> scheme
    /// using <see cref="StoreLoaderAttribute.LoadStore(Uri)"/>, e.g.:</para>
    /// <list type="bullet">
    /// <item><description><c>rocksdb+file:///var/data/planet/</c></description></item>
    /// <item><description><c>rocksdb+file:///c:/Users/john/AppData/Local/planet/</c></description>
    /// </item>
    /// </list>
    /// <para>The following query string parameters are supported:</para>
    /// <list type="table">
    /// <item>
    /// <term><c>block-cache</c></term>
    /// <description>Corresponds to
    /// <see cref="RocksDBStore(string, int, int, ulong?, ulong?, ulong?, int, int, int)"/>'s
    /// <c>blockCacheSize</c> parameter.  512 by default.</description>
    /// </item>
    /// <item>
    /// <term><c>tx-cache</c></term>
    /// <description>Corresponds to
    /// <see cref="RocksDBStore(string, int, int, ulong?, ulong?, ulong?, int, int, int)"/>'s
    /// <c>txCacheSize</c> parameter.  1024 by default.</description>
    /// </item>
    /// <item>
    /// <term><c>max-total-wal-size</c></term>
    /// <description>Corresponds to RocksDB's <c>max_total_wal_size</c> option.</description>
    /// </item>
    /// <item>
    /// <term><c>keep-log-file-num</c></term>
    /// <description>Corresponds to RocksDB's <c>keep_log_file_num</c> option.</description>
    /// </item>
    /// <item>
    /// <term><c>max_log_file_size</c></term>
    /// <description>Corresponds to RocksDB's <c>max_log_file_size</c> option.</description>
    /// </item>
    /// <item>
    /// <term><c>tx-epoch-unit-secs</c></term>
    /// <description>Corresponds to
    /// <see cref="RocksDBStore(string, int, int, ulong?, ulong?, ulong?, int, int, int)"/>'s
    /// <c>txEpochUnitSeconds</c> parameter.  86400 by default.</description>
    /// </item>
    /// <item>
    /// <term><c>block-epoch-unit-secs</c></term>
    /// <description>Corresponds to
    /// <see cref="RocksDBStore(string, int, int, ulong?, ulong?, ulong?, int, int, int)"/>'s
    /// <c>blockEpochUnitSeconds</c> parameter.  86400 by default.</description>
    /// </item>
    /// <item>
    /// <term><c>connection-cache</c></term>
    /// <description>Corresponds to
    /// <see cref="RocksDBStore(string, int, int, ulong?, ulong?, ulong?, int, int, int)"/>'s
    /// <c>dbConnectionCacheSize</c> parameter.  100 by default.</description>
    /// </item>
    /// <item>
    /// <term><c>states-dir</c></term>
    /// <description>Corresponds to <see cref="RocksDBKeyValueStore(string)"/>'s <c>path</c>
    /// parameter.  It is relative to the URI path, and defaults to <c>states</c>.</description>
    /// </item>
    /// </list>
    /// </summary>
    public class RocksDBKeyValueStore : IKeyValueStore
    {
        private readonly RocksDb _keyValueDb;
        private bool _disposed = false;

        /// <summary>
        /// Creates a new <see cref="RocksDBKeyValueStore"/>.
        /// </summary>
        /// <param name="path">The path of the storage file will be saved.</param>
        /// <param name="type">Determines the instance type of the internal <see cref="RocksDb"/>
        /// instances.  <see cref="RocksDBInstanceType.Primary"/> by default.</param>
        /// <param name="options">The <see cref="DbOptions"/> for <see cref="RocksDb"/>.</param>
        public RocksDBKeyValueStore(
            string path,
            RocksDBInstanceType type = RocksDBInstanceType.Primary,
            DbOptions? options = null)
        {
            options ??= new DbOptions()
                .SetCreateIfMissing()
                .SetSoftPendingCompactionBytesLimit(1000000000000)
                .SetHardPendingCompactionBytesLimit(1038176821042);

            _keyValueDb = RocksDBUtils.OpenRocksDb(options, path, type: type);
            Type = type;
        }

        public RocksDBInstanceType Type { get; }

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

        /// <inheritdoc cref="IKeyValueStore.Delete(IEnumerable{KeyBytes})"/>
        public void Delete(IEnumerable<KeyBytes> keys)
        {
            foreach (KeyBytes key in keys)
            {
                _keyValueDb.Remove(key.ToByteArray());
            }
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

        public void TryCatchUpWithPrimary()
        {
            _keyValueDb.TryCatchUpWithPrimary();
        }
    }
}
