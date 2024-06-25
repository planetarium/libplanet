#nullable disable
using System.IO;
using System.Text;

namespace Libplanet.Stun.Attributes
{
    public class ErrorCode : Attribute
    {
        public ErrorCode(int code, string reason)
        {
            Code = code;
            Reason = reason;
        }

        public override AttributeType Type => AttributeType.ErrorCode;

        public int Code { get; }

        public string Reason { get; }

        internal static ErrorCode Parse(byte[] payload)
        {
            byte @class = payload[2];
            byte code = payload[3];
            string reason = Encoding.ASCII.GetString(
                payload, 4, payload.Length - 4);

            return new ErrorCode(@class * 100 + code, reason);
        }

        protected override byte[] EncodePayload(byte[] transactionId)
        {
            using var ms = new MemoryStream();
            ms.WriteByte(0x00);
            ms.WriteByte(0x00);
            ms.WriteByte((byte)(Code / 100));
            ms.WriteByte((byte)(Code % 100));

            var reason = Encoding.ASCII.GetBytes(Reason);
            ms.Write(reason, 0, reason.Length);

            return ms.ToArray();
        }
    }
}
