using Libplanet.Blockchain;
using Libplanet.Node.Extensions.NodeBuilder;
using Libplanet.Node.Options;
using Libplanet.Node.Services;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;

namespace Libplanet.Node.Extensions;

public static class LibplanetServicesExtensions
{
    public static ILibplanetNodeBuilder AddLibplanetNode(
        this IServiceCollection services,
        IConfiguration configuration)
    {
        SynchronizationContext.SetSynchronizationContext(SynchronizationContext.Current ?? new());
        services.AddSingleton(SynchronizationContext.Current!);
        services.Configure<SoloProposeOption>(configuration.GetSection(SoloProposeOption.Position));

        services.AddOptions<GenesisOptions>()
                .Bind(configuration.GetSection(GenesisOptions.Position));
        services.AddSingleton<IConfigureOptions<GenesisOptions>, GenesisOptionsConfigurator>();

        services.AddOptions<StoreOptions>()
                .Bind(configuration.GetSection(StoreOptions.Position));
        services.AddSingleton<IConfigureOptions<StoreOptions>, StoreOptionsConfigurator>();

        services.AddOptions<SwarmOptions>()
                .Bind(configuration.GetSection(SwarmOptions.Position));
        services.AddSingleton<IConfigureOptions<SwarmOptions>, SwarmOptionsConfigurator>();

        services.AddOptions<ValidatorOptions>()
                .Bind(configuration.GetSection(ValidatorOptions.Position));
        services.AddSingleton<IConfigureOptions<ValidatorOptions>, ValidatorOptionsConfigurator>();

        services.AddSingleton<PolicyService>();
        services.AddSingleton<IBlockChainService, BlockChainService>();
        services.AddSingleton<IReadChainService, ReadChainService>();
        services.AddSingleton<TransactionService>();

        return new LibplanetNodeBuilder(services);
    }
}
