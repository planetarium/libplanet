using System;
using System.Collections.Immutable;
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

        protected override StoreFixture GetStoreFixture(
            ImmutableArray<IAction>? beginBlockActions = null,
            ImmutableArray<IAction>? endBlockActions = null)
        {
            try
            {
                return new RocksDBStoreFixture(
                    beginBlockActions: beginBlockActions,
                    endBlockActions: endBlockActions);
            }
            catch (TypeInitializationException)
            {
                throw new SkipException("RocksDB is not available.");
            }
        }
    }
}
