using System.Linq;
using System.Security.Cryptography;
using GraphQL;
using GraphQL.Types;
using Libplanet.Action.State;
using Libplanet.Common;
using Libplanet.Crypto;
using Libplanet.Types.Assets;

namespace Libplanet.Explorer.GraphTypes
{
    public class WorldStateType : ObjectGraphType<IWorldState>
    {
        public WorldStateType()
        {
            Name = "WorldState";

            Field<NonNullGraphType<HashDigestType<SHA256>>>(
                name: "stateRootHash",
                description: "The state root hash of the world state.",
                resolve: context => context.Source.Trie.Hash
            );

            Field<NonNullGraphType<BooleanGraphType>>(
                name: "legacy",
                description: "The legacy flag of the world state.",
                resolve: context => context.Source.Legacy
            );

            Field<NonNullGraphType<IntGraphType>>(
                name: "version",
                description: "The version of the bakcing data model.",
                resolve: context => context.Source.Version
            );

            Field<NonNullGraphType<AccountStateType>>(
                name: "account",
                description:
                    "Gets the account associated with given address.",
                arguments: new QueryArguments(
                    new QueryArgument<NonNullGraphType<AddressType>>
                    {
                        Name = "address",
                        Description = "The address of an account to retrieve.",
                    }
                ),
                resolve: context =>
                    context.Source.GetAccountState(context.GetArgument<Address>("address"))
            );

            Field<NonNullGraphType<ListGraphType<NonNullGraphType<AccountStateType>>>>(
                name: "accounts",
                description:
                    "Gets the accounts associated with given addresses.",
                arguments: new QueryArguments(
                    new QueryArgument<
                        NonNullGraphType<ListGraphType<NonNullGraphType<AddressType>>>>
                    {
                        Name = "addresses",
                        Description = "The list of addresses of accounts to retrieve.",
                    }
                ),
                resolve: context => context
                    .GetArgument<Address[]>("addresses")
                    .Select(address => context.Source.GetAccountState(address))
                    .ToArray()
            );

            Field<NonNullGraphType<FungibleAssetValueType>>(
                name: "balance",
                description: "Balance at given address and currency pair.",
                arguments: new QueryArguments(
                    new QueryArgument<NonNullGraphType<CurrencyInputType>>
                    {
                        Name = "currency",
                        Description = "The currency to look up.",
                    },
                    new QueryArgument<NonNullGraphType<AddressType>>
                    {
                        Name = "address",
                        Description = "The address to look up.",
                    }
                ),
                resolve: context => context.Source.GetBalance(
                    context.GetArgument<Address>("address"),
                    context.GetArgument<Currency>("currency"))
            );

            Field<NonNullGraphType<FungibleAssetValueType>>(
                name: "totalSupply",
                description: "Total supply in circulation for given currency.",
                arguments: new QueryArguments(
                    new QueryArgument<NonNullGraphType<CurrencyInputType>>
                    {
                        Name = "currency",
                        Description = "The currency to look up.",
                    }
                ),
                resolve: context =>
                    context.Source.GetTotalSupply(context.GetArgument<Currency>("currency"))
            );

            Field<NonNullGraphType<IValueType>>(
                name: "validatorSet",
                description: "The validator set.",
                resolve: context => context.Source.GetValidatorSet().Bencoded
            );
        }
    }
}
