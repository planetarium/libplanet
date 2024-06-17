#nullable disable
using System.Security.Cryptography;
using System.Text;

namespace Libplanet.Stun.Attributes
{
    public class MessageIntegrity : Attribute
    {
        public MessageIntegrity(byte[] value)
        {
            Value = value;
        }

        public override AttributeType Type => AttributeType.MessageIntegrity;

        public byte[] Value { get; }

        public static MessageIntegrity Calculate(
            string username,
            string password,
            string realm,
            byte[] msg)
        {
            byte[] key = Encoding.ASCII.GetBytes(
                $"{username}:{realm}:{password}"
            );
            using MD5 md5 = MD5.Create();
            byte[] hmacKey = md5.ComputeHash(key);
            using var hmac = new HMACSHA1(hmacKey);
            return new MessageIntegrity(hmac.ComputeHash(msg));
        }

        protected override byte[] EncodePayload(byte[] transactionId)
        {
            return Value;
        }
    }
}
