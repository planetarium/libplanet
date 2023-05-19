using System.Threading;
using Libplanet.Explorer.Indexing;
using Libplanet.Store;

namespace Libplanet.Explorer.Tests.Indexing;

public abstract class BlockChainIndexFixture : IBlockChainIndexFixture
{
    public IBlockChainIndex Index { get; }

    protected BlockChainIndexFixture(IStore store, IBlockChainIndex index)
    {
        Index = index;
        Index.SynchronizeAsync(store, CancellationToken.None).GetAwaiter().GetResult();
    }

    public abstract IBlockChainIndex CreateEphemeralIndexInstance();
}
