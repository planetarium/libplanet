using System;
using Libplanet.Net.Messages;

namespace Libplanet.Net.Consensus
{
    public class UnexpectedBlockHashException : Exception
    {
        public UnexpectedBlockHashException(ConsensusMessage message)
            : base(message.ToString())
        {
        }
    }
}
