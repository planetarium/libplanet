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
                new QueryArgument<IdGraphType> { Name = "offsetBlockHash" },
                new QueryArgument<HashDigestSHA256Type> { Name = "offsetStateRootHash" }
            ),
            resolve: ResolveWorldState
        );
        Field<NonNullGraphType<AccountStateType>>(
            "accountState",
            arguments: new QueryArguments(
                new QueryArgument<AddressType> { Name = "accountAddress" },
                new QueryArgument<IdGraphType> { Name = "offsetBlockHash" },
                new QueryArgument<HashDigestSHA256Type> { Name = "offsetStateRootHash" },
                new QueryArgument<HashDigestSHA256Type> { Name = "accountStateRootHash" }
            ),
            resolve: ResolveAccountState
        );
        Field<BencodexValueType>(
            "state",
            arguments: new QueryArguments(
                new QueryArgument<NonNullGraphType<AddressType>> { Name = "address" },
                new QueryArgument<AddressType> { Name = "accountAddress" },
                new QueryArgument<IdGraphType> { Name = "offsetBlockHash" },
                new QueryArgument<HashDigestSHA256Type> { Name = "offsetStateRootHash" },
                new QueryArgument<HashDigestSHA256Type> { Name = "accountStateRootHash" }
            ),
            resolve: ResolveState
        );
        Field<NonNullGraphType<FungibleAssetValueType>>(
            "balance",
            arguments: new QueryArguments(
                new QueryArgument<NonNullGraphType<AddressType>> { Name = "owner" },
                new QueryArgument<NonNullGraphType<CurrencyInputType>> { Name = "currency" },
                new QueryArgument<AddressType> { Name = "accountAddress" },
                new QueryArgument<IdGraphType> { Name = "offsetBlockHash" },
                new QueryArgument<HashDigestSHA256Type> { Name = "offsetStateRootHash" },
                new QueryArgument<HashDigestSHA256Type> { Name = "accountStateRootHash" }
            ),
            resolve: ResolveBalance
        );
        Field<FungibleAssetValueType>(
            "totalSupply",
            arguments: new QueryArguments(
                new QueryArgument<NonNullGraphType<CurrencyInputType>> { Name = "currency" },
                new QueryArgument<AddressType> { Name = "accountAddress" },
                new QueryArgument<IdGraphType> { Name = "offsetBlockHash" },
                new QueryArgument<HashDigestSHA256Type> { Name = "offsetStateRootHash" },
                new QueryArgument<HashDigestSHA256Type> { Name = "accountStateRootHash" }
            ),
            resolve: ResolveTotalSupply
        );
        Field<ListGraphType<NonNullGraphType<ValidatorType>>>(
            "validators",
            arguments: new QueryArguments(
                new QueryArgument<AddressType> { Name = "accountAddress" },
                new QueryArgument<IdGraphType> { Name = "offsetBlockHash" },
                new QueryArgument<HashDigestSHA256Type> { Name = "offsetStateRootHash" },
                new QueryArgument<HashDigestSHA256Type> { Name = "accountStateRootHash" }
            ),
            resolve: ResolveValidatorSet
        );
    }

    private static object ResolveWorldState(
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

                    return context.Source.ChainStates.GetWorldState(offset);
                }

            case (_, srh: not null):
                return context.Source.ChainStates.GetWorldState(offsetStateRootHash);
        }
    }

    private static object ResolveAccountState(
        IResolveFieldContext<(IBlockChainStates ChainStates, IBlockPolicy Policy)> context)
    {
        Address? accountAddress = context.GetArgument<Address?>("accountAddress");
        string? offsetBlockHash = context.GetArgument<string?>("offsetBlockHash");
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

            return context.Source.ChainStates.GetAccountState(accountSrh);
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
                            BlockHash offset;
                            try
                            {
                                offset = BlockHash.FromString(offsetBlockHash);
                            }
                            catch (Exception e)
                            {
                                throw new ExecutionError(
                                    "offsetBlockHash must consist of hexadecimal digits.\n"
                                    + e.Message,
                                    e
                                );
                            }

                            return context.Source.ChainStates
                                .GetWorldState(offset).GetAccount(accountAddr);
                        }

                    case (_, offsetSrh: not null):
                        return context.Source.ChainStates
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

    private static object? ResolveState(
        IResolveFieldContext<(IBlockChainStates ChainStates, IBlockPolicy Policy)> context)
    {
        Address address = context.GetArgument<Address>("address");
        Address? accountAddress = context.GetArgument<Address?>("accountAddress");
        string? offsetBlockHash = context.GetArgument<string?>("offsetBlockHash");
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

            return context.Source.ChainStates
                .GetAccountState(accountSrh)
                .GetState(address);
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
                            BlockHash offset;
                            try
                            {
                                offset = BlockHash.FromString(offsetBlockHash);
                            }
                            catch (Exception e)
                            {
                                throw new ExecutionError(
                                    "offsetBlockHash must consist of hexadecimal digits.\n"
                                    + e.Message,
                                    e
                                );
                            }

                            return context.Source.ChainStates
                                .GetWorldState(offset)
                                .GetAccount(accountAddr)
                                .GetState(address);
                        }

                    case (_, offsetSrh: not null):
                        return context.Source.ChainStates
                            .GetWorldState(offsetStateRootHash)
                            .GetAccount(accountAddr)
                            .GetState(address);
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

    private static object ResolveBalance(
        IResolveFieldContext<(IBlockChainStates ChainStates, IBlockPolicy Policy)> context)
    {
        Address owner = context.GetArgument<Address>("owner");
        Currency currency = context.GetArgument<Currency>("currency");
        Address? accountAddress = context.GetArgument<Address?>("accountAddress");
        string? offsetBlockHash = context.GetArgument<string?>("offsetBlockHash");
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

            return context.Source.ChainStates
                .GetAccountState(accountSrh)
                .GetBalance(owner, currency);
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
                            BlockHash offset;
                            try
                            {
                                offset = BlockHash.FromString(offsetBlockHash);
                            }
                            catch (Exception e)
                            {
                                throw new ExecutionError(
                                    "offsetBlockHash must consist of hexadecimal digits.\n"
                                    + e.Message,
                                    e
                                );
                            }

                            return context.Source.ChainStates
                                .GetWorldState(offset)
                                .GetAccount(accountAddr)
                                .GetBalance(owner, currency);
                        }

                    case (_, offsetSrh: not null):
                        return context.Source.ChainStates
                            .GetWorldState(offsetStateRootHash)
                            .GetAccount(accountAddr)
                            .GetBalance(owner, currency);
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

    private static object? ResolveTotalSupply(
        IResolveFieldContext<(IBlockChainStates ChainStates, IBlockPolicy Policy)> context)
    {
        Currency currency = context.GetArgument<Currency>("currency");
        Address? accountAddress = context.GetArgument<Address?>("accountAddress");
        string? offsetBlockHash = context.GetArgument<string?>("offsetBlockHash");
        HashDigest<SHA256>? offsetStateRootHash = context
            .GetArgument<HashDigest<SHA256>?>("offsetStateRootHash");
        HashDigest<SHA256>? accountStateRootHash = context
            .GetArgument<HashDigest<SHA256>?>("accountStateRootHash");

        if (!currency.TotalSupplyTrackable)
        {
            string msg =
                $"The total supply value of the currency {currency} is not trackable because it"
                + " is a legacy untracked currency which might have been established before"
                + " the introduction of total supply tracking support.";
            throw new ExecutionError(msg);
        }

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

            return context.Source.ChainStates
                .GetAccountState(accountSrh)
                .GetTotalSupply(currency);
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
                            BlockHash offset;
                            try
                            {
                                offset = BlockHash.FromString(offsetBlockHash);
                            }
                            catch (Exception e)
                            {
                                throw new ExecutionError(
                                    "offsetBlockHash must consist of hexadecimal digits.\n"
                                    + e.Message,
                                    e
                                );
                            }

                            return context.Source.ChainStates
                                .GetWorldState(offset)
                                .GetAccount(accountAddr)
                                .GetTotalSupply(currency);
                        }

                    case (_, offsetSrh: not null):
                        return context.Source.ChainStates
                            .GetWorldState(offsetStateRootHash)
                            .GetAccount(accountAddr)
                            .GetTotalSupply(currency);
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

    private static object? ResolveValidatorSet(
        IResolveFieldContext<(IBlockChainStates ChainStates, IBlockPolicy Policy)> context)
    {
        Address? accountAddress = context.GetArgument<Address?>("accountAddress");
        string? offsetBlockHash = context.GetArgument<string?>("offsetBlockHash");
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

            return context.Source.ChainStates
                .GetAccountState(accountSrh)
                .GetValidatorSet().Validators;
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
                            BlockHash offset;
                            try
                            {
                                offset = BlockHash.FromString(offsetBlockHash);
                            }
                            catch (Exception e)
                            {
                                throw new ExecutionError(
                                    "offsetBlockHash must consist of hexadecimal digits.\n"
                                    + e.Message,
                                    e
                                );
                            }

                            return context.Source.ChainStates
                                .GetWorldState(offset)
                                .GetAccount(accountAddr)
                                .GetValidatorSet().Validators;
                        }

                    case (_, offsetSrh: not null):
                        return context.Source.ChainStates
                            .GetWorldState(offsetStateRootHash)
                            .GetAccount(accountAddr)
                            .GetValidatorSet().Validators;
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
}
