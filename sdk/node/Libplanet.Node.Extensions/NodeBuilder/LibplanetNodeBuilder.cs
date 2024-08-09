using Libplanet.Node.Services;
using Microsoft.Extensions.DependencyInjection;

namespace Libplanet.Node.Extensions.NodeBuilder;

public class LibplanetNodeBuilder : ILibplanetNodeBuilder
{
    internal LibplanetNodeBuilder(IServiceCollection services)
    {
        Services = services;
        Services.AddSingletonsFromDomain();
    }

    public IServiceCollection Services { get; }

    public ILibplanetNodeBuilder WithSolo()
    {
        Services.AddHostedService<SoloProposeService>();
        return this;
    }

    public ILibplanetNodeBuilder WithNode()
    {
        Services.AddSingletonsFromDomain(scope: "Node");
        return this;
    }

    public ILibplanetNodeBuilder WithValidate() =>
        this;

    public ILibplanetNodeBuilder WithSeed()
    {
        Services.AddSingletonsFromDomain(scope: "Seed");
        return this;
    }
}
