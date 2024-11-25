using System;
using System.Linq;
using Libplanet.Crypto;
using Libplanet.Net.Transports;
using NetMQ;

namespace Libplanet.Net.Messages
{
    public class NetMQMessageCodec : IMessageCodec<NetMQMessage>
    {
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
