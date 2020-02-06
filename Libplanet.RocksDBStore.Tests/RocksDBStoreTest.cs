using System;
using Libplanet.Tests.Store;

namespace Libplanet.RocksDBStore.Tests
{
    public class RocksDBStoreTest : StoreTest, IDisposable
    {
        private readonly RocksDBStoreFixture _fx;

        public RocksDBStoreTest()
        {
            Fx = _fx = new RocksDBStoreFixture();
        }

        public void Dispose()
        {
            _fx?.Dispose();
        }
    }
}
