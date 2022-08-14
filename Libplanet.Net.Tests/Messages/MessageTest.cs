using System;
using System.Collections.Immutable;
using System.Linq;
using System.Net;
using System.Security.Cryptography;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Libplanet.Net.Messages;
using Libplanet.Net.Transports;
using Libplanet.Tests.Common.Action;
using NetMQ;
using Xunit;
using static Libplanet.Tests.TestUtils;

namespace Libplanet.Net.Tests.Messages
{
    public class MessageTest
    {
        [Fact]
        public void BlockHeaderMsg()
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
            var message = new BlockHeaderMsg(genesis.Hash, genesis.Header);
            var codec = new NetMQMessageCodec();
            NetMQMessage raw =
                codec.Encode(message, privateKey, apv, peer, dateTimeOffset);
            var parsed = codec.Decode(raw, true);
            Assert.Equal(peer, parsed.Remote);
        }

        [Fact]
        public void InvalidCredential()
        {
            var message = new PingMsg();
            var privateKey = new PrivateKey();
            var apv = new AppProtocolVersion(
                1,
                new Bencodex.Types.Integer(0),
                ImmutableArray<byte>.Empty,
                default(Address));
            var peer = new Peer(privateKey.PublicKey);
            var timestamp = DateTimeOffset.UtcNow;
            var badPrivateKey = new PrivateKey();
            var codec = new NetMQMessageCodec();
            Assert.Throws<InvalidCredentialException>(() =>
                codec.Encode(message, badPrivateKey, apv, peer, timestamp));
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
            var ping = new PingMsg();
            var codec = new NetMQMessageCodec();
            var netMqMessage = codec.Encode(ping, privateKey, apv, peer, timestamp).ToArray();

            // Attacker
            var fakePeer = new Peer(privateKey.PublicKey, new IPAddress(2048L));
            var fakeMessage = codec.Encode(ping, privateKey, apv, fakePeer, timestamp).ToArray();

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
            var message = new PingMsg();
            var privateKey = new PrivateKey();
            var apv = new AppProtocolVersion(
                1,
                new Bencodex.Types.Integer(0),
                ImmutableArray<byte>.Empty,
                default(Address));
            Assert.Throws<ArgumentException>(
                () => codec.Decode(new NetMQMessage(), true));
        }

        [Fact]
        public void GetId()
        {
            var privateKey = new PrivateKey();
            var peer = new Peer(privateKey.PublicKey);
            var apv = new AppProtocolVersion(
                1,
                new Bencodex.Types.Integer(0),
                ImmutableArray<byte>.Empty,
                default(Address));
            var dateTimeOffset = DateTimeOffset.MinValue + TimeSpan.FromHours(6.1234);
            Block<DumbAction> genesis = MineGenesisBlock<DumbAction>(
                _ => HashAlgorithmType.Of<SHA256>(),
                GenesisMiner
            );
            var message = new BlockHeaderMsg(genesis.Hash, genesis.Header)
            {
                Timestamp = dateTimeOffset,
                Remote = peer,
            };
            Assert.Equal(
                new MessageId(new byte[32]
                {
                    0xa1, 0x60, 0xe2, 0xec, 0xf4, 0xcc, 0x21, 0xd4,
                    0x4a, 0x76, 0xc4, 0x1b, 0x8e, 0xa7, 0xe1, 0x0c,
                    0x40, 0xd4, 0x1c, 0xb5, 0x75, 0xb9, 0x1d, 0xad,
                    0x96, 0xfb, 0x93, 0x48, 0x59, 0x36, 0xc0, 0xf5,
                }),
                message.Id);
        }
    }
}
