using Libplanet.Stun.Attributes;
using InvalidOperationException = System.InvalidOperationException;

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
                if (GetAttribute<ConnectionId>() is { } attribute)
                {
                    return attribute.Value;
                }

                throw new InvalidOperationException(
                    $"There is no '{nameof(ConnectionId)}' attribute in '{this}'");
            }
        }
    }
}
