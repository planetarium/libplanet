namespace Libplanet.Net.Stun.Messages
{
    internal class CreatePermissionSuccessResponse : StunMessage
    {
        public override MessageClass Class => MessageClass.SuccessResponse;

        public override MessageMethod Method => MessageMethod.CreatePermission;
    }
}
