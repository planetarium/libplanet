#nullable disable
using System.Net;
using Libplanet.Stun.Attributes;

namespace Libplanet.Stun.Messages
{
    public class BindingSuccessResponse : StunMessage
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
