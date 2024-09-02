using Libplanet.Node.Services;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

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
        Services.AddSingleton<SwarmService>();
        Services.AddSingleton(s => (ISwarmService)s.GetRequiredService<SwarmService>());
        Services.AddSingleton(s => (IHostedService)s.GetRequiredService<SwarmService>());
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
