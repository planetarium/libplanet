using Libplanet.Node.Services;
using Microsoft.Extensions.DependencyInjection;

namespace Libplanet.Node.Extensions.NodeBuilder;

public class LibplanetNodeBuilder : ILibplanetNodeBuilder
{
    internal LibplanetNodeBuilder(IServiceCollection services)
    {
        Services = services;
        Services.AddSingleton<BlockChainService>();
        Services.AddSingleton<IReadChainService, ReadChainService>();
    }

    public IServiceCollection Services
    {
        get;
    }

    public ILibplanetNodeBuilder WithSwarm() =>
        this;

    public ILibplanetNodeBuilder WithValidate() =>
        this;
}
