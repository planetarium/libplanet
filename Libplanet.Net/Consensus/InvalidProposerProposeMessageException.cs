using System;
using System.Runtime.Serialization;
using Libplanet.Net.Messages;

namespace Libplanet.Net.Consensus
{
    [Serializable]
    public class InvalidProposerProposeMessageException : InvalidMessageException
    {
        public InvalidProposerProposeMessageException(
            string message,
            Message receivedMessage,
            Exception innerException)
            : base(message, receivedMessage, innerException)
        {
        }

        public InvalidProposerProposeMessageException(string message, Message receivedMessage)
            : base(message, receivedMessage)
        {
        }

        protected InvalidProposerProposeMessageException(
            SerializationInfo info,
            StreamingContext context)
            : base(info, context)
        {
        }
    }
}
