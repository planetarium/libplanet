using Libplanet.Action;
using Libplanet.Explorer.Indexing;

namespace Libplanet.Explorer.Tests.Indexing;

public interface IBlockChainIndexFixture<T>
    where T : IAction, new()
{
    IBlockChainIndex Index { get; }

    IBlockChainIndex CreateEphemeralIndexInstance();
}
