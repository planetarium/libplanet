using Libplanet.Node.API.Services;
using Libplanet.Node.Extensions;
using Libplanet.Node.Options.Schema;
using Microsoft.AspNetCore.Server.Kestrel.Core;

SynchronizationContext.SetSynchronizationContext(new());
var builder = WebApplication.CreateBuilder(args);

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

// Additional configuration is required to successfully run gRPC on macOS.
// For instructions on how to configure Kestrel and gRPC clients on macOS,
// visit https://go.microsoft.com/fwlink/?linkid=2099682

// Add services to the container.
builder.Services.AddGrpc();
builder.Services.AddGrpcReflection();
var libplanetBuilder = builder.Services.AddLibplanetNode(builder.Configuration)
    .WithSwarm()
    .WithValidator();

var app = builder.Build();
var handlerMessage = """
    Communication with gRPC endpoints must be made through a gRPC client. To learn how to
    create a client, visit: https://go.microsoft.com/fwlink/?linkid=2086909
    """;
var schema = await OptionsSchemaBuilder.GetSchemaAsync(default);

// Configure the HTTP request pipeline.
app.MapGrpcService<BlockChainGrpcService>();
app.MapGrpcService<SchemaGrpcService>();
app.MapGet("/", () => handlerMessage);
app.MapGet("/schema", () => schema);

if (builder.Environment.IsDevelopment())
{
    app.MapGrpcReflectionService().AllowAnonymous();
}

await app.RunAsync();
