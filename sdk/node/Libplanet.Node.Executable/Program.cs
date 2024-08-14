using Libplanet.Node.API.Services;
using Libplanet.Node.Extensions;
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
            HttpProtocols.Http2);
    });
}

// Additional configuration is required to successfully run gRPC on macOS.
// For instructions on how to configure Kestrel and gRPC clients on macOS,
// visit https://go.microsoft.com/fwlink/?linkid=2099682

// Add services to the container.
builder.Services.AddGrpc();
builder.Services.AddGrpcReflection();
var libplanetBuilder = builder.Services.AddLibplanetNode(builder.Configuration)
    .WithSeed()
    .WithNode();

var app = builder.Build();
var handlerMessage = """
    Communication with gRPC endpoints must be made through a gRPC client. To learn how to
    create a client, visit: https://go.microsoft.com/fwlink/?linkid=2086909
    """;

// Configure the HTTP request pipeline.
app.MapGrpcServiceFromDomain(libplanetBuilder.Scopes);
app.MapGet("/", () => handlerMessage);

if (builder.Environment.IsDevelopment())
{
    app.MapGrpcReflectionService().AllowAnonymous();
}

await app.RunAsync();
