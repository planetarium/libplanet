using Libplanet.Node.Services;
using Microsoft.Extensions.DependencyInjection;

namespace Libplanet.Node.Extensions.NodeBuilder;

public class LibplanetNodeBuilder : ILibplanetNodeBuilder
{
    private readonly List<string> _scopeList = [string.Empty];

    internal LibplanetNodeBuilder(IServiceCollection services)
    {
        Services = services;
    }

    public IServiceCollection Services { get; }

    public string[] Scopes => [.. _scopeList];

    public ILibplanetNodeBuilder WithSolo()
    {
        Services.AddHostedService<SoloProposeService>();
        _scopeList.Add("Solo");
        return this;
    }

    public ILibplanetNodeBuilder WithSwarm()
    {
        Services.AddSingleton<ISwarmService, SwarmService>();
        Services.AddHostedService<SwarmService>();
        _scopeList.Add("Swarm");
        return this;
    }

    public ILibplanetNodeBuilder WithValidator()
    {
        Services.AddSingleton<IValidatorService, ValidatorService>();
        _scopeList.Add("Validator");
        return this;
    }
}
