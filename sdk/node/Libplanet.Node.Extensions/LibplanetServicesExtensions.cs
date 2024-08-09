using Libplanet.Node.Extensions.NodeBuilder;
using Libplanet.Node.Options;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Libplanet.Node.Extensions;

public static class LibplanetServicesExtensions
{
    public static ILibplanetNodeBuilder AddLibplanetNode(
        this IServiceCollection services)
    {
        return new LibplanetNodeBuilder(services);
    }

    public static ILibplanetNodeBuilder AddLibplanetNode(
        this IServiceCollection services,
        IConfiguration configuration)
    {
        SynchronizationContext.SetSynchronizationContext(SynchronizationContext.Current ?? new());
        services.AddSingleton(SynchronizationContext.Current!);
        services.AddOptions<StoreOptions>()
            .Bind(configuration.GetSection(StoreOptions.Position))
            .ValidateDataAnnotations();
        services.Configure<SoloProposeOption>(configuration.GetSection(SoloProposeOption.Position));
        services.AddOptions<GenesisOptions>()
            .Bind(configuration.GetSection(GenesisOptions.Position))
            .ValidateDataAnnotations();
        services.AddOptions<StoreOptions>(SeedOptions.BlocksyncSeed)
            .Bind(configuration.GetSection(SeedOptions.BlocksyncSeed))
            .ValidateDataAnnotations();
        services.AddOptions<StoreOptions>(SeedOptions.ConsensusSeed)
            .Bind(configuration.GetSection(SeedOptions.ConsensusSeed))
            .ValidateDataAnnotations();
        services.AddOptions<NodeOptions>()
            .Bind(configuration.GetSection(NodeOptions.Position))
            .ValidateDataAnnotations();

        return AddLibplanetNode(services);
    }
}
