#nullable disable
using System.Net;

namespace Libplanet.Stun.Attributes
{
    public class XorMappedAddress : Attribute
    {
        public XorMappedAddress(IPEndPoint endPoint)
        {
            EndPoint = endPoint;
        }

        public override AttributeType Type => AttributeType.XorMappedAddress;

        public IPEndPoint EndPoint { get; }

        public static XorMappedAddress Parse(
            byte[] bytes, byte[] transactionId)
        {
            return new XorMappedAddress(
                bytes.DecodeStunAddress(transactionId));
        }

        protected override byte[] EncodePayload(byte[] transactionId)
        {
            return EndPoint.EncodeStunAddress(transactionId);
        }
    }
}
