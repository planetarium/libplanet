using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Net;
using Libplanet.Crypto;
using Libplanet.Net.Messages;
using Libplanet.Net.Transports;
using Xunit;

namespace Libplanet.Net.Tests.Messages
{
    public class MessageValidatorTest
    {
        [Fact]
        public void ValidateTimestamp()
        {
            var peer = new BoundPeer(new PrivateKey().PublicKey, new DnsEndPoint("0.0.0.0", 0));
            var buffer = TimeSpan.FromSeconds(1);
            var messageValidator = new MessageValidator(new AppProtocolVersionOptions(), buffer);

            // Within buffer window is okay.
            messageValidator.ValidateTimestamp(
                new PingMsg() { Timestamp = DateTimeOffset.UtcNow + buffer.Divide(2) });
            messageValidator.ValidateTimestamp(
                new PingMsg() { Timestamp = DateTimeOffset.UtcNow - buffer.Divide(2) });

            // Outside buffer throws an exception.
            Assert.Throws<InvalidMessageTimestampException>(() =>
                messageValidator.ValidateTimestamp(
                    new PingMsg() { Timestamp = DateTimeOffset.UtcNow + buffer.Multiply(2) }));
            Assert.Throws<InvalidMessageTimestampException>(() =>
                messageValidator.ValidateTimestamp(
                    new PingMsg() { Timestamp = DateTimeOffset.UtcNow - buffer.Multiply(2) }));

            // If buffer is null, no exception gets thrown.
            messageValidator = new MessageValidator(new AppProtocolVersionOptions(), null);
            messageValidator.ValidateTimestamp(
                new PingMsg() { Remote = peer, Timestamp = DateTimeOffset.MaxValue });
            messageValidator.ValidateTimestamp(
                new PingMsg() { Remote = peer, Timestamp = DateTimeOffset.MinValue });
        }

        [Fact]
        public void ValidateAppProtocolVersion()
        {
            var random = new Random();
            var identity = new byte[16];
            random.NextBytes(identity);
            var called = false;
            var trustedSigner = new PrivateKey();
            var unknownSigner = new PrivateKey();
            var version1 = 1;
            var version2 = 2;
            var extra1 = new Bencodex.Types.Integer(13);
            var extra2 = new Bencodex.Types.Integer(17);

            DifferentAppProtocolVersionEncountered callback = (p, pv, lv) => { called = true; };
            var peer = new BoundPeer(trustedSigner.PublicKey, new DnsEndPoint("0.0.0.0", 0));

            // Apv
            var trustedApv = AppProtocolVersion.Sign(trustedSigner, version1, extra1);
            var trustedDifferentVersionApv = AppProtocolVersion.Sign(
                trustedSigner, version2, extra1);
            var trustedDifferentExtraApv = AppProtocolVersion.Sign(trustedSigner, version1, extra2);
            var unknownApv = AppProtocolVersion.Sign(unknownSigner, version1, extra1);
            var unknownDifferentVersionApv = AppProtocolVersion.Sign(
                unknownSigner, version2, extra1);
            var unknownDifferentExtraApv = AppProtocolVersion.Sign(unknownSigner, version1, extra2);

            // Signer
            ImmutableHashSet<PublicKey>? trustedApvSigners =
                new HashSet<PublicKey>() { trustedSigner.PublicKey }.ToImmutableHashSet();
            ImmutableHashSet<PublicKey>? emptyApvSigners =
                new HashSet<PublicKey>() { }.ToImmutableHashSet();

            // Ping
            var trustedPing = new PingMsg()
            {
                Remote = peer,
                Version = trustedApv,
            };
            var trustedDifferentVersionPing = new PingMsg()
            {
                Remote = peer,
                Version = trustedDifferentVersionApv,
            };
            var trustedDifferentExtraPing = new PingMsg()
            {
                Remote = peer,
                Version = trustedDifferentExtraApv,
            };
            var unknownPing = new PingMsg()
            {
                Remote = peer,
                Version = unknownApv,
            };
            var unknownDifferentVersionPing = new PingMsg()
            {
                Remote = peer,
                Version = unknownDifferentVersionApv,
            };
            var unknownDifferentExtraPing = new PingMsg()
            {
                Remote = peer,
                Version = unknownDifferentExtraApv,
            };

            DifferentAppProtocolVersionException exception;
            AppProtocolVersionOptions appProtocolVersionOptions;
            MessageValidator messageValidator;

            // Trust specific signers.
            appProtocolVersionOptions = new AppProtocolVersionOptions()
            {
                AppProtocolVersion = trustedApv,
                TrustedAppProtocolVersionSigners = trustedApvSigners,
                DifferentAppProtocolVersionEncountered = callback,
            };

            messageValidator = new MessageValidator(appProtocolVersionOptions, null);

            // Check trust pings
            messageValidator.ValidateAppProtocolVersion(trustedPing);
            Assert.False(called);
            exception = Assert.Throws<DifferentAppProtocolVersionException>(
                () => messageValidator.ValidateAppProtocolVersion(trustedDifferentVersionPing));
            Assert.True(exception.Trusted);
            Assert.True(called);
            called = false;
            messageValidator.ValidateAppProtocolVersion(trustedDifferentExtraPing);
            Assert.True(called);
            called = false;

            // Check unknown pings
            exception = Assert.Throws<DifferentAppProtocolVersionException>(
                () => messageValidator.ValidateAppProtocolVersion(unknownPing));
            Assert.False(exception.Trusted);
            Assert.False(called);
            exception = Assert.Throws<DifferentAppProtocolVersionException>(
                () => messageValidator.ValidateAppProtocolVersion(unknownDifferentVersionPing));
            Assert.False(exception.Trusted);
            Assert.False(called);
            exception = Assert.Throws<DifferentAppProtocolVersionException>(
                () => messageValidator.ValidateAppProtocolVersion(unknownDifferentExtraPing));
            Assert.False(exception.Trusted);
            Assert.False(called);

            // Trust no one.
            appProtocolVersionOptions = new AppProtocolVersionOptions()
            {
                AppProtocolVersion = trustedApv,
                TrustedAppProtocolVersionSigners = emptyApvSigners,
                DifferentAppProtocolVersionEncountered = callback,
            };

            messageValidator = new MessageValidator(appProtocolVersionOptions, null);

            // Check trust pings
            messageValidator.ValidateAppProtocolVersion(trustedPing);
            Assert.False(called);
            exception = Assert.Throws<DifferentAppProtocolVersionException>(
                () => messageValidator.ValidateAppProtocolVersion(trustedDifferentVersionPing));
            Assert.False(exception.Trusted);
            Assert.False(called);
            exception = Assert.Throws<DifferentAppProtocolVersionException>(
                () => messageValidator.ValidateAppProtocolVersion(trustedDifferentExtraPing));
            Assert.False(exception.Trusted);
            Assert.False(called);

            // Check unknown pings
            exception = Assert.Throws<DifferentAppProtocolVersionException>(
                () => messageValidator.ValidateAppProtocolVersion(unknownPing));
            Assert.False(exception.Trusted);
            Assert.False(called);
            exception = Assert.Throws<DifferentAppProtocolVersionException>(
                () => messageValidator.ValidateAppProtocolVersion(unknownDifferentVersionPing));
            Assert.False(exception.Trusted);
            Assert.False(called);
            exception = Assert.Throws<DifferentAppProtocolVersionException>(
                () => messageValidator.ValidateAppProtocolVersion(unknownDifferentExtraPing));
            Assert.False(exception.Trusted);
            Assert.False(called);
        }
    }
}
