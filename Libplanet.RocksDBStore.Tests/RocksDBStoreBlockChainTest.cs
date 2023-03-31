using System;
using Libplanet.Action;
using Libplanet.Tests.Blockchain;
using Libplanet.Tests.Store;
using Xunit;
using Xunit.Abstractions;

namespace Libplanet.RocksDBStore.Tests
{
    public class RocksDBStoreBlockChainTest : BlockChainTest
    {
        public RocksDBStoreBlockChainTest(ITestOutputHelper output)
            : base(output)
        {
        }

        protected override StoreFixture GetStoreFixture(IAction blockAction)
        {
            try
            {
                return new RocksDBStoreFixture(blockAction: blockAction);
            }
            catch (TypeInitializationException)
            {
                throw new SkipException("RocksDB is not available.");
            }
        }
    }
}
