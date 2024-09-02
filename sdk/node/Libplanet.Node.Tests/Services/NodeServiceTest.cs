using Libplanet.Node.Options;
using Libplanet.Node.Services;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Logging.Abstractions;
using Microsoft.Extensions.Options;

namespace Libplanet.Node.Tests.Services;

public class NodeServiceTest
{
    [Fact]
    public void Create_Test()
    {
        var services = CreateServices();
        var serviceProvider = services.BuildServiceProvider();
        var nodeService = serviceProvider.GetRequiredService<SwarmService>();

        Assert.False(nodeService.IsRunning);
    }

    [Fact]
    public async Task Start_TestAsync()
    {
        var services = CreateServices();
        var serviceProvider = services.BuildServiceProvider();
        var nodeService = serviceProvider.GetRequiredService<SwarmService>();

        await Assert.RaisesAnyAsync(
            handler => nodeService.Started += handler,
            handler => nodeService.Started -= handler,
            async () => await nodeService.StartAsync(default));
        Assert.True(nodeService.IsRunning);
    }

    [Fact]
    public async Task Start_ThrowTestAsync()
    {
        var services = CreateServices();
        var serviceProvider = services.BuildServiceProvider();
        var nodeService = serviceProvider.GetRequiredService<SwarmService>();
        await nodeService.StartAsync(default);
        await Assert.ThrowsAsync<InvalidOperationException>(
            async () => await nodeService.StartAsync(default));
    }

    [Fact]
    public async Task Stop_TestAsync()
    {
        var services = CreateServices();
        var serviceProvider = services.BuildServiceProvider();
        var nodeService = serviceProvider.GetRequiredService<SwarmService>();
        await nodeService.StartAsync(default);

        await Assert.RaisesAnyAsync(
            handler => nodeService.Stopped += handler,
            handler => nodeService.Stopped -= handler,
            async () => await nodeService.StopAsync(default));
        Assert.False(nodeService.IsRunning);
    }

    [Fact]
    public async Task Stop_ThrowTestAsync()
    {
        var services = CreateServices();
        var serviceProvider = services.BuildServiceProvider();
        var nodeService = serviceProvider.GetRequiredService<SwarmService>();
        await Assert.ThrowsAsync<InvalidOperationException>(
            async () => await nodeService.StopAsync(default));
    }

    private static ServiceCollection CreateServices()
    {
        var services = new ServiceCollection();
        services.AddLogging(configure => configure.AddProvider(NullLoggerProvider.Instance));
        services.AddOptions<GenesisOptions>();
        services.AddSingleton<IConfigureOptions<GenesisOptions>, GenesisOptionsConfigurator>();
        services.AddOptions<StoreOptions>();
        services.AddSingleton<IConfigureOptions<StoreOptions>, StoreOptionsConfigurator>();
        services.AddOptions<SwarmOptions>();
        services.AddSingleton<IConfigureOptions<SwarmOptions>, SwarmOptionsConfigurator>();
        services.AddSingleton<PolicyService>();
        services.AddSingleton<IBlockChainService, BlockChainService>();
        services.AddSingleton<SwarmService>();
        services.AddSingleton<StoreService>();
        services.AddSingleton(s => (IStoreService)s.GetRequiredService<StoreService>());
        return services;
    }
}
