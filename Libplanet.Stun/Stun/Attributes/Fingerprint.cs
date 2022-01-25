#nullable disable

namespace Libplanet.Stun.Attributes
{
    public class Fingerprint : Attribute
    {
        private readonly uint _checksum;

        public Fingerprint(uint checksum)
        {
            _checksum = checksum;
        }

        public override AttributeType Type => AttributeType.Fingerprint;

        public static Fingerprint FromMessage(byte[] message)
        {
            return new Fingerprint(Crc32.Calculate(message) ^ 0x5354554e);
        }

        internal static Attribute Parse(byte[] payload)
        {
            return new Fingerprint(payload.ToUInt());
        }

        protected override byte[] EncodePayload(byte[] transactionId)
        {
            return _checksum.ToBytes();
        }
    }
}
