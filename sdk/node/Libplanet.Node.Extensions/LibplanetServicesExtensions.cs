using Libplanet.Node.Extensions.NodeBuilder;
using Libplanet.Node.Options;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

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
        return services.AddLibplanetNode();
    }

    private static ILibplanetNodeBuilder AddLibplanetNode(this IServiceCollection services)
        => new LibplanetNodeBuilder(services);
}
