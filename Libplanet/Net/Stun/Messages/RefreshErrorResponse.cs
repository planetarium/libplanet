namespace Libplanet.Net.Stun.Messages
{
    internal class RefreshErrorResponse : StunMessage
    {
        public override MessageClass Class => MessageClass.ErrorResponse;

        public override MessageMethod Method => MessageMethod.Refresh;
    }
}
