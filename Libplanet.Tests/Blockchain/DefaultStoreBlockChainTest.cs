using Libplanet.Tests.Store;
using Xunit.Abstractions;

namespace Libplanet.Tests.Blockchain
{
    public class DefaultStoreBlockChainTest : BlockChainTest
    {
        public DefaultStoreBlockChainTest(ITestOutputHelper output)
            : base(output, action => new DefaultStoreFixture(blockAction: action))
        {
        }
    }
}
