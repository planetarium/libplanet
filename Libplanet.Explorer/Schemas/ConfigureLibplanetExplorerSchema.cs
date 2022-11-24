using System;
using GraphQL;
using GraphQL.DI;
using GraphQL.Types;
using Libplanet.Explorer.GraphTypes;

namespace Libplanet.Explorer.Schemas;

public sealed class ConfigureLibplanetExplorerSchema : IConfigureSchema
{
    public static readonly ConfigureLibplanetExplorerSchema Instance = new();

    public void Configure(ISchema schema, IServiceProvider serviceProvider)
    {
        schema.RegisterTypeMapping<Address, AddressType>();
    }
}
