#nullable enable
using Libplanet.Action;
using Libplanet.Explorer.Controllers;
using Libplanet.Explorer.Interfaces;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace Libplanet.Explorer
{
    public class ExplorerStartup<T, TU>
        where T : IAction, new()
        where TU : class, IBlockChainContext<T>
    {
        public ExplorerStartup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(options =>
                options.AddPolicy(
                    "AllowAllOrigins",
                    builder =>
                        builder.AllowAnyOrigin()
                            .AllowAnyMethod()
                            .AllowAnyHeader()
                )
            );
            services.AddControllers()
                .ConfigureApplicationPartManager(p =>
                    p.FeatureProviders.Add(
                        new GenericControllerFeatureProvider<T>()))
                .AddNewtonsoftJson();
            services.AddSingleton<IBlockChainContext<T>, TU>();
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseStaticFiles();
            app.UseCors("AllowAllOrigins");
            app.UseRouting();
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
