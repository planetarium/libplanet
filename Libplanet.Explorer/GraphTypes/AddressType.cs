using System;
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
            return ((Address?)value)?.ToString();
        }

        public override object ParseValue(object value)
        {
            switch (value)
            {
                case null:
                    return null;
                case string hex:
                    if (hex.Substring(0, 2).ToLower().Equals("0x"))
                    {
                        hex = hex.Substring(2);
                    }

                    return new Address(hex);
                default:
                    throw new ArgumentException(
                        "Expected a hexadecimal string.", nameof(value));
            }
        }
    }
}
