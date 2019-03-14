namespace Libplanet.Stun.Messages
{
    public class RefreshErrorResponse : StunMessage
    {
        public override MessageClass Class => MessageClass.ErrorResponse;

        public override MessageMethod Method => MessageMethod.Refresh;
    }
}
