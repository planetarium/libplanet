using System.Net;
using Libplanet.Stun.Attributes;
using InvalidOperationException = System.InvalidOperationException;

namespace Libplanet.Stun.Messages
{
    public class AllocateSuccessResponse : StunMessage
    {
        public override MessageClass Class => MessageClass.SuccessResponse;

        public override MessageMethod Method => MessageMethod.Allocate;

        public IPEndPoint RelayedEndPoint
        {
            get
            {
                if (GetAttribute<XorRelayedAddress>() is { } attribute)
                {
                    return attribute.EndPoint;
                }

                throw new InvalidOperationException(
                    $"There is no '{nameof(XorRelayedAddress)}' attribute in '{this}'");
            }
        }
    }
}
