#nullable disable

namespace Libplanet.Stun.Attributes
{
    public class ConnectionId : Attribute
    {
        public ConnectionId(byte[] value)
        {
            Value = value;
        }

        public override AttributeType Type => AttributeType.ConnectionId;

        public byte[] Value { get; }

        protected override byte[] EncodePayload(byte[] transactionId)
        {
            return Value;
        }
    }
}
