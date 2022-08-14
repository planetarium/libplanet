using Libplanet.Tests.Blockchain;
using Xunit.Abstractions;

namespace Libplanet.RocksDBStore.Tests
{
    public class RocksDBStoreBlockChainTest : BlockChainTest
    {
        public RocksDBStoreBlockChainTest(ITestOutputHelper output)
            : base(output, action => new RocksDBStoreFixture(blockAction: action))
        {
        }
    }
}
