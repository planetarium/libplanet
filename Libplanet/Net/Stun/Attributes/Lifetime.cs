namespace Libplanet.Net.Stun.Attributes
{
    internal class Lifetime : Attribute
    {
        public Lifetime(int value)
        {
            Value = value;
        }

        public override AttributeType Type => AttributeType.Lifetime;

        public int Value { get; }

        protected override byte[] EncodePayload(byte[] transactionId)
        {
            return ((uint)Value).ToBytes();
        }
    }
}
