using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using Libplanet.Crypto;
using Libplanet.Net.Messages;
using Xunit;

namespace Libplanet.Net.Tests.Messages
{
    public class MessageValidatorTest
    {
        [Fact]
        public void ValidateTimestamp()
        {
            var peer = new Peer(new PrivateKey().PublicKey);
            var buffer = TimeSpan.FromSeconds(1);
            var halfBuffer = TimeSpan.FromSeconds(0.5);
            var doubleBuffer = TimeSpan.FromSeconds(2);
            var messageValidator = new MessageValidator(
                appProtocolVersion: default,
                trustedAppProtocolVersionSigners: null,
                messageTimestampBuffer: buffer,
                differentAppProtocolVersionEncountered: null);

            // Within buffer window is okay.
            messageValidator.ValidateTimestamp(
                new Ping() { Timestamp = DateTimeOffset.UtcNow + halfBuffer });
            messageValidator.ValidateTimestamp(
                new Ping() { Timestamp = DateTimeOffset.UtcNow - halfBuffer });

            // Outside buffer throws an exception.
            Assert.Throws<InvalidMessageTimestampException>(() =>
                messageValidator.ValidateTimestamp(
                    new Ping() { Timestamp = DateTimeOffset.UtcNow + doubleBuffer }));
            Assert.Throws<InvalidMessageTimestampException>(() =>
                messageValidator.ValidateTimestamp(
                    new Ping() { Timestamp = DateTimeOffset.UtcNow - doubleBuffer }));

            // If buffer is null, no exception gets thrown.
            messageValidator = new MessageValidator(default, null, null, null);
            messageValidator.ValidateTimestamp(
                new Ping() { Remote = peer, Timestamp = DateTimeOffset.MaxValue });
            messageValidator.ValidateTimestamp(
                new Ping() { Remote = peer, Timestamp = DateTimeOffset.MinValue });
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
            var trustedApv1 = AppProtocolVersion.Sign(trustedSigner, version1, extra1);
            var trustedApv2 = AppProtocolVersion.Sign(trustedSigner, version2, extra2);
            var unknownApv1 = AppProtocolVersion.Sign(unknownSigner, version1, extra1);
            var unknownApv2 = AppProtocolVersion.Sign(unknownSigner, version1, extra2);
            ImmutableHashSet<PublicKey>? trustedApvSigners1 =
                new HashSet<PublicKey>() { trustedSigner.PublicKey }.ToImmutableHashSet();
            ImmutableHashSet<PublicKey>? trustedApvSigners2 =
                new HashSet<PublicKey>() { }.ToImmutableHashSet();
            ImmutableHashSet<PublicKey>? trustedApvSigners3 = null;
            DifferentAppProtocolVersionEncountered callback = (p, pv, lv) => { called = true; };
            var peer = new Peer(trustedSigner.PublicKey);
            var trustedPing1 = new Ping() { Remote = peer, Version = trustedApv1 };
            var trustedPing2 = new Ping() { Remote = peer, Version = trustedApv2 };
            var unknownPing1 = new Ping() { Remote = peer, Version = unknownApv1 };
            var unknownPing2 = new Ping() { Remote = peer, Version = unknownApv2 };

            DifferentAppProtocolVersionException exception;
            MessageValidator messageValidator;

            // Trust specific signers.
            messageValidator = new MessageValidator(
                appProtocolVersion: trustedApv1,
                trustedAppProtocolVersionSigners: trustedApvSigners1,
                messageTimestampBuffer: null,
                differentAppProtocolVersionEncountered: callback);
            messageValidator.ValidateAppProtocolVersion(trustedPing1);
            exception = Assert.Throws<DifferentAppProtocolVersionException>(
                () => messageValidator.ValidateAppProtocolVersion(unknownPing1));
            Assert.False(exception.Trusted);
            Assert.False(called);
            exception = Assert.Throws<DifferentAppProtocolVersionException>(
                () => messageValidator.ValidateAppProtocolVersion(trustedPing2));
            Assert.True(exception.Trusted);
            Assert.True(called);
            called = false;
            exception = Assert.Throws<DifferentAppProtocolVersionException>(
                () => messageValidator.ValidateAppProtocolVersion(unknownPing2));
            Assert.False(exception.Trusted);
            Assert.False(called);

            // Trust no one.
            messageValidator = new MessageValidator(
                appProtocolVersion: trustedApv1,
                trustedAppProtocolVersionSigners: trustedApvSigners2,
                messageTimestampBuffer: null,
                differentAppProtocolVersionEncountered: callback);
            messageValidator.ValidateAppProtocolVersion(trustedPing1);
            exception = Assert.Throws<DifferentAppProtocolVersionException>(
                () => messageValidator.ValidateAppProtocolVersion(unknownPing1));
            Assert.False(exception.Trusted);
            Assert.False(called);
            exception = Assert.Throws<DifferentAppProtocolVersionException>(
                () => messageValidator.ValidateAppProtocolVersion(trustedPing2));
            Assert.False(exception.Trusted);
            Assert.False(called);
            exception = Assert.Throws<DifferentAppProtocolVersionException>(
                () => messageValidator.ValidateAppProtocolVersion(unknownPing2));
            Assert.False(exception.Trusted);
            Assert.False(called);

            // Trust anyone.
            messageValidator = new MessageValidator(
                appProtocolVersion: trustedApv1,
                trustedAppProtocolVersionSigners: trustedApvSigners3,
                messageTimestampBuffer: null,
                differentAppProtocolVersionEncountered: callback);
            messageValidator.ValidateAppProtocolVersion(trustedPing1);
            exception = Assert.Throws<DifferentAppProtocolVersionException>(
                () => messageValidator.ValidateAppProtocolVersion(unknownPing1));
            Assert.True(exception.Trusted);
            Assert.True(called);
            called = false;
            exception = Assert.Throws<DifferentAppProtocolVersionException>(
                () => messageValidator.ValidateAppProtocolVersion(trustedPing2));
            Assert.True(exception.Trusted);
            Assert.True(called);
            called = false;
            exception = Assert.Throws<DifferentAppProtocolVersionException>(
                () => messageValidator.ValidateAppProtocolVersion(unknownPing2));
            Assert.True(exception.Trusted);
            Assert.True(called);
        }
    }
}
