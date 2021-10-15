using System;
using System.IO;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
using Libplanet.Store;
using Libplanet.Tests.Blockchain;
using Libplanet.Tests.Common.Action;
using Libplanet.Tests.Store;
using Libplanet.Tests.Store.Trie;
using Xunit;
using Xunit.Abstractions;

namespace Libplanet.RocksDBStore.Tests
{
    public class MonoRocksDBStoreTest : StoreTest, IDisposable
    {
        private readonly MonoRocksDBStoreFixture _fx;

        public MonoRocksDBStoreTest(ITestOutputHelper testOutputHelper)
        {
            try
            {
                TestOutputHelper = testOutputHelper;
                Fx = _fx = new MonoRocksDBStoreFixture();
                FxConstructor = () => new MonoRocksDBStoreFixture();
            }
            catch (TypeInitializationException)
            {
                throw new SkipException("RocksDB is not available.");
            }
        }

        protected override ITestOutputHelper TestOutputHelper { get; }

        protected override StoreFixture Fx { get; }

        protected override Func<StoreFixture> FxConstructor { get; }

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
                var store = new MonoRocksDBStore(path);
                var stateStore = new TrieStateStore(new MemoryKeyValueStore());
                var blocks = new BlockChain<DumbAction>(
                    new NullPolicy<DumbAction>(),
                    new VolatileStagePolicy<DumbAction>(),
                    store,
                    stateStore,
                    Fx.GenesisBlock
                );
                store.Dispose();

                store = new MonoRocksDBStore(path);
                store.Dispose();
            }
            finally
            {
                Directory.Delete(path, true);
            }
        }
    }
}
