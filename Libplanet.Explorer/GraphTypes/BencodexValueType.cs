using System;
using Bencodex;
using GraphQL.Language.AST;
using GraphQL.Types;

namespace Libplanet.Explorer.GraphTypes
{
    public class BencodexValueType : StringGraphType
    {
        private static readonly Codec _codec = new();

        public BencodexValueType()
        {
            Name = "BencodexValue";
        }

        public override object? Serialize(object? value)
        {
            if (value is Bencodex.Types.IValue iv)
            {
                return _codec.Encode(iv);
            }

            return value;
        }

        public override object? ParseValue(object? value)
        {
            return value switch
            {
                null => null,
                string hex => _codec.Decode(ByteUtil.ParseHex(hex)),
                _ => throw new ArgumentException(
                    $"Expected a hexadecimal string but {value}",
                    nameof(value)
                ),
            };
        }

        public override object? ParseLiteral(IValue? value)
        {
            if (value is StringValue)
            {
                return ParseValue(value.Value);
            }

            return null;
        }
    }
}
