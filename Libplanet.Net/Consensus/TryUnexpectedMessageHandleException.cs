using System;
using Libplanet.Net.Messages;

namespace Libplanet.Net.Consensus
{
    public class TryUnexpectedMessageHandleException : Exception
    {
        public TryUnexpectedMessageHandleException(ConsensusMessage message)
            : base(message.ToString())
        {
        }

        protected TryUnexpectedMessageHandleException(string message)
            : base(message)
        {
        }
    }
}
