using System;
using GraphQL.Language.AST;
using GraphQL.Types;
using Libplanet.Tx;

namespace Libplanet.Explorer.GraphTypes
{
    public class TxIdGraphType : IdGraphType
    {
        public TxIdGraphType()
        {
            Name = "Id";
        }

        public override object Serialize(object value)
        {
            if (value is TxId txid)
            {
                return txid.ToString();
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
                    return new TxId(ByteUtil.ParseHex(hex));
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
