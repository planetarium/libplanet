#nullable disable
using System.Text;

namespace Libplanet.Stun.Attributes
{
    public class Software : Attribute
    {
        public Software(string value)
        {
            Value = value;
        }

        public override AttributeType Type => AttributeType.Software;

        public string Value { get; }

        internal static Software Parse(byte[] payload)
        {
            return new Software(Encoding.ASCII.GetString(payload));
        }

        protected override byte[] EncodePayload(byte[] transactionId)
        {
            return Encoding.ASCII.GetBytes(Value);
        }
    }
}
