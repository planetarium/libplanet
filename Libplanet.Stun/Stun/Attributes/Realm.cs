#nullable disable
using System.Text;

namespace Libplanet.Stun.Attributes
{
    public class Realm : Attribute
    {
        public Realm(string value)
        {
            Value = value;
        }

        public override AttributeType Type => AttributeType.Realm;

        public string Value { get; }

        internal static Realm Parse(byte[] payload)
        {
            return new Realm(Encoding.ASCII.GetString(payload));
        }

        protected override byte[] EncodePayload(byte[] transactionId)
        {
            return Encoding.ASCII.GetBytes(Value);
        }
    }
}
