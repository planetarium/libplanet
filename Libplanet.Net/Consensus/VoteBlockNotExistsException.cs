using System;
using Libplanet.Net.Messages;

namespace Libplanet.Net.Consensus
{
    public class VoteBlockNotExistsException : Exception
    {
        public VoteBlockNotExistsException(ConsensusMessage message)
            : base(message.ToString())
        {
        }
    }
}
