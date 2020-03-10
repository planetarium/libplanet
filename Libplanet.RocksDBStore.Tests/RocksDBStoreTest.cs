using System;
using System.IO;
using Libplanet.Blockchain;
using Libplanet.Tests.Blockchain;
using Libplanet.Tests.Common.Action;
using Libplanet.Tests.Store;
using Xunit;

namespace Libplanet.RocksDBStore.Tests
{
    public class RocksDBStoreTest : StoreTest, IDisposable
    {
        private readonly RocksDBStoreFixture _fx;

        public RocksDBStoreTest()
        {
            try
            {
                Fx = _fx = new RocksDBStoreFixture();
                FxConstructor = () => new RocksDBStoreFixture();
            }
            catch (TypeInitializationException)
            {
                throw new SkipException("RocksDB is not available.");
            }
        }

        public void Dispose()
        {
            _fx?.Dispose();
        }

        [SkippableFact]
        public void ReopenStoreAfterDispose()
        {
            var path = Path.Combine(Path.GetTempPath(), $"rocksdb_test_{Guid.NewGuid()}");

            try
            {
                var store = new RocksDBStore(path);
                var blocks = new BlockChain<DumbAction>(
                    new NullPolicy<DumbAction>(),
                    store,
                    Fx.GenesisBlock
                );
                store.Dispose();

                store = new RocksDBStore(path);
                store.Dispose();
            }
            finally
            {
                Directory.Delete(path, true);
            }
        }
    }
}
