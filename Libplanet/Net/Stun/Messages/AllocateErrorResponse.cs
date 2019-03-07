using Libplanet.Net.Stun.Attributes;

namespace Libplanet.Net.Stun.Messages
{
    internal class AllocateErrorResponse : StunMessage
    {
        public override MessageClass Class => MessageClass.ErrorResponse;

        public override MessageMethod Method => MessageMethod.Allocate;

        public int ErrorCode
        {
            get
            {
                ErrorCode attr = GetAttribute<ErrorCode>();
                return attr.Code;
            }
        }

        public string Reason
        {
            get
            {
                ErrorCode attr = GetAttribute<ErrorCode>();
                return attr.Reason;
            }
        }

        public byte[] Nonce
        {
            get
            {
                Attributes.Nonce attr = GetAttribute<Attributes.Nonce>();
                return attr.Value;
            }
        }

        public string Realm
        {
            get
            {
                Realm attr = GetAttribute<Realm>();
                return attr.Value;
            }
        }
    }
}
