using System.Linq;
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
        Field<NonNullGraphType<AccountStateType>>(
            name: "account",
            description:
                "Gets the account state associated with given block hash or state root hash. " +
                "Exactly one of the arguments must be specified.",
            arguments: new QueryArguments(
                new QueryArgument<BlockHashType>
                {
                    Name = "blockHash",
                    Description = "A block hash to use as a pointer.",
                },
                new QueryArgument<HashDigestType<SHA256>>
                {
                    Name = "stateRootHash",
                    Description = "A state root hash to use as a pointer.",
                }
            ),
            resolve: context => (
                context.GetArgument<BlockHash?>("blockHash"),
                context.GetArgument<HashDigest<SHA256>?>("stateRootHash")) switch
                {
                    ({ } blockHash, null) => context.Source.GetAccountState(blockHash),
                    (null, { } stateRootHash) => context.Source.GetAccountState(stateRootHash),
                    _ => throw new ExecutionError(
                        "Exactly one of blockHash and stateRootHash must be specified."),
                }
        );

        Field<NonNullGraphType<ListGraphType<NonNullGraphType<AccountStateType>>>>(
            name: "accounts",
            description:
                "Gets the account states associated with given block hashes " +
                "or state root hashes. Exactly one of the arguments must be specified.",
            arguments: new QueryArguments(
                new QueryArgument<ListGraphType<NonNullGraphType<BlockHashType>>>
                {
                    Name = "blockHashes",
                    Description = "A list of block hashes to use as pointers.",
                },
                new QueryArgument<ListGraphType<NonNullGraphType<HashDigestType<SHA256>>>>
                {
                    Name = "stateRootHashes",
                    Description = "A list of state root hashes to use as pointers.",
                }
            ),
            resolve: context => (
                context.GetArgument<BlockHash[]?>("blockHashes"),
                context.GetArgument<HashDigest<SHA256>[]?>("stateRootHashes")) switch
                {
                    ({ } blockHashes, null) =>
                        blockHashes
                            .Select(blockHash => context.Source.GetAccountState(blockHash))
                            .ToArray(),
                    (null, { } stateRootHashes) =>
                        stateRootHashes
                            .Select(stateRootHash => context.Source.GetAccountState(stateRootHash))
                            .ToArray(),
                    _ => throw new ExecutionError(
                        "Exactly one of blockHashes and stateRootHashes must be specified."),
                }
        );

        Field<NonNullGraphType<ListGraphType<LegacyBencodexValueType>>>(
            "states",
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
            arguments: new QueryArguments(
                new QueryArgument<NonNullGraphType<CurrencyInputType>> { Name = "currency" },
                new QueryArgument<BlockHashType> { Name = "offsetBlockHash" },
                new QueryArgument<HashDigestType<SHA256>> { Name = "offsetStateRootHash" }
            ),
            resolve: ResolveTotalSupply
        );
        Field<ListGraphType<NonNullGraphType<ValidatorType>>>(
            "validators",
            arguments: new QueryArguments(
                new QueryArgument<BlockHashType> { Name = "offsetBlockHash" },
                new QueryArgument<HashDigestType<SHA256>> { Name = "offsetStateRootHash" }
            ),
            resolve: ResolveValidatorSet
        );
    }

    private static object ResolveStates(IResolveFieldContext<IBlockChainStates> context)
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
                    .GetAccountState(offsetBlockHash)
                    .GetStates(addresses);
            }

            case (_, srh: not null):
                return context.Source
                    .GetAccountState(offsetStateRootHash)
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
                    .GetAccountState(offsetBlockHash)
                    .GetBalance(owner, currency);
            }

            case (_, srh: not null):
                return context.Source
                    .GetAccountState(offsetStateRootHash)
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
                    .GetAccountState(offsetBlockHash)
                    .GetTotalSupply(currency);
            case (_, srh: not null):
                return context.Source
                    .GetAccountState(offsetStateRootHash)
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
                    .GetAccountState(offsetBlockHash)
                    .GetValidatorSet().Validators;
            case (_, srh: not null):
                return context.Source
                    .GetAccountState(offsetStateRootHash)
                    .GetValidatorSet().Validators;
        }
    }
}
