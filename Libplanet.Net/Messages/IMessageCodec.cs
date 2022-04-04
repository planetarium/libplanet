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
        /// <para>
        /// The local <see cref="AppProtocolVersion"/> used for <see cref="Encode"/>
        /// and <see cref="Decode"/> methods.
        /// </para>
        /// <para>
        /// In particular, this is used in the following cases:
        /// <list type="bullet">
        ///     <item><description>
        ///         When encoding, this value is attached to the encoded output.
        ///     </description></item>
        ///     <item><description>
        ///         When decoding, the encoded message's <see cref="AppProtocolVersion"/> must
        ///         match this value.
        ///     </description></item>
        /// </list>
        /// </para>
        /// </summary>
        AppProtocolVersion LocalAppProtocolVersion { get; }

        /// <summary>
        /// <para>
        /// An <see cref="IImmutableSet{T}"/> of <see cref="Address"/>es to trust as a signer
        /// when a different <see cref="AppProtocolVersion"/> is encountered.
        /// </para>
        /// <para>
        /// Whether to trust an unknown <see cref="AppProtocolVersion"/>, i.e.
        /// an <see cref="AppProtocolVersion"/> that is different
        /// from <see cref="LocalAppProtocolVersion"/>, depends on this value:
        /// <list type="bullet">
        ///     <item><description>
        ///         If <c>null</c>, the <see cref="AppProtocolVersion"/> in question is trusted
        ///         regardless of its signer.
        ///     </description></item>
        ///     <item><description>
        ///         If not <c>null</c>, an <see cref="AppProtocolVersion"/> is trusted if it is
        ///         signed by one of the signers in the set.  In particular, if the set is empty,
        ///         no <see cref="AppProtocolVersion"/> is trusted.
        ///     </description></item>
        /// </list>
        /// </para>
        /// </summary>
        IImmutableSet<PublicKey>? TrustedAppProtocolVersionSigners { get; }

        /// <summary>The <see cref="TimeSpan"/> to use as a buffer when
        /// decoding <see cref="Message"/>s.
        /// </summary>
        TimeSpan? MessageTimestampBuffer { get; }

        /// <summary>
        /// Encodes the message to <see typeref="T"/>-typed instance with given
        /// <paramref name="privateKey"/>, <paramref name="peer"/>
        /// and <see cref="LocalAppProtocolVersion"/>.
        /// </summary>
        /// <param name="message">A message to encode.</param>
        /// <param name="privateKey">A <see cref="PrivateKey"/> to sign message.</param>
        /// <param name="peer"><see cref="Peer"/>-typed representation of the
        /// sender's transport layer.
        /// <seealso cref="ITransport.AsPeer"/></param>
        /// <param name="timestamp">The <see cref="DateTimeOffset"/> of the message is created.
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
        /// <exception cref="InvalidMessageSignatureException">Thrown when the signer of
        /// <paramref name="encoded"/> is invalid.</exception>
        /// <exception cref="DifferentAppProtocolVersionException">Thrown when
        /// the <see cref="AppProtocolVersion"/> attached to <paramref name="encoded"/> does
        /// not match <see cref="LocalAppProtocolVersion"/>.</exception>
        /// <remarks>
        /// A <see cref="Message"/> with an invalid property value is never decoded even if
        /// it can be decoded.
        /// </remarks>
        Message Decode(
            T encoded,
            bool reply);
    }
}
