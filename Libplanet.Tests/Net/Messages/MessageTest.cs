using System;
using System.Collections.Immutable;
using Libplanet.Crypto;
using Libplanet.Net;
using Libplanet.Net.Messages;
using NetMQ;
using Xunit;

namespace Libplanet.Tests.Net.Messages
{
    public class MessageTest
    {
        [Fact]
        public void DifferentAppProtocolVersionWithSameStructure()
        {
            var privateKey = new PrivateKey();
            var peer = new Peer(privateKey.PublicKey);
            var validAppProtocolVersion = new AppProtocolVersion(
                1,
                new Bencodex.Types.Integer(0),
                ImmutableArray<byte>.Empty,
                default(Address));
            var invalidAppProtocolVersion = new AppProtocolVersion(
                2,
                new Bencodex.Types.Integer(0),
                ImmutableArray<byte>.Empty,
                default(Address));
            var message = new Ping();
            var netMQMessage = message.ToNetMQMessage(
                privateKey,
                peer,
                DateTimeOffset.UtcNow,
                validAppProtocolVersion);

            Assert.Throws<DifferentAppProtocolVersionException>(() =>
                Message.Parse(
                    netMQMessage,
                    true,
                    invalidAppProtocolVersion,
                    ImmutableHashSet<PublicKey>.Empty,
                    null,
                    null));
        }

        [Fact]
        public void DifferentAppProtocolVersionWithDifferentStructure()
        {
            var validAppProtocolVersion = new AppProtocolVersion(
                1,
                new Bencodex.Types.Integer(0),
                ImmutableArray<byte>.Empty,
                default(Address));
            var invalidAppProtocolVersion = new AppProtocolVersion(
                2,
                new Bencodex.Types.Integer(0),
                ImmutableArray<byte>.Empty,
                default(Address));
            var netMQMessage = new NetMQMessage();
            netMQMessage.Push(validAppProtocolVersion.Token);

            Assert.Throws<DifferentAppProtocolVersionException>(() =>
                Message.Parse(
                    netMQMessage,
                    true,
                    invalidAppProtocolVersion,
                    ImmutableHashSet<PublicKey>.Empty,
                    null,
                    null));
        }

        [Fact]
        public void InvalidTimestamp()
        {
            var privateKey = new PrivateKey();
            var peer = new Peer(privateKey.PublicKey);
            var futureOffset = DateTimeOffset.MaxValue;
            var pastOffset = DateTimeOffset.MinValue;
            var appProtocolVersion = new AppProtocolVersion(
                1,
                new Bencodex.Types.Integer(0),
                ImmutableArray<byte>.Empty,
                default(Address));
            var message = new Ping();
            NetMQMessage futureRaw =
                message.ToNetMQMessage(privateKey, peer, futureOffset, appProtocolVersion);
            // Messages from the future throws InvalidTimestampException.
            Assert.Throws<InvalidTimestampException>(() =>
                Message.Parse(
                    futureRaw,
                    true,
                    appProtocolVersion,
                    ImmutableHashSet<PublicKey>.Empty,
                    null,
                    TimeSpan.FromSeconds(1)));
            NetMQMessage pastRaw =
                message.ToNetMQMessage(privateKey, peer, futureOffset, appProtocolVersion);
            // Messages from the far past throws InvalidTimestampException.
            Assert.Throws<InvalidTimestampException>(() =>
                Message.Parse(
                    pastRaw,
                    true,
                    appProtocolVersion,
                    ImmutableHashSet<PublicKey>.Empty,
                    null,
                    TimeSpan.FromSeconds(1)));
        }

        [Fact]
        public void Parse()
        {
            var privateKey = new PrivateKey();
            var peer = new Peer(privateKey.PublicKey);
            var dateTimeOffset = DateTimeOffset.UtcNow;
            var appProtocolVersion = new AppProtocolVersion(
                1,
                new Bencodex.Types.Integer(0),
                ImmutableArray<byte>.Empty,
                default(Address));
            var message = new Ping();
            NetMQMessage raw =
                message.ToNetMQMessage(privateKey, peer, dateTimeOffset, appProtocolVersion);
            var parsed = Message.Parse(raw, true, appProtocolVersion, null, null, null);
            Assert.Equal(peer, parsed.Remote);
            Assert.Equal(appProtocolVersion, parsed.Version);
            Assert.Equal(dateTimeOffset, parsed.Timestamp);
        }
    }
}
