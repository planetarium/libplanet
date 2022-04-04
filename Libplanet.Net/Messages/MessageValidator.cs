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
            TimeSpan? messageTimestampBuffer,
            DifferentAppProtocolVersionEncountered? differentAppProtocolVersionEncountered)
        {
            LocalAppProtocolVersion = localAppProtocolVersion;
            TrustedAppProtocolVersionSigners = trustedAppProtocolVersionSigners;
            MessageTimestampBuffer = messageTimestampBuffer;
            DifferentAppProtocolVersionEncountered =
                differentAppProtocolVersionEncountered ?? ((p, pv, lv) => { });
        }

        internal AppProtocolVersion LocalAppProtocolVersion { get; }

        internal IImmutableSet<PublicKey>? TrustedAppProtocolVersionSigners { get; }

        internal TimeSpan? MessageTimestampBuffer { get; }

        internal DifferentAppProtocolVersionEncountered DifferentAppProtocolVersionEncountered
        {
            get;
        }

        internal void ValidateAppProtocolVersion(
            Peer remotePeer, byte[] identity, AppProtocolVersion remoteVersion) =>
            ValidateAppProtocolVersionTemplate(
                LocalAppProtocolVersion,
                TrustedAppProtocolVersionSigners,
                DifferentAppProtocolVersionEncountered,
                remotePeer,
                identity,
                remoteVersion);

        internal void ValidateTimestamp(
            Peer peer, DateTimeOffset currentTimestamp, DateTimeOffset messageTimestamp) =>
            ValidateTimestampTemplate(
                MessageTimestampBuffer,
                peer,
                currentTimestamp,
                messageTimestamp);

        internal void ValidateSignature(
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
            AppProtocolVersion localAppProtocolVersion,
            IImmutableSet<PublicKey>? trustedAppProtocolVersionSigners,
            DifferentAppProtocolVersionEncountered differentAppProtocolVersionEncountered,
            Peer remotePeer,
            byte[] identity,
            AppProtocolVersion remoteVersion)
        {
            if (remoteVersion.Equals(localAppProtocolVersion))
            {
                return;
            }

            bool trusted = !(
                trustedAppProtocolVersionSigners is { } tapvs &&
                tapvs.All(publicKey => !remoteVersion.Verify(publicKey)));
            if (trusted)
            {
                differentAppProtocolVersionEncountered(
                    remotePeer, remoteVersion, localAppProtocolVersion);
            }

            throw new DifferentAppProtocolVersionException(
                $"The version of the received message is not valid.\n" +
                $"Remote version: {remoteVersion} " +
                $"[{ByteUtil.Hex(remoteVersion.Signature)} by {remoteVersion.Signer}]\n" +
                $"Local version: {localAppProtocolVersion} " +
                $"[{ByteUtil.Hex(localAppProtocolVersion.Signature)} " +
                $"by {localAppProtocolVersion.Signer}]\n" +
                $"Signed by a trusted signer: {trusted}",
                remotePeer,
                identity,
                localAppProtocolVersion,
                remoteVersion,
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
                string message =
                    $"Received message is invalid, created at " +
                    $"{messageTimestamp.ToString(TimestampFormat, CultureInfo.InvariantCulture)} " +
                    $"but designated lifetime is {buffer} and " +
                    $"the current datetime offset is " +
                    $"{currentTimestamp.ToString(TimestampFormat, CultureInfo.InvariantCulture)}.";
                throw new InvalidMessageTimestampException(
                    message, peer, messageTimestamp, buffer, currentTimestamp);
            }
        }
    }
}
