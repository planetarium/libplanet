namespace Libplanet.Net.Stun.Messages
{
    internal class ConnectSuccessResponse : StunMessage
    {
        public override MessageClass Class => MessageClass.SuccessResponse;

        public override MessageMethod Method => MessageMethod.Connect;
    }
}
