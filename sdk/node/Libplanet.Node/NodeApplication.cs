using Libplanet.Node.DependencyInjection;
using Libplanet.Node.Extensions;
using Libplanet.Node.Options;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;

namespace Libplanet.Node;

public sealed class NodeApplication : IAsyncDisposable
{
    private readonly WebApplicationBuilder _builder;
    private WebApplication? _app;

    public NodeApplication(string[] args)
    {
        SynchronizationContext.SetSynchronizationContext(new());
        var builder = WebApplication.CreateBuilder(args);
        var nodeBuilder = builder.Services.AddLibplanetNode(builder.Configuration);
        var serviceProvider = builder.Services.BuildServiceProvider();
        var serviceEntryPoints
            = serviceProvider.GetRequiredService<IEnumerable<IApplicationBuilderEntryPoint>>();
        var nodeOptions = serviceProvider.GetRequiredService<IOptions<NodeOptions>>();
        var seedOptionsMonitor = serviceProvider.GetRequiredService<IOptionsMonitor<SeedOptions>>();

        foreach (var serviceEntryPoint in serviceEntryPoints)
        {
            serviceEntryPoint.Run(builder);
        }

        if (nodeOptions.Value.IsEnabled)
        {
            nodeBuilder.WithNode();
        }

        if (seedOptionsMonitor.Get(SeedOptions.BlocksyncSeed).IsEnabled)
        {
            nodeBuilder.WithBlocksyncSeed();
        }

        if (seedOptionsMonitor.Get(SeedOptions.ConsensusSeed).IsEnabled)
        {
            nodeBuilder.WithConsensusSeed();
        }

        _builder = builder;
    }

    public async ValueTask DisposeAsync()
    {
        if (_app is not null)
        {
            await _app.DisposeAsync();
            _app = null;
        }
    }

    public async Task RunAsync()
    {
        _app = _builder.Build();
        await RunEntryPointAsync(_app, default);
        await _app.RunAsync();
    }

    private static async Task RunEntryPointAsync(
        WebApplication app, CancellationToken cancellationToken)
    {
        var serviceProvider = app.Services;
        var applicationEntryPoints
            = serviceProvider.GetRequiredService<IEnumerable<IApplicationEntryPoint>>();

        foreach (var entryPoint in applicationEntryPoints)
        {
            await entryPoint.RunAsync(app, cancellationToken);
        }
    }
}
