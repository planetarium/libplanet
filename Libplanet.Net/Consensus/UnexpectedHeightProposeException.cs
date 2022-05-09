using System;
using Libplanet.Net.Messages;

namespace Libplanet.Net.Consensus
{
    public class UnexpectedHeightProposeException : Exception
    {
         public UnexpectedHeightProposeException(ConsensusMessage message)
             : base(message.ToString())
         {
         }
    }
}
