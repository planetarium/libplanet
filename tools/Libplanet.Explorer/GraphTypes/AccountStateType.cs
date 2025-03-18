using System.Linq;
using System.Security.Cryptography;
using GraphQL;
using GraphQL.Types;
using Libplanet.Action.State;
using Libplanet.Common;
using Libplanet.Crypto;
using Libplanet.Store.Trie;

namespace Libplanet.Explorer.GraphTypes
{
    public class AccountStateType : ObjectGraphType<IAccountState>
    {
        internal static readonly KeyBytes ValidatorSetKey =
            KeyBytes.Create(_underScore, _underScore, _underScore);

        private const byte _underScore = 95;  // '_'

        private static readonly byte[] _conversionTable =
        {
            48,  // '0'
            49,  // '1'
            50,  // '2'
            51,  // '3'
            52,  // '4'
            53,  // '5'
            54,  // '6'
            55,  // '7'
            56,  // '8'
            57,  // '9'
            97,  // 'a'
            98,  // 'b'
            99,  // 'c'
            100, // 'd'
            101, // 'e'
            102, // 'f'
        };

        public AccountStateType()
        {
            Name = "AccountState";
            Description =
                "Represents a raw account state.  This is meant to represent a raw storage state " +
                "void of any application layer context and/or logic.  In particular, " +
                "this does not deal with currency or fungible asset value directly, " +
                "which requires additional information on currency such as its ticker " +
                "and possible minters, etc. while interpreting the data retrieved " +
                "with the provided contextual information. The same is true for validator sets.";

            Field<NonNullGraphType<HashDigestType<SHA256>>>(
                name: "stateRootHash",
                description: "The state root hash associated with this account state.",
                resolve: context => context.Source.Trie.Hash
            );

            Field<IValueType>(
                name: "state",
                description: "The state at given address.",
                arguments: new QueryArguments(
                    new QueryArgument<NonNullGraphType<AddressType>>
                    {
                        Name = "address",
                        Description = "The address to look up.",
                    }
                ),
                resolve: context =>
                    context.Source.GetState(context.GetArgument<Address>("address"))
            );

            Field<NonNullGraphType<ListGraphType<IValueType>>>(
                name: "states",
                description: "The states at given addresses.",
                arguments: new QueryArguments(
                    new QueryArgument<
                        NonNullGraphType<ListGraphType<NonNullGraphType<AddressType>>>>
                    {
                        Name = "addresses",
                        Description = "The list of addresses to look up.",
                    }
                ),
                resolve: context =>
                    context.GetArgument<Address[]>("addresses")
                        .Select(address => context.Source.GetState(address))
                        .ToArray()
            );

            Field<IValueType>(
                name: "balance",
                deprecationReason: "Does not work post block protocol version 7.",
                description: "Balance at given address and currency hash pair.",
                arguments: new QueryArguments(
                    new QueryArgument<NonNullGraphType<AddressType>>
                    {
                        Name = "address",
                        Description = "The address to look up.",
                    },
                    new QueryArgument<NonNullGraphType<HashDigestType<SHA1>>>
                    {
                        Name = "currencyHash",
                        Description = "The currency hash to look up.",
                    }
                ),
                resolve: context =>
                    context.Source.Trie[ToFungibleAssetKey(
                        context.GetArgument<Address>("address"),
                        context.GetArgument<HashDigest<SHA1>>("currencyHash"))]
            );

            Field<NonNullGraphType<ListGraphType<IValueType>>>(
                name: "balances",
                deprecationReason: "Does not work post block protocol version 7.",
                description: "Balances at given addresses and currency hash pair.",
                arguments: new QueryArguments(
                    new QueryArgument<NonNullGraphType<
                        ListGraphType<NonNullGraphType<AddressType>>>>
                    {
                        Name = "addresses",
                        Description = "The list of addresses to look up.",
                    },
                    new QueryArgument<NonNullGraphType<HashDigestType<SHA1>>>
                    {
                        Name = "currencyHash",
                        Description = "The currency hash to look up.",
                    }
                ),
                resolve: context =>
                    context.GetArgument<Address[]>("addresses")
                        .Select(address => context.Source.Trie[
                            ToFungibleAssetKey(
                                address, context.GetArgument<HashDigest<SHA1>>("currencyHash"))])
            );

            Field<IValueType>(
                name: "totalSupply",
                deprecationReason: "Does not work post block protocol version 7.",
                description: "Total supply in circulation, if recorded, for given currency hash.",
                arguments: new QueryArguments(
                    new QueryArgument<NonNullGraphType<HashDigestType<SHA1>>>
                    {
                        Name = "currencyHash",
                        Description = "The currency hash to look up.",
                    }
                ),
                resolve: context =>
                    context.Source.Trie[ToTotalSupplyKey(
                        context.GetArgument<HashDigest<SHA1>>("currencyHash"))]
            );

            Field<IValueType>(
                deprecationReason: "Does not work post block protocol version 6.",
                name: "validatorSet",
                description: "The validator set.",
                resolve: context => context.Source.Trie[ValidatorSetKey]
            );
        }

        internal static KeyBytes ToFungibleAssetKey(Address address, HashDigest<SHA1> currencyHash)
        {
            var addressBytes = address.ByteArray;
            var currencyBytes = currencyHash.ByteArray;
            byte[] buffer = new byte[addressBytes.Length * 2 + currencyBytes.Length * 2 + 2];

            buffer[0] = _underScore;
            for (int i = 0; i < addressBytes.Length; i++)
            {
                buffer[1 + i * 2] = _conversionTable[addressBytes[i] >> 4];
                buffer[1 + i * 2 + 1] = _conversionTable[addressBytes[i] & 0xf];
            }

            var offset = addressBytes.Length * 2;
            buffer[offset + 1] = _underScore;
            for (int i = 0; i < currencyBytes.Length; i++)
            {
                buffer[offset + 2 + i * 2] = _conversionTable[currencyBytes[i] >> 4];
                buffer[offset + 2 + i * 2 + 1] = _conversionTable[currencyBytes[i] & 0xf];
            }

            return KeyBytes.Create(buffer);
        }

        internal static KeyBytes ToTotalSupplyKey(HashDigest<SHA1> currencyHash)
        {
            var currencyBytes = currencyHash.ByteArray;
            byte[] buffer = new byte[currencyBytes.Length * 2 + 2];

            buffer[0] = _underScore;
            buffer[1] = _underScore;

            for (int i = 0; i < currencyBytes.Length; i++)
            {
                buffer[2 + i * 2] = _conversionTable[currencyBytes[i] >> 4];
                buffer[2 + i * 2 + 1] = _conversionTable[currencyBytes[i] & 0xf];
            }

            return KeyBytes.Create(buffer);
        }
    }
}
