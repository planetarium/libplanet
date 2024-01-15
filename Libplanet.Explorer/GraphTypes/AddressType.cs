using GraphQL.Language.AST;
using GraphQL.Types;
using Libplanet.Crypto;

namespace Libplanet.Explorer.GraphTypes
{
    public class AddressType : StringGraphType
    {
        public AddressType()
        {
            Name = "Address";
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
                // NOTE: 0x-prefixed *and* 0x-non-prefixed version should both be allowed.
                return new Address(str);
            }

            return ThrowValueConversionError(value);
        }

        public override object? Serialize(object? value)
        {
            if (value is null)
            {
                return null;
            }

            if (value is Address address)
            {
                // NOTE: 0x-prefixed format is preferred as output.
                return address.ToString();
            }

            return ThrowSerializationError(value);
        }
    }
}
