using System;
using System.IO;
using System.Linq;
using System.Reflection;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
using Libplanet.Store;
using Libplanet.Store.Trie;
using Libplanet.Tests.Common.Action;
using Libplanet.Tests.Store;
using Libplanet.Tx;
using RocksDbSharp;
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
        public void Loader()
        {
            // TODO: Test query parameters as well.
            string tempDirPath = Path.GetTempFileName();
            File.Delete(tempDirPath);
            var uri = new Uri(tempDirPath, UriKind.Absolute);
            Assert.StartsWith("file://", uri.ToString());
            uri = new Uri("rocksdb+" + uri);
            (IStore Store, IStateStore StateStore)? pair = StoreLoaderAttribute.LoadStore(uri);
            Assert.NotNull(pair);
            IStore store = pair.Value.Store;
            Assert.IsAssignableFrom<RocksDBStore>(store);
            var stateStore = (TrieStateStore)pair.Value.StateStore;
            var kvStore = typeof(TrieStateStore)
                .GetProperty(
                    "StateKeyValueStore",
                    BindingFlags.NonPublic | BindingFlags.GetProperty | BindingFlags.Instance)
                ?.GetMethod
                ?.Invoke(stateStore, Array.Empty<object>());
            Assert.IsAssignableFrom<RocksDBKeyValueStore>(kvStore);
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
                    new NullBlockPolicy<DumbAction>(),
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
                    var block = store.GetBlock<DumbAction>(bHash);
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
        public void ListChainIds()
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

                Assert.Single(store.ListChainIds());

                store.ForkBlockIndexes(cid, Guid.NewGuid(), Fx.Block3.Hash);
                Assert.Equal(2, store.ListChainIds().Count());
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

        [SkippableFact]
        public void PruneOutdatedChainsRocksDb()
        {
            var path = Path.Combine(Path.GetTempPath(), $"rocksdb_test_{Guid.NewGuid()}");
            var store = new RocksDBStore(path);
            RocksDb chainDb = null;

            int KeysWithChainId(RocksDb db, Guid cid)
            {
                using (Iterator it = db.NewIterator())
                {
                    byte[] key = cid.ToByteArray();
                    int count = 0;
                    for (it.SeekToFirst(); it.Valid(); it.Next())
                    {
                        if (!it.Key().Skip(1).ToArray().StartsWith(key))
                        {
                            continue;
                        }

                        count++;
                    }

                    return count;
                }
            }

            try
            {
                store.PutBlock(Fx.GenesisBlock);
                store.PutBlock(Fx.Block1);
                store.PutBlock(Fx.Block2);
                store.PutBlock(Fx.Block3);

                Guid cid1 = Guid.NewGuid();
                int guidLength = cid1.ToByteArray().Length;
                store.AppendIndex(cid1, Fx.GenesisBlock.Hash);
                store.AppendIndex(cid1, Fx.Block1.Hash);
                store.AppendIndex(cid1, Fx.Block2.Hash);
                Assert.Single(store.ListChainIds());
                Assert.Equal(
                    new[] { Fx.GenesisBlock.Hash, Fx.Block1.Hash, Fx.Block2.Hash },
                    store.IterateIndexes(cid1, 0, null));

                Guid cid2 = Guid.NewGuid();
                store.ForkBlockIndexes(cid1, cid2, Fx.Block1.Hash);
                store.AppendIndex(cid2, Fx.Block2.Hash);
                store.AppendIndex(cid2, Fx.Block3.Hash);
                Assert.Equal(2, store.ListChainIds().Count());
                Assert.Equal(
                    new[] { Fx.GenesisBlock.Hash, Fx.Block1.Hash, Fx.Block2.Hash, Fx.Block3.Hash },
                    store.IterateIndexes(cid2, 0, null));

                Guid cid3 = Guid.NewGuid();
                store.ForkBlockIndexes(cid1, cid3, Fx.Block2.Hash);
                Assert.Equal(3, store.ListChainIds().Count());
                Assert.Equal(
                    new[] { Fx.GenesisBlock.Hash, Fx.Block1.Hash, Fx.Block2.Hash },
                    store.IterateIndexes(cid3, 0, null));

                Assert.Throws<InvalidOperationException>(() => store.PruneOutdatedChains());
                store.PruneOutdatedChains(true);
                store.SetCanonicalChainId(cid3);
                store.PruneOutdatedChains();
                Assert.Single(store.ListChainIds());
                Assert.Equal(
                    new[] { Fx.GenesisBlock.Hash, Fx.Block1.Hash, Fx.Block2.Hash },
                    store.IterateIndexes(cid3, 0, null));
                Assert.Equal(3, store.CountIndex(cid3));

                store.Dispose();
                store = null;

                chainDb = RocksDb.Open(new DbOptions(), Path.Combine(path, "chain"));

                Assert.Equal(0, KeysWithChainId(chainDb, cid1));
                Assert.Equal(0, KeysWithChainId(chainDb, cid2));
                Assert.NotEqual(0, KeysWithChainId(chainDb, cid3));
            }
            finally
            {
                store?.Dispose();
                chainDb?.Dispose();
                Directory.Delete(path, true);
            }
        }

        private long ToInt64(byte[] value)
        {
            byte[] bytes = new byte[sizeof(long)];
            value.CopyTo(bytes, 0);

            // Use Big-endian to order index lexicographically.
            if (BitConverter.IsLittleEndian)
            {
                Array.Reverse(bytes);
            }

            return BitConverter.ToInt64(bytes, 0);
        }
    }
}
