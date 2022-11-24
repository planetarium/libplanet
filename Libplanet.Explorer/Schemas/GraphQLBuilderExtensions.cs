using GraphQL;
using GraphQL.DI;
using Libplanet.Action;

namespace Libplanet.Explorer.Schemas;

public static class GraphQLBuilderExtensions
{
    public static IGraphQLBuilder AddLibplanetExplorerSchema<T>(this IGraphQLBuilder builder)
        where T : IAction, new()
    =>
        builder
            .AddSystemTextJson()
            .AddSchema<LibplanetExplorerSchema<T>>()
            .AddGraphTypes(typeof(LibplanetExplorerSchema<T>).Assembly);
}
