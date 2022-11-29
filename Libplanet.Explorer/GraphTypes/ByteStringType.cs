#nullable disable
using System;
using GraphQL.Language.AST;
using GraphQL.Types;

namespace Libplanet.Explorer.GraphTypes
{
    public class ByteStringType : StringGraphType
    {
        public ByteStringType()
        {
            Name = "ByteString";
        }

        public override object Serialize(object value)
        {
            return value switch
            {
                byte[] b => ByteUtil.Hex(b),
                string s => s,
                _ => null,
            };
        }

        public override object ParseValue(object value)
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

        public override object ParseLiteral(IValue value)
        {
            return value switch
            {
                StringValue stringValue => ParseValue(stringValue.Value),
                _ => null,
            };
        }
    }
}
