using System;
using Libplanet.Crypto;
using Libplanet.Net.Transports;

namespace Libplanet.Net.Messages
{
    /// <summary>
    /// An interface to encode and decode <see cref="Message"/>.
    /// </summary>
    /// <typeparam name="T">An encoded message type.</typeparam>
    public interface IMessageCodec<T>
    {
        /// <summary>
        /// Encodes the message to <see typeref="T"/>-typed instance with given
        /// <paramref name="privateKey"/>, <paramref name="peer"/> and <paramref name="version"/>.
        /// </summary>
        /// <param name="message">A message to encode.</param>
        /// <param name="privateKey">A <see cref="PrivateKey"/> to sign message.</param>
        /// <param name="peer"><see cref="Peer"/>-typed representation of the
        /// sender's transport layer.
        /// <seealso cref="ITransport.AsPeer"/></param>
        /// <param name="timestamp">The <see cref="DateTimeOffset"/> of the message is created.
        /// </param>
        /// <param name="version"><see cref="AppProtocolVersion"/>-typed version of the
        /// transport layer.</param>
        /// <returns>A <see typeref="T"/> containing the signed <see cref="Message"/>.
        /// </returns>
        T Encode(
            Message message,
            PrivateKey privateKey,
            Peer peer,
            DateTimeOffset timestamp,
            AppProtocolVersion version);

        /// <summary>
        /// Decodes given <see typeref="T"/>-typed <paramref name="encoded"/> into
        /// a <see cref="Message"/>.
        /// <seealso cref="Encode"/>
        /// </summary>
        /// <param name="encoded">A <see typeref="T"/>-typed instance to parse.</param>
        /// <param name="reply">A flag to express whether the target is a reply of other message.
        /// </param>
        /// <param name="appProtocolVersionValidator">
        /// The delegate validates the app protocol version of the message.
        /// </param>
        /// <returns>A <see cref="Message"/> parsed from <paramref name="encoded"/>.</returns>
        /// <exception cref="ArgumentException">
        /// Thrown when empty <paramref name="encoded"/> is given.</exception>
        /// <exception cref="InvalidMessageTimestampException">Thrown when the timestamp of
        /// <paramref name="encoded"/> is invalid.</exception>
        /// <exception cref="InvalidMessageSignatureException">Thrown when the signer of
        /// <paramref name="encoded"/> is invalid.</exception>
        /// <exception cref="DifferentAppProtocolVersionException">Thrown when
        /// the <see cref="AppProtocolVersion"/> attached to <paramref name="encoded"/> does
        /// not match the one in <paramref name="appProtocolVersionValidator"/>.</exception>
        /// <remarks>
        /// A <see cref="Message"/> with an invalid property value is never decoded even if
        /// it can be decoded.
        /// </remarks>
        Message Decode(
            T encoded,
            bool reply,
            Action<byte[], Peer, AppProtocolVersion> appProtocolVersionValidator);
    }
}
