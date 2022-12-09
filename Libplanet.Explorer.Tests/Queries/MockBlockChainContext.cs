using Libplanet.Action;
using Libplanet.Blockchain;
using Libplanet.Explorer.Indexing;
using Libplanet.Explorer.Interfaces;
using Libplanet.Net;
using Libplanet.Store;

namespace Libplanet.Explorer.Tests.Queries;

public class MockBlockChainContext<T> : IBlockChainContext<T>
    where T : IAction, new()
{
    public bool Preloaded => true;

    public BlockChain<T> BlockChain { get; }

    public IStore Store { get; }

    public Swarm<T> Swarm { get; }

    public IBlockChainIndex Index { get; protected init; }

    public MockBlockChainContext(BlockChain<T> chain)
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
