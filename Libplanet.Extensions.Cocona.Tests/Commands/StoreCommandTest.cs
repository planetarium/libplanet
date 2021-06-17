using System;
using System.Collections.Immutable;
using System.IO;
using Bencodex.Misc;
using Cocona;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Libplanet.Extensions.Cocona.Commands;
using Libplanet.RocksDBStore.Tests;
using Libplanet.Tests;
using Libplanet.Tests.Store;
using Libplanet.Tx;
using Xunit;

namespace Libplanet.Extensions.Cocona.Tests.Commands
{
    public class StoreCommandTest : IDisposable
    {
        private readonly ImmutableArray<StoreFixture> _storeFixtures;
        private readonly TextWriter _originalWriter;
        private readonly Block<Utils.DummyAction> _genesisBlock;
        private readonly Block<Utils.DummyAction> _block1;
        private readonly Block<Utils.DummyAction> _block2;
        private readonly Block<Utils.DummyAction> _block3;
        private readonly Block<Utils.DummyAction> _block4;
        private readonly Block<Utils.DummyAction> _block5;
        private readonly Transaction<Utils.DummyAction> _transaction1;
        private readonly Transaction<Utils.DummyAction> _transaction2;
        private readonly Transaction<Utils.DummyAction> _transaction3;
        private readonly Transaction<Utils.DummyAction> _transaction4;

        public StoreCommandTest()
        {
            _originalWriter = Console.Out;

            try
            {
                _storeFixtures = ImmutableArray.Create<StoreFixture>(
                    new DefaultStoreFixture(false),
                    new RocksDBStoreFixture(),
                    new MonoRocksDBStoreFixture()
                );
            }
            catch (TypeInitializationException)
            {
                throw new SkipException("RocksDB is not available.");
            }

            _genesisBlock = TestUtils.MineGenesis<Utils.DummyAction>();
            _transaction1 = DummyTransaction();
            _transaction2 = DummyTransaction();
            _transaction3 = DummyTransaction();
            _transaction4 = DummyTransaction();

            _block1 = TestUtils.MineNext(_genesisBlock, new[] { _transaction1 });
            _block2 = TestUtils.MineNext(_block1, new[] { _transaction2 });
            _block3 = TestUtils.MineNext(_block2, new[] { _transaction3 });
            _block4 = TestUtils.MineNext(_block3, new[] { _transaction3 });
            _block5 = TestUtils.MineNext(_block4);

            var guid = Guid.NewGuid();
            foreach (var v in _storeFixtures)
            {
                v.Store.SetCanonicalChainId(guid);
                v.Store.PutBlock(_genesisBlock);
                v.Store.AppendIndex(guid, _genesisBlock.Hash);

                v.Store.PutBlock(_block1);
                v.Store.AppendIndex(guid, _block1.Hash);
                v.Store.PutTransaction(_transaction1);

                v.Store.PutBlock(_block2);
                v.Store.AppendIndex(guid, _block2.Hash);
                v.Store.PutTransaction(_transaction2);

                v.Store.PutBlock(_block3);
                v.Store.AppendIndex(guid, _block3.Hash);
                v.Store.PutTransaction(_transaction3);

                v.Store.PutBlock(_block4);
                v.Store.AppendIndex(guid, _block4.Hash);

                (v.Store as IDisposable)?.Dispose();
                (v.StateStore as IDisposable)?.Dispose();
            }
        }

        [SkippableFact]
        public void TestInvalidArguments()
        {
            Assert.Throws<ArgumentException>(() =>
                new StoreCommand().BlockByHash(
                    "rocksdb+file+file://" + "/blah",
                    "dummy"
                ));
            Assert.Throws<NotSupportedException>(() =>
                new StoreCommand().BlockByHash(
                    "rocksdb+memory://" + "/blah",
                    "dummy"
                ));
            Assert.Throws<NotSupportedException>(() =>
                new StoreCommand().BlockByHash(
                    "leveldb://" + "/blah",
                    "dummy"
                ));
        }

        [SkippableFact]
        public void TestBlockByTxIdNotExist()
        {
            foreach (var fx in _storeFixtures)
            {
                new StoreCommand().BuildIndexTxBlock(
                    fx.Scheme + fx.Path,
                    0,
                    10);
            }

            foreach (var fx in _storeFixtures)
            {
                Assert.Throws<CommandExitedException>(() =>
                    new StoreCommand().BlockByTxId(
                        fx.Scheme + fx.Path,
                        _transaction4.Id.ToString()
                    ));
            }
        }

        [SkippableFact]
        public void TestBlockByTxIdTwo()
        {
            foreach (var fx in _storeFixtures)
            {
                new StoreCommand().BuildIndexTxBlock(
                    fx.Scheme + fx.Path,
                    0,
                    10);
            }

            foreach (var fx in _storeFixtures)
            {
                Assert.Throws<CommandExitedException>(() =>
                    new StoreCommand().BlockByTxId(
                        fx.Scheme + fx.Path,
                        _transaction3.Id.ToString()
                    ));
            }
        }

        [SkippableFact]
        public void TestBlockHashesByTxId()
        {
            foreach (var fx in _storeFixtures)
            {
                new StoreCommand().BuildIndexTxBlock(
                    fx.Scheme + fx.Path,
                    0,
                    10);
            }

            foreach (var fx in _storeFixtures)
            {
                using var sw = new StringWriter();
                Console.SetOut(sw);
                new StoreCommand().BlockHashesByTxId(
                    fx.Scheme + fx.Path,
                    _transaction3.Id.ToString()
                );
                var actual = sw.ToString();
                var expected = Utils.SerializeHumanReadable(new[] { _block3.Hash, _block4.Hash });
                if (expected.TrimEnd() != actual.TrimEnd())
                {
                    expected = Utils.SerializeHumanReadable(new[] { _block4.Hash, _block3.Hash });
                }

                Assert.Equal(expected.TrimEnd(), actual.TrimEnd());
            }
        }

        [SkippableFact]
        public void TestBuildIndexTxBlockBlockByTxId()
        {
            foreach (var fx in _storeFixtures)
            {
                new StoreCommand().BuildIndexTxBlock(
                    fx.Scheme + fx.Path,
                    0,
                    10);
            }

            foreach (var fx in _storeFixtures)
            {
                void AssertTxBlockIndex(
                    Transaction<Utils.DummyAction> tx,
                    Block<Utils.DummyAction> block
                )
                {
                    using var sw = new StringWriter();
                    Console.SetOut(sw);
                    new StoreCommand().BlockByTxId(
                        fx.Scheme + fx.Path,
                        tx.Id.ToString()
                    );
                    var actual = sw.ToString();
                    var expected = Utils.SerializeHumanReadable(block);
                    Assert.Equal(expected.TrimEnd(), actual.TrimEnd());
                }

                AssertTxBlockIndex(_transaction1, _block1);
                AssertTxBlockIndex(_transaction2, _block2);
            }
        }

        [SkippableFact]
        public void TestBlockByHashNotExists()
        {
            foreach (var fx in _storeFixtures)
            {
                Assert.Throws<CommandExitedException>(() =>
                    new StoreCommand().BlockByHash(
                        fx.Scheme + fx.Path,
                        _block5.Hash.ToString())
                );
            }
        }

        [SkippableFact]
        public void TestBlockByHash()
        {
            foreach (var fx in _storeFixtures)
            {
                using var sw = new StringWriter();
                Console.SetOut(sw);
                new StoreCommand().BlockByHash(
                    fx.Scheme + fx.Path,
                    _block1.Hash.ToString());
                var actual = sw.ToString();
                var expected = Utils.SerializeHumanReadable(_block1);
                Assert.Equal(expected.TrimEnd(), actual.TrimEnd());
            }
        }

        [SkippableFact]
        public void TestBlockByIndexNotExists()
        {
            foreach (var fx in _storeFixtures)
            {
                Assert.Throws<CommandExitedException>(() =>
                    new StoreCommand().BlockByIndex(
                        fx.Scheme + fx.Path,
                        9999999 * 100
                    )
                );
            }
        }

        [SkippableFact]
        public void TestBlockByIndex()
        {
            foreach (var fx in _storeFixtures)
            {
                using var sw = new StringWriter();
                Console.SetOut(sw);
                new StoreCommand().BlockByIndex(fx.Scheme + fx.Path, 0);
                var actual = sw.ToString();
                var expected = Utils.SerializeHumanReadable(_genesisBlock);
                Assert.Equal(expected.TrimEnd(), actual.TrimEnd());
            }
        }

        [SkippableFact]
        public void TestTxByIdNotExists()
        {
            foreach (var fx in _storeFixtures)
            {
                Assert.Throws<CommandExitedException>(() =>
                    new StoreCommand().TxById(
                        fx.Scheme + fx.Path,
                        fx.Transaction2.Id.ToString())
                );
            }
        }

        [SkippableFact]
        public void TestTxById()
        {
            foreach (var fx in _storeFixtures)
            {
                using var sw = new StringWriter();
                Console.SetOut(sw);
                new StoreCommand().TxById(
                    fx.Scheme + fx.Path,
                    _transaction1.Id.ToString());
                var actual = sw.ToString();
                var expected = Utils.SerializeHumanReadable(_transaction1);
                Assert.Equal(expected.TrimEnd(), actual.TrimEnd());
            }
        }

        public void Dispose()
        {
            Console.SetOut(_originalWriter);
        }

        private Transaction<Utils.DummyAction> DummyTransaction()
        {
            return Transaction<Utils.DummyAction>.Create(
                0,
                new PrivateKey(),
                _genesisBlock.Hash,
                new[] { new Utils.DummyAction() },
                null,
                DateTimeOffset.UtcNow
            );
        }
    }
}
