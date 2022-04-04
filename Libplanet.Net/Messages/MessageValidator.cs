using System;
using System.Collections.Immutable;
using System.Globalization;
using System.Linq;
using Libplanet.Crypto;

namespace Libplanet.Net.Messages
{
    internal class MessageValidator
    {
        private const string TimestampFormat = "yyyy-MM-ddTHH:mm:ss.ffffffZ";

        internal MessageValidator(
            AppProtocolVersion localAppProtocolVersion,
            IImmutableSet<PublicKey>? trustedAppProtocolVersionSigners,
            TimeSpan? messageTimestampBuffer)
        {
            LocalAppProtocolVersion = localAppProtocolVersion;
            TrustedAppProtocolVersionSigners = trustedAppProtocolVersionSigners;
            MessageTimestampBuffer = messageTimestampBuffer;
        }

        internal AppProtocolVersion LocalAppProtocolVersion { get; }

        internal IImmutableSet<PublicKey>? TrustedAppProtocolVersionSigners { get; }

        internal TimeSpan? MessageTimestampBuffer { get; }

        internal void ValidateAppProtocolVersion(
            byte[] identity, Peer remotePeer, AppProtocolVersion remoteVersion) =>
            ValidateAppProtocolVersionTemplate(
                LocalAppProtocolVersion,
                TrustedAppProtocolVersionSigners,
                identity,
                remotePeer,
                remoteVersion);

        internal void ValidateTimestamp(
            DateTimeOffset currentTimestamp, DateTimeOffset messageTimestamp) =>
            ValidateTimestampTemplate(
                MessageTimestampBuffer,
                currentTimestamp,
                messageTimestamp);

        internal void ValidateSignature(
            PublicKey publicKey,
            byte[] messageToVerify,
            byte[] signature)
        {
            if (!publicKey.Verify(messageToVerify, signature))
            {
                throw new InvalidMessageSignatureException("The message signature is invalid");
            }
        }

        private static void ValidateAppProtocolVersionTemplate(
            AppProtocolVersion localAppProtocolVersion,
            IImmutableSet<PublicKey>? trustedAppProtocolVersionSigners,
            byte[] identity,
            Peer remotePeer,
            AppProtocolVersion remoteVersion)
        {
            if (remoteVersion.Equals(localAppProtocolVersion))
            {
                return;
            }

            bool trusted = !(
                trustedAppProtocolVersionSigners is { } tapvs &&
                tapvs.All(publicKey => !remoteVersion.Verify(publicKey)));
            throw new DifferentAppProtocolVersionException(
                "The version of the received message is not valid.",
                identity,
                localAppProtocolVersion,
                remoteVersion,
                trusted);
        }

        private static void ValidateTimestampTemplate(
            TimeSpan? timestampBuffer,
            DateTimeOffset currentTimestamp,
            DateTimeOffset messageTimestamp)
        {
            if (timestampBuffer is TimeSpan buffer &&
                (currentTimestamp - messageTimestamp).Duration() > buffer)
            {
                string message =
                    $"Received message is invalid, created at " +
                    $"{messageTimestamp.ToString(TimestampFormat, CultureInfo.InvariantCulture)} " +
                    $"but designated lifetime is {buffer} and " +
                    $"the current datetime offset is " +
                    $"{currentTimestamp.ToString(TimestampFormat, CultureInfo.InvariantCulture)}.";
                throw new InvalidMessageTimestampException(
                    message, messageTimestamp, buffer, currentTimestamp);
            }
        }
    }
}
