#nullable disable
using System.Text;

namespace Libplanet.Stun.Attributes
{
    public class Username : Attribute
    {
        private readonly string _value;

        public Username(string value)
        {
            _value = value;
        }

        public override AttributeType Type => AttributeType.Username;

        protected override byte[] EncodePayload(byte[] transactionId)
        {
            return Encoding.ASCII.GetBytes(_value);
        }
    }
}
