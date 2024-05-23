using System.Linq;
using System.Security.Cryptography;
using GraphQL;
using GraphQL.Types;
using Libplanet.Action.State;
using Libplanet.Crypto;
using Libplanet.Store.Trie;

namespace Libplanet.Explorer.GraphTypes
{
    public class AccountStateType : ObjectGraphType<IAccountState>
    {
        internal static readonly KeyBytes ValidatorSetKey =
            new KeyBytes(new byte[] { _underScore, _underScore, _underScore });

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
        }
    }
}
