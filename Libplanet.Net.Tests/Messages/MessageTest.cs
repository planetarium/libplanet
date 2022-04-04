#nullable disable
using System;
using System.Collections.Immutable;
using System.Linq;
using System.Net;
using System.Security.Cryptography;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Libplanet.Net.Messages;
using Libplanet.Tests.Common.Action;
using NetMQ;
using Xunit;
using static Libplanet.Tests.TestUtils;

namespace Libplanet.Net.Tests.Messages
{
    [Collection("NetMQConfiguration")]
    public class MessageTest : IDisposable
    {
        public void Dispose()
        {
            NetMQConfig.Cleanup(false);
        }

        [Fact]
        public void DifferentAppProtocolVersionStructure()
        {
            var privateKey = new PrivateKey();
            var peer = new Peer(privateKey.PublicKey);
            var apv1 = new AppProtocolVersion(
                1,
                new Bencodex.Types.Integer(0),
                ImmutableArray<byte>.Empty,
                default(Address));
            var apv2 = new AppProtocolVersion(
                2,
                new Bencodex.Types.Integer(0),
                ImmutableArray<byte>.Empty,
                default(Address));
            var message = new Ping();
            var codec1 = new NetMQMessageCodec(apv1);
            var codec2 = new NetMQMessageCodec(apv2);
            NetMQMessage netMQMessage = codec1.Encode(
                message,
                privateKey,
                peer,
                DateTimeOffset.UtcNow);

            Assert.Throws<DifferentAppProtocolVersionException>(() =>
                codec2.Decode(
                    netMQMessage,
                    true,
                    (i, p, v) => { },
                    null));
        }

        [Fact]
        public void InvalidMessageTimestamp()
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
            var codec = new NetMQMessageCodec(appProtocolVersion, null, TimeSpan.FromSeconds(1));
            NetMQMessage futureRaw =
                codec.Encode(message, privateKey, peer, futureOffset);
            // Messages from the future throws InvalidMessageTimestampException.
            Assert.Throws<InvalidMessageTimestampException>(() =>
                codec.Decode(
                    futureRaw,
                    true,
                    (i, p, v) => { },
                    null));
            NetMQMessage pastRaw =
                codec.Encode(message, privateKey, peer, pastOffset);
            // Messages from the far past throws InvalidMessageTimestampException.
            Assert.Throws<InvalidMessageTimestampException>(() =>
                codec.Decode(
                    pastRaw,
                    true,
                    (i, p, v) => { },
                    null));
        }

        [Fact]
        public void BlockHeaderMessage()
        {
            var privateKey = new PrivateKey();
            var peer = new Peer(privateKey.PublicKey);
            var appProtocolVersion = new AppProtocolVersion(
                1,
                new Bencodex.Types.Integer(0),
                ImmutableArray<byte>.Empty,
                default(Address));
            var dateTimeOffset = DateTimeOffset.UtcNow;
            Block<DumbAction> genesis = MineGenesisBlock<DumbAction>(
                _ => HashAlgorithmType.Of<SHA256>(),
                GenesisMiner
            );
            var message = new BlockHeaderMessage(genesis.Hash, genesis.Header);
            var codec = new NetMQMessageCodec(appProtocolVersion);
            NetMQMessage raw =
                codec.Encode(message, privateKey, peer, dateTimeOffset);
            var parsed = codec.Decode(raw, true, (i, p, v) => { }, null);
            Assert.Equal(peer, parsed.Remote);
        }

        [Fact]
        public void UseInvalidSignature()
        {
            // Victim
            var privateKey = new PrivateKey();
            var peer = new Peer(privateKey.PublicKey, new IPAddress(1024L));
            var dateTimeOffset = DateTimeOffset.UtcNow;
            var validAppProtocolVersion = new AppProtocolVersion(
                1,
                new Bencodex.Types.Integer(0),
                ImmutableArray<byte>.Empty,
                default(Address));
            var ping = new Ping();
            var codec = new NetMQMessageCodec(validAppProtocolVersion);
            var netMqMessage =
                codec.Encode(ping, privateKey, peer, dateTimeOffset)
                    .ToArray();

            // Attacker
            var fakePeer = new Peer(privateKey.PublicKey, new IPAddress(2048L));
            var fakeMessage =
                codec.Encode(ping, privateKey, fakePeer, dateTimeOffset)
                    .ToArray();

            var frames = new NetMQMessage();
            frames.Push(netMqMessage[4]);
            frames.Push(netMqMessage[3]);
            frames.Push(fakeMessage[2]);
            frames.Push(netMqMessage[1]);
            frames.Push(netMqMessage[0]);

            Assert.Throws<InvalidMessageSignatureException>(() =>
            {
                codec.Decode(
                    frames,
                    true,
                    (i, p, v) => { },
                    null);
            });
        }

        [Fact]
        public void InvalidArguments()
        {
            var codec = new NetMQMessageCodec();
            var message = new Ping();
            var privateKey = new PrivateKey();
            var apv = new AppProtocolVersion(
                1,
                new Bencodex.Types.Integer(0),
                ImmutableArray<byte>.Empty,
                default(Address));
            Assert.Throws<ArgumentException>(
                () => codec.Decode(
                    new NetMQMessage(),
                    true,
                    (i, p, v) => { },
                    null));
        }
    }
}
