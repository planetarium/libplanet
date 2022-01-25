#nullable disable
using Libplanet.Stun.Attributes;

namespace Libplanet.Stun.Messages
{
    public class ConnectionAttempt : StunMessage
    {
        public override MessageClass Class => MessageClass.Indication;

        public override MessageMethod Method =>
            MessageMethod.ConnectionAttempt;

        public byte[] ConnectionId
        {
            get
            {
                return GetAttribute<ConnectionId>()?.Value;
            }
        }
    }
}
