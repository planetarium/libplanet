using System;
using System.Runtime.Serialization;
using Libplanet.Net.Messages;

namespace Libplanet.Net
{
    /// <summary>
    /// An exception that is thrown when the signature of an encoded <see cref="Message"/> is
    /// invalid.
    /// </summary>
    [Serializable]
    public class InvalidMessageSignatureException : Exception
    {
        public InvalidMessageSignatureException(
            string message,
            Message receivedMessage)
            : base(message)
        {
            ReceivedMessage = receivedMessage;
        }

        private InvalidMessageSignatureException(SerializationInfo info, StreamingContext context)
            : base(info.GetString(nameof(Message)) ?? string.Empty)
        {
            ReceivedMessage = info.GetValue(nameof(ReceivedMessage), typeof(Message)) is Message m
                ? m
                : throw new SerializationException(
                    $"{nameof(ReceivedMessage)} is expected to be a non-null {nameof(Message)}.");
        }

        public Message ReceivedMessage { get; private set; }

        public override void GetObjectData(
            SerializationInfo info, StreamingContext context)
        {
            base.GetObjectData(info, context);
            info.AddValue(nameof(ReceivedMessage), ReceivedMessage);
        }
    }
}
