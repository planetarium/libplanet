using System.Collections.Generic;
using System.Threading.Tasks;
using GraphQL;
using GraphQL.Types;
using Libplanet.Store;
using Libplanet.Explorer.GraphTypes;
using Libplanet.Explorer.Schemas;
using Libplanet.Action;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Concurrent;
using GraphQL.DI;

namespace Libplanet.Explorer.Tests
{
    public static class GraphQLTestUtils
    {
        private static readonly ConcurrentDictionary<IObjectGraphType, ISchema> CachedSchemaMap =
            new(ReferenceEqualityComparer.Instance);

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

            // A IGraphType instance can be used as a query root type only once.
            if (!CachedSchemaMap.TryGetValue(queryGraphType, out ISchema schema))
            {
                IConfigureSchema[] configurations =
                {
                    ConfigureLibplanetExplorerSchema.Instance,
                };
                schema = new Schema(failSafeServiceProvider, configurations)
                {
                    Query = queryGraphType,
                };

                CachedSchemaMap[queryGraphType] = schema;
            }

            return documentExecutor.ExecuteAsync(
                new ExecutionOptions
                {
                    Query = query,
                    Schema = schema,
                    UserContext = userContext,
                    Root = source,
                }
            );
        }
    }
}
