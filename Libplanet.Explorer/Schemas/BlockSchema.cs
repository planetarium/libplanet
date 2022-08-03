#nullable disable
using System;
using GraphQL.Types;
using Libplanet.Action;
using Libplanet.Explorer.Queries;
using Microsoft.Extensions.DependencyInjection;

namespace Libplanet.Explorer.Schemas
{
    public class BlockSchema<T> : Schema
        where T : IAction, new()
    {
        public BlockSchema(IServiceProvider serviceProvider)
            : base(serviceProvider)
        {
            Query = serviceProvider.GetRequiredService<BlockQuery<T>>();
        }
    }
}