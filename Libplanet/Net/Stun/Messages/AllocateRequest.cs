using System.Collections.Generic;
using Libplanet.Net.Stun.Attributes;

namespace Libplanet.Net.Stun.Messages
{
    internal class AllocateRequest : StunMessage
    {
        public AllocateRequest(int lifetime)
        {
            Attributes = new List<Attribute>()
            {
                // Assume only TCP as relay protocol.
                new RequestedTransport(RequestedTransport.TransportType.TCP),
                new Lifetime(lifetime),
            };
        }

        public override MessageMethod Method => MessageMethod.Allocate;

        public override MessageClass Class => MessageClass.Request;
    }
}
