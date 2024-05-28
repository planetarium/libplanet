using GraphQL.Server;
using Libplanet.Explorer.GraphTypes;
using Libplanet.Explorer.Indexing;
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
    public class ExplorerStartup<TU>
        where TU : class, IBlockChainContext
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

            services.AddSingleton<IBlockChainContext, TU>();
            services.AddSingleton<IStore>(
                provider => provider.GetRequiredService<IBlockChainContext>().Store);
            services.AddSingleton<IBlockChainIndex>(
                provider => provider.GetRequiredService<IBlockChainContext>().Index);

            services.TryAddSingleton<ActionType>();
            services.TryAddSingleton<BlockType>();
            services.TryAddSingleton<TransactionType>();
            services.TryAddSingleton<EvidenceType>();
            services.TryAddSingleton<NodeStateType>();
            services.TryAddSingleton<BlockQuery>();
            services.TryAddSingleton<TransactionQuery>();
            services.TryAddSingleton<EvidenceQuery>();
            services.TryAddSingleton<ExplorerQuery>();
            services.TryAddSingleton<LibplanetExplorerSchema>();

            services.AddGraphQL()
                    .AddSystemTextJson()
                    .AddGraphTypes(typeof(LibplanetExplorerSchema));
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
            app.UseGraphQL<LibplanetExplorerSchema>("/graphql");
            app.UseGraphQL<LibplanetExplorerSchema>("/graphql/explorer");
            app.UseGraphQLPlayground();
        }
    }
}
