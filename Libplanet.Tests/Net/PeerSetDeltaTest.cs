using System;
using System.Collections.Immutable;
using System.IO;
using System.Net;
using System.Runtime.Serialization.Formatters.Binary;
using Libplanet.Crypto;
using Libplanet.Net;
using Xunit;

namespace Libplanet.Tests.Net
{
    public class PeerSetDeltaTest
    {
        [Fact]
        public void Serialize()
        {
            var peerSetDelta = new PeerSetDelta(
                new Peer(
                    new PrivateKey().PublicKey,
                    new IPEndPoint(IPAddress.Parse("0.0.0.0"), 1234)
                ),
                DateTimeOffset.UtcNow,
                new[]
                {
                    new Peer(
                        new PrivateKey().PublicKey,
                        new IPEndPoint(IPAddress.Parse("1.2.3.4"), 1234)),
                }.ToImmutableHashSet(),
                new[]
                {
                    new Peer(
                        new PrivateKey().PublicKey,
                        new IPEndPoint(IPAddress.Parse("2.3.4.5"), 1234)),
                }.ToImmutableHashSet(),
                null
            );
            var formatter = new BinaryFormatter();

            using (var stream = new MemoryStream())
            {
                formatter.Serialize(stream, peerSetDelta);
                stream.Seek(0, SeekOrigin.Begin);

                var deserialized = (PeerSetDelta)formatter.Deserialize(stream);
                Assert.Equal(peerSetDelta, deserialized);
            }
        }
    }
}
