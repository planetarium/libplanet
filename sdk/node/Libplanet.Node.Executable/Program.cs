using Libplanet.Node.API.Explorer;
using Libplanet.Node.API.Services;
using Libplanet.Node.Extensions;
using Microsoft.AspNetCore.Server.Kestrel.Core;

var builder = WebApplication.CreateBuilder(args);
builder.Logging.AddConsole();
if (builder.Environment.IsDevelopment())
{
    builder.WebHost.ConfigureKestrel(options =>
    {
        // Setup a HTTP/2 endpoint without TLS.
        options.ListenLocalhost(5259, o => o.Protocols =
            HttpProtocols.Http1AndHttp2);
        options.ListenLocalhost(5260, o => o.Protocols =
            HttpProtocols.Http2);
    });

    builder.Services.AddEndpointsApiExplorer();
    builder.Services.AddSwaggerGen();
    builder.Services.AddAuthorization();
    builder.Services.AddAuthentication("Bearer").AddJwtBearer();
}

builder.Services.AddGrpc();
builder.Services.AddGrpcReflection();
builder.Services.AddLibplanetNode(builder.Configuration);

if (builder.IsExplorerEnabled())
{
    builder.Services.AddNodeExplorer();
}

var handlerMessage = """
    Communication with gRPC endpoints must be made through a gRPC client. To learn how to
    create a client, visit: https://go.microsoft.com/fwlink/?linkid=2086909
    """;
using var app = builder.Build();

app.MapGrpcService<BlockchainGrpcServiceV1>();
app.MapGrpcService<SchemaGrpcServiceV1>();
app.MapGet("/", () => handlerMessage);
if (builder.Environment.IsDevelopment())
{
    app.MapGrpcReflectionService().AllowAnonymous();

    app.UseSwagger();
    app.UseSwaggerUI();
}

app.MapSchemaBuilder("/v1/schema");
app.MapGet("/schema", context => Task.Run(() => context.Response.Redirect("/v1/schema")));

if (builder.IsExplorerEnabled())
{
    app.UseNodeExplorer();
}

await app.RunAsync();
