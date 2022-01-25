using System;
using System.Runtime.Serialization;
using Libplanet.Net.Messages;

namespace Libplanet.Net
{
    [Serializable]
    public class InvalidMessageException : Exception
    {
        internal InvalidMessageException(
            string message,
            Message receivedMessage,
            Exception innerException
        )
            : base(message, innerException)
        {
            ReceivedMessage = receivedMessage;
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
            ReceivedMessage = info.GetValue(nameof(ReceivedMessage), typeof(Message)) is Message m
                ? m
                : throw new SerializationException(
                    $"{nameof(ReceivedMessage)} is expected to be a non-null {nameof(Message)}.");
        }

        internal Message ReceivedMessage { get; }

        public override void GetObjectData(
            SerializationInfo info, StreamingContext context)
        {
            base.GetObjectData(info, context);
            info.AddValue(nameof(ReceivedMessage), ReceivedMessage);
        }
    }
}
