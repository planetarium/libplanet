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
                    null));
        }
    }
}
