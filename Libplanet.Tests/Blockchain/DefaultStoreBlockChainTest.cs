using System.Collections.Immutable;
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
            ImmutableArray<IAction>? beginBlockActions = null,
            ImmutableArray<IAction>? endBlockActions = null)
            => new DefaultStoreFixture(
                beginBlockActions: beginBlockActions,
                endBlockActions: endBlockActions);
    }
}
