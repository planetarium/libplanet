using Libplanet.Node.Options;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Libplanet.Node.Extensions;

public static class LibplanetServicesExtensions
{
    public static INodeApplicationBuilder AddLibplanetNode(
        this IServiceCollection services,
        IConfiguration configuration)
    {
        SynchronizationContext.SetSynchronizationContext(SynchronizationContext.Current ?? new());
        services.AddSingleton(SynchronizationContext.Current!);
        services.Configure<SoloProposeOption>(configuration.GetSection(SoloProposeOption.Position));
        services.AddOptionsFromDomain(configuration);

        var builder = new NodeApplicationBuilder(services, configuration);
        services.AddSingleton<INodeApplicationBuilder>(builder);

        return builder;
    }
}
