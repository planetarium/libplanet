using Libplanet.Node.Options;
using Libplanet.Node.Services;
using Microsoft.Extensions.DependencyInjection;

namespace Libplanet.Node.Tests.Services;

public class SwarmServiceTest
{
    [Fact]
    public void Enable_Test()
    {
        var settings = new Dictionary<string, string?>
        {
            [$"{SwarmOptions.Position}:{nameof(SwarmOptions.IsEnabled)}"] = "true",
        };
        var serviceProvider = TestUtility.CreateServiceProvider(settings);
        var swarmService = serviceProvider.GetRequiredService<ISwarmService>();
        Assert.NotNull(swarmService);
        Assert.False(swarmService.IsRunning);
    }

    [Fact]
    public void Disable_ThrowTest()
    {
        var serviceProvider = TestUtility.CreateServiceProvider();
        Assert.ThrowsAny<Exception>(serviceProvider.GetRequiredService<ISwarmService>);
    }

    [Fact]
    public async Task Start_TestAsync()
    {
        var serviceProvider = CreateServiceProviderWithSwarm();
        var swarmService = serviceProvider.GetRequiredService<ISwarmService>();
        var swarmServiceHost = serviceProvider.GetRequiredService<SwarmService>();

        await Assert.RaisesAnyAsync(
            handler => swarmService.Started += handler,
            handler => swarmService.Started -= handler,
            async () => await swarmServiceHost.StartAsync(default));
        Assert.True(swarmService.IsRunning);
    }

    [Fact]
    public async Task Start_ThrowTestAsync()
    {
        var serviceProvider = CreateServiceProviderWithSwarm();
        var swarmService = serviceProvider.GetRequiredService<ISwarmService>();
        var swarmServiceHost = serviceProvider.GetRequiredService<SwarmService>();

        await swarmServiceHost.StartAsync(default);
        await Assert.ThrowsAsync<InvalidOperationException>(
            async () => await swarmServiceHost.StartAsync(default));
    }

    [Fact]
    public async Task Stop_TestAsync()
    {
        var serviceProvider = CreateServiceProviderWithSwarm();
        var swarmService = serviceProvider.GetRequiredService<ISwarmService>();
        var swarmServiceHost = serviceProvider.GetRequiredService<SwarmService>();
        await swarmServiceHost.StartAsync(default);

        await Assert.RaisesAnyAsync(
            handler => swarmService.Stopped += handler,
            handler => swarmService.Stopped -= handler,
            async () => await swarmServiceHost.StopAsync(default));
        Assert.False(swarmService.IsRunning);
    }

    [Fact]
    public async Task Stop_ThrowTestAsync()
    {
        var serviceProvider = CreateServiceProviderWithSwarm();
        var swarmService = serviceProvider.GetRequiredService<ISwarmService>();
        var swarmServiceHost = serviceProvider.GetRequiredService<SwarmService>();

        await Assert.ThrowsAsync<InvalidOperationException>(
            async () => await swarmServiceHost.StopAsync(default));
    }

    private static IServiceProvider CreateServiceProviderWithSwarm()
    {
        var settings = new Dictionary<string, string?>
        {
            [$"{SwarmOptions.Position}:{nameof(SwarmOptions.IsEnabled)}"] = "true",
        };

        return TestUtility.CreateServiceProvider(settings);
    }
}
