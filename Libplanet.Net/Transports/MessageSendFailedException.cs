using System;
using System.Runtime.Serialization;
using Libplanet.Net.Messages;

namespace Libplanet.Net.Transports
{
    [Serializable]
    public class MessageSendFailedException : Exception
    {
        public MessageSendFailedException(
            string message, Message.MessageType messageType, BoundPeer peer)
            : base(message)
        {
            Peer = peer;
            MessageType = messageType;
        }

        public MessageSendFailedException(SerializationInfo info, StreamingContext context)
            : base(info, context)
        {
            Peer = info.GetValue(nameof(Peer), typeof(BoundPeer)) is BoundPeer peer
                ? peer
                : throw new SerializationException($"{nameof(Peer)} is of an invalid type.");
            MessageType = info.GetValue(nameof(MessageType), typeof(Message.MessageType))
                is Message.MessageType messageType
                ? messageType
                : throw new SerializationException($"{nameof(MessageType)} is of an invalid type.");
        }

        public BoundPeer Peer { get; private set; }

        public Message.MessageType MessageType { get; private set; }

        public override void GetObjectData(SerializationInfo info, StreamingContext context)
        {
            base.GetObjectData(info, context);
            info.AddValue(nameof(Peer), Peer, typeof(BoundPeer));
            info.AddValue(nameof(MessageType), MessageType, typeof(Message.MessageType));
        }
    }
}
