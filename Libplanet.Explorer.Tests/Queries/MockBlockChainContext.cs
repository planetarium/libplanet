using Libplanet.Blockchain;
using Libplanet.Explorer.Indexing;
using Libplanet.Explorer.Interfaces;
using Libplanet.Net;
using Libplanet.Store;

namespace Libplanet.Explorer.Tests.Queries;

public class MockBlockChainContext : IBlockChainContext
{
    public bool Preloaded => true;

    public BlockChain BlockChain { get; }

    public IStore Store { get; }

    public Swarm Swarm { get; }

    public IBlockChainIndex Index { get; protected init; }

    public MockBlockChainContext(BlockChain chain)
    {
        BlockChain = chain;
        Store = BlockChain.Store;
    }

    public MockBlockChainContext(IStore store)
    {
        Store = store;
    }

    public MockBlockChainContext()
    {
    }
}
