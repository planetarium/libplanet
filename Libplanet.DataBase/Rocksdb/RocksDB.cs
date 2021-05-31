using System;
using System.IO;
using RocksDbSharp;

namespace Libplanet.DataBase.Rocksdb
{
    public class RocksDb : IDataBase, IDisposable
    {
        private readonly DbOptions _options;

        private readonly string _path;

        private readonly RocksDbSharp.RocksDb _rocksDb;

        public RocksDb(
            string path = null
        )
        {
            if (path is null)
            {
                throw new ArgumentNullException(nameof(path));
            }

            path = Path.GetFullPath(path);

            if (!Directory.Exists(path))
            {
                Directory.CreateDirectory(path);
            }

            _path = path;
            _options = new DbOptions().SetCreateIfMissing();
            _rocksDb = RocksDbSharp.RocksDb.Open(_options, _path);
        }

        public byte[] Get(byte[] key)
        {
            return key.Length == 0 ? null : _rocksDb.Get(key);
        }

        public bool Has(byte[] key)
        {
            return key.Length != 0 && _rocksDb.Get(key) != null ;
        }

        public void Set(byte[] key, byte[] value)
        {
            _rocksDb.Put(key, value);
        }

        public void Delete(byte[] key)
        {
            _rocksDb.Remove(key);
        }

        public IIterator Iterator(byte[] start, byte[] end)
        {
            return new RocksDbIterator(_rocksDb.NewIterator(), start, end, false);
        }

        public IIterator ReverseIterator(byte[] start, byte[] end)
        {
            return new RocksDbIterator(_rocksDb.NewIterator(), start, end, true);
        }

        public void Write(WriteBatch batch)
        {
            _rocksDb.Write(batch);
        }

        public void Dispose()
        {
            _rocksDb?.Dispose();
        }
    }
}
