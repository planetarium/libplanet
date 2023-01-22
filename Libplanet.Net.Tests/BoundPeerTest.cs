#nullable disable
using System;
using System.Collections.Generic;
using System.Net;
using Libplanet.Crypto;
using Xunit;

namespace Libplanet.Net.Tests
{
    public class BoundPeerTest
    {
        public static IEnumerable<object[]> GetBoundPeers => new[]
        {
            new object[]
            {
                new BoundPeer(
                    new PublicKey(new byte[]
                    {
                        0x04, 0xb5, 0xa2, 0x4a, 0xa2, 0x11, 0x27, 0x20, 0x42, 0x3b,
                        0xad, 0x39, 0xa0, 0x20, 0x51, 0x82, 0x37, 0x9d, 0x6f, 0x2b,
                        0x33, 0xe3, 0x48, 0x7c, 0x9a, 0xb6, 0xcc, 0x8f, 0xc4, 0x96,
                        0xf8, 0xa5, 0x48, 0x34, 0x40, 0xef, 0xbb, 0xef, 0x06, 0x57,
                        0xac, 0x2e, 0xf6, 0xc6, 0xee, 0x05, 0xdb, 0x06, 0xa9, 0x45,
                        0x32, 0xfd, 0xa7, 0xdd, 0xc4, 0x4a, 0x16, 0x95, 0xe5, 0xce,
                        0x1a, 0x3d, 0x3c, 0x76, 0xdb,
                    }),
                    new DnsEndPoint("0.0.0.0", 1234)),
            },
        };

        [Theory]
        [MemberData(nameof(GetBoundPeers))]
        public void Bencode(BoundPeer peer)
        {
            Bencodex.Types.IValue bencoded = peer.Bencoded;
            var decoded = new BoundPeer(bencoded);

            Assert.Equal(peer, decoded);
        }

        [Fact]
        public void ParsePeer()
        {
#pragma warning disable MEN002 // Line is too long
            var peerInfo = "032038e153d344773986c039ba5dbff12ae70cfdf6ea8beb7c5ea9b361a72a9233,192.168.0.1,3333";
            var expected = new BoundPeer(
                new PublicKey(ByteUtil.ParseHex("032038e153d344773986c039ba5dbff12ae70cfdf6ea8beb7c5ea9b361a72a9233")),
                new DnsEndPoint("192.168.0.1", 3333)
            );
#pragma warning restore MEN002 // Line is too long
            Assert.Equal(expected, BoundPeer.ParsePeer(peerInfo));
        }

        [Fact]
        public void PeerString()
        {
#pragma warning disable MEN002 // Line is too long
            var expected = "032038e153d344773986c039ba5dbff12ae70cfdf6ea8beb7c5ea9b361a72a9233,192.168.0.1,3333";
            var boundPeer = new BoundPeer(
                new PublicKey(ByteUtil.ParseHex("032038e153d344773986c039ba5dbff12ae70cfdf6ea8beb7c5ea9b361a72a9233")),
                new DnsEndPoint("192.168.0.1", 3333)
            );
#pragma warning restore MEN002 // Line is too long
            Assert.Equal(expected, boundPeer.PeerString);
        }

        [Fact]
        public void ParsePeerException()
        {
            Assert.Throws<ArgumentNullException>(() => { BoundPeer.ParsePeer(null); });
            Assert.Throws<ArgumentException>(() => BoundPeer.ParsePeer(string.Empty));
#pragma warning disable MEN002 // Line is too long
            Assert.Throws<ArgumentException>(() => BoundPeer.ParsePeer("032038e153d344773986c039ba5dbff12ae70cfdf6ea8beb7c5ea9b361a72a9233"));
            Assert.Throws<ArgumentException>(() => BoundPeer.ParsePeer("032038e153d344773986c039ba5dbff12ae70cfdf6ea8beb7c5ea9b361a72a9233,192.168.0.1"));
            Assert.Throws<ArgumentException>(() => BoundPeer.ParsePeer("032038e153d344773986c039ba5dbff12ae70cfdf6ea8beb7c5ea9b361a72a9233,192.168.0.1,999999"));
            Assert.Throws<ArgumentException>(() => BoundPeer.ParsePeer("032038e153d344773986c039ba5dbff12ae70cfdf6ea8beb7c5ea9b361a72a9233,.ninodes.com,31234"));
#pragma warning restore MEN002 // Line is too long
        }

        [Fact]
        public void InvalidHostname()
        {
            Assert.Throws<ArgumentException>(() =>
                new BoundPeer(new PrivateKey().PublicKey, new DnsEndPoint(".ninodes.com", 31234)));
        }
    }
}
