using System;
using System.Collections.Immutable;
using System.Globalization;
using System.Linq;
using Libplanet.Crypto;
using Libplanet.Net.Transports;

namespace Libplanet.Net.Messages
{
    /// <summary>
    /// A helper class for an <see cref="IMessageCodec{T}"/> to validate
    /// a decoded <see cref="Message"/>.
    /// </summary>
    public class MessageValidator
    {
        private const string TimestampFormat = "yyyy-MM-ddTHH:mm:ss.ffffffZ";
        private readonly AppProtocolVersionOptions _appProtocolVersionOptions;

        internal MessageValidator(
            AppProtocolVersionOptions appProtocolVersionOptions,
            TimeSpan? messageTimestampBuffer)
        {
            _appProtocolVersionOptions = appProtocolVersionOptions;
            MessageTimestampBuffer = messageTimestampBuffer;
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
        public AppProtocolVersion Apv => _appProtocolVersionOptions.AppProtocolVersion;

        /// <summary>
        /// <para>
        /// An <see cref="IImmutableSet{T}"/> of <see cref="Address"/>es to trust as a signer
        /// when a different <see cref="AppProtocolVersion"/> is encountered.
        /// </para>
        /// <para>
        /// Whether to trust an unknown <see cref="AppProtocolVersion"/>, i.e.
        /// an <see cref="AppProtocolVersion"/> that is different
        /// from <see cref="Apv"/>.  An <see cref="AppProtocolVersion"/> is trusted if it is signed
        /// by one of the signers in the set.  In particular, if the set is empty,
        /// no <see cref="AppProtocolVersion"/> is trusted.
        /// </para>
        /// </summary>
        public IImmutableSet<PublicKey> TrustedApvSigners =>
            _appProtocolVersionOptions.TrustedAppProtocolVersionSigners;

        /// <summary>
        /// A callback method that gets invoked when a an <see cref="AppProtocolVersion"/>
        /// by a <em>trusted</em> signer that is different from <see cref="Apv"/> is encountered.
        /// </summary>
        /// <remarks>
        /// If <see langword="null"/>, no action is taken.
        /// </remarks>
        public DifferentAppProtocolVersionEncountered DifferentApvEncountered =>
            _appProtocolVersionOptions.DifferentAppProtocolVersionEncountered;

        /// <summary>
        /// <para>
        /// The <see cref="TimeSpan"/> to use as a buffer when decoding <see cref="Message"/>s.
        /// </para>
        /// <para>
        /// Whether a decoded <see cref="Message"/> is valid or not depends on this value:
        /// <list type="bullet">
        ///     <item><description>
        ///         If <see langword="null"/>, there is no restriction
        ///         on <see cref="Message.Timestamp"/> for received <see cref="Message"/>s.
        ///     </description></item>
        ///     <item><description>
        ///         If not <see langword="null"/>, the absolute difference between the timestamp of
        ///         a received <see cref="Message"/> and current time should be less than
        ///         this value.
        ///     </description></item>
        /// </list>
        /// </para>
        /// </summary>
        public TimeSpan? MessageTimestampBuffer { get; }

        /// <summary>
        /// Validates an <see cref="AppProtocolVersion"/> against <see cref="Apv"/>.
        /// Any <see cref="AppProtocolVersion"/> that is different from <see cref="Apv"/> is
        /// considered invalid and an <see cref="DifferentAppProtocolVersionException"/> will be
        /// thrown.
        /// </summary>
        /// <param name="message">The <see cref="Message"/> to validate.</param>
        /// <remarks>
        /// If <see cref="Message.Version"/> of <paramref name="message"/> is not valid but
        /// is signed by a trusted signer, then <see cref="DifferentApvEncountered"/> is called.
        /// </remarks>
        /// <exception cref="NullReferenceException">Thrown when <see cref="Message.Remote"/> is
        /// <see langword="null"/> for <paramref name="message"/>.</exception>
        /// <exception cref="DifferentAppProtocolVersionException">Thrown when
        /// local version does not match with given <paramref name="message"/>'s
        /// <see cref="Message.Version"/>.</exception>
        /// <seealso cref="Apv"/>
        /// <seealso cref="TrustedApvSigners"/>
        /// <seealso cref="DifferentApvEncountered"/>
        public void ValidateAppProtocolVersion(Message message) =>
            ValidateAppProtocolVersion(Apv, TrustedApvSigners, DifferentApvEncountered, message);

        /// <summary>
        /// Validates a <see cref="DateTimeOffset"/> timestamp against current timestamp.
        /// </summary>
        /// <param name="message">The <see cref="Message"/> to validate.</param>
        /// <exception cref="InvalidMessageTimestampException">Thrown when the timestamp of
        /// <paramref name="message"/> is invalid.</exception>
        /// <seealso cref="MessageTimestampBuffer"/>.
        public void ValidateTimestamp(Message message) =>
            ValidateTimestamp(MessageTimestampBuffer, DateTimeOffset.UtcNow, message.Timestamp);

        private static void ValidateAppProtocolVersion(
            AppProtocolVersion appProtocolVersion,
            IImmutableSet<PublicKey> trustedAppProtocolVersionSigners,
            DifferentAppProtocolVersionEncountered differentAppProtocolVersionEncountered,
            Message message)
        {
            if (message.Remote is BoundPeer peer)
            {
                if (message.Version.Equals(appProtocolVersion))
                {
                    return;
                }

                bool trusted = !trustedAppProtocolVersionSigners.All(
                    publicKey => !message.Version.Verify(publicKey));

                if (trusted)
                {
                    differentAppProtocolVersionEncountered(
                        peer, message.Version, appProtocolVersion);
                }

                if (!trusted || !message.Version.Version.Equals(appProtocolVersion.Version))
                {
                    throw new DifferentAppProtocolVersionException(
                        $"The APV of a received message is invalid:\n" +
                        $"Expected: APV {appProtocolVersion} with " +
                        $"signature {ByteUtil.Hex(appProtocolVersion.Signature)} by " +
                        $"signer {appProtocolVersion.Signer}\n" +
                        $"Actual: APV {message.Version} with " +
                        $"signature: {ByteUtil.Hex(message.Version.Signature)} by " +
                        $"signer: {message.Version.Signer}\n" +
                        $"Signed by a trusted signer: {trusted}",
                        appProtocolVersion,
                        message.Version,
                        trusted);
                }
            }
            else
            {
                throw new NullReferenceException(
                    $"Property {nameof(message.Remote)} of {nameof(message)} cannot be null.");
            }
        }

        private static void ValidateTimestamp(
            TimeSpan? timestampBuffer,
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
                    messageTimestamp,
                    buffer,
                    currentTimestamp);
            }
        }
    }
}
