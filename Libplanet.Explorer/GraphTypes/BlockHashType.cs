using GraphQL.Language.AST;
using GraphQL.Types;
using Libplanet.Common;
using Libplanet.Types.Blocks;

namespace Libplanet.Explorer.GraphTypes
{
    public class BlockHashType : StringGraphType
    {
        public BlockHashType()
        {
            Name = "BlockHash";
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
                return new BlockHash(ByteUtil.ParseHex(str));
            }

            return ThrowValueConversionError(value);
        }

        public override object? Serialize(object? value)
        {
            if (value is null)
            {
                return null;
            }

            if (value is BlockHash blockHash)
            {
                return ByteUtil.Hex(blockHash.ByteArray);
            }

            return ThrowSerializationError(value);
        }
    }
}
