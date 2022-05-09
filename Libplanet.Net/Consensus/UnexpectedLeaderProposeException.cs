using System;
using Libplanet.Net.Messages;

namespace Libplanet.Net.Consensus
{
    public class UnexpectedLeaderProposeException : Exception
    {
        public UnexpectedLeaderProposeException(ConsensusMessage message)
            : base(message.ToString())
        {
        }
    }
}
