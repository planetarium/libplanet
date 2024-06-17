using System.IO;
using Libplanet.Explorer.Indexing;
using Libplanet.Store;

namespace Libplanet.Explorer.Tests.Indexing;

public class RocksDbBlockChainIndexFixture: BlockChainIndexFixture
{
    public RocksDbBlockChainIndexFixture(IStore store)
        : base(
            store,
            new RocksDbBlockChainIndex(Path.Combine(Path.GetTempPath(), Path.GetRandomFileName())))
    {
    }

    public override IBlockChainIndex CreateEphemeralIndexInstance() =>
        new RocksDbBlockChainIndex(Path.Combine(Path.GetTempPath(), Path.GetRandomFileName()));
}
