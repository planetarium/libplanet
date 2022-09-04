using System;
using GraphQL.Types;
using Libplanet.Action;
using Libplanet.Explorer.Queries;
using Microsoft.Extensions.DependencyInjection;

namespace Libplanet.Explorer.Schemas
{
    public class LibplanetExplorerSchema<T> : Schema
        where T : IAction, new()
    {
        public LibplanetExplorerSchema(IServiceProvider serviceProvider)
            : base(serviceProvider)
        {
            Query = serviceProvider.GetRequiredService<ExplorerQuery<T>>();
        }
    }
}
