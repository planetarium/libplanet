using System;
using GraphQL.Types;
using Libplanet.Explorer.Mutations;
using Libplanet.Explorer.Queries;
using Microsoft.Extensions.DependencyInjection;

namespace Libplanet.Explorer.Schemas
{
    public class LibplanetExplorerSchema : Schema
    {
        public LibplanetExplorerSchema(IServiceProvider serviceProvider)
            : base(serviceProvider)
        {
            Query = serviceProvider.GetRequiredService<ExplorerQuery>();
        }
    }
}
