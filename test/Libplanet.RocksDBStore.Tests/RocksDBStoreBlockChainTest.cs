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

        protected override StoreFixture GetStoreFixture(
            PolicyActionsRegistry policyActionsRegistry = null)
        {
            try
            {
                return new RocksDBStoreFixture(
                    policyActionsRegistry);
            }
            catch (TypeInitializationException)
            {
                throw new SkipException("RocksDB is not available.");
            }
        }
    }
}
