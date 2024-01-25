using System;
using GraphQL.Execution;
using Libplanet.Action;
using Libplanet.Blockchain;
using Libplanet.Explorer.Indexing;
using Libplanet.Explorer.Interfaces;
using Libplanet.Net;
using Libplanet.Store;

namespace Libplanet.Explorer.Tests.Queries;

public class MockBlockChainContext : IBlockChainContext
{
    private readonly BlockChain? _blockChain;
    private readonly IStore? _store;

    public bool Preloaded => true;

    public BlockChain BlockChain => _blockChain ?? throw new InvalidOperationException();

    public IStore Store => _store ?? throw new InvalidOperationException();

    public Swarm Swarm => throw new InvalidOperationException();

    public IBlockChainIndex? Index { get; protected init; }

    public MockBlockChainContext(BlockChain chain)
    {
        _blockChain = chain;
        _store = BlockChain.Store;
    }

    public MockBlockChainContext(IStore store)
    {
        _store = store;
    }

    public MockBlockChainContext()
    {
    }
}
