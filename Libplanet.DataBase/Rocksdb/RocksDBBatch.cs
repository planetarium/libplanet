using System;
using RocksDbSharp;

namespace Libplanet.DataBase.Rocksdb
{
    public class RocksDbBatch : IBatch, IDisposable
    {
        private readonly RocksDb _rocksDb;
        private readonly WriteBatch _batch;
        public RocksDbBatch(RocksDb rocksDb)
        {
            _rocksDb = rocksDb;
            _batch = new WriteBatch();
        }
        public void Set(byte[] key, byte[] value)
        {
            _batch.Put(key, value);
        }

        public void Delete(byte[] key)
        {
            _batch.Delete(key);
        }

        public void Write()
        {
            _rocksDb.Write(_batch);
        }

        public void Dispose()
        {
            _batch?.Dispose();
        }
    }
}
