using Libplanet.Action;
using Libplanet.Explorer.Controllers;
using Libplanet.Explorer.Interfaces;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

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
            services.AddMvc()
                .ConfigureApplicationPartManager(p =>
                    p.FeatureProviders.Add(
                        new GenericControllerFeatureProvider<T>()));
            services.AddSingleton<IBlockChainContext<T>, TU>();
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseStaticFiles();
            app.UseCors("AllowAllOrigins");
            app.UseMvc();
        }
    }
}
