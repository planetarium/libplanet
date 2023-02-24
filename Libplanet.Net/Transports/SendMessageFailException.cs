using System;
using System.Runtime.Serialization;
using Libplanet.Net.Messages;
using Libplanet.Serialization;

namespace Libplanet.Net.Transports
{
    /// <summary>
    /// An <see cref="Exception"/> thrown when fail to send a <see cref="Message"/>.
    /// </summary>
    [Serializable]
    public class SendMessageFailException : Exception
    {
        internal SendMessageFailException(string message, BoundPeer peer)
            : base(message)
        {
            Peer = peer;
        }

        internal SendMessageFailException(string message, BoundPeer peer, Exception innerException)
            : base(message, innerException)
        {
            Peer = peer;
        }

        protected SendMessageFailException(SerializationInfo info, StreamingContext context)
            : base(info, context)
        {
            Peer = info.GetValue<BoundPeer>(nameof(Peer));
        }

        public BoundPeer Peer { get; }

        public override void GetObjectData(SerializationInfo info, StreamingContext context)
        {
            base.GetObjectData(info, context);
            info.AddValue(nameof(Peer), Peer);
        }
    }
}
