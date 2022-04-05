using System;
using System.Collections.Immutable;
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
        /// See <see cref="MessageValidator.Apv"/>.
        /// </summary>
        AppProtocolVersion Apv { get; }

        /// <summary>
        /// See <see cref="MessageValidator.TrustedApvSigners"/>.
        /// </summary>
        IImmutableSet<PublicKey>? TrustedApvSigners { get; }

        /// <summary>
        /// See <see cref="MessageValidator.MessageTimestampBuffer"/>.
        /// </summary>
        TimeSpan? MessageTimestampBuffer { get; }

        /// <summary>
        /// See <see cref="MessageValidator.DifferentApvEncountered"/>.
        /// </summary>
        DifferentAppProtocolVersionEncountered? DifferentApvEncountered { get; }

        /// <summary>
        /// Encodes the message to <see typeref="T"/>-typed instance with given
        /// <paramref name="privateKey"/>, <paramref name="peer"/>
        /// and <see cref="Apv"/>.
        /// </summary>
        /// <param name="message">The message to encode.</param>
        /// <param name="privateKey">The <see cref="PrivateKey"/> to sign message.</param>
        /// <param name="peer">A <see cref="Peer"/>-typed representation of the
        /// sender's transport layer.
        /// <seealso cref="ITransport.AsPeer"/></param>
        /// <param name="timestamp">The <see cref="DateTimeOffset"/> of the message creation.
        /// </param>
        /// <returns>A <see typeref="T"/> containing the signed <see cref="Message"/>.
        /// </returns>
        T Encode(
            Message message,
            PrivateKey privateKey,
            Peer peer,
            DateTimeOffset timestamp);

        /// <summary>
        /// Decodes given <see typeref="T"/>-typed <paramref name="encoded"/> into
        /// a <see cref="Message"/>.
        /// <seealso cref="Encode"/>
        /// </summary>
        /// <param name="encoded">A <see typeref="T"/>-typed instance to parse.</param>
        /// <param name="reply">A flag to express whether the target is a reply of other message.
        /// </param>
        /// <returns>A <see cref="Message"/> parsed from <paramref name="encoded"/>.</returns>
        /// <exception cref="ArgumentException">
        /// Thrown when empty <paramref name="encoded"/> is given.</exception>
        /// <exception cref="InvalidMessageTimestampException">Thrown when the timestamp of
        /// <paramref name="encoded"/> is invalid.</exception>
        /// <exception cref="InvalidMessageSignatureException">Thrown when the signature of
        /// <paramref name="encoded"/> is invalid.</exception>
        /// <exception cref="DifferentAppProtocolVersionException">Thrown when
        /// the <see cref="AppProtocolVersion"/> of <paramref name="encoded"/> does not
        /// match <see cref="Apv"/>.</exception>
        /// <remarks>
        /// A <see cref="Message"/> with an invalid property value is never decoded even if
        /// it can be decoded.
        /// </remarks>
        Message Decode(
            T encoded,
            bool reply);
    }
}
