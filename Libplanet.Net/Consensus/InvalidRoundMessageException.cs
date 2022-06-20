using System;
using System.Runtime.Serialization;
using Libplanet.Net.Messages;

namespace Libplanet.Net.Consensus
{
    [Serializable]
    public class InvalidRoundMessageException : InvalidMessageException
    {
        public InvalidRoundMessageException(
            string message,
            Message receivedMessage,
            Exception innerException)
            : base(message, receivedMessage, innerException)
        {
        }

        public InvalidRoundMessageException(string message, Message receivedMessage)
            : base(message, receivedMessage)
        {
        }

        protected InvalidRoundMessageException(SerializationInfo info, StreamingContext context)
            : base(info, context)
        {
        }
    }
}
