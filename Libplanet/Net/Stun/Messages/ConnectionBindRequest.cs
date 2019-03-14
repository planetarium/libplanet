using System.Collections.Generic;
using Libplanet.Net.Stun.Attributes;

namespace Libplanet.Net.Stun.Messages
{
    internal class ConnectionBindRequest : StunMessage
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
