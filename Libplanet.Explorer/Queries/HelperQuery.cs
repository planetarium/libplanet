using System.Security.Cryptography;
using Bencodex;
using GraphQL;
using GraphQL.Types;
using Libplanet.Common;
using Libplanet.Explorer.GraphTypes;
using Libplanet.Types.Assets;

namespace Libplanet.Explorer.Queries
{
    public class HelperQuery : ObjectGraphType
    {
        private static Codec _codec = new Codec();

        public HelperQuery()
        {
            Name = "HelperQuery";
            Description = "A number of queries for convenience.";

            Field<NonNullGraphType<HashDigestType<SHA1>>>(
                name: "currencyHash",
                description: "Converts currency info to currency hash.",
                arguments: new QueryArguments(
                    new QueryArgument<NonNullGraphType<CurrencyInputType>>
                    {
                        Name = "currency",
                        Description = "The currency to convert.",
                    }
                ),
                resolve: context => context.GetArgument<Currency>("currency").Hash
            );

            Field<NonNullGraphType<BencodexValueType>>(
                name: "bencodexValue",
                description: "Decodes hex encoded bencodex value",
                arguments: new QueryArguments(
                    new QueryArgument<NonNullGraphType<StringGraphType>>
                    {
                        Name = "hex",
                        Description = "The byte array in hex representation to decode.",
                    }
                ),
                resolve: context =>
                    _codec.Decode(ByteUtil.ParseHex(context.GetArgument<string>("hex")))
            );
        }
    }
}
