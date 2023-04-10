using System.Threading;
using Libplanet.Action;
using Libplanet.Explorer.Indexing;
using Libplanet.Store;

namespace Libplanet.Explorer.Tests.Indexing;

public abstract class BlockChainIndexFixture<T> : IBlockChainIndexFixture<T>
    where T : IAction, new()
{
    public IBlockChainIndex Index { get; }

    protected BlockChainIndexFixture(IStore store, IBlockChainIndex index)
    {
        Index = index;
        Index.SynchronizeAsync<T>(store, CancellationToken.None).GetAwaiter().GetResult();
    }

    public abstract IBlockChainIndex CreateEphemeralIndexInstance();
}
