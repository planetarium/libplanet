using System;
using GraphQL.Types;
using GraphQLParser.AST;
using Libplanet.Crypto;

namespace Libplanet.Explorer.GraphTypes
{
    public class PublicKeyType : StringGraphType
    {
        public PublicKeyType()
        {
            Name = "PublicKey";
        }

        public override object? Serialize(object? value)
        {
            if (value is PublicKey pubKey)
            {
                return pubKey.ToString();
            }

            return value;
        }

        public override object? ParseValue(object? value)
        {
            switch (value)
            {
                case null:
                    return null;
                case string hex:
                    return new PublicKey(ByteUtil.ParseHex(hex));
                default:
                    throw new ArgumentException(
                        $"Expected a hexadecimal string but {value}", nameof(value));
            }
        }

        public override object? ParseLiteral(GraphQLValue? value) =>
            value is GraphQLStringValue v ? ParseValue((string)v.Value) : null;
    }
}
