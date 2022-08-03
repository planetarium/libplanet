using System;
using GraphQL.Types;
using Libplanet.Action;
using Libplanet.Explorer.Queries;
using Microsoft.Extensions.DependencyInjection;

namespace Libplanet.Explorer.Schemas
{
    public class TransactionSchema<T> : Schema
        where T : IAction, new()
    {
        public TransactionSchema(IServiceProvider serviceProvider)
            : base(serviceProvider)
        {
            Query = serviceProvider.GetRequiredService<TransactionQuery<T>>();
        }
    }
}