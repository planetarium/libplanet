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
        Field<NonNullGraphType<WorldStateType>>(
            "worldState",
            arguments: new QueryArguments(
                new QueryArgument<NonNullGraphType<IdGraphType>> { Name = "offsetBlockHash" }
            ),
            resolve: ResolveWorldState
        );
        Field<NonNullGraphType<AccountStateType>>(
            "accountState",
            arguments: new QueryArguments(
                new QueryArgument<NonNullGraphType<AddressType>> { Name = "accountAddress" },
                new QueryArgument<NonNullGraphType<IdGraphType>> { Name = "offsetBlockHash" }
            ),
            resolve: ResolveAccountState
        );
        Field<NonNullGraphType<ListGraphType<BencodexValueType>>>(
            "states",
            arguments: new QueryArguments(
                new QueryArgument<NonNullGraphType<ListGraphType<NonNullGraphType<AddressType>>>>
                { Name = "addresses" },
                new QueryArgument<NonNullGraphType<AddressType>> { Name = "accountAddress" },
                new QueryArgument<IdGraphType> { Name = "offsetBlockHash" },
                new QueryArgument<HashDigestSHA256Type> { Name = "offsetStateRootHash" }
            ),
            resolve: ResolveStates
        );
        Field<NonNullGraphType<FungibleAssetValueType>>(
            "balance",
            arguments: new QueryArguments(
                new QueryArgument<NonNullGraphType<AddressType>> { Name = "owner" },
                new QueryArgument<NonNullGraphType<CurrencyInputType>> { Name = "currency" },
                new QueryArgument<IdGraphType> { Name = "offsetBlockHash" },
                new QueryArgument<HashDigestSHA256Type> { Name = "offsetStateRootHash" }
            ),
            resolve: ResolveBalance
        );
        Field<FungibleAssetValueType>(
            "totalSupply",
            arguments: new QueryArguments(
                new QueryArgument<NonNullGraphType<CurrencyInputType>> { Name = "currency" },
                new QueryArgument<IdGraphType> { Name = "offsetBlockHash" },
                new QueryArgument<HashDigestSHA256Type> { Name = "offsetStateRootHash" }
            ),
            resolve: ResolveTotalSupply
        );
        Field<ListGraphType<NonNullGraphType<ValidatorType>>>(
            "validators",
            arguments: new QueryArguments(
                new QueryArgument<IdGraphType> { Name = "offsetBlockHash" },
                new QueryArgument<HashDigestSHA256Type> { Name = "offsetStateRootHash" }
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

        return context.Source.ChainStates.GetWorldState(offset);
    }

    private static object ResolveAccountState(
        IResolveFieldContext<(IBlockChainStates ChainStates, IBlockPolicy Policy)> context)
    {
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

        return context.Source.ChainStates.GetAccountState(accountAddress, offset);
    }

    private static object ResolveStates(
        IResolveFieldContext<(IBlockChainStates ChainStates, IBlockPolicy Policy)> context)
    {
        Address[] addresses = context.GetArgument<Address[]>("addresses");
        Address accountAddress = context.GetArgument<Address>("accountAddress");
        string? offsetBlockHash = context.GetArgument<string?>("offsetBlockHash");
        HashDigest<SHA256>? offsetStateRootHash = context
            .GetArgument<HashDigest<SHA256>?>("offsetStateRootHash");

        switch (blockhash: offsetBlockHash, srh: offsetStateRootHash)
        {
            case (blockhash: not null, srh: not null):
                throw new ExecutionError(
                    "offsetBlockHash and offsetStateRootHash cannot be specified at the same time."
                );
            case (blockhash: null, srh: null):
                throw new ExecutionError(
                    "Either offsetBlockHash or offsetStateRootHash must be specified."
                );
            case (blockhash: not null, _):
            {
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

            case (_, srh: not null):
                return context.Source.ChainStates.GetStates(addresses, offsetStateRootHash);
        }
    }

    private static object ResolveBalance(
        IResolveFieldContext<(IBlockChainStates ChainStates, IBlockPolicy Policy)> context)
    {
        Address owner = context.GetArgument<Address>("owner");
        Currency currency = context.GetArgument<Currency>("currency");
        string? offsetBlockHash = context.GetArgument<string?>("offsetBlockHash");
        HashDigest<SHA256>? offsetStateRootHash = context
            .GetArgument<HashDigest<SHA256>?>("offsetStateRootHash");

        switch (blockhash: offsetBlockHash, srh: offsetStateRootHash)
        {
            case (blockhash: not null, srh: not null):
                throw new ExecutionError(
                    "offsetBlockHash and offsetStateRootHash cannot be specified at the same time."
                );
            case (blockhash: null, srh: null):
                throw new ExecutionError(
                    "Either offsetBlockHash or offsetStateRootHash must be specified."
                );
            case (blockhash: not null, _):
            {
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

                return context.Source.ChainStates.GetBalance(owner, currency, offset);
            }

            case (_, srh: not null):
                return context.Source.ChainStates.GetAccountState(
                    offsetStateRootHash
                ).GetBalance(owner, currency);
        }
    }

    private static object? ResolveTotalSupply(
        IResolveFieldContext<(IBlockChainStates ChainStates, IBlockPolicy Policy)> context)
    {
        Currency currency = context.GetArgument<Currency>("currency");
        string? offsetBlockHash = context.GetArgument<string?>("offsetBlockHash");
        HashDigest<SHA256>? offsetStateRootHash = context
            .GetArgument<HashDigest<SHA256>?>("offsetStateRootHash");

        if (!currency.TotalSupplyTrackable)
        {
            string msg =
                $"The total supply value of the currency {currency} is not trackable because it"
                + " is a legacy untracked currency which might have been established before"
                + " the introduction of total supply tracking support.";
            throw new ExecutionError(msg);
        }

        switch (blockhash: offsetBlockHash, srh: offsetStateRootHash)
        {
            case (blockhash: not null, srh: not null):
                throw new ExecutionError(
                    "offsetBlockHash and offsetStateRootHash cannot be specified at the same time."
                );
            case (blockhash: null, srh: null):
                throw new ExecutionError(
                    "Either offsetBlockHash or offsetStateRootHash must be specified."
                );
            case (blockhash: not null, _):
            {
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

                return context.Source.ChainStates.GetTotalSupply(currency, offset);
            }

            case (_, srh: not null):
                return context.Source.ChainStates.GetWorldState(offsetStateRootHash)
                    .GetAccount(ReservedAddresses.LegacyAccount)
                    .GetTotalSupply(currency);
        }
    }

    private static object? ResolveValidatorSet(
        IResolveFieldContext<(IBlockChainStates ChainStates, IBlockPolicy Policy)> context)
    {
        string? offsetBlockHash = context.GetArgument<string?>("offsetBlockHash");
        HashDigest<SHA256>? offsetStateRootHash = context
            .GetArgument<HashDigest<SHA256>?>("offsetStateRootHash");

        switch (blockhash: offsetBlockHash, srh: offsetStateRootHash)
        {
            case (blockhash: not null, srh: not null):
                throw new ExecutionError(
                    "offsetBlockHash and offsetStateRootHash cannot be specified at the same time."
                );
            case (blockhash: null, srh: null):
                throw new ExecutionError(
                    "Either offsetBlockHash or offsetStateRootHash must be specified."
                );
            case (blockhash: not null, _):
            {
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

            case (_, srh: not null):
                return context.Source.ChainStates.GetWorldState(offsetStateRootHash)
                    .GetAccount(ReservedAddresses.LegacyAccount)
                    .GetValidatorSet()
                    .Validators;
        }
    }
}
