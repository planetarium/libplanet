using System;
using System.Collections.Immutable;
using System.Globalization;
using System.Linq;
using Libplanet.Crypto;

namespace Libplanet.Net.Messages
{
    /// <summary>
    /// A helper class for an <see cref="IMessageCodec{T}"/> to validate
    /// a decoded <see cref="Message"/>.
    /// </summary>
    public class MessageValidator
    {
        private const string TimestampFormat = "yyyy-MM-ddTHH:mm:ss.ffffffZ";

        internal MessageValidator(
            AppProtocolVersion appProtocolVersion,
            IImmutableSet<PublicKey>? trustedAppProtocolVersionSigners,
            TimeSpan? messageTimestampBuffer,
            DifferentAppProtocolVersionEncountered? differentAppProtocolVersionEncountered)
        {
            Apv = appProtocolVersion;
            TrustedApvSigners = trustedAppProtocolVersionSigners;
            MessageTimestampBuffer = messageTimestampBuffer;
            DifferentApvEncountered = differentAppProtocolVersionEncountered;
        }

        /// <summary>
        /// <para>
        /// The local <see cref="AppProtocolVersion"/> used for
        /// <see cref="IMessageCodec{T}.Encode"/> and <see cref="IMessageCodec{T}.Decode"/> methods.
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
        public AppProtocolVersion Apv { get; }

        /// <summary>
        /// <para>
        /// An <see cref="IImmutableSet{T}"/> of <see cref="Address"/>es to trust as a signer
        /// when a different <see cref="AppProtocolVersion"/> is encountered.
        /// </para>
        /// <para>
        /// Whether to trust an unknown <see cref="AppProtocolVersion"/>, i.e.
        /// an <see cref="AppProtocolVersion"/> that is different
        /// from <see cref="Apv"/>, depends on this value:
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
        public IImmutableSet<PublicKey>? TrustedApvSigners { get; }

        /// <summary>
        /// <para>
        /// The <see cref="TimeSpan"/> to use as a buffer when decoding <see cref="Message"/>s.
        /// </para>
        /// <para>
        /// Whether a decoded <see cref="Message"/> is valid or not depends on this value:
        /// <list type="bullet">
        ///     <item><description>
        ///         If <c>null</c>, there is no restriction on <see cref="Message.Timestamp"/>
        ///         for received <see cref="Message"/>s.
        ///     </description></item>
        ///     <item><description>
        ///         If not <c>null</c>, the absolute difference between the timestamp of
        ///         a received <see cref="Message"/> and current time should be less than
        ///         this value.
        ///     </description></item>
        /// </list>
        /// </para>
        /// </summary>
        public TimeSpan? MessageTimestampBuffer { get; }

        /// <summary>
        /// A callback method that gets invoked when a an <see cref="AppProtocolVersion"/>
        /// by a <em>trusted</em> signer that is different from <see cref="Apv"/> is encountered.
        /// </summary>
        /// <remarks>
        /// If <c>null</c>, no action is taken.
        /// </remarks>
        public DifferentAppProtocolVersionEncountered? DifferentApvEncountered { get; }

        /// <summary>
        /// Validates an <see cref="AppProtocolVersion"/> against <see cref="Apv"/>.
        /// Any <see cref="AppProtocolVersion"/> that is different from <see cref="Apv"/> is
        /// considered invalid and an <see cref="DifferentAppProtocolVersionException"/> will be
        /// thrown.
        /// </summary>
        /// <param name="peer">The <see cref="Peer"/> that has sent the <see cref="Message"/>
        /// with <paramref name="peerAppProtocolVersion"/>.</param>
        /// <param name="identity">The <see cref="Message.Identity"/> attached to the
        /// <see cref="Message"/> with <paramref name="peerAppProtocolVersion"/>.</param>
        /// <param name="peerAppProtocolVersion">The <see cref="AppProtocolVersion"/> to validate.
        /// </param>
        /// <exception cref="DifferentAppProtocolVersionException">Thrown when
        /// <paramref name="peerAppProtocolVersion"/> is different from <see cref="Apv"/>.
        /// </exception>
        /// <remarks>
        /// If <paramref name="peerAppProtocolVersion"/> is not valid but is signed by
        /// a trusted signer, then <see cref="DifferentApvEncountered"/> is called.
        /// </remarks>
        /// <seealso cref="Apv"/>
        /// <seealso cref="TrustedApvSigners"/>
        /// <seealso cref="DifferentApvEncountered"/>
        public void ValidateAppProtocolVersion(
            Peer peer, byte[] identity, AppProtocolVersion peerAppProtocolVersion) =>
            ValidateAppProtocolVersionTemplate(
                Apv,
                TrustedApvSigners,
                DifferentApvEncountered,
                peer,
                identity,
                peerAppProtocolVersion);

        /// <summary>
        /// Validates a <see cref="DateTimeOffset"/> timestamp against current timestamp.
        /// </summary>
        /// <param name="peer">The <see cref="Peer"/> that has sent the <see cref="Message"/>
        /// with <paramref name="messageTimestamp"/>.</param>
        /// <param name="currentTimestamp">Current timestamp.</param>
        /// <param name="messageTimestamp">The <see cref="Message.Timestamp"/> of
        /// the <see cref="Message"/> in question.</param>
        /// <seealso cref="MessageTimestampBuffer"/>.
        public void ValidateTimestamp(
            Peer peer, DateTimeOffset currentTimestamp, DateTimeOffset messageTimestamp) =>
            ValidateTimestampTemplate(
                MessageTimestampBuffer,
                peer,
                currentTimestamp,
                messageTimestamp);

        /// <summary>
        /// Validates a signature of a <see cref="Message"/>.
        /// </summary>
        /// <param name="peer">The <see cref="Peer"/> that has sent the <see cref="Message"/>
        /// with <paramref name="signature"/>.</param>
        /// <param name="publicKey">The <see cref="PublicKey"/> of <paramref name="peer"/>.</param>
        /// <param name="messageToVerify">The portion of the <see cref="Message"/> to verify.
        /// </param>
        /// <param name="signature">The signature of the <see cref="Message"/> to verify.</param>
        /// <exception cref="InvalidMessageSignatureException">Thrown when
        /// <paramref name="signature"/> is invalid.</exception>
        public void ValidateSignature(
            Peer peer,
            PublicKey publicKey,
            byte[] messageToVerify,
            byte[] signature)
        {
            if (!publicKey.Verify(messageToVerify, signature))
            {
                throw new InvalidMessageSignatureException(
                    "The signature of an encoded message is invalid.",
                    peer,
                    publicKey,
                    messageToVerify,
                    signature);
            }
        }

        private static void ValidateAppProtocolVersionTemplate(
            AppProtocolVersion appProtocolVersion,
            IImmutableSet<PublicKey>? trustedAppProtocolVersionSigners,
            DifferentAppProtocolVersionEncountered? differentAppProtocolVersionEncountered,
            Peer peer,
            byte[] identity,
            AppProtocolVersion peerAppProtocolVersion)
        {
            if (peerAppProtocolVersion.Equals(appProtocolVersion))
            {
                return;
            }

            bool trusted = !(
                trustedAppProtocolVersionSigners is { } tapvs &&
                tapvs.All(publicKey => !peerAppProtocolVersion.Verify(publicKey)));
            if (trusted && differentAppProtocolVersionEncountered is { } dapve)
            {
                dapve(peer, peerAppProtocolVersion, appProtocolVersion);
            }

            throw new DifferentAppProtocolVersionException(
                $"The APV of a received message is invalid; " +
                $"Local: APV {appProtocolVersion} " +
                $"with signature {ByteUtil.Hex(appProtocolVersion.Signature)} " +
                $"by signer {appProtocolVersion.Signer}\n" +
                $"Remote: APV {peerAppProtocolVersion} " +
                $"with signature {ByteUtil.Hex(peerAppProtocolVersion.Signature)} " +
                $"by signer {peerAppProtocolVersion.Signer}\n" +
                $"Signed by a trusted signer: {trusted}",
                peer,
                identity,
                appProtocolVersion,
                peerAppProtocolVersion,
                trusted);
        }

        private static void ValidateTimestampTemplate(
            TimeSpan? timestampBuffer,
            Peer peer,
            DateTimeOffset currentTimestamp,
            DateTimeOffset messageTimestamp)
        {
            if (timestampBuffer is TimeSpan buffer &&
                (currentTimestamp - messageTimestamp).Duration() > buffer)
            {
                var cultureInfo = CultureInfo.InvariantCulture;
                throw new InvalidMessageTimestampException(
                    $"The timestamp of a received message is invalid:\n" +
                    $"Message timestamp buffer: {buffer}\n" +
                    $"Current timestamp: " +
                    $"{currentTimestamp.ToString(TimestampFormat, cultureInfo)}\n" +
                    $"Message timestamp: " +
                    $"{messageTimestamp.ToString(TimestampFormat, cultureInfo)}",
                    peer,
                    messageTimestamp,
                    buffer,
                    currentTimestamp);
            }
        }
    }
}
