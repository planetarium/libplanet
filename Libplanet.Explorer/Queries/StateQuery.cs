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
            resolve: ResolveBalance
        );
        Field<FungibleAssetValueType>(
            "totalSupply",
            arguments: new QueryArguments(
                new QueryArgument<NonNullGraphType<ByteStringType>> { Name = "currencyHash" },
                new QueryArgument<NonNullGraphType<IdGraphType>> { Name = "offsetBlockHash" }
            ),
            resolve: ResolveTotalSupply
        );
        Field<ListGraphType<NonNullGraphType<ValidatorType>>>(
            "validators",
            arguments: new QueryArguments(
                new QueryArgument<NonNullGraphType<IdGraphType>> { Name = "offsetBlockHash" }
            ),
            resolve: ResolveValidatorSet
        );
    }

    private static Currency GetNativeTokenFromHash(
        IResolveFieldContext<(IBlockChainStates<T> ChainStates, IBlockPolicy<T> Policy)> context,
        string paramName
    )
    {
        byte[] currencyHashBytes = context.GetArgument<byte[]>(paramName);
        HashDigest<SHA1> currencyHash;
        try
        {
            currencyHash = new HashDigest<SHA1>(currencyHashBytes);
        }
        catch (Exception e)
        {
            throw new ExecutionError(paramName + " must consist of 20 bytes.\n" + e.Message, e);
        }

        IImmutableSet<Currency> nativeTokens = context.Source.Policy.NativeTokens;
        try
        {
            return nativeTokens.First(token => token.Hash.Equals(currencyHash));
        }
        catch (InvalidOperationException e)
        {
            throw new ExecutionError(
                paramName + " must be a native token.  Native tokens are:\n\n" +
                    string.Join("\n", nativeTokens.Select(t => $"{t.Hash} (${t.Ticker})")),
                e
            );
        }
    }

    private static object ResolveBalance(
        IResolveFieldContext<(IBlockChainStates<T> ChainStates, IBlockPolicy<T> Policy)> context)
    {
        Address owner = context.GetArgument<Address>("owner");
        Currency currency = GetNativeTokenFromHash(context, "currencyHash");
        string offsetBlockHash = context.GetArgument<string>("offsetBlockHash");

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

        return context.Source.ChainStates.GetBalance(
            owner,
            currency,
            offset,
            FungibleAssetStateCompleters<T>.Reject
        );
    }

    private static object? ResolveTotalSupply(
        IResolveFieldContext<(IBlockChainStates<T> ChainStates, IBlockPolicy<T> Policy)> context)
    {
        Currency currency = GetNativeTokenFromHash(context, "currencyHash");
        string offsetBlockHash = context.GetArgument<string>("offsetBlockHash");

        if (!currency.TotalSupplyTrackable)
        {
            string msg =
                $"The total supply value of the currency {currency} is not trackable because it"
                + " is a legacy untracked currency which might have been established before"
                + " the introduction of total supply tracking support.";
            throw new ExecutionError(msg);
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

        return context.Source.ChainStates.GetTotalSupply(
            currency,
            offset,
            TotalSupplyStateCompleters<T>.Reject
        );
    }

    private static object? ResolveValidatorSet(
        IResolveFieldContext<(IBlockChainStates<T> ChainStates, IBlockPolicy<T> Policy)> context)
    {
        string offsetBlockHash = context.GetArgument<string>("offsetBlockHash");
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

        return context.Source.ChainStates.GetValidatorSet(
            offset,
            ValidatorSetStateCompleters<T>.Reject
        ).Validators;
    }
}
