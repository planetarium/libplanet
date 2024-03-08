using Libplanet.Store.Remote.Client;
using Libplanet.Store.Trie;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace Libplanet.Store.Remote.Server
{
    public class Startup
    {
        public void ConfigureServices(IServiceCollection services)
        {
            if(services.Any(service => service.ServiceType == typeof(IKeyValueStore)))
            {
                services.AddSingleton<IKeyValueStore, RemoteKeyValueStore>();
            }

            services.AddGrpc(o => o.EnableDetailedErrors = true);
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseRouting();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapGrpcService<RemoteKeyValueService>();
            });
        }
    }
}
