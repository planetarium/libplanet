using System.Reflection;
using Libplanet.Node.Extensions;
using Libplanet.Node.Options;
using Libplanet.Node.Services;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Libplanet.Node;

public sealed class NodeApplicationBuilder : INodeApplicationBuilder
{
    private readonly IConfiguration _configuration;
    private readonly List<string> _scopeList = [string.Empty];

    internal NodeApplicationBuilder(IServiceCollection services, IConfiguration configuration)
    {
        Services = services;
        _configuration = configuration;
        LoadPlugins();
        Services.AddSingletonsFromDomain();
    }

    public IServiceCollection Services { get; }

    public string[] Scopes => [.. _scopeList];

    public INodeApplicationBuilder WithSolo()
    {
        Services.AddHostedService<SoloProposeService>();
        return this;
    }

    public INodeApplicationBuilder WithNode()
    {
        Services.AddSingletonsFromDomain(scope: "Node");
        Services.AddOptionsFromDomain(_configuration, scope: "Node");
        _scopeList.Add("Node");
        return this;
    }

    public INodeApplicationBuilder WithValidate() =>
        this;

    public INodeApplicationBuilder WithBlocksyncSeed()
    {
        Services.AddSingletonsFromDomain(scope: SeedOptions.BlocksyncSeed);
        Services.AddOptionsFromDomain(_configuration, scope: SeedOptions.BlocksyncSeed);
        _scopeList.Add(SeedOptions.BlocksyncSeed);
        return this;
    }

    public INodeApplicationBuilder WithConsensusSeed()
    {
        Services.AddSingletonsFromDomain(scope: SeedOptions.ConsensusSeed);
        Services.AddOptionsFromDomain(_configuration, scope: SeedOptions.ConsensusSeed);
        _scopeList.Add(SeedOptions.ConsensusSeed);
        return this;
    }

    private static void LoadPlugins()
    {
        var directory = Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location)
            ?? throw new InvalidOperationException(
                "Failed to get the directory of the current process.");
        var files = Directory.GetFiles(directory, "Libplanet.Node.*.dll");

        foreach (var file in files)
        {
            var filename = Path.GetFileNameWithoutExtension(file);
            try
            {
                var assembly = Assembly.Load(filename);
            }
            catch
            {
                // Ignore the exception.
            }
        }
    }
}
