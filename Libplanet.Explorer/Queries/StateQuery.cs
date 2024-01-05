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
            "worldState",
            arguments: new QueryArguments(
                new QueryArgument<BlockHashType> { Name = "blockHash" },
                new QueryArgument<HashDigestType<SHA256>> { Name = "stateRootHash" }
            ),
            resolve: ResolveWorldState
        );

        Field<NonNullGraphType<AccountStateType>>(
            "accountState",
            arguments: new QueryArguments(
                new QueryArgument<AddressType> { Name = "accountAddress" },
                new QueryArgument<BlockHashType> { Name = "offsetBlockHash" },
                new QueryArgument<HashDigestType<SHA256>> { Name = "offsetStateRootHash" },
                new QueryArgument<HashDigestType<SHA256>> { Name = "accountStateRootHash" }
            ),
            resolve: ResolveAccountState
        );

        Field<NonNullGraphType<ListGraphType<LegacyBencodexValueType>>>(
            "states",
            description: "Retrieves states from the legacy account.",
            arguments: new QueryArguments(
                new QueryArgument<NonNullGraphType<ListGraphType<NonNullGraphType<AddressType>>>>
                    { Name = "addresses" },
                new QueryArgument<BlockHashType> { Name = "offsetBlockHash" },
                new QueryArgument<HashDigestType<SHA256>> { Name = "offsetStateRootHash" }
            ),
            resolve: ResolveStates
        );
        Field<NonNullGraphType<FungibleAssetValueType>>(
            "balance",
            description: "Retrieves balance from the legacy account.",
            arguments: new QueryArguments(
                new QueryArgument<NonNullGraphType<AddressType>> { Name = "owner" },
                new QueryArgument<NonNullGraphType<CurrencyInputType>> { Name = "currency" },
                new QueryArgument<BlockHashType> { Name = "offsetBlockHash" },
                new QueryArgument<HashDigestType<SHA256>> { Name = "offsetStateRootHash" }
            ),
            resolve: ResolveBalance
        );
        Field<FungibleAssetValueType>(
            "totalSupply",
            description: "Retrieves total supply from the legacy account.",
            arguments: new QueryArguments(
                new QueryArgument<NonNullGraphType<CurrencyInputType>> { Name = "currency" },
                new QueryArgument<BlockHashType> { Name = "offsetBlockHash" },
                new QueryArgument<HashDigestType<SHA256>> { Name = "offsetStateRootHash" }
            ),
            resolve: ResolveTotalSupply
        );
        Field<ListGraphType<NonNullGraphType<ValidatorType>>>(
            "validators",
            description: "Retrieves validator set from the legacy account.",
            arguments: new QueryArguments(
                new QueryArgument<BlockHashType> { Name = "offsetBlockHash" },
                new QueryArgument<HashDigestType<SHA256>> { Name = "offsetStateRootHash" }
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
                {
                    return context.Source.GetWorldState(blockHash);
                }

            case (_, srh: not null):
                return context.Source.GetWorldState(stateRootHash);
        }
    }

    private static object ResolveAccountState(IResolveFieldContext<IBlockChainStates> context)
    {
        Address? accountAddress = context.GetArgument<Address?>("accountAddress");
        BlockHash? offsetBlockHash = context.GetArgument<BlockHash?>("offsetBlockHash");
        HashDigest<SHA256>? offsetStateRootHash = context
            .GetArgument<HashDigest<SHA256>?>("offsetStateRootHash");
        HashDigest<SHA256>? accountStateRootHash = context
            .GetArgument<HashDigest<SHA256>?>("accountStateRootHash");

        if (accountStateRootHash is { } accountSrh)
        {
            if (accountAddress is not null
                || offsetBlockHash is not null
                || offsetStateRootHash is not null)
            {
                throw new ExecutionError(
                    "Neither accountAddress, offsetBlockHash nor offsetStateRootHash " +
                    "cannot be specified with the accountStateRootHash."
                );
            }

            return context.Source.GetAccountState(accountSrh);
        }
        else
        {
            if (accountAddress is { } accountAddr)
            {
                switch (blockhash: offsetBlockHash, offsetSrh: offsetStateRootHash)
                {
                    case (blockhash: not null, offsetSrh: not null):
                        throw new ExecutionError(
                            "offsetBlockHash and offsetStateRootHash " +
                            "cannot be specified at the same time."
                        );
                    case (blockhash: null, offsetSrh: null):
                        throw new ExecutionError(
                            "Either offsetBlockHash or offsetStateRootHash must be specified."
                        );
                    case (blockhash: not null, _):
                        {
                            return context.Source
                                .GetWorldState(offsetBlockHash).GetAccount(accountAddr);
                        }

                    case (_, offsetSrh: not null):
                        return context.Source
                            .GetWorldState(offsetStateRootHash).GetAccount(accountAddr);
                }
            }
            else
            {
                throw new ExecutionError(
                    "accountAddress have to be specified with offset."
                );
            }
        }
    }

    private static object? ResolveStates(IResolveFieldContext<IBlockChainStates> context)
    {
        Address[] addresses = context.GetArgument<Address[]>("addresses");
        BlockHash? offsetBlockHash = context.GetArgument<BlockHash?>("offsetBlockHash");
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
                    .GetWorldState(offsetBlockHash)
                    .GetAccount(ReservedAddresses.LegacyAccount)
                    .GetStates(addresses);
            }

            case (_, srh: not null):
                return context.Source
                    .GetWorldState(offsetStateRootHash)
                    .GetAccount(ReservedAddresses.LegacyAccount)
                    .GetStates(addresses);
        }
    }

    private static object ResolveBalance(IResolveFieldContext<IBlockChainStates> context)
    {
        Address owner = context.GetArgument<Address>("owner");
        Currency currency = context.GetArgument<Currency>("currency");
        BlockHash? offsetBlockHash = context.GetArgument<BlockHash?>("offsetBlockHash");
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
                    .GetWorldState(offsetBlockHash)
                    .GetAccount(ReservedAddresses.LegacyAccount)
                    .GetBalance(owner, currency);
            }

            case (_, srh: not null):
                return context.Source
                    .GetWorldState(offsetStateRootHash)
                    .GetAccount(ReservedAddresses.LegacyAccount)
                    .GetBalance(owner, currency);
        }
    }

    private static object? ResolveTotalSupply(IResolveFieldContext<IBlockChainStates> context)
    {
        Currency currency = context.GetArgument<Currency>("currency");
        BlockHash? offsetBlockHash = context.GetArgument<BlockHash?>("offsetBlockHash");
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
                return context.Source
                    .GetWorldState(offsetBlockHash)
                    .GetAccount(ReservedAddresses.LegacyAccount)
                    .GetTotalSupply(currency);
            case (_, srh: not null):
                return context.Source
                    .GetWorldState(offsetStateRootHash)
                    .GetAccount(ReservedAddresses.LegacyAccount)
                    .GetTotalSupply(currency);
        }
    }

    private static object? ResolveValidatorSet(IResolveFieldContext<IBlockChainStates> context)
    {
        BlockHash? offsetBlockHash = context.GetArgument<BlockHash?>("offsetBlockHash");
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
                    .GetWorldState(offsetBlockHash)
                    .GetAccount(ReservedAddresses.LegacyAccount)
                    .GetValidatorSet().Validators;
            case (_, srh: not null):
                return context.Source
                    .GetWorldState(offsetStateRootHash)
                    .GetAccount(ReservedAddresses.LegacyAccount)
                    .GetValidatorSet().Validators;
        }
    }
}
