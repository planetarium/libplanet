using System.Collections.Generic;
using System.Threading.Tasks;
using GraphQL;
using GraphQL.Types;
using Libplanet.Store;
using Libplanet.Explorer.GraphTypes;
using Libplanet.Action;
using Microsoft.Extensions.DependencyInjection;
using System;

namespace Libplanet.Explorer.Tests
{
    public static class GraphQLTestUtils
    {
        public static Task<ExecutionResult> ExecuteQueryAsync<TObjectGraphType>(
            string query,
            IDictionary<string, object> userContext = null,
            object source = null)
            where TObjectGraphType : IObjectGraphType, new()
        {
            return ExecuteQueryAsync(
                query,
                new TObjectGraphType(),
                userContext,
                source
            );
        }

        public static Task<ExecutionResult> ExecuteQueryAsync(
            string query,
            IObjectGraphType queryGraphType,
            IDictionary<string, object> userContext = null,
            object source = null
        )
        {
            var documentExecutor = new DocumentExecuter();

            // FIXME these codes are temporarly fix and should be replaced with unified provider.
            // see also: https://github.com/planetarium/libplanet/discussions/2230
            var services = new ServiceCollection();
            services.AddSingleton<BlockType<NullAction>>();
            services.AddSingleton<IStore>(_ => new MemoryStore());
            IServiceProvider serviceProvider = services.BuildServiceProvider();
            var failSafeServiceProvider = new FuncServiceProvider(type =>
                {
                    try
                    {
                        return serviceProvider.GetRequiredService(type);
                    }
                    catch
                    {
                        // mimics previous way. (call parameterless constructor)
                        return Activator.CreateInstance(type);
                    }
                }
            );

            return documentExecutor.ExecuteAsync(
                new ExecutionOptions
                {
                    Query = query,
                    Schema = new Schema(failSafeServiceProvider)
                    {
                        Query = queryGraphType,
                    },
                    UserContext = userContext,
                    Root = source,
                }
            );
        }
    }
}
