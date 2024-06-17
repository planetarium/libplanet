#nullable disable

namespace Libplanet.Stun.Messages
{
    public class CreatePermissionSuccessResponse : StunMessage
    {
        public override MessageClass Class => MessageClass.SuccessResponse;

        public override MessageMethod Method => MessageMethod.CreatePermission;
    }
}
