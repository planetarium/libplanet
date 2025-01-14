using System;
using Libplanet.Net.Messages;

namespace Libplanet.Net.Transports
{
    /// <summary>
    /// An <see cref="Exception"/> thrown when fail to complete a sending and receiving messages
    /// cycle via <see cref="ITransport"/> for one of the expected reasons such as normal timeout,
    /// receiving an invalid reply, etc.
    /// </summary>
    [Serializable]
    public class CommunicationFailException : Exception
    {
        public CommunicationFailException(
            string message,
            MessageContent.MessageType messageType,
            BoundPeer peer)
            : base(message)
        {
            Peer = peer;
            MessageType = messageType;
        }

        public CommunicationFailException(
            string message,
            MessageContent.MessageType messageType,
            BoundPeer peer,
            Exception innerException)
            : base(message, innerException)
        {
            Peer = peer;
            MessageType = messageType;
        }

        public BoundPeer Peer { get; }

        public MessageContent.MessageType MessageType { get; }
    }
}
