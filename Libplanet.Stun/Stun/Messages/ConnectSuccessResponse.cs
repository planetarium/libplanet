#nullable disable

namespace Libplanet.Stun.Messages
{
    public class ConnectSuccessResponse : StunMessage
    {
        public override MessageClass Class => MessageClass.SuccessResponse;

        public override MessageMethod Method => MessageMethod.Connect;
    }
}
