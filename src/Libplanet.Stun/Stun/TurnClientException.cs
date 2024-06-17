using System;
using Libplanet.Stun.Messages;

namespace Libplanet.Stun
{
    [Serializable]
    public class TurnClientException : Exception
    {
        public TurnClientException(string message, StunMessage? response = null)
            : base(message)
        {
            Response = response;
        }

        public StunMessage? Response { get; }
    }
}
