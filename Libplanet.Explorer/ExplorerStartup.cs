#nullable disable
using GraphQL;
using GraphQL.Server;
using GraphQL.SystemTextJson;
using GraphQL.Types;
using Libplanet.Action;
using Libplanet.Explorer.GraphTypes;
using Libplanet.Explorer.Interfaces;
using Libplanet.Explorer.Queries;
using Libplanet.Explorer.Schemas;
using Libplanet.Store;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection.Extensions;
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
            services.AddControllers();

            services.AddSingleton<IBlockChainContext<T>, TU>();
            services.AddSingleton<IStore>(
                services => services.GetService<IBlockChainContext<T>>().Store);

            services.TryAddSingleton<ActionType<T>>();
            services.TryAddSingleton<BlockType<T>>();
            services.TryAddSingleton<TransactionType<T>>();
            services.TryAddSingleton<NodeStateType<T>>();
            services.TryAddSingleton<BlockQuery<T>>();
            services.TryAddSingleton<TransactionQuery<T>>();
            services.TryAddSingleton<ExplorerQuery<T>>();
            services.TryAddSingleton<LibplanetExplorerSchema<T>>();

            services.AddGraphQL()
                    .AddSystemTextJson()
                    .AddGraphTypes(typeof(LibplanetExplorerSchema<T>));
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

            // FIXME: '/graphql' endpoint will be deprecated after
            //        libplanet-explorer-frontend migration.
            app.UseGraphQL<LibplanetExplorerSchema<T>>("/graphql");
            app.UseGraphQL<LibplanetExplorerSchema<T>>("/graphql/explorer");
            app.UseGraphQLPlayground();
        }
    }
}
