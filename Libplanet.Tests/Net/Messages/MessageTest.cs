using System;
using System.Collections.Immutable;
using System.Linq;
using System.Net;
using System.Security.Cryptography;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Libplanet.Net;
using Libplanet.Net.Messages;
using Libplanet.Tests.Common.Action;
using NetMQ;
using Xunit;

namespace Libplanet.Tests.Net.Messages
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
            var apv = new AppProtocolVersion(
                1,
                new Bencodex.Types.Integer(0),
                ImmutableArray<byte>.Empty,
                default(Address));
            var message = new Ping();
            var codec = new NetMQMessageCodec();
            NetMQMessage netMQMessage = codec.Encode(
                message,
                privateKey,
                peer,
                DateTimeOffset.UtcNow,
                apv);

            Assert.Throws<DifferentAppProtocolVersionException>(() =>
                codec.Decode(
                    netMQMessage,
                    true,
                    (i, p, v) => throw new DifferentAppProtocolVersionException(
                        string.Empty,
                        i,
                        v,
                        v)));
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
            var codec = new NetMQMessageCodec(TimeSpan.FromSeconds(1));
            NetMQMessage futureRaw =
                codec.Encode(message, privateKey, peer, futureOffset, appProtocolVersion);
            // Messages from the future throws InvalidTimestampException.
            Assert.Throws<InvalidTimestampException>(() =>
                codec.Decode(
                    futureRaw,
                    true,
                    (i, p, v) => { }));
            NetMQMessage pastRaw =
                codec.Encode(message, privateKey, peer, pastOffset, appProtocolVersion);
            // Messages from the far past throws InvalidTimestampException.
            Assert.Throws<InvalidTimestampException>(() =>
                codec.Decode(
                    pastRaw,
                    true,
                    (i, p, v) => { }));
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
            Block<DumbAction> genesis = TestUtils.MineGenesisBlock<DumbAction>(
                _ => HashAlgorithmType.Of<SHA256>(),
                TestUtils.GenesisMiner
            );
            var message = new BlockHeaderMessage(genesis.Hash, genesis.Header);
            var codec = new NetMQMessageCodec();
            NetMQMessage raw =
                codec.Encode(message, privateKey, peer, dateTimeOffset, appProtocolVersion);
            var parsed = codec.Decode(raw, true, (i, p, v) => { });
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
            var codec = new NetMQMessageCodec();
            var netMqMessage =
                codec.Encode(ping, privateKey, peer, dateTimeOffset, validAppProtocolVersion)
                    .ToArray();

            // Attacker
            var fakePeer = new Peer(privateKey.PublicKey, new IPAddress(2048L));
            var fakeMessage =
                codec.Encode(ping, privateKey, fakePeer, dateTimeOffset, validAppProtocolVersion)
                    .ToArray();

            var frames = new NetMQMessage();
            frames.Push(netMqMessage[4]);
            frames.Push(netMqMessage[3]);
            frames.Push(fakeMessage[2]);
            frames.Push(netMqMessage[1]);
            frames.Push(netMqMessage[0]);

            Assert.Throws<InvalidMessageException>(() =>
            {
                codec.Decode(
                    frames,
                    true,
                    (i, p, v) => { });
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
            Assert.Throws<ArgumentNullException>(
                () => codec.Encode(message, privateKey, null, DateTimeOffset.UtcNow, apv));
            Assert.Throws<ArgumentException>(
                () => codec.Decode(
                    new NetMQMessage(),
                    true,
                    (i, p, v) => { }));
        }
    }
}
