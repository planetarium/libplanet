using System;
using System.Linq;
using GraphQL.Types;
using Libplanet.Action;
using Libplanet.Blockchain.Policies;

namespace Libplanet.Explorer.GraphTypes;

public class BlockPolicyType<T> : ObjectGraphType<IBlockPolicy<T>>
    where T : IAction, new()
{
    public BlockPolicyType()
    {
        Name = "BlockPolicy";
        Field<NonNullGraphType<ListGraphType<NonNullGraphType<CurrencyType>>>>(
            "nativeTokens",
            "A fixed set of native tokens, which are supported by the blockchain as " +
                "first-class assets.",
            resolve: context => context.Source.NativeTokens
                .OrderBy(c => c.Ticker, StringComparer.InvariantCultureIgnoreCase)
                .ToList()
        );
    }
}
