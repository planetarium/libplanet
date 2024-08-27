using Libplanet.Node.API.Services;
using Libplanet.Node.Extensions;
using Libplanet.Node.Options.Schema;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Server.Kestrel.Core;
using Serilog;
using Serilog.Events;

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

    // Logging setting
    var loggerConfig = new LoggerConfiguration();
    loggerConfig = loggerConfig.MinimumLevel.Information();
    loggerConfig = loggerConfig
        .MinimumLevel.Override("Microsoft", LogEventLevel.Information)
        .Enrich.FromLogContext()
        .WriteTo.Console();

    Log.Logger = loggerConfig.CreateLogger();
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
//     string pluginPath = "/Users/bin_bash_shell/Workspaces/planetarium/NineChronicles/" +
//     "lib9c/Lib9c.NCActionLoader/bin/Debug/net6.0/Lib9c.NCActionLoader.dll";
// string actionLoaderType = "Lib9c.NCActionLoader.NineChroniclesActionLoader";
// string blockPolicyType = "Lib9c.NCActionLoader.NineChroniclesPolicyActionRegistry";
// IActionLoader actionLoader = PluginLoader.LoadActionLoader(pluginPath, actionLoaderType);
// IPolicyActionsRegistry policyActionRegistry =
//     PluginLoader.LoadPolicyActionRegistry(pluginPath, blockPolicyType);

// Libplanet.Crypto.CryptoConfig.CryptoBackend = new Secp256k1CryptoBackend<SHA256>();

// builder.Services.AddSingleton<IActionLoader>(actionLoader);
// builder.Services.AddSingleton<IPolicyActionsRegistry>(policyActionRegistry);

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
