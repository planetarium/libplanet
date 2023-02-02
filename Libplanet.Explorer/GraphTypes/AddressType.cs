#nullable disable
using System;
using GraphQL.Language.AST;
using GraphQL.Types;

namespace Libplanet.Explorer.GraphTypes
{
    public class AddressType : StringGraphType
    {
        public AddressType()
        {
            Name = "Address";
        }

        public override object Serialize(object value)
        {
            if (value is Address addr)
            {
                return addr.ToString();
            }

            return value;
        }

        public override object ParseValue(object value)
        {
            switch (value)
            {
                case null:
                    return null;
                case string hex:
                    if (hex.Length < 2)
                    {
                        throw new ArgumentException(
                            "The given value is too short to be an address.", nameof(value));
                    }

                    if (hex.Substring(0, 2).ToLower().Equals("0x"))
                    {
                        hex = hex.Substring(2);
                    }

                    return new Address(hex);
                default:
                    throw new ArgumentException(
                        $"Expected a hexadecimal string but {value}", nameof(value));
            }
        }

        public override object ParseLiteral(IValue value)
        {
            if (value is StringValue)
            {
                return ParseValue(value.Value);
            }

            return null;
        }
    }
}
