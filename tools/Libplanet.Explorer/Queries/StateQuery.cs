using System.Security.Cryptography;
using GraphQL;
using GraphQL.Types;
using Libplanet.Action.State;
using Libplanet.Common;
using Libplanet.Crypto;
using Libplanet.Explorer.GraphTypes;
using Libplanet.Types.Assets;
using Libplanet.Types.Blocks;

namespace Libplanet.Explorer.Queries;

public class StateQuery : ObjectGraphType<IBlockChainStates>
{
    public StateQuery()
    {
        Name = "StateQuery";

        Field<NonNullGraphType<WorldStateType>>(
            "world",
            arguments: new QueryArguments(
                new QueryArgument<BlockHashType> { Name = "blockHash" },
                new QueryArgument<HashDigestType<SHA256>> { Name = "stateRootHash" }
            ),
            resolve: ResolveWorldState
        );

        Field<NonNullGraphType<ListGraphType<BencodexValueType>>>(
            "states",
            description: "Retrieves states from the legacy account.",
            arguments: new QueryArguments(
                new QueryArgument<NonNullGraphType<ListGraphType<NonNullGraphType<AddressType>>>>
                    { Name = "addresses" },
                new QueryArgument<IdGraphType> { Name = "offsetBlockHash" },
                new QueryArgument<HashDigestSHA256Type> { Name = "offsetStateRootHash" }
            ),
            resolve: ResolveStates
        );
        Field<NonNullGraphType<FungibleAssetValueType>>(
            "balance",
            description: "Retrieves balance from the legacy account.",
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
            description: "Retrieves total supply from the legacy account.",
            arguments: new QueryArguments(
                new QueryArgument<NonNullGraphType<CurrencyInputType>> { Name = "currency" },
                new QueryArgument<IdGraphType> { Name = "offsetBlockHash" },
                new QueryArgument<HashDigestSHA256Type> { Name = "offsetStateRootHash" }
            ),
            resolve: ResolveTotalSupply
        );
        Field<ListGraphType<NonNullGraphType<ValidatorType>>>(
            "validators",
            description: "Retrieves validator set from the legacy account.",
            arguments: new QueryArguments(
                new QueryArgument<IdGraphType> { Name = "offsetBlockHash" },
                new QueryArgument<HashDigestSHA256Type> { Name = "offsetStateRootHash" }
            ),
            resolve: ResolveValidatorSet
        );
    }

    private static object ResolveWorldState(IResolveFieldContext<IBlockChainStates> context)
    {
        BlockHash? blockHash = context.GetArgument<BlockHash?>("blockHash");
        HashDigest<SHA256>? stateRootHash =
            context.GetArgument<HashDigest<SHA256>?>("stateRootHash");

        switch (blockhash: blockHash, srh: stateRootHash)
        {
            case (blockhash: not null, srh: not null):
                throw new ExecutionError(
                    "blockHash and stateRootHash cannot be specified at the same time."
                );
            case (blockhash: null, srh: null):
                throw new ExecutionError(
                    "Either blockHash or stateRootHash must be specified."
                );
            case (blockhash: not null, _):
                return context.Source.GetWorldState((BlockHash)blockHash);
            case (_, srh: not null):
                return context.Source.GetWorldState(stateRootHash ?? default);
        }
    }

    private static object? ResolveStates(IResolveFieldContext<IBlockChainStates> context)
    {
        Address[] addresses = context.GetArgument<Address[]>("addresses");
        BlockHash? offsetBlockHash =
            context.GetArgument<string?>("offsetBlockHash") is { } blockHashString
                ? BlockHash.Parse(blockHashString)
                : null;
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
                return context.Source
                    .GetWorldState((BlockHash)offsetBlockHash)
                    .GetAccountState(ReservedAddresses.LegacyAccount)
                    .GetStates(addresses);
            }

            case (_, srh: not null):
                return context.Source
                    .GetWorldState(offsetStateRootHash ?? default)
                    .GetAccountState(ReservedAddresses.LegacyAccount)
                    .GetStates(addresses);
        }
    }

    private static object ResolveBalance(IResolveFieldContext<IBlockChainStates> context)
    {
        Address owner = context.GetArgument<Address>("owner");
        Currency currency = context.GetArgument<Currency>("currency");
        BlockHash? offsetBlockHash =
            context.GetArgument<string?>("offsetBlockHash") is { } blockHashString
                ? BlockHash.Parse(blockHashString)
                : null;
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
                return context.Source
                    .GetWorldState((BlockHash)offsetBlockHash)
                    .GetBalance(owner, currency);
            }

            case (_, srh: not null):
                return context.Source
                    .GetWorldState(offsetStateRootHash ?? default)
                    .GetBalance(owner, currency);
        }
    }

    private static object? ResolveTotalSupply(IResolveFieldContext<IBlockChainStates> context)
    {
        Currency currency = context.GetArgument<Currency>("currency");
        BlockHash? offsetBlockHash =
            context.GetArgument<string?>("offsetBlockHash") is { } blockHashString
                ? BlockHash.Parse(blockHashString)
                : null;
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
                return context.Source
                    .GetWorldState((BlockHash)offsetBlockHash)
                    .GetTotalSupply(currency);
            case (_, srh: not null):
                return context.Source
                    .GetWorldState(offsetStateRootHash ?? default)
                    .GetTotalSupply(currency);
        }
    }

    private static object? ResolveValidatorSet(IResolveFieldContext<IBlockChainStates> context)
    {
        BlockHash? offsetBlockHash =
            context.GetArgument<string?>("offsetBlockHash") is { } blockHashString
                ? BlockHash.Parse(blockHashString)
                : null;
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
                return context.Source
                    .GetWorldState((BlockHash)offsetBlockHash)
                    .GetValidatorSet().Validators;
            case (_, srh: not null):
                return context.Source
                    .GetWorldState(offsetStateRootHash ?? default)
                    .GetValidatorSet().Validators;
        }
    }
}
