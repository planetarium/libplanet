using System;
using System.Collections.Immutable;
using System.IO;
using System.Runtime.Serialization.Formatters.Binary;
using Libplanet.Crypto;
using Libplanet.Net;
using Xunit;

namespace Libplanet.Tests.Net
{
    public class PeerSetDeltaTest
    {
        [Fact]
        public void CanBeSerialized()
        {
            var peerSetDelta = new PeerSetDelta(
                new Peer(
                    PrivateKey.Generate().PublicKey,
                    new[] { new Uri("inproc://a") }
                ),
                DateTime.UtcNow,
                new[]
                {
                    new Peer(
                        PrivateKey.Generate().PublicKey,
                        new[] { new Uri("inproc://added") }),
                }.ToImmutableHashSet(),
                new[]
                {
                    new Peer(
                        PrivateKey.Generate().PublicKey,
                        new[] { new Uri("inproc://removed") }),
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
