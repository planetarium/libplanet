using Libplanet.Node.Extensions.NodeBuilder;
using Libplanet.Node.Options;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;

namespace Libplanet.Node.Extensions;

public static class LibplanetServicesExtensions
{
    public static ILibplanetNodeBuilder AddLibplanetNode(
        this IServiceCollection services,
        Action<LibplanetOption> configure)
    {
        services.Configure(configure);
        return AddLibplanetNode(services);
    }

    public static ILibplanetNodeBuilder AddLibplanetNode(
        this IServiceCollection services,
        IConfiguration configuration)
    {
        services.Configure<StoreOption>(configuration.GetSection(StoreOption.Position));
        services.Configure<SoloProposeOption>(configuration.GetSection(SoloProposeOption.Position));
        services.Configure<GenesisOptions>(configuration.GetSection(GenesisOptions.Position));
        services.Configure<SeedOptions>(
            SeedOptions.BlocksyncSeed, configuration.GetSection(SeedOptions.BlocksyncSeed));
        services.Configure<SeedOptions>(
            SeedOptions.ConsensusSeed, configuration.GetSection(SeedOptions.ConsensusSeed));

        services.AddSingleton<IConfigureOptions<SeedOptions>, SeedOptionsConfigurator>();
        services.AddSingleton<IConfigureNamedOptions<SeedOptions>, SeedOptionsConfigurator>();
        return AddLibplanetNode(services);
    }

    private static ILibplanetNodeBuilder AddLibplanetNode(this IServiceCollection services)
        => new LibplanetNodeBuilder(services);
}
