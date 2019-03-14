namespace Libplanet.Net.Stun.Messages
{
    internal class ConnectionBindSuccessResponse : StunMessage
    {
        public override MessageClass Class => MessageClass.SuccessResponse;

        public override MessageMethod Method => MessageMethod.ConnectionBind;
    }
}
