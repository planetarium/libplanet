using Libplanet.Action;
using Libplanet.Tests.Store;
using Xunit.Abstractions;

namespace Libplanet.Tests.Blockchain
{
    public class DefaultStoreBlockChainTest : BlockChainTest
    {
        public DefaultStoreBlockChainTest(ITestOutputHelper output)
            : base(output)
        {
        }

        protected override StoreFixture GetStoreFixture(
            PolicyActionsRegistry policyActionsRegistry = null) =>
                new DefaultStoreFixture(policyActionsRegistry: policyActionsRegistry);
    }
}
