#nullable enable
using System;
using Libplanet.Crypto;
using Libplanet.Net.Transports;

namespace Libplanet.Net.Messages
{
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
        /// <exception cref="ArgumentNullException">Thrown when <paramref name="peer"/> is
        /// <c>null</c>.</exception>
        T Encode(
            Message message,
            PrivateKey privateKey,
            Peer peer,
            DateTimeOffset timestamp,
            AppProtocolVersion version);

        /// <summary>
        /// Decodes given <see typeref="T"/>-typed <paramref name="encoded"/> into
        /// <see cref="Message"/> and checks its validity.
        /// <seealso cref="Encode"/>
        /// </summary>
        /// <param name="encoded">A <see typeref="T"/>-typed instance to parse.</param>
        /// <param name="reply">A flag to express whether the target is a reply of other message.
        /// </param>
        /// <param name="appProtocolVersionValidator">
        /// The delegate validates the app protocol version of the message.
        /// </param>
        /// <param name="lifetime">
        /// The lifetime of a message.
        /// Messages generated before this value from the current time are ignored.
        /// If <c>null</c> is given, messages will not be ignored by its timestamp.</param>
        /// <returns>A <see cref="Message"/> parsed from <paramref name="encoded"/>.</returns>
        /// <exception cref="ArgumentException">
        /// Thrown when empty <paramref name="encoded"/> is given.</exception>
        /// <exception cref="DifferentAppProtocolVersionException">Thrown when
        /// local version does not match with given <paramref name="encoded"/>'s
        /// <see cref="Version"/> by given <paramref name="appProtocolVersionValidator"/>.
        /// </exception>
        /// <exception cref="InvalidMessageException">
        /// Thrown when given <paramref name="encoded"/>'s signer is invalid.</exception>
        Message Decode(
            T encoded,
            bool reply,
            Action<byte[], Peer, AppProtocolVersion> appProtocolVersionValidator,
            TimeSpan? lifetime);
    }
}
