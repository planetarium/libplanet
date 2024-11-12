using System;
using System.Linq;
using Libplanet.Crypto;
using Libplanet.Net.Transports;
using NetMQ;

namespace Libplanet.Net.Messages
{
    public class NetMQMessageCodec : IMessageCodec<NetMQMessage>
    {
        public static readonly int CommonFrames =
            Enum.GetValues(typeof(MessageFrame)).Length;

        public enum MessageFrame
        {
            /// <summary>
            /// Frame containing <see cref="AppProtocolVersion"/>.
            /// </summary>
            Version = 0,

            /// <summary>
            /// Frame containing the type of the message.
            /// </summary>
            Type = 1,

            /// <summary>
            /// Frame containing the sender <see cref="BoundPeer"/> of the<see cref="Message"/>.
            /// </summary>
            Peer = 2,

            /// <summary>
            /// Frame containing the datetime when the <see cref="Message"/> is created.
            /// </summary>
            Timestamp = 3,

            /// <summary>
            /// Frame containing signature of the <see cref="Message"/>.
            /// </summary>
            Sign = 4,
        }

        /// <inheritdoc/>
        public NetMQMessage Encode(
            Message message,
            PrivateKey privateKey)
        {
            if (!privateKey.PublicKey.Equals(message.Remote.PublicKey))
            {
                throw new InvalidCredentialException(
                    $"An invalid private key was provided: the provided private key's " +
                    $"expected public key is {message.Remote.PublicKey} " +
                    $"but its actual public key is {privateKey.PublicKey}.",
                    message.Remote.PublicKey,
                    privateKey.PublicKey);
            }

            var netMqMessage = new NetMQMessage();

            // Push message
            byte[] messageBytes = message.ToByteArray();
            netMqMessage.Push(messageBytes);

            // Make and insert signature
            byte[] signature = privateKey.Sign(messageBytes);
            netMqMessage.Push(signature);

            // Add identity if necessary
            if (message.Identity != null)
            {
                netMqMessage.Push(message.Identity);
            }

            return netMqMessage;
        }

        /// <summary>
        /// Parses a <see cref="MessageContent.MessageType"/> from given <see cref="NetMQMessage"/>.
        /// </summary>
        /// <param name="encoded">A encoded <see cref="NetMQMessage"/>.</param>
        /// <param name="reply">A flag to express whether the target is a reply of other message.
        /// </param>
        /// <exception cref="IndexOutOfRangeException">Thrown if given <see cref="NetMQMessage"/>
        /// has not enough <see cref="NetMQFrame"/> for parsing a message type.</exception>
        /// <returns>Returns a <see cref="MessageContent.MessageType"/> of given
        /// <paramref name="encoded"/>. If given value cannot be
        /// interpreted in <see cref="MessageContent.MessageType"/>,
        /// this would return a integer number.</returns>
        public MessageContent.MessageType ParseMessageType(NetMQMessage encoded, bool reply)
            => Decode(encoded, reply).Content.Type;

        /// <inheritdoc/>
        public Message Decode(NetMQMessage encoded, bool reply)
        {
            if (encoded.FrameCount == 0)
            {
                throw new ArgumentException("Can't parse empty NetMQMessage.");
            }

            byte[]? identity = reply ? null : encoded[0].Buffer.ToArray();
            byte[] signatureBytes = encoded[reply ? 0 : 1].Buffer.ToArray();
            byte[] messageBytes = encoded[reply ? 1 : 2].Buffer.ToArray();
            Message message = Message.FromByteArray(messageBytes, identity);

            if (!message.Remote.PublicKey.Verify(messageBytes, signatureBytes))
            {
                throw new InvalidMessageSignatureException(
                    "The signature of an encoded message is invalid.",
                    message.Remote,
                    message.Remote.PublicKey,
                    messageBytes,
                    signatureBytes);
            }

            return message;
        }
    }
}
