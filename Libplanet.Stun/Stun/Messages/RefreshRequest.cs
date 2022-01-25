#nullable disable
using System.Collections.Generic;
using Libplanet.Stun.Attributes;

namespace Libplanet.Stun.Messages
{
    public class RefreshRequest : StunMessage
    {
        public RefreshRequest(int lifetime)
        {
            Attributes = new List<Attribute>()
            {
                new Lifetime(lifetime),
            };
        }

        public override MessageClass Class => MessageClass.Request;

        public override MessageMethod Method => MessageMethod.Refresh;
    }
}
