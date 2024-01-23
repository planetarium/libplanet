using System.Net;
using Libplanet.Stun.Attributes;
using InvalidOperationException = System.InvalidOperationException;

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
                if (GetAttribute<XorMappedAddress>() is { } attribute)
                {
                    return attribute.EndPoint;
                }

                throw new InvalidOperationException(
                    $"There is no '{nameof(XorMappedAddress)}' attribute in '{this}'");
            }
        }
    }
}
