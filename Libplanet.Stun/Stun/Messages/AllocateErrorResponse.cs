using Libplanet.Stun.Attributes;

namespace Libplanet.Stun.Messages
{
    public class AllocateErrorResponse : StunMessage
    {
        public override MessageClass Class => MessageClass.ErrorResponse;

        public override MessageMethod Method => MessageMethod.Allocate;

        public int ErrorCode
        {
            get
            {
                ErrorCode? attr = GetAttribute<ErrorCode>();
                return attr?.Code ?? 0;
            }
        }

        public string Reason
        {
            get
            {
                ErrorCode? attr = GetAttribute<ErrorCode>();
                return attr?.Reason ?? string.Empty;
            }
        }

        public byte[] Nonce
        {
            get
            {
                Nonce? attr = GetAttribute<Nonce>();
                return attr?.Value ?? System.Array.Empty<byte>();
            }
        }

        public string Realm
        {
            get
            {
                Realm? attr = GetAttribute<Realm>();
                return attr?.Value ?? string.Empty;
            }
        }
    }
}
