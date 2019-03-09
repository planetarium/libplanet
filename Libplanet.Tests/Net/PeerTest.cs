using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.IO;
using System.Net;
using System.Runtime.Serialization.Formatters.Binary;
using Libplanet.Crypto;
using Libplanet.Net;
using Libplanet.Serialization;
using Xunit;

namespace Libplanet.Tests.Net
{
    public class PeerTest
    {
        private static PublicKey _samplePublicKey = new PublicKey(
            ByteUtil.ParseHex(
                "038f92e8098c897c2a9ae3226eb6337eb" +
                "7ca8dbad5e1c8c9b130a9d39171a44134"
            )
        );

        private static IPEndPoint[] _sampleEndPoints = new IPEndPoint[]
        {
            new IPEndPoint(IPAddress.Parse("0.0.0.0"), 1234),
            new IPEndPoint(IPAddress.Parse("1.2.3.4"), 1234),
            new IPEndPoint(IPAddress.Parse("2.3.4.5"), 1234),
        };

        [Fact]
        public void ConstructorWithImmutableList()
        {
            Assert.Throws<ArgumentNullException>(
                () => new Peer(_samplePublicKey, null)
            );
            var peer = new Peer(
                _samplePublicKey,
                _sampleEndPoints.ToImmutableList()
            );
            Assert.Equal(_samplePublicKey, peer.PublicKey);
            Assert.Equal(_sampleEndPoints, peer.EndPoints);
        }

        [Fact]
        public void ConstructorWithEnumerable()
        {
            Assert.Throws<ArgumentNullException>(
                () => new Peer(_samplePublicKey, (IEnumerable<IPEndPoint>)null)
            );
            var peer = new Peer(_samplePublicKey, _sampleEndPoints);
            Assert.Equal(_samplePublicKey, peer.PublicKey);
            Assert.Equal(_sampleEndPoints, peer.EndPoints);
        }

        [Fact]
        public void AddUrl()
        {
            var peer = new Peer(_samplePublicKey, _sampleEndPoints);
            Assert.Equal(_samplePublicKey, peer.PublicKey);
            Assert.Equal(
                new IPEndPoint[]
                {
                    new IPEndPoint(IPAddress.Parse("0.0.0.0"), 1234),
                    new IPEndPoint(IPAddress.Parse("1.2.3.4"), 1234),
                    new IPEndPoint(IPAddress.Parse("2.3.4.5"), 1234),
                    new IPEndPoint(IPAddress.Parse("3.4.5.6"), 1234),
                },
                peer.AddEndPoint(new IPEndPoint(IPAddress.Parse("3.4.5.6"), 1234)).EndPoints
            );
        }

        [Fact]
        public void CanBeSerialized()
        {
            var peer = new Peer(
                _samplePublicKey,
                _sampleEndPoints.ToImmutableList()
            );
            var formatter = new BinaryFormatter();
            using (var stream = new MemoryStream())
            {
                formatter.Serialize(stream, peer);
                byte[] serialized = stream.ToArray();
                stream.Seek(0, SeekOrigin.Begin);
                Peer deserialized = (Peer)formatter.Deserialize(stream);
                Assert.Equal(peer, deserialized);
            }
        }
    }
}
