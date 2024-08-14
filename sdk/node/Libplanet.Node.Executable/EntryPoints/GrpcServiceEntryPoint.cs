using Libplanet.Node.API.Extensions;
using Libplanet.Node.API.Options;
using Libplanet.Node.DependencyInjection;
using Microsoft.Extensions.Options;

namespace Libplanet.Node.API.EntryPoints;

[Singleton<IApplicationBuilderEntryPoint>]
[Singleton<IApplicationEntryPoint>]
internal sealed class GrpcServiceEntryPoint(
    IOptions<GrpcOptions> options, IWebHostEnvironment environment)
    : IApplicationBuilderEntryPoint, IApplicationEntryPoint
{
    private readonly GrpcOptions _options = options.Value;

    public Task RunAsync(WebApplication app, CancellationToken cancellationToken)
    {
        var serviceProvider = app.Services;
        var nodeBuilder = serviceProvider.GetRequiredService<INodeApplicationBuilder>();
        app.MapGrpcServiceFromDomain(nodeBuilder.Scopes);
        if (environment.IsDevelopment())
        {
            app.MapGrpcReflectionService().AllowAnonymous();
        }

        return Task.CompletedTask;
    }

    public void Run(WebApplicationBuilder builder)
    {
        if (_options.IsEnabled)
        {
            builder.Services.AddGrpc();

            if (environment.IsDevelopment())
            {
                builder.Services.AddGrpcReflection();
            }
        }
    }
}
