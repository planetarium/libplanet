using System;
using System.Runtime.Serialization;
using Libplanet.Net.Messages;

namespace Libplanet.Net.Consensus
{
    public class InvalidValidatorVoteMessageException : InvalidMessageException
    {
        internal InvalidValidatorVoteMessageException(
            string message,
            Message receivedMessage,
            Exception innerException)
            : base(message, receivedMessage, innerException)
        {
        }

        internal InvalidValidatorVoteMessageException(string message, Message receivedMessage)
            : base(message, receivedMessage)
        {
        }

        protected InvalidValidatorVoteMessageException(
            SerializationInfo info,
            StreamingContext context)
            : base(info, context)
        {
        }
    }
}
