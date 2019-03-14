using System.Collections.Generic;
using Libplanet.Net.Stun.Attributes;

namespace Libplanet.Net.Stun.Messages
{
    internal class RefreshRequest : StunMessage
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
