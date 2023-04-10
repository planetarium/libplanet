using System.Collections.Generic;
using System.Threading.Tasks;
using GraphQL;
using GraphQL.Types;
using Libplanet.Explorer.GraphTypes;
using Microsoft.Extensions.DependencyInjection;
using System;
using Libplanet.Action;
using Libplanet.Explorer.Interfaces;
using Libplanet.Explorer.Tests.Queries;

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
            System.Action addContext = source switch
            {
                IBlockChainContext<NullAction> context => () => { services.AddSingleton(context); },
                IBlockChainContext<PolymorphicAction<SimpleAction>> context => () => { services.AddSingleton(context); },
                _ => () =>
                {
                    services.AddSingleton<IBlockChainContext<NullAction>>(
                        new MockBlockChainContext<NullAction>());
                }
            };
            addContext();
            services.AddSingleton<BlockType<NullAction>>();
            services.AddSingleton<BlockType<PolymorphicAction<SimpleAction>>>();
            services.AddSingleton<TransactionType<NullAction>>();
            services.AddSingleton<TransactionType<PolymorphicAction<SimpleAction>>>();
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
