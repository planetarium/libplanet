using System;
using System.Collections.Immutable;
using System.IO;
using Libplanet.Extensions.Cocona.Commands;
using Libplanet.RocksDBStore.Tests;
using Libplanet.Tests.Store;
using Xunit;

namespace Libplanet.Extensions.Cocona.Tests.Commands
{
    public class StoreCommandTest : IDisposable
    {
        private readonly ImmutableArray<StoreFixture> _storeFixtures;
        private readonly StoreCommand _command;
        private readonly TextWriter _originalWriter;

        public StoreCommandTest()
        {
            _command = new StoreCommand();
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

            foreach (var v in _storeFixtures)
            {
                var guid = Guid.NewGuid();
                v.Store.SetCanonicalChainId(guid);
                v.Store.PutBlock(v.Block1);
                v.Store.AppendIndex(guid, v.Block1.Hash);
                v.Store.PutTransaction(v.Transaction1);
                (v.Store as IDisposable)?.Dispose();
                (v.StateStore as IDisposable)?.Dispose();
            }
        }

        [SkippableFact]
        public void TestBlockByHash()
        {
            foreach (var fx in _storeFixtures)
            {
                using (var sw = new StringWriter())
                {
                    Console.SetOut(sw);
                    _command.BlockByHash(
                        fx.Scheme + fx.Path,
                        fx.Block1.Hash.ToString());
                    var actual = sw.ToString();
                    var expected = Utils.SerializeHumanReadable(fx.Block1);
                    Assert.Equal(expected.TrimEnd(), actual.TrimEnd());
                }
            }
        }

        [SkippableFact]
        public void TestBlockByIndex()
        {
            foreach (var fx in _storeFixtures)
            {
                using (var sw = new StringWriter())
                {
                    Console.SetOut(sw);
                    _command.BlockByIndex(fx.Scheme + fx.Path, 0);
                    var actual = sw.ToString();
                    var expected = Utils.SerializeHumanReadable(fx.Block1);
                    Assert.Equal(expected.TrimEnd(), actual.TrimEnd());
                }
            }
        }

        [SkippableFact]
        public void TestTxById()
        {
            foreach (var fx in _storeFixtures)
            {
                using (var sw = new StringWriter())
                {
                    Console.SetOut(sw);
                    _command.TxById(
                        fx.Scheme + fx.Path,
                        fx.Transaction1.Id.ToString());
                    var actual = sw.ToString();
                    var expected = Utils.SerializeHumanReadable(fx.Transaction1);
                    Assert.Equal(expected.TrimEnd(), actual.TrimEnd());
                }
            }
        }

        public void Dispose()
        {
            Console.SetOut(_originalWriter);
        }
    }
}
