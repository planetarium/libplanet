using Libplanet.Explorer.Indexing;

namespace Libplanet.Explorer.Tests.Indexing;

public interface IBlockChainIndexFixture
{
    IBlockChainIndex Index { get; }

    IBlockChainIndex CreateEphemeralIndexInstance();
}
