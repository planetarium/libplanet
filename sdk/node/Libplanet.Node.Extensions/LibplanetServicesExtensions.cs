using Libplanet.Node.Extensions.NodeBuilder;
using Libplanet.Node.Options;
using Libplanet.Node.Options.Schema;
using Libplanet.Node.Services;
using Microsoft.AspNetCore.Builder;
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

        services.AddOptions<ActionOptions>()
                .Bind(configuration.GetSection(ActionOptions.Position));

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
        services.AddSingleton<StoreService>();
        services.AddSingleton(s => (IStoreService)s.GetRequiredService<StoreService>());
        services.AddSingleton<ActionService>();
        services.AddSingleton(s => (IActionService)s.GetRequiredService<ActionService>());
        services.AddSingleton<RendererService>();
        services.AddSingleton(s => (IRendererService)s.GetRequiredService<RendererService>());
        services.AddSingleton<IBlockChainService, BlockChainService>();
        services.AddSingleton<IReadChainService, ReadChainService>();
        services.AddSingleton<TransactionService>();

        var nodeBuilder = new LibplanetNodeBuilder(services);

        if (configuration.IsOptionsEnabled(SoloOptions.Position))
        {
            nodeBuilder.WithSolo();
        }

        if (configuration.IsOptionsEnabled(SwarmOptions.Position))
        {
            nodeBuilder.WithSwarm();
        }

        if (configuration.IsOptionsEnabled(ValidatorOptions.Position))
        {
            nodeBuilder.WithValidator();
        }

        return nodeBuilder;
    }

    public static IApplicationBuilder MapSchemaBuilder(this IApplicationBuilder app, string pattern)
    {
        app.UseRouting();
        app.UseEndpoints(endPoint =>
        {
            string? schema = null;
            endPoint.MapGet(pattern, async () =>
            {
                schema ??= await OptionsSchemaBuilder.GetSchemaAsync(default);
                return schema;
            });
        });

        return app;
    }

    public static bool IsOptionsEnabled(
        this IConfiguration configuration, string name)
        => configuration.GetValue<bool>($"{name}:IsEnabled");

    public static bool IsOptionsEnabled(
        this IConfiguration configuration, string name, string propertyName)
    {
        var key = $"{name}:{propertyName}";
        return configuration.GetValue<bool>(key);
    }
}
