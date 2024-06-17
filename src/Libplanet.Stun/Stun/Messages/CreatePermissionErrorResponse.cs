#nullable disable

namespace Libplanet.Stun.Messages
{
    public class CreatePermissionErrorResponse : StunMessage
    {
        public override MessageClass Class => MessageClass.ErrorResponse;

        public override MessageMethod Method => MessageMethod.CreatePermission;
    }
}
