namespace Libplanet.Net.Stun.Messages
{
    internal class CreatePermissionErrorResponse : StunMessage
    {
        public override MessageClass Class => MessageClass.ErrorResponse;

        public override MessageMethod Method => MessageMethod.CreatePermission;
    }
}
