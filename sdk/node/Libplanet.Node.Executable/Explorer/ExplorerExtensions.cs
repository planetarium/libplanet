using Libplanet.Explorer;
using Libplanet.Node.Extensions;

namespace Libplanet.Node.API.Explorer;

public static class ExplorerExtensions
{
    public static IServiceCollection AddNodeExplorer(
        this IServiceCollection services)
    {
        var serviceProvider = services.BuildServiceProvider();

        services.AddSingleton<BlockChainContext>();
        services.AddSingleton<ExplorerStartup<BlockChainContext>>();
        serviceProvider = services.BuildServiceProvider();
        var startUp
            = serviceProvider.GetRequiredService<ExplorerStartup<BlockChainContext>>();
        startUp.ConfigureServices(services);

        return services;
    }

    public static IApplicationBuilder UseNodeExplorer(this IApplicationBuilder builder)
    {
        var serviceProvider = builder.ApplicationServices;
        var environment = serviceProvider.GetRequiredService<IWebHostEnvironment>();
        var startUp = serviceProvider.GetService<ExplorerStartup<BlockChainContext>>();
        startUp?.Configure(builder, environment);

        return builder;
    }

    public static bool IsExplorerEnabled(this IHostApplicationBuilder builder)
        => builder.Configuration.IsOptionsEnabled(ExplorerOptions.Position);
}
