using System;
using Libplanet.Net.Stun.Messages;

namespace Libplanet.Net.Stun
{
    [Serializable]
    internal class TurnClientException : Exception
    {
        public TurnClientException(string message, StunMessage response = null)
            : base(message)
        {
            Response = response;
        }

        public StunMessage Response { get; }
    }
}
