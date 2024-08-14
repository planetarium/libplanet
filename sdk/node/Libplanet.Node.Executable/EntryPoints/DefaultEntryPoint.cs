using Libplanet.Node.DependencyInjection;
using Libplanet.Node.Options.Schema;
using Libplanet.Node.Services;
using Microsoft.AspNetCore.Server.Kestrel.Core;

namespace Libplanet.Node.API.EntryPoints;

[Singleton<IApplicationEntryPoint>]
[Singleton<IApplicationBuilderEntryPoint>]
internal sealed class DefaultEntryPoint
    : IApplicationEntryPoint, IApplicationBuilderEntryPoint
{
    private const string HandlerMessage = """
        Communication with gRPC endpoints must be made through a gRPC client. To learn how to
        create a client, visit: https://go.microsoft.com/fwlink/?linkid=2086909
        """;

    public void Run(WebApplicationBuilder builder)
    {
        builder.Logging.AddConsole();

        if (builder.Environment.IsDevelopment())
        {
            builder.WebHost.ConfigureKestrel(options =>
            {
                // Setup a HTTP/2 endpoint without TLS.
                options.ListenLocalhost(5259, o => o.Protocols =
                    HttpProtocols.Http1AndHttp2);
            });
        }
    }

    public async Task RunAsync(WebApplication app, CancellationToken cancellationToken)
    {
        var serviceProvider = app.Services;
        var schema = await OptionsSchemaBuilder.GetSchemaAsync(cancellationToken);
        var actionEvaluationService
            = serviceProvider.GetRequiredService<IActionEvaluationService>();
        app.MapGet("/", () => HandlerMessage);
        app.MapGet("/schema", () => schema);
        app.MapGet("/actions", () => JsonUtility.Serialize(actionEvaluationService.Actions));
    }
}
