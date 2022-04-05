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
                codec.Decode(netMQMessage, true));
        }

        [Fact]
        public void InvalidMessageTimestamp()
        {
            var privateKey = new PrivateKey();
            var peer = new Peer(privateKey.PublicKey);
            var futureOffset = DateTimeOffset.MaxValue;
            var pastOffset = DateTimeOffset.MinValue;
            var apv = new AppProtocolVersion(
                1,
                new Bencodex.Types.Integer(0),
                ImmutableArray<byte>.Empty,
                default(Address));
            var buffer = TimeSpan.FromSeconds(1);
            var message = new Ping();
            var codec = new NetMQMessageCodec(
                appProtocolVersion: apv,
                messageTimestampBuffer: buffer);
            NetMQMessage futureRaw =
                codec.Encode(message, privateKey, peer, futureOffset, apv);
            // Messages from the future throws InvalidMessageTimestampException.
            Assert.Throws<InvalidMessageTimestampException>(() =>
                codec.Decode(futureRaw, true));
            NetMQMessage pastRaw =
                codec.Encode(message, privateKey, peer, pastOffset, apv);
            // Messages from the far past throws InvalidMessageTimestampException.
            Assert.Throws<InvalidMessageTimestampException>(() =>
                codec.Decode(pastRaw, true));
        }

        [Fact]
        public void BlockHeaderMessage()
        {
            var privateKey = new PrivateKey();
            var peer = new Peer(privateKey.PublicKey);
            var apv = new AppProtocolVersion(
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
            var codec = new NetMQMessageCodec(appProtocolVersion: apv);
            NetMQMessage raw =
                codec.Encode(message, privateKey, peer, dateTimeOffset, apv);
            var parsed = codec.Decode(raw, true);
            Assert.Equal(peer, parsed.Remote);
        }

        [Fact]
        public void UseInvalidSignature()
        {
            // Victim
            var privateKey = new PrivateKey();
            var peer = new Peer(privateKey.PublicKey, new IPAddress(1024L));
            var timestamp = DateTimeOffset.UtcNow;
            var apv = new AppProtocolVersion(
                1,
                new Bencodex.Types.Integer(0),
                ImmutableArray<byte>.Empty,
                default(Address));
            var ping = new Ping();
            var codec = new NetMQMessageCodec(appProtocolVersion: apv);
            var netMqMessage = codec.Encode(ping, privateKey, peer, timestamp, apv).ToArray();

            // Attacker
            var fakePeer = new Peer(privateKey.PublicKey, new IPAddress(2048L));
            var fakeMessage = codec.Encode(ping, privateKey, fakePeer, timestamp, apv).ToArray();

            var frames = new NetMQMessage();
            frames.Push(netMqMessage[4]);
            frames.Push(netMqMessage[3]);
            frames.Push(fakeMessage[2]);
            frames.Push(netMqMessage[1]);
            frames.Push(netMqMessage[0]);

            Assert.Throws<InvalidMessageSignatureException>(() =>
                codec.Decode(frames, true));
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
                () => codec.Decode(new NetMQMessage(), true));
        }
    }
}
