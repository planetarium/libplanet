using System.Net;
using Libplanet.Net.Stun.Attributes;

namespace Libplanet.Net.Stun.Messages
{
    internal class BindingSuccessResponse : StunMessage
    {
        public override MessageClass Class => MessageClass.SuccessResponse;

        public override MessageMethod Method => MessageMethod.Binding;

        public IPEndPoint MappedAddress
        {
            get
            {
                return GetAttribute<XorMappedAddress>()?.EndPoint;
            }
        }
    }
}
