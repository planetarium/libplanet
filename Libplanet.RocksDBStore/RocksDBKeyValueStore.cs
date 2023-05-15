using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
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
    /// <item><description><c>rocksdb+file:///var/data/planet/?secure=true</c>
    /// (trie keys are hashed)</description></item>
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
    /// <item>
    /// <term><c>secure</c></term>
    /// <description><see langword="true"/> or <see langword="false"/> (default).  Corresponds to
    /// <see cref="Libplanet.Store.TrieStateStore(Libplanet.Store.Trie.IKeyValueStore, bool)"/>'s
    /// <c>secure</c> parameter.</description>
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
        public RocksDBKeyValueStore(string path)
        {
            var options = new DbOptions()
                .SetCreateIfMissing();

            _keyValueDb = RocksDBUtils.OpenRocksDb(options, path);
        }

        /// <inheritdoc/>
        public byte[] Get(in KeyBytes key)
        {
#if NETSTANDARD2_0
            return _keyValueDb.Get(key.ToByteArray())
#else
            return _keyValueDb.Get(key.ByteArray.AsSpan())
#endif
            ?? throw new KeyNotFoundException($"No such key: ${key}.");
        }

        /// <inheritdoc cref="IKeyValueStore.Get(IEnumerable{KeyBytes})"/>
        public IReadOnlyDictionary<KeyBytes, byte[]> Get(IEnumerable<KeyBytes> keys)
        {
            byte[][] keyArray = keys.Select(k => k.ToByteArray()).ToArray();
            KeyValuePair<byte[], byte[]?>[] pairs = _keyValueDb.MultiGet(keyArray);
            var dictBuilder = ImmutableDictionary.CreateBuilder<KeyBytes, byte[]>();
            foreach (KeyValuePair<byte[], byte[]?> pair in pairs)
            {
                if (pair.Value is { } b)
                {
                    dictBuilder[new KeyBytes(pair.Key)] = b;
                }
            }

            return dictBuilder.ToImmutable();
        }

        /// <inheritdoc/>
        public void Set(in KeyBytes key, byte[] value)
        {
#if NETSTANDARD2_0
            _keyValueDb.Put(key.ToByteArray(), value);
#else
            _keyValueDb.Put(key.ByteArray.AsSpan(), value.AsSpan());
#endif
        }

        /// <inheritdoc/>
        public void Set(IDictionary<KeyBytes, byte[]> values)
        {
            using var writeBatch = new WriteBatch();

            foreach (KeyValuePair<KeyBytes, byte[]> kv in values)
            {
#if NETSTANDARD2_0
                writeBatch.Put(kv.Key.ToByteArray(), kv.Value);
#else
                writeBatch.Put(kv.Key.ByteArray.AsSpan(), kv.Value.AsSpan());
#endif
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
#if NETSTANDARD2_0
                _keyValueDb.Remove(key.ToByteArray());
#else
                _keyValueDb.Remove(key.ByteArray.AsSpan());
#endif
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
#if NETSTANDARD2_0
            _keyValueDb.HasKey(key.ToByteArray(), key.Length);
#else
            _keyValueDb.HasKey(key.ByteArray.AsSpan(), key.Length);
#endif

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
