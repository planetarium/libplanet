using System;
using System.IO;
using System.Linq;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
using Libplanet.Store;
using Libplanet.Store.Trie;
using Libplanet.Tests.Blockchain;
using Libplanet.Tests.Common.Action;
using Libplanet.Tests.Store;
using Libplanet.Tx;
using Xunit;
using Xunit.Abstractions;

namespace Libplanet.RocksDBStore.Tests
{
    public class RocksDBStoreTest : StoreTest, IDisposable
    {
        private readonly RocksDBStoreFixture _fx;

        public RocksDBStoreTest(ITestOutputHelper testOutputHelper)
        {
            try
            {
                TestOutputHelper = testOutputHelper;
                Fx = _fx = new RocksDBStoreFixture();
                FxConstructor = () => new RocksDBStoreFixture();
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
                var store = new RocksDBStore(path);
                var stateStore = new TrieStateStore(new MemoryKeyValueStore());
                var blocks = new BlockChain<DumbAction>(
                    new NullPolicy<DumbAction>(),
                    new VolatileStagePolicy<DumbAction>(),
                    store,
                    stateStore,
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

        [SkippableFact]
        public void ParallelGetBlock()
        {
            var path = Path.Combine(Path.GetTempPath(), $"rocksdb_test_{Guid.NewGuid()}");
            var store = new RocksDBStore(path);
            try
            {
                Guid cid = Guid.NewGuid();
                store.AppendIndex(cid, Fx.Block1.Hash);
                store.AppendIndex(cid, Fx.Block2.Hash);
                store.AppendIndex(cid, Fx.Block3.Hash);

                store.PutBlock(Fx.Block1);
                store.PutBlock(Fx.Block2);
                store.PutBlock(Fx.Block3);

                store.Dispose();
                store = new RocksDBStore(path);

                Enumerable.Range(0, 3).AsParallel().ForAll(i =>
                {
                    var bHash = store.IndexBlockHash(cid, i).Value;
                    var block = store.GetBlock<DumbAction>(Fx.GetHashAlgorithm, bHash);
                    Assert.NotNull(block);
                });
            }
            finally
            {
                store.Dispose();
                Directory.Delete(path, true);
            }
        }

        [SkippableFact]
        public void ParallelGetTransaction()
        {
            var path = Path.Combine(Path.GetTempPath(), $"rocksdb_test_{Guid.NewGuid()}");
            var store = new RocksDBStore(path);
            Transaction<DumbAction>[] txs = new[]
            {
                Fx.Transaction1,
                Fx.Transaction2,
                Fx.Transaction3,
            };
            try
            {
                store.PutTransaction(Fx.Transaction1);
                store.PutTransaction(Fx.Transaction2);
                store.PutTransaction(Fx.Transaction3);
                store.Dispose();
                store = new RocksDBStore(path);

                Enumerable.Range(0, 3).AsParallel().ForAll(i =>
                {
                    Assert.NotNull(store.GetTransaction<DumbAction>(txs[i].Id));
                });
            }
            finally
            {
                store.Dispose();
                Directory.Delete(path, true);
            }
        }
    }
}
