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
    : ObjectGraphType<(IBlockChainStates ChainStates, IBlockPolicy Policy)>
    where T : IAction, new()
{
    public StateQuery()
    {
        Name = "StateQuery";
        Field<NonNullGraphType<ListGraphType<BencodexValueType>>>(
            "states",
            arguments: new QueryArguments(
                new QueryArgument<NonNullGraphType<ListGraphType<NonNullGraphType<AddressType>>>>
                    { Name = "addresses" },
                new QueryArgument<NonNullGraphType<IdGraphType>> { Name = "offsetBlockHash" }
            ),
            resolve: ResolveStates
        );
        Field<NonNullGraphType<FungibleAssetValueType>>(
            "balance",
            arguments: new QueryArguments(
                new QueryArgument<NonNullGraphType<AddressType>> { Name = "owner" },
                new QueryArgument<NonNullGraphType<CurrencyInputType>> { Name = "currency" },
                new QueryArgument<NonNullGraphType<IdGraphType>> { Name = "offsetBlockHash" }
            ),
            resolve: ResolveBalance
        );
        Field<FungibleAssetValueType>(
            "totalSupply",
            arguments: new QueryArguments(
                new QueryArgument<NonNullGraphType<CurrencyInputType>> { Name = "currency" },
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

    private static object ResolveStates(
        IResolveFieldContext<(IBlockChainStates ChainStates, IBlockPolicy Policy)> context)
    {
        Address[] addresses = context.GetArgument<Address[]>("addresses");
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

        return context.Source.ChainStates.GetStates(
            addresses,
            offset
        );
    }

    private static object ResolveBalance(
        IResolveFieldContext<(IBlockChainStates ChainStates, IBlockPolicy Policy)> context)
    {
        Address owner = context.GetArgument<Address>("owner");
        Currency currency = context.GetArgument<Currency>("currency");
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
            offset
        );
    }

    private static object? ResolveTotalSupply(
        IResolveFieldContext<(IBlockChainStates ChainStates, IBlockPolicy Policy)> context)
    {
        Currency currency = context.GetArgument<Currency>("currency");
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
            offset
        );
    }

    private static object? ResolveValidatorSet(
        IResolveFieldContext<(IBlockChainStates ChainStates, IBlockPolicy Policy)> context)
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

        return context.Source.ChainStates.GetValidatorSet(offset).Validators;
    }
}
