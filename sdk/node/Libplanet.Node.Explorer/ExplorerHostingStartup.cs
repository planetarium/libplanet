using Libplanet.Explorer;
using Libplanet.Node.Explorer;
using Libplanet.Node.Explorer.Options;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;

[assembly: HostingStartup(typeof(ExplorerHostingStartup))]

namespace Libplanet.Node.Explorer;

internal sealed class ExplorerHostingStartup : IHostingStartup, IStartupFilter
{
    public void Configure(IWebHostBuilder builder)
    {
        builder.ConfigureServices((context, services) =>
        {
            services.AddOptions<ExplorerOptions>()
                    .Bind(context.Configuration.GetSection(ExplorerOptions.Position));

            var serviceProvider = services.BuildServiceProvider();
            var options = serviceProvider.GetRequiredService<IOptions<ExplorerOptions>>().Value;

            if (options.IsEnabled)
            {
                services.AddSingleton<BlockChainContext>();
                services.AddSingleton<ExplorerStartup<BlockChainContext>>();
                serviceProvider = services.BuildServiceProvider();
                var startUp
                    = serviceProvider.GetRequiredService<ExplorerStartup<BlockChainContext>>();
                startUp.ConfigureServices(services);
                services.AddSingleton<IStartupFilter>(this);
            }
        });
    }

    public Action<IApplicationBuilder> Configure(Action<IApplicationBuilder> next)
    {
        return builder =>
        {
            var serviceProvider = builder.ApplicationServices;
            var environment = serviceProvider.GetRequiredService<IWebHostEnvironment>();
            var startUp = serviceProvider.GetService<ExplorerStartup<BlockChainContext>>();
            startUp?.Configure(builder, environment);
            next(builder);
        };
    }
}
