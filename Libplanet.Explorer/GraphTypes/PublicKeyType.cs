using GraphQL.Language.AST;
using GraphQL.Types;
using Libplanet.Common;
using Libplanet.Crypto;

namespace Libplanet.Explorer.GraphTypes
{
    public class PublicKeyType : StringGraphType
    {
        public PublicKeyType()
        {
            Name = "PublicKey";
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
                // NOTE: Compressed and uncompressed should both be allowed.
                return new PublicKey(ByteUtil.ParseHex(str));
            }

            return ThrowValueConversionError(value);
        }

        public override object? Serialize(object? value)
        {
            if (value is null)
            {
                return null;
            }

            if (value is PublicKey publicKey)
            {
                // NOTE: Compressed format is preferred as output.
                return publicKey.ToString();
            }

            return ThrowSerializationError(value);
        }
    }
}
