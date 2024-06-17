#nullable disable
using System.Net;

namespace Libplanet.Stun.Attributes
{
    public class XorRelayedAddress : Attribute
    {
        public XorRelayedAddress(IPEndPoint endPoint)
        {
            EndPoint = endPoint;
        }

        public override AttributeType Type => AttributeType.XorRelayedAddress;

        public IPEndPoint EndPoint { get; }

        public static XorRelayedAddress Parse(
            byte[] bytes, byte[] transactionId)
        {
            return new XorRelayedAddress(
                bytes.DecodeStunAddress(transactionId));
        }

        protected override byte[] EncodePayload(byte[] transactionId)
        {
            return EndPoint.EncodeStunAddress(transactionId);
        }
    }
}
