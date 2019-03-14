using Libplanet.Net.Stun.Attributes;

namespace Libplanet.Net.Stun.Messages
{
    internal class ConnectionAttempt : StunMessage
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
