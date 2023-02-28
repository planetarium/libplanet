using System;

namespace Libplanet.Net.Messages
{
    public class Message
    {
        public Message(
            MessageContent content,
            AppProtocolVersion version,
            BoundPeer remote,
            DateTimeOffset timestamp,
            byte[]? identity)
        {
            Content = content;
            Version = version;
            Remote = remote;
            Timestamp = timestamp;
            Identity = identity;
        }

        /// <summary>
        /// The body of the message that contains the message type and data.
        /// </summary>
        public MessageContent Content { get; }

        /// <summary>
        /// The <see cref="AppProtocolVersion"/> of sender of the <see cref="Message"/>.
        /// </summary>
        public AppProtocolVersion Version { get; }

        /// <summary>
        /// The <see cref="BoundPeer"/> representation of sender of the given <see cref="Message"/>.
        /// </summary>
        public BoundPeer Remote { get; }

        /// <summary>
        /// The <see cref="DateTimeOffset"/> of the <see cref="Message"/>.
        /// </summary>
        public DateTimeOffset Timestamp { get; }

        /// <summary>
        /// The byte array identifies the message to match between
        /// message and its respond used in <see cref="NetMQ"/>.
        /// </summary>
        public byte[]? Identity { get; }
    }
}
