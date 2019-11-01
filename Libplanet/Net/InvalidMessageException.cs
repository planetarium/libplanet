using System;
using System.Runtime.Serialization;
using Libplanet.Net.Messages;

namespace Libplanet.Net
{
    [Serializable]
    public class InvalidMessageException : Exception
    {
        public InvalidMessageException()
        {
        }

        public InvalidMessageException(string message)
            : base(message)
        {
        }

        public InvalidMessageException(string message, Exception innerException)
            : base(message, innerException)
        {
        }

        internal InvalidMessageException(string message, Message receivedMessage)
            : base(message)
        {
            ReceivedMessage = receivedMessage;
        }

        protected InvalidMessageException(
            SerializationInfo info,
            StreamingContext context
        )
            : base(info, context)
        {
        }

        internal Message ReceivedMessage { get; }
    }
}
