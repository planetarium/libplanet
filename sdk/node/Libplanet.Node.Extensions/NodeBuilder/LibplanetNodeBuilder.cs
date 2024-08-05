using System.Reflection;
using Libplanet.Node.Services;
using Microsoft.Extensions.DependencyInjection;

namespace Libplanet.Node.Extensions.NodeBuilder;

public class LibplanetNodeBuilder : ILibplanetNodeBuilder
{
    internal LibplanetNodeBuilder(IServiceCollection services)
    {
        Services = services;
        Services.AddSingleton<PolicyService>();
        Services.AddSingleton<BlockChainService>();
        Services.AddSingleton<IReadChainService, ReadChainService>();
        Services.AddSingleton<TransactionService>();
    }

    public IServiceCollection Services
    {
        get;
    }

    public ILibplanetNodeBuilder WithSolo()
    {
        Services.AddHostedService<SoloProposeService>();
        return this;
    }

    public ILibplanetNodeBuilder WithSwarm()
    {
        return this;
    }

    public ILibplanetNodeBuilder WithValidate() =>
        this;

    public ILibplanetNodeBuilder WithSeed()
    {
        Services.AddSingleton<IBlocksyncSeedService, BlocksyncSeedService>();
        Services.AddSingleton<IConsensusSeedService, ConsensusSeedService>();
        Services.AddHostedService<BlocksyncSeedService>();
        Services.AddHostedService<ConsensusSeedService>();
        return this;
    }
}
