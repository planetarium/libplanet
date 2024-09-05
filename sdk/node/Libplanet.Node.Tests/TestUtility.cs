using Libplanet.Node.Extensions;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Logging.Abstractions;

namespace Libplanet.Node.Tests;

internal static class TestUtility
{
    public static IServiceProvider CreateServiceProvider()
    {
        var services = new ServiceCollection();
        var configuration = new ConfigurationBuilder().Build();
        services.AddSingleton<ILoggerFactory, NullLoggerFactory>();
        services.AddLogging();
        services.AddLibplanetNode(configuration);
        return services.BuildServiceProvider();
    }

    public static IServiceProvider CreateServiceProvider(IConfiguration configuration)
    {
        var services = new ServiceCollection();
        services.AddSingleton<ILoggerFactory, NullLoggerFactory>();
        services.AddLogging();
        services.AddLibplanetNode(configuration);
        return services.BuildServiceProvider();
    }

    public static IServiceProvider CreateServiceProvider(
        IReadOnlyDictionary<string, string?> settings)
    {
        var configuration = CreateConfiguration(settings);
        return CreateServiceProvider(configuration);
    }

    public static IConfiguration CreateConfiguration(IReadOnlyDictionary<string, string?> settings)
    {
        return new ConfigurationBuilder().AddInMemoryCollection(settings).Build();
    }
}
