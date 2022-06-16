using System;
using System.Runtime.Serialization;
using Libplanet.Net.Messages;

namespace Libplanet.Net.Consensus
{
    [Serializable]
    public class InvalidHeightMessageException : InvalidMessageException
    {
        public InvalidHeightMessageException(
            string message,
            Message receivedMessage,
            Exception innerException)
            : base(message, receivedMessage, innerException)
        {
        }

        public InvalidHeightMessageException(string message, Message receivedMessage)
            : base(message, receivedMessage)
        {
        }

        protected InvalidHeightMessageException(SerializationInfo info, StreamingContext context)
            : base(info, context)
        {
        }
    }
}
