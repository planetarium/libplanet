#nullable disable
using System.Collections.Generic;
using System.Net;
using Libplanet.Stun.Attributes;

namespace Libplanet.Stun.Messages
{
    public class CreatePermissionRequest : StunMessage
    {
        public CreatePermissionRequest(IPEndPoint peerEndPoint)
        {
            Attributes = new List<Attribute>()
            {
                new XorPeerAddress(peerEndPoint),
            };
        }

        public override MessageClass Class => MessageClass.Request;

        public override MessageMethod Method => MessageMethod.CreatePermission;
    }
}
