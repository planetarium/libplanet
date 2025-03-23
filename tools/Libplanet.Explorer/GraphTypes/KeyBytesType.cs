using GraphQL.Language.AST;
using GraphQL.Types;
using Libplanet.Common;
using Libplanet.Store.Trie;

namespace Libplanet.Explorer.GraphTypes
{
    public class KeyBytesType : StringGraphType
    {
        public KeyBytesType()
        {
            Name = "KeyBytes";
        }

        public override object? ParseLiteral(IValue value)
        {
            if (value is StringValue stringValue)
            {
                return ParseValue(stringValue.Value);
            }

            if (value is NullValue)
            {
                return null;
            }

            return ThrowLiteralConversionError(value);
        }

        public override object? ParseValue(object? value)
        {
            if (value is null)
            {
                return null;
            }

            if (value is string str)
            {
                return KeyBytes.Create(ByteUtil.ParseHex(str));
            }

            return ThrowValueConversionError(value);
        }

        public override object? Serialize(object? value)
        {
            if (value is null)
            {
                return null;
            }

            if (value is KeyBytes keyBytes)
            {
                return ByteUtil.Hex(keyBytes.ByteArray);
            }

            return ThrowSerializationError(value);
        }
    }
}
