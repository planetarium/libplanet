using System;
using Libplanet.Crypto;
using Libplanet.Net.Transports;

namespace Libplanet.Net.Messages
{
    public interface IMessageCodec<T>
    {
        /// <summary>
        /// Encodes the message to <see typeref="T"/>-typed instance with given
        /// <paramref name="privateKey"/> and <paramref name="peer"/>.
        /// </summary>
        /// <param name="message">The message to encode.</param>
        /// <param name="privateKey">The <see cref="PrivateKey"/> to sign the encoded message.
        /// </param>
        /// <param name="appProtocolVersion">The <see cref="AppProtocolVersion"/> of
        /// the transport layer.</param>
        /// <param name="peer">The <see cref="BoundPeer"/>-typed representation of
        /// the transport layer.
        /// <seealso cref="ITransport.AsPeer"/></param>
        /// <param name="timestamp">The <see cref="DateTimeOffset"/> of the time
        /// <paramref name="message"/> is encoded.
        /// </param>
        /// <returns>A <see typeref="T"/> containing the signed <see cref="Message"/>.
        /// </returns>
        /// <exception cref="InvalidCredentialException">Thrown when <paramref name="privateKey"/>'s
        /// <see cref="PublicKey"/> does not match that of <paramref name="peer"/>.</exception>
        T Encode(
            Message message,
            PrivateKey privateKey,
            AppProtocolVersion appProtocolVersion,
            BoundPeer peer,
            DateTimeOffset timestamp);

        /// <summary>
        /// Decodes given <see typeref="T"/>-typed <paramref name="encoded"/> into
        /// <see cref="Message"/> and checks its validity.
        /// <seealso cref="Encode"/>
        /// </summary>
        /// <param name="encoded">A <see typeref="T"/>-typed instance to parse.</param>
        /// <param name="reply">A flag to express whether the target is a reply of other message.
        /// </param>
        /// <returns>A <see cref="Message"/> parsed from <paramref name="encoded"/>.</returns>
        /// <exception cref="ArgumentException">Thrown when empty <paramref name="encoded"/>
        /// is given.</exception>
        /// <exception cref="InvalidMessageSignatureException">Thrown when the signer of
        /// <paramref name="encoded"/> is invalid.</exception>
        Message Decode(
            T encoded,
            bool reply);
    }
}
