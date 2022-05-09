using System;
using Libplanet.Net.Messages;

namespace Libplanet.Net.Consensus
{
    public class UnexpectedRoundProposeException : Exception
    {
         public UnexpectedRoundProposeException(ConsensusMessage message)
             : base(message.ToString())
         {
         }
    }
}
