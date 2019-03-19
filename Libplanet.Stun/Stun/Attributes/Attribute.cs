using System.IO;

namespace Libplanet.Stun.Attributes
{
    public abstract class Attribute
    {
        // TODO Should document following STUN / TURN RFC
        #pragma warning disable SA1602
        public enum AttributeType : ushort
        {
            Username = 0x0006,
            MessageIntegrity = 0x0008,
            ErrorCode = 0x0009,
            XorPeerAddress = 0x0012,
            Realm = 0x0014,
            Nonce = 0x0015,
            XorRelayedAddress = 0x0016,
            RequestedTransport = 0x0019,
            XorMappedAddress = 0x0020,
            ConnectionId = 0x002a,
            Lifetime = 0x000d,
            Software = 0x8022,
            Fingerprint = 0x8028,
        }
        #pragma warning restore SA1602

        public abstract AttributeType Type { get; }

        public byte[] ToByteArray(byte[] transactionId = null)
        {
            var payload = EncodePayload(transactionId);
            using (var ms = new MemoryStream())
            {
                ms.Write(((ushort)Type).ToBytes(), 0, 2);
                ms.Write(((ushort)payload.Length).ToBytes(), 0, 2);
                ms.Write(payload, 0, payload.Length);

                // Fill padding
                while (ms.Position % 4 != 0)
                {
                    ms.WriteByte(0x00);
                }

                return ms.ToArray();
            }
        }

        protected abstract byte[] EncodePayload(byte[] transactionId);
    }
}
