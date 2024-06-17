#nullable disable

namespace Libplanet.Stun.Attributes
{
    public class Nonce : Attribute
    {
        public Nonce(byte[] value)
        {
            Value = value;
        }

        public override AttributeType Type => AttributeType.Nonce;

        public byte[] Value { get; }

        internal static Nonce Parse(byte[] value)
        {
            return new Nonce(value);
        }

        protected override byte[] EncodePayload(byte[] transactionId)
        {
            return Value;
        }
    }
}
