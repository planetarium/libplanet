#nullable disable
using System.Net;
using Libplanet.Stun.Attributes;

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
                return GetAttribute<XorRelayedAddress>()?.EndPoint;
            }
        }
    }
}
