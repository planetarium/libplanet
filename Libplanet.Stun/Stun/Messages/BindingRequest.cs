#nullable disable
using System.Collections.Generic;
using Libplanet.Stun.Attributes;

namespace Libplanet.Stun.Messages
{
    public class BindingRequest : StunMessage
    {
        public BindingRequest()
        {
            Attributes = new List<Attribute>();
        }

        public override MessageClass Class => MessageClass.Request;

        public override MessageMethod Method => MessageMethod.Binding;
    }
}
