using System;

namespace Libplanet.Tests.Store
{
    public class LiteDBStoreTest : StoreTest, IDisposable
    {
        private readonly LiteDBStoreFixture _fx;

        public LiteDBStoreTest()
        {
            Fx = _fx = new LiteDBStoreFixture();
        }

        public void Dispose()
        {
            _fx?.Dispose();
        }
    }
}
