using System;
using Libplanet.Net.Messages;

namespace Libplanet.Net.Transports
{
    /// <summary>
    /// An <see cref="Exception"/> thrown when fail to send a <see cref="Message"/>.
    /// </summary>
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

        public BoundPeer Peer { get; }
    }
}
