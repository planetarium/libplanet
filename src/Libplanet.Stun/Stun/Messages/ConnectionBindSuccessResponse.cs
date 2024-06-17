#nullable disable

namespace Libplanet.Stun.Messages
{
    public class ConnectionBindSuccessResponse : StunMessage
    {
        public override MessageClass Class => MessageClass.SuccessResponse;

        public override MessageMethod Method => MessageMethod.ConnectionBind;
    }
}
