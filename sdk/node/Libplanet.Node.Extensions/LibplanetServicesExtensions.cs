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
        services.AddOptions<GenesisOptions>()
                .Bind(configuration.GetSection(GenesisOptions.Position));
        services.AddSingleton<IConfigureOptions<GenesisOptions>, GenesisOptionsConfigurator>();
        services.AddSingleton<IValidateOptions<GenesisOptions>, GenesisOptionsValidator>();

        services.AddOptions<StoreOptions>()
                .Bind(configuration.GetSection(StoreOptions.Position));
        services.AddSingleton<IConfigureOptions<StoreOptions>, StoreOptionsConfigurator>();

        services.AddOptions<SwarmOptions>()
                .Bind(configuration.GetSection(SwarmOptions.Position));
        services.AddSingleton<IConfigureOptions<SwarmOptions>, SwarmOptionsConfigurator>();
        services.AddSingleton<IValidateOptions<SwarmOptions>, SwarmOptionsValidator>();

        services.AddOptions<ValidatorOptions>()
                .Bind(configuration.GetSection(ValidatorOptions.Position));
        services.AddSingleton<IConfigureOptions<ValidatorOptions>, ValidatorOptionsConfigurator>();
        services.AddSingleton<IValidateOptions<ValidatorOptions>, ValidatorOptionsValidator>();

        services.AddOptions<SoloOptions>()
                .Bind(configuration.GetSection(SoloOptions.Position));
        services.AddSingleton<IConfigureOptions<SoloOptions>, SoloOptionsConfigurator>();

        services.AddSingleton<PolicyService>();
        services.AddSingleton<IBlockChainService, BlockChainService>();
        services.AddSingleton<IReadChainService, ReadChainService>();
        services.AddSingleton<TransactionService>();

        var serviceProvider = services.BuildServiceProvider();
        var soloOptions = serviceProvider.GetRequiredService<IOptions<SoloOptions>>();
        var swarmOptions = serviceProvider.GetRequiredService<IOptions<SwarmOptions>>();
        var validatorOptions = serviceProvider.GetRequiredService<IOptions<ValidatorOptions>>();
        var nodeBuilder = new LibplanetNodeBuilder(services);

        if (soloOptions.Value.IsEnabled)
        {
            nodeBuilder.WithSolo();
        }

        if (swarmOptions.Value.IsEnabled)
        {
            nodeBuilder.WithSwarm();
        }

        if (validatorOptions.Value.IsEnabled)
        {
            nodeBuilder.WithValidator();
        }

        return nodeBuilder;
    }
}
