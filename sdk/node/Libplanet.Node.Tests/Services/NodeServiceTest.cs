using Libplanet.Node.Extensions;
using Libplanet.Node.Options;
using Libplanet.Node.Services;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Logging.Abstractions;

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
        services.AddOptionsConfigurator<SwarmOptions, SwarmOptionsConfigurator>();
        services.AddOptionsConfigurator<GenesisOptions, GenesisOptionsConfigurator>();
        services.AddOptionsConfigurator<StoreOptions, StoreOptionsConfigurator>();
        services.AddOptionsValidator<SwarmOptions, SwarmOptionsValidator>();
        services.AddOptionsValidator<GenesisOptions, GenesisOptionsValidator>();
        services.AddOptionsValidator<StoreOptions, StoreOptionsValidator>();
        services.AddSingleton<PolicyService>();
        services.AddSingleton<IBlockChainService, BlockChainService>();
        services.AddSingleton<SwarmService>();
        return services;
    }
}
