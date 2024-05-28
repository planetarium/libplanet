using GraphQL.Language.AST;
using GraphQL.Types;
using Libplanet.Common;
using Libplanet.Types.Evidence;

namespace Libplanet.Explorer.GraphTypes
{
    public class EvidenceIdType : StringGraphType
    {
        public EvidenceIdType()
        {
            Name = "EvidenceId";
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
                return new EvidenceId(ByteUtil.ParseHex(str));
            }

            return ThrowValueConversionError(value);
        }

        public override object? Serialize(object? value)
        {
            if (value is null)
            {
                return null;
            }

            if (value is EvidenceId evidenceId)
            {
                return ByteUtil.Hex(evidenceId.ByteArray);
            }

            return ThrowSerializationError(value);
        }
    }
}
