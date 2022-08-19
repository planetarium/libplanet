using System;
using System.Collections.Immutable;
using System.Linq;
using System.Security.Cryptography;
using GraphQL;
using GraphQL.Types;
using Libplanet.Action;
using Libplanet.Assets;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
using Libplanet.Blocks;
using Libplanet.Explorer.GraphTypes;

namespace Libplanet.Explorer.Queries;

public class StateQuery<T>
    : ObjectGraphType<(IBlockChainStates<T> ChainStates, IBlockPolicy<T> Policy)>
    where T : IAction, new()
{
    public StateQuery()
    {
        Name = "StateQuery";
        Field<NonNullGraphType<FungibleAssetValueType>>(
            "balance",
            arguments: new QueryArguments(
                new QueryArgument<NonNullGraphType<AddressType>> { Name = "owner" },
                new QueryArgument<NonNullGraphType<ByteStringType>> { Name = "currencyHash" },
                new QueryArgument<NonNullGraphType<IdGraphType>> { Name = "offsetBlockHash" }
            ),
            resolve: context =>
            {
                Address owner = context.GetArgument<Address>("owner");
                byte[] currencyHashBytes =
                    context.GetArgument<byte[]>("currencyHash");
                string offsetBlockHash = context.GetArgument<string>("offsetBlockHash");

                HashDigest<SHA1> currencyHash;
                try
                {
                    currencyHash = new HashDigest<SHA1>(currencyHashBytes);
                }
                catch (Exception e)
                {
                    throw new ExecutionError(
                        "currencyHash must consist of 20 bytes.\n" + e.Message,
                        e
                    );
                }

                BlockHash offset;
                try
                {
                    offset = BlockHash.FromString(offsetBlockHash);
                }
                catch (Exception e)
                {
                    throw new ExecutionError(
                        "offsetBlockHash must consist of hexadecimal digits.\n" + e.Message,
                        e
                    );
                }

                Currency currency;
                IImmutableSet<Currency> nativeTokens = context.Source.Policy.NativeTokens;
                try
                {
                    currency = nativeTokens
                        .First(token => token.Hash.Equals(currencyHash));
                }
                catch (InvalidOperationException e)
                {
                    throw new ExecutionError(
                        "currencyHash must be a native token.  Native tokens are:\n\n" +
                        string.Join("\n", nativeTokens.Select(token => token.Hash.ToString())),
                        e
                    );
                }

                return context.Source.ChainStates.GetBalance(
                    owner,
                    currency,
                    offset,
                    FungibleAssetStateCompleters<T>.Reject
                );
            }
        );
    }
}
