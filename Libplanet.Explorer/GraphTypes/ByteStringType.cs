using System;
using GraphQL.Types;
using GraphQLParser.AST;

namespace Libplanet.Explorer.GraphTypes
{
    public class ByteStringType : StringGraphType
    {
        public ByteStringType()
        {
            Name = "ByteString";
        }

        public override object? Serialize(object? value)
        {
            return value switch
            {
                byte[] b => ByteUtil.Hex(b),
                string s => s,
                _ => null,
            };
        }

        public override object? ParseValue(object? value)
        {
            switch (value)
            {
                case null:
                    return null;
                case string hex:
                    return ByteUtil.ParseHex(hex);
                default:
                    throw new ArgumentException("Expected a hexadecimal string.", nameof(value));
            }
        }

        public override object? ParseLiteral(GraphQLValue? value) =>
            value is GraphQLStringValue v ? ParseValue((string)v.Value) : null;
    }
}
