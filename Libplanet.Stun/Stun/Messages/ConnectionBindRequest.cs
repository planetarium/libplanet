#nullable disable
using System.Collections.Generic;
using Libplanet.Stun.Attributes;

namespace Libplanet.Stun.Messages
{
    public class ConnectionBindRequest : StunMessage
    {
        public ConnectionBindRequest(byte[] connectionId)
        {
            Attributes = new List<Attribute>()
            {
                new ConnectionId(connectionId),
            };
        }

        public override MessageClass Class => MessageClass.Request;

        public override MessageMethod Method => MessageMethod.ConnectionBind;
    }
}
