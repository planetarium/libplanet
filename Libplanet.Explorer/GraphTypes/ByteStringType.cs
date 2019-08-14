using System;
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
            return value is byte[] b ? ByteUtil.Hex(b) : null;
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
    }
}
