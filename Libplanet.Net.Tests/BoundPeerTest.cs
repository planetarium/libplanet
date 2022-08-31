#nullable disable
using System;
using System.Collections.Generic;
using System.IO;
using System.Net;
using System.Runtime.Serialization.Formatters.Binary;
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
            new object[]
            {
                new BoundPeer(
                    new BlsPublicKey(new byte[]
                    {
                        0x95, 0x0f, 0xfc, 0x59, 0x13, 0x08, 0xf6, 0x77, 0x4a, 0xf6,
                        0xac, 0x09, 0x0e, 0xa4, 0x1f, 0x9e, 0xdd, 0x45, 0x28, 0xe0,
                        0xda, 0xc6, 0x22, 0xeb, 0x50, 0xbf, 0xa8, 0x43, 0xa2, 0xb4,
                        0x37, 0xa9, 0xb6, 0x70, 0xc0, 0x0e, 0x9e, 0xde, 0x07, 0xb4,
                        0x65, 0xc7, 0xab, 0x41, 0xa7, 0xcc, 0x6a, 0xde,
                    }),
                    new DnsEndPoint("0.0.0.0", 1234)),
            },
        };

        [Theory]
        [MemberData(nameof(GetBoundPeers))]
        public void Serializable(BoundPeer peer)
        {
            var formatter = new BinaryFormatter();
            using (var stream = new MemoryStream())
            {
                formatter.Serialize(stream, peer);
                byte[] serialized = stream.ToArray();
                stream.Seek(0, SeekOrigin.Begin);
                BoundPeer deserialized = (BoundPeer)formatter.Deserialize(stream);
                Assert.IsType(peer.GetType(), deserialized);
                Assert.Equal(peer, deserialized);
            }
        }

        [Theory]
        [MemberData(nameof(GetBoundPeers))]
        public void Serialize(BoundPeer peer)
        {
            Bencodex.Types.Dictionary serialized = peer.ToBencodex();
            var deserialized = new BoundPeer(serialized);

            Assert.Equal(peer, deserialized);
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
        public void BLSParsePeer()
        {
#pragma warning disable MEN002 // Line is too long
            var peerInfo = "950ffc591308f6774af6ac090ea41f9edd4528e0dac622eb50bfa843a2b437a9b670c00e9ede07b465c7ab41a7cc6ade,192.168.0.1,3333";
            var expected = new BoundPeer(
                new BlsPublicKey(ByteUtil.ParseHex("950ffc591308f6774af6ac090ea41f9edd4528e0dac622eb50bfa843a2b437a9b670c00e9ede07b465c7ab41a7cc6ade")),
                new DnsEndPoint("192.168.0.1", 3333)
            );
#pragma warning restore MEN002 // Line is too long
            Assert.Equal(expected, BoundPeer.ParsePeer(peerInfo));
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
            Assert.Throws<ArgumentException>(() => BoundPeer.ParsePeer("950ffc591308f6774af6ac090ea41f9edd4528e0dac622eb50bfa843a2b437a9b670c00e9ede07b465c7ab41a7cc6ade"));
            Assert.Throws<ArgumentException>(() => BoundPeer.ParsePeer("950ffc591308f6774af6ac090ea41f9edd4528e0dac622eb50bfa843a2b437a9b670c00e9ede07b465c7ab41a7cc6ade,192.168.0.1"));
            Assert.Throws<ArgumentException>(() => BoundPeer.ParsePeer("950ffc591308f6774af6ac090ea41f9edd4528e0dac622eb50bfa843a2b437a9b670c00e9ede07b465c7ab41a7cc6ade,192.168.0.1,999999"));
#pragma warning restore MEN002 // Line is too long
        }
    }
}
