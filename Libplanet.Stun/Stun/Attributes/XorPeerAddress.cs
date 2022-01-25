#nullable disable
using System.Net;

namespace Libplanet.Stun.Attributes
{
    public class XorPeerAddress : Attribute
    {
        public XorPeerAddress(IPEndPoint endPoint)
        {
            EndPoint = endPoint;
        }

        public override AttributeType Type => AttributeType.XorPeerAddress;

        public IPEndPoint EndPoint { get; }

        public static XorPeerAddress Parse(
            byte[] bytes, byte[] transactionId)
        {
            return new XorPeerAddress(
                bytes.DecodeStunAddress(transactionId));
        }

        protected override byte[] EncodePayload(byte[] transactionId)
        {
            return EndPoint.EncodeStunAddress(transactionId);
        }
    }
}
