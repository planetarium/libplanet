using System;
using System.Security.Cryptography;
using GraphQL;
using GraphQL.Types;
using Libplanet.Action.State;
using Libplanet.Blockchain.Policies;
using Libplanet.Common;
using Libplanet.Crypto;
using Libplanet.Explorer.GraphTypes;
using Libplanet.Types.Assets;
using Libplanet.Types.Blocks;

namespace Libplanet.Explorer.Queries;

public class StateQuery
    : ObjectGraphType<(IBlockChainStates ChainStates, IBlockPolicy Policy)>
{
    public StateQuery()
    {
        Name = "StateQuery";
        Field<NonNullGraphType<BencodexValueType>>(
            "worldState",
            arguments: new QueryArguments(
                new QueryArgument<NonNullGraphType<IdGraphType>> { Name = "offsetBlockHash" }
            ),
            resolve: ResolveWorldState
        );
        Field<NonNullGraphType<BencodexValueType>>(
            "accountState",
            arguments: new QueryArguments(
                new QueryArgument<NonNullGraphType<AddressType>> { Name = "address" },
                new QueryArgument<IdGraphType> { Name = "stateRootHash" },
                new QueryArgument<IdGraphType> { Name = "offsetBlockHash" }
            ),
            resolve: ResolveAccountState
        );
        Field<NonNullGraphType<ListGraphType<BencodexValueType>>>(
            "states",
            arguments: new QueryArguments(
                new QueryArgument<NonNullGraphType<ListGraphType<NonNullGraphType<AddressType>>>>
                { Name = "addresses" },
                new QueryArgument<NonNullGraphType<AddressType>>
                { Name = "accountAddress" },
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

    private static object ResolveWorldState(
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

        return context.Source.ChainStates.GetBlockWorldState(offset);
    }

    private static object ResolveAccountState(
        IResolveFieldContext<(IBlockChainStates ChainStates, IBlockPolicy Policy)> context)
    {
        Address address = context.GetArgument<Address>("address");
        string stateRootHash = context.GetArgument<string>("stateRootHash");
        string offsetBlockHash = context.GetArgument<string>("offsetBlockHash");

        if (!(stateRootHash is null ^ offsetBlockHash is null))
        {
            throw new GraphQL.ExecutionError(
                "The parameters stateRootHash and offsetBlockHash are mutually exclusive; " +
                "give only one at a time.");
        }

        if (stateRootHash is string stateRootHashNotNull)
        {
            HashDigest<SHA256> srh = new HashDigest<SHA256>(
                ByteUtil.ParseHex(stateRootHashNotNull));
            return context.Source.ChainStates.GetAccountState(address, srh);
        }

        if (offsetBlockHash is string offsetBlockHashNotNull)
        {
            BlockHash offset;
            try
            {
                offset = BlockHash.FromString(offsetBlockHashNotNull);
            }
            catch (Exception e)
            {
                throw new ExecutionError(
                    "offsetBlockHash must consist of hexadecimal digits.\n" + e.Message,
                    e
                );
            }

            return context.Source.ChainStates.GetBlockAccountState(address, offset);
        }

        throw new GraphQL.ExecutionError("Unexpected block query");
    }

    private static object ResolveStates(
        IResolveFieldContext<(IBlockChainStates ChainStates, IBlockPolicy Policy)> context)
    {
        Address[] addresses = context.GetArgument<Address[]>("addresses");
        Address accountAddress = context.GetArgument<Address>("accountAddress");
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
            accountAddress,
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
