using System;
using System.Runtime.Serialization;
using Bencodex;
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
        private static Codec _codec = new Codec();

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
            Peer = new BoundPeer(_codec.Decode(info.GetValue<byte[]>(nameof(Peer))));
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
            info.AddValue(nameof(Peer), _codec.Encode(Peer.Bencoded));
            info.AddValue(nameof(MessageType), MessageType, typeof(Message.MessageType));
        }
    }
}
