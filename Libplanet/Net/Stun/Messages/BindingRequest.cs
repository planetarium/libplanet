using System.Collections.Generic;
using Libplanet.Net.Stun.Attributes;

namespace Libplanet.Net.Stun.Messages
{
    internal class BindingRequest : StunMessage
    {
        public BindingRequest()
        {
            Attributes = new List<Attribute>();
        }

        public override MessageClass Class => MessageClass.Request;

        public override MessageMethod Method => MessageMethod.Binding;
    }
}
