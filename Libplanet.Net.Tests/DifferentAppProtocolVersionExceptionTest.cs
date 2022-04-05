using System;
using System.Collections.Immutable;
using System.IO;
using System.Linq;
using System.Runtime.Serialization.Formatters.Binary;
using Libplanet.Crypto;
using Xunit;

namespace Libplanet.Net.Tests
{
    public class DifferentAppProtocolVersionExceptionTest
    {
        [Fact]
        public void Serialization()
        {
            var random = new Random();
            var publicKey = new PrivateKey().PublicKey;
            var identity = new byte[8];
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
            random.NextBytes(identity);

            var e1 = new DifferentAppProtocolVersionException(
                "An error message",
                new Peer(publicKey),
                identity,
                apv1,
                apv2,
                false);
            var f = new BinaryFormatter();
            DifferentAppProtocolVersionException e2;

            using (var s = new MemoryStream())
            {
                f.Serialize(s, e1);
                s.Seek(0, SeekOrigin.Begin);
                e2 = (DifferentAppProtocolVersionException)f.Deserialize(s);
            }

            Assert.Equal(e1.Message, e2.Message);
            Assert.Equal(e1.Peer, e2.Peer);
            Assert.True(e1.Identity.SequenceEqual(e2.Identity));
            Assert.Equal(e1.Apv, e2.Apv);
            Assert.Equal(e1.PeerApv, e2.PeerApv);
            Assert.Equal(e1.Trusted, e2.Trusted);
        }
    }
}
