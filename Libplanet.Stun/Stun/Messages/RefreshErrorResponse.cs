#nullable disable
using Libplanet.Stun.Attributes;

namespace Libplanet.Stun.Messages
{
    public class RefreshErrorResponse : StunMessage
    {
        public override MessageClass Class => MessageClass.ErrorResponse;

        public override MessageMethod Method => MessageMethod.Refresh;

        public int ErrorCode
        {
            get
            {
                ErrorCode attr = GetAttribute<ErrorCode>();
                return attr.Code;
            }
        }

        public byte[] Nonce
        {
            get
            {
                Nonce attr = GetAttribute<Nonce>();
                return attr.Value;
            }
        }
    }
}
