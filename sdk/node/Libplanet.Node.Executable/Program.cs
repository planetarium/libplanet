using Libplanet.Node.API.Services;
using Libplanet.Node.Extensions;
using Libplanet.Node.Options.Schema;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Server.Kestrel.Core;

var builder = WebHost.CreateDefaultBuilder(args);
var assemblies = new string[]
{
    "Libplanet.Node.Swagger",
    "Libplanet.Node.Explorer",
};
builder.UseSetting(WebHostDefaults.HostingStartupAssembliesKey, string.Join(';', assemblies));
builder.ConfigureLogging(logging =>
{
    logging.AddConsole();
});
builder.ConfigureKestrel((context, options) =>
{
    if (context.HostingEnvironment.IsDevelopment())
    {
        // Setup a HTTP/2 endpoint without TLS.
        options.ListenLocalhost(5259, o => o.Protocols =
            HttpProtocols.Http1AndHttp2);
    }
});
builder.ConfigureServices((context, services) =>
{
    services.AddGrpc();
    services.AddGrpcReflection();
    services.AddLibplanetNode(context.Configuration);
});
builder.Configure((context, app) =>
{
    app.UseRouting();
    app.UseEndpoints(endPoint =>
    {
        var handlerMessage = """
            Communication with gRPC endpoints must be made through a gRPC client. To learn how to
            create a client, visit: https://go.microsoft.com/fwlink/?linkid=2086909
            """;
        string? schema = null;
        endPoint.MapGet(string.Empty, async context =>
        {
            await context.Response.WriteAsync(handlerMessage);
        });
        endPoint.MapGet("/schema", async context =>
        {
            schema ??= await OptionsSchemaBuilder.GetSchemaAsync(context.RequestAborted);
            await context.Response.WriteAsync(schema);
        });
        endPoint.MapGrpcService<BlockChainGrpcService>();
        endPoint.MapGrpcService<SchemaGrpcService>();
        if (context.HostingEnvironment.IsDevelopment())
        {
            endPoint.MapGrpcReflectionService().AllowAnonymous();
        }
    });
});

using var app = builder.Build();
await app.RunAsync();
