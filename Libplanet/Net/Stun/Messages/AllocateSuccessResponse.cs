using System.Net;
using Libplanet.Net.Stun.Attributes;

namespace Libplanet.Net.Stun.Messages
{
    internal class AllocateSuccessResponse : StunMessage
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
