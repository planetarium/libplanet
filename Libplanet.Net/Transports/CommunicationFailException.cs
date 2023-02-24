using System;
using System.Runtime.Serialization;
using Libplanet.Net.Messages;
using Libplanet.Serialization;

namespace Libplanet.Net.Transports
{
    /// <summary>
    /// An <see cref="Exception"/> thrown when fail to complete a sending and receiving messages
    /// cycle via <see cref="ITransport"/> for one of the expected reasons such as normal timeout,
    /// receiving a invalid reply, etc.
    /// </summary>
    [Serializable]
    public class CommunicationFailException : Exception
    {
        public CommunicationFailException(
            string message,
            Message.MessageType messageType,
            BoundPeer peer)
            : base(message)
        {
            Peer = peer;
            MessageType = messageType;
        }

        public CommunicationFailException(
            string message,
            Message.MessageType messageType,
            BoundPeer peer,
            Exception innerException)
            : base(message, innerException)
        {
            Peer = peer;
            MessageType = messageType;
        }

        public CommunicationFailException(SerializationInfo info, StreamingContext context)
            : base(info, context)
        {
            Peer = info.GetValue<BoundPeer>(nameof(Peer));
            MessageType = info.GetValue(nameof(MessageType), typeof(Message.MessageType))
                is Message.MessageType messageType
                ? messageType
                : throw new SerializationException($"{nameof(MessageType)} is of an invalid type.");
        }

        public BoundPeer Peer { get; }

        public Message.MessageType MessageType { get; }

        public override void GetObjectData(SerializationInfo info, StreamingContext context)
        {
            base.GetObjectData(info, context);
            info.AddValue(nameof(Peer), Peer);
            info.AddValue(nameof(MessageType), MessageType, typeof(Message.MessageType));
        }
    }
}
