#nullable disable

namespace Libplanet.Stun.Attributes
{
    public class RequestedTransport : Attribute
    {
        private readonly TransportType _transportType;

        public RequestedTransport(TransportType transportType)
        {
            _transportType = transportType;
        }

        public enum TransportType : byte
        {
            #pragma warning disable SA1602
            TCP = 0x06,
            #pragma warning restore SA1602
        }

        public override AttributeType Type => AttributeType.RequestedTransport;

        protected override byte[] EncodePayload(byte[] transactionId)
        {
            return new byte[] { (byte)_transportType, 0x00, 0x00, 0x00 };
        }
    }
}
