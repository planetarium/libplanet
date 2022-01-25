#nullable disable
using Libplanet.Stun.Attributes;

namespace Libplanet.Stun.Messages
{
    public class RefreshSuccessResponse : StunMessage
    {
        public override MessageClass Class => MessageClass.SuccessResponse;

        public override MessageMethod Method => MessageMethod.Refresh;

        public int Lifetime => GetAttribute<Lifetime>().Value;
    }
}
